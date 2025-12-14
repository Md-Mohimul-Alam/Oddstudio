'use client';

import { useEffect, useRef } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force video to play
    const playVideo = () => {
      video.play().catch(error => {
        console.log('Video autoplay failed:', error);
        // Try again with a promise
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(e => {
            console.log('Second attempt failed:', e);
            // Show play button if still failing
            showPlayButton();
          });
        }
      });
    };

    const showPlayButton = () => {
      const playButton = document.createElement('button');
      playButton.className = 'absolute bottom-4 right-4 z-30 bg-black/70 text-white px-4 py-2 rounded-full text-sm hover:bg-black';
      playButton.textContent = '▶ Play Background Video';
      playButton.onclick = () => {
        video.play();
        playButton.remove();
      };
      document.querySelector('section')?.appendChild(playButton);
    };

    // When video can play, try to play it
    video.addEventListener('canplay', playVideo);

    // Also try immediately if already loaded
    if (video.readyState >= 3) {
      playVideo();
    }

    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  return (
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
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    >
      <source src="/videos/Showreel.mp4" type="video/mp4" />
      <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}