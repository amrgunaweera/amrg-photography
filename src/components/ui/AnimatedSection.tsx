import React from 'react';
import { motion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'scale-up';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  className = '',
  animation = 'slide-up',
  ...props
}) => {
  const animations = {
    'fade-in': {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
    },
    'slide-up': {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
    },
    'scale-up': {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
    }
  };

  const selectedAnimation = animations[animation];

  return (
    <motion.section
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.whileInView}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};
