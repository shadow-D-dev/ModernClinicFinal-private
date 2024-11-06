"use client";
import Image from "next/image";
import whatsapp from "@/../public/WhatsApp.svg";
import CallButtonComp from "@/Components/CallButtonComp";
import { motion } from "framer-motion";

export default function AnimatedButtons() {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }} // Start position and opacity
      animate={{ y: 0, opacity: 1 }} // End position and opacity
      transition={{ duration: 0.5 }} // Animation properties
      className="flex-wrap flex gap-4 md:gap-10  text-md md:text-xl mt-6 md:mt-10 "
    >
      <CallButtonComp />
      <button className=" flex gap-4  rounded-[100px] p-3 px-6 justify-center items-center border border-green-600 text-center text-green-600">
        <Image src={whatsapp} alt="plusicon" className="h-6 w-6" />
        Enquries
      </button>
    </motion.div>
  );
}
