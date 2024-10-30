import AnimatedCount from "@/animation/AnimatedCount";
import AnimatedButtons from "@/animation/AnimatedButtons";
import HomePageHeading from "@/animation/HomePageHeading";
export default function LeftSection() {
  return (
    <div className="font-plusJakarta  text-white font-bold lg:p-6 lg:pt-0 mt-6 lg:mt-0">
      <HomePageHeading />
      <div>
        <div>
          <div className=" border-t-[1px] border-b-[1px] border-gray-500 mt-8 flex p-2 lg:p-7 text-3xl lg:text-5xl  md:gap-16 lg:w-[700px]">
            <div className="flex lg:gap-5 flex-col items-start flex-1 justify-start">
              <div className="font-plusJakarta font-bold flex justify-center">
                <AnimatedCount target={12} duration={5} suffix={"X 7"} />
              </div>
              <p className="text-lg font-bold flex flex-col md:flex-row  md:gap-2">
                <span>Emergency </span>
                <span>Service</span>
              </p>
            </div>

            <div className="flex flex-1 md:gap-5 flex-col  justify-center items-center ">
              <div className="font-plusJakarta font-bold flex justify-center">
                <AnimatedCount target={25} duration={5} suffix={"K"} />
              </div>
              <p className="text-lg font-bold flex  md:gap-2 flex-col md:flex-row">
                <span>Recover </span>
                <span>Patient</span>
              </p>
            </div>
            <div className="flex flex-1 lg:gap-5 flex-col  items-center">
              <div className="font-plusJakarta font-bold ">
                <AnimatedCount target={15} duration={5} suffix={"+"} />
              </div>
              <p className="text-lg font-bold flex  md:gap-2 flex-col md:flex-row  justify-center items-center">
                <span>Market </span>
                <span>Experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <AnimatedButtons />
    </div>
  );
}
