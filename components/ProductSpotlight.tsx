"use client";

import Image from "next/image";

const products = [
  {
    name: "Testosterone Support",
    tagline: "The main character era starts here",
    price: "$49.99",
    originalPrice: "$64.99",
    image: "/TestosteroneHero1.png",
    badge: "BESTSELLER",
    badgeBg: "#ff7e00",
    features: ["Ashwagandha KSM-66®", "Zinc + Magnesium", "Boron", "D3 + K2"],
    href: "#shop",
  },
  {
    name: "Estrogen Reduction",
    tagline: "Less estrogen. More you.",
    price: "$44.99",
    originalPrice: "$59.99",
    image: "/EstrogenReductionHero1.png",
    badge: "FAN FAVORITE",
    badgeBg: "#272626",
    features: ["DIM", "Calcium D-Glucarate", "Chrysin", "BioPerine®"],
    href: "#shop",
  },
  {
    name: "Ultimate Men's Bundle",
    tagline: "Stack it. Own it.",
    price: "$89.99",
    originalPrice: "$119.99",
    image: "/UltimateMensPerformanceBundleHeroRenderv2.png",
    badge: "BEST VALUE",
    badgeBg: "#272626",
    features: [
      "Testosterone Support",
      "Estrogen Reduction",
      "Save 25%",
      "Free Shipping",
    ],
    href: "#shop",
  },
];

export default function ProductSpotlight() {
  return (
    <section
      id="shop"
      style={{
        background: "#272626",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">The lineup</span>
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
            built different.
            <br />
            <span style={{ color: "#ff7e00" }}>dosed different.</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1rem",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every product is transparently labeled. Clinical doses. Real
            ingredients. No filler, no prop blends, no cap.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {products.map((p) => (
            <div
              key={p.name}
              style={{
                background: "#1e1e1e",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 24px 64px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Badge */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    zIndex: 2,
                    background: p.badgeBg,
                    border:
                      p.badgeBg === "#272626"
                        ? "1px solid rgba(255,255,255,0.2)"
                        : "none",
                    borderRadius: 4,
                    padding: "4px 10px",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    color: "#fff",
                    textTransform: "uppercase",
                  }}
                >
                  {p.badge}
                </div>

                {/* Product image */}
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #2d2c2c 0%, #1e1e1e 100%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "32px 24px",
                    minHeight: 280,
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={220}
                    height={260}
                    style={{ objectFit: "contain", maxHeight: 240 }}
                  />
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#ff7e00",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  {p.tagline}
                </p>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    marginBottom: 16,
                  }}
                >
                  {p.name}
                </h3>

                {/* Feature list */}
                <ul style={{ marginBottom: 24, display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                  {p.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: "0.82rem",
                        color: "rgba(255,255,255,0.6)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span style={{ color: "#ff7e00", fontWeight: 700 }}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <span
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 900,
                        color: "#ffffff",
                      }}
                    >
                      {p.price}
                    </span>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.35)",
                        textDecoration: "line-through",
                        marginLeft: 8,
                      }}
                    >
                      {p.originalPrice}
                    </span>
                  </div>
                  <a href={p.href} className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.75rem" }}>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee strip */}
        <div
          style={{
            marginTop: 48,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 32,
            padding: "24px",
            background: "#1e1e1e",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {[
            ["🛡️", "30-Day Money Back"],
            ["📦", "Free US Shipping $80+"],
            ["🔬", "Third-Party Tested"],
            ["💳", "Secure Checkout"],
          ].map(([icon, label]) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
