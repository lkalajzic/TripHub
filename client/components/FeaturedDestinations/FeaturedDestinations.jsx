'use client';

import Card from './Cards';
import images from '../../public/ImagesFeat/pictures';
import React, { useState, useEffect } from 'react';
const FeaturedDest = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update windowWidth state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='mx-auto h-[1480px] max-w-[1170px] min-[1170px]:h-[930px]'>
      <div className='relative mx-auto w-[400px] justify-center min-[1170px]:w-auto'>
        <h2 className='font-dm-sans leading h-[82px] text-[48px] font-bold tracking-tighter text-c1'>
          Cool Ideas
        </h2>
        <div className='font-dm-sans order-1 w-auto flex-shrink-0 flex-grow-0 text-[16px] font-normal leading-[24px] text-c3'>
          If you're out of ideas, maybe consider some of the following options
        </div>
      </div>
      {windowWidth >= 1170 ? (
        <div className='flex h-[1500px] w-[500px] gap-[30px] py-[50px] md:h-[718px] md:w-[1170px]'>
          <div className='flex h-[718px] w-[870px] flex-col items-center justify-between gap-[30px] '>
            <Card
              img={images[0]}
              outerWidth='870px'
              outerHeight='280px'
              rating={3.6}
              innerHeight='30px'
              innerWidth='30px'
              textSize='40px'
              smallTextSize='20px'
              bottomText={`1120 Activities`}
              topText='Barcelona Tour'
            />
            <div className='flex h-[408px] w-[870px] flex-row justify-between gap-[54px]'>
              <Card
                img={images[1]}
                outerWidth='408px'
                outerHeight='408px'
                rating={4.8}
                innerWidth='30px'
                innerHeight='19px'
                textSize='24px'
                smallTextSize='14px'
                bottomText={`53 Activities`}
                topText='London, Big Eye'
              />
              <Card
                img={images[2]}
                outerWidth='408px'
                outerHeight='408px'
                rating={3.3}
                innerWidth='30px'
                innerHeight='19px'
                textSize='24px'
                smallTextSize='14px'
                bottomText={`33 Activities`}
                topText='Zimbabwe'
              />
            </div>
          </div>
          <div className='flex h-[718px] w-[270px] flex-col justify-between gap-[27px]'>
            <Card
              img={images[3]}
              outerWidth='270px'
              outerHeight='220px'
              rating={4.9}
              innerWidth='20px'
              innerHeight='15px'
              textSize='18px'
              smallTextSize='10px'
              bottomText={`22 Activities`}
              topText='Soviet Union'
            />
            <Card
              img={images[4]}
              outerWidth='270px'
              outerHeight='220px'
              rating={3.5}
              innerWidth='20px'
              innerHeight='15px'
              textSize='18px'
              smallTextSize='10px'
              bottomText={`21 Activities`}
              topText='Croatia'
            />
            <Card
              img={images[5]}
              outerWidth='270px'
              outerHeight='220px'
              rating={2.2}
              innerWidth='20px'
              innerHeight='15px'
              textSize='18px'
              smallTextSize='10px'
              bottomText={`14 Activities`}
              topText='Dubai'
            />
          </div>
        </div>
      ) : (
        <div className='mx-auto flex h-[1500px] w-[400px] flex-col gap-[30px] py-[50px] '>
          <Card
            img={images[5]}
            outerWidth='400px'
            outerHeight='400px'
            rating={2.2}
            innerWidth='20px'
            innerHeight='15px'
            textSize='18px'
            smallTextSize='10px'
            bottomText={`14 Activities`}
            topText='Dubai'
          />
          <Card
            img={images[4]}
            outerWidth='400px'
            outerHeight='400px'
            rating={3.5}
            innerWidth='20px'
            innerHeight='15px'
            textSize='18px'
            smallTextSize='10px'
            bottomText={`21 Activities`}
            topText='Croatia'
          />
          <Card
            img={images[3]}
            outerWidth='400px'
            outerHeight='400px'
            rating={4.9}
            innerWidth='20px'
            innerHeight='15px'
            textSize='18px'
            smallTextSize='10px'
            bottomText={`22 Activities`}
            topText='Soviet Union'
          />
        </div>
      )}
    </div>
  );
};

export default FeaturedDest;
