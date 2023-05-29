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
  city,
  img,
  cityOff,
}) => {
  return (
    <div
      className='hover:shadow-opacity-50 hover:shadow-offset-2 hover:shadow-offset-c00 over:opacity-90 relative flex h-full w-full cursor-pointer rounded-[15px] transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-c3'
      style={{ width: outerWidth, height: outerHeight }}
    >
      <Image
        className='h-full w-full rounded-[15px] object-cover shadow-xl'
        src={img}
        alt='Picture'
        width={370}
        height={495}
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
        <div className='flex h-[48px] w-[114px] items-center justify-center rounded-full bg-[#141416] opacity-20' />

        <span
          className='font-dm-sans absolute py-[10px] text-[18px] font-bold text-[#FFFFFF]'
          style={{ left: cityOff }}
        >
          {city}
        </span>
        <div
          className='absolute bottom-0 left-0 w-full'
          style={{ bottom: textSize }}
        >
          <span
            className='font-dm-sans font-bold text-white'
            style={{ fontSize: textSize }}
          >
            {topText}
          </span>
        </div>
        <div className='absolute bottom-0 left-0 w-full'>
          <span
            className='font-dm-sans text-white opacity-90'
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
