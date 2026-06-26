"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        background: scrolled ? "rgba(39,38,38,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/Wordmark.png"
            alt="NattyPLUS"
            width={160}
            height={36}
            style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden md:flex"
        >
          {["How It Works", "Ingredients", "Reviews", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#ff7e00")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)")
              }
            >
              {item}
            </a>
          ))}
          <a
            href="#shop"
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: "0.75rem" }}
          >
            Shop Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "#fff",
                borderRadius: 2,
                transition: "transform 0.2s",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "#272626",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {["How It Works", "Ingredients", "Reviews", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#shop"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ alignSelf: "flex-start" }}
          >
            Shop Now
          </a>
        </div>
      )}
    </header>
  );
}
