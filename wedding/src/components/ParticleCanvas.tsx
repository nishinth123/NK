"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  colorIdx: number;
  type: "diamond" | "circle" | "star" | "petal";
  rotation: number;
  rotSpeed: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  life: number;
  maxLife: number;
  wobble: number;
  wobbleSpeed: number;
}

const GOLD_COLORS = [
  "rgba(212,175,55,",
  "rgba(201,168,76,",
  "rgba(242,215,119,",
  "rgba(255,220,100,",
  "rgba(180,140,40,",
  "rgba(255,235,160,",
];

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    let animId: number;
    const particles: Particle[] = [];
    const COUNT = 100;

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }

    function makeParticle(init = false): Particle {
      return {
        x: Math.random() * (W || window.innerWidth),
        y: init ? Math.random() * (H || window.innerHeight) : (H || window.innerHeight) + 20,
        size: Math.random() * 3.5 + 0.5,
        speedY: -(Math.random() * 0.5 + 0.15),
        speedX: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.55 + 0.2,
        colorIdx: Math.floor(Math.random() * GOLD_COLORS.length),
        type: (["diamond", "circle", "star", "petal"] as const)[Math.floor(Math.random() * 4)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.025,
        twinkleSpeed: Math.random() * 0.025 + 0.008,
        twinkleOffset: Math.random() * Math.PI * 2,
        life: 0,
        maxLife: Math.random() * 500 + 250,
        wobble: 0,
        wobbleSpeed: Math.random() * 0.02 + 0.005,
      };
    }

    function drawStar(ctx: CanvasRenderingContext2D, s: number) {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const a = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const b = ((i * 4 + 2) * Math.PI) / 5 - Math.PI / 2;
        if (i === 0) ctx.moveTo(Math.cos(a) * s, Math.sin(a) * s);
        else ctx.lineTo(Math.cos(a) * s, Math.sin(a) * s);
        ctx.lineTo(Math.cos(b) * s * 0.42, Math.sin(b) * s * 0.42);
      }
      ctx.closePath();
    }

    function drawPetal(ctx: CanvasRenderingContext2D, s: number) {
      ctx.beginPath();
      ctx.ellipse(0, -s * 0.5, s * 0.35, s * 0.7, 0, 0, Math.PI * 2);
      ctx.closePath();
    }

    function draw(p: Particle) {
      const now = Date.now();
      const tw = Math.sin(now * p.twinkleSpeed + p.twinkleOffset) * 0.3 + 0.7;
      const fadeIn = Math.min(1, p.life / 60);
      const fadeOut = 1 - Math.max(0, (p.life - p.maxLife + 60) / 60);
      const alpha = p.opacity * tw * fadeIn * fadeOut;
      const col = GOLD_COLORS[p.colorIdx];

      ctx!.save();
      ctx!.translate(p.x, p.y);
      ctx!.rotate(p.rotation);
      ctx!.fillStyle = col + alpha + ")";
      ctx!.strokeStyle = col + (alpha * 0.4) + ")";
      ctx!.lineWidth = 0.5;

      const s = p.size;
      switch (p.type) {
        case "circle":
          ctx!.beginPath();
          ctx!.arc(0, 0, s, 0, Math.PI * 2);
          ctx!.fill();
          break;
        case "diamond":
          ctx!.beginPath();
          ctx!.moveTo(0, -s * 1.6);
          ctx!.lineTo(s, 0);
          ctx!.lineTo(0, s * 1.6);
          ctx!.lineTo(-s, 0);
          ctx!.closePath();
          ctx!.fill();
          ctx!.stroke();
          break;
        case "star":
          drawStar(ctx!, s * 1.3);
          ctx!.fill();
          break;
        case "petal":
          drawPetal(ctx!, s * 1.5);
          ctx!.fill();
          break;
      }
      ctx!.restore();
    }

    function update(p: Particle) {
      p.wobble += p.wobbleSpeed;
      p.x += p.speedX + Math.sin(p.wobble) * 0.3;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;
      p.life++;
      if (p.y < -40 || p.life > p.maxLife) {
        Object.assign(p, makeParticle(false));
      }
    }

    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < COUNT; i++) particles.push(makeParticle(true));

    function animate() {
      ctx!.clearRect(0, 0, W, H);
      particles.forEach((p) => { update(p); draw(p); });
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" />;
}
