"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  duration?: number;
  delay?: number; // Corrected spelling
}

export default function CodeCheckComp({
  children,
  delay = 0,
  duration = 0.5,
}: AnimatedTextProps) {
  const textContainer = {
    hidden: { y: "70%" },
    visible: {
      y: "-10%",
      transition: {
        duration,
        ease: "easeOut",
        delay, // Delay is used here
      },
    },
  };

  return (
    <div className="overflow-hidden h-[3rem]">
      <motion.p initial="hidden" animate="visible" variants={textContainer}>
        {children}
      </motion.p>
    </div>
  );
}
