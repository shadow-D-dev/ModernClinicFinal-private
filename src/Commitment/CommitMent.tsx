import AppointmentComp from "@/Components/AppoitmentComp";
import LeftCommitMentComp from "./LeftCommitMentComp";
import RightCommitMentComp from "./RightCommitMentComp";
export default function CommitMentComp() {
  return (
    <div className="w-full h-full bg-white flex justify-center lg:-mb-20 pb-16 lg:pb-0">
      {/*Added the minus margin to fix the gap at bottom will fix this later for now the main goal is 
      responsiveness and design*/}
      <div className="w-[1300px]">
        {/* first comp aka appointment*/}
        <div className="relative  -top-32 lg:-top-20 z-10 p-2">
          <AppointmentComp />
        </div>
        {/* combo of the both rest of the comps*/}

        <div className="flex flex-col lg:flex-row text-black p-2 md:p-0">
          <div className="flex-1">
            <LeftCommitMentComp />
          </div>
          {/*I think Responsiveness on the xs is having issue due to the right comp will fix it later*/}
          <div className="flex-1">
            <RightCommitMentComp />
          </div>
        </div>
      </div>
    </div>
  );
}
