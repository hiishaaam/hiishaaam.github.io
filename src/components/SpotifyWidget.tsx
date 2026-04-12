import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DISCORD_ID = "1162579462056058880";

// Curated playlist — rotates every hour (24 songs = full day cycle)
// Album art from Apple Music CDN (300x300), Spotify track IDs for linking
const FALLBACK_PLAYLIST = [
  { song: "Raabta (Siyaah Raatein)", artist: "Arijit Singh", track_id: "6BQWmYuo5aO5och7iUg6Oj",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/dc/a5/46/dca54628-5ca4-148c-d5c3-6219abc886e1/8902894698825_cover.jpg/300x300bb.jpg" },
  { song: "Arziyan", artist: "Javed Ali", track_id: "6BQWmYuo5aO5och7iUg6Oj",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e2/fe/21/e2fe21b6-50e6-7b4b-285a-d40394baba4e/8902894628990_cover.jpg/300x300bb.jpg" },
  { song: "Pavizha Mazha", artist: "KS Harisankar", track_id: "7JtTcONjth6LXRQctrxMY0",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/db/63/35/db6335fe-6c69-85cd-4f78-a649cb8bfc01/8905574874953.jpg/300x300bb.jpg" },
  { song: "Thookki", artist: "Maalavika Sundar", track_id: "7JtTcONjth6LXRQctrxMY0",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ab/19/ba/ab19bad6-e84a-7b68-981b-ac2fc45fb47f/887209451853_cover.jpg/300x300bb.jpg" },
  { song: "Paazha", artist: "Vaazha 2", track_id: "7JtTcONjth6LXRQctrxMY0",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/38/2a/19/382a1910-c469-19b8-7369-89aeaea54415/cover.jpg/300x300bb.jpg" },
  { song: "Mitwa", artist: "Shafqat Amanat Ali", track_id: "7yDY91xWYoDAyxXYyQCsI0",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/15/3e/84/153e841c-14dc-4841-7e2d-f677dd9bff61/888880946089.jpg/300x300bb.jpg" },
  { song: "Afreen Afreen", artist: "Rahat Fateh Ali Khan", track_id: "6hTchL2DHhANaQuTLD2LL7",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music71/v4/95/ff/b0/95ffb0d1-ba72-767e-a4e4-6e7989524b03/190394811402.jpg/300x300bb.jpg" },
  { song: "Iktara", artist: "Kavita Seth", track_id: "6hTchL2DHhANaQuTLD2LL7",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5c/c8/f8/5cc8f804-a9d6-7a11-57f6-840e1e2c9419/884977322910.jpg/300x300bb.jpg" },
  { song: "Koodappirannor", artist: "Sooraj Santhosh", track_id: "1v4T04deB1lePg3y6NzWQV",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/38/2a/19/382a1910-c469-19b8-7369-89aeaea54415/cover.jpg/300x300bb.jpg" },
  { song: "Tum Tak", artist: "Javed Ali", track_id: "7yDY91xWYoDAyxXYyQCsI0",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9e/72/a0/9e72a0e7-eb6f-e576-47b1-2ae26a007dac/886444018869.jpg/300x300bb.jpg" },
  { song: "Jhol", artist: "Maanu", track_id: "6BQWmYuo5aO5och7iUg6Oj",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/69/03/bc/6903bc23-ed74-eed5-e6e1-b472cd26a4c8/085365403741.jpg/300x300bb.jpg" },
  { song: "Channa Mereya", artist: "Arijit Singh", track_id: "6BQWmYuo5aO5och7iUg6Oj",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bc/6e/4d/bc6e4d0c-adec-b431-7b60-16f5689f9664/886446201597.jpg/300x300bb.jpg" },
  { song: "Amsham", artist: "Hesham Abdul Wahab", track_id: "1v4T04deB1lePg3y6NzWQV",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8b/b3/1f/8bb31f21-f882-b541-cf91-99c28b6c9dd3/8903431064035_cover.jpg/300x300bb.jpg" },
  { song: "Aaoge Tum Kabhi", artist: "The Local Train", track_id: "6BQWmYuo5aO5och7iUg6Oj",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b4/ab/c3/b4abc3c3-bd25-b8cb-0011-4311e3f9497e/197189936111.jpg/300x300bb.jpg" },
  { song: "Nadaan Parinde", artist: "Mohit Chauhan", track_id: "6BQWmYuo5aO5och7iUg6Oj",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/56/ac/41/56ac41f7-99f3-3eae-3b07-443167292c4e/8902894697408_cover.jpg/300x300bb.jpg" },
  { song: "Kun Faya Kun", artist: "A. R. Rahman", track_id: "6BQWmYuo5aO5och7iUg6Oj",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/56/ac/41/56ac41f7-99f3-3eae-3b07-443167292c4e/8902894697408_cover.jpg/300x300bb.jpg" },
  { song: "Barkha", artist: "Papon", track_id: "6BQWmYuo5aO5och7iUg6Oj",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/74/5f/05/745f053c-a528-b4d8-1528-102f92e16588/199538166514.jpg/300x300bb.jpg" },
  { song: "Choo Lo", artist: "The Local Train", track_id: "6BQWmYuo5aO5och7iUg6Oj",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b4/ab/c3/b4abc3c3-bd25-b8cb-0011-4311e3f9497e/197189936111.jpg/300x300bb.jpg" },
  { song: "Sajda", artist: "Rahat Fateh Ali Khan", track_id: "6hTchL2DHhANaQuTLD2LL7",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0e/2d/45/0e2d45b2-c989-e76f-0510-06800917f1c8/8903431648372_cover.jpg/300x300bb.jpg" },
  { song: "Bol Na Halke Halke", artist: "Rahat Fateh Ali Khan", track_id: "6hTchL2DHhANaQuTLD2LL7",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/42/99/b3/4299b3e6-984f-684e-f2f6-2302f9e81ed1/849486005945_cover.jpg/300x300bb.jpg" },
  { song: "Jo Tum Mere Ho", artist: "Anuv Jain", track_id: "6BQWmYuo5aO5och7iUg6Oj",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/37/cddf37f9-9794-175e-d68f-272c8a3853b2/24UMGIM79558.rgb.jpg/300x300bb.jpg" },
  { song: "O Re Piya", artist: "Rahat Fateh Ali Khan", track_id: "6hTchL2DHhANaQuTLD2LL7",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0f/77/7a/0f777a59-0a16-89d5-7273-d6de038ae7c0/849486005808_cover.jpg/300x300bb.jpg" },
  { song: "Mel Mel", artist: "Naresh Iyer", track_id: "1v4T04deB1lePg3y6NzWQV",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/dc/0f/cbdc0fcf-d365-ee4f-199f-cd1229b7aad0/840920106860.jpg/300x300bb.jpg" },
  { song: "CO2", artist: "Prateek Kuhad", track_id: "6BQWmYuo5aO5och7iUg6Oj",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/3b/a5/8c/3ba58c01-fdc3-a5ad-adeb-a3e04b5c63cd/075679687111.jpg/300x300bb.jpg" },
];

type TrackData = {
  song: string;
  artist: string;
  album_art_url: string | null;
  track_id: string | null;
  isLive: boolean;
  timestamps: { start: number; end: number } | null;
};

function getCurrentFallbackIndex(): number {
  return new Date().getHours() % FALLBACK_PLAYLIST.length;
}

export function SpotifyWidget() {
  const [track, setTrack] = useState<TrackData | null>(null);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animFrameRef = useRef<number>(0);

  // Primary: Lanyard live data; Fallback: curated playlist with pre-baked art
  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const json = await res.json();

        if (!cancelled && json.success && json.data.listening_to_spotify && json.data.spotify) {
          const s = json.data.spotify;
          setTrack({
            song: s.song,
            artist: s.artist,
            album_art_url: s.album_art_url,
            track_id: s.track_id,
            isLive: true,
            timestamps: s.timestamps
              ? { start: s.timestamps.start, end: s.timestamps.end }
              : null,
          });
          return;
        }
      } catch {
        // Lanyard failed, fall through to fallback
      }

      // Fallback — curated playlist (no API calls needed, art is pre-baked)
      if (cancelled) return;
      const idx = getCurrentFallbackIndex();
      const fallback = FALLBACK_PLAYLIST[idx];
      setTrack({
        song: fallback.song,
        artist: fallback.artist,
        album_art_url: fallback.art,
        track_id: fallback.track_id,
        isLive: false,
        timestamps: null,
      });
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => { cancelled = true; clearInterval(interval); };
  }, []);

  // Progress bar animation
  useEffect(() => {
    const updateProgress = () => {
      if (track?.isLive && track.timestamps) {
        const now = Date.now();
        const { start, end } = track.timestamps;
        setProgress(Math.min(Math.max((now - start) / (end - start), 0), 1));
      } else {
        // Fake 4-min looping cycle for fallback
        const cycleMs = 4 * 60 * 1000;
        setProgress((Date.now() % cycleMs) / cycleMs);
      }
      animFrameRef.current = requestAnimationFrame(updateProgress);
    };
    animFrameRef.current = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [track?.isLive, track?.timestamps]);

  const elapsed = track?.isLive && track.timestamps ? Date.now() - track.timestamps.start : 0;
  const duration = track?.isLive && track.timestamps ? track.timestamps.end - track.timestamps.start : 0;
  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
  };

  return (
    <>
      <style>{`
        @keyframes spotify-eq-1 { 0%, 100% { height: 3px; } 50% { height: 12px; } }
        @keyframes spotify-eq-2 { 0%, 100% { height: 8px; } 50% { height: 4px; } }
        @keyframes spotify-eq-3 { 0%, 100% { height: 5px; } 50% { height: 14px; } }
        @keyframes spotify-eq-4 { 0%, 100% { height: 10px; } 50% { height: 3px; } }
        @keyframes spotify-glow-pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes vinyl-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      <AnimatePresence>
        {track && (
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
              href={track.track_id ? `https://open.spotify.com/track/${track.track_id}` : '#'}
              target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block', position: 'relative' }}
            >
              {/* Ambient glow */}
              <div style={{
                position: 'absolute', inset: '-8px', borderRadius: '20px',
                background: 'radial-gradient(ellipse at center, rgba(224, 122, 95, 0.15) 0%, transparent 70%)',
                filter: 'blur(20px)', animation: 'spotify-glow-pulse 3s ease-in-out infinite',
                pointerEvents: 'none', zIndex: -1,
              }} />

              {/* Main card */}
              <motion.div
                animate={{ width: isHovered ? 280 : 240 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  background: 'linear-gradient(135deg, rgba(10, 15, 26, 0.92) 0%, rgba(15, 20, 30, 0.88) 100%)',
                  backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px', padding: '12px',
                  overflow: 'hidden', position: 'relative',
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: '12px', right: '12px', height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(224, 122, 95, 0.5), transparent)',
                }} />

                {/* Content row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

                  {/* Vinyl disc */}
                  <div style={{ position: 'relative', width: '48px', height: '48px', flexShrink: 0 }}>
                    <div style={{
                      position: 'absolute', inset: '-2px', borderRadius: '50%',
                      background: 'conic-gradient(from 0deg, rgba(224,122,95,0.3), transparent, rgba(129,178,154,0.15), transparent, rgba(224,122,95,0.3))',
                      animation: 'vinyl-spin 3s linear infinite',
                    }} />
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '50%',
                      overflow: 'hidden', position: 'relative', background: '#0a0a0a',
                    }}>
                      <div style={{ position: 'absolute', inset: '0', animation: 'vinyl-spin 4s linear infinite' }}>
                        {track.album_art_url ? (
                          <img src={track.album_art_url} alt="Album Art"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        ) : (
                          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #E07A5F, #81B29A)' }} />
                        )}
                      </div>
                      <div style={{
                        position: 'absolute', inset: 0, borderRadius: '50%', pointerEvents: 'none',
                        background: 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.15) 31%, transparent 32%), radial-gradient(circle, transparent 45%, rgba(0,0,0,0.1) 46%, transparent 47%), radial-gradient(circle, transparent 60%, rgba(0,0,0,0.08) 61%, transparent 62%)',
                      }} />
                      <div style={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        width: '10px', height: '10px', borderRadius: '50%',
                        background: 'radial-gradient(circle, #0a0f1a 40%, #1a1f2e 100%)',
                        border: '1.5px solid rgba(255, 255, 255, 0.1)', zIndex: 10,
                      }} />
                    </div>
                  </div>

                  {/* Track info */}
                  <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#E07A5F" style={{ flexShrink: 0 }}>
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.021zM19.32 14.1c-.301.42-.84.54-1.261.24-3.24-1.98-8.159-2.58-11.94-1.44-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.9 9.9 15.36 10.56 19.08 12.84c.42.3.54.84.24 1.26zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.781-.18-.6.18-1.2.78-1.38 4.2-1.26 11.28-1.02 15.72 1.62.539.3.719 1.02.419 1.56-.239.54-.959.72-1.379.42z" />
                      </svg>
                      <span style={{
                        fontSize: '9px', fontWeight: 700, color: '#E07A5F',
                        textTransform: 'uppercase', letterSpacing: '0.12em',
                        fontFamily: 'var(--font-mono)', lineHeight: 1,
                      }}>
                        {track.isLive ? 'Now Playing' : 'On Repeat'}
                      </span>
                      <div style={{ display: 'flex', gap: '1.5px', alignItems: 'flex-end', height: '14px', marginLeft: 'auto' }}>
                        {[
                          { anim: 'spotify-eq-1', dur: '0.8s' },
                          { anim: 'spotify-eq-2', dur: '0.6s' },
                          { anim: 'spotify-eq-3', dur: '0.9s' },
                          { anim: 'spotify-eq-4', dur: '0.7s' },
                        ].map((bar, i) => (
                          <div key={i} style={{
                            width: '2px', borderRadius: '1px',
                            background: 'linear-gradient(to top, #E07A5F, #81B29A)',
                            animation: `${bar.anim} ${bar.dur} ease-in-out infinite`,
                          }} />
                        ))}
                      </div>
                    </div>

                    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', marginBottom: '2px' }}>
                      <div style={{
                        fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.95)',
                        fontFamily: 'var(--font-sans)', overflow: 'hidden', textOverflow: 'ellipsis',
                      }}>
                        {track.song}
                      </div>
                    </div>

                    <div style={{
                      fontSize: '11px', color: 'rgba(255,255,255,0.4)',
                      fontFamily: 'var(--font-sans)', fontWeight: 400,
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: '8px',
                    }}>
                      {track.artist}
                    </div>

                    {/* Progress bar */}
                    <div>
                      <div style={{
                        width: '100%', height: '3px', borderRadius: '2px',
                        background: 'rgba(255,255,255,0.06)', overflow: 'hidden', position: 'relative',
                      }}>
                        <motion.div style={{
                          height: '100%', borderRadius: '2px',
                          background: 'linear-gradient(90deg, #E07A5F, #81B29A)',
                          width: `${progress * 100}%`, position: 'relative',
                        }}>
                          <div style={{
                            position: 'absolute', right: 0, top: '-1px',
                            width: '5px', height: '5px', borderRadius: '50%',
                            background: '#E07A5F', boxShadow: '0 0 6px rgba(224,122,95,0.8)',
                          }} />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {isHovered && track.isLive && track.timestamps && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}
                          >
                            <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums' }}>
                              {formatTime(Math.min(elapsed, duration))}
                            </span>
                            <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums' }}>
                              {formatTime(duration)}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
