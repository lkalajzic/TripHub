'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import '../../styles/globals.css';
import Navbar from '../../components/Navbar';
import SearchField2 from '../../components/SearchField2';
import Footer from '../../components/Footer';
import HotelList from '../../components/HotelListings/HotelList';
import Filter from '../../components/HotelListings/Filter';

export default function Home() {
  const [isFilterVisible, setFilterVisible] = useState(false);

  // Function to handle the click event on a div containing the Filter
  const handleDivClick = () => {
    setFilterVisible(!isFilterVisible);
  };

  return (
    <>
      <Navbar />
      <div className='bg-[#fafafb]'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-row items-center p-10'>
            <Link href='/'>
              <p className=''>Home &gt;</p>
            </Link>
            <p className='text-c4 pl-2 text-caption-14'>Hotel listings</p>
          </div>
          <div className='pr-10 md:hidden' onClick={handleDivClick}>
            {/* Filter icon */}
            <svg
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.6995 12.8105V17.3324C14.6995 17.669 14.5069 17.9768 14.2021 18.1274L10.6028 19.905C10.0045 20.2005 9.30051 19.7708 9.30051 19.11V12.8105L3.20511 5.45166C2.7244 4.87132 3.14242 4 3.90154 4H20.0985C20.8576 4 21.2756 4.87132 20.7949 5.45166L14.6995 12.8105ZM12.8998 16.7813V12.4914C12.8998 12.2863 12.9717 12.0874 13.1032 11.9286L18.1996 5.77588H5.80036L10.8967 11.9286C11.0283 12.0874 11.1001 12.2863 11.1001 12.4914V17.6701L12.8998 16.7813Z'
                fill='#B1B5C4'
              />
            </svg>
          </div>
        </div>

        <div className='hidden lg:flex'>
          <SearchField2 />
        </div>
        <div className='flex flex-col md:flex-row justify-center m-10 md:mx-20 gap-[40px]'>
          <div className={`md:flex ${isFilterVisible ? '' : 'hidden'}`}>
            <Filter />
          </div>
          <HotelList />
        </div>
        <div className='flex items-center justify-center p-5 pb-8'>
          <button className='text-c1 text-caption-16 w-[176px] h-[46px] rounded-[30px] border-[1px] py-[11px] px-[41px] hover:border-primary-blue'>
            View more
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
