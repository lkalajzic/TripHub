import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const Card = ({ outerWidth, outerHeight, innerWidth, innerHeight, textSize, smallTextSize, bottomText, topText, city, img }) => {
  return (
    <div className="flex relative w-full h-full rounded-[15px] hover:scale-105 transition-all duration-200 ease-in-out hover:shadow-2xl hover:shadow-c3 hover:shadow-opacity-50 hover:shadow-offset-2 hover:shadow-offset-c00 cursor-pointer over:opacity-90" style={{ width: outerWidth, height: outerHeight }}>
      <Image className="w-full h-full object-cover rounded-[15px] shadow-xl " src={img} alt="Picture" width={370} height={495} />
      <div className="absolute flex" style={{ left: innerWidth, top: innerHeight, right: innerWidth, bottom: innerHeight }}>
        <div className="absolute bottom-0 left-0 w-full" style={{ bottom: textSize }}>
          <span className="text-white font-bold font-dm-sans" style={{ fontSize: textSize }}>
            {topText}
          </span>
        </div>
        <div className="absolute left-0 w-full bottom-0">
          <span className="text-white font-dm-sans opacity-90" style={{ fontSize: smallTextSize }}>
            <FaStar className="inline-flex text-yellow-400 mr-1" />
            {bottomText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
