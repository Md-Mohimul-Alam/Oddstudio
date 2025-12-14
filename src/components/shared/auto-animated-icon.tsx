'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AutoAnimatedIconProps {
  children: ReactNode;
  className?: string;
}

export default function AutoAnimatedIcon({ children, className }: AutoAnimatedIconProps) {
  return (
    <motion.div
      className={cn(
        'relative w-full h-full flex items-center justify-center rounded-lg',
        className
      )}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      animate={{
        rotateY: [0, -15, 15, -10, 10, 0],
        rotateX: [0, 10, -10, 8, -8, 0],
        scale: [1, 1.05, 1, 1.05, 1, 1],
      }}
      transition={{
        duration: 12,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      <div
        className="absolute inset-0 bg-primary/10 blur-3xl"
        style={{ transform: 'translateZ(-50px)' }}
      ></div>
      <div
        className="relative text-primary"
        style={{ transform: 'translateZ(40px)' }}
      >
        {children}
      </div>
    </motion.div>
  );
}
