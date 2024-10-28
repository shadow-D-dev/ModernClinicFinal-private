"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
interface DirectArrowProp {
  text: string;
  alt: string;
  arrow: StaticImageData | string;
  height: number;
  width: number;
}
export default function DirectArrow({
  text,
  alt,
  arrow,
  height,
  width,
}: DirectArrowProp) {
  return (
    <motion.div
      className="bg-[#5e5eee] text-white p-3 pl-6 flex  rounded-[30px] justify-evenly gap-4
      items-center"
      whileHover={{
        backgroundColor: "#1A1A73",
        scale: 1.05,
      }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-xl font-bold">{text}</p>
      <motion.div
        className="rounded-full bg-white p-1 "
        whileHover={{ rotate: 45 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={arrow} alt={alt} width={width} height={height} />
      </motion.div>
    </motion.div>
  );
}
