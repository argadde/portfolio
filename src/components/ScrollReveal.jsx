import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal — wraps any content in a fade-up-on-scroll animation.
 *
 * Props:
 *   children  – content to reveal
 *   delay     – seconds to wait before animating (default 0)
 *   y         – pixels to travel upward (default 24)
 *   duration  – animation duration in seconds (default 0.7)
 */
export default function ScrollReveal({ children, delay = 0, y = 24, duration = 0.7 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]  // premium "soft land" easing
      }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}