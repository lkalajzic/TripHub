'use client';

import cardList from '../../constants/TravelCards';
import Card from "./Cards";


const TravelPasion = () => {
    return (
        <section class ="max-w-[1170px] mx-auto lg:h-[560px] md:h-[900px] sm:h-[1600px]">
            <div class="relative w-[1014px] transform top-[0%] bottom-[30px]">
                <h2 class="font-bold h-[82px] font-dm-sans text-[48px] leading tracking-tighter text-c1">
                    Travel Your Passion
                </h2>
                <div class="w-[1014px] text-[#84878B] font-normal font-dm-sans text-[16px] leading-[24px] flex-shrink-0 order-1 flex-grow-0">
                    Most Brilliant reasons TripHub should be your one-stop-shop!
                </div>
            </div>
            
            <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] absolute py-[20px] ">  
                        {cardList.map((cardInfo) => (
                            <Card 
                                outerWidth="270px" 
                                outerHeight="324px" 
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

export default TravelPasion;