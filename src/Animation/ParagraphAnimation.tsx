// "use client";
// import { motion, useInView } from "framer-motion";
// import React, { useRef } from "react";
// export default function ParagraphAnimation() {
//   const text = "Hey there this is the aniamtion test"; // Random 10-letter string
//   const splittedText = text.split("");
//
//   const pullupVariant = {
//     initial: { y: 10, opacity: 0, filter: "blur(10px)" },
//     animate: (i: number) => ({
//       y: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: {
//         delay: i * 0.05,
//       },
//     }),
//   };
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true });
//
//   return (
//     <div className="flex justify-center">
//       {splittedText.map((current, i) => (
//         <motion.div
//           key={i}
//           ref={ref}
//           variants={pullupVariant}
//           initial="initial"
//           animate={isInView ? "animate" : ""}
//           custom={i}
//           className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
//         >
//           {current === " " ? <span>&nbsp;</span> : current}
//         </motion.div>
//       ))}
//     </div>
//   );
// }
//
//
//
//
//
// "use client";
// import { motion, useInView } from "framer-motion";
// import React, { useRef } from "react";
//
// export default function ParagraphAnimation() {
//   const text = "Hey there this is the animation test"; // Random 10-letter string
//   const splittedText = text.split("");
//
//   const pullupVariant = {
//     initial: { y: 10, x: 40, opacity: 0, filter: "blur(5px)" },
//     animate: (i: number) => ({
//       y: 0,
//       x: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: {
//         delay: i * 0.03,
//         duration: 0.5, // Adjust duration as needed
//       },
//     }),
//   };
//
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { once: true });
//
//   return (
//     <div className="flex justify-center flex-wrap p-24">
//       {splittedText.map((current, i) => (
//         <motion.div
//           key={i}
//           ref={ref}
//           variants={pullupVariant}
//           initial="initial"
//           animate={isInView ? "animate" : ""}
//           custom={i}
//           className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
//         >
//           {current === " " ? <span>&nbsp;</span> : current}
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// "use client";
// import { motion, useInView } from "framer-motion";
// import React, { useRef } from "react";
//
// export default function ParagraphAnimation() {
//   const text = "Hey there this is the animation test"; // Sample text
//   const splittedText = text.split(""); // Split the text into individual characters
//
//   const pullupVariant = {
//     initial: { y: 10, x: 40, opacity: 0, filter: "blur(5px)" },
//     animate: (i: number) => ({
//       y: 0,
//       x: [40, 0, 0], // Bounce effect keyframes: right to left to center
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: {
//         delay: i * 0.05, // Stagger each character
//         duration: 0.5, // Duration of the movement
//         ease: "easeOut", // Smooth easing for the bounce effect
//       },
//     }),
//   };
//
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { once: true });
//
//   return (
//     <div className="flex justify-center flex-wrap p-24">
//       {splittedText.map((current, i) => (
//         <motion.div
//           key={i}
//           ref={ref}
//           variants={pullupVariant}
//           initial="initial"
//           animate={isInView ? "animate" : ""}
//           custom={i}
//           className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
//         >
//           {current === " " ? <span>&nbsp;</span> : current}
//         </motion.div>
//       ))}
//     </div>
//   );
// }
// "use client";
// import { motion, useInView } from "framer-motion";
// import React, { useRef } from "react";
//
// // Function to animate text with a bounce-back effect
// const AnimatedText = ({ children }: { children: React.ReactNode }) => {
//   const text = children.toString(); // Convert children to string
//   const splittedText = text.split(""); // Split the text into individual characters
//
//   const pullupVariant = {
//     initial: { y: 10, x: 40, opacity: 0, filter: "blur(5px)" },
//     animate: (i: number) => ({
//       y: 0,
//       x: [40, 0, 0], // Bounce effect keyframes: right to left to center
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: {
//         delay: i * 0.05, // Stagger each character
//         duration: 0.5, // Duration of the movement
//         ease: "easeOut", // Smooth easing for the bounce effect
//       },
//     }),
//   };
//
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { once: true });
//
//   return (
//     <div className="flex justify-center flex-wrap">
//       {splittedText.map((current, i) => (
//         <motion.div
//           key={i}
//           ref={ref}
//           variants={pullupVariant}
//           initial="initial"
//           animate={isInView ? "animate" : ""}
//           custom={i}
//           className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
//         >
//           {current === " " ? <span>&nbsp;</span> : current}
//         </motion.div>
//       ))}
//     </div>
//   );
// };
//
// export default AnimatedText;
"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

// Define the props type, making sure 'children' is included as a required prop
type AnimatedTextProps = {
  children: React.ReactNode; // Ensures that the children prop is passed and of type React.ReactNode
};

// Function to animate text with a bounce-back effect
const AnimatedText: React.FC<AnimatedTextProps> = ({ children }) => {
  const text = children.toString(); // Convert children to string (in case it's not a string)
  const splittedText = text.split(""); // Split the text into individual characters

  const pullupVariant = {
    initial: { y: 10, x: 40, opacity: 0, filter: "blur(5px)" },
    animate: (i: number) => ({
      y: 0,
      x: [40, 0, 0], // Bounce effect keyframes: right to left to center
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.05, // Stagger each character
        duration: 0.5, // Duration of the movement
        ease: "easeOut", // Smooth easing for the bounce effect
      },
    }),
  };

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-wrap">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className="text-xl  sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
        >
          {current === " " ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedText;
