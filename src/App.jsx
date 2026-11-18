import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundFX from './components/BackgroundFX';
import PresentationControls from './components/PresentationControls';
import SlideOverviewModal from './components/SlideOverviewModal';
import KeyboardHelpModal from './components/KeyboardHelpModal';
import RegistrationModal from './components/RegistrationModal';
import { soundManager } from './utils/sound';

// Slide components
import Slide1Hero from './slides/Slide1Hero';
import Slide2Video from './slides/Slide3WhySkillPro'; // Video content kept
import Slide3Eligibility from './slides/Slide4Eligibility';
import Slide4PrizesAndBenefits from './slides/Slide4PrizesAndBenefits'; // Combined Prizes & Benefits
import Slide5SuccessStory from './slides/Slide7SuccessStory';
import Slide6WhyAndTimeline from './slides/Slide6WhyAndTimeline'; // Combined Why Participate & Timeline
import Slide7GrandFinale from './slides/Slide10GrandFinale';

const SLIDES_META = [
  { id: 'slide-1', title: 'SKILL PRO 2K27', desc: 'District Level Mega Competition 2026-2027' },
  { id: 'slide-2', title: 'Official Teaser Video', desc: 'Cinematic teaser & competition glimpse' },
  { id: 'slide-3', title: 'Who Can Participate?', desc: 'Arts & Science, Engineering & Polytechnic institutions' },
  { id: 'slide-4', title: 'Prizes & Benefits', desc: '₹1,00,000 cash prizes, scholarships & free courses' },
  { id: 'slide-5', title: '2K26 Success Story', desc: '1,000+ registrations, ₹60,000+ cash awarded' },
  { id: 'slide-6', title: 'Why & Timeline', desc: 'Career development & key dates roadmap' },
  { id: 'slide-7', title: 'Grand Finale', desc: 'Be the Next Winner! Contact CAD POINT & AG NEXT GEN' },
];

const AUTOPLAY_DURATION = 9000; // 9 seconds per slide in autoplay mode

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [autoplayProgress, setAutoplayProgress] = useState(0);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const totalSlides = SLIDES_META.length;
  const wheelTimeoutRef = useRef(null);
  const autoplayTimerRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Navigate to next slide
  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev < totalSlides - 1) {
        setDirection(1);
        soundManager.playWhoosh(1);
        return prev + 1;
      }
      return prev;
    });
    setAutoplayProgress(0);
  }, [totalSlides]);

  // Navigate to previous slide
  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev > 0) {
        setDirection(-1);
        soundManager.playWhoosh(-1);
        return prev - 1;
      }
      return prev;
    });
    setAutoplayProgress(0);
  }, []);

  // Jump to specific slide index
  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides && index !== currentSlide) {
      setDirection(index > currentSlide ? 1 : -1);
      soundManager.playWhoosh(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      setAutoplayProgress(0);
    }
  }, [currentSlide, totalSlides]);

  // Toggle Fullscreen API
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  // Listen for fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Toggle Sound FX & Ambient
  const toggleSound = useCallback(() => {
    const newState = soundManager.toggleSound();
    setIsSoundOn(newState);
  }, []);

  // Toggle Autoplay
  const toggleAutoplay = useCallback(() => {
    setIsAutoplay((prev) => !prev);
    setAutoplayProgress(0);
  }, []);

  // Handle Autoplay timer loop
  useEffect(() => {
    if (!isAutoplay) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setAutoplayProgress(0);
      return;
    }

    const intervalStep = 50; // update progress every 50ms
    const stepIncrement = (intervalStep / AUTOPLAY_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setAutoplayProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isAutoplay, goToNext]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if typing inside an input/textarea/select
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrev();
      } else if (e.key >= '1' && e.key <= '7') {
        const targetIndex = parseInt(e.key, 10) - 1;
        goToSlide(targetIndex);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'o' || e.key === 'O') {
        e.preventDefault();
        setIsOverviewOpen((prev) => !prev);
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        toggleAutoplay();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        toggleSound();
      } else if (e.key === '?' || e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        setIsHelpOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsOverviewOpen(false);
        setIsHelpOpen(false);
        setIsRegistrationOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, goToSlide, toggleFullscreen, toggleAutoplay, toggleSound]);

  // Throttled Wheel / Trackpad Scroll Navigation
  useEffect(() => {
    const handleWheel = (e) => {
      if (isOverviewOpen || isHelpOpen || isRegistrationOpen) return;

      if (Math.abs(e.deltaY) < 30) return; // ignore slight vibrations

      if (wheelTimeoutRef.current) return;

      if (e.deltaY > 0) {
        goToNext();
      } else {
        goToPrev();
      }

      wheelTimeoutRef.current = setTimeout(() => {
        wheelTimeoutRef.current = null;
      }, 700);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
    };
  }, [goToNext, goToPrev, isOverviewOpen, isHelpOpen, isRegistrationOpen]);

  // Framer Motion slide variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 28 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 28 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 0:
        return <Slide1Hero onStartPresentation={goToNext} />;
      case 1:
        return <Slide2Video />;
      case 2:
        return <Slide3Eligibility />;
      case 3:
        return <Slide4PrizesAndBenefits />;
      case 4:
        return <Slide5SuccessStory />;
      case 5:
        return <Slide6WhyAndTimeline />;
      case 6:
        return <Slide7GrandFinale onOpenRegistration={() => setIsRegistrationOpen(true)} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#030712] font-sans text-slate-100 select-none">
      
      {/* Cinematic Animated Cyber Background */}
      <BackgroundFX />

      {/* Main Slide Deck Viewport (100vh) */}
      <main className="relative w-full h-full z-10 overflow-hidden flex flex-col justify-center">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex items-center justify-center"
          >
            {renderCurrentSlide()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Presenter Controls HUD */}
      <PresentationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={goToPrev}
        onNext={goToNext}
        onJumpTo={goToSlide}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        isAutoplay={isAutoplay}
        onToggleAutoplay={toggleAutoplay}
        autoplayProgress={autoplayProgress}
        isSoundOn={isSoundOn}
        onToggleSound={toggleSound}
        onToggleOverview={() => setIsOverviewOpen((prev) => !prev)}
        onToggleHelp={() => setIsHelpOpen((prev) => !prev)}
        slidesMeta={SLIDES_META}
      />

      {/* Slide Overview Grid Modal */}
      <SlideOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        slidesMeta={SLIDES_META}
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
      />

      {/* Keyboard Shortcuts Guide Modal */}
      <KeyboardHelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      {/* Registration & VIP Pass Generator Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </div>
  );
}

