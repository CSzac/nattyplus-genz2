const steps = [
  {
    num: "01",
    title: "Support natural T production",
    desc: "Key ingredients like Ashwagandha KSM-66® and Zinc signal your body to produce more luteinizing hormone — the trigger for testosterone synthesis.",
  },
  {
    num: "02",
    title: "Block estrogen conversion",
    desc: "Excess testosterone can aromatize into estrogen. DIM and Calcium D-Glucarate stop that process cold, keeping your T elevated and your E in check.",
  },
  {
    num: "03",
    title: "Optimize your hormonal environment",
    desc: "Stress, inflammation, and poor sleep tank your T. Adaptogens and micronutrients in our formula address all three so you're not sabotaging yourself.",
  },
  {
    num: "04",
    title: "Feel the shift in 2–4 weeks",
    desc: "More drive, better sleep, leaner body composition, and that hunter mentality back. No needles, no doctor visits, just your body working the way it should.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        background: "#0d0d0f",
        padding: "96px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="section-label">The science</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            how it actually works
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 0,
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: "36px 28px",
                borderLeft:
                  i === 0
                    ? "none"
                    : "1px solid rgba(255,255,255,0.06)",
                position: "relative",
              }}
            >
              {/* Step number */}
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "rgba(255,126,0,0.15)",
                  lineHeight: 1,
                  marginBottom: 16,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {step.num}
              </div>

              {/* Orange dot */}
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#ff7e00",
                  marginBottom: 16,
                }}
              />

              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.84rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {[
            { value: "600mg", label: "KSM-66® Ashwagandha" },
            { value: "30mg", label: "Clinical-dose Zinc" },
            { value: "0", label: "Prop Blends. Ever." },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "#111113",
                padding: "32px 24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 900,
                  color: "#f59e0b",
                  letterSpacing: "-0.02em",
                  marginBottom: 6,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
