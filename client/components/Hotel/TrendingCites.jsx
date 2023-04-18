import TCCards from './TCCards';

const TrendingCites = () => {
  return (
    <>
      <div className='container mx-auto py-36 px-8'>
        <div>
          <h1 className='text-heading-2 text-center text-[#23262F] mb-3'>
            Trending Cites
          </h1>
        </div>
        <div>
          <p className='text-body-16 text-center text-c4'>
            The most searched cites on TripHub
          </p>
        </div>
        <div className='p-9'>
          <TCCards />
        </div>
      </div>
    </>
  );
};

export default TrendingCites;
