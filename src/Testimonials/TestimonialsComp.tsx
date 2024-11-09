import Image from "next/image";
import quote from "@/../public/quote.svg";
import whitearrow from "@/../public/WhieArrowSvg.svg";
export default function TestimonialsComp() {
  return (
    <div className="flex flex-col gap-4 font-plusJakarta p-4  bg-white rounded-3xl shadow-2xl ">
      <div>
        <Image src={quote} alt="exclamation" />
      </div>
      <p className="font-bold text-md lg:text-xl text-gray-500 ">
        Dr.Rushikesh and the team were amazing! From the moment I walked in, I
        felt at ease. The care and attention to detail were outstanding. My
        smile has never looked better! I&apos;ve always been nervous about
        visiting the dentist, but the staff here made me feel so comfortable.
        They explained everything clearly and made sure I was okay throughout
        the procedure. The best dental experience I&apos;ve ever had! The
        hygienists are gentle.
      </p>
      <div className="flex   justify-between items-center xs:flex-col">
        <div>
          <Image
            src={quote}
            alt="user"
            className="bg-gray-300 p-2 h-12 w-12  rounded-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="justify-center items-center">
            <p className="font-bold text-sm lg:text-xl">Krushna Gutte </p>
            <p className="text-sm lg:text-lg">Software Engineer</p>
          </div>
        </div>
        <div className="flex gap-6 lg:justify-end lg:items-end">
          <div className="h-10 w-10  bg-[#5e5eee] rounded-lg">
            <Image src={whitearrow} alt="arrow" className="p-2" />
          </div>
          <div className="h-10 w-10 bg-[#5e5eee] rounded-lg">
            <Image src={whitearrow} alt="arrow" className="p-2 rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
}
