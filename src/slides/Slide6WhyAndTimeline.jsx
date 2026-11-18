
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Rocket,
  MapPin,
  Sparkles,
  ArrowRight,
  Building2,
  Clock,
  ShieldCheck,
  Zap,
  Cpu,
  Globe2,
  ChevronRight,
  Star,
  Target
} from 'lucide-react';

import { soundManager } from '../utils/sound';

const centers = [
  {
    id: 0,
    title: 'CAD POINT (Nagercoil)',
    description: 'Near Tower Junction & College Road',
    tag: 'Authorized Training Center',
    icon: MapPin,
    color: '#6D28A8',
    light: '#F3E8FF'
  },
  {
    id: 1,
    title: 'CAD POINT (Marthandam)',
    description: 'Main Junction, Kanyakumari Dist.',
    tag: 'Authorized Training Center',
    icon: MapPin,
    color: '#6D28A8',
    light: '#F3E8FF'
  },
  {
    id: 2,
    title: 'AG NEXT GEN Technologies',
    description: 'Enterprise & Tech Systems Wing',
    tag: 'Technology Partner',
    icon: Building2,
    color: '#6D28A8',
    light: '#EDE9FE'
  }
];

const floatingItems = [
  { Icon: Cpu, x: '8%', y: '20%', delay: 0 },
  { Icon: Globe2, x: '88%', y: '17%', delay: 0.8 },
  { Icon: Zap, x: '92%', y: '70%', delay: 1.4 },
  { Icon: Target, x: '5%', y: '76%', delay: 0.5 }
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Slide10GrandFinale({ onOpenRegistration }) {

  const [activeCenter, setActiveCenter] = useState(null);

  const handleJoin = () => {
    soundManager.playChirp();

    if (onOpenRegistration) {
      onOpenRegistration();
    }
  };

  return (
    <section className="
      relative flex h-full w-full flex-col
      justify-between overflow-hidden
      bg-[#F1F0F1] px-5 sm:px-8 md:px-12
      py-4 sm:py-5
      text-[#4B087A]
      select-none isolate
    ">

      {/* POSTER-STYLE YELLOW FOOTER ACCENT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-16 sm:h-20 w-full bg-[#FFD400]"
        style={{ clipPath: 'polygon(0 28%, 100% 0, 100% 100%, 0 100%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-16 sm:h-20 w-24 sm:w-36 bg-[#4B087A]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />

      {/* BACKGROUND ATMOSPHERE */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Blue gradient */}

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="
            absolute -right-32 -top-32
            w-[450px] h-[450px]
            rounded-full bg-purple-200/40 blur-[100px]
          "
        />

        {/* Cyan gradient */}

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -25, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="
            absolute -bottom-40 -left-32
            w-[450px] h-[450px]
            rounded-full bg-purple-200/35 blur-[100px]
          "
        />

        {/* Subtle pattern */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(#6b21a8 1px, transparent 1px)',
            backgroundSize: '22px 22px'
          }}
        />

        {/* Floating technology icons */}

        {floatingItems.map(({ Icon, x, y, delay }, index) => (
          <motion.div
            key={index}
            animate={{
              opacity: [0.12, 0.3, 0.12],
              y: [0, -18, 0],
              rotate: [0, 12, 0],
              scale: [1, 1.12, 1]
            }}
            transition={{
              duration: 5,
              delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{ left: x, top: y }}
            className="absolute text-purple-800"
          >
            <Icon size={30} />
          </motion.div>
        ))}

        {/* Decorative orbit */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="
            absolute top-[18%] right-[10%]
            w-48 h-48 sm:w-72 sm:h-72
            rounded-full border border-purple-400/10
          "
        >
          <div className="
            absolute top-5 left-8
            w-3 h-3 rounded-full bg-purple-700/40
          "/>
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="
            absolute bottom-[10%] left-[8%]
            w-40 h-40 sm:w-64 sm:h-64
            rounded-full border border-purple-400/15
          "
        />

        {/* Top accent */}

        <div className="
          absolute left-0 top-0
          h-1.5 w-full
          bg-gradient-to-r from-[#4B087A]
          via-purple-700 to-[#FFD400]
        "/>

      </div>


      {/* HEADER */}

      <header className="
        relative z-20 flex shrink-0
        items-center justify-between
        border-b border-purple-100
        pb-3 sm:pb-4
      ">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="mb-1.5 flex items-center gap-2">

            <motion.span
              animate={{ width: [24, 40, 24] }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
              className="h-1 rounded-full bg-purple-800"
            />

            <span className="
              text-[9px] sm:text-xs
              font-black uppercase
              tracking-[0.3em] text-purple-800
            ">
              SKILL PRO 2K27
            </span>

          </div>

          <h1 className="
            text-2xl sm:text-3xl md:text-4xl
            font-black tracking-tight
            text-[#4B087A]
          ">
            GRAND <span className="text-purple-800">FINALE</span>
          </h1>

          <p className="
            mt-1 text-[10px] sm:text-sm
            font-bold italic text-purple-700
          ">
            Be the Next Winner!
          </p>

        </motion.div>

        {/* Company logos */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 sm:gap-5"
        >

          <motion.img
            src="/assets/cadlogo.jpeg"
            alt="CADPOINT"
            whileHover={{ scale: 1.1, rotate: -3 }}
            className="
              h-9 sm:h-12 md:h-14
              w-auto max-w-[100px]
              object-contain
            "
          />

          <motion.img
            src="/assets/ag.png"
            alt="AG NextGen Technologies"
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="
              h-9 sm:h-12 md:h-14
              w-auto max-w-[110px]
              object-contain
            "
          />

        </motion.div>

      </header>


      {/* MAIN POSTER HERO */}

      <main className="
        relative z-10 flex-1 min-h-0
        w-full max-w-7xl mx-auto
        flex flex-col justify-center
        items-center py-3 sm:py-4
      ">

        {/* SKILLPRO LOGO STAGE */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
            y: -40
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 90
          }}
          className="
            relative z-10
            flex flex-col items-center
          "
        >

          {/* Animated orbit */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-40 h-40 sm:w-56 sm:h-56
              md:w-64 md:h-64
              rounded-full border border-dashed
              border-purple-300/60
            "
          >
            <div className="
              absolute top-5 left-8
              w-3 h-3 rounded-full
              bg-purple-400 shadow-[0_0_15px_#A855F7]
            "/>
          </motion.div>

          {/* Glow */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.55, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
            className="
              absolute inset-0
              rounded-full bg-purple-600/30
              blur-3xl
            "
          />

          {/* Main SkillPro logo */}

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 5, 0, -5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            whileHover={{
              scale: 1.1,
              rotateY: 12,
              rotateX: -8
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative z-10 cursor-pointer"
          >

            <img
              src="/assets/skillprologo.png"
              alt="SkillPro Logo"
              className="
                w-32 h-32
                sm:w-44 sm:h-44
                md:w-52 md:h-52
                object-contain
                drop-shadow-[0_15px_25px_rgba(30,64,175,0.25)]
              "
            />

          </motion.div>

          {/* Floating trophy */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [-8, 8, -8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
            className="
              absolute -right-9 top-5
              sm:-right-16 sm:top-8
              text-amber-400
              drop-shadow-lg
            "
          >
            <Trophy className="w-8 h-8 sm:w-12 sm:h-12"/>
          </motion.div>

          {/* Floating sparkles */}

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
              absolute -left-8 top-12
              sm:-left-14
              text-purple-600
            "
          >
            <Sparkles size={28}/>
          </motion.div>

          <motion.div
            animate={{
              rotate: [0, 20, -20, 0],
              y: [0, -8, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            className="
              absolute bottom-2 -left-7
              text-amber-400
            "
          >
            <Star size={22}/>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="
              relative z-10 mt-1
              text-[9px] sm:text-xs
              font-black tracking-[0.35em]
              text-purple-800
            "
          >
            DISTRICT-LEVEL MEGA TECHNICAL CHALLENGE
          </motion.span>

        </motion.div>


        {/* GRAND FINALE TYPOGRAPHY */}

        <div className="
          relative z-10
          text-center mt-3 sm:mt-4
          w-full
        ">

          <motion.h2
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3
            }}
            className="
              text-4xl sm:text-6xl
              md:text-7xl lg:text-8xl
              font-black tracking-[-0.06em]
              leading-none text-[#4B087A]
            "
          >
            GRAND
          </motion.h2>

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
              rotate: -6
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: -2
            }}
            transition={{
              duration: 0.9,
              delay: 0.5
            }}
            whileHover={{
              scale: 1.04,
              rotate: 0
            }}
            className="
              relative inline-block
              mt-1 px-7 sm:px-12
              py-2 sm:py-3
              bg-gradient-to-r
              from-amber-300 via-yellow-300
              to-amber-400
              shadow-[0_8px_0px_rgba(75,8,122,0.16)]
            "
          >

            <motion.div
              animate={{ x: ['-150%', '250%'] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="
                absolute inset-y-0 left-0
                w-1/3
                bg-gradient-to-r
                from-transparent via-white/35 to-transparent
                skew-x-[-25deg]
                pointer-events-none
              "
            />

            <h2 className="
              relative z-10
              text-4xl sm:text-6xl
              md:text-7xl lg:text-8xl
              font-black tracking-[-0.06em]
              text-[#4B087A] leading-none
            ">
              FINALE
            </h2>

            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity
              }}
              className="
                absolute -right-4 -top-5
                text-purple-800
              "
            >
              <Sparkles size={30}/>
            </motion.div>

          </motion.div>

          {/* Slogan */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-4 sm:mt-5 space-y-1"
          >

            <p className="
              text-base sm:text-xl
              md:text-2xl font-black
              text-[#4B087A]
            ">
              Take the Leap. Prove Your Talent.
            </p>

            <p className="
              text-sm sm:text-lg
              font-bold text-purple-800
            ">
              Secure Your Future.
            </p>

          </motion.div>

        </div>


        {/* REGISTRATION CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="
            relative z-10
            flex flex-col items-center
            gap-2 mt-5 sm:mt-6
          "
        >

          <motion.button
            onClick={handleJoin}
            whileHover={{
              scale: 1.07,
              y: -5,
              boxShadow: '0 22px 50px rgba(109,40,168,0.4)'
            }}
            whileTap={{
              scale: 0.94,
              y: 2
            }}
            animate={{
              boxShadow: [
                '0 10px 30px rgba(109,40,168,0.25)',
                '0 15px 45px rgba(109,40,168,0.45)',
                '0 10px 30px rgba(109,40,168,0.25)'
              ]
            }}
            transition={{
              boxShadow: {
                duration: 3,
                repeat: Infinity
              }
            }}
            className="
              group relative overflow-hidden
              flex items-center gap-3
              px-8 sm:px-12
              py-3.5 sm:py-4
              rounded-full
              bg-gradient-to-r
              from-purple-900 via-purple-700 to-purple-800
              text-white font-black
              text-xs sm:text-base
              tracking-wider uppercase
              border border-white/20
              cursor-pointer
            "
          >

            <motion.span
              animate={{ x: ['-150%', '250%'] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="
                absolute inset-y-0 left-0
                w-1/3 bg-white/25
                skew-x-[-25deg]
                pointer-events-none
              "
            />

            <Rocket className="w-5 h-5 relative z-10"/>

            <span className="relative z-10">
              JOIN SKILL PRO 2K27
            </span>

            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            >
              <ArrowRight className="w-5 h-5 relative z-10"/>
            </motion.span>

          </motion.button>

          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2.5,
              repeat: Infinity
            }}
            className="
              text-[9px] sm:text-xs
              font-black tracking-[0.2em]
              text-purple-700 uppercase
            "
          >
            Be the Next Winner!
          </motion.p>

        </motion.div>


        {/* CONTACT CENTERS */}

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="
            relative z-10
            w-full pt-3 sm:pt-4
          "
        >

          <div className="
            flex items-center justify-center
            gap-2 mb-3
          ">

            <span className="w-7 h-px bg-purple-300"/>

            <p className="
              text-[9px] sm:text-xs
              font-black uppercase
              tracking-[0.2em]
              text-slate-500
            ">
              CONNECT WITH OUR CENTERS
            </p>

            <span className="w-7 h-px bg-purple-300"/>

          </div>

          <div className="
            grid grid-cols-1
            sm:grid-cols-3 gap-3
            text-left
          ">

            {centers.map((center, index) => {

              const Icon = center.icon;
              const isActive = activeCenter === center.id;

              return (

                <motion.button
                  key={center.id}
                  type="button"
                  onClick={() =>
                    setActiveCenter(isActive ? null : center.id)
                  }
                  initial={{
                    opacity: 0,
                    y: 25
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.9 + index * 0.15
                  }}
                  whileHover={{
                    y: -6,
                    rotateX: 4,
                    rotateY: index === 1 ? 0 : index === 0 ? -3 : 3,
                    scale: 1.025
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                  className={`
                    relative group w-full
                    p-3 sm:p-4 rounded-2xl
                    border text-left
                    flex items-start gap-3
                    overflow-hidden
                    transition-all duration-300
                    ${isActive
                      ? 'bg-white border-purple-400 shadow-[0_12px_30px_rgba(37,99,235,0.15)]'
                      : 'bg-white/95 border-slate-200 shadow-sm hover:shadow-xl'
                    }
                  `}
                >

                  {/* Accent */}

                  <motion.div
                    animate={{
                      width: isActive ? '100%' : '0%'
                    }}
                    className="
                      absolute top-0 left-0
                      h-1 rounded-full
                    "
                    style={{
                      backgroundColor: center.color
                    }}
                  />

                  {/* Icon */}

                  <motion.div
                    animate={{
                      rotate: isActive ? 10 : 0,
                      scale: isActive ? 1.1 : 1
                    }}
                    className="
                      p-2.5 rounded-xl shrink-0
                      flex items-center justify-center
                    "
                    style={{
                      backgroundColor: center.light,
                      color: center.color
                    }}
                  >
                    <Icon className="w-5 h-5"/>
                  </motion.div>

                  {/* Details */}

                  <div className="min-w-0 flex-1">

                    <h4 className="
                      text-[11px] sm:text-sm
                      font-black text-[#4B087A]
                    ">
                      {center.title}
                    </h4>

                    <p className="
                      text-[10px] sm:text-[11px]
                      text-slate-500 mt-1
                      leading-relaxed
                    ">
                      {center.description}
                    </p>

                    <div className="
                      flex items-center gap-1.5 mt-2
                    ">

                      <ShieldCheck
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: center.color }}
                      />

                      <span
                        className="
                          text-[9px] font-bold
                          tracking-wide
                        "
                        style={{ color: center.color }}
                      >
                        {center.tag}
                      </span>

                    </div>

                    <AnimatePresence>
                      {isActive && (

                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0
                          }}
                          animate={{
                            opacity: 1,
                            height: 'auto'
                          }}
                          exit={{
                            opacity: 0,
                            height: 0
                          }}
                          className="overflow-hidden"
                        >

                          <div className="
                            mt-3 pt-2
                            border-t border-slate-100
                            flex items-center gap-1
                            text-[9px] font-bold
                            text-purple-800
                          ">
                            <Sparkles className="w-3 h-3"/>
                            Selected Contact Center
                          </div>

                        </motion.div>

                      )}
                    </AnimatePresence>

                  </div>

                  <motion.div
                    animate={{
                      x: isActive ? 3 : 0,
                      rotate: isActive ? 90 : 0
                    }}
                    className="shrink-0"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-400"/>
                  </motion.div>

                </motion.button>

              );

            })}

          </div>

        </motion.div>

      </main>


      {/* FOOTER - COMPANY BRANDING */}

      <footer className="
        relative z-20 flex shrink-0
        items-center justify-around
        gap-3 sm:gap-6
        border-t border-purple-100
        pt-3 sm:pt-4
      ">

        
      </footer>

    </section>
  );
}
