import Link from 'next/link';
import Image from 'next/image';

import HotelData from '../../constants/HotelData';

const HotelCard = () => {
  return (
    <>
      <div className='mb-96 h-[465px] w-[970] lg:mb-8'>
        <Link href={'/hotel-details'}>
          {/* Iterate over the hotel data */}
          {HotelData.map((hotel) => (
            <div className='flex flex-col lg:flex-row'>
              {/* Display the hotel image */}
              <div>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className='h-[475px] w-[420px] min-w-[300px] rounded-t-3xl object-cover lg:rounded-l-3xl lg:rounded-r-none'
                />
              </div>

              {/* Display the hotel information */}

              <div className='flex max-h-[600px] max-w-[420px] flex-col gap-5 rounded-b-3xl border p-[31px] sm:min-w-[420px] lg:max-h-[475px] lg:max-w-none lg:gap-[41px] lg:rounded-b-none lg:rounded-r-3xl xl:max-h-none'>
                <div className='flex flex-col justify-between gap-5'>
                  {/* Display the hotel name */}
                  <h3 className='text-heading-3 text-[#23262F]'>
                    {hotel.name}
                  </h3>
                  <div className='flex flex-col items-start gap-5 sm:flex-row sm:items-center'>
                    <div className='flex flex-row gap-2'>
                      {/* Display the hotel rating */}
                      <img
                        src='hotels/icons/Star.svg'
                        alt=''
                        className='h-[18px] w-[18px]'
                      />
                      <span className='text-caption-14 text-c3'>
                        {hotel.rating}
                      </span>
                      <span className='text-[14px] text-c3'>
                        ({hotel.reviews} reviews)
                      </span>
                    </div>
                    <div className='flex flex-row gap-2'>
                      <img
                        src='hotels/icons/Flag.svg'
                        alt=''
                        className='h-[18px] w-[18px]'
                      />
                      <span className='text-[14px] text-c3'>
                        {hotel.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-2 text-[14px] text-c3 lg:flex-row lg:flex-wrap'>
                  <div className='flex flex-col items-start gap-2 lg:flex-row lg:flex-wrap'>
                    {/* Display additional hotel information */}
                    <div className='flex flex-row items-center gap-2'>
                      <img
                        src='/hotels/icons/Location.svg'
                        alt=''
                        className='h-[16px] w-[16px]'
                      />
                      <span>{hotel.location}</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <img
                        src='/hotels/icons/Plane.svg'
                        alt=''
                        className='h-[16px] w-[16px]'
                      />
                      <span>Departure from {hotel.location}</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <img
                        src='/hotels/icons/Calendar.svg'
                        alt=''
                        className='h-[16px] w-[16px]'
                      />
                      <span>09.05.2023. - 14.05.2023.</span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-between gap-5 lg:flex-row'>
                  <div className='flex flex-col items-start justify-center gap-3'>
                    {/* Display hotel amenities */}
                    {hotel.amenities.map((amenity) => (
                      <div className='flex flex-row items-center gap-3'>
                        <img
                          src={amenity.icon}
                          alt={amenity.name}
                          className='h-[14px] w-[14px]'
                        />
                        <span className='text-[14px] text-c3'>
                          {amenity.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className='flex flex-col gap-3 lg:justify-end'>
                    <div className='flew-row flex items-center gap-2 px-1 lg:justify-center'>
                      <p className='text-[28px] font-bold leading-10 text-c3'>
                        €{hotel.price}
                      </p>
                      <p className='text-[14px] text-c3'>for two</p>
                    </div>
                    <button className='flex h-[34px] w-[104px] items-center justify-center rounded-[30px] bg-primary-blue text-white hover:bg-blue-hover lg:h-[48px] lg:w-[176px]'>
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Link>
      </div>
    </>
  );
};

export default HotelCard;
