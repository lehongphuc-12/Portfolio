import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6 md:px-12"
      >
        {children}
      </motion.div>
    </section>
  );
};