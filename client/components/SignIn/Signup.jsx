'use client';

import React, { useState } from 'react';

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log('signup form submited')

    try {
        // Send the user data to the server
        const response = await fetch('http://localhost:8080/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });
  
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
  }

  return (
    <div className="relative">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={toggleForm}
      >
        Signup
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-96">
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="name" 
                  onChange={(e) => setName(e.target.value)} 
                  value={name} 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email} 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password" 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password} 
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label className="text-sm text-gray-700" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a className="text-sm text-blue-500 hover:text-blue-600" href="/">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <span className="text-gray-700">Have an account?</span>
              <a className="text-blue-500 hover:text-blue-600 ml-2" href="/">
                Log In
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
