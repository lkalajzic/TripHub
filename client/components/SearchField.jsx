'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import bed from '../public/general/bed.png';
//justify-center
const SearchField = () => {
    return (
      <div className='flex min-h-[140px] justify-center mx-auto w-3/4 bg-[#cfe2f3] rounded-lg px-4 md:px-10 xl:px-12'>
        <div className='mt-4'>
          <div className='flex mb-4'>
            <div className='flex items-end mr-6 mb-2x'>
              <Image src={bed} alt='bed' className='w-[40px] h-[38px]' />
              <span className='ml-2'>Hotel</span>
            </div>
            <div className=' ml-auto'>
              <select className='py-2 ml-30 px-3 rounded-lg bg-transparent' defaultValue='round-trip'>
                <option value='one-way'>One way</option>
                <option value='round-trip'>Round trip</option>
              </select>
            </div>
            
          </div>
          <form id='hotel-search-form' className='flex flex-wrap items-center justify-center'>
            <div className='flex flex-col mr-4 mb-4 border rounded bg-[#F4F5F7]'>
              <label htmlFor='location' className='mb-1'>
                &nbsp;Location:
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='py-2 px-3 bg-[#F4F5F7]'
                placeholder='Where are you going?'
              />
            </div>
            <div className='flex flex-col mr-4 mb-4 border rounded bg-[#F4F5F7]'>
              <label htmlFor='checkin' className='mb-1'>
                Check-in date:
              </label>
              <input type='date' id='checkin' name='checkin' className='bg-[#F4F5F7] py-2 px-3' />
            </div>
            <div className='flex flex-col mr-4 mb-4 border rounded bg-[#F4F5F7]'>
              <label htmlFor='checkout' className='mb-1'>
                Check-out date:
              </label>
              <input type='date' id='checkout' name='checkout' className='bg-[#F4F5F7] py-2 px-3' />
            </div>
            <button type='submit' id='search-button' className='py-2 px-4 bg-[#316BFF] text-white rounded hover:bg-blue-600'>
              Search
            </button>
          </form>
        </div>
      </div>
    );
  };
export default SearchField;