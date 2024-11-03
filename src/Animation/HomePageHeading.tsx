"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import smile from "@/../public/InParaSmile.jpg";
import care from "@/../public/InParaCare.jpg";
export default function HomePageHeading() {
  return (
    <motion.div className="text-4xl sm:text-5xl lg:text-6xl">
      <p className="flex flex-wrap items-center gap-2 lg:gap-4">
        <span>Your</span>
        <span>smile</span>
        <Image
          src={smile}
          alt="Image depicting a smile"
          className="rounded-full mt-1 md:mt-3 h-8 w-20 md:h-12 md:w-32"
        />
        <span>matters</span>

        <span className="flex-shrink-0">expert</span>
        <span className="flex-shrink-0">dental</span>
        <Image
          src={care}
          alt="Image related to dental care"
          className="rounded-full mt-1 md:mt-3 h-8 w-20 md:h-12 md:w-32"
        />
        <span className="flex-shrink-0">care</span>

        <span>a bright</span>
        <span> tomorrow</span>
      </p>

      <motion.p
        initial={{ y: 30, opacity: 0 }} // Start position and opacity
        animate={{ y: 0, opacity: 1 }} // End position and opacity
        transition={{ duration: 0.5 }} // Animation properties
        className="text-xl mt-6 md:mt-10 font-thin md:font-bold "
      >
        Experience top-quality dental care focused on your smile&apos;s health
        and beauty. Trust us to create a brighter, healthier tomorrow
      </motion.p>
    </motion.div>
  );
}
