import Image from "next/image";
import voiletarrow from "@/../public/Violte-Arrow.svg";
import logo from "@/../public/ShreeBalajiLogo.png";
import HamburgerMenu from "./HamburgerMenu";
import HoverEffect from "../Animation/AnimatedArrow";

export default function Header() {
  const pages: string[] = [
    "Home",
    "About",
    "Services",
    "Results",
    "Contact Us",
  ];
  const displayPages = (): JSX.Element[] =>
    pages.map((page: string) => {
      return (
        <div key={page} className="hover:text-[#5e5eee]">
          {page}
        </div>
      );
    });
  return (
    <div className="w-full flex justify-center items-center bg-white pl-4 pr-4 md:pl-0 md:pr-0">
      {/*     wrapper div for all the three divs  */}
      <div className="flex justify-between items-center  bg-white text-gray-950  h-16 lg:h-20  transition-all duration-300 ease-in-out xl:max-w-[1300px] w-full">
        {/*     Left div */}
        <div className="flex-1 flex justify-start items-center">
          <Image
            src={logo}
            alt="logo"
            className="w-24 h-24 md:w-28 md:h-28  mt-2 lg:h-32 lg:w-32 transition-all duration-300 ease-in-out"
          />
        </div>
        {/*    middle div  */}
        <div className=" hidden  lg:flex flex-2 lg:items-center gap-12 lg:text-xl font-bold">
          {displayPages()}
        </div>
        {/* Last div */}

        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex transition-all duration-300">
            <HoverEffect
              text={"Book Appointment"}
              alt={"arrowComp"}
              arrow={voiletarrow}
              height={22}
              width={22}
            />
          </div>
          <div className=" md:hidden flex justify-end transition-all duration-300">
            <HamburgerMenu />
          </div>
        </div>
        {/*      Last div ends here  */}
      </div>
    </div>
  );
}
