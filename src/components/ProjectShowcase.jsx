import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Smartphone, Activity } from 'lucide-react';

const projects = [
  {
    id: 'finflow',
    num: '01',
    title: 'FinFlow',
    tech: 'React · Flask · OpenAI API · Scikit-learn',
    description:
      'ML platform automating bank statement analysis. Hybrid pipeline combining Random Forest and GPT-4o to parse and classify transactions into 12 financial categories with 94% accuracy.',
    icon: Cpu,
    link: 'https://github.com/argadde/finflow-ml-powered-financial-insights'
  },
  {
    id: 'aligo',
    num: '02',
    title: 'Aligo',
    tech: 'Swift · SwiftUI · iOS',
    description:
      'Native iOS application managing multiple credit cards. Displays detailed transaction histories and benefits for 100+ different cards to help users optimize spending patterns and rewards.',
    icon: Smartphone,
    link: 'https://github.com/argadde/Aligo'
  },
  {
    id: 'sleephelper',
    num: '03',
    title: 'The Sleep Helper',
    tech: 'ESP32 · AWS IoT · MQTT · XGBoost',
    description:
      'Full-stack IoT system synchronizing wearable data with environmental sensors. XGBoost ML pipeline on AWS Lambda for sleep-stage classification and closed-loop control of smart actuators.',
    icon: Activity,
    link: 'https://github.com/argadde/the-sleep-helper'
  }
];

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1px',
    background: 'rgba(200,195,185,0.1)',
    border: '1px solid rgba(200,195,185,0.1)',
    marginTop: '52px'
  },
  card: {
    background: '#0e0e0c',
    padding: '40px 32px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background 0.25s',
    display: 'flex',
    flexDirection: 'column'
  },
  cardHover: {
    background: '#1e1d18'
  },
  num: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    letterSpacing: '0.15em',
    color: 'rgba(184,180,170,0.4)',
    marginBottom: '32px'
  },
  iconWrap: {
    width: '36px',
    height: '36px',
    color: '#c8872a',
    marginBottom: '20px',
    opacity: 0.9
  },
  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '22px',
    fontWeight: 700,
    color: '#f5f2eb',
    marginBottom: '8px',
    lineHeight: '1.2'
  },
  tech: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '10px',
    letterSpacing: '0.08em',
    color: '#c8872a',
    marginBottom: '16px',
    lineHeight: '1.7',
    opacity: 0.8
  },
  desc: {
    fontSize: '12px',
    color: '#b8b4aa',
    lineHeight: '1.85',
    fontWeight: 300,
    flexGrow: 1
  },
  arrow: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '16px',
    color: '#c8872a',
    marginTop: '24px',
    alignSelf: 'flex-end',
    transition: 'transform 0.2s, opacity 0.2s'
  }
};

export default function ProjectShowcase() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ ...styles.grid }}>
      {projects.map((p) => {
        const Icon = p.icon;
        const isHovered = hovered === p.id;

        return (
          <motion.a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.card,
              ...(isHovered ? styles.cardHover : {}),
              textDecoration: 'none'
            }}
            onHoverStart={() => setHovered(p.id)}
            onHoverEnd={() => setHovered(null)}
            initial={false}
          >
            {/* Amber top-border animation */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: '#c8872a',
                transformOrigin: 'left'
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            <div style={styles.num}>{p.num}</div>
            <Icon style={styles.iconWrap} strokeWidth={1.5} />
            <div style={styles.title}>{p.title}</div>
            <div style={styles.tech}>{p.tech}</div>
            <p style={styles.desc}>{p.description}</p>

            <motion.div
              style={styles.arrow}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -4,
                y: isHovered ? 0 : 4
              }}
              transition={{ duration: 0.2 }}
            >
              ↗
            </motion.div>
          </motion.a>
        );
      })}
    </div>
  );
}