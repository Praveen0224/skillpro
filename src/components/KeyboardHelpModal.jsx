import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Command, Monitor, ArrowRight, ArrowLeft, Space, Volume2, Play, Grid } from 'lucide-react';

export default function KeyboardHelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '→ / Space / ↓', desc: 'Next slide' },
    { key: '← / ↑', desc: 'Previous slide' },
    { key: 'F', desc: 'Toggle Fullscreen Mode' },
    { key: 'O', desc: 'Toggle Slide Overview Grid' },
    { key: 'P', desc: 'Toggle Autoplay presentation' },
    { key: 'M', desc: 'Toggle Audio SFX & Ambient' },
    { key: '1 - 7', desc: 'Jump to specific slide 1 through 7' },
    { key: 'Esc', desc: 'Close dialog / Exit fullscreen' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,240,255,0.2)]"
        >
          <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20">
            <div className="flex items-center gap-2">
              <Command className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Presenter Shortcuts</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="divide-y divide-slate-800/80 my-4">
            {shortcuts.map((sc, i) => (
              <div key={i} className="py-2.5 flex items-center justify-between text-sm">
                <span className="text-slate-300">{sc.desc}</span>
                <kbd className="px-2.5 py-1 text-xs font-mono font-semibold text-cyan-300 bg-slate-950 border border-cyan-500/30 rounded shadow">
                  {sc.key}
                </kbd>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 text-center">
            <p className="text-xs text-slate-400 font-mono">
              Designed for smooth presentation on projectors & displays.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

