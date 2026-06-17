"use client";

import { useState, useRef } from 'react';
import styles from './Carousel.module.css';

const CAROUSEL_ITEMS = [
  {
    id: 1,
    title: 'AI Diagnostic Model',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    gradient: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)'
  },
  {
    id: 2,
    title: 'Spatial Neural Net',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    id: 3,
    title: 'Automated Robotics',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    gradient: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)'
  }
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  const getCardClass = (index: number) => {
    if (index === activeIndex) return styles.centerCard;
    if (index === (activeIndex - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length) return styles.leftCard;
    if (index === (activeIndex + 1) % CAROUSEL_ITEMS.length) return styles.rightCard;
    return styles.hiddenCard;
  };

  const handleMouseEnter = (index: number) => {
    // Play video for ANY card hovered
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play().catch(() => {
        // Silently handle any browser auto-play restrictions
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause();
    }
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Edge Masking overlays */}
      <div className={styles.edgeMaskLeft}></div>
      <div className={styles.edgeMaskRight}></div>

      {/* Navigation Arrows */}
      <button className={styles.arrowLeft} onClick={handlePrev} aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button className={styles.arrowRight} onClick={handleNext} aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Render Cards dynamically to support animation via class changes */}
      {CAROUSEL_ITEMS.map((item, index) => {
        const isCenter = index === activeIndex;
        const isRight = index === (activeIndex + 1) % CAROUSEL_ITEMS.length;

        return (
          <div 
            key={item.id} 
            className={`${styles.card} ${getCardClass(index)}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Background Gradient Fallback */}
            <div className={styles.cardBackground} style={{ background: item.gradient }}></div>
            
            {/* Interactive Video Element */}
            <video 
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={item.videoUrl} 
              className={styles.videoElement}
              muted 
              loop 
              playsInline 
              preload="metadata"
            />
            
            {/* Media Controller HUD (Only clearly visible on center card) */}
            <div className={styles.mediaHud} style={{ opacity: isCenter ? 1 : 0, transition: 'opacity 0.3s ease' }}>
              <div className={styles.hudIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <div className={styles.hudText}>{item.title}</div>
              <div className={styles.hudIcon} style={{ marginLeft: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>
              </div>
            </div>

            {/* Right Card Overlay for Edge Illusion (only applied when card is actually on the right) */}
            {isRight && <div className={styles.rightCardOverlay}></div>}
          </div>
        );
      })}
    </div>
  );
}
