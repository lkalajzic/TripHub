'use client';

import React, { useState } from 'react';
import filterForm from './HotelListings/filterForm';

const SearchField = () => {
  const [activeTab, setActiveTab] = useState('hotel');
  const [flightType, setFlightType] = useState('round-trip');
  const [passengerCount, setPassengerCount] = useState(1);
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFlightTypeChange = (e) => {
    setFlightType(e.target.value);
  };

  const handlePassengerCountChange = (e) => {
    setPassengerCount(parseInt(e.target.value));
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredHotels = filterForm(location, checkInDate, checkOutDate);
  };

  return (
    <div
      className='mx-auto flex justify-center px-8'
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='w-3/4'>
        <h1 className='mt-20 text-heading-1 font-bold text-slate-50'>
          Book With Us
        </h1>
        <h1 className='text-heading-1 font-bold text-slate-50'>
          And Enjoy Your
        </h1>
        <h1 className='mb-3 text-heading-1 font-bold text-slate-50'>
          Journey!
        </h1>
        <div className='mb-10 rounded-[20px] bg-white p-6'>
          <div className='mb-4 flex'>
            <div
              className={`mb-2 mr-6 flex cursor-pointer items-center ${
                activeTab === 'hotel' ? 'text-blue-500' : 'text-gray-500'
              }`}
              onClick={() => handleTabClick('hotel')}
            >
              <span className='ml-2 font-medium'>Hotel</span>
            </div>
            <div
              className={`mb-2 mr-6 flex cursor-pointer items-center ${
                activeTab === 'flight' ? 'text-emerald-400' : 'text-gray-500'
              }`}
              onClick={() => handleTabClick('flight')}
            >
              <span className='ml-2 font-medium'>Flight</span>
            </div>
            <div
              className={`mb-2 flex cursor-pointer items-center ${
                activeTab === 'car' ? 'text-red-400' : 'text-gray-500'
              }`}
              onClick={() => handleTabClick('car')}
            >
              <span className='ml-2 font-medium'>Car Rental</span>
            </div>
            {activeTab === 'flight' && (
              <div className='ml-auto'>
                <select
                  className='rounded-lg bg-slate-50 px-3 py-2'
                  value={flightType}
                  onChange={handleFlightTypeChange}
                >
                  <option value='one-way'>One way</option>
                  <option value='round-trip'>Round trip</option>
                </select>
                <span className='ml-4'>Passenger count:</span>
                <input
                  type='number'
                  className='ml-2 w-14 rounded-lg bg-slate-50 px-3 py-2'
                  value={passengerCount}
                  onChange={handlePassengerCountChange}
                />
              </div>
            )}
          </div>
          {(activeTab === 'hotel' && (
            <div className='mb-4 mt-5 border-b-2 border-blue-500'></div>
          )) ||
            (activeTab === 'flight' && (
              <div className='mb-4 mt-5 border-b-2 border-emerald-400'></div>
            )) ||
            (activeTab === 'car' && (
              <div className='mb-4 mt-5 border-b-2 border-red-400'></div>
            ))}
          <form
            onSubmit={handleSubmit}
            className='flex flex-wrap items-center justify-center'
          >
            <div className='mb-4 mr-4 flex w-64 flex-col rounded border bg-gray-100'>
              <label htmlFor='location' className='mb-1 ml-5 mt-2 font-medium'>
                Location:
              </label>
              <input
                required=''
                type='text'
                id='location'
                name='location'
                className='ml-2 bg-transparent px-3 py-2'
                placeholder='Where are you going?'
                value={location}
                onChange={handleLocationChange}
              />
            </div>
            <div className='mb-4 mr-4 flex w-64 flex-col rounded border bg-gray-100'>
              <label htmlFor='checkin' className='mb-1 ml-5 mt-2 font-medium'>
                Check-in date:
              </label>
              <input
                required=''
                type='date'
                id='checkin'
                name='checkin'
                className='ml-2 bg-transparent px-3 py-2'
                value={checkInDate}
                onChange={handleCheckInDateChange}
              />
            </div>
            <div className='mb-4 mr-4 flex w-64 flex-col rounded border bg-gray-100'>
              <label htmlFor='checkout' className='mb-1 ml-5 mt-2 font-medium'>
                Check-out date:
              </label>
              <input
                required=''
                type='date'
                id='checkout'
                name='checkout'
                className='ml-2 bg-transparent px-3 py-2'
                value={checkOutDate}
                onChange={handleCheckOutDateChange}
              />
            </div>
            {(activeTab === 'hotel' && (
              <button
                type='submit'
                className='text-lg mb-4 h-16 flex-grow-0 rounded-lg bg-blue-500 px-6 py-3 text-white'
              >
                Search
              </button>
            )) ||
              (activeTab === 'flight' && (
                <button
                  type='submit'
                  className='text-lg mb-4 h-16 flex-grow-0 rounded-lg bg-emerald-400 px-6 py-3 text-white'
                >
                  Search
                </button>
              )) ||
              (activeTab === 'car' && (
                <button
                  type='submit'
                  className='text-lg mb-4 h-16 flex-grow-0 rounded-lg bg-red-400 px-6 py-3 text-white'
                >
                  Search
                </button>
              ))}
          </form>
        </div>
        {(activeTab === 'hotel' && (
          <div className='border-b-2 border-blue-500 mt-5 mb-4'></div>
        )) ||
          (activeTab === 'flight' && (
            <div className='border-b-2 border-emerald-400 mt-5 mb-4'></div>
          )) ||
          (activeTab === 'car' && (
            <div className='border-b-2 border-red-400 mt-5 mb-4'></div>
          ))}
        <form
          onSubmit={handleSubmit}
          className='flex flex-wrap items-center justify-center'
        >
          <div className='flex flex-col mr-4 mb-4 border rounded bg-gray-100 w-64'>
            <label htmlFor='location' className='ml-5 mt-2 mb-1 font-medium'>
              Location:
            </label>
            <input
              required=''
              type='text'
              id='location'
              name='location'
              className='ml-2 py-2 px-3 bg-transparent'
              placeholder='Where are you going?'
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div className='flex flex-col mr-4 mb-4 border rounded bg-gray-100 w-64'>
            <label htmlFor='checkin' className='ml-5 mt-2 mb-1 font-medium'>
              Check-in date:
            </label>
            <input
              required=''
              type='date'
              id='checkin'
              name='checkin'
              className='ml-2 py-2 px-3 bg-transparent'
              value={checkInDate}
              onChange={handleCheckInDateChange}
            />
          </div>
          <div className='flex flex-col mr-4 mb-4 border rounded bg-gray-100 w-64'>
            <label htmlFor='checkout' className='ml-5 mt-2 mb-1 font-medium'>
              Check-out date:
            </label>
            <input
              required=''
              type='date'
              id='checkout'
              name='checkout'
              className='ml-2 py-2 px-3 bg-transparent'
              value={checkOutDate}
              onChange={handleCheckOutDateChange}
            />
          </div>
          {(activeTab === 'hotel' && (
            <button
              type='submit'
              className='h-16 mb-4 flex-grow-0 py-3 px-6 bg-blue-500 text-white rounded-lg text-lg'
            >
              Search
            </button>
          )) ||
            (activeTab === 'flight' && (
              <button
                type='submit'
                className='h-16 mb-4 flex-grow-0 py-3 px-6 bg-emerald-400 text-white rounded-lg text-lg'
              >
                Search
              </button>
            )) ||
            (activeTab === 'car' && (
              <button
                type='submit'
                className='h-16 mb-4 flex-grow-0 py-3 px-6 bg-red-400 text-white rounded-lg text-lg'
              >
                Search
              </button>
            ))}
        </form>
      </div>
    </div>
  );
};

export default SearchField;
