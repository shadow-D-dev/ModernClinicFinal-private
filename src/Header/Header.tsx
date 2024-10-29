import Image from "next/image";
import arrow from "@/../public/Violte-Arrow.svg";
import logo from "@/../public/ShreeBalajiLogo.png";
import test from "@/../public/Testing.svg";
import HamburgerMenu from "./HamburgerMenu";
import HoverEffect from "@/animation/animatedArrow";

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
      return <div key={page}>{page}</div>;
    });
  return (
    <div className="w-screen flex justify-center items-center bg-white">
      <div className="flex  bg-white text-gray-950 w-[1700px] h-[70px] lg:h-[100px] md:h-[80px] sm:h-[70px] p-2  relative">
        {/* There is an issue with this approach the space between middle div is not consistent will might  */}
        {/* fix it later by changing logo as its just about the size taken by the logo */}
        <div className="flex-1 flex justify-start items-center">
          <Image
            src={logo}
            alt="logo"
            className="w-24 h-24 md:w-40 md:h-40 sm:w-28 sm:h-28 mt-4"
          />
        </div>
        <div className="flex-2 lg:text-2xl    hidden  xl:flex  items-center gap-14">
          {displayPages()}
        </div>
        <div className=" flex-1 md:flex justify-end items-center pr-8">
          <div className="hidden md:flex lg:flex">
            <HoverEffect
              text={"Book Appointment"}
              alt={"arrowComp"}
              arrow={arrow}
              height={25}
              width={25}
            />
          </div>
          <div className="flex-1  md:hidden flex justify-end mt-2 relative -right-6 sm:mr-6">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
