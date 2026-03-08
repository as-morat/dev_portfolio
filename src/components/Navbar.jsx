// ─────────────────────────────────────────────────────────────
//  components/Navbar.jsx
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { NAV_LINKS } from "../data/data";
import logo from "../assets/icons/logo.svg";

export default function Navbar({ t, themeKey, toggleTheme, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Desktop / Mobile bar ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1rem 2.5rem",
        background: themeKey === "dark" ? "rgba(8,8,8,.92)" : "rgba(250,249,247,.92)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${t.border}`,
        transition: "background .4s",
      }}>
        {/* Logo */}
        <button
          onClick={() => scrollTo("Home")}
          aria-label="Go to home"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            margin: 0,
            cursor: "pointer",
            width: "clamp(112px, 13vw, 156px)",
            height: "26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              transform: "scale(1.45)",
              transformOrigin: "center",
              display: "block",
            }}
          />
        </button>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: "flex", gap: "1.8rem", alignItems: "center" }}>
          {NAV_LINKS.map(n => {
            const isActive = activeSection === n.toLowerCase();
            return (
              <button key={n} onClick={() => scrollTo(n)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Space Mono', monospace", fontSize: ".68rem",
                letterSpacing: ".14em", textTransform: "uppercase",
                color: isActive ? t.red : t.muted,
                position: "relative", padding: "4px 0",
                transition: "color .3s",
              }}>
                {n}
                {isActive && (
                  <span style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
                    background: `linear-gradient(90deg, ${t.red}, ${t.orange})`,
                  }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Right controls */}
        <div style={{ display: "flex", gap: ".6rem", alignItems: "center" }}>
          <button onClick={toggleTheme} style={{
            background: "none", border: `1px solid ${t.border}`,
            color: t.muted, padding: ".38rem .85rem", borderRadius: "100px",
            cursor: "pointer", fontFamily: "'Space Mono', monospace",
            fontSize: ".6rem", letterSpacing: ".1em", transition: "all .3s",
          }}>◐ Theme</button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: "20px", height: "1px", background: t.fg, transition: "all .3s",
                ...(menuOpen && i === 0 ? { transform: "rotate(45deg) translate(4px,4px)" } : {}),
                ...(menuOpen && i === 1 ? { opacity: 0 } : {}),
                ...(menuOpen && i === 2 ? { transform: "rotate(-45deg) translate(4px,-4px)" } : {}),
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen menu ── */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: themeKey === "dark" ? "rgba(0,0,0,.92)" : "rgba(250,249,247,.94)",
            backdropFilter: "blur(16px)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "2.2rem",
          }}
        >
          {NAV_LINKS.map(n => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.6rem", fontStyle: "italic", fontWeight: 300,
              color: activeSection === n.toLowerCase() ? t.red : t.fg,
              transition: "color .2s",
            }}>{n}</button>
          ))}
        </div>
      )}
    </>
  );
}
