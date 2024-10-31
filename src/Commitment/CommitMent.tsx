import LeftCommitMentComp from "./LeftCommitMentComp";
import RightCommitMentComp from "./RightCommitMentComp";
export default function CommitMentComp() {
  return (
    <div className="">
      <div className="relative -top-60 xl:-top-40">
        <div className="bg-white w-screen h-[1500px] xl:h-[1000px] relative">
          {""}
        </div>
        <div className="absolute top-24 w-screen  flex justify-center items-center ">
          <div className="text-black w-[1500px] mt-20">
            <div className="flex flex-col xl:flex-row">
              <div className="xl:w-1/2">
                <LeftCommitMentComp />
              </div>
              <div className="xl:w-1/2">
                <RightCommitMentComp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
