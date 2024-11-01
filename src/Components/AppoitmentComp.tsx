"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useEffect, useState } from "react";
import phone from "@/../public/PhoneIcon.svg";
import time from "@/../public/OpeningHours.svg";
import PlusButton from "../Animation/PlusButton";

export default function AppointmentComp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set to visible when component mounts
    setIsVisible(true);
  }, []);

  // Animation variants
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 }, // Hidden state (initial)
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Delay for stagger effect
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="">
        <div className="flex flex-col xl:flex-row bg-white rounded-[40px] xl:rounded-3xl p-6 xl:w-[1650px] xl:p-10 gap-4 xl:gap-16 shadow-sm shadow-gray-200 relative xl:-top-20 -top-32 z-10">
          {/* First Div */}
          <motion.div
            className="flex flex-1 xl:border xl:border-white xl:border-r-black gap-6"
            variants={slideInVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"} // Trigger animation based on visibility
            custom={0} // Custom value for delay
          >
            <div className="rounded-2xl bg-[#5e5eee] p-4 xl:p-6 justify-center items-center">
              <Image
                src={phone}
                alt="phone"
                className="w-6 h-6 xl:w-8 xl:h-8"
              />
            </div>
            <div className="flex flex-col gap-0 xl:gap-2 justify-center">
              <p className="text-lg xl:text-2xl font-plusJakarta font-bold text-black">
                Need Dental Services?
              </p>
              <p className="text-md xl:text-xl font-plusJakarta text-black">
                (+91)9764773648
              </p>
            </div>
          </motion.div>

          {/* Second Div */}
          <motion.div
            className="flex flex-1 xl:border xl:border-white xl:border-r-black gap-6"
            variants={slideInVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            custom={1} // Incremental delay for stagger effect
          >
            <div className="rounded-2xl bg-[#5e5eee] p-4 xl:p-6 justify-center items-center xl:h-auto">
              <Image src={time} alt="time" className="xl:w-8 xl:h-8 w-6 h-6" />
            </div>
            <div className="flex flex-col gap-0 xl:gap-2 justify-center">
              <p className="text-lg xl:text-2xl font-plusJakarta font-bold text-black">
                Opening Hours
              </p>
              <p className="text-md xl:text-xl font-plusJakarta text-black">
                Mon to Sat 9:00AM to 11:00PM
              </p>
            </div>
          </motion.div>

          {/* Third Div */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            variants={slideInVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            custom={2} // Incremental delay for stagger effect
          >
            <PlusButton text={"Make An Appointment"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
