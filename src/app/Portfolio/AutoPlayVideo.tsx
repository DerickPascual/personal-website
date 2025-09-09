"use client";

import { useEffect, useRef } from 'react';

interface AutoPlayVideoProps {
  src: string;
  className?: string;
}

export default function AutoPlayVideo({ src, className = "" }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideControlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isUserInteractingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Hide controls after video starts playing (for Safari mobile)
    const handlePlay = () => {
      hideControlsTimeoutRef.current = setTimeout(() => {
        if (video && !isUserInteractingRef.current) {
          video.controls = false;
        }
      }, 1000); // Hide controls after 1 second of playing if user isn't interacting
    };

    // Show controls when user interacts
    const handleMouseEnter = () => {
      isUserInteractingRef.current = true;
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
        hideControlsTimeoutRef.current = null;
      }
      if (video) {
        video.controls = true;
      }
    };

    const handleMouseLeave = () => {
      isUserInteractingRef.current = false;
      // Optionally hide controls again after user stops hovering
      hideControlsTimeoutRef.current = setTimeout(() => {
        if (video && !isUserInteractingRef.current) {
          video.controls = false;
        }
      }, 2000); // Hide after 2 seconds of no interaction
    };

    const handleTouchStart = () => {
      isUserInteractingRef.current = true;
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
        hideControlsTimeoutRef.current = null;
      }
      if (video) {
        video.controls = true;
      }
    };

    const handleTouchEnd = () => {
      isUserInteractingRef.current = false;
      // Hide controls after touch interaction ends
      hideControlsTimeoutRef.current = setTimeout(() => {
        if (video && !isUserInteractingRef.current) {
          video.controls = false;
        }
      }, 3000); // Hide after 3 seconds on mobile
    };

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
          // Video is out of view - pause and clear any pending timeouts
          video.pause();
          video.controls = true; // Show controls when paused
          isUserInteractingRef.current = false;
          if (hideControlsTimeoutRef.current) {
            clearTimeout(hideControlsTimeoutRef.current);
            hideControlsTimeoutRef.current = null;
          }
        }
      },
      {
        threshold: 0.5 // Trigger when 50% of video is visible
      }
    );

    observer.observe(video);
    
    // Add event listeners
    video.addEventListener('play', handlePlay);
    video.addEventListener('mouseenter', handleMouseEnter);
    video.addEventListener('mouseleave', handleMouseLeave);
    video.addEventListener('touchstart', handleTouchStart);
    video.addEventListener('touchend', handleTouchEnd);

    return () => {
      observer.disconnect();
      // Clear any pending timeout
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
      }
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('mouseenter', handleMouseEnter);
      video.removeEventListener('mouseleave', handleMouseLeave);
      video.removeEventListener('touchstart', handleTouchStart);
      video.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      controls // Initial controls visible
      className={`w-full h-full rounded-lg ${className}`}
      muted // Required for auto-play in most browsers
      loop
      playsInline // Better mobile experience
      preload="metadata"
      webkit-playsinline="true" // Extra Safari mobile compatibility
      x-webkit-airplay="allow"
      style={{ 
        WebkitBackfaceVisibility: 'hidden',
        WebkitPerspective: 1000,
        WebkitTransform: 'translate3d(0,0,0)'
      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
