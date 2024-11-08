import Image from "next/image";
import { StaticImageData } from "next/image";

export interface whyusRightprops {
  heading: string;
  subtext1: string;
  subtext2: string;
  image: StaticImageData;
}
export default function WhyUsRight({
  heading,
  subtext1,
  subtext2,
  image,
}: whyusRightprops) {
  return (
    <div className="font-plusJakarta flex xs:flex-col gap-6 items-center">
      <div className="bg-[#5e5eee] rounded-lg">
        <Image src={image} alt="icon" className="h-14 w-14 p-2" />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-xl ">{heading}</p>
        <p className="text-md">{subtext1}</p>
        <p className=" text-md">{subtext2}</p>
      </div>
    </div>
  );
}
