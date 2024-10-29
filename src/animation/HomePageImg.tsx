"use client";
import { motion } from "framer-motion";
import image from "@/../public/HomePageTreatment.jpg";

export default function HomePageImg() {
  return (
    <div className="lg:mr-10 p-2 xl:p-0 ">
      <motion.img
        src={image.src} // Use image's `src` directly with motion.img
        alt="treatment image"
        initial={{ width: "30%" }} // Start at 10% width
        animate={{ width: "100%" }} // Animate to 100% width
        transition={{ duration: 1 }} // Smooth transition
        className="rounded-[40px] h-96 sm:h-[570px] xl:h-[670px] xl:w-[750px] object-cover " // Styling for rounded corners and cover scaling
      />
    </div>
  );
}
