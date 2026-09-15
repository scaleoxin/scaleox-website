import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, MapPin, Globe, Sparkles, Navigation } from 'lucide-react';

interface ThreeHeroExpansionProps {
  onNodeSelect?: (cityName: string) => void;
}

export const ThreeHeroExpansion: React.FC<ThreeHeroExpansionProps> = ({ onNodeSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'pan-india' | 'local-only'>('pan-india');
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF7F4EC); // Warm Ivory matching brand

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 18, 32);
    camera.lookAt(0, 1, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff7e6, 1.4);
    dirLight.position.set(15, 25, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const accentLight = new THREE.PointLight(0x147D68, 2, 50); // Jade light
    accentLight.position.set(0, 8, 0);
    scene.add(accentLight);

    // Main Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Base Grid / Topography Plate
    const plateGeo = new THREE.CylinderGeometry(16, 17, 0.8, 64);
    const plateMat = new THREE.MeshStandardMaterial({
      color: 0xEEE9DD,
      roughness: 0.8,
      metalness: 0.1,
    });
    const plate = new THREE.Mesh(plateGeo, plateMat);
    plate.position.y = -0.4;
    plate.receiveShadow = true;
    rootGroup.add(plate);

    // Top subtle grid ring
    const gridHelper = new THREE.PolarGridHelper(15, 8, 8, 64, 0x182A55, 0xD5D0C0);
    gridHelper.position.y = 0.05;
    rootGroup.add(gridHelper);

    // Local 30-50 KM Boundary Ring (Amber / Brick)
    const localRingGeo = new THREE.RingGeometry(4.8, 5.2, 64);
    const localRingMat = new THREE.MeshBasicMaterial({
      color: 0xB8734A,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
    });
    const localRing = new THREE.Mesh(localRingGeo, localRingMat);
    localRing.rotation.x = -Math.PI / 2;
    localRing.position.y = 0.08;
    rootGroup.add(localRing);

    // Central Physical Institute Building (Architectural 3D model)
    const instituteGroup = new THREE.Group();
    instituteGroup.position.set(0, 0, 0);

    // Main Hall
    const buildingMat = new THREE.MeshStandardMaterial({
      color: 0x182A55, // Deep Indigo
      roughness: 0.3,
      metalness: 0.2,
    });
    const bldgGeo = new THREE.BoxGeometry(3.6, 2.8, 3.6);
    const bldgMesh = new THREE.Mesh(bldgGeo, buildingMat);
    bldgMesh.position.y = 1.4;
    bldgMesh.castShadow = true;
    bldgMesh.receiveShadow = true;
    instituteGroup.add(bldgMesh);

    // Roof Pillar / Entrance Portico
    const porticoMat = new THREE.MeshStandardMaterial({
      color: 0xF7F4EC,
      roughness: 0.5,
    });
    const porticoGeo = new THREE.BoxGeometry(2.2, 0.4, 4.2);
    const portico = new THREE.Mesh(porticoGeo, porticoMat);
    portico.position.y = 2.9;
    portico.castShadow = true;
    instituteGroup.add(portico);

    // Institute Digital Core Crystal (Glowing Jade Beacon)
    const crystalGeo = new THREE.OctahedronGeometry(0.8, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x147D68,
      emissive: 0x147D68,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.8,
    });
    const crystal = new THREE.Mesh(crystalGeo, crystalMat);
    crystal.position.y = 4.2;
    instituteGroup.add(crystal);

    // Base Steps
    const stepGeo = new THREE.BoxGeometry(4.4, 0.25, 4.4);
    const step = new THREE.Mesh(stepGeo, porticoMat);
    step.position.y = 0.12;
    step.receiveShadow = true;
    instituteGroup.add(step);

    rootGroup.add(instituteGroup);

    // Student Nodes across India (Coordinates in polar/cartesian layout)
    const nodesData = [
      { name: 'Patna (Bihar)', x: 9.5, z: -3.5, dist: '850 KM' },
      { name: 'Jaipur (Rajasthan)', x: -8.2, z: -2.8, dist: '420 KM' },
      { name: 'Bhopal (MP)', x: -2.5, z: 6.8, dist: '190 KM' },
      { name: 'Lucknow (UP)', x: 5.5, z: -7.5, dist: '640 KM' },
      { name: 'Pune (Maharashtra)', x: -7.0, z: 8.5, dist: '550 KM' },
      { name: 'Ranchi (Jharkhand)', x: 10.5, z: 2.2, dist: '980 KM' },
      { name: 'Raipur (Chhattisgarh)', x: 4.8, z: 7.8, dist: '490 KM' },
      { name: 'Guwahati (Assam)', x: 12.8, z: -8.2, dist: '1,450 KM' },
      { name: 'Indore Local (Within 15 KM)', x: 1.8, z: 1.5, dist: '12 KM', isLocal: true },
      { name: 'Ujjain Local (Within 45 KM)', x: -2.4, z: 2.8, dist: '48 KM', isLocal: true },
    ];

    const nodeMeshes: { mesh: THREE.Group; data: typeof nodesData[0]; line: THREE.Line }[] = [];

    nodesData.forEach((node) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(node.x, 0, node.z);

      // Node pin cylinder
      const pinMat = new THREE.MeshStandardMaterial({
        color: node.isLocal ? 0xB8734A : 0x147D68,
        emissive: node.isLocal ? 0xB8734A : 0x147D68,
        emissiveIntensity: 0.5,
        roughness: 0.3,
      });

      const sphereGeo = new THREE.SphereGeometry(node.isLocal ? 0.45 : 0.6, 16, 16);
      const sphere = new THREE.Mesh(sphereGeo, pinMat);
      sphere.position.y = 1.2;
      sphere.castShadow = true;
      nodeGroup.add(sphere);

      // Pulsing ring under node
      const ringGeo = new THREE.RingGeometry(0.3, 0.7, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: node.isLocal ? 0xB8734A : 0x147D68,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.08;
      nodeGroup.add(ring);

      // Connecting curved arc to institute
      const points: THREE.Vector3[] = [];
      const numPoints = 24;
      for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints;
        const currentX = THREE.MathUtils.lerp(0, node.x, t);
        const currentZ = THREE.MathUtils.lerp(0, node.z, t);
        const currentY = Math.sin(t * Math.PI) * (node.isLocal ? 1.5 : 3.8);
        points.push(new THREE.Vector3(currentX, currentY, currentZ));
      }

      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: node.isLocal ? 0xB8734A : 0x147D68,
        transparent: true,
        opacity: 0.5,
        linewidth: 2,
      });
      const line = new THREE.Line(curveGeo, curveMat);
      rootGroup.add(line);

      rootGroup.add(nodeGroup);
      nodeMeshes.push({ mesh: nodeGroup, data: node, line });
    });

    // Expanding pulse wave geometry
    const pulseGeo = new THREE.RingGeometry(0.5, 1.2, 64);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0x147D68,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
    });
    const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
    pulseMesh.rotation.x = -Math.PI / 2;
    pulseMesh.position.y = 0.09;
    rootGroup.add(pulseMesh);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle rotation of the whole stage
      rootGroup.rotation.y = elapsedTime * 0.12;

      // Crystal floating and spinning
      crystal.rotation.y = elapsedTime * 1.5;
      crystal.rotation.x = Math.sin(elapsedTime * 2) * 0.2;
      crystal.position.y = 4.2 + Math.sin(elapsedTime * 3) * 0.2;

      // Pulse ring expansion
      const pulseScale = (elapsedTime * 2.2) % 14 + 1;
      pulseMesh.scale.set(pulseScale, pulseScale, 1);
      const opacityFactor = Math.max(0, 1 - (pulseScale / 14));
      pulseMat.opacity = opacityFactor * 0.7;

      // Node visibility according to view mode
      nodeMeshes.forEach((item, idx) => {
        const isFar = !item.data.isLocal;
        if (viewMode === 'local-only' && isFar) {
          item.mesh.visible = false;
          item.line.visible = false;
        } else {
          item.mesh.visible = true;
          item.line.visible = true;
          // Floating bounce for nodes
          item.mesh.position.y = Math.sin(elapsedTime * 2.5 + idx) * 0.15;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 450;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [viewMode]);

  return (
    <div className="relative w-full h-[440px] md:h-[500px] rounded-2xl bg-gradient-to-b from-[#FAF8F3] to-[#F2EFE6] border border-[#E2E0D8] p-4 shadow-sm overflow-hidden flex flex-col justify-between">
      {/* Top Floating Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 z-10">
        <div className="flex items-center gap-2 bg-[#FFFFFF]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E2E0D8] shadow-xs text-xs font-semibold text-[#182A55]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#147D68] animate-pulse"></span>
          <span>Interactive 3D Expansion Metaphor</span>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-[#FFFFFF]/90 backdrop-blur-md p-1 rounded-xl border border-[#E2E0D8] text-xs font-medium text-[#17202A]">
          <button
            id="view-local-mode-btn"
            onClick={() => setViewMode('local-only')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              viewMode === 'local-only'
                ? 'bg-[#B8734A] text-white shadow-xs'
                : 'text-[#5F6B72] hover:text-[#182A55]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Local 30-50 KM Limit</span>
          </button>
          <button
            id="view-pan-india-mode-btn"
            onClick={() => setViewMode('pan-india')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              viewMode === 'pan-india'
                ? 'bg-[#182A55] text-white shadow-xs'
                : 'text-[#5F6B72] hover:text-[#182A55]'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-[#147D68]" />
            <span>ScaleOX Pan-India Expansion</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Mount */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Bottom Context Badge & Legend */}
      <div className="z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-[#FFFFFF]/90 backdrop-blur-md p-3 rounded-xl border border-[#E2E0D8] shadow-xs">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[#182A55]"></span>
            <span className="font-semibold text-[#182A55]">Physical Institute</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#B8734A]"></span>
            <span className="text-[#5F6B72]">Local Limit (30-50 KM)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#147D68]"></span>
            <span className="font-semibold text-[#147D68]">Pan-India Student Nodes</span>
          </div>
        </div>

        <div className="text-[11px] text-[#5F6B72] italic font-medium">
          {viewMode === 'pan-india'
            ? '✓ Your course reaches learners across states while offline lab stays active.'
            : '⚠️ Admissions capped strictly by daily commute & local town borders.'}
        </div>
      </div>
    </div>
  );
};
