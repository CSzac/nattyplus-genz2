"use client";

const symptoms = [
  {
    icon: "🥱",
    title: "Crashing before 3pm",
    desc: "You used to go hard. Now you need a nap after lunch. That's not aging — that's your hormones giving up.",
  },
  {
    icon: "📉",
    title: "Drive? What drive?",
    desc: "Not just in the bedroom. Your ambition, your competitiveness, your will to win — all MIA. Classic low T.",
  },
  {
    icon: "🍕",
    title: "Soft gains, harder belly",
    desc: "Putting in work at the gym but your body's not responding. Low testosterone = cortisol winning. Not anymore.",
  },
  {
    icon: "😶",
    title: "Emotionally... numb",
    desc: "Can't get hype, can't be present, just vibing through life on autopilot. Your endocrine system is crying for help.",
  },
];

export default function ProblemSection() {
  return (
    <section
      style={{
        background: "#1e1e1e",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">The real talk</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            sound familiar?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1rem",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Testosterone peaks at 25. After that, it drops ~1% per year — and
            modern life accelerates that. Bad sleep, ultra-processed food, and
            chronic stress are all killing your T before your time.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
          }}
        >
          {symptoms.map((s) => (
            <div
              key={s.title}
              style={{
                background: "#272626",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12,
                padding: "32px 24px",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255,126,0,0.4)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: 16 }}>{s.icon}</div>
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: 10,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.65,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 56,
            textAlign: "center",
            padding: "36px",
            background:
              "linear-gradient(135deg, rgba(255,126,0,0.12), rgba(255,126,0,0.04))",
            border: "1px solid rgba(255,126,0,0.2)",
            borderRadius: 16,
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >
            You&apos;re not broken.{" "}
            <span style={{ color: "#ff7e00" }}>
              Your hormones are just begging for backup.
            </span>{" "}
            That&apos;s exactly what NattyPLUS was built for.
          </p>
        </div>
      </div>
    </section>
  );
}
