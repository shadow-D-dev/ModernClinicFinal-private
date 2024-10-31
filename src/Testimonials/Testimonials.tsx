import Image from "next/image";
import test from "@/../Public/HomePageTreatment.jpg";
import StatsTestimonials from "./StatsTestimonials";
import TestimonialsComp from "./TestimonialsComp";

export default function Testimonials() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-screen  h-[1000px] text-black">
        <div className="bg-white   w- h-[1300px] xl:h-[900px]">
          {/* Main Content Page starts here*/}
          <div className="flex justify-center items-center ">
            <div className=" xl:w-[1700px]">
              {/* ---------------------------------------------- */}
              {/* ---------------------------------------------- */}
              {/* -----------Initial Text------------------- */}

              <div className="flex flex-col gap-12   pt-16">
                <div className="">
                  <p className="text-xl xl:text-6xl font-bold  flex flex-col">
                    {/* -----------will change from flex-col to flex-row for xl currently moving fast------------------- */}
                    <span className="text-[#5e5eee]">
                      Real stories of exceptional care
                    </span>{" "}
                    <span>and transformative smiles</span>
                  </p>
                </div>
              </div>
              {/* ---------------------------------------------- */}
              {/* ---------------------------------------------- */}
              <div className="flex flex-col xl:flex-row mt-16 gap-12">
                <div className="flex-1 flex flex-col ">
                  <div className="flex justify-center items-center xl:justify-start xl:items-center">
                    <Image
                      src={test}
                      alt="test"
                      className="h-96 w-96 xl:h-[500px] xl:w-[470px] rounded-[50px] "
                    />
                  </div>
                  <div className="xl:relative xl:-top-24 xl:-right-20">
                    <StatsTestimonials />
                  </div>
                </div>

                <div className="flex-1 xl:mr-10 xl:mt-2 xl:p-14  rounded-3xl shadow-2xl h-96 w-96 xl:h-[520px] xl:w-full bg-white">
                  <TestimonialsComp />
                </div>
                {/* ---------------------------------------------- */}
                {/* ----------------------Both the comps end here------------- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
