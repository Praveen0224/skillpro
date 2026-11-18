
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Trophy, Coins, Gift, Sparkles,
  Award, Crown, Star, Medal,
  CalendarCheck, ChevronLeft, ChevronRight,
  Play, Pause
} from 'lucide-react';

import Winner1 from "../assets/winner1.jpg";
import Winner2 from "../assets/winner2.jpg";
import Winner3 from "../assets/winner3.jpg";

const winners = [
  {
    name: 'WINNER 01',
    position: '1ST PLACE',
    image: Winner1,
    fallback: '/assets/winner1.jpg',
    color: '#E8B943',
    icon: Crown
  },
  {
    name: 'WINNER 02',
    position: '2ND PLACE',
    image: Winner2,
    fallback: '/assets/winner2.jpg',
    color: '#9A83C9',
    icon: Medal
  },
  {
    name: 'WINNER 03',
    position: '3RD PLACE',
    image: Winner3,
    fallback: '/assets/winner3.jpg',
    color: '#D58A61',
    icon: Award
  }
];

const achievements = [
  {
    value: '1,000+',
    label: 'STUDENT REGISTRATIONS',
    icon: Users,
    color: '#E7B83F'
  },
  {
    value: '₹60,000+',
    label: 'CASH PRIZES AWARDED',
    icon: Coins,
    color: '#65A86B'
  },
  {
    value: 'HUNDREDS',
    label: 'FREE COURSES & GIFTS',
    icon: Gift,
    color: '#9B83CB'
  }
];

