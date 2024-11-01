"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface CounterProps {
  target: number;
  duration?: number; // Optional prop to set the duration of the animation
  suffix: string;
}

const AnimatedCount: React.FC<CounterProps> = ({
  target,
  duration = 2,
  suffix,
}) => {
  const count = useMotionValue(0); // Initialize the count value at 0
  const roundedCount = useTransform(count, (latest) => Math.round(latest)); // Round the count value

  useEffect(() => {
    console.log("found ya");
    // Animate from 0 to the target number over the specified duration
    const controls = animate(count, target, { duration });
    return controls.stop; // Clean up the animation on component unmount
  }, [count, target, duration]);

  return (
    <motion.div className="flex">
      <motion.span>{roundedCount}</motion.span>
      {suffix ? <div className="">{suffix}</div> : <div></div>}
    </motion.div>
  );
};

export default AnimatedCount;
