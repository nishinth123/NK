"use client";
import { useState } from "react";
import ParticleCanvas from "@/components/ParticleCanvas";
import Curtain from "@/components/Curtain";
import MusicPlayer from "@/components/MusicPlayer";
import Countdown from "@/components/Countdown";
import { useScrollReveal } from "@/components/useScrollReveal";

function CornerOrnament() {
  return (
    <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5 L5 65" stroke="#C9A84C" strokeWidth="1" />
      <path d="M5 5 L65 5" stroke="#C9A84C" strokeWidth="1" />
      <path d="M5 5 L28 28" stroke="#C9A84C" strokeWidth="0.5" />
      <circle cx="5" cy="5" r="3" fill="#C9A84C" />
      <circle cx="32" cy="5" r="2" fill="#C9A84C" />
      <circle cx="5" cy="32" r="2" fill="#C9A84C" />
      <circle cx="18" cy="5" r="1" fill="rgba(201,168,76,0.5)" />
      <circle cx="5" cy="18" r="1" fill="rgba(201,168,76,0.5)" />
    </svg>
  );
}

function OrnamentRow({ dark = false }: { dark?: boolean }) {
  const col = dark ? "rgba(201,168,76,0.5)" : "var(--gold)";
  return (
    <div className="ornament-row reveal">
      <div className="orn-line" style={{ background: `linear-gradient(90deg,transparent,${col})` }} />
      <span className="orn-star" style={{ color: col }}>✦</span>
      <div className="orn-line r" style={{ background: `linear-gradient(90deg,${col},transparent)` }} />
    </div>
  );
}

