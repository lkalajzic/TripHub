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
        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        onClick={toggleForm}
      >
        Login
      </button>
      {isOpen && (
        <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white rounded-lg p-8 w-96'>
            <h2 className='text-2xl font-bold mb-6'>Log In</h2>
            <form>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='password'
                >
                  Password
                </label>
                <input
                  className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='password'
                  type='password'
                  placeholder='Enter your password'
                />
              </div>
              <div className='mb-6'>
                <div className='flex justify-between items-center'>
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
                  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='button'
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className='text-center mt-4'>
              <span className='text-gray-700'>Don't have an account?</span>
              <a className='text-blue-500 hover:text-blue-600 ml-2' href='/'>
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
