import React from "react";
import Dots from "../../svg/dots.svg";
import Image from "next/image";

const Square = () => {
  return (
    <div className="bg-pink-200 border-white  mb-10 py-10 relative  leading-tight border-[12px] shadow-xl	md:aspect-square pl-[4vw]" id="about">
      {/* Decorative dots */}
      <div className="absolute z-20 w-[11.5vw] md:w-[3.5vw] top-3 right-3">
        <Image
          src={Dots}
          alt="decorative dots"
          className="w-[11.5vw] md:w-[3.5vw]"
          aria-hidden="true"
        />
      </div>

      {/* Main heading */}
      <h1 className="text-[18vw] md:text-[5.8vw] font-display tracking-tight w-[115%] leading-black text-black">
        We’re
        <br /> Social Media Relations
      </h1>

      {/* Subtext */}
      <p className="pt-6 text-xl md:text-[1.5vw] text-black">
        But you can call us SMR.
      </p>
    </div>
  );
};

export default Square;
