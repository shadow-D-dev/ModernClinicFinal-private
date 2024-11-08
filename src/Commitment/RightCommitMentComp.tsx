import Image from "next/image";
import tick from "@/../public/tick.svg";
import arrow from "@/../public/Violte-Arrow.svg";
import HoverEffect from "../Animation/AnimatedArrow";

export default function RightCommitMentComp() {
  return (
    <div className="font-plusJakarta  flex flex-col  gap-6 justify-center xs:items-center items-start lg:items-start xs:mt-0 -mt-24 lg:mt-0">
      <p className="xs:text-3xl text-6xl font-extrabold">
        <span className="text-[#5e5eee]">Your Journey</span> to a Healthier
        Smile Begins Here
      </p>
      <p className="xs:text-xl text-2xl">
        The goal of our clinic is to provide friendly, caring dentistry and the
        highest level of general, cosmetic, and specialist dental treatments.
        With dental practices throughout the world.
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-0">
          <div className="flex xs:flex-col flex-row flex-1 gap-2 items-center">
            <Image src={tick} alt="tick" height={32} width={32} />
            <p className="text-lg font-bold">Experienced Team</p>
          </div>

          <div className="flex xs:flex-col flex-row flex-1 gap-2 items-center">
            <Image src={tick} alt="tick" height={32} width={32} />
            <p className="text-lg font-bold">Comprehensive Services</p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-0">
          <div className="flex xs:flex-col flex-row flex-1 gap-2 items-center">
            <Image src={tick} alt="tick" height={32} width={32} />
            <p className="text-lg font-bold"> State-Of-The-Art Technology</p>
          </div>

          <div className="flex xs:flex-col flex-row flex-1 gap-2 items-center">
            <Image src={tick} alt="tick" height={32} width={32} />
            <p className="text-lg font-bold"> Emergency Dental Services</p>
          </div>
        </div>
      </div>
      <div className="">
        <HoverEffect
          text={"Read More About us"}
          alt={"arrow"}
          width={20}
          height={20}
          arrow={arrow}
        />
      </div>
    </div>
  );
}
