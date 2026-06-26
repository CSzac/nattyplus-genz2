"use client";

import Image from "next/image";

const PRODUCT_URL = "https://nattyplussupps.com/products/ultimate-testosterone-booster";

const ingredients = [
  {
    name: "Tongkat Ali",
    role: "Adaptogenic herb that supports hormone balance and lowers cortisol — the #1 testosterone killer. Clinically shown to raise free T levels.",
    tag: "Adaptogen",
  },
  {
    name: "Fadogia Agrestis",
    role: "West African shrub studied for stimulating LH production — the upstream signal your body needs to make more testosterone.",
    tag: "T-Signaling",
  },
  {
    name: "Anacyclus Pyrethrum",
    role: "Supports testosterone, LH, and FSH levels. Underused by most brands but one of the most targeted T-support herbs in the formula.",
    tag: "Hormone Support",
  },
  {
    name: "Shilajit",
    role: "Mineral-rich resin that supports mitochondrial energy and hormonal health. Boosts CoQ10 activity and free testosterone.",
    tag: "Ancient Mineral",
  },
  {
    name: "Coleus Forskohlii",
    role: "Contains forskolin, which activates cAMP pathways shown to support free testosterone and lean body composition.",
    tag: "Body Composition",
  },
  {
    name: "Horny Goat Weed",
    role: "Supports erectile function and testosterone synthesis. The icariin compound inhibits PDE5, the same enzyme targeted by ED medications.",
    tag: "Libido + Performance",
  },
  {
    name: "Magnesium Bisglycinate",
    role: "Highly bioavailable form that binds SHBG, freeing up bound testosterone. Also critical for deep sleep — where T recovery happens.",
    tag: "Bioavailable Form",
  },
  {
    name: "Zinc",
    role: "Essential cofactor in testosterone biosynthesis. Clinical studies show clear correlation between zinc deficiency and low T. Non-negotiable.",
    tag: "Essential Mineral",
  },
  {
    name: "Boron",
    role: "Shown to increase free testosterone by up to 28% in 7 days by reducing SHBG binding. Criminally underrated ingredient.",
    tag: "Free T Booster",
  },
  {
    name: "Vitamin D3",
    role: "Studies show testosterone levels are 25% higher in men with optimal D3. Most guys are chronically deficient — especially indoors.",
    tag: "Essential Vitamin",
  },
];

export default function Ingredients() {
  return (
    <section
      id="ingredients"
      style={{
        background: "#111113",
        padding: "96px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        backgroundImage: "url(/Pattern-2.png)",
        backgroundSize: "400px",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="ingredients-grid"
        >
          {/* Left: product image */}
          <div style={{ position: "sticky", top: 120 }}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 380,
                  height: 380,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              <Image
                src="/NAT_ASHWAGANDA-PROD-IMAGE-1.png"
                alt="NattyPLUS Ultimate Testosterone Booster"
                width={480}
                height={520}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </div>

            {/* Product card under image */}
            <div
              style={{
                marginTop: 24,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "20px 24px",
              }}
            >
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
                Ultimate Testosterone Booster
              </div>
              <div style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 4 }}>
                $129.95 AUD
              </div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>
                Or from $87.07/mo with subscription · Save 33%
              </div>
              <a
                href={PRODUCT_URL}
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

          {/* Right: ingredients list */}
          <div>
            <span className="section-label">What&apos;s inside</span>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                lineHeight: 1.1,
                marginBottom: 12,
              }}
            >
              10 ingredients.
              <br />
              <span style={{ color: "#f59e0b" }}>zero filler.</span>
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                marginBottom: 40,
                maxWidth: 420,
              }}
            >
              Every single ingredient has a peer-reviewed reason to be here.
              Clinical doses. Transparent label. No proprietary blend hiding
              what you&apos;re actually putting in your body.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {ingredients.map((ing, i) => (
                <div
                  key={ing.name}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "18px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Number */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "rgba(245,158,11,0.1)",
                      border: "1px solid rgba(245,158,11,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: "#f59e0b",
                      fontFamily: "monospace",
                      marginTop: 2,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 4,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {ing.name}
                      </span>
                      <span className="badge-outline" style={{ fontSize: "0.6rem" }}>
                        {ing.tag}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {ing.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: 36, display: "inline-flex" }}
            >
              Shop the Full Formula
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .ingredients-grid {
            grid-template-columns: 1fr !important;
          }
          .ingredients-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
