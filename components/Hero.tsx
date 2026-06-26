import Image from "next/image";

const PRODUCT_URL = "https://nattyplussupps.com/products/ultimate-testosterone-booster";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100dvh",
        background: "#0d0d0f",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background pattern — matches brand */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/Pattern-2.png)",
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
          opacity: 0.05,
          zIndex: 0,
        }}
      />

      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
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
          {/* Badges row */}
          <div
            className="animate-fade-up"
            style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}
          >
            <span className="badge-gold">Over 5,000+ Sold</span>
            <span className="badge-outline">152 Reviews · 99% Five Star</span>
          </div>

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
            <span style={{ color: "#f59e0b" }}>is cooked.</span>
            <br />
            Let&apos;s fix that.
          </h1>

          <p
            className="animate-fade-up delay-200"
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 480,
              marginBottom: 36,
            }}
          >
            Low drive. No energy. Feeling like a background character in your
            own life? The Ultimate Testosterone Booster is a 10-ingredient,
            clinical-grade stack that actually moves the needle — no fluff,
            no prop blends, no BS.
          </p>

          {/* Stars */}
          <div
            className="animate-fade-up delay-200"
            style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}
          >
            <div style={{ display: "flex", gap: 2 }}>
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", fontFamily: "monospace", fontWeight: 600 }}>
              4.9 · 152 verified reviews
            </span>
          </div>

          <div
            className="animate-fade-up delay-300"
            style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
          >
            <a href={PRODUCT_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
              Get Your T Back
              <span className="btn-arrow">→</span>
            </a>
            <a href="#how-it-works" className="btn-outline">
              See How It Works
            </a>
          </div>

          {/* Trust micro-copy */}
          <div
            className="animate-fade-up delay-400"
            style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 32 }}
          >
            {[
              "✓ 30-Day Results Guarantee",
              "✓ GMP Certified",
              "✓ Clinically Dosed",
              "✓ Free Shipping $200+",
            ].map((badge) => (
              <span
                key={badge}
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
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
          <div
            style={{
              position: "absolute",
              width: "75%",
              height: "75%",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <Image
            src="/TestosteroneHero1.png"
            alt="NattyPLUS Ultimate Testosterone Booster"
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

      <style>{`
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 100px !important;
            padding-bottom: 60px !important;
          }
          .hero-grid > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
