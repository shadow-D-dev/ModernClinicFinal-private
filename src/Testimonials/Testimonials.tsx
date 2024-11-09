import Image from "next/image";
import treatment from "@/../public/HomePageTreatment.jpg";
import StatsTestimonials from "./StatsTestimonials";
import TestimonialsComp from "./TestimonialsComp";
import PlusButton from "@/Animation/PlusButton";

export default function Testimonials() {
  return (
    <div className="bg-white w-full  flex justify-center  text-black pb-12 lg:pb-0">
      {/* Main Content Page starts here*/}
      <div className=" lg:w-[1300px] p-2 lg:p-0">
        {/* -----------Initial Text------------------- */}

        <div className="flex flex-col lg:flex-row pt-16">
          <p className=" xs:text-xl text-4xl lg:text-6xl font-bold  flex flex-col flex-[7] flex-wrap">
            {/* -----------will change from flex-col to flex-row for xl currently moving fast------------------- */}
            <span className="text-[#5e5eee]">
              Real stories of exceptional care
            </span>
            <span>and transformative smiles</span>
          </p>
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
            <div className="flex ">
              <Image
                src={treatment}
                alt="test"
                className="h-96 w-96  rounded-[50px] "
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
