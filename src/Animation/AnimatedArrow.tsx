"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image"; // Import Next.js Image component

interface HoverEffectProps {
  text: string;
  alt: string;
  width: number;
  height: number;
  arrow: StaticImageData;
}

const HoverEffect: React.FC<HoverEffectProps> = ({
  text,
  alt,
  width,
  height,
  arrow,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-[#5e5eee] text-white lg:p-2 lg:pl-4 lg:pr-2   p-2 xs:flex-col  flex rounded-[30px]  gap-2 items-center"
      onHoverStart={() => setIsHovered(true)} // Start hover state
      onHoverEnd={() => setIsHovered(false)} // End hover state
      animate={{ backgroundColor: isHovered ? "#1A1A73" : "#5e5eee" }}
      transition={{ duration: 0.3 }}
    >
      <p className="xl:text-md text-sm font-bold">{text}</p>
      <motion.div
        className="rounded-full bg-white p-1"
        animate={{ rotate: isHovered ? 45 : 0 }} // Rotate only when parent is hovered
        transition={{ duration: 0.3 }}
      >
        <Image src={arrow} alt={alt} width={width} height={height} />
      </motion.div>
    </motion.div>
  );
};

export default HoverEffect;
