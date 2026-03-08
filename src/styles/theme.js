// ─────────────────────────────────────────────────────────────
//  theme.js  —  All color tokens for dark & light modes
//  To add a new theme: copy one of the objects below and edit.
// ─────────────────────────────────────────────────────────────

export const THEMES = {
  dark: {
    bg:      "#080808",   // page background
    bg2:     "#0d0d0d",   // alternate section background
    bg3:     "#131313",   // card inner / image backgrounds
    card:    "#0f0f0f",   // card surface
    border:  "#1c1c1c",   // subtle borders
    fg:      "#f2ede8",   // primary text
    muted:   "#555",      // secondary / dim text
    red:     "#e63329",   // primary accent
    orange:  "#f97316",   // secondary accent
    gradient:"linear-gradient(135deg, #e63329 0%, #0d0d0d 50%, #f97316 100%)",
  },
  light: {
    bg:      "#faf9f7",
    bg2:     "#f2ede8",
    bg3:     "#ebe5de",
    card:    "#ffffff",
    border:  "#e0d5cb",
    fg:      "#0d0d0d",
    muted:   "#5f5852",
    red:     "#cc2a21",
    orange:  "#ea6c0a",
    gradient:"linear-gradient(135deg, #cc2a21 0%, #f2ede8 50%, #ea6c0a 100%)",
  },
};

// Global CSS injected once at app boot
export const GLOBAL_CSS = (t) => `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }
  a { text-decoration: none; }
  input, textarea, button { font-family: inherit; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-thumb { background: ${t.red}; }
  ::-webkit-scrollbar-track { background: ${t.bg}; }

  @keyframes blink       { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes morphBorder {
    0%,100% { border-radius: 60% 40% 55% 45% / 45% 55% 40% 60%; }
    33%     { border-radius: 40% 60% 45% 55% / 55% 40% 60% 45%; }
    66%     { border-radius: 55% 45% 60% 40% / 40% 60% 45% 55%; }
  }
  @keyframes glowPulse { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.07)} }
  @keyframes floatY    { 0%,100%{transform:translateY(0)}       50%{transform:translateY(-9px)}       }
  @keyframes spinSlow  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

  /* Responsive grid collapses */
  @media(max-width: 860px) {
    .desktop-nav { display: none !important; }
  }
  @media(max-width: 640px) {
    .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
    .auto-col { grid-template-columns: 1fr !important; }
  }
`;
