import Image from "next/image";
import voiletarrow from "@/../public/Violte-Arrow.svg";
import logo from "@/../public/ShreeBalajiLogo.png";
import HamburgerMenu from "./HamburgerMenu";
import HoverEffect from "../Animation/AnimatedArrow";

export default function Codecheckcomp() {
  const pages: string[] = [
    "Home",
    "About",
    "Services",
    "Results",
    "Contact Us",
  ];
  const displayPages = (): JSX.Element[] =>
    pages.map((page: string) => (
      <div
        key={page}
        className="hover:text-[#5e5eee] transition-colors duration-300"
      >
        {page}
      </div>
    ));

  return (
    <div className="w-full flex justify-center items-center bg-white">
      <div className="flex justify-between items-center bg-white text-gray-950 h-16 lg:h-20 transition-all duration-300 ease-in-out xl:max-w-[1280px] w-full relative">
        <div className="flex-1 flex justify-start items-center">
          <Image
            src={logo}
            alt="logo"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="hidden lg:flex flex-2 lg:items-center gap-12 text-lg font-bold transition-opacity duration-300">
          {displayPages()}
        </div>
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex justify-center items-center transition-opacity duration-300">
            <HoverEffect
              text={"Book Appointment"}
              alt={"arrowComp"}
              arrow={voiletarrow}
              height={20}
              width={20}
            />
          </div>
          <div className="flex md:hidden justify-end transition-opacity duration-300">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
