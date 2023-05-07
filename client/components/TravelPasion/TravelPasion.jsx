import cardList from '../../constants/TravelCards';
import Card from './Cards';

const TravelPasion = () => {
  return (
    <div className="mx-auto lg:max-w-[1170px] md:max-w-[585px] sm:max-w-[270px] lg:h-[560px] md:h-[900px] sm:h-[1600px]">
      <div className="relative w-[1014px] transform top-[0%] bottom-[30px]">
        <h2 className="font-bold h-[82px] font-dm-sans text-[48px] leading tracking-tighter text-c1">
          Travel Your Passion
        </h2>
        <div className="w-[1014px] font-normal font-dm-sans text-[16px] leading-[24px] text-[#84878B] flex-shrink-0 order-1 flex-grow-0">
          Most Brilliant reasons TripHub should be your one-stop-shop!
        </div>
      </div>

      <div className="grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 absolute py-[20px]">
        {cardList.map(({ title, text, city, img }) => (
          <Card
            key={title}
            outerWidth="270px"
            outerHeight="324px"
            innerWidth="30px"
            innerHeight="30px"
            textSize="34px"
            smallTextSize="16px"
            topText={title}
            bottomText={text}
            city={city}
            img={img}
          />
        ))}
      </div>
    </div>
  );
};

export default TravelPasion;
