import React from 'react';

const SmrButton = ({ text, color = 'bg-yellow-400', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} text-black text-[1.667vw] sm:text-base py-6 px-6 border-2 border-black rounded-full transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
    >
      {text}
    </button>
  );
};

export default SmrButton;