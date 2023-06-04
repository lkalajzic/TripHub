import React from 'react';
import HotelCard from './HotelCard';

const HotelList = () => {
  return (
    <>
      <div className='flex flex-col flex-start gap-[220px] md:gap-0 mb-32'>
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>
    </>
  );
};

export default HotelList;
