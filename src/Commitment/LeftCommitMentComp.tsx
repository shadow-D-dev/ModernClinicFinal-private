"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInLeft } from "@/Animation/Animation";
import commit1 from "@/../public/Journeytretment.jpg";
import commit2 from "@/../public/HospitalLook.jpg";
import Experience from "@/../public/Experience.png";
export default function LeftCommitMentComp() {
  return (
    <div className="xs:flex-col flex justify-center items-center lg:justify-start p-2 lg:p-0 overflow-hidden -mt-24 lg:mt-0">
      <div className="">
        {/*First image*/}
        <div className="">
          <motion.img
            src={commit1.src}
            alt="treatment"
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className="w-96 h-96  rounded-[50px] object-cover"
          />
        </div>
        {/*Second image*/}
        <div className="relative xs:top-0 xs:right-0 -top-12 left-4 lg:-top-80 lg:left-80 xs:flex xs:justify-center xs:items-center lg:pl-4">
          <motion.img
            src={Experience.src}
            alt="Experience"
            className="h-24 w-24 lg:h-32 lg:w-32"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
          />
        </div>

        {/*Third image*/}
        {/* there is responsiveness issue due to the third image will fix later not sure about the way for now*/}
        {/* For now going with motion.img which is causing responsiveness issue and design inconsistency will fix later as i dive more in framer motion*/}

        <div className="relative xs:top-0 xs:right-0   -top-44 -right-28 lg:-top-64 lg:-right-40 w-60 lg:w-96 xl:w-96 xs:w-auto h-auto">
          <motion.img
            src={commit2.src}
            alt="chair"
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className="rounded-[50px] border-white border-8 h-52 w-64 lg:h-60 lg:w-72 xl:h-72 xl:w-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
