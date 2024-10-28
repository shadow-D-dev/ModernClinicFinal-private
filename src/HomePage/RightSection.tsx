import Image from "next/image";
import image from "@/../public/HomePageTreatment.jpg";
import star from "@/../public/Star.svg";
export default function RightSection() {
  return (
    <div className=" relative flex justify-center lg:justify-end ">
      <div className="lg:mr-10">
        <Image
          src={image}
          alt="treatment image"
          className=" relative rounded-[40px] h-96 w-96 lg:h-[670px] lg:w-[630px] "
        />
      </div>
      <div className="absolute   bg-white -bottom-16 md:bottom-32 left-16 md:left-8 w-[280px] p-4 md:p-6 rounded-3xl  text-black ">
        <div className="flex justify-start gap-2">
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
        </div>
        <p className="text-md md:text-xl pt-2   font-plusJakarta font-bold">
          Best Services & 5 Star
        </p>
        <p className="text-md md:text-xl font-plusJakarta">
          Hospitals are crucial institutions in our society
        </p>
      </div>
    </div>
  );
}
