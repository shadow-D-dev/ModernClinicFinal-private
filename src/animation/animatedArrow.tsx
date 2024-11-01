"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image"; // Import Next.js Image component

interface HoverEffectProps {
  text: string;
  alt: string;
  width: number;
  height: number;
  arrow: StaticImageData;
}

const HoverEffect: React.FC<HoverEffectProps> = ({
  text,
  alt,
  width,
  height,
  arrow,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#5e5eee] text-white xl:p-3  p-2 xl:pl-6 flex rounded-[30px]  gap-4 items-center">
      <p className="xl:text-xl text-lg font-bold">{text}</p>
      <div className="rounded-full bg-white p-1">
        <Image src={arrow} alt={alt} width={width} height={height} />
      </div>
    </div>
  );
};

export default HoverEffect;
