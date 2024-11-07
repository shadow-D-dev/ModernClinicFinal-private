import AppointmentComp from "@/Components/AppoitmentComp";
import LeftCommitMentComp from "./LeftCommitMentComp";
import RightCommitMentComp from "./RightCommitMentComp";
export default function CommitMentComp() {
  return (
    <div className="w-full h-full relative bg-white flex justify-center items-center">
      <div className="w-[1300px]">
        {/* first comp aka appointment*/}
        <div className="relative  -top-32 lg:-top-20 z-10 p-2">
          <AppointmentComp />
        </div>
        {/* combo of the both rest of the comps*/}

        <div className="flex flex-col xl:flex-row text-black">
          <div className="flex-1">
            <LeftCommitMentComp />
          </div>
          <div className="flex-1">
            <RightCommitMentComp />
          </div>
        </div>
      </div>
    </div>
  );
}
