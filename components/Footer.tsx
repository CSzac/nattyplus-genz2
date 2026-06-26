"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1a1a1a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Image
              src="/Wordmark.png"
              alt="NattyPLUS"
              width={160}
              height={36}
              style={{
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
                marginBottom: 16,
              }}
            />
            <p
              style={{
                fontSize: "0.84rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: 280,
                marginBottom: 24,
              }}
            >
              Clinically dosed, science-based supplements engineered for men who
              are done accepting mediocrity as their baseline.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {["IG", "TT", "YT", "X"].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "#ff7e00";
                    el.style.color = "#ff7e00";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(255,255,255,0.12)";
                    el.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: 16,
              }}
            >
              Products
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Testosterone Support",
                "Estrogen Reduction",
                "Ashwagandha",
                "Men's Bundle",
                "All Products",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontSize: "0.84rem",
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#ff7e00")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: 16,
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["Our Story", "Science & Research", "Blog", "Affiliates"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontSize: "0.84rem",
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#ff7e00")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "rgba(255,255,255,0.5)")
                      }
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: 16,
              }}
            >
              Support
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["FAQ", "Shipping Info", "Returns", "Contact Us", "Track Order"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontSize: "0.84rem",
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#ff7e00")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "rgba(255,255,255,0.5)")
                      }
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © {new Date().getFullYear()} NattyPLUS Supplements. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.3)",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        <p
          style={{
            marginTop: 16,
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.2)",
            lineHeight: 1.6,
            maxWidth: 700,
          }}
        >
          * These statements have not been evaluated by the Food and Drug
          Administration. This product is not intended to diagnose, treat, cure,
          or prevent any disease.
        </p>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
