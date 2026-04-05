import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    date: "May 2025",
    dateTo: "Aug 2025",
    description: "Architected high-throughput data pipelines using AWS Lambda and DynamoDB. Processed asynchronous updates for 10,000+ regulations, ensuring strict consistency for systems supporting $400B in annual transactions.",
    dotColor: "#F90"
  },
  {
    company: "Signify Health (acq. by CVS Health)",
    role: "Data Analytics Intern",
    date: "Jul 2024",
    dateTo: "Aug 2024",
    description: "Engineered complex Snowflake SQL queries to build automated data pipelines. Replaced manual reporting for 100+ stakeholders, improving data-driven decision speed by 15%.",
    dotColor: "#44bb66"
  },
  {
    company: "University of North Texas",
    role: "Undergraduate Research Fellow",
    date: "Sep 2021",
    dateTo: "Jun 2023",
    description: "Optimized CNN architectures for resource-constrained IoT devices, achieving a 28% reduction in computational energy usage while maintaining a 77% model accuracy threshold.",
    dotColor: "#4499ff"
  }
];

export default function ExperienceTimeline() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{
            display: 'grid',
            gridTemplateColumns: '140px 1fr',
            gap: '40px',
            padding: '36px 0',
            borderBottom: '1px solid rgba(200,195,185,0.1)',
            cursor: 'default'
          }}
          whileHover={{ x: 4 }}
        >
          {/* Date column */}
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.06em',
            color: '#b8b4aa',
            paddingTop: '4px',
            lineHeight: '1.7',
            fontWeight: 300
          }}>
            {exp.date}<br />{exp.dateTo}
          </div>

          {/* Content column */}
          <div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#c8872a',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: exp.dotColor,
                flexShrink: 0
              }} />
              {exp.company}
            </div>

            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '20px',
              fontWeight: 700,
              color: '#f5f2eb',
              marginBottom: '12px',
              lineHeight: '1.25'
            }}>
              {exp.role}
            </h3>

            <p style={{
              fontSize: '13px',
              color: '#b8b4aa',
              lineHeight: '1.85',
              fontWeight: 300,
              maxWidth: '600px'
            }}>
              {exp.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}