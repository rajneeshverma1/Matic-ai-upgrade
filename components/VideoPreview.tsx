"use client";

import { useEffect, useRef } from 'react';
import styles from './VideoPreview.module.css';

export default function VideoPreview() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay policy
      });
    }
  }, []);

  return (
    <div className={styles.videoWrapper}>
      {/* Background Gradient Glow */}
      <div className={styles.ambientGlow}></div>

      {/* Main Video Frame */}
      <div className={styles.videoFrame}>
        <video
          ref={videoRef}
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
          className={styles.videoPlayer}
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* Floating Top Banner matching mockup */}
        <div className={styles.overlayBanner}>
          create.matic-ai.com – To exit full screen, press <span className={styles.escKey}>esc</span>
        </div>
      </div>
    </div>
  );
}
