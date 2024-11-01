import Image from "next/image";
import whyusdoc from "@/../public/WhyChooseUsDoc.png";
import Reason1 from "@/../public/WhyChooseUs1.svg";
import Reason2 from "@/../public/WhyChooseUs2.svg";
import Reason3 from "@/../public/WhyChooseUs3.svg";
import WhyUsRight from "./WhyUsRight";
import teeth from "@/../public/Loader.svg";
import PlusButton from "../Animation/PlusButton";
export default function WhyUs() {
  return (
    <div className=" relative -top-60 font-plusJakarta ">
      <div className=" w-screen h-[1665px] xl:h-[827px] absolute  bg-gradient-to-r from-[#21214e] to-[#0F1031] "></div>
      <div className="flex flex-col justify-center items-center relative pt-32 xl:pt-44">
        <div className="flex flex-col xl:flex-row xl:w-[1700px] w-screen p-4 xl:p-0 ">
          <div className="flex-1 flex flex-col gap-6 xl:mt-8  ">
            <p className="flex gap-4  items-center font-bold text-2xl">
              <Image src={teeth} alt="teeth" className="h-10 w-10" />
              <span>WHY CHOOSE US</span>
            </p>
            <p className="text-5xl xl:text-7xl font-bold ">
              Excellence results you can trust
            </p>
            <p className="font-bold text-xl ">
              Accurate diagnosis of dental diseases ensures effective treatment
              plans, helping to maintain oral health and prevent further
              complications.
            </p>
            <div className="h-32 w-64">
              <PlusButton text={"Contact Us"} />
            </div>
          </div>
          <div className="flex-1 hidden xl:flex">
            <Image src={whyusdoc} alt="doc" className="h-[650px] w-[450px]" />
          </div>
          <div className="flex-1 flex flex-col gap-20 xl:mt-8  ">
            <WhyUsRight
              heading={"Positive Patient Reviews"}
              subtext1="The goal of our clinic is to provide"
              subtext2=" friendly, caring dentistry and the."
              image={Reason1}
            />
            <WhyUsRight
              heading={"Emergency Services"}
              subtext1="The goal of our clinic is to provide"
              subtext2=" friendly, caring dentistry and the."
              image={Reason2}
            />
            <WhyUsRight
              heading={"Experienced Professionals"}
              subtext1="The goal of our clinic is to provide"
              subtext2=" friendly, caring dentistry and the."
              image={Reason3}
            />
          </div>
          <div className="flex-1 flex mt-10 xl:hidden justify-center items-center">
            <Image src={whyusdoc} alt="doc" className="h-[600px] w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
