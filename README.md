# < Ash /> Portfolio

Personal portfolio of **Al Shahriar Mohammad Rafat (Ash)** — Mobile App Developer.  
Built with **React + Vite**. No UI library dependencies — pure inline styles.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## 📁 File Structure

```
ash-portfolio/
├── index.html                  ← HTML entry point
├── vite.config.js              ← Vite config
├── package.json
└── src/
    ├── main.jsx                ← React mount point
    ├── App.jsx                 ← Root: wires all sections + theme
    │
    ├── styles/
    │   └── theme.js            ← 🎨 ALL colors & global CSS here
    │
    ├── data/
    │   └── data.js             ← ✏️  ALL your content here (edit this!)
    │
    ├── hooks/
    │   └── hooks.js            ← Custom React hooks (useInView, useTyping, etc.)
    │
    ├── assets/
    │   ├── profile.jpg         ← 📷 Drop your photo here
    │   └── icons/              ← 🎯 Drop skill icons here (kotlin.svg, etc.)
    │
    └── components/
        ├── UI.jsx              ← Reusable atoms (Reveal, Btn, Toast, Divider…)
        ├── Navbar.jsx          ← Fixed top navigation
        ├── Hero.jsx            ← Landing / hero section
        ├── ProfilePhoto.jsx    ← Morphing profile frame (swap placeholder → real photo)
        ├── About.jsx           ← About me + info cards
        ├── Skills.jsx          ← Skills grid (swap emoji → real icons)
        ├── Works.jsx           ← Projects grid with status badges
        ├── Contact.jsx         ← Contact form + social links
        └── Footer.jsx          ← Footer
```

---

## ✏️ How to Update Your Content

**All content is in `src/data/data.js`** — you rarely need to touch other files.

### Add / edit a project

```js
// src/data/data.js → PROJECTS array
{
  title:          "My New App",
  desc:           "Short description here.",
  tech:           ["Kotlin", "Compose"],
  emoji:          "🚀",
  screenshotPath: "myapp.png",   // put the image in src/assets/
  running:        true,          // shows 🔄 Running badge
  complete:       false,         // shows ✅ Complete badge
  github:         "https://github.com/as-morat/my-app",
  playstore:      null,          // set URL when published
  demo:           null,
}
```

Only buttons/badges with a truthy value are rendered. Set to `null` or `false` to hide.

---

## 📷 Add Your Profile Photo

1. Drop your photo into `src/assets/profile.jpg`
2. Open `src/components/ProfilePhoto.jsx`
3. Uncomment the import at the top and replace `<PlaceholderAvatar>` with:
```jsx
import profilePic from "../assets/profile.jpg";

// inside the return, replace <PlaceholderAvatar t={t} /> with:
<img
  src={profilePic}
  alt="Ash"
  style={{ width:"100%", height:"100%", objectFit:"cover" }}
/>
```

---

## 🎯 Add Real Skill Icons

1. Drop SVGs into `src/assets/icons/` (e.g. `kotlin.svg`)
2. In `src/data/data.js`, set `iconPath: "kotlin.svg"` for that skill
3. The placeholder dashes disappear automatically

---

## 🎨 Change Colors

Edit `src/styles/theme.js` — the `THEMES.dark` / `THEMES.light` objects.

---

## 🌐 Deploy

```bash
npm run build       # outputs to /dist
# then deploy /dist to Netlify, Vercel, GitHub Pages, etc.
```

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| react | UI framework |
| react-dom | DOM renderer |
| vite | Dev server & bundler |
| @vitejs/plugin-react | JSX transform |

No Tailwind, no component library — easy to understand and modify.
