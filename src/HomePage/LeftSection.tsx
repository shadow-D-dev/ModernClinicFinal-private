import AnimatedCount from "../Animation/AnimatedCount";
import AnimatedButtons from "../Animation/AnimatedButtons";
import HomePageHeading from "../Animation/HomePageHeading";
export default function LeftSection() {
  return (
    <div className="font-plusJakarta  text-white font-bold  lg:pt-0 mt-6 lg:mt-0">
      <HomePageHeading />
      <div>
        <div>
          <div className=" border-t-[1px] border-b-[1px] border-gray-500 mt-6 lg:mt-8 flex pt-2 pb-2 lg:pt-6 lg:pb-6   text-3xl lg:text-4xl  2xl:text-5xl   justify-between">
            {/* 1st stat*/}

            <div className="flex  md:gap-3 2xl:gap-5 flex-col items-start  ">
              <div className="font-plusJakarta font-bold flex justify-center">
                <AnimatedCount target={12} duration={5} suffix={"X7"} />
              </div>
              <p className="text-lg font-bold flex flex-col md:flex-row  md:gap-2">
                <span>Emergency </span>
                <span>Service</span>
              </p>
            </div>
            {/* 2nd stat*/}

            <div className="flex  md:gap-3 2xl:gap-5 flex-col  justify-center items-center md:items-start">
              <div className="font-plusJakarta font-bold flex justify-center md:items-start">
                <AnimatedCount target={25} duration={5} suffix={"K"} />
              </div>
              <p className="text-lg font-bold flex  md:gap-2 flex-col md:flex-row">
                <span>Recover </span>
                <span>Patient</span>
              </p>
            </div>
            {/* 3rd stat*/}

            <div className="flex  md:gap-3 2xl:gap-5 flex-col  items-center md:items-start">
              <div className="font-plusJakarta font-bold ">
                <AnimatedCount target={15} duration={5} suffix={"+"} />
              </div>
              <p className="text-lg font-bold flex md:gap-2 flex-col md:flex-row  justify-center items-center">
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
