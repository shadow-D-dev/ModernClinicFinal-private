import Image from "next/image";
import { StaticImageData } from "next/image";

export interface whyusprops {
  heading: string;
  subtext1: string;
  subtext2: string;
  image: StaticImageData;
}
export default function WhyUsReasons({
  heading,
  subtext1,
  subtext2,
  image,
}: whyusprops) {
  return (
    <div className="font-plusJakarta h-20 w-[400px] flex gap-6 items-center ">
      <div className="flex flex-col justify-end items-end">
        <p className="font-bold text-2xl">{heading}</p>
        <p className="font-bold text-lg">{subtext1}</p>
        <p className="font-bold text-lg">{subtext2}</p>
      </div>
      <div className="bg-[#5e5eee] rounded-2xl h-16 ">
        <Image src={image} alt="icon" className="h-10 w-10 m-3" />
      </div>
    </div>
  );
}
