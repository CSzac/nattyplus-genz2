"use client";

import Image from "next/image";

const PRODUCT_URL = "https://nattyplussupps.com/products/ultimate-testosterone-booster";

const products = [
  {
    name: "Ultimate Testosterone Booster",
    tagline: "The main character era starts here",
    price: "$129.95 AUD",
    sub: "From $87.07/mo with subscription",
    image: "/TestosteroneHero1.png",
    badge: "BESTSELLER",
    badgeClass: "badge-outline",
    discount: "SAVE 33%",
    features: [
      "Tongkat Ali + Fadogia Agrestis",
      "Shilajit + Anacyclus Pyrethrum",
      "Zinc, Boron, Vitamin D3",
      "10 clinically-dosed ingredients",
    ],
    href: PRODUCT_URL,
  },
  {
    name: "Ultimate Estrogen Reduction",
    tagline: "Keep your E:T ratio dialed",
    price: "$99.95 AUD",
    sub: "Highly synergistic with Test Booster",
    image: "/EstrogenReductionHero1.png",
    badge: "FAN FAVORITE",
    badgeClass: "badge-outline",
    discount: null,
    features: [
      "DIM + Calcium D-Glucarate",
      "Manages T-driven estrogen rise",
      "Transparent label",
      "Stack with Testosterone Booster",
    ],
    href: "https://nattyplussupps.com/products/ultimate-estrogen-reduction",
  },
  {
    name: "Ultimate Men's Bundle",
    tagline: "Stack it. Own it.",
    price: "$199.95 AUD",
    sub: "Best value — free shipping included",
    image: "/UltimateMensPerformanceBundleHeroRenderv2.png",
    badge: "BEST VALUE",
    badgeClass: "badge-gold",
    discount: "SAVE 25%",
    features: [
      "Testosterone Booster",
      "Estrogen Reduction",
      "Ashwagandha Complex",
      "Free Travel Support included",
    ],
    href: "https://nattyplussupps.com/collections/bundles",
  },
];

export default function ProductSpotlight() {
  return (
    <section
      id="shop"
      style={{
        background: "#0d0d0f",
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
            <span style={{ color: "#f59e0b" }}>dosed different.</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
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
            gap: 20,
          }}
        >
          {products.map((p) => (
            <div
              key={p.name}
              style={{
                background: "#161616",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 24px 64px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Image area */}
              <div style={{ position: "relative" }}>
                {/* Badges */}
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    right: 14,
                    zIndex: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <span className={p.badgeClass} style={{ fontSize: "0.62rem" }}>
                    {p.badge}
                  </span>
                  {p.discount && (
                    <span className="badge-gold" style={{ fontSize: "0.62rem" }}>
                      {p.discount}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    background: "linear-gradient(180deg, #1e1e20 0%, #161616 100%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "48px 24px 32px",
                    minHeight: 280,
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={220}
                    height={260}
                    style={{
                      objectFit: "contain",
                      maxHeight: 240,
                      transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
                    }}
                    className="product-img"
                  />
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "20px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#f59e0b",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {p.tagline}
                </p>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    marginBottom: 14,
                    lineHeight: 1.3,
                  }}
                >
                  {p.name}
                </h3>

                <ul style={{ marginBottom: 20, display: "flex", flexDirection: "column", gap: 5, flex: 1 }}>
                  {p.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: "0.8rem",
                        color: "rgba(255,255,255,0.55)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <span style={{ color: "#f59e0b", fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16 }}>
                  <div style={{ marginBottom: 12 }}>
                    <span style={{ fontSize: "1.2rem", fontWeight: 900 }}>{p.price}</span>
                    <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", marginTop: 2 }}>
                      {p.sub}
                    </p>
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Shop Now
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee strip */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 28,
            padding: "20px 24px",
            background: "#161616",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {[
            ["🛡️", "30-Day Results Guarantee"],
            ["📦", "Free Shipping $200+ AUD"],
            ["🔬", "Third-Party Tested"],
            ["💳", "Secure Checkout"],
          ].map(([icon, label]) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.45)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <span style={{ fontSize: "1rem" }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .product-img:hover { transform: scale(1.08); }
      `}</style>
    </section>
  );
}
