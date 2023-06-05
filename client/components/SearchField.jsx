'use client';

import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
      <div className='flex justify-center mx-auto px-8' 
        style={{
        backgroundImage: `url('https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='w-3/4'>
          <h1 className="text-heading-1 font-bold text-slate-50 mt-20">Book With Us</h1>
          <h1 className="text-heading-1 font-bold text-slate-50">And Enjoy Your</h1>
          <h1 className="text-heading-1 font-bold text-slate-50 mb-3">Journey!</h1>
          <div className='bg-white rounded-[20px] p-6 mb-10'>
            <div className='flex mb-4'>
              <div
                className={`flex items-center mr-6 mb-2 cursor-pointer ${
                  activeTab === 'hotel' ? 'text-blue-500' : 'text-gray-500'
                }`}
                onClick={() => handleTabClick('hotel')}
              >
                <span className='ml-2 font-medium'>Hotel</span>
              </div>
              <div
                className={`flex items-center mr-6 mb-2 cursor-pointer ${
                  activeTab === 'flight' ? 'text-emerald-400' : 'text-gray-500'
                }`}
                onClick={() => handleTabClick('flight')}
              >
                <span className='ml-2 font-medium'>Flight</span>
              </div>
              <div
                className={`flex items-center mb-2 cursor-pointer ${
                  activeTab === 'car' ? 'text-red-400' : 'text-gray-500'
                }`}
                onClick={() => handleTabClick('car')}
              >
                <span className='ml-2 font-medium'>Car Rental</span>
              </div>
              {activeTab === 'flight' && (
                <div className='ml-auto'>
                  <select
                    className='py-2 px-3 rounded-lg bg-slate-50'
                    value={flightType}
                    onChange={handleFlightTypeChange}
                  >
                    <option value='one-way'>One way</option>
                    <option value='round-trip'>Round trip</option>
                  </select>
                    <span className='ml-4'>Passenger count:</span>
                    <input
                      type='number'
                      className='w-14 py-2 px-3 ml-2 rounded-lg bg-slate-50'
                      value={passengerCount}
                      onChange={handlePassengerCountChange}
                    />
                </div>
              )}
            </div>
              {activeTab === 'hotel' && (
                <div className='border-b-2 border-blue-500 mt-5 mb-4'></div>
                
              ) ||
              activeTab === 'flight' && (
                <div className='border-b-2 border-emerald-400 mt-5 mb-4'></div>
              ) ||
              activeTab === 'car' && (
                <div className='border-b-2 border-red-400 mt-5 mb-4'></div>
              )}
              <form onSubmit={handleSubmit} className='flex flex-wrap items-center justify-center'>
                <div className='flex flex-col mr-4 mb-4 border rounded bg-gray-100 w-64'>
                  <label htmlFor='location' className='ml-5 mt-2 mb-1 font-medium'>
                    Location:
                  </label>
                  <input
                    required=""
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
                    required=""
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
                    required=""
                    type='date'
                    id='checkout'
                    name='checkout'
                    className='ml-2 py-2 px-3 bg-transparent'
                    value={checkOutDate}
                    onChange={handleCheckOutDateChange}
                  />
                </div>
              {activeTab === 'hotel' && (
                <button type='submit' className='h-16 mb-4 flex-grow-0 py-3 px-6 bg-blue-500 text-white rounded-lg text-lg'>
                  Search
                </button>
              ) ||
              activeTab === 'flight' && (
                <button type='submit' className='h-16 mb-4 flex-grow-0 py-3 px-6 bg-emerald-400 text-white rounded-lg text-lg'>
                  Search
                </button>
              ) ||
              activeTab === 'car' && (
                <button type='submit' className='h-16 mb-4 flex-grow-0 py-3 px-6 bg-red-400 text-white rounded-lg text-lg'>
                  Search
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
  );
};

export default SearchField;
