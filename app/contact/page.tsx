"use client";

import { useState } from 'react';
import styles from './contact.module.css';

// Predefined available days (excluding weekends for realism)
const AVAILABLE_DAYS = [18, 19, 22, 23, 24, 25, 26, 29, 30];

// Timeslots config
const TIMESLOTS = [
  '09:00 AM',
  '10:30 AM',
  '11:00 AM',
  '01:30 PM',
  '03:00 PM',
  '04:30 PM'
];

export default function Contact() {
  const [step, setStep] = useState(1); // 1: Date, 2: Time, 3: Form, 4: Success
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [desc, setDesc] = useState('');

  // Calendar setup for June 2026
  // June 1, 2026 is a Monday. 30 days total.
  const daysInMonth = 30;
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleDaySelect = (day: number) => {
    if (AVAILABLE_DAYS.includes(day)) {
      setSelectedDay(day);
      setStep(2);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setStep(4);
    }
  };

  const resetAll = () => {
    setStep(1);
    setSelectedDay(null);
    setSelectedTime(null);
    setName('');
    setEmail('');
    setDesc('');
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Book a Call</span>
          <h1 className={styles.title}>Schedule a Demo</h1>
          <p className={styles.subtitle}>
            Book a 15-minute consultation with Rajneesh and the MaticStudio co-founding team. Learn how we can optimize your creative pipelines.
          </p>
        </header>

        {/* Cal.com Interactive Card */}
        <div className={styles.schedulerCard}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.companyName}>MaticStudio</div>
            <h2 className={styles.meetingTitle}>Introductory Demo & Discovery</h2>
            <div className={styles.meetingDuration}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>15 Min Call</span>
            </div>
            <p className={styles.meetingDesc}>
              A quick review of your video requirements, custom branding guidelines, and how we automate creative asset workflows.
            </p>
            {selectedDay && (
              <div className={styles.meetingDetailsSummary} style={{ marginTop: '20px', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '16px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase' }}>Selected Date</div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, marginTop: '4px' }}>
                  June {selectedDay}, 2026 {selectedTime && `@ ${selectedTime}`}
                </div>
              </div>
            )}
          </div>

          {/* Dynamic Steps Booking Area */}
          <div className={styles.bookingArea}>
            {/* Step 1: Calendar Day Pick */}
            {step === 1 && (
              <div className={styles.calendarWrapper}>
                <div className={styles.calendarHeader}>
                  <span>Select Date (June 2026)</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className={styles.calendarNav} disabled aria-label="Previous month">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    <button className={styles.calendarNav} disabled aria-label="Next month">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Weekdays */}
                <div className={styles.weekdaysGrid}>
                  <span>MON</span>
                  <span>TUE</span>
                  <span>WED</span>
                  <span>THU</span>
                  <span>FRI</span>
                  <span>SAT</span>
                  <span>SUN</span>
                </div>

                {/* Days Grid */}
                <div className={styles.daysGrid}>
                  {daysArray.map((day) => {
                    const isAvailable = AVAILABLE_DAYS.includes(day);
                    return (
                      <button
                        key={day}
                        onClick={() => handleDaySelect(day)}
                        disabled={!isAvailable}
                        className={`${styles.dayBtn} ${!isAvailable ? styles.dayDisabled : ''}`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Time Slots */}
            {step === 2 && (
              <div className={styles.timeslotWrapper}>
                <button className={styles.backBtn} onClick={() => setStep(1)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                  <span>Back to Calendar</span>
                </button>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '8px' }}>
                  Available times for June {selectedDay}
                </div>
                <div className={styles.slotList}>
                  {TIMESLOTS.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={styles.slotBtn}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Registration Form */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className={styles.formWrapper}>
                <button type="button" className={styles.backBtn} onClick={() => setStep(2)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                  <span>Back to Timeslots</span>
                </button>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>What are you trying to build?</label>
                  <textarea
                    rows={3}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Brief details about your marketing or training creative goals"
                    className={styles.input}
                    style={{ resize: 'none' }}
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Confirm Booking details
                </button>
              </form>
            )}

            {/* Step 4: Success View */}
            {step === 4 && (
              <div className={styles.successWrapper}>
                <div className={styles.successCircle}>✓</div>
                <h3 className={styles.successTitle}>Booking Confirmed!</h3>
                <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.9rem' }}>
                  A Google Meet invitation has been dispatched to your inbox.
                </p>
                <div className={styles.successDetails}>
                  <strong>Meeting Title:</strong> MaticStudio Intro & Discovery Call <br />
                  <strong>Scheduled Date:</strong> June {selectedDay}, 2026 <br />
                  <strong>Scheduled Time:</strong> {selectedTime} (EST) <br />
                  <strong>Attendee:</strong> {name} ({email})
                </div>
                <button className={styles.resetBtn} onClick={resetAll}>
                  Book another call
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
