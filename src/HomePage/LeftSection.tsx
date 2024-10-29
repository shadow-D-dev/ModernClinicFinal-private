import Image from "next/image";
import smile from "@/../public/InParaSmile.jpg";
import care from "@/../public/InParaCare.jpg";
import add from "@/../public/AddIcon.svg";
import AnimatedCount from "@/animation/AnimatedCount";
import CallButtonComp from "@/Components/CallButtonComp";
import HomePageHeading from "@/animation/HomePageHeading";
export default function LeftSection() {
  return (
    <div className="font-plusJakarta  font-bold lg:p-6 lg:pt-0 mt-6 lg:mt-0">
      <HomePageHeading />
      <div>
        <div>
          <div className=" border-t-[1px] border-b-[1px] border-gray-500 mt-8 flex p-2 lg:p-7 text-3xl lg:text-5xl  md:gap-16 lg:w-[700px]">
            <div className="flex lg:gap-5 flex-col items-start flex-1 justify-start">
              <div className="font-plusJakarta font-bold flex justify-center">
                <AnimatedCount target={24} duration={5} suffix={"X 7"} />
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

      <div className=" flex gap-4 md:gap-10  text-md md:text-xl mt-6 md:mt-10 p-2">
        <CallButtonComp />
        <button className="flex gap-4  rounded-[100px] px-6 md:px-8 py-3 md:py-4 border border-white text-center">
          <Image src={add} alt="plusicon" />
          Enquries
        </button>
      </div>
    </div>
  );
}
