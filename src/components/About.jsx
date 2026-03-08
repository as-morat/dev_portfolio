// ─────────────────────────────────────────────────────────────
//  components/About.jsx
// ─────────────────────────────────────────────────────────────

import { Reveal, SectionHeader } from "./UI";
import { ABOUT_CARDS, ABOUT_PARAGRAPHS } from "../data/data";

export default function About({ t }) {
  return (
    <section id="about" style={{ padding: "6rem 2.5rem", background: t.bg2 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <SectionHeader
          number="01" label="About"
          title={<>Who I <em style={{ fontStyle: "italic", color: t.red }}>am</em></>}
          accent={t.red}
        />

        <div className="two-col" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "4rem", alignItems: "start",
        }}>

          {/* ── Bio text ── */}
          <Reveal dir="left" delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {ABOUT_PARAGRAPHS.map((para, i) => (
                <p key={i} style={{ fontSize: ".94rem", lineHeight: 1.85, color: t.muted }}>
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          {/* ── Info cards ── */}
          <Reveal dir="right" delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: ".8rem" }}>
              {ABOUT_CARDS.map(({ label, value }, i) => (
                <InfoCard key={i} label={label} value={value} t={t} />
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

// ── InfoCard ──────────────────────────────────────────────────
function InfoCard({ label, value, t }) {
  return (
    <div
      style={{
        background: t.card, border: `1px solid ${t.border}`,
        borderLeft: `2px solid ${t.red}`,
        borderRadius: "14px", padding: "1.1rem 1.3rem",
        transition: "all .3s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform    = "translateX(6px)";
        e.currentTarget.style.borderColor  = t.orange;
        e.currentTarget.style.borderLeftColor = t.orange;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform    = "";
        e.currentTarget.style.borderColor  = t.border;
        e.currentTarget.style.borderLeftColor = t.red;
      }}
    >
      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: ".58rem",
        letterSpacing: ".14em", textTransform: "uppercase",
        color: t.red, marginBottom: ".3rem",
      }}>{label}</div>
      <div style={{ fontSize: ".87rem", color: t.fg }}>{value}</div>
    </div>
  );
}
