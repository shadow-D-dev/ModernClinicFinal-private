import Image from "next/image";
import background from "@/../public/HomePageBackground.svg";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function HomePage() {
  return (
    <div className="w-screen">
      <div className=" opacity-60  bg-gradient-to-r from-black to-black relative w-screen ">
        <Image
          src={background}
          alt="background"
          className="bg-[#5e5eee]  bg-gradient-to-r from-[#5e5eee] to-violet-950 w-screen h-[1200px]"
        />
      </div>
      <div className="w-screen flex justify-center items-center">
        <div className="flex flex-col md:flex-row absolute top-0  md:mt-32 w-screen lg:w-[1700px] gap-10 md:gap-0">
          <div className="w-full h:1/2 lg:w-1/2 lg:h-full p-1">
            <LeftSection />
          </div>
          <div className="w-full h:1/2 lg:w-1/2 lg:h-full">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
}
