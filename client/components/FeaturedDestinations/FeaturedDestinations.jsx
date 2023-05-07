import React from 'react';
import Image from 'next/image';
import Card from './Cards';
import images from '../../public/ImagesFeat/pictures';

const FeaturedDest = () => {
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="relative w-auto transform top-[0%] bottom-[33.96%]">
        <h2 className="font-bold h-[82px] font-dm-sans text-[48px] leading tracking-tighter text-c1">
          Cool Ideas
        </h2>
        <div className="w-auto font-normal font-dm-sans text-[16px] leading-[24px] text-c3 flex-shrink-0 order-1 flex-grow-0">
          If you&apos;re out of ideas, maybe consider some of the following options
        </div>
      </div>
      <div className="py-[50px] flex gap-[30px] h-[718px] w-[1170px] ">
        <div className="flex flex-col justify-between items-center h-[718px] w-[870px] gap-[30px] ">
          <Card
            img={images[0]}
            outerWidth="870px"
            outerHeight="280px"
            rating={3.6}
            innerHeight="30px"
            innerWidth="30px"
            textSize="40px"
            smallTextSize="20px"
            bottomText={`1120 Activities`}
            topText="Barcelona Tour"
          />
          <div className="flex justify-between w-[870px] h-[408px] gap-[54px] flex-row">
            <Card
              img={images[1]}
              outerWidth="408px"
              outerHeight="408px"
              rating={4.8}
              innerWidth="30px"
              innerHeight="19px"
              textSize="24px"
              smallTextSize="14px"
              bottomText={`53 Activities`}
              topText="London, Big Eye"
            />
            <Card
              img={images[2]}
              outerWidth="408px"
              outerHeight="408px"
              rating={3.3}
              innerWidth="30px"
              innerHeight="19px"
              textSize="24px"
              smallTextSize="14px"
              bottomText={`33 Activities`}
              topText="Zimbabwe"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between h-[718px] w-[270px] gap-[27px]">
          <Card
            img={images[3]}
            outerWidth="270px"
            outerHeight="220px"
            rating={4.9}
            innerWidth="20px"
            innerHeight="15px"
            textSize="18px"
            smallTextSize="10px"
            bottomText={`22 Activities`}
            topText="Soviet Union"
          />
          <Card
            img={images[4]}
            outerWidth="270px"
            outerHeight="220px"
            rating={3.5}
            innerWidth="20px"
            innerHeight="15px"
            textSize="18px"
            smallTextSize="10px"
            bottomText={`21 Activities`}
            topText="Croatia"
          />
          <Card
            img={images[5]}
            outerWidth="270px"
            outerHeight="220px"
            rating={2.2}
            innerWidth="20px"
            innerHeight="15px"
            textSize="18px"
            smallTextSize="10px"
            bottomText={`14 Activities`}
            topText="Dubai"
          />   
        </div>
      </div>
    </div>
    
    
  );
};

export default FeaturedDest;

