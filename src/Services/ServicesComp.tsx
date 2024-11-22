import Image, { StaticImageData } from "next/image";

export interface ServicesProps {
  icon: StaticImageData;
  treatment: string;
  arrow: StaticImageData;
  service: StaticImageData;
  subtext: string;
}
export default function ServiceComp({
  icon,
  treatment,
  arrow,
  service,
  subtext,
}: ServicesProps) {
  return (
    <div className="bg-white rounded-[40px] flex flex-col  font-plusJakarta p-6 xl:p-6  text-black shadow-sm gap-4 xl:gap-6 ">
      {/* Header of the comp*/}
      <div className="flex items-center  pb-4 border-b-[1px] border-gray-200  justify-between">
        {/* left image of the comp*/}

        <div className=" ">
          <Image
            src={icon}
            alt="brush"
            className="bg-[#5e5eee] h-14 w-14 p-2  rounded-xl"
          />
        </div>
        {/* Middle text  of the comp*/}

        <div className=" flex  justify-center items-center ">
          <p className="lg:text-2xl text-lg font-bold">{treatment}</p>
        </div>
        {/* Right Image   of the comp*/}
        <div className="  flex justify-center items-center ">
          <Image src={arrow} alt="arrow" className="h-10 w-10" />
        </div>
      </div>
      {/* Middle of the comp*/}
      <div className="text-lg lg:text-xl ">{subtext}</div>
      {/* End of the comp*/}
      <div className="">
        <Image
          src={service}
          alt="service1"
          className="h-52 w-full rounded-[45px]"
        />
      </div>
    </div>
  );
}
