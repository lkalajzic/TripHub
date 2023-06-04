import cardList from '../../constants/EWCards';
import { FaStar, FaMapPin, FaBuilding } from 'react-icons/fa';

const EW_Cards = () => {
  return (
    <>
      <div className='relative z-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-9'>
        {cardList.map((card) => (
          <div
            className='bg-white shadow-xl rounded-3xl scale-110 hover:scale-150 transition-all duration-200 
            ease-in-out hover:shadow-2xl hover:shadow-c2 hover:shadow-opacity-50 hover:shadow-offset-2 hover:shadow-offset-c00 
            cursor-pointer over:opacity-90 relative z-20 hover:z-30'
            key={card.id}
          >
            <img className='rounded-3xl p-3' src={card.img} alt='' />
            <p className='px-4 body-16'>
              <FaStar className='inline text-yellow-400 mr-1' /> {card.rating}{' '}
              <span className='text-c4'>{card.n_rates}</span>
            </p>
            <div className=' px-3 relative'>
              <p className='font-bold'>{card.title}</p>
              <a
                  role='button'
                  href='#'
                  className='right-0 top-0 absolute text-left text-white bg-blue-500 px-2 py-0.5 rounded-md hover:bg-blue-700 ml-[70%] mr-[5%]'
                >
                  {card.price}
                </a>
              <p className='caption-16 text-c3 mb-2'>
                {card.distance} km from city center
              </p>
              <p className='text-lg font-normal text-c4 mb-1'>
                <FaMapPin className='inline text-gray-500 mr-1' />
                {card.location}
              </p>
              <p className='text-lg font-normal text-c4 mb-3'>
                <FaBuilding className='inline text-gray-500 mr-1' />
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
