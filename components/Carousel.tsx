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
  },
  {
    id: 4,
    title: 'Quantum Computing',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
  },
  {
    id: 5,
    title: 'Autonomous Transit',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    gradient: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)'
  },
  {
    id: 6,
    title: 'Cybernetic Prototyping',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    gradient: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)'
  },
  {
    id: 7,
    title: 'Generative Synthesis',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  },
  {
    id: 8,
    title: 'Virtual Environment',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    gradient: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
  }
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Dragging states
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  // Touch states
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Wheel state (throttle)
  const lastScrollTime = useRef(0);

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

  // Mouse drag handlers for desktop scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const diff = dragStartX.current - e.clientX;
    // Require 80px drag to slide the carousel
    if (Math.abs(diff) > 80) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      isDragging.current = false; // Trigger once per drag gesture
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Touch swipe handlers for mobile scroll
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    // Require 50px swipe to slide
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Wheel handler for horizontal scrolling (trackpad swipe)
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 10) {
      const now = Date.now();
      if (now - lastScrollTime.current > 600) {
        if (e.deltaX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        lastScrollTime.current = now;
      }
    }
  };

  return (
    <div 
      className={styles.carouselContainer}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
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

