'use client';


import Card from "./Cards";
import {genRand} from "../../utils"
import images from "../../public/ImagesFeat/pictures"

const FeaturedDest = () => {
  return (
    <section class ="container mx-auto py-36 px-8 h-auto">
        <div class="relative w-[1014px] left-[135px] transform top-[0%] bottom-[33.96%]">
            <h2 class="font-bold h-[82px] font-dm-sans text-[48px] leading tracking-tighter text-c1">
                Cool Ideas
            </h2>
            <div class="w-[1014px] font-normal font-dm-sans text-[16px] leading-[24px] text-c3 flex-shrink-0 order-1 flex-grow-0">
                If you're out of ideas, maybe consider some of the following options
            </div>
        </div>
        <div class="py-[50px] px-[135px] flex gap-[30px] h-[718px] w-[1170px] ">
            <div class="flex flex-col justify-between items-center h-[718px] w-[870px] gap-[30px] ">
                <Card img={images[0]} outerWidth="870px" outerHeight="280px" rating={genRand(1, 5, 2)} innerTop="30px" innerLeft="30px" textSize="40px" smallTextSize="20px" numberActiv={genRand(1, 100, 0)} topText="Barcelona Tour"/>
                <div class="flex justify-between w-[870px] h-[408px] gap-[54px] flex-row">
                    <Card img={images[1]} outerWidth="408px" outerHeight="408px" rating={genRand(1, 5, 2)} innerLeft="30px" innerTop="19px" textSize="24px" smallTextSize="14px" numberActiv={genRand(1, 100, 0)} topText="London, Big Eye"/>
                    <Card img={images[2]} outerWidth="408px" imgSrc="" outerHeight="408px" rating={genRand(1, 5, 2)} innerLeft="30px" innerTop="19px" textSize="24px" smallTextSize="14px" numberActiv={genRand(1, 100, 0)} topText="Dentist apointment"/>
                </div>
            </div>
            <div class="flex flex-col justify-between h-[718px] w-[270px] gap-[27px]">
                <Card img={images[3]} outerWidth="270px" outerHeight="220px" rating={genRand(1, 5, 2)} innerLeft="20px" innerTop="15px" textSize="18px" smallTextSize="10px" numberActiv={genRand(1, 100, 0)} topText="Check out this badboy"/>
                <Card img={images[4]} outerWidth="270px" outerHeight="220px" rating={genRand(1, 5, 2)} innerLeft="20px" innerTop="15px" textSize="18px" smallTextSize="10px" numberActiv={genRand(1, 100, 0)} topText="This will be so much work to setup properly"/>
                <Card img={images[5]} outerWidth="270px" outerHeight="220px" rating={genRand(1, 5, 2)} innerLeft="20px" innerTop="15px" textSize="18px" smallTextSize="10px" numberActiv={genRand(1, 100, 0)} topText="Dubai"/>
            </div>
        </div>
    </section>
    
    
  );
};

export default FeaturedDest;

