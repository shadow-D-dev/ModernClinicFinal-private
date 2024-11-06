"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import star from "@/../public/Star.svg";
export default function HomePageStar() {
  return (
    <motion.div
      animate={{
        x: ["0%", "10%", "0"], // Moves from left to right
      }}
      transition={{
        duration: 2,
        ease: "linear", // Creates a smooth, continuous motion
        repeat: Infinity, // Loops the animation indefinitely
      }}
      className=" relative bg-white bottom-12  left-12 md:bottom-80  md:-left-0 w-64  lg:w-72  p-4 lg:p-6 rounded-3xl  text-black font-plusJakarta xs:hidden flex flex-col gap-2"
    >
      <div className="flex justify-start gap-2">
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
      </div>
      <p className="text-md md:text-lg font-bold">Best Services & 5 Star</p>
      <p className="text-md md:text-md   ">
        Hospitals are crucial institutions in our society
      </p>
    </motion.div>
  );
}
