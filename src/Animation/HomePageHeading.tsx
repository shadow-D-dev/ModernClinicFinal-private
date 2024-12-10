"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import smile from "@/../public/InParaSmile.jpg";
import care from "@/../public/InParaCare.jpg";
import SlideUpAnimation from "./SlideUpAnimation";
import AnimatedText from "./ParagraphAnimation";
export default function HomePageHeading() {
  return (
    <motion.div className="text-4xl sm:text-5xl lg:text-[56px] font-plusJakarta">
      <div className="flex flex-wrap items-center gap-2 lg:gap-2 font-extrabold">
        <SlideUpAnimation>Your</SlideUpAnimation>
        <SlideUpAnimation>smile</SlideUpAnimation>
        <SlideUpAnimation y={100} delay={0.3}>
          <Image
            src={smile}
            alt="Image depicting a smile"
            className="rounded-full mt-1 md:mt-3 h-8 w-20 md:h-12 md:w-32"
          />
        </SlideUpAnimation>
        <SlideUpAnimation>matters</SlideUpAnimation>

        <SlideUpAnimation>expert</SlideUpAnimation>
        <SlideUpAnimation>dental</SlideUpAnimation>
        <SlideUpAnimation y={100} delay={0.35}>
          <Image
            src={care}
            alt="Image related to dental care"
            className="rounded-full mt-1 md:mt-3 h-8 w-20 md:h-12 md:w-32"
          />
        </SlideUpAnimation>
        <SlideUpAnimation>care</SlideUpAnimation>

        <SlideUpAnimation>a bright</SlideUpAnimation>
        <SlideUpAnimation> tomorrow</SlideUpAnimation>
      </div>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-lg xl:text-xl mt-6 md:mt-10 font-thin md:font-bold"
      >
        Experience top-quality dental care focused on your smile&apos;s health
        and beauty. Trust us to create a brighter, healthier tomorrow
      </motion.p>
    </motion.div>
  );
}
