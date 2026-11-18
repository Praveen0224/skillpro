
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  GraduationCap,
  Gift,
  Sparkles,
  Crown,
  Star,
  X,
  Wallet,
  BadgeCheck,
  PartyPopper,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

const prizes = [
  {
    title: "First Prize",
    amount: "₹25,000",
    rank: "WINNER",
    icon: Trophy,
    theme: "gold",
    description: "Outstanding Performance",
  },
  {
    title: "Second Prize",
    amount: "₹15,000",
    rank: "2nd RUNNER UP",
    icon: Medal,
    theme: "silver",
    description: "Excellent Achievement",
  },
  {
    title: "Third Prize",
    amount: "₹10,000",
    rank: "3rd RUNNER UP",
    icon: Award,
    theme: "bronze",
    description: "Remarkable Performance",
  },
];

const benefits = [
  { title: "Strategic Scholarships", icon: GraduationCap },
  { title: "Exciting Cash Prizes", icon: Wallet },
  { title: "Official Certificates", icon: BadgeCheck },
  { title: "Exclusive Rewards", icon: Gift },
];

const photos = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=90",
];

const stars = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37 + 11) % 96}%`,
  top: `${(i * 23 + 7) % 94}%`,
  delay: i * 0.25,
  size: i % 3 === 0 ? 22 : 14,
}));

// ==========================================
// PRIZE CARD
// ==========================================

function PrizeCard({ item, index, onClick, isActive }) {
  const Icon = item.icon;

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.18, duration: 0.75 }}
      whileHover={{ y: -14, scale: 1.035 }}
      whileTap={{ scale: 0.97 }}

      // AUTOMATIC PRIZE SPOTLIGHT
      animate={{
        scale: isActive ? 1.07 : 1,
        y: isActive ? -12 : 0,
        boxShadow: isActive
          ? "0 0 35px rgba(255,215,0,0.85)"
          : "0 18px 45px rgba(0,0,0,0.35)",
        filter: isActive ? "brightness(1.15)" : "brightness(1)",
      }}

      transition={{
        duration: 0.65,
        ease: "easeInOut",
      }}

      className={`prize-podium podium-${item.theme} ${isActive ? "active-prize" : ""
        }`}
    >
      <div className="podium-star">
        <Star fill="currentColor" />
      </div>

      <div className="podium-content">
        <div className="podium-icon">
          <Icon size={35} strokeWidth={1.6} />
        </div>

        <div className="podium-rank">{item.rank}</div>

        <h3 className="podium-title">{item.title}</h3>

        <div className="podium-divider" />

        <div className="podium-amount">{item.amount}</div>

        <p className="podium-description">
          {item.description}
        </p>

        <span className="podium-view">
          VIEW REWARD <ArrowUpRight size={15} />
        </span>
      </div>
    </motion.button>
  );
}

// ==========================================
// PRIZE POPUP
// ==========================================

function PrizePopup({ prize, onClose }) {
  if (!prize) return null;

  const Icon = prize.icon;

  return (
    <AnimatePresence>
      <motion.div
        className="prize-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`prize-modal modal-${prize.theme}`}
          initial={{
            opacity: 0,
            scale: 0.65,
            y: 70,
            rotateX: 15,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            y: 40,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close prize details"
          >
            <X size={22} />
          </button>

          <motion.div
            animate={{
              rotate: [0, -8, 8, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="modal-trophy"
          >
            <Icon size={65} />
          </motion.div>

          <div className="modal-label">SKILL PRO 2K27</div>

          <h2>{prize.title}</h2>

          <p className="modal-rank">{prize.rank}</p>

          <motion.div
            className="modal-amount"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.25,
              type: "spring",
            }}
          >
            {prize.amount}
          </motion.div>

          <p className="modal-description">
            {prize.description}
          </p>

          <div className="modal-bottom">
            <Sparkles size={17} />
            YOUR SKILLS. YOUR ACHIEVEMENT. YOUR REWARD.
            <Sparkles size={17} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function SlidePrizeBenefits() {
  const [selectedPrize, setSelectedPrize] = useState(null);

  const [activePhoto, setActivePhoto] = useState(0);

  const [activeTab, setActiveTab] = useState("prizes");

  // AUTOMATIC PRESENTATION STATES
  const [activePrizeIndex, setActivePrizeIndex] = useState(0);

  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);

  const reduceMotion = useReducedMotion();

  // ========================================
  // AUTOMATIC PRIZE & BENEFIT ROTATION
  // ========================================

  useEffect(() => {
    if (reduceMotion) return;

    // Change prize highlight every 2.5 seconds
    const prizeTimer = setInterval(() => {
      setActivePrizeIndex((prev) => (prev + 1) % prizes.length);
    }, 2500);

    // Change benefit highlight every 2.2 seconds
    const benefitTimer = setInterval(() => {
      setActiveBenefitIndex((prev) => (prev + 1) % benefits.length);
    }, 2200);

    return () => {
      clearInterval(prizeTimer);
      clearInterval(benefitTimer);
    };
  }, [reduceMotion]);

  return (
    <main className="skillpro-awards relative min-h-screen overflow-hidden">

      <style>{`

        .skillpro-awards {
          --royal: #31004e;
          --purple: #6500a0;
          --gold: #ffcf27;

          background:
            radial-gradient(
              ellipse at 50% 40%,
              #600080 0%,
              #280039 55%,
              #10001c 100%
            );

          color: white;
          font-family: inherit;
          isolation: isolate;
        }

        /* CURTAINS */

        .sp-curtain {
          position: fixed;
          z-index: 20;
          top: 0;
          bottom: 0;
          width: clamp(24px, 7vw, 85px);
          pointer-events: none;

          background:
            repeating-linear-gradient(
              90deg,
              #28003f 0px,
              #7900c1 9px,
              #bd19ff 18px,
              #510078 29px,
              #26003c 40px
            );

          box-shadow:
            inset -8px 0 15px #160021,
            inset 8px 0 12px #c000ff,
            0 0 35px #8c00c7;
        }

        .sp-curtain.left {
          left: 0;
        }

        .sp-curtain.right {
          right: 0;
          transform: scaleX(-1);
        }

        /* SKILLPRO WATERMARK */

        .sp-watermark {
          position: absolute;
          width: min(75vw, 850px);
          height: min(75vw, 850px);
          object-fit: contain;

          left: 50%;
          top: 48%;

          transform: translate(-50%, -50%);

          opacity: .055;

          filter: grayscale(1) brightness(2);

          pointer-events: none;
          z-index: -1;
        }

        /* FLOATING STARS */

        .sp-stars {
          position: absolute;
          color: #ffdc52;
          pointer-events: none;

          filter:
            drop-shadow(0 0 10px #ffcc28);
        }

        /* HEADER */

        .sp-header {
          text-align: center;
          padding: 30px 20px 10px;
        }

        .sp-logo {
          width: 95px;
          height: 95px;
          object-fit: contain;

          background: white;
          border-radius: 18px;
          padding: 5px;

          box-shadow: 0 0 35px #e4aaff66;
        }

        .sp-title {
          font-size: clamp(38px, 6vw, 76px);
          font-weight: 1000;
          letter-spacing: -2px;
          line-height: 1;

          color: white;

          text-shadow: 0 5px 25px #0008;
        }

        .sp-subtitle {
          color: #ffda52;
          font-style: italic;
          font-size: clamp(14px, 2vw, 19px);
          margin-top: 12px;
        }

        /* PRIZE TOTAL */

        .sp-prize-total {
          margin: 28px auto;
          width: fit-content;
          text-align: center;

          padding: 16px 35px;

          border: 1px solid #ffdb70;
          border-radius: 16px;

          background:
            linear-gradient(
              135deg,
              #ffdc65,
              #f5a900
            );

          color: #340047;

          box-shadow: 0 0 40px #ffb70050;
        }

        .sp-prize-total strong {
          display: block;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 1000;
        }

        .sp-prize-total span {
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        /* SECTION HEADINGS */

        .sp-section-title {
          text-align: center;

          font-size: clamp(32px, 5vw, 48px);
          font-weight: 1000;

          color: #ffdb55;
          margin-bottom: 10px;

          text-shadow: 0 4px 20px #0007;
        }

        .sp-section-subtitle {
          text-align: center;
          color: #ead9f2;
          font-size: 14px;
          margin-bottom: 30px;
        }

        /* PRIZE PODIUM CARDS */

        .prize-podium {
          position: relative;

          min-height: 330px;

          border-radius: 24px;
          padding: 20px 14px;

          overflow: visible;
          cursor: pointer;
          text-align: center;

          transition: box-shadow .35s ease;

          border: 2px solid #ffffff66;

          box-shadow: 0 18px 45px #0006;
        }

        .prize-podium:hover {
          box-shadow:
            0 25px 55px #0009,
            0 0 25px #ffdc5480;
        }

        /* AUTOMATIC ACTIVE PRIZE BORDER */

        .active-prize {
          border: 3px solid #fff2a6 !important;

          box-shadow:
            0 0 15px #ffda48,
            0 0 35px #ffcf27,
            0 20px 55px #0009 !important;
        }

        .active-prize .podium-star {
          filter:
            drop-shadow(0 0 12px #fff0a0)
            drop-shadow(0 0 20px #ffcb28);
        }

        .podium-gold {
          background:
            linear-gradient(
              155deg,
              #fff27a,
              #ffba00 50%,
              #b66a00
            );

          color: #451400;
        }

        .podium-silver {
          background:
            linear-gradient(
              155deg,
              #ffffff,
              #c8c8d4 55%,
              #85859a
            );

          color: #29233a;
        }

        .podium-bronze {
          background:
            linear-gradient(
              155deg,
              #ffe1b9,
              #df8d48 55%,
              #8e3900
            );

          color: #4b1800;
        }

        .podium-content {
          display: flex;
          height: 100%;
          min-height: 290px;

          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .podium-icon {
          margin-bottom: 18px;

          filter:
            drop-shadow(0 4px 6px #0003);
        }

        .podium-rank {
          font-size: 11px;
          font-weight: 1000;
          letter-spacing: 3px;
          opacity: .7;
        }

        .podium-title {
          font-size: 21px;
          font-weight: 1000;
          margin-top: 12px;
        }

        .podium-divider {
          width: 75%;
          height: 2px;

          background: currentColor;
          opacity: .35;

          margin: 18px 0 12px;
        }

        .podium-amount {
          font-size: clamp(29px, 4vw, 43px);
          font-weight: 1000;
          letter-spacing: -1px;

          text-shadow: 0 3px 5px #ffffff50;
        }

        .podium-description {
          margin-top: 8px;
          font-size: 11px;
          font-weight: 700;
          opacity: .75;
        }

        .podium-view {
          display: flex;
          align-items: center;
          gap: 5px;

          font-size: 10px;
          font-weight: 1000;
          letter-spacing: 1px;

          margin-top: 20px;
          padding: 9px 15px;

          border-radius: 30px;
          background: #ffffff55;
        }

        .podium-star {
          position: absolute;
          top: -19px;
          right: -10px;

          color: #ffe36a;

          filter:
            drop-shadow(0 4px 8px #0007);
        }

        .podium-star svg {
          width: 42px;
          height: 42px;
        }

        /* STUDENT BENEFITS */

        .sp-benefits-panel {
          border: 1px solid #d8a6ff55;
          border-radius: 25px;
          padding: 22px;

          background:
            linear-gradient(
              135deg,
              #4c006dba,
              #210033ed
            );

          box-shadow: 0 20px 55px #0005;
        }

        .sp-benefit {
          display: flex;
          align-items: center;
          gap: 16px;

          padding: 17px;
          margin-top: 13px;

          border: 1px solid #ffffff35;
          border-radius: 16px;

          background: #ffffff12;

          transition: all .3s ease;
          cursor: default;
        }

        .sp-benefit:hover {
          transform: translateX(7px);

          background: #ffffff22;
          border-color: #ffdb5b;

          box-shadow: 0 8px 25px #0003;
        }

        /* ACTIVE BENEFIT */

        .active-benefit {
          border-color: #ffdc54 !important;

          box-shadow:
            0 0 12px #ffdc5460,
            0 0 25px #ffdc5430;
        }

        .sp-benefit-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;

          display: grid;
          place-items: center;

          border-radius: 14px;

          background:
            linear-gradient(
              135deg,
              #ffe88b,
              #efa600
            );

          color: #390047;
        }

        .sp-benefit h3 {
          font-size: 15px;
          font-weight: 900;
          color: white;
        }

        /* IMAGE GALLERY */

        .sp-gallery {
          display: grid;

          grid-template-columns: 1.4fr 1fr 1fr;

          gap: 12px;
          margin-top: 35px;
        }

        .sp-gallery img {
          width: 100%;
          height: 160px;

          object-fit: cover;

          border-radius: 15px;
          border: 2px solid #ffffff45;

          transition:
            transform .4s ease,
            filter .4s ease;

          cursor: pointer;
        }

        .sp-gallery img:hover {
          transform: scale(1.04);
          filter: brightness(1.2);
        }

        /* PRIZE POPUP */

        .prize-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 20px;

          background: #12001edc;
          backdrop-filter: blur(12px);
        }

        .prize-modal {
          position: relative;

          width: min(100%, 440px);

          text-align: center;
          padding: 42px 24px;

          border: 2px solid #ffdc5b;
          border-radius: 30px;

          color: #fff;

          background:
            radial-gradient(
              circle at top,
              #8000a5,
              #250037 75%
            );

          box-shadow:
            0 30px 100px #000b,
            0 0 50px #d000ff44;
        }

        .modal-close {
          position: absolute;
          right: 16px;
          top: 16px;

          padding: 9px;
          border-radius: 50%;

          color: white;
          background: #ffffff20;
        }

        .modal-trophy {
          color: #ffdc54;

          display: flex;
          justify-content: center;

          margin-bottom: 18px;

          filter:
            drop-shadow(0 0 18px #ffcb45);
        }

        .modal-label {
          color: #ffdc54;

          font-size: 11px;
          letter-spacing: 4px;
          font-weight: 900;
        }

        .prize-modal h2 {
          margin-top: 12px;

          font-size: 31px;
          font-weight: 1000;
        }

        .modal-rank {
          margin-top: 8px;

          color: #e8c6f6;

          font-size: 12px;
          letter-spacing: 3px;
        }

        .modal-amount {
          margin: 25px 0;

          color: #ffdc54;

          font-size: clamp(42px,10vw,62px);
          font-weight: 1000;

          text-shadow: 0 0 25px #ffcb5070;
        }

        .modal-description {
          font-size: 14px;
          color: #f2e6f8;
        }

        .modal-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;

          margin-top: 30px;
          padding-top: 20px;

          border-top: 1px solid #ffffff30;

          color: #ffdb5a;

          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        /* MOBILE TABS */

        .sp-tabs {
          display: flex;
          gap: 8px;
          justify-content: center;

          margin: 25px auto;
        }

        .sp-tabs button {
          border: 1px solid #ffffff55;
          border-radius: 12px;

          padding: 11px 18px;

          font-size: 12px;
          font-weight: 900;

          color: white;
          background: #ffffff12;
        }

        .sp-tabs button.active {
          color: #390047;
          background: #ffdc54;
        }

        /* RESPONSIVE */

        @media(max-width: 640px) {

          .sp-gallery {
            grid-template-columns: 1fr 1fr;
          }

          .sp-gallery img {
            height: 120px;
          }

          .sp-gallery img:first-child {
            grid-column: span 2;
            height: 170px;
          }

          .prize-podium {
            min-height: 260px;
          }

          .podium-content {
            min-height: 220px;
          }

          .sp-curtain {
            width: 19px;
          }

        }

        @media(prefers-reduced-motion:reduce) {

          *,*::before,*::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }

        }

      `}</style>

      {/* CURTAINS */}

      <div className="sp-curtain left" />
      <div className="sp-curtain right" />

      {/* WATERMARK */}

      <img
        src="/assets/skillprologo.png"
        alt=""
        aria-hidden="true"
        className="sp-watermark"
      />

      {/* FLOATING STARS */}

      {!reduceMotion &&
        stars.map((star, i) => (
          <motion.div
            key={i}
            className="sp-stars"
            style={{
              left: star.left,
              top: star.top,
              zIndex: 0,
            }}
            animate={{
              y: [0, -17, 0],
              rotate: [0, 25, -15, 0],
              opacity: [0.3, 1, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: star.delay,
            }}
          >
            <Star
              size={star.size}
              fill="currentColor"
            />
          </motion.div>
        ))}

      <div className="relative z-10 mx-auto max-w-[1350px] px-7 py-8 sm:px-12">

        {/* HEADER */}

        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="sp-header"
        >
          <motion.img
            src="/assets/skillprologo.png"
            alt="SkillPro Logo"
            className="sp-logo"
            whileHover={{ rotate: 5, scale: 1.08 }}
          />

          <p className="mt-4 text-xs font-black tracking-[5px] text-amber-300">
            THE ULTIMATE STUDENT EXPERIENCE
          </p>

          <h1 className="sp-title mt-5">
            REWARDS & PRIZES
          </h1>

          <p className="sp-subtitle">
            Your Skill. Your Scholarship. Your Future.
          </p>
        </motion.header>

        {/* TOTAL PRIZE POOL */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="sp-prize-total"
        >
          <span>MASSIVE PRIZE POOL</span>

          <strong>₹1,00,000</strong>

          <span>TOTAL CASH PRIZES</span>
        </motion.div>

        {/* RESPONSIVE TABS */}

        <div className="sp-tabs lg:hidden">

          <button
            className={activeTab === "prizes" ? "active" : ""}
            onClick={() => setActiveTab("prizes")}
          >
            <Trophy size={14} className="inline mr-2" />
            PRIZES
          </button>

          <button
            className={activeTab === "benefits" ? "active" : ""}
            onClick={() => setActiveTab("benefits")}
          >
            <Gift size={14} className="inline mr-2" />
            BENEFITS
          </button>

        </div>

        {/* MAIN CONTENT */}

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">

          {/* LEFT: PRIZES */}

          <section
            className={
              activeTab === "benefits"
                ? "hidden lg:block"
                : ""
            }
          >

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sp-section-title"
            >
              <Trophy
                className="inline mr-3 mb-2"
                size={38}
              />

              PRIZES
            </motion.h2>

            <p className="sp-section-subtitle">
              Three Winning Positions. Unlimited Possibilities.
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

              {prizes.map((item, index) => (
                <PrizeCard
                  key={item.title}
                  item={item}
                  index={index}
                  isActive={activePrizeIndex === index}
                  onClick={() => setSelectedPrize(item)}
                />
              ))}

            </div>

            {/* COLLEGE TOPPER */}

            <motion.button
              onClick={() =>
                setSelectedPrize({
                  title: "College Topper Award",
                  amount: "₹1,000",
                  rank: "SPECIAL RECOGNITION",
                  icon: GraduationCap,
                  theme: "gold",
                  description:
                    "A special award for the College Topper.",
                })
              }
              whileHover={{ scale: 1.025, y: -4 }}
              className="mt-6 flex w-full items-center gap-4 rounded-2xl border border-amber-300/60 bg-gradient-to-r from-[#ffdf65] to-[#d88a13] p-5 text-left text-[#380044] shadow-xl"
            >

              <div className="rounded-xl bg-white/40 p-3">
                <GraduationCap size={32} />
              </div>

              <div className="flex-1">

                <p className="text-[10px] font-black tracking-[2px]">
                  SPECIAL RECOGNITION
                </p>

                <h3 className="mt-1 text-lg font-black">
                  COLLEGE TOPPER AWARD
                </h3>

                <p className="mt-1 text-2xl font-black">
                  ₹1,000
                </p>

              </div>

              <ChevronRight size={25} />

            </motion.button>

          </section>

          {/* RIGHT: BENEFITS */}

          <section
            className={
              activeTab === "prizes"
                ? "hidden lg:block"
                : ""
            }
          >

            <h2 className="sp-section-title">

              <Crown
                className="inline mr-3 mb-2"
                size={35}
              />

              STUDENT BENEFITS

            </h2>

            <p className="sp-section-subtitle">
              More Than Prizes. A Future Full of Opportunities.
            </p>

            <div className="sp-benefits-panel">

              {benefits.map((item, index) => {
                const Icon = item.icon;

                const isActive =
                  activeBenefitIndex === index;

                return (
                  <motion.div
                    key={item.title}

                    initial={{
                      opacity: 0,
                      x: 35,
                    }}

                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}

                    viewport={{ once: true }}

                    transition={{
                      delay: index * 0.12,
                    }}

                    // AUTOMATIC BENEFIT HIGHLIGHT

                    animate={{
                      scale: isActive ? 1.035 : 1,

                      x: isActive ? 8 : 0,

                      backgroundColor: isActive
                        ? "rgba(255,215,0,0.20)"
                        : "rgba(255,255,255,0.07)",

                      borderColor: isActive
                        ? "#ffdc54"
                        : "rgba(255,255,255,0.21)",

                      boxShadow: isActive
                        ? "0 0 20px rgba(255,215,0,0.25)"
                        : "0 0 0px transparent",
                    }}

                    whileHover={{
                      x: 7,
                    }}

                    className={`sp-benefit ${isActive ? "active-benefit" : ""
                      }`}
                  >

                    <div className="sp-benefit-icon">
                      <Icon size={26} />
                    </div>

                    <h3>{item.title}</h3>

                    <div className="ml-auto text-amber-300">
                      <ArrowUpRight size={20} />
                    </div>

                  </motion.div>
                );
              })}

            </div>

            {/* IMAGE GALLERY */}

            <div className="mt-8 overflow-hidden rounded-2xl border border-amber-300/30 bg-white/10 p-3">

              <div className="mb-3 flex items-center justify-between px-1">

                <h3 className="text-sm font-black tracking-wider text-amber-200">
                  STUDENTS. SKILLS. SUCCESS.
                </h3>

                <Sparkles
                  size={18}
                  className="text-amber-300"
                />

              </div>

              <div className="sp-gallery">

                {photos.map((photo, index) => (
                  <motion.img
                    key={photo}
                    src={photo}
                    alt={`Student event gallery ${index + 1}`}
                    loading="lazy"
                    onClick={() => setActivePhoto(index)}
                    whileHover={{ scale: 1.04 }}
                  />
                ))}

              </div>

            </div>

            {/* FINAL MESSAGE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{ once: true }}

              className="mt-6 rounded-2xl border border-amber-300/40 bg-gradient-to-r from-purple-900/80 to-fuchsia-900/80 p-6 text-center"
            >

              <PartyPopper
                size={35}
                className="mx-auto mb-3 text-amber-300"
              />

              <h3 className="text-2xl font-black text-white">
                YOUR MOMENT TO SHINE!
              </h3>

              <p className="mt-2 text-sm text-purple-100">
                Showcase your talent. Celebrate your achievement.
              </p>

            </motion.div>

          </section>

        </div>

        {/* FOOTER */}

        <footer className="mt-14 border-t border-white/20 py-7 text-center">

          <div className="flex justify-center gap-3 text-amber-300">

            <Star size={17} fill="currentColor" />

            <Sparkles size={20} />

            <Star size={17} fill="currentColor" />

          </div>

          <p className="mt-3 text-xs font-black tracking-[4px] text-white">
            SKILL PRO 2K27
          </p>

          <p className="mt-2 text-[10px] tracking-wider text-purple-200">
            REWARDS • RECOGNITION • OPPORTUNITIES
          </p>

        </footer>

      </div>

      {/* PRIZE POPUP */}

      <PrizePopup
        prize={selectedPrize}
        onClose={() => setSelectedPrize(null)}
      />

    </main>
  );
}
