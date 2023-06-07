'use client';


import React, { useState, useRef, useEffect } from 'react';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);


  const toggleForm = () => {
    setIsOpen(!isOpen);
  };


  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      toggleForm();
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform login logic here
    console.log('Logging in...');

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        // User logged in successfully
        const userName = data.name; // Retrieve the name from the response
        console.log('Logged in as:', userName);
        // You can display the user's name on the login page or redirect to a new page displaying the user's name
      } else {
        // Handle login failure
        console.log('Login failed:', data.message);
      }
    } catch (error) {
      console.error(error);
    }

    // Close the modal after login
    toggleForm();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='relative'>
      <button
        className='focus:shadow-outline rounded-3xl bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none'
        onClick={toggleForm}
      >
        Log In
      </button>
      {isOpen && (
        <div className='fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='w-96 rounded-3xl bg-white p-8' ref={modalRef}>
            <h2 className='mb-6 flex justify-center text-heading-2 font-normal'>
              Log In
            </h2>
            <form onSubmit={handleLogin}>
              <div className='mb-6'>
                <label
                  className='text-sm mb-1 block font-bold text-gray-700'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none'
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className='mb-4'>
                <label
                  className='text-sm mb-1 block font-bold text-gray-700'
                  htmlFor='password'
                >
                  Password
                </label>
                <input
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none'
                  id='password'
                  type='password'
                  placeholder='Enter your password'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
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
                  className='focus:shadow-outline rounded-[40px] bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none'
                  type='submit'
                >
                  Log In
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
