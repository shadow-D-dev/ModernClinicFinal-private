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
    <div className="bg-white rounded-[40px] flex flex-col  font-plusJakarta p-6 xl:p-10  text-black shadow-sm gap-6 xl:gap-10">
      <div className="flex items-center  pb-4 border-b-[1px] border-gray-200 gap-2 ">
        <div className="flex-1 ">
          <Image
            src={icon}
            alt="brush"
            className="bg-[#5e5eee] h-16 w-16 p-2  xl:h-16 xl:w-16 xl:p-2 rounded-xl"
          />
        </div>
        <div className=" flex flex-2 justify-center items-center ">
          <p className="xl:text-2xl text-xl font-bold">{treatment}</p>
        </div>
        <div className="flex-1  flex justify-center items-center ">
          <Image src={arrow} alt="arrow" className="h-10 w-10" />
        </div>
      </div>

      <div className="text-xl xl:text-2xl ">{subtext}</div>
      <div className="">
        <Image
          src={service}
          alt="service1"
          className="h-56 lg:h-64 w-full rounded-[45px]"
        />
      </div>
    </div>
  );
}
