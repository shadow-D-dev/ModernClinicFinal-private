import Image, { StaticImageData } from "next/image";
interface DirectArrowProp {
  text: string;
  alt: string;
  arrow: StaticImageData | string;
  height: number;
  width: number;
}
export default function DirectArrow({
  text,
  alt,
  arrow,
  height,
  width,
}: DirectArrowProp) {
  return (
    <div
      className="bg-[#5e5eee] text-white p-3 pl-6 flex  rounded-[30px] justify-evenly gap-4
      items-center hover:bg-violet-950"
    >
      <p className="text-xl font-bold">{text}</p>
      <div className="rounded-full bg-white p-1 hover:rotate-45">
        <Image src={arrow} alt={alt} width={width} height={height} />
      </div>
    </div>
  );
}
