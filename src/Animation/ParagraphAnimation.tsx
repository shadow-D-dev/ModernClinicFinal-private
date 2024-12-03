"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type AnimatedTextProps = {
  children: React.ReactNode;
  delay?: number;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, delay }) => {
  const text = children.toString();
  const splittedText = text.split("");
  const pullupVariant = {
    initial: { y: 10, x: 40, opacity: 0, filter: "blur(5px)" },
    animate: (i: number) => ({
      y: 0,
      x: [40, 0, 0],
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: delay + i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-wrap">
      {splittedText.map((current, i) => (
        <motion.span
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className=""
        >
          {current === " " ? <span>&nbsp;</span> : current}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
