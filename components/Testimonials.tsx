const reviews = [
  {
    name: "Marcus T.",
    age: 27,
    location: "Austin, TX",
    rating: 5,
    text: "fr fr this stuff changed how i feel during the day. like the fog lifted. been on it 6 weeks and my workouts, my mood, my drive — all way up. not a bot lol",
    verified: true,
  },
  {
    name: "Jake R.",
    age: 24,
    location: "Chicago, IL",
    rating: 5,
    text: "was skeptical bc i've tried other test boosters and they were basically sugar pills. this one's different. you actually feel it. week 3 was when i noticed. stayed on it.",
    verified: true,
  },
  {
    name: "Devon K.",
    age: 26,
    location: "LA, CA",
    rating: 5,
    text: "libido was genuinely concerning me. doc said everything was 'normal' but i felt off. added nattyplus testosterone and estrogen reduction together and bro... it's been a different life.",
    verified: true,
  },
  {
    name: "Tyler M.",
    age: 29,
    location: "NYC, NY",
    rating: 5,
    text: "the transparency of the label is what got me first. clinical doses, nothing hidden. then i actually tried it and yeah it delivers. been recommending to everyone in my gym.",
    verified: true,
  },
  {
    name: "Chris A.",
    age: 25,
    location: "Denver, CO",
    rating: 5,
    text: "sleep improved first. then energy. then everything else followed. it's not like pre-workout stimulant energy, it's just... baseline human energy that i forgot i was missing.",
    verified: true,
  },
  {
    name: "Sam W.",
    age: 23,
    location: "Miami, FL",
    rating: 5,
    text: "bought the bundle. best decision. saved money and the combo of both products hits different than either alone. T up, E managed. feeling like myself again finally.",
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      style={{
        background: "#272626",
        padding: "96px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label">Real results</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: 12,
            }}
          >
            the guys don&apos;t lie
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginBottom: 8,
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
                fontSize: "1rem",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              4.9 / 5
            </span>
            <span
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              · 2,400+ reviews
            </span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              style={{
                background: "#1e1e1e",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 2 }}>
                {Array(r.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="star" style={{ fontSize: "0.9rem" }}>
                      ★
                    </span>
                  ))}
              </div>

              {/* Review text */}
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.7,
                  flex: 1,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                    }}
                  >
                    {r.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.73rem",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    Age {r.age} · {r.location}
                  </div>
                </div>
                {r.verified && (
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: "#ff7e00",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    ✓ Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#shop" className="btn-primary">
            Join 50,000+ Men Who Said Enough →
          </a>
        </div>
      </div>
    </section>
  );
}
