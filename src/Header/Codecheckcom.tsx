"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  duration?: number;
  delay?: number; // Corrected spelling
  y?: number;
}

export default function CodeCheckComp({
  children,
  delay = 0,
  duration = 0.5,
  y = 90,
}: AnimatedTextProps) {
  const textContainer = {
    hidden: { y: `${y}%` },
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
    <div className="overflow-hidden ">
      <motion.div
        className="h-full"
        initial="hidden"
        animate="visible"
        variants={textContainer}
      >
        {children}
      </motion.div>
    </div>
  );
}
