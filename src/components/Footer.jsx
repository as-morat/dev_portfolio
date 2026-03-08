// ─────────────────────────────────────────────────────────────
//  components/Footer.jsx
// ─────────────────────────────────────────────────────────────

import logo from "../assets/icons/logo.svg";

export default function Footer({ t }) {
  return (
    <footer style={{
      padding: "2rem 2.5rem",
      borderTop: `1px solid ${t.border}`,
      textAlign: "center",
      fontFamily: "'Space Mono', monospace",
      fontSize: ".62rem", letterSpacing: ".1em",
      color: t.muted,
    }}>
      <span>© {new Date().getFullYear()} </span>
      <img
        src={logo}
        alt="Ash Logo"
        style={{
          height: "18px",
          width: "auto",
          verticalAlign: "middle",
          margin: "0 .45rem",
          display: "inline-block",
        }}
      />
      <span> — Rafat Ash · Bangladesh 🇧🇩</span>
    </footer>
  );
}
