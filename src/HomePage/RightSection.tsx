import HomePageImg from "@/animation/HomePageImg";
import HomePageStar from "@/animation/HomePageStar";
export default function RightSection() {
  return (
    <div className=" relative flex justify-center xl:justify-end ">
      <HomePageImg />
      <HomePageStar />
    </div>
  );
}
