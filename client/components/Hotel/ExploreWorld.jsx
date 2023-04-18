import EW_Cards from './EW_Cards';

const ExploreWorld = () => {
  return (
    <>
      <div className='container mx-auto py-36 px-8'>
        <div>
          <h1 className='text-heading-2 text-left text-[#23262F] mb-3'>
          Explore The World
          </h1>
        </div>
        <div>
          <p className='h-6 text-body-16 text-left text-c4'>
          10,788 beautiful places to choose from
          </p>
        </div>
        <div className='p-6'>
          <EW_Cards />
        </div>
      </div>
    </>
  );
};

export default ExploreWorld;
