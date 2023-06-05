import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

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
}) => {
  return (
    <div
      className='hover:shadow-opacity-50 hover:shadow-offset-2 hover:shadow-offset-c00 over:opacity-90 relative flex h-full w-full cursor-pointer rounded-[15px] transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-c3'
      style={{ width: outerWidth, height: outerHeight }}
    >
      <Image
        className='h-full w-full rounded-[15px] object-cover shadow-xl '
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
            <FaStar className='mr-1 inline-flex text-yellow-400' />
            {bottomText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
