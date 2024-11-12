"use client";
{
  /*Made this comp a child comp coz for now i have to use motion.img for animating img once i figure a way will switch to the server*/
}
import treatment from "@/../public/HomePageTreatment.jpg";
import { motion } from "framer-motion";
import { slideInLeft } from "@/Animation/Animation";
import StatsTestimonials from "./StatsTestimonials";
import TestimonialsComp from "./TestimonialsComp";
import PlusButton from "@/Animation/PlusButton";
import AnimatedText from "@/Animation/ParagraphAnimation";
export default function Testimonials() {
  return (
    <div className="bg-white w-full  flex justify-center  text-black pb-12 lg:pb-0">
      {/* Main Content Page starts here*/}
      <div className=" lg:w-[1300px] p-2 lg:p-0">
        {/* -----------Initial Text------------------- */}

        <div className="flex flex-col lg:flex-row pt-16">
          <div className=" xs:text-xl text-4xl lg:text-6xl font-bold  flex flex-col flex-[7] flex-wrap justify-start">
            {/* -----------will change from flex-col to flex-row for xl currently moving fast------------------- */}
            <span className="text-[#5e5eee]">
              <AnimatedText>Real stories of exceptional care</AnimatedText>
            </span>
            <span>
              <AnimatedText>and transformative smiles</AnimatedText>
            </span>
          </div>
          <div className="flex xs:justify-center justify-start lg:justify-end items-center flex-[3]">
            <div className="">
              <PlusButton text={"Contact Us Now"} />
            </div>
          </div>
        </div>
        {/* ---------------------------------------------- */}
        {/* ---------------------------------------------- */}

        <div className="flex flex-col lg:flex-row mt-16 gap-12">
          {/*Left comp*/}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
            <div className="flex">
              <motion.img
                src={treatment.src}
                alt="test"
                initial="hidden"
                animate="visible"
                variants={slideInLeft}
                className="h-96 w-96  rounded-[50px] object-cover"
              />
            </div>
            <div className="lg:relative lg:-top-24 lg:-right-24 flex justify-center items-center xs:hidden">
              <StatsTestimonials />
              {/*made it hidden for xs as it was causing the responsiveness issue below 400px needs to be fixed */}
            </div>
          </div>
          {/*Right comp*/}
          <div className="flex-1 ">
            <TestimonialsComp />
          </div>
          {/* ----------------------------------------------*/}
          {/* ----------------------Both the comps end here------------- */}
        </div>
      </div>
    </div>
  );
}
