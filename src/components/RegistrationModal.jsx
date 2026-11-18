import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Sparkles, QrCode, Shield, Send, ArrowRight, User, Mail, School, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/sound';

export default function RegistrationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Alex Mercer',
    email: 'alex.mercer@innovate.edu',
    institution: 'Apex Institute of Technology',
    category: 'Coding Challenge',
    teamSize: '3 Members'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playVictory();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-slate-900/95 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,240,255,0.2)] overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                <Sparkles className="w-4 h-4" />
                <span>OFFICIAL PORTAL // REGISTRATIONS OPEN</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Enter The Arena <span className="text-gradient-cyan">SkillPro 2026</span>
              </h2>
              <p className="text-sm text-slate-400 mt-1 mb-6">
                Fill in your credentials to secure your team slot and generate your VIP participant pass.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-cyan-400" /> Full Name / Lead
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" /> College Email ID
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white"
                      placeholder="e.g. name@university.edu"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <School className="w-3.5 h-3.5 text-cyan-400" /> University / Institute
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white"
                      placeholder="e.g. National Institute of Tech"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-cyan-400" /> Team Composition
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white"
                    >
                      <option value="Solo Gladiator (1 Member)">Solo Gladiator (1 Member)</option>
                      <option value="Duo Squad (2 Members)">Duo Squad (2 Members)</option>
                      <option value="Trio (3 Members)">Trio (3 Members)</option>
                      <option value="Full Squad (4 Members)">Full Squad (4 Members)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-cyan-400" /> Primary Competition Track
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white"
                  >
                    <option value="Coding Challenge">Coding Challenge (Algorithms & High-Throughput)</option>
                    <option value="Technical Quiz">Technical Quiz (Rapid-fire Computer Science & AI)</option>
                    <option value="Project Presentation">Project Presentation (Full-Stack & Systems Architecture)</option>
                    <option value="Innovation Challenge">Innovation Challenge (Moonshots & Societal Impact)</option>
                    <option value="Design Challenge">Design Challenge (UI/UX & Next-Gen Interfaces)</option>
                  </select>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Free Entry • Official Certification Guaranteed</span>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:opacity-95 shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center gap-2 transition-transform active:scale-95"
                  >
                    <span>Confirm & Generate Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12 }}
                className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-400/40 mb-4"
              >
                <CheckCircle className="w-8 h-8" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white">Registration Confirmed!</h3>
              <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
                Welcome to SkillPro 2026! Your digital access pass and competition schedule token have been generated.
              </p>

              {/* Holographic VIP Ticket Pass Card */}
              <div className="my-6 mx-auto max-w-md p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/60 border border-cyan-400/50 shadow-[0_0_35px_rgba(0,240,255,0.25)] relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-purple-600 text-slate-950 font-mono text-[10px] font-bold px-3 py-0.5 rounded-bl-lg uppercase tracking-wider">
                  VERIFIED PASS
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">OFFICIAL ACCESS TICKET</span>
                    <h4 className="text-lg font-black text-white tracking-wider">SKILLPRO 2026</h4>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                    <QrCode className="w-8 h-8 text-cyan-300" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <span className="text-slate-400 font-mono block text-[10px]">PARTICIPANT</span>
                    <span className="font-semibold text-white">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block text-[10px]">TRACK</span>
                    <span className="font-semibold text-cyan-300">{formData.category}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block text-[10px]">INSTITUTION</span>
                    <span className="font-semibold text-white truncate block">{formData.institution}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block text-[10px]">PASS ID</span>
                    <span className="font-mono text-purple-300">#SKP-2026-8891</span>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>STATUS: ACTIVATED</span>
                  <span className="text-emerald-400">STAGE ACCESS GRANTED</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

