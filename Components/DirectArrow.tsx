import Image, { StaticImageData } from "next/image";
interface DirectArrowProp {
  text: string;
  alt: string;
  arrow: StaticImageData | string;
}
export default function DirectArrow({ text, alt, arrow }: DirectArrowProp) {
  return (
    <div className="bg-violet-900 text-white p-4 flex gap-8 rounded-3xl w-[300px]">
      <p className="text-2xl">{text}</p>
      <div className="rounded-full bg-white">
        <Image src={arrow} alt={alt} />
      </div>
    </div>
  );
}
