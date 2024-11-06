"use client";
import Image from "next/image";
import phone from "@/../public/PhoneIcon.svg";
export default function CallButtonComp() {
  return (
    <button
      onClick={() => {
        window.location.href = `tel:${9764773648}`;
      }}
      className=" flex gap-4 bg-[#5e5eee] rounded-[100px] p-3 px-6  justify-center items-center"
    >
      <Image src={phone} alt="phoneicon" />
      <p className="text-md md:text-lg"> Book Now</p>
    </button>
  );
}
