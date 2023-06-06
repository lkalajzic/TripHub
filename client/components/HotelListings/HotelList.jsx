import React from 'react';
import HotelCard from './HotelCard';

const HotelList = () => {
  return (
    <>
      <div className='flex flex-col flex-start gap-[240px] lg:gap-0 mb-[200px] lg:mb-5 mx-auto'>
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>
    </>
  );
};

export default HotelList;
