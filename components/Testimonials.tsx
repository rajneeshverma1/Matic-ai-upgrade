"use client";

import { useState } from 'react';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    id: 1,
    name: "David Manka, PhD",
    role: "COO, PS Fertility",
    text: "We worked with Matic AI to convert our written, complicated patient instructions into a short video. We've been very pleased with the results, Matic AI helped us address an important pain-point with customers who had trouble following instructions.",
    logoColor: "#f97316",
    logoText: "↗",
    topLabel: "David Manka, PhD"
  },
  {
    id: 2,
    name: "Anton Voroniuk",
    role: "1M+ Udemy Learners",
    text: "I'm very impressed with the quality of the platform.",
    logoColor: "#a855f7",
    logoText: "U",
    topLabel: "Anton Voroniuk"
  },
  {
    id: 3,
    name: "Fanni Dalnoki",
    role: "Content Coordinator, BPiON",
    text: "I love it. That [Matic AI] is amazing. I absolutely love it.",
    logoColor: "#ef4444",
    logoText: "P",
    topLabel: "Fanni Dalnoki"
  },
  {
    id: 4,
    name: "Matthew Thompson",
    role: "Associate Professor, UW",
    text: "I'm really impressed with how easy it is to use the platform. We created a high-quality video in minutes that simplified complex medical procedures, making it easy to understand.",
    logoColor: "#3b82f6",
    logoText: "W",
    topLabel: "Matthew Thompson"
  },
  {
    id: 5,
    name: "Sarah Jenkins",
    role: "VP of Marketing, MedTech Solutions",
    text: "The animation tools are a game-changer. We went from spending hours explaining our product features to a simple 60-second video that converts leads in minutes.",
    logoColor: "#06b6d4",
    logoText: "S",
    topLabel: "Sarah Jenkins"
  },
  {
    id: 6,
    name: "Li Wei",
    role: "Co-Founder, EduTech Group",
    text: "Translating course materials into engaging narrations with animated visuals used to take weeks. Now we do it instantly by chatting.",
    logoColor: "#10b981",
    logoText: "L",
    topLabel: "Li Wei"
  },
  {
    id: 7,
    name: "Elena Rostova",
    role: "Creative Director, Vibe Studio",
    text: "Our clients love the quick turnaround. Being able to edit videos just by typing a prompt is exactly what the modern content workflow needed.",
    logoColor: "#e11d48",
    logoText: "V",
    topLabel: "Elena Rostova"
  },
  {
    id: 8,
    name: "Marcus Brody",
    role: "Learning & Development, Apex Corp",
    text: "Internal training has never been this engaging. Uploading our existing docs and turning them into animated videos has boosted completion rates by 40%.",
    logoColor: "#eab308",
    logoText: "A",
    topLabel: "Marcus Brody"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    // Show max 3 cards on screen, so if length is 4, max index is 1
    setCurrentIndex((prev) => Math.min(TESTIMONIALS.length - 3, prev + 1));
  };

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>Loved by teams who make video at scale</h2>
      <p className={styles.subtitle}>
        Real teams use the Matic AI platform to turn docs into narrated, animated video, at their own pace.
      </p>

      <div className={styles.carouselContainer}>
        {/* Left Arrow */}
        <button 
          className={`${styles.arrow} ${styles.arrowLeft}`} 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous testimonials"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Right Arrow */}
        <button 
          className={`${styles.arrow} ${styles.arrowRight}`} 
          onClick={handleNext}
          disabled={currentIndex >= TESTIMONIALS.length - 3}
          aria-label="Next testimonials"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className={styles.trackWrapper}>
          <div 
            className={styles.track}
            style={{ transform: `translateX(-${currentIndex * 340}px)` }}
          >
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardTopLabel}>{item.topLabel}</div>
                
                <div className={styles.cardContent}>
                  {/* Badge Logo Icon on Top Right */}
                  <div className={styles.badge} style={{ backgroundColor: `${item.logoColor}15`, color: item.logoColor, borderColor: `${item.logoColor}30` }}>
                    <span className={styles.badgeText}>{item.logoText}</span>
                  </div>

                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardName}>{item.name}</h3>
                    <p className={styles.cardRole}>{item.role}</p>
                  </div>

                  <p className={styles.cardText}>"{item.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
