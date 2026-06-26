import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100dvh",
        background: "#272626",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/Pattern-2.png)",
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
          opacity: 0.04,
          zIndex: 0,
        }}
      />

      {/* Orange gradient glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,126,0,0.18) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 24px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: 48,
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left: Copy */}
        <div>
          <span className="section-label animate-fade-up">
            #1 Testosterone Support Formula
          </span>

          <h1
            className="animate-fade-up delay-100"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Bro, your T
            <br />
            <span style={{ color: "#ff7e00" }}>is cooked.</span>
            <br />
            Let&apos;s fix that.
          </h1>

          <p
            className="animate-fade-up delay-200"
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 480,
              marginBottom: 36,
            }}
          >
            Low drive. No energy. Feeling like a background character in your
            own life? NattyPLUS is the clinically-dosed stack that actually
            moves the needle — no fluff, no prop blends, no BS.
          </p>

          {/* Stars + reviews */}
          <div
            className="animate-fade-up delay-200"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 32,
            }}
          >
            <div style={{ display: "flex", gap: 2 }}>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
            </div>
            <span
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.6)",
                fontWeight: 600,
              }}
            >
              4.9/5 · 2,400+ reviews
            </span>
          </div>

          <div
            className="animate-fade-up delay-300"
            style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
          >
            <a href="#shop" className="btn-primary animate-pulse-glow">
              Get Your T Back →
            </a>
            <a href="#how-it-works" className="btn-outline">
              See How It Works
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="animate-fade-up delay-400"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              marginTop: 36,
            }}
          >
            {[
              "🧪 Clinically Dosed",
              "✓ GMP Certified",
              "🇺🇸 Made in USA",
              "📦 Free Shipping $80+",
            ].map((badge) => (
              <span
                key={badge}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.04em",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Product image */}
        <div
          className="animate-fade-up delay-200"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Glow behind product */}
          <div
            style={{
              position: "absolute",
              width: "80%",
              height: "80%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,126,0,0.25) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <Image
            src="/TestosteroneHero1.png"
            alt="NattyPLUS Testosterone Support"
            width={520}
            height={580}
            style={{
              objectFit: "contain",
              position: "relative",
              zIndex: 1,
              maxWidth: "100%",
              height: "auto",
            }}
            priority
          />
        </div>
      </div>

      {/* Mobile hero layout fix */}
      <style>{`
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 100px !important;
            padding-bottom: 60px !important;
          }
          .hero-grid > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
