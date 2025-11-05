import React from 'react';

const OpeningVideo = () => {
   return (
      <div className="w-full h-screen md:aspect-video relative">
         <video
            src="../../video/smr.mp4"
            className="w-full h-full absolute object-cover"
            playsInline
            loop
            autoPlay
            muted
            preload="auto"
         />
      </div>
   );
};

export default OpeningVideo;
