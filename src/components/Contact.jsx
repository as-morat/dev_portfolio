// ─────────────────────────────────────────────────────────────
//  components/Contact.jsx
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { Reveal, SectionHeader, SocialIcon } from "./UI";
import { SOCIALS, PERSONAL } from "../data/data";

// ── Controlled text input / textarea ─────────────────────────
function Field({ label, t, ...props }) {
  const Tag = props.rows ? "textarea" : "input";
  return (
    <div>
      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: ".58rem",
        letterSpacing: ".14em", textTransform: "uppercase",
        color: t.red, marginBottom: ".4rem",
      }}>{label}</div>
      <Tag
        {...props}
        style={{
          width: "100%", padding: ".85rem 1rem",
          borderRadius: "12px", border: `1px solid ${t.border}`,
          background: t.card, color: t.fg,
          fontSize: ".9rem", outline: "none",
          resize: "none", transition: "border-color .3s",
        }}
        onFocus={e  => e.target.style.borderColor = t.red}
        onBlur={e   => e.target.style.borderColor = t.border}
      />
    </div>
  );
}

export default function Contact({ t }) {
  const [form,    setForm]    = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [error,   setError]   = useState("");

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    setError("");

    const payload = {
      ...form,
      access_key: "48963594-0944-4124-b4e2-ba4d1362615a",
      subject:    `Portfolio message from ${form.name}`,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify(payload),
      }).then(r => r.json());

      if (res.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        setError("Failed to send. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    }

    setSending(false);
  };

  return (
    <section id="contact" style={{ padding: "6rem 2.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <SectionHeader
          number="04" label="Contact"
          title={<>Let's <em style={{ fontStyle: "italic", color: t.red }}>talk</em></>}
          accent={t.red}
        />

        <div className="two-col" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "5rem", alignItems: "start",
        }}>

          {/* ── Left: blurb + socials ── */}
          <Reveal dir="left" delay={0.1}>
            <div>
              <p style={{ fontSize: ".94rem", lineHeight: 1.85, color: t.muted, marginBottom: "1.5rem" }}>
                Open to freelance projects, collaborations, and interesting conversations.
                Whether you have a project in mind or just want to say hello — my inbox is open.
              </p>

              {/* Telegram highlight */}
              <div style={{ marginBottom: "1.3rem" }}>
                <div style={{
                  fontFamily: "'Space Mono', monospace", fontSize: ".58rem",
                  letterSpacing: ".14em", textTransform: "uppercase",
                  color: t.red, marginBottom: ".35rem",
                }}>Telegram</div>
                <a href={PERSONAL.telegram} target="_blank" rel="noreferrer"
                  style={{ color: t.red, fontSize: ".9rem" }}>{PERSONAL.telegramUsername || "@dev_rafat"}</a>
              </div>

              {/* Social icons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
                {SOCIALS.map(s => (
                  <SocialIcon key={s.label} {...s} t={t} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Right: form ── */}
          <Reveal dir="right" delay={0.12}>
            <form onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

              <Field label="Name"    name="name"    type="text"  placeholder="Your name"       value={form.name}    onChange={handleChange} required t={t} />
              <Field label="Email"   name="email"   type="email" placeholder="your@email.com"  value={form.email}   onChange={handleChange} required t={t} />
              <Field label="Message" name="message" rows={5}     placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required t={t} />

              {/* Success / error feedback */}
              {sent && (
                <div style={{
                  padding: ".85rem", background: "rgba(100,200,100,.08)",
                  border: "1px solid rgba(100,200,100,.25)", borderRadius: "10px",
                  color: "#6ec96e", fontFamily: "'Space Mono', monospace",
                  fontSize: ".67rem", textAlign: "center",
                }}>✓ Message sent successfully!</div>
              )}
              {error && (
                <div style={{
                  padding: ".85rem", background: `${t.red}10`,
                  border: `1px solid ${t.red}40`, borderRadius: "10px",
                  color: t.red, fontFamily: "'Space Mono', monospace",
                  fontSize: ".67rem", textAlign: "center",
                }}>{error}</div>
              )}

              <button type="submit" disabled={sending} style={{
                padding: ".75rem", borderRadius: "100px", border: "none",
                background: `linear-gradient(135deg, ${t.red}, ${t.orange})`,
                color: "#fff", fontFamily: "'Space Mono', monospace",
                fontSize: ".72rem", letterSpacing: ".1em", fontWeight: 700,
                cursor: sending ? "not-allowed" : "pointer",
                opacity: sending ? .65 : 1, transition: "all .3s",
              }}>
                {sending ? "Sending…" : "Send Message →"}
              </button>

            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
