// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import teethLogo from "@/../public/Loader.svg"; // Update with the correct path to your SVG logo
//
// const LoadingScreen: React.FC = () => {
//   const [loading, setLoading] = useState(true);
//   const [backgroundOpacity, setBackgroundOpacity] = useState(1);
//   const [contentOpacity, setContentOpacity] = useState(1);
//
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       // First, fade out the background
//       setBackgroundOpacity(0); // Start fading out the background
//
//       // After a short delay, fade out the content
//       setTimeout(() => {
//         setContentOpacity(0); // Start fading out the content
//       }, 300); // Wait for 300ms after starting to fade out the background
//
//       // Finally, set loading to false after everything is done
//       setTimeout(() => {
//         setLoading(false); // Set loading to false after everything is done
//       }, 1300); // Adjust this based on total fade-out duration
//     }, 3000); // Simulate loading time (adjust this as needed)
//
//     return () => clearTimeout(timer); // Cleanup timer on unmount
//   }, []);
//
//   return (
//     <>
//       {loading && (
//         <motion.div
//           className="flex justify-center items-center w-screen h-screen bg-[#5e5eee] relative overflow-hidden"
//           initial={{ opacity: 1 }}
//           animate={{ opacity: backgroundOpacity }} // Animate background opacity
//           transition={{ duration: 1 }} // Duration for background fade-out
//         >
//           <motion.div
//             className="absolute flex justify-center items-center w-screen h-screen"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: contentOpacity }} // Animate content opacity
//             transition={{ duration: 0.5 }} // Duration for content fade-out
//           >
//             {/* First rotating arc */}
//             <motion.div
//               className="absolute border-[0.5px] border-white rounded-full w-[20vw] h-[20vw] min-w-[100px] min-h-[100px] clip-path-arc-30 rotate-0"
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//               style={{
//                 clipPath: "polygon(0% 0%, 20% 0%, 20% 100%, 0% 100%)", // 30% arc
//               }}
//             />
//
//             {/* Second rotating arc with a 20% gap offset */}
//             <motion.div
//               className="absolute border-[0.5px] border-white rounded-full w-[20vw] h-[20vw] min-w-[100px] min-h-[100px] clip-path-arc-30 rotate-180"
//               animate={{ rotate: 360 }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 1,
//                 ease: "linear",
//               }}
//               style={{
//                 clipPath: "polygon(70% 0%, 100% 0%, 100% 100%, 70% 100%)", // 30% arc on the opposite side
//               }}
//             />
//
//             {/* Centered SVG */}
//             <Image
//               src={teethLogo}
//               alt="Loading Logo"
//               className="p-4 w-[15vw] h-[15vw] min-w-[80px] min-h-[80px]"
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </>
//   );
// };
//
// export default LoadingScreen;

// app/components/LoadingScreen.tsx
"use client"; // Client component

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import teeth from "@/../public/Loader.svg"; // Update with the correct path to your SVG logo

const LoadingScreen: React.FC = () => {
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [contentOpacity, setContentOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundOpacity(0); // Fade out background

      // After fading out background, fade out content
      setTimeout(() => {
        setContentOpacity(0);
      }, 300); // Adjust based on desired timing
    }, 3000); // Simulated loading time

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center w-screen h-screen bg-[#5e5eee] relative overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: backgroundOpacity }} // Animate background
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute flex justify-center items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: contentOpacity }} // Animate content
        transition={{ duration: 0.5 }}
      >
        {/* First rotating arc */}
        <motion.div
          className="absolute border-[0.5px] border-white rounded-full w-[20vw] h-[20vw] min-w-[100px] min-h-[100px]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          style={{
            clipPath: "polygon(0% 0%, 20% 0%, 20% 100%, 0% 100%)",
          }}
        />

        {/* Second rotating arc */}
        <motion.div
          className="absolute border-[0.5px] border-white rounded-full w-[20vw] h-[20vw] min-w-[100px] min-h-[100px]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          style={{
            clipPath: "polygon(70% 0%, 100% 0%, 100% 100%, 70% 100%)",
          }}
        />

        {/* Centered SVG */}
        <Image
          src={teeth}
          alt="Loading Logo"
          className="p-4 w-[15vw] h-[15vw] min-w-[80px] min-h-[80px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
