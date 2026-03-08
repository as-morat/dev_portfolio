

import { Reveal, SectionHeader } from "./UI";
import { SKILLS } from "../data/data";

const ICONS = import.meta.glob("../assets/icons/*", {
  eager: true,
  import: "default",
});

const getIconSrc = (iconPath) => ICONS[`../assets/icons/${iconPath}`] || null;

// ── SkillIcon ─────────────────────────────────────────────────
// Renders icon from local assets.
function SkillIcon({ skill }) {
  const iconSrc = skill.iconPath ? getIconSrc(skill.iconPath) : null;
  if (!iconSrc) return null;

  return (
    <div style={{
      width: "100%", aspectRatio: "1",
      borderRadius: "14px",
      background: `${skill.color}16`,
      border: `1px solid ${skill.color}30`,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      <img
        src={iconSrc}
        alt={skill.name}
        style={{ width: "2rem", height: "2rem", objectFit: "contain", position: "relative", zIndex: 1 }}
      />
    </div>
  );
}

// ── SkillCard ─────────────────────────────────────────────────
function SkillCard({ skill, t }) {
  return (
    <div
      style={{
        background: t.card, border: `1px solid ${t.border}`,
        borderRadius: "16px", padding: "1rem .8rem",
        textAlign: "center", cursor: "default", transition: "all .3s",
        minHeight: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform    = "translateY(-5px)";
        e.currentTarget.style.borderColor  = skill.color + "66";
        e.currentTarget.style.boxShadow    = t.bg === "#080808"
          ? "0 12px 32px rgba(0,0,0,.3)"
          : "0 10px 24px rgba(17,24,39,.12)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform    = "";
        e.currentTarget.style.borderColor  = t.border;
        e.currentTarget.style.boxShadow    = "";
      }}
    >
      <SkillIcon skill={skill} />
      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: ".66rem",
        letterSpacing: ".07em", color: t.fg, marginTop: ".7rem",
      }}>{skill.name}</div>
      <div style={{ fontSize: ".62rem", color: t.muted, marginTop: ".2rem" }}>{skill.sub}</div>
    </div>
  );
}

// ── Skills section ────────────────────────────────────────────
export default function Skills({ t }) {
  return (
    <section id="skills" style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 2.5rem)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <SectionHeader
          number="02" label="Skills"
          title={<>What I <em style={{ fontStyle: "italic", color: t.red }}>know</em></>}
          accent={t.red}
        />

        <div className="skills-serial-grid">
          {SKILLS.map((sk, i) => (
            <Reveal key={sk.name} dir="up" delay={Math.floor(i / 7) * 0.05} style={{ height: "100%" }}>
              <SkillCard skill={sk} t={t} />
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .skills-serial-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 1rem;
          align-items: stretch;
        }
        .skills-serial-grid > * {
          height: 100%;
        }
        @media (max-width: 1200px) {
          .skills-serial-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }
        }
        @media (max-width: 980px) {
          .skills-serial-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        }
        @media (max-width: 820px) {
          .skills-serial-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
          .skills-serial-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .75rem; }
        }
        @media (max-width: 460px) {
          .skills-serial-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </section>
  );
}
