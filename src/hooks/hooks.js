// ─────────────────────────────────────────────────────────────
//  hooks.js  —  Reusable custom React hooks
// ─────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from "react";

// ── useInView ─────────────────────────────────────────────────
// Returns [ref, isVisible]. Once the element enters the viewport
// it fires once and stays visible (good for entry animations).
export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// ── useTyping ─────────────────────────────────────────────────
// Cycles through an array of strings with a typewriter effect.
// Returns the currently displayed string slice.
export function useTyping(
  words,
  typeSpeed   = 85,
  deleteSpeed = 40,
  pauseMs     = 1600
) {
  const [text,    setText]    = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const id = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pauseMs);
          return;
        }
        setCharIdx(c => c + 1);
      } else {
        setText(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx(w => (w + 1) % words.length);
          setCharIdx(0);
          return;
        }
        setCharIdx(c => c - 1);
      }
    }, deleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(id);
  }, [text, wordIdx, charIdx, deleting, words, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}

// ── useTheme ──────────────────────────────────────────────────
// Persists theme choice in localStorage.
export function useTheme(initial = "dark") {
  const [key, setKey] = useState(() => localStorage.getItem("ash-theme") || initial);

  const toggle = () =>
    setKey(k => {
      const next = k === "dark" ? "light" : "dark";
      localStorage.setItem("ash-theme", next);
      return next;
    });

  return [key, toggle];
}

// ── useToast ──────────────────────────────────────────────────
// Returns [message, showToast(msg, durationMs)].
export function useToast() {
  const [msg, setMsg] = useState("");
  const timerRef = useRef(null);

  const show = (text, duration = 2800) => {
    setMsg(text);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setMsg(""), duration);
  };

  return [msg, show];
}

// ── useActiveSection ──────────────────────────────────────────
// Watches scroll position and returns the id of the section
// currently in view. Pass an array of section id strings.
export function useActiveSection(sectionIds, offset = 200) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handler = () => {
      const pos = window.scrollY + offset;
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop) {
          setActive(id);
          break;
        }
      }
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds, offset]);

  return active;
}
