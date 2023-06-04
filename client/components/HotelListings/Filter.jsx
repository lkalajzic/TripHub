const Filter = () => {
  return (
    <>
      <div className='hidden md:block'>
        <div className='flex flex-col justify-betweem items-start gap-5 w-[290px] h-[1322px]'>
          <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-col items-start gap-[14px]'>
              <p className='text-sidebar text-body-18'>
                Search location or property
              </p>
              <div className='flex items-center gap-2 bg-white rounded-[10px] px-[11px] py-[14px] border hover:border-primary-blue'>
                <input
                  type='text'
                  placeholder='Search location or property'
                  className='focus:outline-none bg-transparent text-caption-16 w-[204px]'
                />
                <img src='../../hotels/icons/Search.svg' />
              </div>
            </div>
            <div className='flex flex-col justify-between items-start gap-[15px]'>
              <p className='text-c1 text-body-18'>Popular filters</p>
              <div className='flex flex-row justify-between items-center gap-3'>
                <input
                  type='checkbox'
                  id='hotel-checkbox'
                  className='false cursor-pointer mr-3 appearance-none h-[22px] w-[22px] rounded-[6px] border-[1.5px] border-c4 hover:border-primary-blue'
                />
                <label
                  htmlFor='hotel-checkbox'
                  className='text-checkbox-14 cursor-pointer'
                >
                  Hotel
                </label>
              </div>
              <div className='flex flex-row justify-between items-center gap-3'>
                <input
                  type='checkbox'
                  id='breakfast-checkbox'
                  className='false cursor-pointer mr-3 appearance-none h-[22px] w-[22px] rounded-[6px] border-[1.5px] border-c4 hover:border-primary-blue'
                />
                <label
                  htmlFor='breakfast-checkbox'
                  className='text-checkbox-14 cursor-pointer'
                >
                  Breakfast included
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <div className='flex flex-col items-center'></div>
      </div>
    </>
  );
};

export default Filter;
