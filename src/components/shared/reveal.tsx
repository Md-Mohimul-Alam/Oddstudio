'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  y = 20,
  className,
}: RevealProps) {
  return (
    <div className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration, delay, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}
