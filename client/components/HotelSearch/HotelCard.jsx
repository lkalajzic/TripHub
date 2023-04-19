import Link from 'next/link';
import Image from 'next/image';

import HotelData from '../../constants/HotelData';

const HotelCard = () => {
  return (
    <>
      <div className='h-[465px] w-[970] m-5 mb-96 md:mb-8'>
        {HotelData.map((hotel) => (
          <div className='flex flex-col md:flex-row'>
            <div>
              <img
                src={hotel.image}
                alt={hotel.name}
                className='w-[420px] h-[465px] object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-r-none'
              />
            </div>
            <div className='p-[31px] gap-5 md:gap-[41px] max-w-[420px] sm:min-w-[420px] md:max-w-none flex flex-col border rounded-b-3xl md:rounded-b-none md:rounded-r-3xl'>
              <div className='flex flex-col gap-5 justify-between'>
                <h3 className='text-heading-3 text-[#23262F]'>{hotel.name}</h3>
                <div className='flex flex-col items-start sm:flex-row sm:items-center gap-5'>
                  <div className='flex flex-row gap-2'>
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
              <div className='flex flex-col md:flex-row md:flex-wrap gap-2 text-c3 text-[14px]'>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-2 items-start'>
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
              <div className='flex flex-col justify-between md:flex-row gap-5'>
                <div className='flex flex-col gap-3 justify-center items-start'>
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
                <div className='flex flex-col gap-3 md:justify-end'>
                  <div className='flex flew-row gap-2 items-center md:justify-center px-1'>
                    <p className='text-c3 text-[28px] font-bold leading-10'>
                      €{hotel.price}
                    </p>
                    <p className='text-c3 text-[14px]'>for two</p>
                  </div>
                  <button className='flex items-center justify-center text-white bg-primary-blue hover:bg-blue-hover w-[104px] h-[34px] md:w-[176px] md:h-[48px] rounded-[30px]'>
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
