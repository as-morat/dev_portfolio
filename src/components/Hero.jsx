// // ─────────────────────────────────────────────────────────────
// // components/Hero.jsx
// // ─────────────────────────────────────────────────────────────

// import { Reveal, Btn } from "./UI";
// import { PERSONAL, TYPED_ROLES } from "../data/data";
// import { useTyping } from "../hooks/hooks";
// import rafatPic from "../assets/images/rafat.png";

// export default function Hero({ t }) {
//   const typed = useTyping(TYPED_ROLES);

//   return (
//     <section
//       id="home"
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "7rem 2.5rem 5rem",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >

//       {/* Ambient glow background */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           pointerEvents: "none",
//           background: `
//           radial-gradient(ellipse at 70% 40%, ${t.red}22 0%, transparent 60%),
//           radial-gradient(ellipse at 15% 85%, ${t.orange}18 0%, transparent 50%)
//         `,
//         }}
//       />

//       {/* cinematic bottom fade */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(to bottom, transparent 65%, rgba(0,0,0,0.35) 100%)",
//           pointerEvents: "none",
//         }}
//       />

//       <div
//         style={{
//           maxWidth: "1200px",
//           width: "100%",
//           display: "grid",
//           gridTemplateColumns: "1.05fr 1fr",
//           gap: "7rem",
//           alignItems: "center",
//         }}
//       >

//         {/* ───────── TEXT SIDE ───────── */}

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "1.6rem",
//           }}
//         >

//           <Reveal dir="up">
//             <span
//               style={{
//                 fontFamily: "'Space Mono', monospace",
//                 fontSize: ".65rem",
//                 letterSpacing: ".22em",
//                 textTransform: "uppercase",
//                 color: t.red,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: ".8rem",
//               }}
//             >
//               <span
//                 style={{
//                   width: "32px",
//                   height: "1px",
//                   background: t.red,
//                   flexShrink: 0,
//                 }}
//               />
//               {PERSONAL.tagline}
//             </span>
//           </Reveal>

//           <Reveal dir="up" delay={0.08}>
//             <h1
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: "clamp(3.2rem, 7vw, 5.7rem)",
//                 fontWeight: 300,
//                 lineHeight: 1.05,
//                 color: t.fg,
//               }}
//             >
//               Hello,<br />
//               I'm{" "}
//               <em
//                 style={{
//                   fontStyle: "italic",
//                   background: `linear-gradient(135deg, ${t.red}, ${t.orange})`,
//                   backgroundClip: "text",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 {PERSONAL.alias}
//               </em>
//             </h1>
//           </Reveal>

//           {/* typing role */}

//           <Reveal dir="up" delay={0.16}>
//             <div
//               style={{
//                 fontFamily: "'Space Mono', monospace",
//                 fontSize: "1rem",
//                 color: t.fg,
//                 letterSpacing: ".05em",
//                 minHeight: "1.4em",
//               }}
//             >
//               {typed}
//               <span
//                 style={{
//                   display: "inline-block",
//                   width: "2px",
//                   height: "1em",
//                   background: t.red,
//                   verticalAlign: "text-bottom",
//                   marginLeft: "3px",
//                   animation: "blink .9s steps(1) infinite",
//                 }}
//               />
//             </div>
//           </Reveal>

//           <Reveal dir="up" delay={0.22}>
//             <p
//               style={{
//                 fontSize: ".95rem",
//                 lineHeight: 1.85,
//                 color: t.muted,
//                 maxWidth: "440px",
//               }}
//             >
//               A Software Engineering student & passionate mobile developer
//               from Bangladesh — crafting elegant apps with{" "}
//               <strong style={{ color: t.fg }}>Kotlin</strong>,{" "}
//               <strong style={{ color: t.fg }}>Flutter</strong> &{" "}
//               <strong style={{ color: t.fg }}>Jetpack Compose</strong>.
//             </p>
//           </Reveal>

