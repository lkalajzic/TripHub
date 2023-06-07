'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../public/general/logo.png';
import avatar from '../public/general/avatar.png';
import Login from './SignIn/Login';
import Signup from './SignIn/Signup';

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
        className='flex h-[78px] w-full items-center justify-between bg-white px-4 md:px-10 xl:px-12'
        data-cy='navbar' // Add data-cy attribute to the nav element
      >
        <div
          className='xs:gap-3 flex cursor-pointer items-center gap-2'
          data-cy='navbar-logo' // Add data-cy attribute to the div element
        >
          <Link href={'/'}>
            <div className='relative flex h-[38px] w-[40px] items-center object-contain'>
              <Image src={logo} alt='logo' />
              <p className='ml-2 text-heading-4 leading-6 text-c2'>TripHub</p>
            </div>
          </Link>
        </div>
        {isLoggedIn ? (
          <div className='flex w-[120px] cursor-pointer items-center gap-3'>
            <div
              className='relative  flex h-[32px] w-[32px] items-center rounded-full object-contain'
              onClick={handleLogout}
            >
              <Image src={avatar} alt='avatar' />
              <p className='ml-2 whitespace-nowrap text-[14px] text-c3'>
                John Doe
              </p>
            </div>
          </div>
        ) : (
          <div
            className='flex w-[180px] cursor-pointer items-center gap-3'
            data-cy='navbar-login'
            // Add data-cy attribute to the div element
          >
            <Login />
            <Signup />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
