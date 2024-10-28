import Image from "next/image";
import DirectArrow from "@/Components/DirectArrow";
import arrow from "@/../public/Violte-Arrow.svg";
import logo from "@/../public/ShreeBalajiLogo.png";
import test from "@/../public/Testing.svg";
import HamburgerMenu from "./HamburgerMenu";

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
          <Image src={test} alt="logo" className="w-36 h-36 md:w-52 md:h-52" />
        </div>
        <div className="flex-2 lg:text-2xl md:text-xl  hidden lg:flex md:flex sm:hidden  items-center gap-14">
          {displayPages()}
        </div>
        <div className=" flex-1 lg:flex justify-end items-center ">
          <div className="hidden md:flex lg:flex">
            <DirectArrow
              text={"Book Appointment"}
              alt={"arrowComp"}
              arrow={arrow}
              height={25}
              width={25}
            />
          </div>
          <div className="flex sm:flex md:hidden lg:hidden  justify-end mt-2">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
