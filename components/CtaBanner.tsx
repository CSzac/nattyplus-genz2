"use client";

import Image from "next/image";

export default function CtaBanner() {
  return (
    <section
      style={{
        background: "#ff7e00",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/Pattern-2.png)",
          backgroundSize: "300px",
          backgroundRepeat: "repeat",
          opacity: 0.07,
        }}
      />

      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            lineHeight: 1.05,
            color: "#ffffff",
            marginBottom: 20,
          }}
        >
          done feeling like
          <br />a background character?
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 40px",
          }}
        >
          Your testosterone isn&apos;t going to fix itself. Take back your drive,
          your energy, and your edge — before another year goes by feeling like
          half the person you should be.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
          }}
        >
          <a
            href="https://nattyplussupps.com/products/ultimate-testosterone-booster" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#0d0d0f",
              color: "#ffffff",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "0.9rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "18px 40px",
              borderRadius: 4,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#1a1a1a";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "#272626";
              el.style.transform = "translateY(0)";
            }}
          >
            Get NattyPLUS Now →
          </a>
        </div>

        <p
          style={{
            marginTop: 20,
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.65)",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          30-Day Money-Back Guarantee · Free Shipping $80+
        </p>
      </div>
    </section>
  );
}
