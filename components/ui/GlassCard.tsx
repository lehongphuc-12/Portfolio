import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.08)' } : {}}
      transition={{ duration: 0.3 }}
      className={`
        relative overflow-hidden
        bg-white/5 
        backdrop-blur-xl 
        border border-white/10 
        rounded-2xl 
        shadow-xl
        ${className}
      `}
    >
      {/* Subtle shine effect/gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};