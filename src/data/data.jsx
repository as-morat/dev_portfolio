// ─────────────────────────────────────────────────────────────
//  data.js  —  All static content lives here.
//  Update your info, add projects, skills etc. in this file only.
// ─────────────────────────────────────────────────────────────

// ── NAVIGATION ───────────────────────────────────────────────
export const NAV_LINKS = ["Home", "About", "Skills", "Works", "Contact"];

// ── PERSONAL INFO ────────────────────────────────────────────
export const PERSONAL = {
  name:       "Al Shahriar Mohammad Rafat",
  alias:      "Ash",
  tagline:    "Available for freelance work",
  description:`A Software Engineering student & passionate mobile developer from Bangladesh
               — crafting elegant apps with Kotlin, Flutter & Jetpack Compose.`,
  telegram:   "https://t.me/dev_rafat",
  telegramUsername: "@dev_rafat",
  resumeUrl:  null,   // e.g. "/resume.pdf"  — set to enable download button
};

// ── ABOUT CARDS ──────────────────────────────────────────────
export const ABOUT_CARDS = [
  { label: "Experience",     value: "6+ months — Mobile & Android Development" },
  { label: "Education",      value: "B.Sc. Software Engineering · DIU, Bangladesh" },
  { label: "Specialization", value: "Kotlin · Flutter · Jetpack Compose · Firebase" },
  { label: "Freelance",      value: "Available on Fiverr & Upwork" },
  { label: "Location",       value: "Bangladesh 🇧🇩" },
];

export const ABOUT_PARAGRAPHS = [
  <>I'm <strong>Al Shahriar Mohammad Rafat</strong> — known as <strong style={{color:"inherit"}}>Ash</strong> — a mobile developer and Software Engineering student at Daffodil International University (DIU), Bangladesh.</>,
  <>I specialize in <strong>Android apps</strong> using <strong>Kotlin & Jetpack Compose</strong>, and cross-platform apps with <strong>Flutter & Dart</strong>. Clean UI paired with solid backend integrations.</>,
  <>Passionate about design, open-source, and pushing mobile experiences forward through thoughtful engineering.</>,
];

// ── TYPING ROLES ─────────────────────────────────────────────
export const TYPED_ROLES = [
  "Mobile App Developer",
  "Flutter & Dart Expert",
  "Android (Kotlin) Dev",
  "Jetpack Compose Lover",
  "Open to Freelance",
];

// ── SKILLS ───────────────────────────────────────────────────
// iconPath: put your SVG/PNG in src/assets/icons/ and set the filename here.
//           Leave null to keep the emoji placeholder.
export const SKILLS = [
  { name: "C",               emoji: "🧩", sub: "Foundation",     color: "#5C6BC0", iconPath: "c.png", category: "language" },
  { name: "Python",          emoji: "🐍", sub: "Scripting",      color: "#3776AB", iconPath: "python.png", category: "language" },
  { name: "Java",            emoji: "☕", sub: "Android",        color: "#F89820", iconPath: "java.svg", category: "language" },
  { name: "Kotlin",          emoji: "🎯", sub: "Primary",        color: "#7F52FF", iconPath: "kotlin.svg", category: "language" },
  { name: "Dart",            emoji: "🎱", sub: "Flutter Lang",   color: "#00B4AB", iconPath: "dart.png", category: "language" },
  { name: "HTML",            emoji: "🧱", sub: "Markup",         color: "#E34F26", iconPath: "html.png", category: "language" },
  { name: "CSS",             emoji: "🎨", sub: "Styling",        color: "#1572B6", iconPath: "css.png", category: "language" },
  { name: "Jetpack Compose", emoji: "🖼️",  sub: "Modern UI",     color: "#4285F4", iconPath: "compose.svg", category: "framework" },
  { name: "Flutter",         emoji: "💙", sub: "Cross-platform", color: "#54C5F8", iconPath: "flutter.svg", category: "framework" },
  { name: "ChatGPT",         emoji: "🤖", sub: "AI Assistant",   color: "#10A37F", iconPath: "openai-icon.png", category: "ai" },
  { name: "Claude",          emoji: "🧠", sub: "AI Assistant",   color: "#D97706", iconPath: "claude-ai-icon.png", category: "ai" },
  { name: "Gemini",          emoji: "✨", sub: "AI Assistant",   color: "#4285F4", iconPath: "google-gemini-icon.png", category: "ai" },
  { name: "Figma",           emoji: "🎨", sub: "Design",         color: "#F24E1E", iconPath: "figma.svg", category: "design" },
  { name: "Canva",           emoji: "🖌️",  sub: "Design Tool",    color: "#00C4CC", iconPath: "canva.png", category: "design" },
  { name: "SQL",             emoji: "🛢️",  sub: "Relational DB",  color: "#336791", iconPath: "sql.png", category: "db" },
  { name: "Firebase",        emoji: "🔥", sub: "Backend",        color: "#FFA000", iconPath: "firebase.svg", category: "db" },
  { name: "MongoDB",         emoji: "🍃", sub: "Database",       color: "#47A248", iconPath: "mongodb.svg", category: "db" },
  { name: "Room DB",         emoji: "🗃️",  sub: "Local DB",      color: "#FF7043", iconPath: "room.svg", category: "db" },
  { name: "Windows",         emoji: "🪟", sub: "Operating System", color: "#00A4EF", iconPath: "windows.png", category: "os" },
  { name: "Ubuntu",          emoji: "🐧", sub: "Operating System", color: "#E95420", iconPath: "ubuntu-color-icon.png", category: "os" },
  { name: "macOS",           emoji: "🍎", sub: "Operating System", color: "#8E8E93", iconPath: "mac.png", category: "os" },
  { name: "DSA",             emoji: "🧠", sub: "Algorithms",     color: "#9C27B0", iconPath: "dsa.svg", category: "other" },
];

