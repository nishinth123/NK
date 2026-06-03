"use client";
import { useState, useEffect } from "react";

interface CurtainProps {
  onOpen: () => void;
}

export default function Curtain({ onOpen }: CurtainProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate random spark positions for curtain ambiance
    const s = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setSparks(s);
    setTimeout(() => setShowContent(true), 200);
  }, []);

  const handleReveal = () => {
    setIsOpen(true);
    setTimeout(onOpen, 1800);
  };

  return (
    <div className={`curtain-wrapper ${isOpen ? "curtain-open" : ""}`}>
      {/* PELMET */}
      <div className="curtain-pelmet" style={{ transition: "opacity 0.8s ease 0.5s" }}>
        <div className="curtain-pelmet-inner">
          <div className="pelmet-line" />
          <span className="pelmet-monogram">N &amp; K</span>
          <div className="pelmet-line r" />
        </div>
      </div>

      {/* LEFT CURTAIN PANEL */}
      <div className="curtain-left">
        <div className="curtain-fold" />
        <div className="curtain-fold" />
        <div className="curtain-fold" />
        <div className="curtain-fold" />
        {/* Decorative gold pattern on curtain */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="curtainPatL" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 5 L35 20 L50 20 L38 30 L43 45 L30 36 L17 45 L22 30 L10 20 L25 20 Z"
                fill="#D4AF37" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#curtainPatL)" />
        </svg>
        {/* Ambient sparks */}
        {sparks.slice(0, 12).map((s) => (
          <div
            key={s.id}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: "2px",
              height: "2px",
              background: "#D4AF37",
              borderRadius: "50%",
              boxShadow: "0 0 6px 2px rgba(212,175,55,0.4)",
              animation: `pulse ${1.5 + s.delay}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* RIGHT CURTAIN PANEL */}
      <div className="curtain-right">
        <div className="curtain-fold" />
        <div className="curtain-fold" />
        <div className="curtain-fold" />
        <div className="curtain-fold" />
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="curtainPatR" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 5 L35 20 L50 20 L38 30 L43 45 L30 36 L17 45 L22 30 L10 20 L25 20 Z"
                fill="#D4AF37" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#curtainPatR)" />
        </svg>
        {sparks.slice(12).map((s) => (
          <div
            key={s.id}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: "2px",
              height: "2px",
              background: "#D4AF37",
              borderRadius: "50%",
              boxShadow: "0 0 6px 2px rgba(212,175,55,0.4)",
              animation: `pulse ${1.5 + s.delay}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* CENTER CONTENT */}
      {showContent && (
        <div className="curtain-center">
          <p className="curtain-title">✦ &nbsp; Wedding Invitation &nbsp; ✦</p>

          <div className="curtain-names">
            <span style={{
              background: "linear-gradient(90deg, #FAF0C8, #D4AF37, #FAF0C8)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 5s linear infinite",
            }}>
              Nishinth
            </span>
            <span className="amp">&amp;</span>
            <span style={{
              background: "linear-gradient(90deg, #FAF0C8, #D4AF37, #FAF0C8)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 5s linear infinite 0.5s",
            }}>
              Karthika
            </span>
          </div>

          <div className="curtain-ornament">
            <div className="c-orn-line" />
            <div className="c-orn-diamond" />
            <div className="c-orn-line r" />
          </div>

          <p className="curtain-date">30 · August · 2026</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(13px, 2vw, 16px)",
            color: "rgba(255,248,231,0.5)",
            maxWidth: "380px",
            lineHeight: 1.8,
            marginTop: "4px",
          }}>
            Thalassery, Kerala
          </p>

          <button className="reveal-btn" onClick={handleReveal} disabled={isOpen}>
            <span className="btn-corner tl" />
            <span className="btn-corner tr" />
            <span className="btn-corner bl" />
            <span className="btn-corner br" />
            {isOpen ? "Opening..." : "Open Invitation"}
          </button>

          <p className="music-hint">♪ &nbsp; Music will begin automatically &nbsp; ♪</p>
        </div>
      )}

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 1; transform: scale(1.8); }
        }
      `}</style>
    </div>
  );
}
