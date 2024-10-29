"use client";
import Image from "next/image";
import phone from "@/../public/PhoneIcon.svg";
export default function CallButtonComp() {
  return (
    <button
      onClick={() => {
        window.location.href = `tel:${9764773648}`;
      }}
      className=" flex gap-4 bg-[#5e5eee] rounded-[100px] px-6 py-3 md:px-8 md:py-4 justify-center items-center"
    >
      <Image src={phone} alt="phoneicon" /> Book Now
    </button>
  );
}
