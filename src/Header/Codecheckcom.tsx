// "use client";
// import { motion } from "framer-motion";
// import React from "react";
//
// export default function CodecheckComp() {
//   return (
//     <div className="flex p-24 justify-center items-center">
//       <div className="relative">
//         {/* Motion Input Field */}
//         <motion.input
//           type="text"
//           placeholder="Enter Your Name"
//           className="text-md lg:text-xl rounded-[50px] p-3 lg:p-4 flex-1 w-full"
//           style={{
//             border: "4px solid #5e5eee", // Default border color
//             position: "relative",
//           }}
//           initial={{ borderLeftWidth: "0%" }}
//           animate={{
//             borderLeftWidth: "30%", // Move 30% border from left to right
//           }}
//           transition={{
//             duration: 2, // Animation duration
//             ease: "easeInOut",
//             repeat: Infinity,
//           }}
//         />
//       </div>
//     </div>
//   );
// }
// pages/index.js

"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  duration?: number;
  ease?:
    | "linear"
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | [number, number, number, number];
}

export default function AnimatedText({
  children,
  duration = 0.5,
  ease = "linear",
}: AnimatedTextProps) {
  const textContainer = {
    hidden: { y: "100%" },
    visible: {
      y: "-10%",
      transition: {
        duration,
        ease,
      },
    },
  };

  return (
    <div className="overflow-hidden h-[3rem]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textContainer}
        className="text-white text-6xl font-bold"
      >
        {children}
      </motion.div>
    </div>
  );
}
