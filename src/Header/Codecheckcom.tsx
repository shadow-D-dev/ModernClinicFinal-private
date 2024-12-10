import SlideUpAnimation from "@/Animation/SlideUpAnimation";
import AnimatedText from "@/Animation/ParagraphAnimation";
const CodeCheckComp = () => {
  const text =
    "Experience top-quality dental care focused on your smile's health and beauty. Trust us to create a brighter, healthier tomorrow.";
  const words = text.split(" "); // Split the text into individual words
  return (
    <div className="p-96 flex justify-center items-center flex-col bg-gray-700 gap-24">
      <SlideUpAnimation>
        <div className="text-5xl">Hello</div>
      </SlideUpAnimation>
      <div className="text-5xl">
        <AnimatedText>Hello</AnimatedText>
      </div>
      <div className="flex flex-wrap gap-2">
        {" "}
        {/* Ensures words wrap properly */}
        {words.map((word, index) => (
          <div
            key={index}
            className="inline-block" // Ensures each word is treated as a single block
          >
            <SlideUpAnimation delay={index * 0.2}>{word}</SlideUpAnimation>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CodeCheckComp;
