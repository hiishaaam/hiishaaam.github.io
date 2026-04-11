import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DISCORD_ID = "1162579462056058880";

type SpotifyData = {
  song: string;
  artist: string;
  album_art_url: string;
  track_id: string | null;
  timestamps: {
    start: number;
    end: number;
  } | null;
};

export function SpotifyWidget() {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const progressRef = useRef<number>(0);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const json = await res.json();

        if (json.success && json.data.listening_to_spotify && json.data.spotify) {
          const spotify = json.data.spotify;
          setSpotifyData({
            song: spotify.song,
            artist: spotify.artist,
            album_art_url: spotify.album_art_url,
            track_id: spotify.track_id,
            timestamps: spotify.timestamps ? {
              start: spotify.timestamps.start,
              end: spotify.timestamps.end,
            } : null,
          });
          setIsPlaying(true);
        } else {
          setIsPlaying(false);
          setSpotifyData(null);
        }
      } catch (error) {
        console.error("Failed to fetch Spotify status", error);
      }
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 5000);
    return () => clearInterval(interval);
  }, []);

  // Smooth progress bar animation
  useEffect(() => {
    if (!spotifyData?.timestamps) {
      setProgress(0);
      return;
    }

    const updateProgress = () => {
      if (!spotifyData?.timestamps) return;
      const now = Date.now();
      const { start, end } = spotifyData.timestamps;
      const duration = end - start;
      const elapsed = now - start;
      progressRef.current = Math.min(Math.max(elapsed / duration, 0), 1);
      setProgress(progressRef.current);
      animFrameRef.current = requestAnimationFrame(updateProgress);
    };

    animFrameRef.current = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [spotifyData?.timestamps]);

  const formatTime = (ms: number) => {
    const totalSec = Math.floor(ms / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  const elapsed = spotifyData?.timestamps
    ? Date.now() - spotifyData.timestamps.start
    : 0;
  const duration = spotifyData?.timestamps
    ? spotifyData.timestamps.end - spotifyData.timestamps.start
    : 0;

  return (
    <>
      <style>{`
        @keyframes spotify-eq-1 {
          0%, 100% { height: 3px; }
          50% { height: 12px; }
        }
        @keyframes spotify-eq-2 {
          0%, 100% { height: 8px; }
          50% { height: 4px; }
        }
        @keyframes spotify-eq-3 {
          0%, 100% { height: 5px; }
          50% { height: 14px; }
        }
        @keyframes spotify-eq-4 {
          0%, 100% { height: 10px; }
          50% { height: 3px; }
        }
        @keyframes spotify-glow-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes vinyl-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spotify-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <AnimatePresence>
        {isPlaying && spotifyData && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.8 }}
            transition={{ duration: 0.6, type: "spring", damping: 20, stiffness: 200 }}
            className="fixed bottom-5 right-5 z-[100]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a
              href={spotifyData.track_id ? `https://open.spotify.com/track/${spotifyData.track_id}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                display: 'block',
                position: 'relative',
              }}
            >
              {/* Ambient glow behind the widget */}
              <div style={{
                position: 'absolute',
                inset: '-8px',
                borderRadius: '20px',
                background: `radial-gradient(ellipse at center, rgba(29, 185, 84, 0.15) 0%, transparent 70%)`,
                filter: 'blur(20px)',
                animation: 'spotify-glow-pulse 3s ease-in-out infinite',
                pointerEvents: 'none',
                zIndex: -1,
              }} />

              {/* Main card */}
              <motion.div
                animate={{
                  width: isHovered ? 280 : 240,
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  background: 'linear-gradient(135deg, rgba(10, 15, 26, 0.92) 0%, rgba(15, 20, 30, 0.88) 100%)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Top gradient accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '12px',
                  right: '12px',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(29, 185, 84, 0.5), transparent)',
                }} />

                {/* Content row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

                  {/* Vinyl disc */}
                  <div style={{
                    position: 'relative',
                    width: '48px',
                    height: '48px',
                    flexShrink: 0,
                  }}>
                    {/* Outer ring glow */}
                    <div style={{
                      position: 'absolute',
                      inset: '-2px',
                      borderRadius: '50%',
                      background: 'conic-gradient(from 0deg, rgba(29, 185, 84, 0.3), transparent, rgba(29, 185, 84, 0.15), transparent, rgba(29, 185, 84, 0.3))',
                      animation: 'vinyl-spin 3s linear infinite',
                    }} />

                    {/* Disc body */}
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      position: 'relative',
                      background: '#0a0a0a',
                    }}>
                      {/* Spinning album art */}
                      <div style={{
                        position: 'absolute',
                        inset: '0',
                        animation: 'vinyl-spin 4s linear infinite',
                      }}>
                        <img
                          src={spotifyData.album_art_url}
                          alt="Album Art"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                      </div>

                      {/* Vinyl grooves overlay */}
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        background: `
                          radial-gradient(circle, transparent 30%, rgba(0,0,0,0.15) 31%, transparent 32%),
                          radial-gradient(circle, transparent 45%, rgba(0,0,0,0.1) 46%, transparent 47%),
                          radial-gradient(circle, transparent 60%, rgba(0,0,0,0.08) 61%, transparent 62%)
                        `,
                        pointerEvents: 'none',
                      }} />

                      {/* Center hole */}
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, #0a0f1a 40%, #1a1f2e 100%)',
                        border: '1.5px solid rgba(255, 255, 255, 0.1)',
                        zIndex: 10,
                      }} />
                    </div>
                  </div>

                  {/* Track info */}
                  <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                    {/* Status row */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '4px',
                    }}>
                      {/* Spotify icon */}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#1DB954" style={{ flexShrink: 0 }}>
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.021zM19.32 14.1c-.301.42-.84.54-1.261.24-3.24-1.98-8.159-2.58-11.94-1.44-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.9 9.9 15.36 10.56 19.08 12.84c.42.3.54.84.24 1.26zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.781-.18-.6.18-1.2.78-1.38 4.2-1.26 11.28-1.02 15.72 1.62.539.3.719 1.02.419 1.56-.239.54-.959.72-1.379.42z" />
                      </svg>

                      <span style={{
                        fontSize: '9px',
                        fontWeight: 700,
                        color: '#1DB954',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        fontFamily: 'var(--font-mono)',
                        lineHeight: 1,
                      }}>
                        Now Playing
                      </span>

                      {/* Mini equalizer */}
                      <div style={{
                        display: 'flex',
                        gap: '1.5px',
                        alignItems: 'flex-end',
                        height: '14px',
                        marginLeft: 'auto',
                      }}>
                        {[
                          { anim: 'spotify-eq-1', dur: '0.8s' },
                          { anim: 'spotify-eq-2', dur: '0.6s' },
                          { anim: 'spotify-eq-3', dur: '0.9s' },
                          { anim: 'spotify-eq-4', dur: '0.7s' },
                        ].map((bar, i) => (
                          <div
                            key={i}
                            style={{
                              width: '2px',
                              borderRadius: '1px',
                              background: 'linear-gradient(to top, #1DB954, #1ed760)',
                              animation: `${bar.anim} ${bar.dur} ease-in-out infinite`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Song title with marquee on hover for long names */}
                    <div style={{
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      marginBottom: '2px',
                    }}>
                      <div style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'rgba(255, 255, 255, 0.95)',
                        fontFamily: 'var(--font-sans)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}>
                        {spotifyData.song}
                      </div>
                    </div>

                    {/* Artist */}
                    <div style={{
                      fontSize: '11px',
                      color: 'rgba(255, 255, 255, 0.4)',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 400,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      marginBottom: '8px',
                    }}>
                      {spotifyData.artist}
                    </div>

                    {/* Progress bar */}
                    {spotifyData.timestamps && (
                      <div>
                        <div style={{
                          width: '100%',
                          height: '3px',
                          borderRadius: '2px',
                          background: 'rgba(255, 255, 255, 0.06)',
                          overflow: 'hidden',
                          position: 'relative',
                        }}>
                          <motion.div
                            style={{
                              height: '100%',
                              borderRadius: '2px',
                              background: 'linear-gradient(90deg, #1DB954, #1ed760)',
                              width: `${progress * 100}%`,
                              position: 'relative',
                            }}
                          >
                            {/* Glowing tip */}
                            <div style={{
                              position: 'absolute',
                              right: 0,
                              top: '-1px',
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              background: '#1ed760',
                              boxShadow: '0 0 6px rgba(30, 215, 96, 0.8)',
                            }} />
                          </motion.div>
                        </div>

                        {/* Time indicators */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '4px',
                              }}
                            >
                              <span style={{
                                fontSize: '9px',
                                color: 'rgba(255, 255, 255, 0.3)',
                                fontFamily: 'var(--font-mono)',
                                fontVariantNumeric: 'tabular-nums',
                              }}>
                                {formatTime(Math.min(elapsed, duration))}
                              </span>
                              <span style={{
                                fontSize: '9px',
                                color: 'rgba(255, 255, 255, 0.3)',
                                fontFamily: 'var(--font-mono)',
                                fontVariantNumeric: 'tabular-nums',
                              }}>
                                {formatTime(duration)}
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
