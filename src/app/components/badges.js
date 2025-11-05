import React from "react";
import "../globals.css";
const Badges = () => {
  const badgesOfHonor = [
    { title: "Designrush", award: "Accredited Agency", year: "2021" },
    { title: "Upcity", award: "Best of Creative Design", year: "Winner 2021" },
    { title: "Upcity", award: "Best of Marketing & Advertising", year: "Winner 2021" },
    { title: "Clutch Los Angeles", award: "Top Advertising & Marketing Agencies", year: "2021" },
    { title: "Hispanic Star", award: "", year: "" },
  ];

  return (
    <div className="py-6 md:py-12 border-y-[20px] border-black text-white bg-pink-600" id="badges">
      {/* Desktop heading */}
      <h2 className="hidden md:block text-center text-[8.611vw] tracking-tight font-display w-full mb-6">
        Our Badges of Honor
      </h2>

      {/* Mobile heading */}
      <h2 className="md:hidden px-6 text-[19.211vw] tracking-tight leading-tight font-display w-full mb-6">
        Our <br />
        Badges of <br />
        Honor
      </h2>

      <div className="px-6 md:text-center flex flex-col  md:justify-center md:gap-6">
        {badgesOfHonor.map((badge, i) => (
          <div
            key={i}
            className="mb-3 md:mb-0 text-[5.211vw] md:text-[2.211vw] leading-tight"
          >
            {badge.title}
            {badge.award && ` — ${badge.award}`}
            {badge.year && ` (${badge.year})`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