export default function Home() {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  useScrollReveal();

  function handleCurtainOpen() {
    setCurtainOpen(true);
    setPlayMusic(true);
  }

  return (
    <>
      <ParticleCanvas />

      {!curtainOpen && <Curtain onOpen={handleCurtainOpen} />}

      <MusicPlayer autoPlay={playMusic} />

      <main className={`main-content ${curtainOpen ? "visible" : ""}`}>

        {/* ══════════════ HERO ══════════════ */}
        <section className="hero section">
          <div className="dot-bg" />
          <div className="corner-ornament co-tl"><CornerOrnament /></div>
          <div className="corner-ornament co-tr"><CornerOrnament /></div>
          <div className="corner-ornament co-bl"><CornerOrnament /></div>
          <div className="corner-ornament co-br"><CornerOrnament /></div>

          <p className="hero-badge">✦ &nbsp; Wedding Invitation &nbsp; ✦</p>

          <div className="hero-names">
            <span className="shimmer-text">Nishinth</span>
            <span className="hero-amp">&amp;</span>
            <span className="shimmer-text">Karthika</span>
          </div>

          <div className="hero-divider">
            <div className="h-div-line" />
            <div className="h-div-diamond" />
            <div className="h-div-line r" />
          </div>

          <p className="hero-tagline">
            Together with their families, request the honour of your presence
            as they begin a beautiful journey of love, laughter and forever.
          </p>

          <div className="hero-date-box">
            <p className="hero-date">30 August 2026</p>
            <p className="hero-time">Muhurtham &nbsp;·&nbsp; 10:30 AM – 11:30 AM</p>
            <p className="hero-venue">Thalassery Town Bank Auditorium, Kerala</p>
          </div>

          <div className="scroll-hint">
            <span className="scroll-hint-label">Scroll</span>
            <span className="scroll-arrow">↓</span>
          </div>
        </section>

        {/* ══════════════ SEAL ══════════════ */}
        <section className="seal-section section">
          <div className="seal-circle">
            <span className="seal-monogram">NK</span>
          </div>
          <p className="sec-label reveal">With The Blessings Of</p>
          <h2 className="sec-title reveal">Our Families</h2>
          <OrnamentRow />
        </section>

        {/* ══════════════ FAMILIES ══════════════ */}
        <section className="families-section section">
          <p className="sec-label reveal">The Union of Two Families</p>
          <h2 className="sec-title reveal">Bride &amp; Groom</h2>
          <OrnamentRow />

          <div className="families-grid">
            <div className="family-card reveal reveal-delay-1">
              <p className="family-role">The Groom</p>
              <h3 className="family-name shimmer-text">Nishinth</h3>
              <p className="family-parents">
                Son of<br />
                Mr. Sunil Kumar<br />
                &amp; Mrs. Bindu Sunil
              </p>
              <p className="family-address">
                Mundiolil House<br />
                Punnol, Thalassery
              </p>
            </div>

            <div className="families-and reveal reveal-delay-2">&amp;</div>

            <div className="family-card reveal reveal-delay-3">
              <p className="family-role">The Bride</p>
              <h3 className="family-name shimmer-text">Karthika</h3>
              <p className="family-parents">
                Daughter of<br />
                Mr. Rajendran T V<br />
                &amp; Mrs. Reetha Rajan
              </p>
              <p className="family-address">
                T V Villa<br />
                Gopalpetta, Thalassery
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════ JOURNEY ══════════════ */}
        <section className="journey-section section">
          <p className="sec-label reveal">Wedding Journey</p>
          <h2 className="sec-title reveal">Celebrate With Us</h2>
          <OrnamentRow />

          <div className="timeline">
            {[
              { date: "28 Aug 2026", event: "Bride's Reception", time: "6:00 PM – 10:00 PM", place: "Thiruvani Auditorium, Gopalpetta", icon: "🎉", side: "left" },
              { date: "29 Aug 2026", event: "Haldi Ceremony", time: "11:00 AM Onwards", place: "Bride's Home, Gopalpetta", icon: "🌼", side: "right" },
              { date: "30 Aug 2026", event: "Sacred Wedding Ceremony", time: "Muhurtham: 10:30 AM – 11:30 AM", place: "Thalassery Town Bank Auditorium", icon: "💍", side: "left" },
              { date: "30 Aug 2026", event: "Evening of Celebration", time: "6:00 PM – 10:00 PM", place: "Punnol, Thalassery", icon: "✨", side: "right" },
            ].map((item, i) => (
              <div className="timeline-item reveal" key={i}>
                {item.side === "left" ? (
                  <>
                    <div className="tl-content left">
                      <p className="tl-date">{item.date}</p>
                      <p className="tl-event">{item.event}</p>
                      <p className="tl-time">{item.time}</p>
                      <p className="tl-place">{item.place}</p>
                    </div>
                    <div className="tl-dot">{item.icon}</div>
                    <div className="tl-empty" />
                  </>
                ) : (
                  <>
                    <div className="tl-empty" />
                    <div className="tl-dot">{item.icon}</div>
                    <div className="tl-content right">
                      <p className="tl-date">{item.date}</p>
                      <p className="tl-event">{item.event}</p>
                      <p className="tl-time">{item.time}</p>
                      <p className="tl-place">{item.place}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ COUNTDOWN ══════════════ */}
        <Countdown />

        {/* ══════════════ VENUES ══════════════ */}
        <section className="venues-section section">
          <p className="sec-label reveal">Venues &amp; Celebrations</p>
          <h2 className="sec-title reveal">Join Us</h2>
          <OrnamentRow />

          <div className="venues-grid">
            {[
              { num: "01", type: "Bride's Reception", name: "Thiruvani Auditorium", location: "Gopalpetta, Thalassery", date: "28 August 2026", time: "6:00 PM – 10:00 PM" },
              { num: "02", type: "Haldi Ceremony", name: "Bride's Home", location: "Gopalpetta, Thalassery", date: "29 August 2026", time: "11:00 AM Onwards" },
              { num: "03", type: "Wedding Ceremony", name: "Town Bank Auditorium", location: "Thalassery, Kerala", date: "30 August 2026", time: "10:30 AM – 11:30 AM" },
              { num: "04", type: "Evening Celebration", name: "Punnol", location: "Thalassery, Kerala", date: "30 August 2026", time: "6:00 PM – 10:00 PM" },
            ].map((v, i) => (
              <div className={`venue-card reveal reveal-delay-${i + 1}`} key={i}>
                <span className="venue-num">{v.num}</span>
                <p className="venue-type">{v.type}</p>
                <h3 className="venue-name">{v.name}</h3>
                <p className="venue-location">{v.location}</p>
                <p className="venue-date">{v.date}</p>
                <p className="venue-time">{v.time}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ CLOSING ══════════════ */}
        <section className="closing-section section">
          <p className="sec-label reveal">With Love, Laughter &amp; Blessings</p>
          <h2 className="sec-title reveal">Celebrating This Beautiful Beginning</h2>
          <OrnamentRow />

          <p className="closing-quote reveal">
            &ldquo;Surrounded by the love of our siblings and family, we step into this
            new chapter with gratitude, happiness and countless blessings.&rdquo;
          </p>

          <div className="siblings-box reveal">
            <p className="siblings-title">Our Loving Siblings &amp; Family</p>
            <p className="sibling-name">Remya &amp; Vivek</p>
            <p className="sibling-divider">✦</p>
            <p className="sibling-name">Rohith &amp; Divya</p>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 14, color: "var(--text3)", marginTop: 20 }}>
              Thank you for being part of our story.
            </p>
          </div>

          <div className="closing-final reveal">
            <span className="closing-final-names shimmer-text">
              Nishinth &amp; Karthika
            </span>
            <span className="closing-final-date">30 · 08 · 2026</span>
          </div>
        </section>

        {/* ══════════════ FOOTER ══════════════ */}
        <footer>
          ✦ &nbsp; Nishinth &amp; Karthika &nbsp; · &nbsp; 30 August 2026 &nbsp; · &nbsp; Thalassery, Kerala &nbsp; ✦
        </footer>
      </main>
    </>
  );
}
