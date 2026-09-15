import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'serve-project-assets',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (!req.url) return next();
            try {
              const cleanUrl = decodeURIComponent(req.url.split('?')[0]).replace(/^\//, '');
              if (!cleanUrl) return next();

              const searchLocations = [
                path.resolve(__dirname, 'public', cleanUrl),
                path.resolve(__dirname, 'assets', cleanUrl),
                path.resolve(__dirname, cleanUrl),
                path.resolve(__dirname, 'src/assets', cleanUrl),
              ];

              for (const candidate of searchLocations) {
                if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
                  const ext = path.extname(candidate).toLowerCase();
                  const mimeTypes: Record<string, string> = {
                    '.jpeg': 'image/jpeg',
                    '.jpg': 'image/jpeg',
                    '.png': 'image/png',
                    '.webp': 'image/webp',
                    '.svg': 'image/svg+xml',
                    '.gif': 'image/gif',
                  };
                  if (mimeTypes[ext]) {
                    res.setHeader('Content-Type', mimeTypes[ext]);
                    res.setHeader('Cache-Control', 'public, max-age=3600');
                    fs.createReadStream(candidate).pipe(res);
                    return;
                  }
                }
              }
            } catch {
              // Ignore
            }
            next();
          });
        },
        closeBundle() {
          const distDir = path.resolve(__dirname, 'dist');
          if (!fs.existsSync(distDir)) return;
          const searchDirs = [path.resolve(__dirname, 'assets'), path.resolve(__dirname, 'public')];
          for (const sDir of searchDirs) {
            if (fs.existsSync(sDir)) {
              for (const file of fs.readdirSync(sDir)) {
                if (/\.(jpeg|jpg|png|webp|svg|gif)$/i.test(file)) {
                  fs.copyFileSync(path.join(sDir, file), path.join(distDir, file));
                }
              }
            }
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
