import React from "react";
import Image from "next/image";
import Link from "next/link";
import Square from "./weAre/square";

const WeAre = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:pl-[15%] md:-mt-10 relative z-10 scroll-smooth">

      {/* Text Content */}
      <div className="px-5 pb-6 md:w-[51%]">
        <div className="md:w-[83%]">
          <Square />
        </div>
        <p className="text-[11vw] leading-normal mb-6 md:text-[2.4vw] md:pl-[calc(4vw+12px)] xl:mt-10">
          We are the trusted digital partner you need — we take your brand online and help you create digital relationships that matter.
        </p>
        <p className="mb-6 text-xl md:text-[1.389vw] leading-tight xl:mt-10">
          For brands who recognize the importance of winning with new Millennial, Gen Z, Hispanic audiences.
        </p>
      <Link
  href="#contact"
  scroll={false}
  className="block w-full py-4 text-center text-white bg-black border-4 border-black rounded-full 
             md:w-[18vw] md:py-6 md:ml-[calc(4vw+12px)] hover:bg-white hover:text-black xl:mt-12"
>
  Let&apos;s Talk
</Link>

      </div>

      {/* Image */}
      <div className="md:w-[40%] md:mt-64 relative">
        <div className="relative z-20 aspect-[464/940]">
          <Image
            className="absolute w-full h-full z-20"
            src="/images/statue.png"
            alt="Statue representing SMR brand"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute hidden w-full h-full md:block -left-6 top-6 z-10">
            <Image
              className="w-full h-full"
              src="/images/statue-blur.png"
              alt="Blurred background statue"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAre;