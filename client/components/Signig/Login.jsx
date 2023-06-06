'use client';

import React, { useState } from 'react';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <button
        className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none'
        onClick={toggleForm}
      >
        Login
      </button>
      {isOpen && (
        <div className='fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='w-96 rounded-lg bg-white p-8'>
            <h2 className='text-2xl mb-6 font-bold'>Log In</h2>
            <form>
              <div className='mb-4'>
                <label
                  className='text-sm mb-2 block font-bold text-gray-700'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none'
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                />
              </div>
              <div className='mb-4'>
                <label
                  className='text-sm mb-2 block font-bold text-gray-700'
                  htmlFor='password'
                >
                  Password
                </label>
                <input
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none'
                  id='password'
                  type='password'
                  placeholder='Enter your password'
                />
              </div>
              <div className='mb-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input
                      className='mr-2 leading-tight'
                      type='checkbox'
                      id='rememberMe'
                    />
                    <label
                      className='text-sm text-gray-700'
                      htmlFor='rememberMe'
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    className='text-sm text-blue-500 hover:text-blue-600'
                    href='/'
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <button
                  className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none'
                  type='button'
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className='mt-4 text-center'>
              <span className='text-gray-700'>Don't have an account?</span>
              <a className='ml-2 text-blue-500 hover:text-blue-600' href='/'>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
