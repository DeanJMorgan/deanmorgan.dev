"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface TechnologyCardProps {
  name: string;
  category: string;
  icon: ReactNode;
  delay: number;
}

export function TechnologyCard({
  name,
  category,
  icon,
  delay,
}: TechnologyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: delay }}
      className="group relative flex flex-col items-center justify-center p-6 bg-background hover:bg-muted/5 transition-all aspect-square cursor-default"
    >
      {/* Regular content */}
      <div className="flex flex-col items-center justify-center transition-all duration-300">
        <div className="h-8 w-8 mb-3 opacity-90 transition-all flex items-center justify-center relative text-primary">
          {icon}
        </div>
        <span className="text-[10px] uppercase font-bold tracking-tighter text-center leading-tight">
          {name}
        </span>
      </div>

      {/* Hover category overlay - slides down from top */}
      <div className="absolute top-2 inset-x-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none transform -translate-y-2">
        <span className="text-[8px] font-mono leading-tight uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold bg-background/80 px-2 py-0.5 backdrop-blur-sm">
          {category}
        </span>
      </div>
    </motion.div>
  );
}
