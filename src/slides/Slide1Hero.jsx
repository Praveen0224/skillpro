
import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  GraduationCap,
  Building2,
  Award,
  Cpu,
  MapPin,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function Slide1Hero({ onStartPresentation }) {
  const handleStart = () => {
    soundManager.playChirp();
    onStartPresentation();
  };

  return (
    <div className="relative isolate w-full h-full min-h-[620px] flex flex-col justify-between items-center px-4 sm:px-8 md:px-12 py-4 sm:py-5 max-w-[1500px] mx-auto z-10 select-none overflow-hidden bg-[#08080b] text-white">

      {/* Dark cinematic background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '55px 55px'
          }}
        />

        {/* Ambient neon lighting */}
        <div className="absolute -top-40 -left-32 h-[450px] w-[450px] rounded-full bg-purple-700/30 blur-[130px]" />
        <div className="absolute top-[20%] right-[-15%] h-[500px] w-[500px] rounded-full bg-pink-600/20 blur-[140px]" />
        <div className="absolute bottom-[-25%] left-[25%] h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[140px]" />
        <div className="absolute bottom-0 right-[-10%] h-[300px] w-[300px] rounded-full bg-orange-600/15 blur-[120px]" />

        {/* Background code texture */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.055] font-mono text-[10px] sm:text-xs leading-7 text-purple-200 whitespace-pre-wrap break-all p-5">
          {'01 const innovation = "SKILL PRO";\n'}
          {'02 function buildFuture() {\n'}
          {'03   return creativity + technology;\n'}
          {'04 }\n'}
          {'05 // Think. Create. Innovate.\n'}
          {'06 import { Future } from "skills";\n'}
          {'07 export default Innovation;\n'}
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 45, 90] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[18%] left-[5%] h-16 w-16 sm:h-24 sm:w-24 rounded-full border-[8px] border-purple-500/30 shadow-[0_0_35px_rgba(168,85,247,0.3)]"
        />

        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[28%] right-[5%] h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-pink-500/70 to-red-600/40 blur-[1px] shadow-[0_0_60px_rgba(236,72,153,0.3)]"
        />

        <motion.div
          animate={{ y: [0, -18, 0], rotate: [45, 90, 45] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[15%] left-[8%] h-14 w-14 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br from-blue-500/60 to-purple-600/50 blur-[1px]"
        />

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, 90, 180] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[20%] right-[8%] h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-orange-500/60 shadow-[0_0_50px_rgba(249,115,22,0.35)]"
        />

        <div className="absolute top-[12%] right-[20%] text-[180px] sm:text-[280px] font-black text-white/[0.025] rotate-12">
          {'</>'}
        </div>
      </div>

      {/* Top status */}
      <motion.div
        initial={{ opacity: 0, y: -22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full flex flex-wrap items-center justify-between gap-3 pt-1"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <span className="text-[9px] sm:text-xs font-mono font-bold tracking-[0.12em] text-white/80 uppercase">
            District Level Mega Competition 2026-2027
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-mono tracking-[0.14em] text-white/60">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          <span>OFFICIAL EVENT KEYNOTE</span>
        </div>
      </motion.div>

      {/* Main hero - adjusted vertical spacing */}
      <main className="relative z-10 flex flex-col items-center justify-center mt-2 mb-3 w-full max-w-6xl py-2 sm:py-3">

        {/* Larger SkillPro logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-4 sm:mb-5"
        >
          <div className="absolute -inset-8 rounded-full bg-purple-600/30 blur-[55px] group-hover:bg-pink-500/30 transition-all duration-700" />

          {/* Increased from 120/150/165 to 170/210/250 */}
          <div className="relative flex items-center justify-center w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] md:w-[250px] md:h-[250px]">
            <img
              src="/assets/skillprologo.png"
              alt="Skill Pro Logo"
              className="relative z-10 w-[95%] h-[95%] object-contain drop-shadow-[0_0_25px_rgba(192,132,252,0.5)] transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-5 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 text-white shadow-[0_0_25px_rgba(217,70,239,0.5)]"
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>

          <motion.div
            aria-hidden="true"
            animate={{ y: [0, 10, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-5 bottom-3 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-[0_0_25px_rgba(139,92,246,0.5)]"
          >
            <Zap className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-full flex flex-col items-center text-center"
        >

          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-purple-400" />

            <span className="text-[9px] sm:text-[11px] font-mono font-bold tracking-[0.35em] text-purple-300 uppercase">
              FLAGSHIP TECH ARENA
            </span>

            <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-pink-400" />
          </div>

          <h1 className="font-display font-black uppercase tracking-[-0.065em] leading-[0.85]">
            <span className="block text-[clamp(3.5rem,10vw,8.5rem)] text-white drop-shadow-[0_5px_30px_rgba(255,255,255,0.12)]">
              SKILL PRO
            </span>

            <span className="relative inline-block mt-3 text-[clamp(3.4rem,9vw,7.5rem)] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300">
              2K27

              <motion.span
                animate={{ opacity: [0.5, 1, 0.5], scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[65%] h-[5px] rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 shadow-[0_0_20px_rgba(217,70,239,0.8)]"
              />
            </span>
          </h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-7 sm:mt-9 inline-flex items-center justify-center gap-3 border border-white/20 bg-white/[0.06] backdrop-blur-xl px-5 sm:px-8 py-3 shadow-[0_8px_35px_rgba(168,85,247,0.12)]"
          >
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />

            <p className="text-sm sm:text-xl md:text-2xl font-semibold italic tracking-wide text-white/90">
              “Your Skill. Your Scholarship.”
            </p>

            <Sparkles className="w-4 h-4 text-purple-400" />
          </motion.div>

          {/* Animated line */}
          <div className="relative w-full max-w-lg h-8 mt-2 overflow-hidden">
            <motion.div
              animate={{ x: [-120, 120], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-3 h-[2px] w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
            />
          </div>
        </motion.div>

        {/* Organizers */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
          className="relative w-full max-w-4xl mt-5 sm:mt-7 p-[1px] rounded-[1.5rem] bg-gradient-to-r from-purple-500/70 via-pink-500/50 to-orange-400/70 shadow-[0_15px_55px_rgba(168,85,247,0.12)]"
        >
          <div className="relative rounded-[1.45rem] bg-[#101015]/95 backdrop-blur-xl px-4 sm:px-7 py-4 sm:py-5 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.08] via-transparent to-pink-500/[0.07]" />

            <div className="relative flex items-center justify-center gap-2 mb-4 text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.22em] text-white/50 uppercase">
              <Building2 className="w-4 h-4 text-purple-400" />
              <span>CONDUCTED &amp; ORGANIZED JOINTLY BY</span>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

              {/* CADPOINT */}
              <div className="group flex items-center gap-4 text-left p-3 sm:p-4 rounded-2xl border border-white/10 bg-white/[0.045] transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-purple-500/[0.08]">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300 transition-transform duration-300 group-hover:scale-110">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold tracking-wide text-white">
                    CAD POINT
                  </h3>

                  <p className="mt-1 flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-white/60">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-pink-400" />
                    Nagercoil &amp; Marthandam
                  </p>

                  <span className="mt-1 block text-[10px] sm:text-[11px] text-white/40">
                    Premier Design &amp; Engineering Education Hub
                  </span>
                </div>
              </div>

              {/* AG NEXTGEN */}
              <div className="group flex items-center gap-4 text-left p-3 sm:p-4 rounded-2xl border border-white/10 bg-white/[0.045] transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/60 hover:bg-pink-500/[0.08]">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/15 text-pink-300 transition-transform duration-300 group-hover:scale-110">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold tracking-wide text-white">
                    AG NEXT GEN Technologies
                  </h3>

                  <p className="mt-1 flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-white/60">
                    <Sparkles className="w-3.5 h-3.5 shrink-0 text-purple-400" />
                    Enterprise Solutions &amp; Innovation
                  </p>

                  <span className="mt-1 block text-[10px] sm:text-[11px] text-white/40">
                    Next-Gen Software &amp; Tech Systems
                  </span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </main>

      {/* Partner logos - moved higher and improved visibility */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.7 }}
        className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 pb-3 border-t border-white/15"
      >

        {/* CADPOINT logo */}
        <div className="group flex items-center gap-3">
          <div className="rounded-xl border border-white/10 bg-white px-5 py-3 shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <img
              src="/assets/cadlogo.jpeg"
              alt="CADPOINT Logo"
              className="h-10 sm:h-12 md:h-14 w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Presentation navigation */}
        <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono tracking-wide text-white/40">
          <span>Press</span>

          <kbd className="rounded-md border border-white/15 bg-white/5 px-2 py-1 font-semibold text-purple-300">
            Space
          </kbd>

          <span>or</span>

          <kbd className="rounded-md border border-white/15 bg-white/5 px-2 py-1 font-semibold text-purple-300">
            →
          </kbd>

          <span>to advance</span>
        </div>

        {/* AG NEXTGEN logo */}
        <div className="group flex items-center gap-3">
          <span className="hidden md:inline text-[10px] font-mono text-white/40 uppercase tracking-[0.18em]">
            TECHNOLOGY PARTNER:
          </span>

          <div className="rounded-xl border border-white/10 bg-white px-5 py-3 shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]">
            <img
              src="/assets/ag.png"
              alt="AG NextGen Technologies Logo"
              className="h-10 sm:h-12 md:h-14 w-auto max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

      </motion.div>

    </div>
  );
}
