import React, { useState } from 'react';
import { RESOURCES_DATA } from '../data/content';
import { BookOpen, FileText, CheckCircle2, Video, ArrowRight, Download, Search, Sparkles } from 'lucide-react';
import { ResourceItem } from '../types';

interface ResourcesPageProps {
  onOpenStrategyCall: () => void;
  onOpenMasterclass: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onOpenStrategyCall,
  onOpenMasterclass,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeReadingItem, setActiveReadingItem] = useState<ResourceItem | null>(null);

  const categories = ['All', 'Guide', 'Checklist', 'Article', 'Case Study'];

  const filteredResources = RESOURCES_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.hindiSummary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20 bg-[#F7F4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#147D68] uppercase tracking-wider bg-[#DDEFE9] px-3 py-1 rounded-full">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Practical Knowledge for Institute Owners</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#182A55] tracking-tight">
            Resources
          </h1>

          <p className="text-base sm:text-lg text-[#5F6B72] leading-relaxed">
            Education business owners के लिए practical ideas, guides और strategies.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-[#E2E0D8] shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#182A55] text-white shadow-2xs'
                    : 'bg-[#FAF8F3] text-[#5F6B72] hover:text-[#182A55]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#5F6B72] absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search guides & blueprints..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
            />
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E2E0D8] hover:border-[#182A55] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:shadow-xs group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#147D68] bg-[#DDEFE9] px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-xs text-[#5F6B72] font-medium">
                    {item.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#182A55] group-hover:text-[#147D68] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-[#B8734A] bg-[#FAF8F3] p-2.5 rounded-lg border border-[#E2E0D8]">
                  {item.hindiSummary}
                </p>

                <p className="text-xs sm:text-sm text-[#5F6B72] leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E0D8] flex items-center justify-between">
                <button
                  onClick={() => setActiveReadingItem(item)}
                  className="text-xs font-extrabold text-[#182A55] hover:text-[#147D68] flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Full Article & Checklist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {item.downloadableBadge && (
                  <span className="text-[11px] font-bold text-[#147D68] bg-[#DDEFE9] px-2 py-0.5 rounded-md">
                    {item.downloadableBadge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Reading Modal */}
        {activeReadingItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
            <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-[#E2E0D8] shadow-2xl p-6 sm:p-10 my-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E0D8]">
                <span className="text-xs font-bold text-[#147D68] bg-[#DDEFE9] px-3 py-1 rounded-full">
                  {activeReadingItem.category} • {activeReadingItem.readTime}
                </span>
                <button
                  onClick={() => setActiveReadingItem(null)}
                  className="text-xs font-bold text-[#5F6B72] hover:text-[#182A55] bg-[#FAF8F3] px-3 py-1.5 rounded-lg border border-[#E2E0D8] cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-black text-[#182A55] leading-tight">
                  {activeReadingItem.title}
                </h2>
                <div className="text-sm font-semibold text-[#B8734A] bg-[#FAF8F3] p-3 rounded-xl border border-[#E2E0D8]">
                  {activeReadingItem.hindiSummary}
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#17202A] leading-relaxed">
                {activeReadingItem.content.map((para, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 bg-[#FAF8F3] p-4 rounded-xl border border-[#E2E0D8]">
                    <CheckCircle2 className="w-5 h-5 text-[#147D68] shrink-0 mt-0.5" />
                    <span>{para}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E2E0D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setActiveReadingItem(null);
                    onOpenStrategyCall();
                  }}
                  className="w-full sm:w-auto bg-[#182A55] hover:bg-[#0F1C3D] text-white font-bold py-3 px-6 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer cta-btn-shadow cta-pulse-btn"
                >
                  <span>Apply This on a 1:1 Strategy Call</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E8C8B7]" />
                </button>
                <button
                  onClick={() => setActiveReadingItem(null)}
                  className="w-full sm:w-auto text-xs font-semibold text-[#5F6B72] hover:underline"
                >
                  Done Reading
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
