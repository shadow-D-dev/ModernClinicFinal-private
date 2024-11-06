"use client";
import { motion } from "framer-motion";
import image from "@/../public/HomePageTreatment.jpg";

export default function HomePageImg() {
  return (
    <motion.img
      src={image.src}
      alt="treatment image"
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
      className="rounded-[40px] w-full h-auto lg:w-[385px] lg:h-[431px] xl:w-[540px] xl:h-[604px] object-cover"
      style={{
        width: "clamp(385px, 34vw + 150px, 540px)", // Gradually scales between 385px and 540px
        height: "clamp(431px, 38vw + 120px, 604px)", // Gradually scales between 431px and 604px
      }}
    />
  );
}

// "use client";
// import { motion } from "framer-motion";
// import image from "@/../public/HomePageTreatment.jpg";
//
// export default function HomePageImg() {
//   return (
//     <motion.img
//       src={image.src}
//       alt="treatment image"
//       initial={{ width: "0%" }}
//       animate={{ width: "100%" }}
//       transition={{ duration: 1 }}
//       style={{
//         // Smoothly scale from 385px at md to 540px at xl
//         width: "clamp(385px, 42vw + 150px, 540px)",
//         height: "auto", // Maintain aspect ratio
//       }}
//       className="rounded-[40px] object-cover transition-all duration-300 ease-in-out
//                  lg:max-w-[385px] lg:max-h-[431px] xl:max-w-[540px] xl:max-h-[604px]"
//     />
//   );
// }
