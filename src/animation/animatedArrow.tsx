// components/HoverEffect.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const HoverEffect: React.FC<{
  text: string;
  arrowSrc: string;
  alt: string;
}> = ({ text, arrowSrc, alt }) => {
  return (
    <motion.div
      className="bg-[#5e5eee] text-white p-3 pl-6 flex rounded-[30px] justify-evenly gap-4 items-center hover:bg-[#6210CE] transition-all duration-300"
      whileHover={{ scale: 1.05 }} // Slight scaling effect on hover
    >
      <p className="text-xl font-bold">{text}</p>
      <motion.div
        className="rounded-full bg-white p-1"
        whileHover={{ rotate: 45 }} // Rotate inner div when hovering
        transition={{ duration: 0.3 }} // Transition duration for rotation
      >
        <Image src={arrowSrc} alt={alt} width={24} height={24} />
      </motion.div>
    </motion.div>
  );
};

export default HoverEffect;
