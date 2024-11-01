import CommitMentComp from "@/Commitment/CommitMent";
import AppointmentComp from "@/Components/AppoitmentComp";
import ContactUsMap from "@/ContactUsMap/ContactUsMapContactUsMap";
import Header from "@/Header/Header";
import HomePage from "@/HomePage/HomePage";
import Services from "@/Services/Services";
import Testimonials from "@/Testimonials/Testimonials";
import WhyUs from "@/WhyUs/WhyUs";
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
      <div>
        <WhyUs />
      </div>
      <div className="relative -top-72">
        <Testimonials />
      </div>
      <div className="relative xl:-top-[390px] top-28 ">
        <ContactUsMap />
      </div>
    </div>
  );
}
