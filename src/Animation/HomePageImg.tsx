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
      className="rounded-[40px] w-full h-auto md:h-[570px] lg:h-[670px] "
    />
  );
}

// "use client";
// import { motion } from "framer-motion";
// import image from "@/../public/HomePageTreatment.jpg";
//
// export default function HomePageImg() {
//   return (
//     <div className="w-full lg:w-auto flex">
//       <motion.img
//         src={image.src}
//         alt="treatment image"
//         initial={{ width: "30%" }}
//         animate={{ width: "100%" }}
//         transition={{ duration: 1 }}
//         className="rounded-[40px] w-full sm:h-auto md:h-[500px] lg:h-[600px] xl:h-[600px] object-cover"
//       />
//     </div>
//   );
// }
