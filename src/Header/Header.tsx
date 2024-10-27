import Image from "next/image";
import DirectArrow from "../../Components/DirectArrow";
import arrow from "@/../public/Violte-Arrow.svg";
import logo from "@/../public/ShreeBalajiLogo.png";
import menu from "@/../public/HamburgerMenu.svg";
export default function Header() {
  const pages = ["Home", "About", "Services", "Results", "Contact Us"];
  const displayPages = () => (
    <div className="flex gap-14 ">
      {pages.map((page) => {
        return <div key={page}>{page}</div>;
      })}
    </div>
  );
  return (
    <div className="flex  bg-white text-black w-screen h-[70px] lg:h-[100px] md:h-[80px] sm:h-[70px] p-2  ">
      {/* There is an issue with this approach the space between middle div is not consistent will might  */}
      {/* fix it later by changing logo as its just about the size taken by the logo */}
      <div className="flex-1 flex justify-start items-center">
        <Image src={logo} alt="logo" className="w-24 h-24" />
      </div>
      <div className="flex-2 lg:text-2xl md:text-xl font-bold hidden lg:flex md:flex sm:hidden  items-center">
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
        <div className="flex sm:flex md:hidden lg:hidden  justify-end">
          <Image
            src={menu}
            alt="menu"
            height={50}
            width={50}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
