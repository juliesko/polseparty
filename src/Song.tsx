import React, { useEffect, useRef, useState } from 'react';

const src = `${process.env.PUBLIC_URL}/burners.mp3`
const startTime = 62.10;

const Song = () => {
  const ref = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = ref.current;
    if (audio && !muted) {
      audio.currentTime = startTime;
      audio.play();
    }
  }, []);
  return (
    <>
      <button 
        className="pauseknapp"
        title={muted ? 'Play' : 'Pause'}
        onClick={() => {
          setMuted((wasMuted) => {
            const audio = ref.current;
            if (audio && audio.paused) {
              audio.currentTime = startTime;
              audio.play();
            }
            return !wasMuted;
          });
        }}
      >
        {muted && <div>🔇</div>}
        {!muted && <div>🔊</div>}
      </button>
      {<audio muted={muted} ref={ref} src={src} />}
    </>
  );
};

export default Song;
