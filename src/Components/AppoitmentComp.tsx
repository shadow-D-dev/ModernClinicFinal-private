"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import phone from "@/../public/PhoneIcon.svg";
import time from "@/../public/OpeningHours.svg";
import PlusButton from "../Animation/PlusButton";

export default function AppointmentComp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-[40px]  p-8   gap-6 xl:gap-16 shadow-sm shadow-gray-200  ">
      {/* First Div */}
      <motion.div
        className="xs:flex-col flex items-center xl:border-r  xl:border-neutral-300 gap-6 lg:pr-4 flex-1"
        variants={slideInVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        custom={0}
      >
        <div className=" rounded-2xl bg-[#5e5eee] flex justify-center items-center h-16 w-16  p-4 ">
          <Image src={phone} alt="phone" className="h-8 w-8" />
        </div>
        <div className="flex flex-col gap-0 xl:gap-2 justify-center">
          <p className="text-lg xl:text-xl font-plusJakarta font-bold text-black">
            Need Dental Services?
          </p>
          <p className="text-md xl:text-lg font-plusJakarta text-black">
            (+91)9764773648
          </p>
        </div>
      </motion.div>

      {/* Second Div */}
      <motion.div
        className="xs:flex-col flex items-center  xl:border-r  xl:border-neutral-300 gap-6 lg:pr-4 flex-1"
        variants={slideInVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        custom={1}
      >
        <div className="rounded-2xl bg-[#5e5eee] flex justify-center items-center h-16 w-16 p-4 ">
          <Image src={time} alt="time" className="h-8 w-8" />
        </div>
        <div className="flex flex-col gap-0 xl:gap-2 justify-center">
          <p className="text-lg xl:text-xl font-plusJakarta font-bold text-black">
            Opening Hours
          </p>
          <p className="text-sm xl:text-lg font-plusJakarta text-black">
            Mon to Sat 9:00AM to 11:00PM
          </p>
        </div>
      </motion.div>

      {/* Third Div */}
      <motion.div
        className="flex justify-center items-center flex-1"
        variants={slideInVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        custom={2} // Incremental delay for stagger effect
      >
        <PlusButton text={"Make An Appointment"} />
      </motion.div>
    </div>
  );
}
