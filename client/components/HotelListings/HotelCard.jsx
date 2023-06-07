import Link from 'next/link';
import Image from 'next/image';

import HotelData from '../../constants/HotelData';

const HotelCard = () => {
  return (
    <>
      <div className='h-[465px] w-[970] mb-96 lg:mb-8'>
        {/* Iterate over the hotel data */}
        {HotelData.map((hotel) => (
          <div className='flex flex-col lg:flex-row'>
            {/* Display the hotel image */}
            <div>
              <img
                src={hotel.image}
                alt={hotel.name}
                className='w-[420px] h-[475px] min-w-[300px] object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none'
              />
            </div>
            {/* Display the hotel information */}
            <div className='p-[31px] gap-5 lg:gap-[41px] max-w-[420px] sm:min-w-[420px] lg:max-w-none max-h-[600px] lg:max-h-[475px] xl:max-h-none flex flex-col border rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl'>
              <div className='flex flex-col gap-5 justify-between'>
                {/* Display the hotel name */}
                <h3 className='text-heading-3 text-[#23262F]'>{hotel.name}</h3>
                <div className='flex flex-col items-start sm:flex-row sm:items-center gap-5'>
                  <div className='flex flex-row gap-2'>
                    {/* Display the hotel rating */}
                    <img
                      src='hotels/icons/Star.svg'
                      alt=''
                      className='w-[18px] h-[18px]'
                    />
                    <span className='text-c3 text-caption-14'>
                      {hotel.rating}
                    </span>
                    <span className='text-c3 text-[14px]'>
                      ({hotel.reviews} reviews)
                    </span>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <img
                      src='hotels/icons/Flag.svg'
                      alt=''
                      className='w-[18px] h-[18px]'
                    />
                    <span className='text-c3 text-[14px]'>
                      {hotel.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col lg:flex-row lg:flex-wrap gap-2 text-c3 text-[14px]'>
                <div className='flex flex-col lg:flex-row lg:flex-wrap gap-2 items-start'>
                  {/* Display additional hotel information */}
                  <div className='flex flex-row gap-2 items-center'>
                    <img
                      src='/hotels/icons/Location.svg'
                      alt=''
                      className='w-[16px] h-[16px]'
                    />
                    <span>{hotel.location}</span>
                  </div>
                  <div className='flex flex-row gap-2 items-center'>
                    <img
                      src='/hotels/icons/Plane.svg'
                      alt=''
                      className='w-[16px] h-[16px]'
                    />
                    <span>Departure from {hotel.location}</span>
                  </div>
                  <div className='flex flex-row gap-2 items-center'>
                    <img
                      src='/hotels/icons/Calendar.svg'
                      alt=''
                      className='w-[16px] h-[16px]'
                    />
                    <span>09.05.2023. - 14.05.2023.</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between lg:flex-row gap-5'>
                <div className='flex flex-col gap-3 justify-center items-start'>
                  {/* Display hotel amenities */}
                  {hotel.amenities.map((amenity) => (
                    <div className='flex flex-row gap-3 items-center'>
                      <img
                        src={amenity.icon}
                        alt={amenity.name}
                        className='w-[14px] h-[14px]'
                      />
                      <span className='text-c3 text-[14px]'>
                        {amenity.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className='flex flex-col gap-3 lg:justify-end'>
                  <div className='flex flew-row gap-2 items-center lg:justify-center px-1'>
                    <p className='text-c3 text-[28px] font-bold leading-10'>
                      €{hotel.price}
                    </p>
                    <p className='text-c3 text-[14px]'>for two</p>
                  </div>
                  <button className='flex items-center justify-center text-white bg-primary-blue hover:bg-blue-hover w-[104px] h-[34px] lg:w-[176px] lg:h-[48px] rounded-[30px]'>
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HotelCard;
