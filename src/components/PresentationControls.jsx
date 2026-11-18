import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Grid, 
  HelpCircle,
  Sparkles
} from 'lucide-react';

export default function PresentationControls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onJumpTo,
  isFullscreen,
  onToggleFullscreen,
  isAutoplay,
  onToggleAutoplay,
  autoplayProgress,
  isSoundOn,
  onToggleSound,
  onToggleOverview,
  onToggleHelp,
  slidesMeta
}) {
  return (
    <>
      {/* Top Holographic Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900/80 z-50 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 transition-all duration-500 ease-out shadow-[0_0_12px_rgba(0,240,255,0.8)]"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
        {/* Autoplay mini progress bar */}
        {isAutoplay && (
          <div 
            className="absolute top-0 left-0 h-full bg-cyan-300 opacity-60 transition-all duration-100 ease-linear"
            style={{ width: `${autoplayProgress}%` }}
          />
        )}
      </div>

      {/* Floating Presenter HUD Bottom Bar */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-slate-950/80 backdrop-blur-xl border border-cyan-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        
        {/* Slide Counter */}
        <div className="flex items-center px-2 py-1 font-mono text-xs font-semibold text-cyan-400 bg-cyan-950/40 rounded-full border border-cyan-500/30">
          <span className="text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-cyan-500/50 mx-1">/</span>
          <span className="text-cyan-400/70">{String(totalSlides).padStart(2, '0')}</span>
        </div>

        <div className="h-4 w-px bg-slate-800 hidden sm:block" />

        {/* Slide Navigation Dots */}
        <div className="hidden lg:flex items-center gap-1.5 px-1">
          {slidesMeta.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => onJumpTo(idx)}
              className="group relative p-1 focus:outline-none"
              title={`${idx + 1}. ${slide.title}`}
            >
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx 
                    ? 'w-7 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(0,240,255,0.8)]' 
                    : 'w-2 bg-slate-700 hover:bg-cyan-400/50'
                }`}
              />
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[11px] font-medium text-slate-200 bg-slate-900 border border-cyan-500/30 rounded whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
                <span className="text-cyan-400 mr-1.5">0{idx + 1}</span>
                {slide.title}
              </div>
            </button>
          ))}
        </div>

        <div className="h-4 w-px bg-slate-800" />

        {/* Prev Button */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-1.5 sm:p-2 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 disabled:opacity-30 disabled:pointer-events-none transition-all"
          title="Previous Slide (← / Up)"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-1.5 sm:p-2 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 disabled:opacity-30 disabled:pointer-events-none transition-all"
          title="Next Slide (→ / Space / Down)"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="h-4 w-px bg-slate-800" />

        {/* Autoplay Toggle */}
        <button
          onClick={onToggleAutoplay}
          className={`p-1.5 sm:p-2 rounded-full transition-all ${
            isAutoplay 
              ? 'text-cyan-300 bg-cyan-500/20 shadow-[0_0_10px_rgba(0,240,255,0.4)]' 
              : 'text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10'
          }`}
          title={isAutoplay ? 'Pause Autoplay (P)' : 'Start Autoplay (P)'}
        >
          {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        {/* Sound Toggle */}
        <button
          onClick={onToggleSound}
          className={`p-1.5 sm:p-2 rounded-full transition-all ${
            isSoundOn 
              ? 'text-purple-300 bg-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.4)]' 
              : 'text-slate-400 hover:text-purple-400 hover:bg-purple-500/10'
          }`}
          title={isSoundOn ? 'Sound FX On (M)' : 'Sound FX Muted (M)'}
        >
          {isSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        {/* Slide Overview Grid Toggle */}
        <button
          onClick={onToggleOverview}
          className="p-1.5 sm:p-2 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all hidden sm:block"
          title="Slide Overview (O)"
        >
          <Grid className="w-4 h-4" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          className="p-1.5 sm:p-2 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
          title={isFullscreen ? 'Exit Fullscreen (F / Esc)' : 'Enter Fullscreen (F)'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        {/* Help Keyboard Modal Toggle */}
        <button
          onClick={onToggleHelp}
          className="p-1.5 sm:p-2 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all hidden md:block"
          title="Keyboard Shortcuts (?)"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>

      {/* Floating Side Quick Click Targets for Presentation Clickers */}
      <button 
        onClick={onPrev}
        disabled={currentSlide === 0}
        aria-label="Previous Slide"
        className="fixed left-2 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-950/40 hover:bg-cyan-950/60 text-slate-400 hover:text-cyan-300 border border-slate-800/80 hover:border-cyan-500/40 opacity-30 hover:opacity-100 transition-all disabled:opacity-0 pointer-events-auto"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        aria-label="Next Slide"
        className="fixed right-2 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-950/40 hover:bg-cyan-950/60 text-slate-400 hover:text-cyan-300 border border-slate-800/80 hover:border-cyan-500/40 opacity-30 hover:opacity-100 transition-all disabled:opacity-0 pointer-events-auto"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
}