export default function Slide7SuccessStory() {
  const [activeWinner, setActiveWinner] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextWinner = () => {
    setActiveWinner(prev => (prev + 1) % winners.length);
  };

  const previousWinner = () => {
    setActiveWinner(prev =>
      (prev - 1 + winners.length) % winners.length
    );
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveWinner(prev => (prev + 1) % winners.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const active = winners[activeWinner];

  return (
    <section className="
      relative w-full h-full overflow-hidden
      bg-[#F3F0E8] text-[#171717]
      flex flex-col justify-between
      px-6 sm:px-10 md:px-14
      py-5 sm:py-7 select-none
    ">

      {/* BACKGROUND */}

      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="
            absolute -right-32 -top-32
            w-96 h-96 rounded-full
            bg-[#E8C75E]/20 blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="
            absolute -left-32 bottom-0
            w-96 h-96 rounded-full
            bg-purple-200/30 blur-3xl
          "
        />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(#333 0.7px, transparent 0.7px)',
            backgroundSize: '7px 7px'
          }}
        />

        <div className="
          absolute right-5 top-20
          text-[180px] md:text-[240px]
          font-black text-black/[0.035]
        ">
          26
        </div>
      </div>

      {/* TOP BORDER */}

      <div className="
        absolute top-0 left-0
        w-full h-2.5 bg-[#171717]
      "/>

      {/* HEADER */}

      <header className="
        relative z-10 flex items-center
        justify-between shrink-0
        border-b border-black/15 pb-3
      ">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >

          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-1 bg-[#D5A92E]" />

            <span className="
              text-[10px] sm:text-xs
              font-black tracking-[0.3em]
              text-[#A17B19]
            ">
              PREVIOUS EDITION • OUR ACHIEVEMENTS
            </span>
          </div>

          <h1 className="
            text-3xl sm:text-4xl md:text-5xl
            font-black tracking-[-0.055em]
            leading-tight
          ">
            SKILL PRO 2K26
            <span className="text-[#C69B29]"> SUCCESS STORY</span>
          </h1>

          <p className="
            mt-1 text-[10px] sm:text-sm
            font-bold tracking-widest text-gray-500
          ">
            CELEBRATING TALENT. REWARDING EXCELLENCE.
          </p>
        </motion.div>

        <motion.img
          src="/assets/skillprologo.png"
          alt="SkillPro"
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.12, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="
            w-14 h-14 sm:w-20 sm:h-20
            object-contain shrink-0
          "
        />

      </header>

      {/* MAIN CONTENT */}

      <main className="
        relative z-10 flex-1 min-h-0
        grid grid-cols-5 gap-4 sm:gap-7
        py-4 sm:py-5
      ">

        {/* LEFT: FULL HEIGHT WINNER SHOWCASE */}

        <div className="
          col-span-2 relative
          flex flex-col min-w-0 min-h-0
        ">

          {/* TITLE */}

          <div className="mb-3 shrink-0">

            <div className="flex items-center gap-2">

              <motion.div
                animate={{
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              >
                <Trophy className="
                  w-5 h-5 sm:w-7 sm:h-7
                  text-[#C69B29]
                "/>
              </motion.div>

              <h2 className="
                text-lg sm:text-2xl
                font-black tracking-tight
              ">
                OUR WINNERS
              </h2>

            </div>

            <p className="
              text-[9px] sm:text-xs
              font-bold tracking-widest
              text-gray-500 mt-1
            ">
              SKILL PRO 2K26 CHAMPIONS
            </p>

          </div>

          {/* FULL VERTICAL PHOTO SHOWCASE */}

          <div className="
            relative flex-1 min-h-0
            w-full
            perspective-1000
          ">

            {/* Decorative background cards */}

            <motion.div
              animate={{
                rotate: [-5, -3, -5],
                y: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="
                absolute inset-1
                bg-[#E7B83F]
                border-2 border-black
                shadow-[5px_5px_0px_#171717]
              "
            />

            <motion.div
              animate={{
                rotate: [4, 6, 4],
                y: [0, 5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="
                absolute inset-1
                bg-[#65A86B]
                border-2 border-black
              "
            />

            {/* WINNER IMAGE */}

            <AnimatePresence mode="wait">

              <motion.div
                key={activeWinner}
                initial={{
                  opacity: 0,
                  x: 80,
                  rotateY: 25,
                  scale: 0.92
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  x: -80,
                  rotateY: -20,
                  scale: 0.94
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="
                  absolute inset-0
                  bg-white border-2 border-black
                  p-2 sm:p-3
                  shadow-[7px_8px_0px_rgba(0,0,0,0.2)]
                  overflow-hidden
                "
              >

                <div className="
                  relative w-full h-full
                  overflow-hidden bg-[#DDD8CB]
                ">

                  {/* Vertical portrait image */}

                  <motion.img
                    src={active.image}
                    alt={active.name}
                    className="
                      w-full h-full
                      object-cover object-center
                    "
                    initial={{ scale: 1.12 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.06 }}
                    transition={{
                      duration: 1.2,
                      ease: 'easeOut'
                    }}
                  />

                  {/* Image overlay */}

                  <div className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/90 via-black/10 to-black/20
                    pointer-events-none
                  "/>

                  {/* Top position badge */}

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="
                      absolute top-3 left-3
                      px-3 py-2
                      text-black text-[9px] sm:text-xs
                      font-black tracking-widest
                      shadow-lg
                    "
                    style={{
                      backgroundColor: active.color
                    }}
                  >
                    {active.position}
                  </motion.div>

                  {/* Animated crown / medal */}

                  <motion.div
                    animate={{
                      y: [0, -7, 0],
                      rotate: [-5, 5, -5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                    className="
                      absolute top-3 right-3
                      w-10 h-10 sm:w-12 sm:h-12
                      rounded-full
                      bg-white/20 backdrop-blur-md
                      border border-white/30
                      flex items-center justify-center
                    "
                  >
                    <active.icon
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      style={{ color: active.color }}
                    />
                  </motion.div>

                  {/* Winner details */}

                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.25,
                      duration: 0.7
                    }}
                    className="
                      absolute bottom-4 left-3 right-3
                      flex items-end justify-between
                    "
                  >

                    <div>

                      <p className="
                        text-white text-xl sm:text-3xl
                        font-black tracking-tight
                        drop-shadow-lg
                      ">
                        {active.name}
                      </p>

                      <p className="
                        text-white/80 text-[9px] sm:text-xs
                        font-bold tracking-[0.2em] mt-1
                      ">
                        SKILL PRO 2K26
                      </p>

                      <div
                        className="w-12 h-1 mt-2"
                        style={{
                          backgroundColor: active.color
                        }}
                      />

                    </div>

                    <Trophy className="
                      w-8 h-8 sm:w-11 sm:h-11
                      text-[#F2C744] drop-shadow-lg
                    "/>

                  </motion.div>

                </div>

              </motion.div>

            </AnimatePresence>

            {/* FLOATING SPARKLES */}

            <motion.div
              animate={{
                rotate: 360,
                scale: [0.8, 1.3, 0.8]
              }}
              transition={{
                duration: 5,
                repeat: Infinity
              }}
              className="
                absolute -top-4 -right-3
                text-[#C69B29] pointer-events-none
              "
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>

          </div>

          {/* INTERACTIVE CONTROLS */}

          <div className="
            flex items-center justify-between
            gap-2 mt-3 shrink-0
          ">

            {/* Previous */}

            <motion.button
              whileHover={{ scale: 1.12, x: -3 }}
              whileTap={{ scale: 0.85 }}
              onClick={previousWinner}
              className="
                w-8 h-8 sm:w-10 sm:h-10
                flex items-center justify-center
                bg-[#171717] text-white
                rounded-full shadow-md
                hover:bg-[#C69B29]
                transition-colors
              "
              aria-label="Previous winner"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Winner indicators */}

            <div className="flex items-center justify-center gap-2">

              {winners.map((winner, index) => (
                <motion.button
                  key={winner.name}
                  onClick={() => setActiveWinner(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  animate={{
                    width: activeWinner === index ? 30 : 9
                  }}
                  transition={{ duration: 0.35 }}
                  className="
                    h-2 rounded-full
                    transition-colors duration-300
                  "
                  style={{
                    backgroundColor:
                      activeWinner === index
                        ? winner.color
                        : '#00000030'
                  }}
                  aria-label={`Show ${winner.name}`}
                />
              ))}

            </div>

            {/* Play / Pause */}

            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="
                w-8 h-8 sm:w-10 sm:h-10
                flex items-center justify-center
                bg-[#C69B29] text-black
                rounded-full shadow-md
                hover:bg-[#E7B83F]
                transition-colors
              "
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying
                ? <Pause className="w-4 h-4" />
                : <Play className="w-4 h-4 ml-0.5" />
              }
            </motion.button>

            {/* Next */}

            <motion.button
              whileHover={{ scale: 1.12, x: 3 }}
              whileTap={{ scale: 0.85 }}
              onClick={nextWinner}
              className="
                w-8 h-8 sm:w-10 sm:h-10
                flex items-center justify-center
                bg-[#171717] text-white
                rounded-full shadow-md
                hover:bg-[#C69B29]
                transition-colors
              "
              aria-label="Next winner"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>

          </div>

          <motion.p
            key={activeWinner}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              text-center mt-2
              text-[9px] sm:text-xs
              font-black tracking-[0.2em]
              text-gray-500 shrink-0
            "
          >
            CELEBRATING OUR CHAMPIONS
          </motion.p>

        </div>

        {/* RIGHT: ACHIEVEMENT STATS */}

        <div className="
          col-span-3 flex flex-col
          justify-center gap-3 sm:gap-4
          min-w-0
        ">

          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  x: 70,
                  scale: 0.9
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.2,
                  ease: 'easeOut'
                }}
                whileHover={{
                  x: -8,
                  scale: 1.035,
                  boxShadow: '8px 9px 0px rgba(0,0,0,0.16)'
                }}
                whileTap={{ scale: 0.98 }}
                className="
                  relative flex items-center
                  gap-3 sm:gap-5
                  bg-[#FFFEFA]
                  border border-black/10
                  p-3 sm:p-5
                  shadow-[4px_5px_0px_rgba(0,0,0,0.12)]
                  overflow-hidden cursor-pointer
                "
              >

                {/* Side accent */}

                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.2
                  }}
                  className="
                    absolute left-0 top-0
                    w-1.5
                  "
                  style={{
                    backgroundColor: item.color
                  }}
                />

                {/* Icon */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, 0]
                  }}
                  whileHover={{
                    rotate: 15,
                    scale: 1.15
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                  className="
                    w-11 h-11 sm:w-16 sm:h-16
                    shrink-0 flex items-center
                    justify-center rounded-xl
                  "
                  style={{
                    backgroundColor: `${item.color}25`,
                    color: item.color
                  }}
                >
                  <Icon className="
                    w-6 h-6 sm:w-9 sm:h-9
                  "/>
                </motion.div>

                {/* Number and title */}

                <div className="min-w-0">

                  <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.55 + index * 0.2,
                      duration: 0.6
                    }}
                    className="
                      text-2xl sm:text-4xl md:text-5xl
                      font-black tracking-[-0.05em]
                      leading-tight
                    "
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </motion.h2>

                  <p className="
                    text-[9px] sm:text-sm
                    font-black tracking-wider
                    text-[#171717]
                  ">
                    {item.label}
                  </p>

                </div>

                <motion.div
                  animate={{
                    rotate: [0, 15, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="absolute right-3 top-3"
                >
                  <Star className="
                    w-4 h-4 text-black/10
                  "/>
                </motion.div>

              </motion.div>
            );
          })}

          {/* 2K27 ANNOUNCEMENT */}

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            whileHover={{
              scale: 1.025,
              y: -4
            }}
            className="
              relative bg-[#171717]
              text-white p-3 sm:p-5
              shadow-[5px_5px_0px_#C69B29]
              overflow-hidden cursor-pointer
            "
          >

            <motion.div
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="
                absolute top-0 left-0
                w-1/2 h-full
                bg-gradient-to-r
                from-transparent via-white/10 to-transparent
                pointer-events-none
              "
            />

            <div className="
              relative flex items-center
              justify-between gap-2
            ">

              <div>

                <div className="
                  flex items-center gap-2
                  text-[#F2C744]
                  text-[9px] sm:text-xs
                  font-black tracking-widest
                ">
                  <CalendarCheck className="w-4 h-4" />
                  NEXT EDITION
                </div>

                <h3 className="
                  text-base sm:text-2xl
                  font-black mt-1
                ">
                  SKILL PRO 2K27
                </h3>

                <p className="
                  text-[9px] sm:text-xs
                  font-bold text-gray-300
                ">
                  BIGGER DREAMS. BIGGER REWARDS.
                </p>

              </div>

              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity
                }}
                className="text-right shrink-0"
              >

                <p className="
                  text-[8px] sm:text-[10px]
                  text-[#F2C744] font-bold
                ">
                  PRIZE POOL
                </p>

                <p className="
                  text-xl sm:text-3xl
                  font-black text-[#F2C744]
                ">
                  ₹1,00,000
                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </main>

      {/* FOOTER */}

      <footer className="
        relative z-10 flex items-center
        justify-between border-t border-black/15
        pt-3 shrink-0
      ">

        <motion.img
          src="/assets/cadlogo.jpeg"
          alt="CADPOINT"
          whileHover={{ scale: 1.08 }}
          className="
            h-8 sm:h-10 w-auto
            max-w-[30%] object-contain
          "
        />

        <div className="
          flex items-center gap-2
          text-[9px] sm:text-[11px]
          font-black tracking-[0.2em]
          text-gray-500
        ">

          <motion.span
            animate={{
              scale: [1, 1.4, 1],
              opacity: [1, 0.6, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            className="
              w-2 h-2 rounded-full bg-[#C69B29]
            "
          />

          SKILL PRO 2K27

        </div>

        <motion.img
          src="/assets/ag.png"
          alt="AG NextGen Technologies"
          whileHover={{ scale: 1.08 }}
          className="
            h-8 sm:h-10 w-auto
            max-w-[30%] object-contain
          "
        />

      </footer>

      {/* BOTTOM BORDER */}

      <div className="
        absolute bottom-0 left-0
        w-full h-2.5 bg-[#171717]
      "/>

    </section>
  );
}
