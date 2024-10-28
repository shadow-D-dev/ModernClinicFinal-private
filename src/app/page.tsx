import Header from "@/Header/Header";
import HomePage from "@/HomePage/HomePage";
export default function Home() {
  return (
    <div className="relative">
      {" "}
      {/* made this relative bcoz header animations were not working*/}
      <div className="relative z-10">
        <Header />
      </div>
      <div className="absolute">
        <HomePage />
      </div>
    </div>
  );
}
