import cardList from '../../constants/EWCards';
import { FaStar, FaMapPin, FaBuilding } from 'react-icons/fa';

const EW_Cards = () => {
  return (
    <>
      <div className='relative z-10 grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-4'>
        {cardList.map((card) => (
          <div
            className='hover:shadow-opacity-50 hover:shadow-offset-2 hover:shadow-offset-c00 over:opacity-90 relative z-20 scale-110 
            cursor-pointer rounded-3xl bg-white shadow-xl transition-all duration-200 
            ease-in-out hover:z-30 hover:scale-150 hover:shadow-2xl hover:shadow-c2'
            key={card.id}
          >
            <img className='rounded-3xl p-3' src={card.img} alt='' />
            <p className='body-16 px-4'>
              <FaStar className='mr-1 inline text-yellow-400' /> {card.rating}{' '}
              <span className='text-c4'>{card.n_rates}</span>
            </p>
            <div className=' relative px-3'>
              <p className='font-bold'>{card.title}</p>
              <a
                role='button'
                href='#'
                className='absolute right-0 top-0 ml-[70%] mr-[5%] rounded-md bg-blue-500 px-2 py-0.5 text-left text-white hover:bg-blue-700'
              >
                {card.price}
              </a>
              <p className='caption-16 mb-2 text-c3'>
                {card.distance} km from city center
              </p>
              <p className='text-lg mb-1 font-normal text-c4'>
                <FaMapPin className='mr-1 inline text-gray-500' />
                {card.location}
              </p>
              <p className='text-lg mb-3 font-normal text-c4'>
                <FaBuilding className='mr-1 inline text-gray-500' />
                {card.text} locations
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EW_Cards;
