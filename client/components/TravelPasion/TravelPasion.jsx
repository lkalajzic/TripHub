import cardList from '../../constants/TravelCards';
import Card from './Cards';

const TravelPasion = () => {
  return (
    <div className='mx-auto h-[1630px] max-w-[270px] md:h-[920px] md:max-w-[585px] lg:h-[600px] lg:max-w-[1170px]'>
      <div className='relative w-[270px] transform justify-center md:justify-start'>
        <h2 className='font-dm-sans leading h-auto text-[48px] font-bold tracking-tighter text-c1'>
          Travel Your Passion
        </h2>
        <div className='font-dm-sans order-1 w-auto flex-shrink-0 flex-grow-0 text-[16px] font-normal leading-[24px] text-[#84878B]'>
          Most Brilliant reasons TripHub should be your one-stop-shop!
        </div>
      </div>

      <div className='absolute grid grid-cols-1 gap-[30px] py-[20px] md:grid-cols-2 lg:grid-cols-4'>
        {cardList.map(({ title, text, city, img }) => (
          <Card
            key={title}
            outerWidth='270px'
            outerHeight='324px'
            innerWidth='30px'
            innerHeight='30px'
            textSize='34px'
            smallTextSize='16px'
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
