import Image from "next/image";
import star from "@/../public/Star.svg";
import AnimatedCount from "../Animation/AnimatedCount";

export default function StatsTestimonials() {
  return (
    <div className="rounded-[40px] bg-[#5e5eee] p-2   text-white  border-4 xl:border-6 border-white font-plusJakarta w-96">
      {/* Redo the whole comp in a such a way that this should be placed below the image and the above image will be the image of the testimonial guy and add the fade in animation at the top*/}
      <div className="flex flex-shrink lg:flex-row flex-col border-b-[1px] border-gray-200 ">
        <div className="text-5xl lg:text-5xl font-bold flex-1 flex justify-center items-center">
          <AnimatedCount target={4.7} duration={5} suffix={"/5"} />
        </div>
        <div className=" text-md lg:text-lg flex-1 w-full">
          This Rating Is Given By User After Visiting Our Location
        </div>
      </div>
      <div className=" flex p-2 lg:flex-row flex-col">
        <div className="flex-1 flex justify-center items-center ">
          <div className="flex gap-2 bg-white rounded-xl p-2 justify-center items-center">
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
          </div>
        </div>
        <div className="flex-1 text-lg  ">For Excellence Services</div>
      </div>
    </div>
  );
}
