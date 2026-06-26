"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How soon will I notice results?",
    a: "Most guys notice improved energy and sleep quality in the first 1–2 weeks. Drive and libido typically show up around weeks 3–4. Hormonal changes take time to accumulate — consistent use is key. Give it 60 days before judging.",
  },
  {
    q: "Is this safe to stack with pre-workout or creatine?",
    a: "Yep, no issues. NattyPLUS products don't contain stimulants, so they stack cleanly with pre-workouts, creatine, protein, and most common supps. If you're on prescription medications, check with your doctor first — that's just common sense.",
  },
  {
    q: "Do I need a PCT after cycling off?",
    a: "No. NattyPLUS doesn't suppress your natural testosterone production — it supports it. You're not introducing exogenous hormones, so there's no hormonal axis to recover. You can cycle on and off or run it continuously.",
  },
  {
    q: "Why is the dose so much higher than other brands?",
    a: "Because most brands underdose to cut costs and then hide it behind 'proprietary blends.' We dose every ingredient at or above clinical thresholds because that's what the research says actually works. It costs more, but it works.",
  },
  {
    q: "What's the return policy?",
    a: "30-day money-back guarantee, no questions asked. If you follow the protocol and don't feel a meaningful difference, hit us up and we'll refund you. We're confident enough in the product to back it.",
  },
  {
    q: "Is this for young guys or older dudes?",
    a: "Both. Testosterone starts declining around age 25, and modern lifestyle accelerates that across all ages. We've had 20-year-olds and 45-year-olds both report significant results. The ingredients work on the underlying biology regardless of where you're starting from.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        background: "#272626",
        padding: "96px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">Got questions?</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            we got answers
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: "#1e1e1e",
                  border: `1px solid ${isOpen ? "rgba(255,126,0,0.3)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 10,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    textAlign: "left",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      letterSpacing: "0.01em",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: "#ff7e00",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      flexShrink: 0,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 20px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: 1.75,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
