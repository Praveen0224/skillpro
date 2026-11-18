
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import skillProVideo from '../assets/skillprovid.mp4';

const highlights = [
  {
    title: 'DREAM BIG',
    subtitle: 'Your Future Starts With a Vision',
    highlight: 'VISION',
  },
  {
    title: 'LEARN. BUILD. GROW.',
    subtitle: 'Turn Your Knowledge Into Real Skills',
    highlight: 'REAL SKILLS',
  },
  {
    title: 'THINK BEYOND',
    subtitle: 'Explore Technology. Discover Possibilities.',
    highlight: 'POSSIBILITIES',
  },
  {
    title: 'BE INDUSTRY READY',
    subtitle: 'Prepare Today. Lead Tomorrow.',
    highlight: 'LEAD TOMORROW',
  },
];

export default function Slide3WhySkillPro() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const active = highlights[activeIndex];

  return (
    <section className="relative h-full w-full overflow-hidden bg-black">

      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-contain"
        src={skillProVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      {/* Animated Text */}
      <div className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 45, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -35, scale: 1.04 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="max-w-5xl text-center"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.3em' }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-5 text-sm md:text-xl font-semibold uppercase text-white/90"
            >
              WHY SKILLPRO?
            </motion.p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-tight text-white drop-shadow-2xl">
              {active.title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={
                    active.highlight.includes(word)
                      ? 'text-yellow-400'
                      : 'text-white'
                  }
                >
                  {word}{' '}
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-6 text-lg sm:text-xl md:text-3xl font-medium text-white drop-shadow-lg"
            >
              {active.subtitle}
            </motion.p>

            {/* Animated gold underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '110px' }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="h-1.5 rounded-full bg-yellow-400 mx-auto mt-7"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom progress indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 pointer-events-none">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            animate={{
              width: activeIndex === index ? 38 : 10,
              opacity: activeIndex === index ? 1 : 0.45,
            }}
            className="h-2 rounded-full bg-yellow-400"
          />
        ))}
      </div>

    </section>
  );
}
