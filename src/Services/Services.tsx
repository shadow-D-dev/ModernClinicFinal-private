import ServiceComp from "./ServicesComp";
import icon1 from "@/../Public/ServiceIcon1.svg";
import icon2 from "@/../Public/ServiceIcon2.svg";
import icon3 from "@/../Public/ServiceIcon3.svg";
import service1 from "@/../Public/Service1.jpg";
import service2 from "@/../Public/Service2.jpg";
import service3 from "@/../Public/Service3.jpg";
import arrow from "@/../Public/Violte-Arrow.svg";
import HoverEffect from "@/animation/animatedArrow";

export default function Services() {
  return (
    <div className="bg-[#F7F7FF] w-screen h-[2100px] xl:h-[1000px] pt-12 xl:pt-12 flex justify-center relative -top-60">
      <div className="w-[1500px] flex  flex-col gap-10">
        <div className="text-black flex justify-center items-center flex-col gap-8">
          <p className="text-6xl font-bold">
            <span className="text-[#5e5eee]">High Quality</span> Services for
            you
          </p>
          <p className="text-2xl">
            We are comitted to sustainability. eco-friendly initiatives
          </p>
        </div>
        <div className="flex  flex-col xl:flex-row   gap-10">
          {" "}
          <div className="flex-1 flex items-center justify-center p-4">
            <ServiceComp
              icon={icon1}
              treatment="General Dentistry"
              arrow={arrow}
              service={service1}
              subtext="We are excited to meet you and provide the best dental care for your family"
            />
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <ServiceComp
              icon={icon2}
              treatment="Dental Implants"
              arrow={arrow}
              service={service2}
              subtext="We are excited to meet you and provide the best dental care for your family"
            />
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <ServiceComp
              icon={icon3}
              treatment="Cosmetic Dentistry"
              arrow={arrow}
              service={service3}
              subtext="We are excited to meet you and provide the best dental care for your family"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-56 w-60  xl:w-72 ">
            <HoverEffect
              text={"All Of Our Services"}
              alt={"arrow"}
              width={29}
              height={29}
              arrow={arrow}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
