import React from "react";

const Bio = () => {
  return (
    <section className="px-6 md:px-8 bg-black py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
          
          {/* Image */}
          <div className="w-full max-w-xs md:w-1/4">
            <img 
              src="../images/bio.png" 
              alt="Melissa Rodriguez, Founder of SMR" 
              width={400} // adjust width
              height={400} // adjust height
              className="rounded-xl shadow-lg"
            />
          </div>
          
          {/* Text */}
          <div className="w-full text-center text-white md:text-left md:w-2/3">
            <p className="text-2xl md:text-3xl leading-relaxed font-light">
              “We are an international, multi-lingual collective of bold thinkers 
              and creative problem solvers. We move fast, and we’re always 
              looking ahead.”
            </p>
            <p className="mt-4 text-xl md:text-2xl font-display text-gray-300">
              — Melissa Rodriguez, Founder
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bio;
