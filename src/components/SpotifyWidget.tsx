import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DISCORD_ID = "1162579462056058880";

type SpotifyData = {
  song: string;
  artist: string;
  album_art_url: string;
  track_id: string | null;
};

export function SpotifyWidget() {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let ws: WebSocket;
    let heartbeatInterval: NodeJS.Timeout;

    const connect = () => {
      ws = new WebSocket('wss://api.lanyard.rest/socket');

      ws.onopen = () => {
        ws.send(JSON.stringify({
          op: 2,
          d: { subscribe_to_id: DISCORD_ID }
        }));
      };

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);

        // Map Lanyard heartbeat
        if (msg.op === 1) {
          heartbeatInterval = setInterval(() => {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send(JSON.stringify({ op: 3 }));
            }
          }, msg.d.heartbeat_interval);
        }

        // Presence payload
        if (msg.t === 'INIT_STATE' || msg.t === 'PRESENCE_UPDATE') {
          const spotify = msg.d.spotify;
          if (spotify) {
            setSpotifyData({
              song: spotify.song,
              artist: spotify.artist,
              album_art_url: spotify.album_art_url,
              track_id: spotify.track_id
            });
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
        }
      };

      ws.onclose = () => {
        clearInterval(heartbeatInterval);
        setTimeout(connect, 5000); // Attempt to reconnect
      };
    };

    connect();

    return () => {
      if (ws) ws.close();
      if (heartbeatInterval) clearInterval(heartbeatInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isPlaying && spotifyData && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="fixed bottom-6 left-6 z-40 hidden md:block" // Hidden on mobile so it doesn't block content
        >
          <a 
            href={spotifyData.track_id ? `https://open.spotify.com/track/${spotifyData.track_id}` : '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 p-3 pr-6 rounded-2xl bg-[#0a0f1a]/80 border border-white/10 backdrop-blur-xl shadow-2xl hover:bg-white/5 transition-all overflow-hidden"
          >
            {/* Animated Glow Behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1DB954]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Album Art with Vinyl spin */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#1DB954]/30 shadow-[0_0_15px_rgba(29,185,84,0.2)] flex-shrink-0 bg-black flex items-center justify-center">
              <img 
                src={spotifyData.album_art_url} 
                alt="Album Art" 
                className="block w-full h-full aspect-square object-cover rounded-full origin-center animate-[spin_4s_linear_infinite]" 
              />
              {/* Vinyl center dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#0a0f1a] rounded-full border border-white/20" />
            </div>

            <div className="flex flex-col flex-grow min-w-0 max-w-[140px]">
              <div className="flex items-center gap-2 mb-1">
                {/* Spotify Brand Color Icon */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#1DB954" className="shrink-0">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.021zM19.32 14.1c-.301.42-.84.54-1.261.24-3.24-1.98-8.159-2.58-11.94-1.44-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.9 9.9 15.36 10.56 19.08 12.84c.42.3.54.84.24 1.26zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.781-.18-.6.18-1.2.78-1.38 4.2-1.26 11.28-1.02 15.72 1.62.539.3.719 1.02.419 1.56-.239.54-.959.72-1.379.42z" />
                </svg>
                <span className="text-[10px] font-bold text-[#1DB954] uppercase tracking-widest leading-none shrink-0 border border-transparent">
                  Playing Now
                </span>
                
                {/* Animated Equalizer */}
                <div className="flex gap-[2px] h-2.5 items-end shrink-0">
                  <div className="w-[2px] bg-[#1DB954] animate-[bounce_0.8s_ease-in-out_infinite]" />
                  <div className="w-[2px] bg-[#1DB954] animate-[bounce_1.2s_ease-in-out_infinite]" />
                  <div className="w-[2px] bg-[#1DB954] animate-[bounce_0.6s_ease-in-out_infinite]" />
                </div>
              </div>
              
              <div className="truncate text-sm font-bold text-white hover:underline decoration-white/50 underline-offset-2 w-full pr-1">
                {spotifyData.song}
              </div>
              <div className="text-xs text-white/50 truncate font-sans w-full pr-1">
                {spotifyData.artist}
              </div>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
