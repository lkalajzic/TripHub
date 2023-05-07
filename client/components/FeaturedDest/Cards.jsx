import React from 'react';
import Image from 'next/image';

const Card = ({
  outerWidth,
  outerHeight,
  innerWidth,
  innerHeight,
  textSize,
  smallTextSize,
  bottomText,
  topText,
  rating,
  img,
}) => {
  return (
    <div
      className="flex relative w-full h-full rounded-[15px] hover:scale-105 transition-all duration-200 ease-in-out hover:shadow-2xl hover:shadow-c3 hover:shadow-opacity-50 hover:shadow-offset-2 hover:shadow-offset-c00 cursor-pointer over:opacity-90"
      style={{ width: outerWidth, height: outerHeight }}
    >
      <Image
        className="w-full h-full object-cover rounded-[15px]"
        src={img}
        alt="Picture"
      />
      <div
        className="absolute flex"
        style={{ left: innerWidth, top: innerHeight, right: innerWidth, bottom: innerHeight }}
      >
        <div className="w-[65px] h-[28px] rounded-full bg-white flex items-center justify-center">
          <span className="text-[#FF543D] font-bold font-dm-sans text-[18px]">
            {rating}
          </span>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{ bottom: textSize }}
        >
          <span
            className={`text-white font-bold font-dm-sans`}
            style={{ fontSize: textSize }}
          >
            {topText}
          </span>
        </div>
        <div className="absolute left-0 w-full bottom-0">
          <span
            className={`text-white font-dm-sans`}
            style={{ fontSize: smallTextSize }}
          >
            {bottomText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
