import cardList from '../../constants/CardSection';

const Cards = () => {
  return (
    <>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
        {cardList.map((card) => (
          <div className='shadow-xl rounded-3xl hover:scale-105 transition-all duration-200 ease-in-out hover:shadow-2xl hover:shadow-c3 hover:shadow-opacity-50 hover:shadow-offset-2 hover:shadow-offset-c00 cursor-pointer over:opacity-90'>
            <img className='rounded-t-3xl' src={card.img} alt={card.title} />
            <div className='p-5'>
              <p className='font-bold text-c3 mb-3'>{card.title}</p>
              <p className='text-lg font-normal text-c4'>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
