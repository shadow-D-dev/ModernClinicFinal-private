import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function HomePage() {
  return (
    <div className="flex justify-center bg-[#21214e] w-full h-full ">
      <div className="flex flex-col lg:flex-row p-2 xl:p-0 lg:w-[1300px] gap-12 lg:gap-0 lg:mt-16">
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full overflow-hidden">
          <LeftSection />
        </div>
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex justify-center  lg:justify-end lg:pl-24">
          <RightSection />
        </div>
      </div>
    </div>
  );
}
