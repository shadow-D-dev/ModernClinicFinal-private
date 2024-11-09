import CommitMentComp from "@/Commitment/CommitMent";
import AppointmentComp from "@/Components/AppoitmentComp";
import ContactUsMap from "@/ContactUsMap/ContactUsMapContactUsMap";
import Codecheckcomp from "@/Header/Codecheckcom";
import Header from "@/Header/Header";
import HomePage from "@/HomePage/HomePage";
import Services from "@/Services/Services";
import Testimonials from "@/Testimonials/Testimonials";
import WhyUs from "@/WhyUs/WhyUs";
export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* made this relative bcoz header animations were not working*/}
      <div>
        <Header />
      </div>
      <div className="">
        <HomePage />
      </div>
      <div>
        <CommitMentComp />
      </div>
      <div className="">
        <Services />
      </div>
      <div>
        <WhyUs />
      </div>
      <div className="">
        <Testimonials />
      </div>
      {/* <div className="relative xl:-top-[390px] top-28 "> */}
      {/*   <ContactUsMap /> */}
      {/* </div> */}
    </div>
  );
}
