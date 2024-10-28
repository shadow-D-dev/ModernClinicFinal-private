"use client";
import menu from "@/../public/HamburgerMenu.svg";
import Image from "next/image";
import { useVisibilityStore } from "@/store/useVisibilityStore";
export default function HamburgerMenu() {
  const isVisible = useVisibilityStore((state) => state.isVisible);
  const toggleVisibility = useVisibilityStore(
    (state) => state.toggleVisibility,
  );
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
    <div>
      <div className="" onClick={toggleVisibility}>
        <Image
          src={menu}
          alt="menu"
          height={40}
          width={40}
          className="rounded-xl "
        />
      </div>

      {isVisible ? (
        <div className="flex flex-col items-start absolute bg-[#5e5eee] text-white w-screen left-0 top-[70px] gap-2 text-lg p-2 md:hidden lg:hidden">
          {displayPages()}
        </div>
      ) : null}
    </div>
  );
}
