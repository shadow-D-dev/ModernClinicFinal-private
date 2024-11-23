"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number; // Corrected spelling
}

export default function CodeCheckComp({ children, delay }: AnimatedTextProps) {
  const textContainer = {
    hidden: { y: "70%" },
    visible: {
      y: "-10%",
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay, // Delay is used here
      },
    },
  };

  return (
    <div className="overflow-hidden h-[3rem]">
      <motion.div initial="hidden" animate="visible" variants={textContainer}>
        {children}
      </motion.div>
    </div>
  );
}
