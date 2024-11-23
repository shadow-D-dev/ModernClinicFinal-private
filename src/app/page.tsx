import CommitMentComp from "@/Commitment/CommitMent";
import ContactUsMap from "@/ContactUsMap/ContactUsMapContactUsMap";
import Header from "@/Header/Header";
import HomePage from "@/HomePage/HomePage";
import Services from "@/Services/Services";
import Testimonials from "@/Testimonials/Testimonials";
import WhyUs from "@/WhyUs/WhyUs";
import CodeCheckComp from "@/Header/Codecheckcom";
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
      {/* <div className="flex justify-center items-center p-96 bg-gray-400 text-[#5e5eee] font-bold text-6xl"> */}
      {/*   <AnimatedText>{"This is the test for the animation"}</AnimatedText> */}
      {/* </div> */}
      <div className="text-6xl text-[#5e5eee] font-bold p-96 flex justify-center items-center flex-col bg-gray-400">
        <CodeCheckComp delay={0}>{"the text is that "}</CodeCheckComp>
        <CodeCheckComp delay={1}>{"the text is that "}</CodeCheckComp>
      </div>
    </div>
  );
}
