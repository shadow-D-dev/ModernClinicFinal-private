import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function HomePage() {
  return (
    <div className="w-screen">
      {/*     <div className="relative bg-gradient-to-r from-[#21214e] to-[#0F1031] w-screen h-[1300px]  xl:h-[1000px]"></div> */}
      <div className="  bg-[#21214e]  w-screen h-[1300px]  lg:h-[1000px]">
        {" "}
        <div className="w-screen flex justify-center items-center">
          <div className="flex flex-col lg:flex-row   p-2 lg:mt-32 lg:w-[1700px] gap-10 lg:gap-0 ">
            <div className="w-full h-1/2 lg:w-1/2 lg:h-full">
              <LeftSection />
            </div>
            <div className="w-full h-1/2 lg:w-1/2 lg:h-full">
              <RightSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
