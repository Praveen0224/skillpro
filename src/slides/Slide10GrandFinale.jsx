import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket,
  MapPin,
  Sparkles,
  ArrowRight,
  Building2,
  Instagram,
  QrCode,
  CreditCard,
  ShieldCheck,
  ChevronRight,
  ScanLine,
} from 'lucide-react';
import { soundManager } from '../utils/sound';

const centers = [
  {
    id: 0,
    title: 'CAD POINT (Nagercoil)',
    description: 'Near Tower Junction & College Road',
    tag: 'Authorized Training Center',
    icon: MapPin,
    color: '#2563EB',
  },
  {
    id: 1,
    title: 'CAD POINT (Marthandam)',
    description: 'Main Junction, Kanyakumari Dist.',
    tag: 'Authorized Training Center',
    icon: MapPin,
    color: '#0891B2',
  },
  {
    id: 2,
    title: 'AG NEXT GEN Technologies',
    description: 'Enterprise & Tech Systems Wing',
    tag: 'Technology Partner',
    icon: Building2,
    color: '#16A34A',
  },
];

// Replace these sample paths and labels with your actual Instagram QR images and page names.
const instagramPages = [
  { name: 'Instagram Page 1', handle: '@your_page_1', qr: '/assets/instagram-qr-1.png' },
  { name: 'Instagram Page 2', handle: '@your_page_2', qr: '/assets/instagram-qr-2.png' },
  { name: 'Instagram Page 3', handle: '@your_page_3', qr: '/assets/instagram-qr-3.png' },
];

// Replace with your live registration payment QR image.
const paymentQr = '/assets/payment-qr.png';