//           <Reveal dir="up" delay={0.30}>
//             <div
//               style={{
//                 display: "flex",
//                 gap: "1rem",
//                 flexWrap: "wrap",
//                 marginTop: ".5rem",
//               }}
//             >
//               <Btn
//                 onClick={() =>
//                   document
//                     .getElementById("works")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//                 red={t.red}
//                 orange={t.orange}
//               >
//                 View My Work →
//               </Btn>

//               <Btn
//                 href={PERSONAL.telegram}
//                 variant="outline"
//                 red={t.red}
//                 orange={t.orange}
//                 border={t.border}
//                 fg={t.fg}
//               >
//                 Connect
//               </Btn>
//             </div>
//           </Reveal>
//         </div>

//         {/* ───────── HERO PORTRAIT ───────── */}

//         <Reveal
//           dir="right"
//           delay={0.1}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             position: "relative",
//           }}
//         >

//           {/* glow */}
//           <div
//             style={{
//               position: "absolute",
//               width: "600px",
//               height: "600px",
//               background: `radial-gradient(circle, ${t.red}25 0%, ${t.orange}12 40%, transparent 70%)`,
//               filter: "blur(50px)",
//               zIndex: 0,
//             }}
//           />

//           {/* portrait */}
//           <div
//             style={{
//               width: "460px",
//               position: "relative",
//               zIndex: 2,
//               animation: "float 6s ease-in-out infinite",
//             }}
//           >
//             <img
//               src={rafatPic}
//               alt="profile"
//               style={{
//                 width: "100%",
//                 objectFit: "cover",

//                 WebkitMaskImage:
//                   "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
//                 maskImage:
//                   "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",

//                 filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.5))",
//               }}
//             />
//           </div>

//           {/* subtle ring */}
//           <div
//             style={{
//               position: "absolute",
//               width: "500px",
//               height: "500px",
//               borderRadius: "50%",
//               border: `1px solid ${t.border}`,
//               opacity: 0.25,
//               zIndex: 1,
//             }}
//           />

//         </Reveal>

//       </div>

//       {/* animations */}
//       <style>{`
//         @keyframes blink {
//           0%,100% {opacity:1;}
//           50% {opacity:0;}
//         }

//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-12px); }
//           100% { transform: translateY(0px); }
//         }
//       `}</style>

//     </section>
//   );
// }



import { Reveal, Btn } from "./UI";
import { PERSONAL, TYPED_ROLES } from "../data/data";
import { useTyping } from "../hooks/hooks";
import rafatPic from "../assets/images/rafat.png";
import resume from "../assets/resume/Al Shahriar Mohammad Rafat.pdf";

