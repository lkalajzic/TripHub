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
      className='hover:shadow-opacity-50 hover:shadow-offset-2 hover:shadow-offset-c00 over:opacity-90 relative cursor-pointer rounded-[15px] transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-c3'
      style={{ width: outerWidth, height: outerHeight }}
    >
      <Image
        className='h-full w-full rounded-[15px] object-cover'
        src={img}
        alt='Picture'
      />
      <div
        className='absolute flex'
        style={{
          left: innerWidth,
          top: innerHeight,
          right: innerWidth,
          bottom: innerHeight,
        }}
      >
        <div className='flex h-[28px] w-[65px] items-center justify-center rounded-full bg-white'>
          <span className='font-dm-sans text-[18px] font-bold text-[#FF543D]'>
            {rating}
          </span>
        </div>
        <div
          className='absolute bottom-0 left-0 w-full'
          style={{ bottom: textSize }}
        >
          <span
            className={`font-dm-sans font-bold text-white`}
            style={{ fontSize: textSize }}
          >
            {topText}
          </span>
        </div>
        <div className='absolute bottom-0 left-0 w-full'>
          <span
            className={`font-dm-sans text-white`}
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
