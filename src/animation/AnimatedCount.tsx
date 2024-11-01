"use client";

interface CounterProps {
  target: number;
  duration?: number; // Optional prop to set the duration of the animation
  suffix: string;
}

const AnimatedCount: React.FC<CounterProps> = ({ suffix }) => {
  return (
    <div className="flex">
      <span>Hello</span>
      {suffix ? <div className="">{suffix}</div> : <div></div>}
    </div>
  );
};

export default AnimatedCount;
