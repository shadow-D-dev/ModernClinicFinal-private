import CommitMentComp from "@/Commitment/CommitMent";
import AppointmentComp from "@/Components/AppoitmentComp";
import Header from "@/Header/Header";
import HomePage from "@/HomePage/HomePage";
import Services from "@/Services/Services";
export default function Home() {
  return (
    <div className="relative">
      {" "}
      {/* made this relative bcoz header animations were not working*/}
      <div className="relative z-10">
        <Header />
      </div>
      <div className="">
        <HomePage />
      </div>
      <div className="">
        <AppointmentComp />
      </div>
      <div>
        <CommitMentComp />
      </div>
      <div className="">
        <Services />
      </div>
    </div>
  );
}
