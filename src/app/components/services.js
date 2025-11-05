import React from "react";
import Arrow from "../svg/arrow.svg";
import Image from "next/image";

const Services = () => {
  const buttonText = [
    { text: "Innovative Digital Brand Evolution", color: "bg-yellow-300" },
    { text: "Brand Voice & Digital Brand Strategy", color: "bg-yellow-300" },
    { text: "Messaging & Positioning", color: "bg-yellow-300" },
    { text: "Consumer driven content (Native)", color: "bg-yellow-300" },
    { text: "Video, Audio, Visual Design", color: "bg-yellow-300" },
    { text: "High Impact Digital Campaigns", color: "bg-yellow-300" },
    { text: "Platform specific marketing campaigns", color: "bg-yellow-300" },
    { text: "Media Buying", color: "bg-yellow-300" },
    { text: "Influencer & Brand Ambassador", color: "bg-yellow-300" },
    { text: "Public Relations", color: "bg-yellow-300" },
  ];

  return (
    <div className="px-6 py-10 md:py-20" id="services">
      {/* Desktop Title */}
      <h2 className="hidden md:block text-center text-[8.611vw] tracking-tight font-display leading-tight mb-12">
        <div>Our Services & What</div>
        <div>We Can Do For You</div>
      </h2>

      {/* Mobile Title */}
      <h2 className="md:hidden text-[19.211vw] tracking-tight font-display leading-tight mb-6">
        Our Services & What We Can Do For You
      </h2>

      {/* Buttons */}
<div className=" md:text-center md:px-20">
  {buttonText.map((e, i) => (
    <button
      key={i}
      className={`${e.color} mb-4 md:mb-6 hover:pr-16 group  items-center justify-center relative  bg-gold inline-block rounded-full md:mx-4  text-black text-[3.467vw] md:text-[1.5vw] z-10 py-6 px-6 border-4 border-black transition-all shadow-[6px_6px] md:shadow-[10px_10px] hover:shadow-[16px_16px] hover:-ml-6`}
    >#{e.text}
      <span className="absolute hidden transition-opacity -translate-y-1/2 opacity-0 group-hover:block group-hover:opacity-100 right-6 top-1/2">
        <Image
          src={Arrow}
          alt="arrow"
          width={20}
          height={20}
          className="w-[20px] h-auto"
          aria-hidden="true"
        />
      </span>
    </button>
  ))}
</div>




    </div>
  );
};

export default Services;
