"use client";
import { motion } from "framer-motion";
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
    pages.map((page: string, index: number) => {
      return (
        <motion.div
          key={page}
          initial={{ opacity: 0, y: -20 }} // Start hidden and slightly above
          animate={{ opacity: 1, y: 0 }} // Fade in and slide down
          exit={{ opacity: 0, y: -20 }} // Slide up and fade out on exit
          transition={{
            delay: 0.1 * index, // Stagger each item slightly for a cascading effect
            duration: 0.3,
          }}
        >
          {page}
        </motion.div>
      );
    });

  return (
    <div>
      <div className="" onClick={toggleVisibility}>
        <Image
          src={menu}
          alt="menu"
          height={42}
          width={42}
          className="rounded-xl "
        />
      </div>

      {isVisible ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 200, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="flex flex-col items-start absolute bg-[#5e5eee] text-white w-screen -right-4 top-[52px] gap-2 text-lg p-2 md:hidden lg:hidden"
        >
          {displayPages()}
        </motion.div>
      ) : null}
    </div>
  );
}
