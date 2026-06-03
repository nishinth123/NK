"use client";
import { useEffect, useRef, useState, useCallback } from "react";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [playing]);

  useEffect(() => {
    if (autoPlay) {
      const audio = audioRef.current;
      if (!audio) return;
      setTimeout(() => {
        audio.volume = 0;
        audio.play()
          .then(() => {
            setPlaying(true);
            // Fade in volume
            let vol = 0;
            const fade = setInterval(() => {
              vol = Math.min(1, vol + 0.02);
              audio.volume = vol;
              if (vol >= 1) clearInterval(fade);
            }, 100);
          })
          .catch(() => {});
        setVisible(true);
        setTimeout(() => setShowLabel(true), 500);
        setTimeout(() => setShowLabel(false), 4000);
      }, 600);
    }
  }, [autoPlay]);

  useEffect(() => {
    if (!autoPlay) {
      setTimeout(() => setVisible(true), 500);
    }
  }, [autoPlay]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding.mp3"
        loop
        preload="auto"
      />
      {visible && (
        <div className="music-control">
          {showLabel && (
            <span className="music-label">♪ &nbsp; Wedding Music</span>
          )}
          <button
            className="music-btn"
            onClick={toggle}
            title={playing ? "Pause Music" : "Play Music"}
          >
            {playing ? (
              <div className="music-equalizer">
                <div className="eq-bar" />
                <div className="eq-bar" />
                <div className="eq-bar" />
                <div className="eq-bar" />
                <div className="eq-bar" />
              </div>
            ) : (
              <span style={{ color: "var(--gold)", fontSize: 18, marginLeft: 2 }}>▶</span>
            )}
          </button>
        </div>
      )}
    </>
  );
}
