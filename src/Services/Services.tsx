import Image from "next/image";
import ServiceComp from "./ServicesComp";
import serviceicon1 from "@/../public/ServiceIcon1.svg";
import serviceicon2 from "@/../public/ServiceIcon2.svg";
import serviceicon3 from "@/../public/ServiceIcon3.svg";
import service1 from "@/../public/Service1.jpg";
import service2 from "@/../public/Service2.jpg";
import service3 from "@/../public/Service3.jpg";
import voiletarrow from "@/../public/Violte-Arrow.svg";
import voiletteeth from "@/../public/voilet-teeth.svg";
import PlusButton from "@/Animation/PlusButton";

export default function Services() {
  return (
    <div className="bg-[#F7F7FF] w-full h-full pt-12 pb-12 lg:pt-28 lg:pb-28 flex justify-center">
      <div className="w-[1300px] flex flex-col gap-20 p-4 lg:p-0">
        {/* The top level text div*/}
        <div className="text-black flex flex-col lg:flex-row gap-4">
          <div className="flex-[7] flex flex-col gap-4">
            <p className="text-[#5e5eee] font-plusJakarta font-bold text-md tracking-widest flex gap-2">
              <Image src={voiletteeth} alt="voilet teeth" />
              <span>OUR SERVICES </span>
            </p>
            <p className="xs:text-xl text-5xl font-bold">
              Comprehensive dental care tailored services for every smile
            </p>
          </div>
          <div className=" flex-[3] hidden lg:flex justify-start lg:justify-end items-center">
            <div>
              <PlusButton text={"All Of Our Services"} />
            </div>
          </div>
        </div>
        {/* Services Parent div*/}

        <div className="flex  flex-col flex-shrink lg:flex-row gap-10 justify-between items-center">
          <div className=" ">
            <ServiceComp
              icon={serviceicon1}
              treatment="General Dentistry"
              arrow={voiletarrow}
              service={service1}
              subtext="We are excited to meet you and provide the best dental care for your family"
            />
          </div>
          <div className=" ">
            <ServiceComp
              icon={serviceicon2}
              treatment="Dental Implants"
              arrow={voiletarrow}
              service={service2}
              subtext="We are excited to meet you and provide the best dental care for your family"
            />
          </div>
          <div className=" ">
            <ServiceComp
              icon={serviceicon3}
              treatment="Cosmetic Dentistry"
              arrow={voiletarrow}
              service={service3}
              subtext="We are excited to meet you and provide the best dental care for your family"
            />
          </div>
        </div>
        <div className="flex lg:hidden justify-center items-center">
          <PlusButton text={"All Of Our Services"} />
        </div>
      </div>
    </div>
  );
}
