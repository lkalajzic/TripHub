'use client';

import cardList from '../../constants/TopTourCards';
import Card from "./Cards";

const TopTour = () => {
    return (
        <section class ="max-w-[1170px] md:max-w-[770px] sm:max-w-[370px] mx-auto py-36 lg:h-[700px] md:h-[1200px] sm:h-[1730px]">
            <div class="relative w-[1014px] transform top-[0%] bottom-[30px] sm:justify-center">
                <h2 class="font-bold h-[82px] font-dm-sans text-[48px] leading tracking-tighter text-c1">
                    Top Tour
                </h2>
                <div class="w-[1014px] text-[#84878B] font-normal font-dm-sans text-[16px] leading-[24px] flex-shrink-0 order-1 flex-grow-0">
                    Keep calm and Travel on
                </div>
            </div>
            
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] absolute py-[20px] ">  
                        {cardList.map((cardInfo) => (
                            <Card 
                                outerWidth="370px" 
                                outerHeight="495px" 
                                innerWidth="30px" 
                                innerHeight="30px" 
                                textSize="34px" 
                                smallTextSize="16px" 
                                topText={cardInfo.title}
                                bottomText={cardInfo.text}
                                city={cardInfo.city} 
                                img={cardInfo.img}
                                cityOff={cardInfo.titleOffset}/>
                            
                        ))}    
                


            </div>
        </section>
    )
};

export default TopTour;