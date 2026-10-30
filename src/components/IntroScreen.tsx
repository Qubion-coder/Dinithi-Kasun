import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface IntroScreenProps {
  onComplete: () => void;
  onMusicStart?: () => void;
}

const INTRO_VIDEOS = [
  { src: '/opt/intro-3ead0ccb.mp4', poster: '/opt/intro-3ead0ccb-poster.jpg' },
  { src: '/opt/intro-e5f347ec.mp4', poster: '/opt/intro-e5f347ec-poster.jpg' },
  { src: '/opt/intro-d660d227.mp4', poster: '/opt/intro-d660d227-poster.jpg' },
];

export function IntroScreen({ onComplete, onMusicStart }: IntroScreenProps) {
  const [opening, setOpening] = useState(false);
  const [stage, setStage] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const done = stage >= INTRO_VIDEOS.length;

  const playStage = (index: number) => {
    setStage(index);
    const video = videoRefs.current[index];
    if (!video) {
      setStage(INTRO_VIDEOS.length);
      return;
    }

    video.currentTime = 0;
    video.play().catch((error) => {
      console.error(`Could not play intro video ${index + 1}:`, error);
      if (index === 0) setOpening(false);
      else setStage(INTRO_VIDEOS.length);
    });
  };

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    onMusicStart?.();
    playStage(0);
  };

  return (
    <motion.main
      className="fixed inset-0 z-[100] overflow-hidden bg-[#0A184A] text-white"
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        if (done) onComplete();
      }}
    >
      {INTRO_VIDEOS.map((video, index) => (
        <motion.video
          key={video.src}
          ref={(el) => {
            videoRefs.current[index] = el;
          }}
          className="absolute inset-0 h-full w-full object-cover"
          src={video.src}
          poster={video.poster}
          muted
          playsInline
          preload="auto"
          initial={false}
          animate={{ opacity: stage === index ? 0.75 : 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          onEnded={() => playStage(index + 1)}
          aria-label={index === 0 ? 'Romantic wedding introduction' : undefined}
          aria-hidden={index === 0 ? undefined : true}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/65" />

      <motion.div
        animate={{ opacity: opening ? 0 : 1 }}
        transition={{ duration: 0.25 }}
        className="relative z-30 flex min-h-full -translate-y-16 flex-col items-center justify-center px-6 text-center sm:translate-y-0"
        aria-hidden={opening}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-10 rounded-full border border-white/40 bg-black/20 px-6 py-2 backdrop-blur-md"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-white/90">
            An invitation to celebrate love
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <p className="mb-2 font-serif text-sm italic text-white/85 sm:text-base">Together with their families</p>
          <h1 className="font-names text-4xl leading-none text-white drop-shadow-lg sm:text-6xl">
            Dinithi <span className="mx-1 text-3xl text-white/90 sm:text-5xl">&amp;</span> Kasun
          </h1>
          <p className="mt-4 font-serif text-sm tracking-[0.15em] text-white/90 sm:text-base">05 DECEMBER 2026</p>
        </motion.div>

        <motion.button
          type="button"
          onClick={handleOpen}
          disabled={opening}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 inline-flex items-center gap-3 rounded-full border border-[#f6dfb0]/70 bg-black/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-[#f6dfb0] shadow-2xl backdrop-blur-md transition hover:scale-105 hover:bg-black/45 disabled:cursor-wait"
        >
          <Heart className="h-4 w-4 fill-current" />
          View Invitation
        </motion.button>
      </motion.div>


    </motion.main>
  );
}
