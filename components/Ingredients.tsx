"use client";

import Image from "next/image";

const ingredients = [
  {
    name: "KSM-66® Ashwagandha",
    dose: "600mg",
    role: "Reduces cortisol by 27%, directly protecting testosterone levels from chronic stress degradation.",
    tag: "Clinically Studied",
  },
  {
    name: "Zinc (as Bisglycinate)",
    dose: "30mg",
    role: "Essential cofactor in testosterone biosynthesis. Deficiency = lower T. Full stop.",
    tag: "Essential Mineral",
  },
  {
    name: "Magnesium Glycinate",
    dose: "200mg",
    role: "Binds SHBG, freeing up bound testosterone. Better sleep = better T. Synergistic.",
    tag: "Bioavailable Form",
  },
  {
    name: "Vitamin D3",
    dose: "5,000 IU",
    role: "Testosterone levels 25% higher in men with optimal D3. Most guys are deficient.",
    tag: "Sunshine in a capsule",
  },
  {
    name: "Boron",
    dose: "10mg",
    role: "Shown to increase free testosterone by 28% in 7 days by reducing SHBG binding.",
    tag: "Underrated",
  },
  {
    name: "DIM",
    dose: "300mg",
    role: "Routes estrogen toward weaker, less problematic metabolites. Keeps your E:T ratio dialed.",
    tag: "Anti-Estrogen",
  },
];

export default function Ingredients() {
  return (
    <section
      id="ingredients"
      style={{
        background: "#1e1e1e",
        padding: "96px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
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
                background:
                  "radial-gradient(circle, rgba(255,126,0,0.2) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
            <Image
              src="/NAT_ASHWAGANDA-PROD-IMAGE-1.png"
              alt="NattyPLUS Ingredients"
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
              ingredients that
              <br />
              <span style={{ color: "#ff7e00" }}>actually work</span>
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
              Every ingredient has a reason to be here. Every dose hits the
              clinical threshold. No watered-down blends hiding behind
              &quot;proprietary formulas.&quot;
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {ingredients.map((ing) => (
                <div
                  key={ing.name}
                  style={{
                    display: "flex",
                    gap: 16,
                    paddingBottom: 20,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Dose badge */}
                  <div
                    style={{
                      flexShrink: 0,
                      background: "rgba(255,126,0,0.1)",
                      border: "1px solid rgba(255,126,0,0.25)",
                      borderRadius: 8,
                      padding: "8px 12px",
                      textAlign: "center",
                      minWidth: 68,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 900,
                        color: "#ff7e00",
                      }}
                    >
                      {ing.dose}
                    </div>
                  </div>

                  <div>
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
                      <span
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          background: "rgba(255,255,255,0.08)",
                          padding: "2px 8px",
                          borderRadius: 20,
                          letterSpacing: "0.06em",
                          color: "rgba(255,255,255,0.5)",
                          textTransform: "uppercase",
                        }}
                      >
                        {ing.tag}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      {ing.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#shop"
              className="btn-primary"
              style={{ marginTop: 36, display: "inline-flex" }}
            >
              Shop Now — Feel the Difference
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
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