// ── PROJECTS ─────────────────────────────────────────────────
// Status flags (set true/false):
//   running    → 🔄 Running badge
//   complete   → ✅ Complete badge
//   github     → GitHub button (set URL string or null)
//   playstore  → Play Store button (set URL string or null)
//   demo       → Live Demo button (set URL string or null)
//
// screenshotPath: put image in src/assets/ and set path, or leave null for placeholder.
export const PROJECTS = [
  {
    title:          "Simple 3 Screens UI",
    desc:           "A clean three-screen mobile app UI for beginner Flutter learners. Covers fundamental navigation, routing, and layout patterns.",
    tech:           ["Flutter", "Dart"],
    emoji:          "📱",
    screenshotPath: null,
    running:        false,
    complete:       true,
    github:         "https://github.com/as-morat/UI-Screens-1",
    playstore:      null,
    demo:           null,
  },
  {
    title:          "Meditation UI",
    desc:           "Calm & minimal meditation app UI built with Jetpack Compose. Clean layout for focused sessions with smooth visual hierarchy.",
    tech:           ["Kotlin", "Jetpack Compose"],
    emoji:          "🧘",
    screenshotPath: null,
    running:        false,
    complete:       true,
    github:         "https://github.com/as-morat/Mediator-UI",
    playstore:      null,
    demo:           null,
  },
  {
    title:          "Quizo",
    desc:           "Flutter quiz app with smooth navigation, modern card UI, and engaging UX design patterns throughout.",
    tech:           ["Flutter", "Dart"],
    emoji:          "❓",
    screenshotPath: null,
    running:        false,
    complete:       true,
    github:         "https://github.com/as-morat/Quiz0",
    playstore:      null,
    demo:           null,
  },
  {
    title:          "Straw Hat Info",
    desc:           "Android app showcasing Straw Hat Pirates from One Piece. Features Jetpack Compose, Coil image loading & anime-inspired gradients.",
    tech:           ["Kotlin", "Compose", "Coil", "Material 3"],
    emoji:          "⚓",
    screenshotPath: null,
    running:        true,
    complete:       false,
    github:         "https://github.com/as-morat/Straw-Hat-Info",
    playstore:      null,
    demo:           null,
  },
];

// ── SOCIAL LINKS ─────────────────────────────────────────────
export const SOCIALS = [
  { label: "GH", href: "https://github.com/as-morat",                                     title: "GitHub"    },
  { label: "in", href: "https://linkedin.com/in/morat46",                                  title: "LinkedIn"  },
  { label: "𝕏",  href: "https://x.com/as_morat",                                          title: "X"         },
  { label: "TG", href: "https://t.me/dev_rafat",                                            title: "Telegram"  },
  { label: "WA", href: "https://wa.me/01610855735",                                        title: "WhatsApp"  },
  { label: "RD", href: "https://reddit.com/user/morat9511",                                title: "Reddit"    },
  { label: "FV", href: "https://fiverr.com/morat46/buying",                               title: "Fiverr"    },
  { label: "UP", href: "https://upwork.com/freelancers/~0182122cb9e49e342d",              title: "Upwork"    },
];
