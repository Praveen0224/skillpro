
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Cpu,
  Wrench,
  Users
} from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'ARTS &',
    subtitle: 'SCIENCE',
    streams: 'B.Sc • BCA • B.Com • BBA • BA',
    icon: BookOpen,
    color: '#F2C744',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&auto=format&fit=crop&q=85',
  },
  {
    id: 2,
    title: 'ENGINEERING',
    subtitle: 'COLLEGES',
    streams: 'CSE • IT • ECE • MECH • CIVIL • AI',
    icon: Cpu,
    color: '#E75B4D',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=85',
  },
  {
    id: 3,
    title: 'POLYTECHNIC',
    subtitle: 'INSTITUTIONS',
    streams: 'ALL DIPLOMA DISCIPLINES',
    icon: Wrench,
    color: '#63A76D',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=900&auto=format&fit=crop&q=85',
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22
    }
  }
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.94
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Slide4Eligibility() {
  const [activeCategory, setActiveCategory] = useState(0);

  // Automatic category spotlight for presentation mode
  useEffect(() => {
    const categoryTimer = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(categoryTimer);
  }, []);


  return (
    <section className="
      eligibility-slide relative w-full h-full overflow-hidden
      bg-[#180027] text-white
      flex flex-col justify-between
      px-7 sm:px-12 md:px-16
      py-4 sm:py-5
      select-none
    ">

      <style>{`
        .eligibility-slide {
          background:
            radial-gradient(ellipse at 50% 35%, #520078 0%, #260039 55%, #100019 100%);
          color: #fff;
        }
        .eligibility-card {
          background: linear-gradient(155deg, rgba(103,22,135,.96), rgba(34,0,53,.98));
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 12px 30px rgba(0,0,0,.22);
          color: #fff;
          transition: box-shadow .35s ease;
        }
        .eligibility-card.is-active {
          border: 1px solid rgba(255,220,101,.8);
          box-shadow: 0 12px 34px rgba(0,0,0,.35);
        }
        .eligibility-card .eligibility-streams {
          color: rgba(255,255,255,.78);
        }
        .eligibility-card .eligibility-heading { color: #fff; }
        .eligibility-banner {
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.12);
          color: #fff;
        }
        .eligibility-footer {
          color: rgba(255,255,255,.72);
        }
        @media (prefers-reduced-motion: reduce) {
          .eligibility-card { transition: none; }
        }
      `}</style>

      {/* CENTERED HEADER */}
      <header className="relative z-10 flex flex-col items-center justify-center text-center shrink-0 gap-2">
        <motion.img
          initial={{ opacity: 0, scale: 0.7, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          src="/assets/skillprologo.png"
          alt="SkillPro Logo"
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.05em] leading-none text-center"
        >
          WHO CAN <span className="text-[#FFD45C]">PARTICIPATE?</span>
        </motion.h1>
      </header>

      {/* ELIGIBILITY HIGHLIGHT */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="relative z-10 eligibility-banner rounded-xl px-4 py-3 text-center"
      >
        <h2 className="text-sm sm:text-lg font-black tracking-wide">
          OPEN TO ALL COLLEGES &amp; DEPARTMENTS
        </h2>
      </motion.div>

      {/* CATEGORY CARDS */}
      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="
          relative z-10
          grid grid-cols-3 gap-3 sm:gap-6
          flex-1 min-h-0 py-3
        "
      >
        {categories.map((cat) => {
          const Icon = cat.icon;

          return (
            <motion.div
              key={cat.id}
              variants={reveal}
              whileHover={{
                y: -10,
                rotate: 0,
                scale: 1.035,
                transition: { duration: 0.3 }
              }}
              className={`relative flex flex-col eligibility-card min-w-0 overflow-hidden rounded-2xl ${activeCategory === cat.id - 1 ? "is-active" : ""
                }`}
              animate={{
                scale: activeCategory === cat.id - 1 ? 1.035 : 1,
                y: activeCategory === cat.id - 1 ? -8 : 0,
                transition: { duration: 0.7, ease: "easeInOut" }
              }}
              style={{ rotate: 0 }}
            >

              {/* Student photograph */}
              <div className="
                relative w-full
                h-[42%] min-h-[110px]
                overflow-hidden
              ">
                <motion.img
                  src={cat.image}
                  alt={`${cat.title} ${cat.subtitle}`}
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.5,
                    ease: 'easeOut'
                  }}
                  whileHover={{ scale: 1.12 }}
                  className="
                    w-full h-full object-cover
                  "
                />

                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/75 via-black/10 to-transparent
                " />

              </div>

              {/* Card content */}
              <div className="
                flex flex-col flex-1
                justify-between
                p-3 sm:p-5 md:p-6
              ">

                <div>
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: cat.id * 0.3
                    }}
                    className="
                      w-10 h-10 sm:w-12 sm:h-12
                      flex items-center justify-center
                      rounded-full mb-3
                    "
                    style={{ backgroundColor: cat.color }}
                  >
                    <Icon className="w-6 h-6 text-black" />
                  </motion.div>

                  <h2 className="
                    eligibility-heading text-lg sm:text-2xl md:text-3xl
                    font-black tracking-[-0.05em]
                    leading-[1.05] break-words
                  ">
                    {cat.title}
                    <br />
                    <span style={{ color: cat.color }}>
                      {cat.subtitle}
                    </span>
                  </h2>
                </div>

                <div className="
                  eligibility-streams mt-3 pt-2
                ">
                  <p className="
                    text-[9px] sm:text-[11px]
                    font-bold leading-relaxed
                    tracking-wide text-purple-100/70
                  ">
                    {cat.streams}
                  </p>
                </div>
              </div>

            </motion.div>
          );
        })}
      </motion.main>


      {/* FOOTER */}
      <footer className="
        relative z-10
        flex items-center justify-between
        eligibility-footer pt-2 shrink-0
      ">
        <img
          src="/assets/cadlogo.jpeg"
          alt="CADPOINT"
          className="h-8 sm:h-10 w-auto max-w-[30%] object-contain"
        />

        <img
          src="/assets/ag.png"
          alt="AG NextGen Technologies"
          className="h-8 sm:h-10 w-auto max-w-[30%] object-contain"
        />
      </footer>


    </section>
  );
}
