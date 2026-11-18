// Procedural Web Audio sound generator for SkillPro presentation
// Works entirely in the browser with no external assets needed!

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isEnabled = false;
    this.ambientOsc = null;
    this.ambientGain = null;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.isEnabled = !this.isEnabled;
    if (this.isEnabled) {
      this.init();
      this.playChirp();
      this.startAmbient();
    } else {
      this.stopAmbient();
    }
    return this.isEnabled;
  }

  playWhoosh(direction = 1) {
    if (!this.isEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(1600, this.ctx.currentTime + 0.15);
      filter.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.35);

      osc.type = 'sine';
      const startFreq = direction > 0 ? 180 : 360;
      const endFreq = direction > 0 ? 340 : 160;
      osc.frequency.setValueAtTime(startFreq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(endFreq, this.ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.35);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.36);
    } catch {
      // Audio fallback silent
    }
  }

  playChirp() {
    if (!this.isEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1760, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.13);
    } catch {
      // Audio fallback silent
    }
  }

  playVictory() {
    if (!this.isEnabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      setTimeout(() => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

          gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start();
          osc.stop(this.ctx.currentTime + 0.45);
        } catch {
          // silent
        }
      }, i * 110);
    });
  }

  startAmbient() {
    if (!this.isEnabled || this.ambientOsc || !this.ctx) return;
    try {
      this.ambientOsc = this.ctx.createOscillator();
      this.ambientGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(180, this.ctx.currentTime);

      this.ambientOsc.type = 'sawtooth';
      this.ambientOsc.frequency.setValueAtTime(55, this.ctx.currentTime); // Low A

      this.ambientGain.gain.setValueAtTime(0.015, this.ctx.currentTime);

      this.ambientOsc.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc.start();
    } catch {
      // silent
    }
  }

  stopAmbient() {
    if (this.ambientOsc) {
      try {
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.3);
        setTimeout(() => {
          if (this.ambientOsc) {
            this.ambientOsc.stop();
            this.ambientOsc.disconnect();
            this.ambientOsc = null;
          }
        }, 320);
      } catch {
        this.ambientOsc = null;
      }
    }
  }
}

export const soundManager = new SoundSystem();

