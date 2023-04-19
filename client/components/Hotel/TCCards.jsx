import cardList from '../../constants/TCCards';
import { FaStar, FaMapPin, FaBuilding } from 'react-icons/fa';

const TCCards = () => {
  return (
    <>
      <div className='relative z-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-9'>
        {cardList.map((card) => (
          <div
            className='bg-white shadow-xl rounded-3xl hover:scale-125 transition-all duration-200 
            ease-in-out hover:shadow-2xl hover:shadow-c2 hover:shadow-opacity-50 hover:shadow-offset-2 hover:shadow-offset-c00 
            cursor-pointer over:opacity-90 relative z-20 hover:z-30 flex items-center'
            key={card.id}
          >
            <img className='rounded-3xl p-3 w-1/2' src={card.img} alt='' />
            <div className='w-1/2 px-3'>
              <p className='font-bold mb-2'>{card.title}</p>
              <p className='body-16 mb-2'>
                <FaStar className='inline text-yellow-400 mr-1' /> {card.rating}{' '}
                <span className='text-c4'>{card.n_rates}</span>
              </p>
              <p className='body-16 mb-4'>
                {card.price} <span className='text-c4'>/night</span>
              </p>
              <a
                role='button'
                href='#'
                className='text-white bg-blue-500 px-2 py-0.5 rounded-md hover:bg-blue-700'
              >
                Book now
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TCCards;
