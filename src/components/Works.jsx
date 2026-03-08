

import { useState } from "react";
import { Reveal, SectionHeader } from "./UI";
import { PROJECTS } from "../data/data";
import { FaCheckCircle, FaGithub, FaGooglePlay, FaLink, FaLock, FaRegImage } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

const PROJECT_IMAGES = import.meta.glob("../assets/*", {
  eager: true,
  import: "default",
});

const getProjectImageSrc = (relativePath) => PROJECT_IMAGES[`../assets/${relativePath}`] || null;

// ── Status badge ──────────────────────────────────────────────
function Badge({ label, color, bg, icon }) {
  return (
    <span style={{
      fontSize: ".57rem", letterSpacing: ".1em", textTransform: "uppercase",
      fontFamily: "'Space Mono', monospace",
      padding: ".2rem .6rem", borderRadius: "100px",
      background: bg, color, border: `1px solid ${color}44`,
      display: "inline-flex", alignItems: "center", gap: ".3rem",
    }}>
      {icon}
      {label}
    </span>
  );
}

// ── Project screenshot placeholder ───────────────────────────
// Shows actual image if screenshotPath is set in data.js.
function ProjectImage({ project, t }) {
  if (project.screenshotPath) {
    const imageSrc = getProjectImageSrc(project.screenshotPath);
    if (imageSrc) {
      return (
        <img
          src={imageSrc}
          alt={project.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      );
    }
  }
  // Placeholder
  return (
    <>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .07 }} viewBox="0 0 300 155">
        {[...Array(7)].map((_, i) => <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="155" stroke={t.red} strokeWidth="1" />)}
        {[...Array(4)].map((_, i) => <line key={`h${i}`} x1="0" y1={i * 52} x2="300" y2={i * 52} stroke={t.red} strokeWidth="1" />)}
      </svg>
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(135deg, ${t.red}10, transparent, ${t.orange}10)`,
      }} />
      <span style={{ fontSize: "3.5rem", position: "relative", zIndex: 1 }}>{project.emoji}</span>
      <div style={{
        position: "absolute", bottom: "8px", right: "10px",
        fontSize: ".5rem", color: t.red,
        fontFamily: "'Space Mono', monospace",
        opacity: .55, letterSpacing: ".08em",
        display: "inline-flex", alignItems: "center", gap: ".2rem",
      }}><FaRegImage size={9} /> add screenshot</div>
    </>
  );
}

// ── Single project card ───────────────────────────────────────
function ProjectCard({ project: p, t, onNoLink }) {
  const [hov, setHov] = useState(false);

  // Build status badges
  const statusBadges = [
    p.running   && { label: "Running",   color: "#22c55e", bg: "#22c55e18", icon: <FiRefreshCw size={11} /> },
    p.complete  && { label: "Complete",  color: "#3b82f6", bg: "#3b82f618", icon: <FaCheckCircle size={10} /> },
    p.playstore && { label: "Play Store", color: t.red,    bg: `${t.red}18`, icon: <FaGooglePlay size={10} /> },
    p.github    && { label: "GitHub",    color: t.orange,  bg: `${t.orange}18`, icon: <FaGithub size={10} /> },
  ].filter(Boolean);

  if (statusBadges.length === 0)
    statusBadges.push({ label: "Private", color: t.muted, bg: `${t.muted}15`, icon: <FaLock size={10} /> });

  return (
    <div
      style={{
        background: t.card,
        border: `1px solid ${hov ? t.red + "55" : t.border}`,
        borderRadius: "20px", overflow: "hidden",
        display: "flex", flexDirection: "column",
        transform: hov ? "translateY(-7px)" : "none",
        boxShadow: hov
          ? (t.bg === "#080808" ? "0 22px 50px rgba(0,0,0,.45)" : "0 16px 34px rgba(17,24,39,.14)")
          : "none",
        transition: "all .35s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Screenshot / placeholder */}
      <div style={{
        height: "158px", background: t.bg3,
        display: "flex", alignItems: "center", justifyContent: "center",
        borderBottom: `1px solid ${t.border}`,
        position: "relative", overflow: "hidden",
      }}>
        <ProjectImage project={p} t={t} />
      </div>

      {/* Body */}
      <div style={{ padding: "1.3rem", flex: 1, display: "flex", flexDirection: "column", gap: ".7rem" }}>

        {/* Status badges row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
          {statusBadges.map(b => <Badge key={b.label} {...b} />)}
        </div>

        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.22rem", fontWeight: 400, color: t.fg,
        }}>{p.title}</div>

        <p style={{ fontSize: ".82rem", lineHeight: 1.68, color: t.muted, flex: 1 }}>{p.desc}</p>

        {/* Tech stack pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem" }}>
          {p.tech.map(tech => (
            <span key={tech} style={{
              fontFamily: "'Space Mono', monospace", fontSize: ".57rem",
              letterSpacing: ".06em", padding: ".2rem .55rem",
              borderRadius: "100px", border: `1px solid ${hov ? t.orange + "55" : t.border}`,
              color: hov ? t.orange : t.muted, transition: "all .3s",
            }}>{tech}</span>
          ))}
        </div>

        {/* Action buttons — only rendered when URL exists */}
        <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", marginTop: "auto", paddingTop: ".3rem" }}>
          {p.github && (
            <LinkBtn href={p.github} label="GitHub" icon={<FaGithub size={12} />} t={t} variant="outline" />
          )}
          {p.playstore && (
            <LinkBtn href={p.playstore} label="Play Store" icon={<FaGooglePlay size={12} />} t={t} variant="gradient" />
          )}
          {p.demo && (
            <LinkBtn href={p.demo} label="Demo" icon={<FaLink size={12} />} t={t} variant="gradient" />
          )}
          {/* If no links at all, show a "coming soon" */}
          {!p.github && !p.playstore && !p.demo && (
            <button onClick={onNoLink} style={{
              flex: 1, padding: ".5rem", borderRadius: "9px",
              fontFamily: "'Space Mono', monospace", fontSize: ".6rem",
              letterSpacing: ".07em", background: `${t.muted}15`,
              color: t.muted, border: `1px solid ${t.border}`, cursor: "pointer",
            }}>Coming Soon</button>
          )}
        </div>

      </div>
    </div>
  );
}

// ── Small link button ─────────────────────────────────────────
function LinkBtn({ href, label, icon, t, variant }) {
  const styles = {
    outline:  { background: t.bg,  color: t.fg,   border: `1px solid ${t.border}` },
    gradient: { background: `linear-gradient(135deg, ${t.red}, ${t.orange})`, color: "#fff", border: "none" },
  };
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{
      flex: 1, padding: ".5rem", borderRadius: "9px", textAlign: "center",
      fontFamily: "'Space Mono', monospace", fontSize: ".6rem",
      letterSpacing: ".07em", transition: "opacity .2s",
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: ".35rem",
      ...styles[variant],
    }}
      onMouseEnter={e => e.currentTarget.style.opacity = ".8"}
      onMouseLeave={e => e.currentTarget.style.opacity = "1"}
    >{icon}{label}</a>
  );
}

// ── Works section ─────────────────────────────────────────────
export default function Works({ t, showToast }) {
  return (
    <section id="works" style={{ padding: "6rem 2.5rem", background: t.bg2 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <SectionHeader
          number="03" label="Works"
          title={<>My <em style={{ fontStyle: "italic", color: t.red }}>Projects</em></>}
          accent={t.red}
        />

        <div className="auto-col" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1.3rem",
        }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} dir="up" delay={i * 0.06}>
              <ProjectCard
                project={p}
                t={t}
                onNoLink={() => showToast("⚠ No link available yet")}
              />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
