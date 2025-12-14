'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Animated3DIconProps {
  children: ReactNode;
  className?: string;
}

export default function Animated3DIcon({ children, className }: Animated3DIconProps) {
  return (
    <motion.div
      className={cn(
        'relative w-full h-full flex items-center justify-center rounded-lg bg-card group-hover:bg-primary/10 transition-colors duration-300',
        className
      )}
      style={{
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        scale: 1.05,
        rotateX: 10,
        rotateY: 20,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
    >
      <div
        className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ transform: 'translateZ(-50px)' }}
      ></div>
      <div
        className="relative text-primary group-hover:text-primary-foreground transition-colors duration-300 [&>svg]:w-16 [&>svg]:h-16"
        style={{ transform: 'translateZ(20px)' }}
      >
        {children}
      </div>
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          transform: 'translateZ(-20px) scale(0.9)',
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
      ></div>
    </motion.div>
  );
}
