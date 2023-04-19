'use client';

import cardList from '../../constants/TopTourCards';
import Card from "./Cards";

const TopTour = () => {
    return (
        <section class ="container mx-auto py-36 px-8 h-auto">
            <div class="relative w-[1014px] transform top-[0%] bottom-[30px]">
                <h2 class="font-bold h-[82px] font-dm-sans text-[48px] leading tracking-tighter text-c1">
                    Top Tour
                </h2>
                <div class="w-[1014px] text-[#84878B] font-normal font-dm-sans text-[16px] leading-[24px] text-c3 flex-shrink-0 order-1 flex-grow-0">
                    Keep calm and Travel on
                </div>
            </div>
            
            <div class="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 gap-[100px] bg-red-800">  
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
                                img={cardInfo.img}/>
                            
                        ))}    
                


            </div>
        </section>
    )
};

export default TopTour;