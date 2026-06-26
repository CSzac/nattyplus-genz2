const items = [
  "📦 Over 50,000 orders shipped",
  "⭐ 4.9/5 average rating",
  "🧪 Clinically dosed formulas",
  "🇺🇸 Made in USA · GMP Certified",
  "🔥 Free shipping on orders $80+",
  "✅ 30-day money-back guarantee",
  "💊 No proprietary blends",
  "📦 Over 50,000 orders shipped",
  "⭐ 4.9/5 average rating",
  "🧪 Clinically dosed formulas",
  "🇺🇸 Made in USA · GMP Certified",
  "🔥 Free shipping on orders $80+",
  "✅ 30-day money-back guarantee",
  "💊 No proprietary blends",
];

export default function SocialProofBar() {
  return (
    <div
      style={{
        background: "#ff7e00",
        overflow: "hidden",
        padding: "10px 0",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="ticker-track">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#ffffff",
              whiteSpace: "nowrap",
              padding: "0 32px",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
