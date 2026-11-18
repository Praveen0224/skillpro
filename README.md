# SkillPro 2026 – Futuristic Tech Competition Presentation Website

A modern, high-definition, cinematic web presentation built with **React (Vite)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**. Engineered to run like an interactive, ultra-fluid keynote presentation on laptop, desktop, and large auditorium projector screens.

---

## ⚡ Live Local Server
The development server is live at:
```
http://localhost:3000/
```

---

## 🚀 Key Features

### 1. Interactive Keynote Presentation Engine
- **100vh Fullscreen Slides**: Scroll-free, distraction-free slides with directional spring animations.
- **Projector Ready**: Optimized typography, neon glow contrast ratios, and dark void background (`#030712`) calibrated for large event screens.
- **Top Holographic Progress Bar**: Real-time progress bar tracking the exact completion percentage of the presentation.
- **Slide Counter**: Prominent `01 / 08` neon cyber indicator.
- **Slide Navigation Dots**: Floating bottom dock with hover tooltips previewing slide titles.
- **Floating Presenter HUD**: Bottom control center with next/prev buttons, autoplay, audio toggle, slide matrix overview, and fullscreen triggers.

### 2. Complete Keyboard & Presenter Remote Controls
| Key | Action |
|---|---|
| `→` / `Space` / `↓` / `PageDown` | Advance to Next Slide |
| `←` / `↑` / `PageUp` | Return to Previous Slide |
| `1` – `8` | Jump directly to Slide 1 through 8 |
| `F` | Toggle Fullscreen Presentation Mode |
| `O` | Open Keynote Matrix Overview (All 8 Slides) |
| `P` | Toggle Autoplay Mode (9s per slide with timer bar) |
| `M` | Toggle Ambient & Sound FX (Web Audio API Synthesizer) |
| `?` or `H` | Show Presenter Keyboard Shortcut Cheat Sheet |
| `Esc` | Close dialogs / Exit Fullscreen |

### 3. All 8 High-Definition Slides
1. **Slide 1 – Hero / Introduction**: Large glowing SkillPro 2026 typography, tagline (*Innovate | Compete | Create*), animated particle constellation, and "Start Presentation" CTA.
2. **Slide 2 – About SkillPro**: Flagship competition platform conducted by our company to spark student ingenuity with 3 interactive pillars and mission stats.
3. **Slide 3 – Why SkillPro?**: 6 core pillars (*Technical Skills*, *Problem-Solving*, *Creativity*, *Industry Exposure*, *Teamwork*, *Career Confidence*) with metrics and glowing cards.
4. **Slide 4 – Competition Categories**: 5 arena tracks (*Coding Challenge*, *Technical Quiz*, *Project Presentation*, *Innovation Challenge*, *Design Challenge*) with difficulty badges, tech stacks, and deliverable criteria.
5. **Slide 5 – How It Works**: Animated competition journey (*Registration → Team Formation → Competition → Evaluation → Awards & Recognition*) with interactive phase inspection.
6. **Slide 6 – What Students Gain**: Deep breakdown of tangible career dividends (*Practical Experience*, *Technical Knowledge*, *Communication Skills*, *Networking*, *Certificates*, *Career Fast-Track*).
7. **Slide 7 – Awards & Recognition**: Gold, Silver, and Bronze trophy podium cards for ₹5,00,000+ prize pool, special category awards, and interactive **Celebration Confetti FX**.
8. **Slide 8 – Call to Action**: *"YOUR IDEAS. YOUR SKILLS. YOUR FUTURE."*, countdown timer, and interactive **JOIN SKILLPRO 2026** button opening a digital VIP participant pass generator.

### 4. Built-in Procedural Audio Synthesizer (Web Audio API)
- No external audio files or network dependencies required.
- Includes slide transition sweeps, laser chirps, victory fanfare, and a subtle low-frequency ambient synth drone.
- **Off by default** as requested; easily toggled with `M` or the speaker button in the HUD.

---

## 🛠️ Tech Stack
- **Framework**: React.js 18 (Vite 5)
- **Language**: JavaScript JSX (No TypeScript)
- **Styling**: Tailwind CSS 3 with custom cyber extensions
- **Animation**: Framer Motion 11
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **Audio**: Web Audio API procedural synthesis

---

## 💻 Commands
- Run Development Server: `npm run dev`
- Build for Production: `npm run build`
- Preview Production Build: `npm run preview`

