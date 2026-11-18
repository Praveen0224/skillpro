import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

export default function SlideOverviewModal({
  isOpen,
  onClose,
  slidesMeta,
  currentSlide,
  onSelectSlide
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.15)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-cyan-500/20">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>KEYNOTE SLIDE DECK MATRIX</span>
              </div>
              <h2 className="text-2xl font-bold text-white mt-1">Jump to Any Section</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Grid of 7 Slides */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {slidesMeta.map((slide, idx) => {
              const isActive = currentSlide === idx;
              return (
                <motion.div
                  key={slide.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onSelectSlide(idx);
                    onClose();
                  }}
                  className={`group relative flex flex-col justify-between p-3.5 rounded-xl cursor-pointer border transition-all ${
                    isActive
                      ? 'bg-cyan-950/40 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                      : 'bg-slate-950/60 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {isActive && (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-cyan-300 uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm line-clamp-1">
                      {slide.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {slide.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 group-hover:text-cyan-400 transition-colors">
                    <span>Press {idx + 1}</span>
                    <Play className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick tips footer */}
          <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <span>Tip: Use number keys [1 - 8] anytime to switch slides instantly.</span>
            <span>Press ESC or O to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

