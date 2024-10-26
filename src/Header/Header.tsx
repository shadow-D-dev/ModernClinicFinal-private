import DirectArrow from "../../Components/DirectArrow";
import arrow from "@/../public/Violte-Arrow.svg";
export default function Header() {
  return (
    <div className="flex justify-evenly items-center bg-white text-black p-10">
      <div className="flex-1">Logo</div>
      <div className="flex-1">Pages</div>
      <div className=" flex-1">
        <DirectArrow
          text={"Book Appointment"}
          alt={"arrowComp"}
          arrow={arrow}
        />
      </div>
    </div>
  );
}
