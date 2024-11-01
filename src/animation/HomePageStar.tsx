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
        duration: 2, // Adjusts the speed of the movement
        ease: "linear", // Creates a smooth, continuous motion
        repeat: Infinity, // Loops the animation indefinitely
      }}
      className="absolute   bg-white -bottom-16 sm:bottom-32 left-18 sm:left-4 lg:left-16 w-[280px] md:w-[280px] lg:w-[320px] p-4 lg:p-6 rounded-3xl  text-black "
    >
      <div className="flex justify-start gap-2">
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
      </div>
      <p className="text-md md:text-xl xl:text-2xl pt-2   font-plusJakarta font-bold mt-2">
        Best Services & 5 Star
      </p>
      <p className="text-md md:text-lg lg:text-xl font-plusJakarta mt-2">
        Hospitals are crucial institutions in our society
      </p>
    </motion.div>
  );
}
