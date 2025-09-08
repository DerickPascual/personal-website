"use client";

import { useEffect, useRef } from 'react';

interface AutoPlayVideoProps {
  src: string;
  className?: string;
}

export default function AutoPlayVideo({ src, className = "" }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting) {
          // Video is in view - auto play
          video.play().catch((error) => {
            console.log('Auto-play prevented by browser:', error);
          });
        } else {
          // Video is out of view - pause
          video.pause();
        }
      },
      {
        threshold: 0.5 // Trigger when 50% of video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      controls // Regular video controls visible
      className={`w-full h-full rounded-lg ${className}`}
      muted // Required for auto-play in most browsers
      loop
      playsInline // Better mobile experience
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
