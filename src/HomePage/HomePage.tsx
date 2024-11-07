import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function HomePage() {
  return (
    <div className="flex justify-center bg-[#7560eb] w-full h-full lg:pb-16 pb-24 xs:pb-32">
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