export default function Hero({ t }) {
  const typed = useTyping(TYPED_ROLES);

  const isDark = t.bg === "#080808";

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "7rem 2.5rem 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Lighting (Dark / Light different) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: isDark
            ? `
            radial-gradient(circle at 75% 45%, ${t.red}33 0%, transparent 55%),
            radial-gradient(circle at 20% 90%, ${t.orange}22 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, #000 20%, transparent 60%)
          `
            : `
            radial-gradient(circle at 75% 45%, rgba(255,120,80,0.35) 0%, transparent 55%),
            radial-gradient(circle at 20% 90%, rgba(255,170,120,0.25) 0%, transparent 50%),
            linear-gradient(180deg,#f6f3f1 0%,#ece6e1 100%)
          `,
        }}
      />

      {/* Bottom cinematic fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? "linear-gradient(to bottom, transparent 65%, rgba(0,0,0,0.45) 100%)"
            : "linear-gradient(to bottom, transparent 70%, rgba(0,0,0,0.08) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="two-col"
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "6rem",
          alignItems: "center",
        }}
      >
        {/* TEXT SIDE */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.6rem",
          }}
        >
          <Reveal dir="up">
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: ".65rem",
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: t.red,
                display: "flex",
                alignItems: "center",
                gap: ".8rem",
              }}
            >
              <span
                style={{
                  width: "32px",
                  height: "1px",
                  background: t.red,
                }}
              />
              {PERSONAL.tagline}
            </span>
          </Reveal>

          <Reveal dir="up" delay={0.08}>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3.2rem, 7vw, 5.7rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: t.fg,
              }}
            >
              Hello,<br />
              I'm{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: t.red,
                }}
              >
                {PERSONAL.alias}
              </em>
            </h1>
          </Reveal>

          {/* Typing */}

          <Reveal dir="up" delay={0.16}>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "1rem",
                color: t.fg,
                letterSpacing: ".05em",
                minHeight: "1.4em",
              }}
            >
              {typed}
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1em",
                  background: t.red,
                  marginLeft: "3px",
                  animation: "blink .9s steps(1) infinite",
                }}
              />
            </div>
          </Reveal>

          <Reveal dir="up" delay={0.22}>
            <p
              style={{
                fontSize: ".95rem",
                lineHeight: 1.9,
                color: isDark ? t.muted : "#5a5a5a",
                maxWidth: "460px",
              }}
            >
              A Software Engineering student & passionate mobile developer
              from Bangladesh — crafting elegant apps with{" "}
              <strong style={{ color: t.fg }}>Kotlin</strong>,{" "}
              <strong style={{ color: t.fg }}>Flutter</strong> &{" "}
              <strong style={{ color: t.fg }}>Jetpack Compose</strong>.
            </p>
          </Reveal>

          <Reveal dir="up" delay={0.30}>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Btn
                href={resume}
                red={t.red}
                orange={t.orange}
              >
                View My Resume →
              </Btn>

              <Btn
                href={PERSONAL.telegram}
                variant="outline"
                red={t.red}
                orange={t.orange}
                border={t.border}
                fg={t.fg}
              >
                Connect
              </Btn>
            </div>
          </Reveal>
        </div>

        {/* HERO IMAGE */}

        <Reveal
          dir="right"
          delay={0.1}
          className="hero-image"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              right: "-120px",
              top: "-60px",
              width: "720px",
              height: "720px",
              background: `radial-gradient(circle, ${t.red}25 0%, ${t.orange}15 40%, transparent 70%)`,
              filter: "blur(70px)",
            }}
          />

          {/* Head glow */}
          <div
            style={{
              position: "absolute",
              right: "60px",
              top: "20px",
              width: "260px",
              height: "260px",
              background: `radial-gradient(circle, ${t.orange}55 0%, transparent 70%)`,
              filter: "blur(70px)",
            }}
          />

          {/* Image */}
          <div
            className="image-container"
            style={{
              width: "520px",
              transform: "translate(80px,-40px)",
              animation: "float 6s ease-in-out infinite",
              position: "relative",
              zIndex: 2,
            }}
          >
            <img
              src={rafatPic}
              alt="profile"
              style={{
                width: "100%",
                objectFit: "cover",

                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",

                filter:
                  isDark
                    ? "drop-shadow(0 50px 70px rgba(0,0,0,0.6)) saturate(1.05) contrast(1.05)"
                    : "drop-shadow(0 24px 36px rgba(17,24,39,0.16)) saturate(1.02) contrast(1.02)",

                mixBlendMode: "normal",
              }}
            />
          </div>

          {/* Ring */}
          { !isDark && (
            <div
              style={{
                position: "absolute",
                right: "40px",
                width: "560px",
                height: "560px",
                borderRadius: "50%",
                border: `1px solid ${t.border}`,
                opacity: 0.25,
              }}
            />
          ) }
        </Reveal>
      </div>

      <style>{`
        @keyframes blink {
          0%,100% {opacity:1;}
          50% {opacity:0;}
        }

        @keyframes float {
          0% { transform: translate(80px,-40px); }
          50% { transform: translate(80px,-55px); }
          100% { transform: translate(80px,-40px); }
        }

        @media(max-width: 640px) {
          .hero-image { justify-content: center !important; }
          .image-container { transform: translate(0px,-40px) !important; }
        }
      `}</style>
    </section>
  );
}
