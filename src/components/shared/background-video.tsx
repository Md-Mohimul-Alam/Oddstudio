'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      console.log('Video can play');
      video.play().then(() => {
        console.log('Video playing');
        setIsPlaying(true);
      }).catch(error => {
        console.log('Autoplay failed:', error);
        setShowFallback(true);
      });
    };

    const handleError = () => {
      console.log('Video loading error');
      setShowFallback(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Try to play immediately if already loaded
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        setIsPlaying(true);
        setShowFallback(false);
      });
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="w-full h-full object-cover"
        preload="auto"
        poster="/videos/poster.jpg"
        style={{ display: showFallback ? 'none' : 'block' }}
      >
        <source src="/videos/Showreel.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback image */}
      {showFallback && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        />
      )}

      {/* Play button overlay for fallback */}
      {showFallback && !isPlaying && (
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center bg-black/20 z-30 cursor-pointer hover:bg-black/30 transition-colors"
        >
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-white/70 flex items-center justify-center hover:border-white hover:scale-110 transition-all">
              <svg className="w-10 h-10 ml-2" fill="white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p className="text-white/80 text-sm font-medium">Click to play background video</p>
          </div>
        </button>
      )}

      {/* Loading indicator */}
      {!showFallback && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-20">
          <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}