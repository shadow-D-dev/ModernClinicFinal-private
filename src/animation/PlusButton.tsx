import plus from "@/../public/AddIcon.svg";
import Image from "next/image";
interface PlusButtonProps {
  text: string;
}
export default function PlusButton({ text }: PlusButtonProps) {
  return (
    <button className="flex gap-2 bg-[#5e5eee] rounded-[100px] px-6 py-3 xl:px-8 xl:py-5 text-white text-md xl:text-xl font-plusJakarta font-bold">
      <p>{text}</p>{" "}
      <Image src={plus} alt="plus icon" className="h-4 w-4 mt-1" />
    </button>
  );
}
