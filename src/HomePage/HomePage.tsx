import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function HomePage() {
  return (
    <div className="flex justify-center bg-gradient-to-r from-[#21214e] to-[#0f0f2a] w-full h-full lg:pb-16 pb-24 xs:pb-32">
      {/* the lighter color code is ccb3ff and the actual is  21214e*/}
      <div className="flex flex-col lg:flex-row p-2 xl:p-0 lg:w-[1300px] gap-12 lg:gap-0 lg:mt-16">
        <div className="flex-1 lg:pt-4">
          <LeftSection />
        </div>
        <div className="flex-1 flex justify-center">
          <RightSection />
        </div>
      </div>
    </div>
  );
}