export default function Slide10GrandFinale({ onOpenRegistration }) {
  const [activeCenter, setActiveCenter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCenter((prev) => (prev + 1) % centers.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleJoin = () => {
    soundManager?.playChirp?.();
    onOpenRegistration?.();
  };

  return (
    <section className="relative isolate flex h-full w-full flex-col overflow-hidden bg-[#F7FAFF] px-4 py-3 text-[#10294A] select-none sm:px-6 sm:py-3 md:px-8 lg:px-10">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-28 -top-36 h-[390px] w-[390px] rounded-full bg-cyan-200/40 blur-[100px]" />
        <div className="absolute -bottom-36 -left-28 h-[390px] w-[390px] rounded-full bg-blue-200/40 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      {/* HEADER */}
      <header className="relative z-10 flex shrink-0 items-center justify-between border-b border-blue-100/80 pb-2 sm:pb-2.5">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-1 flex items-center gap-2 text-[9px] font-black tracking-[0.24em] text-blue-600 sm:text-[10px]">
            <span className="h-1 w-6 rounded-full bg-blue-600" /> SKILL PRO 2K27
          </p>
          <h1 className="text-2xl font-black leading-none tracking-tight sm:text-3xl md:text-4xl">
            GRAND <span className="text-blue-600">FINALE</span>
          </h1>
          <p className="mt-1 text-[9px] font-semibold text-slate-500 sm:text-[10px]">
            Be the Next Winner!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.15 }}
          className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white p-2 shadow-[0_8px_24px_rgba(37,99,235,0.12)] sm:h-[68px] sm:w-[68px]"
        >
          <img
            src="/assets/skillprologo.png"
            alt="SkillPro Logo"
            className="relative z-10 h-full w-full object-contain"
          />
          <Sparkles size={14} className="absolute -right-1 -top-1 text-amber-400" />
        </motion.div>
      </header>

      {/* MAIN CONTENT: balanced hero and larger QR area */}
      <main className="relative z-10 grid min-h-0 flex-1 grid-cols-1 gap-3 py-3 lg:grid-cols-[minmax(0,1.02fr)_minmax(390px,0.98fr)] lg:gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(440px,0.95fr)]">
        {/* HERO PANEL */}
        <div className="relative flex min-h-[230px] min-w-0 flex-col items-center justify-center overflow-hidden rounded-[24px] border border-blue-100/90 bg-white/85 px-4 py-5 text-center shadow-[0_12px_36px_rgba(30,64,175,0.07)] sm:px-6 lg:min-h-0">
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-100/70 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-cyan-100/70 blur-2xl" />

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[8px] font-black tracking-[0.12em] text-blue-700 sm:text-[9px]"
          >
            <Sparkles size={12} /> DISTRICT-LEVEL MEGA TECHNICAL CHALLENGE
          </motion.div>

          <div className="relative mt-5 w-full">
            <motion.h2
              initial={{ opacity: 0, scale: 0.88, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, type: 'spring', stiffness: 80 }}
              className="bg-gradient-to-b from-blue-500 via-blue-700 to-indigo-950 bg-clip-text text-[clamp(34px,5.3vw,70px)] font-black uppercase leading-[0.9] tracking-[-0.065em] text-transparent"
            >
              TAKE THE LEAP.
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.65 }}
              className="mt-2 bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 bg-clip-text text-[clamp(25px,4.3vw,56px)] font-black uppercase leading-[0.96] tracking-[-0.06em] text-transparent"
            >
              PROVE YOUR TALENT.
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-2 text-[clamp(19px,3.1vw,39px)] font-black uppercase leading-tight tracking-[-0.045em] text-[#10294A]"
            >
              SECURE YOUR FUTURE.
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mx-auto mt-4 h-1 w-2/5 origin-center rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500"
            />
          </div>

          <motion.button
            type="button"
            onClick={handleJoin}
            whileHover={{ scale: 1.045, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative mt-5 inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 px-6 py-3 text-[10px] font-black uppercase tracking-wider text-white shadow-[0_10px_25px_rgba(37,99,235,0.24)] sm:px-8 sm:py-3.5 sm:text-xs"
          >
            <motion.span
              animate={{ x: ['-150%', '300%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <Rocket size={17} />
            <span className="relative z-10">JOIN SKILL PRO 2K27</span>
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
          <p className="relative mt-2 text-[8px] font-bold tracking-wide text-slate-500 sm:text-[9px]">
            Your Next Achievement Starts Here
          </p>
        </div>

        {/* EXPANDED QR SCANNER PANEL */}
        <aside className="grid min-h-0 min-w-0 grid-rows-[0.88fr_1.12fr] gap-3">
          {/* Instagram QR codes */}
          <section className="flex min-h-0 flex-col rounded-[22px] border border-blue-100 bg-white/95 p-3 shadow-[0_10px_30px_rgba(30,64,175,0.08)] sm:p-3.5">
            <div className="mb-2 flex shrink-0 items-center justify-between gap-2">
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.18em] text-blue-600 sm:text-[9px]">
                  Stay Connected
                </p>
                <h3 className="text-sm font-black text-[#10294A] sm:text-base">
                  Follow Our Instagram
                </h3>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-50">
                <Instagram className="h-5 w-5 text-pink-600" />
              </span>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-3 gap-2">
              {instagramPages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50/90 p-1.5 sm:p-2"
                >
                  <div className="flex aspect-square w-full max-w-[132px] items-center justify-center rounded-lg border border-slate-100 bg-white p-1.5 sm:p-2">
                    <img
                      src={page.qr}
                      alt={`${page.name} Instagram QR code`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="mt-1.5 w-full truncate text-center text-[7px] font-black text-slate-700 sm:text-[9px]">
                    {page.name}
                  </span>
                  <span className="mt-0.5 w-full truncate text-center text-[7px] text-slate-500 sm:text-[8px]">
                    {page.handle}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="mt-1.5 shrink-0 text-center text-[8px] font-semibold text-slate-500 sm:text-[9px]">
              Scan to follow our pages
            </p>
          </section>

          {/* Payment QR: larger dedicated scanning area */}
          <section className="relative flex min-h-0 flex-col items-center justify-center overflow-hidden rounded-[22px] border-2 border-amber-300 bg-gradient-to-br from-amber-50 via-yellow-50 to-white px-3 py-3 text-center shadow-[0_12px_32px_rgba(180,130,20,0.12)] sm:px-4">
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-200/50 blur-2xl" />
            <div className="relative z-10 mb-1 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[8px] font-black uppercase tracking-[0.14em] text-amber-800 sm:text-[9px]">
              <CreditCard size={12} /> Registration Payment
            </div>
            <h3 className="relative z-10 text-lg font-black leading-tight text-[#10294A] sm:text-xl">
              SCAN &amp; PAY
            </h3>
            <p className="relative z-10 mt-0.5 text-[8px] font-semibold text-amber-800 sm:text-[9px]">
              Scan the QR code to complete your registration
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative z-10 mt-2 flex min-h-0 w-full flex-1 items-center justify-center"
            >
              <div className="relative h-full max-h-[230px] min-h-[125px] aspect-square rounded-2xl border-[6px] border-white bg-white p-2 shadow-[0_10px_28px_rgba(15,23,42,0.16)] sm:border-[7px] sm:p-2.5">
                <img
                  src={paymentQr}
                  alt="Live registration payment QR code"
                  className="h-full w-full object-contain"
                />
                <span className="pointer-events-none absolute -left-2 -top-2 h-6 w-6 rounded-tl-lg border-l-[3px] border-t-[3px] border-amber-500" />
                <span className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 rounded-tr-lg border-r-[3px] border-t-[3px] border-amber-500" />
                <span className="pointer-events-none absolute -bottom-2 -left-2 h-6 w-6 rounded-bl-lg border-b-[3px] border-l-[3px] border-amber-500" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 rounded-br-lg border-b-[3px] border-r-[3px] border-amber-500" />
              </div>
            </motion.div>

            <div className="relative z-10 mt-2 flex shrink-0 items-center gap-1.5 text-[8px] font-bold text-amber-800 sm:text-[9px]">
              <ScanLine size={13} /> Secure your entry now
            </div>
          </section>
        </aside>
      </main>

      {/* CONTACT CENTERS: compact row to preserve QR height */}
      <section className="relative z-10 shrink-0 pt-0.5">
        <div className="mb-1.5 flex items-center justify-center gap-2">
          <span className="h-px w-6 bg-blue-200" />
          <p className="text-[8px] font-black uppercase tracking-[0.18em] text-slate-500 sm:text-[9px]">
            Connect With Our Centers
          </p>
          <span className="h-px w-6 bg-blue-200" />
        </div>

        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-3 sm:gap-2">
          {centers.map((center, index) => {
            const Icon = center.icon;
            const isActive = activeCenter === index;

            return (
              <motion.button
                key={center.id}
                type="button"
                onClick={() => setActiveCenter(index)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                className={`relative flex min-w-0 items-center gap-2 overflow-hidden rounded-xl border px-2 py-1.5 text-left transition-all sm:px-2.5 sm:py-2 ${
                  isActive
                    ? 'border-blue-200 bg-white shadow-[0_5px_16px_rgba(37,99,235,0.10)]'
                    : 'border-slate-200 bg-white/75'
                }`}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg sm:h-8 sm:w-8"
                  style={{ backgroundColor: `${center.color}15`, color: center.color }}
                >
                  <Icon size={16} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[8px] font-black text-[#10294A] sm:text-[9px]">
                    {center.title}
                  </span>
                  <span className="mt-0.5 block truncate text-[7px] text-slate-500 sm:text-[8px]">
                    {center.description}
                  </span>
                  <span
                    className="mt-0.5 flex items-center gap-1 text-[7px] font-bold sm:text-[8px]"
                    style={{ color: center.color }}
                  >
                    <ShieldCheck size={9} /> {center.tag}
                  </span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-0.5 block overflow-hidden text-[7px] font-bold text-blue-600"
                      >
                        Selected Contact Center
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
                <ChevronRight size={13} className="shrink-0 text-slate-400" />
                {isActive && (
                  <motion.span
                    layoutId="activeCenterIndicator"
                    className="absolute bottom-0 left-0 top-0 w-1 rounded-full"
                    style={{ backgroundColor: center.color }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* FOOTER / COMPANY LOGOS */}
      <footer className="relative z-10 mt-2 flex shrink-0 items-center justify-between gap-3 border-t border-slate-200/80 pt-1.5">
        <motion.img
          src="/assets/cadlogo.jpeg"
          alt="CADPOINT Logo"
          whileHover={{ scale: 1.04 }}
          className="h-6 w-auto max-w-[30%] object-contain object-left sm:h-8"
        />
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          <span className="text-[7px] font-black uppercase tracking-[0.18em] text-slate-400 sm:text-[9px]">
            SKILL PRO 2K27
          </span>
        </div>
        <motion.img
          src="/assets/ag.png"
          alt="AG NextGen Technologies Logo"
          whileHover={{ scale: 1.04 }}
          className="h-6 w-auto max-w-[30%] object-contain object-right sm:h-8"
        />
      </footer>
    </section>
  );
}
