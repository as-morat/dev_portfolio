// ─────────────────────────────────────────────────────────────
//  App.jsx  —  Root component. Wires theme, hooks & sections.
//  You should rarely need to edit this file.
// ─────────────────────────────────────────────────────────────

import { THEMES, GLOBAL_CSS } from "./styles/theme";
import { useTheme, useToast, useActiveSection } from "./hooks/hooks";
import { NAV_LINKS } from "./data/data";

import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Skills   from "./components/Skills";
import Works    from "./components/Works";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";
import { Divider, Toast } from "./components/UI";

export default function App() {
  const [themeKey, toggleTheme] = useTheme("dark");
  const [toast,    showToast]   = useToast();
  const t = THEMES[themeKey];

  // Track which section is in the viewport for nav highlighting
  const sectionIds  = NAV_LINKS.map(n => n.toLowerCase());
  const activeSection = useActiveSection(sectionIds);

  return (
    <div style={{
      background: t.bg, color: t.fg,
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh", overflowX: "hidden",
      transition: "background .4s, color .4s",
    }}>
      {/* Inject global CSS & keyframes */}
      <style>{GLOBAL_CSS(t)}</style>

      {/* Navbar */}
      <Navbar
        t={t}
        themeKey={themeKey}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Page sections */}
      <Hero    t={t} />
      <Divider borderColor={t.border} />
      <About   t={t} />
      <Divider borderColor={t.border} />
      <Skills  t={t} />
      <Divider borderColor={t.border} />
      <Works   t={t} showToast={showToast} />
      <Divider borderColor={t.border} />
      <Contact t={t} />

      <Footer  t={t} />

      {/* Global toast notification */}
      <Toast message={toast} t={t} />
    </div>
  );
}
