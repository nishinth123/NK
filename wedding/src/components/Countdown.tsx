"use client";
import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-08-30T10:30:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calc(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(calc());
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="countdown-section section">
      <div style={{ position: "relative", zIndex: 1 }}>
        <p className="sec-label cd-sec-label reveal">Save The Date</p>
        <h2 className="cd-sec-title reveal">
          Counting Down To Forever
        </h2>
        <div className="ornament-row reveal">
          <div className="orn-line" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.6))" }} />
          <span className="orn-star">✦</span>
          <div className="orn-line r" style={{ background: "linear-gradient(90deg,rgba(201,168,76,0.6),transparent)" }} />
        </div>

        <div className="countdown-grid">
          <div className="cd-unit">
            <span className="cd-num">{mounted ? pad(time.days) : "00"}</span>
            <span className="cd-label">Days</span>
          </div>
          <span className="cd-colon">:</span>
          <div className="cd-unit">
            <span className="cd-num">{mounted ? pad(time.hours) : "00"}</span>
            <span className="cd-label">Hours</span>
          </div>
          <span className="cd-colon">:</span>
          <div className="cd-unit">
            <span className="cd-num">{mounted ? pad(time.minutes) : "00"}</span>
            <span className="cd-label">Minutes</span>
          </div>
          <span className="cd-colon">:</span>
          <div className="cd-unit">
            <span className="cd-num">{mounted ? pad(time.seconds) : "00"}</span>
            <span className="cd-label">Seconds</span>
          </div>
        </div>

        <p className="cd-tagline reveal">
          Counting down the moments until we begin our forever journey together.
        </p>
      </div>
    </section>
  );
}
