'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../public/general/logo.png';
import avatar from '../public/general/avatar.png';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <nav
        className='flex h-[78px] w-full bg-white items-center px-4 md:px-10 xl:px-12 justify-between'
        data-cy='navbar' // Add data-cy attribute to the nav element
      >
        <div
          className='flex items-center gap-2 xs:gap-3 cursor-pointer'
          data-cy='navbar-logo' // Add data-cy attribute to the div element
        >
          <Link href={'/'}>
            <div className='relative w-[40px] h-[38px] object-contain flex items-center'>
              <Image src={logo} alt='logo' />
              <p className='text-heading-4 text-c2 leading-6 ml-2'>TripHub</p>
            </div>
          </Link>
        </div>
        {isLoggedIn ? (
          <div className='flex items-center gap-3 cursor-pointer w-[120px]'>
            <div
              className='relative  w-[32px] h-[32px] object-contain flex items-center rounded-full'
              onClick={handleLogout}
            >
              <Image src={avatar} alt='avatar' />
              <p className='text-[14px] text-c3 ml-2 whitespace-nowrap'>
                John Doe
              </p>
            </div>
          </div>
        ) : (
          <div
            className='flex items-center gap-3 cursor-pointer w-[80px]'
            data-cy='navbar-login' // Add data-cy attribute to the div element
          >
            <div
              className='text-c2 text-body-16 cursor-pointer'
              onClick={handleLogin}
            >
              Login
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
