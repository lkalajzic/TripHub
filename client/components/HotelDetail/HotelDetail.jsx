'use client';

import React, { useState } from 'react';
import {
  FaStar,
  FaMapPin,
  FaWifi,
  FaBath,
  FaCoffee,
  FaBed,
  FaExpand,
  FaBacon,
  FaRegKeyboard,
  FaTv,
  FaMoneyBillWave,
  FaCity,
  FaSwimmingPool,
  FaCalendarAlt,
} from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HotelDetail = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckInChange = (date) => {
    setCheckIn(date);
  };

  const handleCheckOutChange = (date) => {
    setCheckOut(date);
  };

  const handleGuestsChange = (e) => {
    setGuests(parseInt(e.target.value));
  };

  const handleOptionChange = (e) => {
    const option = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((prevOption) => prevOption !== option)
      );
    }

    setOptions((prevOptions) =>
      isChecked
        ? [...prevOptions, option]
        : prevOptions.filter((prevOption) => prevOption !== option)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
  };

  return (
    <>
      <div className='container mx-auto px-8 py-36'>
        <div>
          <h1 className='mb-3 text-left text-heading-1 text-[#23262F]'>
            Swetzerland Alp Lakehouse
          </h1>
        </div>
        <div>
          <p className='h-6 text-left text-body-16 text-black'>
            <FaStar className='mb-1 mr-1 inline text-yellow-400' /> {4.2}{' '}
            <span className='text-c4'>(233 reviews)</span>
            <FaMapPin className='ml-5 mr-1 inline text-gray-500' />
            <span className='text-c4'>Zuich Town, Switzerland</span>
          </p>
        </div>
        <div className='flex flex-col gap-2 rounded-3xl p-6 md:flex-row md:p-12'>
          <div className='flex w-full flex-col items-center justify-between gap-4 md:w-3/4 md:items-start'>
            <img
              src='https://images6.alphacoders.com/343/343104.jpg'
              alt='Image 1'
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex w-full flex-col justify-between gap-2 md:w-1/4'>
            <img
              src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Image 2'
              className='h-full w-full object-cover'
            />
            <img
              src='https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Image 3'
              className='h-full w-full object-cover'
            />
            <img
              src='https://images.pexels.com/photos/271614/pexels-photo-271614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Image 4'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
        <div className='flex'>
          <div className='bg-transparent' style={{ width: '70%' }}>
            <div>
              <h2 className='mb-3 text-left text-heading-2 text-[#23262F]'>
                Exclusive room in house
              </h2>
            </div>
            <div>
              <p className='h-6 text-left text-body-18 text-c4'>
                <span className='text-c4'>Zuich Town, Switzerland</span>
              </p>
            </div>
            <div className='mb-2 mt-10 border-b-2 border-stone-200'></div>
            <div className='mb-10 mt-10 rounded-[20px] bg-transparent'>
              <div className='mb-3 flex'>
                <div className={'mb-2 mr-6 flex cursor-pointer items-center'}>
                  <span className='font-medium text-blue-500'>Description</span>
                </div>
              </div>
              <div className='mb-2 mt-1 border-b-2 border-blue-500'></div>
              <p className='text-gray-700'>
                Arabian Park Hotel is a great choice for travellers looking for
                a 3 star hotel in Dubai. It is located in Bur, Dubai. This Hotel
                stands out as one of the highest at 2 kms, Al Wasl Indoor
                Stadium (1.2 kms), Dubai Mall (5.4 kms), Jumeirah Beach Park
                (9.6 kms) and Jumeirah Public Beach (15.8 kms).
              </p>
            </div>
            <div>
              <p className='text-bold mb-5 h-6 text-left text-body-18 text-stone-800'>
                Hotel features
              </p>
              <p className='stone-800 h-6 text-left text-body-16'>
                <FaWifi className='mb-1 mr-1 inline text-stone-800' />
                <span className='ml-1 text-c4'>Wi-fi</span>
                <FaBath className='mb-1 ml-5 mr-1 inline text-stone-800' />
                <span className='ml-1 text-c4'>Bathtub</span>
                <FaCoffee className='mb-1 ml-5 mr-1 inline text-stone-800' />
                <span className='ml-1 text-c4'>Breakfast</span>
                <FaBed className='mb-1 ml-5 mr-1 inline text-stone-800' />
                <span className='ml-1 text-c4'>Kids bed</span>
                <FaExpand className='mb-1 ml-5 mr-1 inline text-stone-800' />
                <span className='ml-1 text-c4'>4m x 6m</span>
              </p>
            </div>
            <div className='mt-20'>
              <p className='text-bold mb-5 h-6 text-left text-body-18 text-stone-800'>
                Amenities
              </p>
              <p className='stone-800 mb-2 h-6 text-left text-body-16'>
                <FaWifi className='mb-1 mr-1 inline text-stone-800' />
                <span className='ml-1 text-c4'>Free Wi-fi 24/7</span>
                <FaBath className='mb-1 ml-28 mr-1 inline text-stone-800' />
                <span className='ml-1 text-c4'>Free clean bathroom</span>
              </p>
              <p className='stone-800 mb-2 h-6 text-left text-body-16'>
                <FaRegKeyboard className='mb-1 mr-1 inline text-stone-800' />
                <span className='ml-1 text-c4'>Free computer</span>
                <FaBacon className='mb-1 ml-28 mr-1 inline text-stone-800' />
                <span className='ml-1 text-c4'>Breakfast included</span>
              </p>
              <p className='stone-800 mb-2 h-6 text-left text-body-16'>
                <FaTv className='mb-1 mr-1 inline text-stone-800' />
                <span className='ml-1 mr-2 text-c4'>Free TV</span>
                <FaMoneyBillWave className='mb-1 ml-40 mr-1 inline text-stone-800' />
                <span className='ml-1 text-c4'>ATM</span>
              </p>
              <p className='stone-800 mb-2 h-6 text-left text-body-16'>
                <FaSwimmingPool className='mb-1 mr-1 inline text-stone-800' />
                <span className='ml-1 mr-3 text-c4'>Free swimming pool</span>
                <FaCity className='mb-1 ml-16 mr-1 inline text-stone-800' />
                <span className='ml-1 text-c4'>Close to city center</span>
              </p>
            </div>
          </div>
          <div className='ml-auto w-[340px] flex-wrap items-center justify-center rounded-3xl bg-white p-4'>
            <div>
              <h3 className='mb-3 flex items-center text-left text-heading-3 text-[#23262F]'>
                $102
                <span className='mr-20 mt-1.5 text-body-22 text-c4'>
                  /night
                </span>
                <div className='flex h-[32px] w-[85px] items-center justify-center rounded-full bg-blue-500'>
                  <span className='text-body-16 text-white'>20% off</span>
                </div>
              </h3>
            </div>
            <div className='mb-2 mt-4 border-b-2 border-stone-200'></div>
            <form onSubmit={handleSubmit}>
              <div className='mb-2 flex p-4'>
                <div className='mr-4'>
                  <label
                    className='text-sm mb-1 block font-medium text-stone-500'
                    htmlFor='check-in'
                  >
                    Check-in
                  </label>
                  <DatePicker
                    id='check-in'
                    selected={checkIn}
                    onChange={handleCheckInChange}
                    className=' w-[120px] rounded-lg border-gray-300 bg-slate-100 px-3 py-1'
                    placeholderText='Add date'
                  />
                </div>
                <div className='ml-5'>
                  <label
                    className='text-sm mb-1 block font-medium text-stone-500'
                    htmlFor='check-out'
                  >
                    Check-out
                  </label>
                  <DatePicker
                    id='check-out'
                    selected={checkOut}
                    onChange={handleCheckOutChange}
                    className='w-[120px] rounded-lg border-gray-300 bg-slate-100 px-3 py-1'
                    placeholderText='Add date'
                  />
                </div>
              </div>
              <div className='mb-4 ml-4'>
                <label
                  className='text-sm mb-1 block font-medium text-stone-500'
                  htmlFor='guests'
                >
                  Guests
                </label>
                <select
                  id='guests'
                  className='w-[276px] rounded-lg border-gray-300 bg-slate-100 px-2 py-1'
                  value={guests}
                  onChange={handleGuestsChange}
                >
                  <option value={1}>1 guest</option>
                  <option value={2}>2 guests</option>
                  <option value={3}>2 guests + children</option>
                </select>
              </div>
              <div className='mb-4 ml-4'>
                <label className='text-sm mb-1 block font-medium text-stone-500'>
                  Options
                </label>
                <div>
                  <label className='mb-2 flex items-center'>
                    <input
                      type='checkbox'
                      value='Allow to bring pet $13'
                      checked={options.includes('Allow to bring pet $13')}
                      onChange={handleOptionChange}
                      className='mb-1'
                    />
                    <span className='ml-2'>
                      Allow to bring pet{' '}
                      <span className='align-left text-slate-400'>$13</span>
                    </span>
                  </label>
                  <label className='mb-2 flex items-center'>
                    <input
                      type='checkbox'
                      value='Breakfast a day per person $10'
                      checked={options.includes(
                        'Breakfast a day per person $10'
                      )}
                      onChange={handleOptionChange}
                      className='mb-1'
                    />
                    <span className='ml-2'>
                      Breakfast a day per person{' '}
                      <span className='align-left text-slate-400'>$10</span>
                    </span>
                  </label>
                  <label className='mb-2 flex items-center'>
                    <input
                      type='checkbox'
                      value='Parking a day $6'
                      checked={options.includes('Parking a day $6')}
                      onChange={handleOptionChange}
                      className='mb-1'
                    />
                    <span className='ml-2'>
                      Parking a day{' '}
                      <span className='align-left text-slate-400'>$6</span>
                    </span>
                  </label>
                  <label className='mb-2 flex items-center'>
                    <input
                      type='checkbox'
                      value='Extra pillow Free'
                      checked={options.includes('Extra pillow Free')}
                      onChange={handleOptionChange}
                      className='mb-1'
                    />
                    <span className='ml-2'>
                      Extra pillow{' '}
                      <span className='align-left text-slate-400'>Free</span>
                    </span>
                  </label>
                </div>
              </div>
              <div className='ml-4'>
                <h4 className='text-lg mb-1 font-medium text-stone-500'>
                  Price:
                </h4>
                <div className='mb-5 mt-2 w-[276px] rounded-lg bg-slate-100 p-4'>
                  <ul>
                    <li className='flex justify-between'>
                      <span>1 Nights</span>
                      <span>$500</span>
                    </li>
                    <li className='flex justify-between'>
                      <span>Discount 20%</span>
                      <span>-$100</span>
                    </li>
                    {selectedOptions.map((option, index) => (
                      <li key={index} className='flex justify-between'>
                        <span>+ {option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                className='ml-4 w-[276px] rounded bg-blue-500 px-4 py-2 text-white'
                type='submit'
              >
                Book now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelDetail;
