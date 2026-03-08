// ─────────────────────────────────────────────────────────────
//  components/ProfilePhoto.jsx
//
//  HOW TO ADD YOUR REAL PHOTO:
//  1. Drop your image into  src/assets/profile.jpg  (or .png / .webp)
//  2. Import it at the top:
//       import profilePic from "../assets/profile.jpg";
//  3. Replace the entire <PlaceholderAvatar> block below with:
//       <img
//         src={profilePic}
//         alt="Ash"
//         style={{ width:"100%", height:"100%", objectFit:"cover" }}
//       />
//  4. Optionally delete PlaceholderAvatar — it's only used as a stand-in.
// ─────────────────────────────────────────────────────────────

import rafatPic from "../assets/images/rafat.png";

// ── Placeholder avatar (geometric SVG) ───────────────────────
function PlaceholderAvatar({ t }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: `radial-gradient(ellipse at 40% 35%, ${t.red}20 0%, #000 65%)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      <svg
        width="100%" height="100%"
        viewBox="0 0 300 380"
        style={{ position: "absolute", inset: 0 }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="av-grd" cx="50%" cy="40%">
            <stop offset="0%" stopColor={t.red}   stopOpacity=".28" />
            <stop offset="100%" stopColor="#000"  stopOpacity="0"   />
          </radialGradient>
        </defs>

        {/* Background wash */}
        <rect width="300" height="380" fill="url(#av-grd)" />

        {/* Faint grid */}
        {[...Array(7)].map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="380"
            stroke={t.red} strokeOpacity=".06" strokeWidth="1" />
        ))}
        {[...Array(9)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 47} x2="300" y2={i * 47}
            stroke={t.red} strokeOpacity=".06" strokeWidth="1" />
        ))}

        {/* Body silhouette */}
        <ellipse cx="150" cy="310" rx="105" ry="70" fill={t.red}   fillOpacity=".12" />
        <ellipse cx="150" cy="310" rx="80"  ry="55" fill={t.orange} fillOpacity=".08" />

        {/* Neck */}
        <rect x="138" y="210" width="24" height="40" rx="10"
          fill={t.fg} fillOpacity=".07" />

        {/* Head */}
        <ellipse cx="150" cy="175" rx="62" ry="72"
          fill={t.bg3} stroke={t.red} strokeOpacity=".25" strokeWidth="1.5" />

        {/* Eyes */}
        <ellipse cx="133" cy="165" rx="7" ry="8"
          fill={t.red} fillOpacity=".55" />
        <ellipse cx="167" cy="165" rx="7" ry="8"
          fill={t.red} fillOpacity=".55" />
        {/* Pupils */}
        <circle cx="134" cy="166" r="3" fill={t.bg} fillOpacity=".8" />
        <circle cx="168" cy="166" r="3" fill={t.bg} fillOpacity=".8" />

        {/* Smile */}
        <path d="M136 192 Q150 204 164 192"
          stroke={t.orange} strokeOpacity=".65" strokeWidth="2"
          fill="none" strokeLinecap="round" />

        {/* Hair */}
        <path d="M92 160 Q95 105 150 95 Q205 105 208 160"
          fill={t.fg} fillOpacity=".09" />

        {/* Collar / shirt */}
        <path d="M105 295 Q150 265 195 295 L200 380 L100 380 Z"
          fill={t.red} fillOpacity=".14" />
      </svg>

      {/* "Replace with photo" hint */}
      <div style={{
        position: "absolute", bottom: "14px", left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(0,0,0,.72)", backdropFilter: "blur(8px)",
        border: `1px solid ${t.red}44`,
        borderRadius: "8px", padding: "5px 14px",
        fontSize: ".58rem", letterSpacing: ".12em", textTransform: "uppercase",
        color: t.red, whiteSpace: "nowrap",
        fontFamily: "'Space Mono', monospace",
      }}>
        📷 Add your photo here
      </div>
    </div>
  );
}

// ── ProfilePhoto (simple image) ───────────
export default function ProfilePhoto({ t }) {
  return (
    <div style={{ position: "relative", width: "310px", height: "310px", borderRadius: "50%", overflow: "hidden" }}>
      <img
        src={rafatPic}
        alt="Rafat"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
