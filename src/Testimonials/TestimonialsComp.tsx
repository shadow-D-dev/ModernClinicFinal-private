import Image from "next/image";
import quote from "@/../Public/quote.svg";
import arrow from "@/../public/WhieArrowSvg.svg";
export default function TestimonialsComp() {
  return (
    <div className="flex flex-col gap-4 font-plusJakarta p-4">
      <div>
        <Image src={quote} alt="exclamation" />
      </div>
      <p className="font-bold text-md xl:text-2xl text-gray-500 p-2">
        Dr.Rushikesh and the team were amazing! From the moment I walked in, I
        felt at ease. The care and attention to detail were outstanding. My
        smile has never looked better! I&apos;ve always been nervous about
        visiting the dentist, but the staff here made me feel so comfortable.
        They explained everything clearly and made sure I was okay throughout
        the procedure. The best dental experience I&apos;ve ever had! The
        hygienists are gentle.
      </p>
      <div className="flex gap-4 xl:gap-16 items-center flex-1">
        <div>
          <Image
            src={quote}
            alt="user"
            className="bg-gray-300 p-2 h-12 w-12 xl:h-16 xl:w-16 rounded-full"
          />
        </div>
        <div className="flex flex-col xl:flex-row">
          <div>
            <p className="font-bold text-sm xl:text-xl">Krushna Gutte </p>
            <p className="text-sm xl:text-lg">Software Engineer</p>
          </div>
        </div>
        <div className="flex gap-6 xl:justify-end xl:items-end">
          <div className="h-10 w-10 xl:h-12 xl:w-12 bg-[#5e5eee] rounded-lg">
            <Image src={arrow} alt="arrow" className="p-2" />
          </div>
          <div className="h-10 w-10 xl:h-12 xl:w-12 bg-[#5e5eee] rounded-lg">
            <Image src={arrow} alt="arrow" className="p-2 rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
}
