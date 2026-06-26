import Image from "next/image";

export default function FounderSection() {
  return (
    <section
      style={{
        background: "#111113",
        padding: "96px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
        }}
        className="founder-grid"
      >
        {/* Image */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: -2,
              background: "linear-gradient(135deg, #ff7e00, transparent 60%)",
              borderRadius: 16,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <Image
              src="/Joey-Riley-NattyPlus.jpg"
              alt="Joey Riley — Founder, NattyPLUS"
              width={520}
              height={600}
              style={{
                objectFit: "cover",
                objectPosition: "top",
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="section-label">The founder</span>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            built by someone
            <br />
            <span style={{ color: "#f59e0b" }}>who was you</span>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 32,
            }}
          >
            {[
              "I was 24, grinding at the gym, eating clean, sleeping 7-8 hours — and still felt like garbage. Low drive, low motivation, zero competitive edge.",
              "Blood work showed my testosterone was technically 'in range' — but just barely. My doc shrugged. I didn't.",
              "I spent 2 years researching exactly what moves the needle on male hormonal health. Not bro science. Actual studies, actual doses, actual mechanisms.",
              "NattyPLUS is what I built for myself. And now 50,000+ guys are using it to take their biology back.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: "0.92rem",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.75,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 24,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "#ff7e00",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "1.1rem",
                flexShrink: 0,
              }}
            >
              JR
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "0.95rem" }}>
                Joey Riley
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Founder, NattyPLUS Supplements
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .founder-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
