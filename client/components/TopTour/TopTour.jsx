import React from 'react';
import Card from './Cards';
import cardList from '../../constants/TopTourCards';

const TopTour = () => {
  return (
    <div className='mx-auto h-[1700px] max-w-[370px]  md:h-[1190px] md:max-w-[770px] lg:h-[700px] lg:max-w-[1170px]'>
      <div className='relative bottom-[30px] top-[0%] w-[1014px] transform sm:justify-center'>
        <h2 className='font-dm-sans leading h-[82px] text-[48px] font-bold tracking-tighter text-c1'>
          Top Tour
        </h2>
        <div className='font-dm-sans w-[1014px] flex-grow-0 text-[16px] font-normal leading-[24px] text-[#84878B]'>
          Keep calm and travel on
        </div>
      </div>

      <div className='grid w-full grid-cols-1 gap-6 py-[20px] md:grid-cols-2 lg:grid-cols-3'>
        {cardList.map((cardInfo) => (
          <Card
            outerWidth='370px'
            outerHeight='495px'
            innerWidth='30px'
            innerHeight='30px'
            textSize='34px'
            smallTextSize='16px'
            topText={cardInfo.title}
            bottomText={cardInfo.text}
            city={cardInfo.city}
            img={cardInfo.img}
            cityOff={cardInfo.titleOffset}
            key={cardInfo.title}
          />
        ))}
      </div>
    </div>
  );
};

export default TopTour;
