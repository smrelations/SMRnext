import React from "react";
import Marquee from "./marquees/marquee";

const marqueeTexts = [
  { text: "We know your audience. We know where they are. We know how to talk to them.", reverse: false },
  { text: "We know your audience. We know where they are. We know how to talk to them.", reverse: true },
  { text: "We know your audience. We know where they are. We know how to talk to them.", reverse: false },
];

const Marquees = () => {
  return (
    <div className="mt-20 mb-10 space-y-4">
      {marqueeTexts.map(({ text, reverse }, index) => (
        <Marquee key={index} text={text} reverse={reverse} />
      ))}
    </div>
  );
};

export default Marquees;
