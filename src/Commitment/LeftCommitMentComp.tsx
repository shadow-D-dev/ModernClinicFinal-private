import Image from "next/image";
import commit1 from "@/../Public/Journeytretment.jpg";
import commit2 from "@/../Public/HospitalLook.jpg";
import Exp from "@/../Public/Experience.png";
export default function LeftCommitMentComp() {
  return (
    <div className="flex justify-center items-center xl:justify-start overflow-hidden">
      <div className="relative p-2 xl:p-0">
        <div className="">
          <Image
            src={commit1}
            alt="treatment"
            className="w-80 h-80 xl:w-[450px] xl:h-[450px] rounded-[50px]"
          />
        </div>
        <div className="relative -top-28 -right-24 xl:-top-28 xl:-right-36 ">
          <Image
            src={commit2}
            alt="chair"
            className="rounded-[50px] border-white border-8 h-52 w-64 xl:h-[350px] xl:w-[450px] "
          />
        </div>
        <div className="relative -top-64 xl:-top-[750px] xl:-right-96">
          <Image
            src={Exp}
            alt="Experience"
            className="h-24 w-24 xl:h-auto xl:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
