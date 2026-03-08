// ─────────────────────────────────────────────────────────────
//  components/UI.jsx  —  Tiny reusable building blocks
//  used across multiple sections.
// ─────────────────────────────────────────────────────────────

import { useInView } from "../hooks/hooks";
import {
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaRedditAlien,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";

// ── Reveal ────────────────────────────────────────────────────
// Wraps children in a scroll-triggered fade-in animation.
// dir: "up" | "left" | "right"
// delay: seconds (e.g. 0.1)
export function Reveal({ children, dir = "up", delay = 0, style = {} }) {
  const [ref, visible] = useInView();

  const hidden = {
    up:    { opacity: 0, transform: "translateY(28px)" },
    left:  { opacity: 0, transform: "translateX(-28px)" },
    right: { opacity: 0, transform: "translateX(28px)" },
  };
  const shown = { opacity: 1, transform: "translate(0,0)" };
  const transition = `opacity .65s ${delay}s ease, transform .65s ${delay}s ease`;

  return (
    <div ref={ref} style={{ transition, ...(visible ? shown : hidden[dir]), ...style }}>
      {children}
    </div>
  );
}

// ── SectionHeader ─────────────────────────────────────────────
// Renders the numbered label + big italic title used by every section.
export function SectionHeader({ number, label, title, accent, titleStyle = {} }) {
  return (
    <>
      <Reveal dir="up">
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: ".63rem", letterSpacing: ".22em", textTransform: "uppercase",
          color: accent, display: "flex", alignItems: "center", gap: ".8rem",
          marginBottom: ".7rem",
        }}>
          <span style={{ width: "26px", height: "1px", background: accent, display: "inline-block" }} />
          {number} — {label}
        </div>
      </Reveal>
      <Reveal dir="up" delay={0.08}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
          fontWeight: 300, lineHeight: 1.1, marginBottom: "2.8rem",
          ...titleStyle,
        }}>
          {title}
        </h2>
      </Reveal>
    </>
  );
}

// ── Divider ───────────────────────────────────────────────────
// Subtle horizontal rule between sections.
export function Divider({ borderColor }) {
  return (
    <div style={{
      height: "1px", margin: "0 auto", width: "82%",
      background: `linear-gradient(90deg, transparent, ${borderColor}, transparent)`,
    }} />
  );
}

// ── Btn ───────────────────────────────────────────────────────
// Primary gradient button or outline variant.
export function Btn({ children, onClick, href, variant = "primary", red, orange, border, fg, style = {} }) {
  const base = {
    padding: ".72rem 1.7rem", borderRadius: "100px",
    fontFamily: "'Space Mono', monospace", fontSize: ".72rem",
    letterSpacing: ".08em", fontWeight: 700,
    cursor: "pointer", transition: "all .3s",
    display: "inline-flex", alignItems: "center", gap: ".4rem",
  };
  const styles = {
    primary: { background: `linear-gradient(135deg, ${red}, ${orange})`, color: "#fff",  border: "none" },
    outline: { background: "none", color: fg, border: `1px solid ${border}` },
  };

  const combined = { ...base, ...styles[variant], ...style };
  if (href) return <a href={href} target="_blank" rel="noreferrer" style={combined}>{children}</a>;
  return <button onClick={onClick} style={combined}>{children}</button>;
}

// ── SocialIcon ────────────────────────────────────────────────
export function SocialIcon({ label, href, title, t }) {
  const key = (title || label || "").toLowerCase();
  const Icon = key.includes("github")
    ? FaGithub
    : key.includes("linkedin")
      ? FaLinkedinIn
      : key === "x" || key.includes("twitter")
        ? FaXTwitter
        : key.includes("telegram")
          ? FaTelegramPlane
          : key.includes("whatsapp")
            ? FaWhatsapp
            : key.includes("reddit")
              ? FaRedditAlien
              : key.includes("fiverr")
                ? SiFiverr
                : key.includes("upwork")
                  ? FaUpwork
                  : FaGlobe;

  return (
    <a href={href} target="_blank" rel="noreferrer" title={title} style={{
      width: "42px", height: "42px", border: `1px solid ${t.border}`,
      borderRadius: "11px", display: "flex", alignItems: "center",
      justifyContent: "center", color: t.muted,
      fontFamily: "'Space Mono', monospace", fontSize: ".65rem",
      transition: "all .3s", flexShrink: 0,
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = t.red; e.currentTarget.style.color = t.red; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.muted; e.currentTarget.style.transform = ""; }}
    ><Icon size={16} aria-label={title || label} /></a>
  );
}

// ── Toast ─────────────────────────────────────────────────────
export function Toast({ message, t }) {
  return (
    <div style={{
      position: "fixed", bottom: "2rem", left: "50%",
      transform: `translateX(-50%) translateY(${message ? "0" : "70px"})`,
      opacity: message ? 1 : 0,
      background: t.card, border: `1px solid ${t.border}`,
      borderRadius: "12px", padding: ".75rem 1.5rem",
      fontFamily: "'Space Mono', monospace", fontSize: ".67rem",
      letterSpacing: ".08em", color: t.orange,
      boxShadow: t.bg === "#080808" ? "0 12px 30px rgba(0,0,0,.4)" : "0 10px 24px rgba(17,24,39,.12)",
      zIndex: 500, transition: "transform .4s cubic-bezier(.16,1,.3,1), opacity .4s",
      whiteSpace: "nowrap", pointerEvents: "none",
    }}>{message}</div>
  );
}
