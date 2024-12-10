import CommitMentComp from "@/Commitment/CommitMent";
import ContactUsMap from "@/ContactUsMap/ContactUsMapContactUsMap";
import Header from "@/Header/Header";
import HomePage from "@/HomePage/HomePage";
import Services from "@/Services/Services";
import Testimonials from "@/Testimonials/Testimonials";
import WhyUs from "@/WhyUs/WhyUs";
import CodeCheckComp from "@/Header/Codecheckcom";
import AnimatedText from "@/Animation/ParagraphAnimation";
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
      <div className="">
        <ContactUsMap />
      </div>
      <div>
        <CodeCheckComp />
      </div>
    </div>
  );
}
