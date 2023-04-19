import Cards from './Cards';

const CardSection = () => {
  return (
    <>
      <div className='container mx-auto py-36 px-8'>
        <div>
          <h1 className='text-heading-2 text-center text-[#23262F] mb-3'>
            Explore the best places in the world
          </h1>
        </div>
        <div>
          <p className='text-body-16 text-center text-c4'>
            Whether you're going on a business trip or looking for a vacation
            destination, we're here to help make your planning effortless.
          </p>
        </div>
        <div className='p-9'>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default CardSection;
