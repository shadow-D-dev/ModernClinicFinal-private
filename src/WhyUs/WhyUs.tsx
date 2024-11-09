import Image from "next/image";
import whyusdoc from "@/../public/WhyChooseUsDoc.png";
import Reason1 from "@/../public/WhyChooseUs1.svg";
import Reason2 from "@/../public/WhyChooseUs2.svg";
import Reason3 from "@/../public/WhyChooseUs3.svg";
import WhyUsRight from "./WhyUsRight";
import voiletteeth from "@/../public/voilet-teeth.svg";
import PlusButton from "../Animation/PlusButton";
export default function WhyUs() {
  return (
    <div className=" w-full h-full bg-gradient-to-r from-[#21214e] to-[#0F1031] flex justify-center  text-white ">
      <div className="flex flex-col lg:flex-row lg:w-[1300px] justify-between pt-12 lg:pt-32 lg:gap-4 gap-12 pl-2  pr-2 lg:pl-0 lg:pr-0">
        {/*First comp*/}
        <div className="flex-1 flex flex-col gap-6 lg:gap-8 justify-center">
          <p className="flex gap-2  items-center font-bold text-md tracking-widest">
            <Image src={voiletteeth} alt="teeth" className="h-6 w-6" />
            <span>WHY CHOOSE US</span>
          </p>
          <p className="text-3xl lg:text-5xl font-bold ">
            Excellence results you can trust
          </p>
          <p className="font-bold text-md lg:text-xl ">
            Accurate diagnosis of dental diseases ensures effective treatment
            plans, helping to maintain oral health and prevent further
            complications.
          </p>
          <div className="flex justify-start items-center xs:justify-center">
            <div>
              <PlusButton text={"Contact Us"} />
            </div>
          </div>
        </div>
        {/*Second comp*/}
        <div className="flex-1  hidden lg:flex justify-center items-center">
          <Image src={whyusdoc} alt="doc" className="" />
        </div>
        {/*Third comp*/}

        <div className="flex-1 flex flex-col  gap-8 lg:gap-16 lg:justify-center lg:items-end">
          <div>
            <WhyUsRight
              heading={"Positive Patient Reviews"}
              subtext1="The goal of our clinic is to provide"
              subtext2=" friendly, caring dentistry and the."
              image={Reason1}
            />
          </div>
          <div>
            <WhyUsRight
              heading={"Emergency Services"}
              subtext1="The goal of our clinic is to provide"
              subtext2=" friendly, caring dentistry and the."
              image={Reason2}
            />
          </div>
          <div>
            <WhyUsRight
              heading={"Experienced Professionals"}
              subtext1="The goal of our clinic is to provide"
              subtext2=" friendly, caring dentistry and the."
              image={Reason3}
            />
          </div>
        </div>
        <div className="lg:hidden flex justify-center items-center">
          <Image src={whyusdoc} alt="doc" />
        </div>
      </div>
    </div>
  );
}
