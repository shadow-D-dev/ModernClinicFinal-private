import plus from "@/../public/AddIcon.svg";
import Image from "next/image";
interface PlusButtonProps {
  text: string;
}
export default function PlusButton({ text }: PlusButtonProps) {
  return (
    <div className="xs:flex-col flex gap-2 bg-[#5e5eee] rounded-full p-4 text-white text-md xl:text-lg font-plusJakarta font-bold  justify-center items-center">
      <p>{text}</p>
      <Image src={plus} alt="plus icon" className="h-4 w-4 mt-1" />
    </div>
  );
}
