import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function HomePage() {
  return (
    <div className="">
      <div className="relative bg-gradient-to-r from-[#21214e] to-[#0F1031] w-screen h-[1300px]  xl:h-[1000px]"></div>
      <div className="w-screen flex justify-center items-center">
        <div className="flex flex-col xl:flex-row absolute top-0  lg:mt-32  xl:w-[1700px] gap-10 lg:gap-0 ">
          <div className="w-full h:1/2 xl:w-1/2 xl:h-full p-1 mt-16">
            <LeftSection />
          </div>
          <div className="w-full h:1/2 xl:w-1/2 xl:h-full">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
}
