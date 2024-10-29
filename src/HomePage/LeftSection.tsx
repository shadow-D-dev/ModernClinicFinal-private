import Image from "next/image";
import smile from "@/../public/InParaSmile.jpg";
import care from "@/../public/InParaCare.jpg";
import add from "@/../public/AddIcon.svg";
import AnimatedCount from "@/animation/AnimatedCount";
import CallButtonComp from "@/Components/CallButtonComp";
export default function LeftSection() {
  return (
    <div className="font-plusJakarta  font-bold lg:p-6 lg:pt-0 mt-6 md:mt-0">
      {/* Heading starts here */}

      {/* 1st heading */}
      <div className="text-4xl sm:text-5xl  md:text-7xl flex flex-col gap-2 ">
        <div className="flex gap-1 lg:gap-3  items-center">
          <h2 className="flex gap-3">
            <span>Your</span>
            <span> smile</span>
          </h2>
          <Image
            src={smile}
            alt="Image depicting a smile"
            className="rounded-[100px] mt-1 md:mt-3 h-8 w-20 md:h-12 md:w-32"
          />
          <h2>matters</h2>
        </div>

        {/* 2nd heading */}
        <div className="flex items-center gap-1">
          <h2 className="flex gap-3">
            <span>expert</span>
            <span>dental</span>
          </h2>
          <Image
            src={care}
            alt="Image related to dental care"
            className="rounded-[100px] mt-1 md:mt-3 h-8 w-20 md:h-12 md:w-32"
          />
          <h2 className="md:ml-2">care</h2>
        </div>

        {/* 3rd heading */}
        <div className="flex">
          <h2>a bright tomorrow</h2>
        </div>
      </div>
      {/* Heading ends here  */}
      <p className="text-xl mt-6 md:mt-10 font-thin md:font-bold ">
        Experience top-quality dental care focused on your smile&apos;s health
        and beauty. Trust us to create a brighter, healthier tomorrow
      </p>
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
