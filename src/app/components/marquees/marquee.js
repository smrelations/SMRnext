"use client";

import React, { useState, useEffect, useRef } from "react";

const Marquee = ({ reverse = false, text }) => {
  const marqueeRef = useRef(null);
  const [textString, setTextString] = useState(text);

  const generateString = () => {
    if (marqueeRef.current) {
      const initW = marqueeRef.current.offsetWidth;
      if (initW) {
        const iterations = Math.ceil(window.innerWidth / initW) * 2;
        let finalText = "";
        for (let i = 0; i < iterations; i++) {
          finalText += `${text} `;
        }
        setTextString(finalText);
      }
    }
  };

  useEffect(() => {
    generateString();
    window.addEventListener("resize", generateString);
    return () => window.removeEventListener("resize", generateString);
  }, [text]);

  return (
    <div className="w-full overflow-hidden text-xs font-bold uppercase">
      <div
        ref={marqueeRef}
        aria-hidden="true"
        className={`whitespace-nowrap inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#f499e8] via-[#babff1] to-[#53d8f7]`}
        style={{
          animation: reverse
            ? "ticker-reverse 30s linear infinite"
            : "ticker 30s linear infinite",
        }}
      >
        {textString}
      </div>
    </div>
  );
};

export default Marquee;
