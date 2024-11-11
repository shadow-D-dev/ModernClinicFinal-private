"use client";
import Image from "next/image";
import whatsapp from "@/../public/WhatsApp.svg";
import CallButtonComp from "@/Components/CallButtonComp";
import { motion } from "framer-motion";

export default function AnimatedButtons() {
  const openWhatsApp = () => {
    window.open("https://wa.me/8356858428?text=Hello%20there!", "_blank");
  };
  return (
    <motion.div
      className="flex-wrap flex gap-4 md:gap-10  text-md md:text-xl mt-6 md:mt-10 "
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CallButtonComp />
      <button
        className=" flex gap-4  rounded-[100px] p-3 px-6 justify-center items-center border border-green-600 text-center text-green-600"
        onClick={openWhatsApp}
        aria-label="Contact via WhatsApp"
      >
        <Image src={whatsapp} alt="plusicon" className="h-6 w-6" />
        Enquries
      </button>
    </motion.div>
  );
}
