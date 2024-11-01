import Image from "next/image";
import star from "@/../public/Star.svg";
import AnimatedCount from "@/Animation/AnimatedCount";

export default function StatsTestimonials() {
  return (
    <div className="rounded-[40px] bg-[#5e5eee] p-4 text-white w-96 xl:w-[550px] border-4 xl:border-8 border-white font-plusJakarta">
      <div className="flex border-b-2 border-gray-200 ">
        <div className="text-5xl xl:text-6xl font-bold flex-1 flex justify-center ">
          <AnimatedCount target={4.7} duration={5} suffix={"/5"} />
        </div>
        <div className="font-bold text-md xl:text-lg flex-1">
          This Rate Is Given By User After Visiting Our Location
        </div>
      </div>
      <div className="flex p-2 xl:p-4 ">
        <div className="flex-1 flex justify-center items-center ">
          <div className="flex gap-2 bg-white rounded-xl p-2 xl:p-4 justify-center items-center">
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
          </div>
        </div>
        <div className="flex-1 text-lg font-bold ">For Excellence Services</div>
      </div>
    </div>
  );
}
