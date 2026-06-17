"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

// Configurable navigation links
const NAV_LINKS = [
  { label: 'Product', href: '/product' },
  { label: 'About', href: '/about' },
  { label: 'Use Cases', href: '/#use-cases' },
  // Future reserved routes (commented out for now):
  // { label: 'Waitlist', href: '/waitlist' },
  // { label: 'Pricing', href: '/pricing' },
];

const NAV_ACTIONS = [
  { label: 'Book a Call', href: '/contact', type: 'primary' },
  // Future actions (commented out for now):
  // { label: 'Login', href: '/login', type: 'secondary' },
];

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.navbar} ${isSolid ? styles.solid : styles.transparent}`}>
      <div className={styles.container}>
        {/* Left: Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoSymbol}>
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 26V8H11.5L16 15L20.5 8H26V26" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="6" cy="8" r="2.5" fill="#3b82f6" />
            </svg>
          </div>
          <span className={styles.logoText}>MaticStudio</span>
        </Link>

        {/* Center: Nav links */}
        <nav className={styles.navLinks}>
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className={styles.actions}>
          {NAV_ACTIONS.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={`${styles.button} ${action.type === 'primary' ? styles.buttonPrimary : styles.buttonSecondary}`}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
