'use client';
import React, { useState } from 'react';

const Filter = () => {
  const [value, setValue] = useState(100);

  {
    /* Functions that handle price changes using the slider or input box */
  }
  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <>
      <div className='flex flex-col mx-auto justify-betweem items-start gap-5 w-[290px] h-[525px]'>
        <div className='flex flex-col gap-[30px]'>
          <div className='flex flex-col items-start gap-[14px]'>
            <p className='text-sidebar text-body-18'>
              Search location or property
            </p>
            <div className='flex items-center gap-2 bg-white rounded-[10px] px-[11px] py-[14px] border hover:border-primary-blue'>
              <input
                type='text'
                placeholder='Search location or property'
                className='focus:outline-none bg-transparent text-caption-16 w-[204px]'
              />
              <img src='../../hotels/icons/Search.svg' />
            </div>
          </div>
          <svg
            width='277'
            height='1'
            viewBox='0 0 277 1'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='277' height='1' fill='#E7ECF3' />
          </svg>
          {/* Filtering using checkboxes */}
          <div className='flex flex-col justify-between items-start gap-[15px]'>
            <p className='text-c1 text-body-18'>Property type</p>
            <div className='relative flex flex-row justify-between items-center gap-3'>
              <input
                type='checkbox'
                id='hotel-checkbox'
                className='false cursor-pointer mr-3 appearance-none h-[22px] w-[22px] rounded-[6px] border-[1.5px] border-c4 hover:border-primary-blue checked:bg-primary-blue'
              />
              <label
                htmlFor='hotel-checkbox'
                className='text-checkbox-14 cursor-pointer'
              >
                Hotel
              </label>
              <svg
                width='12'
                height='9'
                viewBox='0 0 12 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute left-[5px] pointer-events-none'
              >
                <path
                  d='M11.7251 0.419985C11.6457 0.346628 11.5513 0.288403 11.4472 0.248668C11.3432 0.208934 11.2316 0.188477 11.1189 0.188477C11.0062 0.188477 10.8946 0.208934 10.7905 0.248668C10.6865 0.288403 10.592 0.346628 10.5126 0.419985L4.15139 6.2586L1.47882 3.80106C1.3964 3.72809 1.29911 3.67071 1.1925 3.6322C1.08589 3.59369 0.972054 3.5748 0.857483 3.57662C0.742911 3.57844 0.629852 3.60092 0.524761 3.64279C0.419669 3.68465 0.324603 3.74509 0.244991 3.82063C0.165378 3.89617 0.102779 3.98535 0.0607656 4.08307C0.0187524 4.18079 -0.00185163 4.28513 0.000130571 4.39015C0.00211277 4.49517 0.0266423 4.5988 0.0723181 4.69513C0.117994 4.79145 0.183922 4.87859 0.266338 4.95157L3.54515 7.95697C3.62453 8.03033 3.71897 8.08855 3.82302 8.12829C3.92707 8.16802 4.03867 8.18848 4.15139 8.18848C4.26411 8.18848 4.37572 8.16802 4.47977 8.12829C4.58382 8.08855 4.67826 8.03033 4.75763 7.95697L11.7251 1.57049C11.8118 1.4972 11.881 1.40825 11.9283 1.30924C11.9756 1.21024 12 1.10332 12 0.995238C12 0.887152 11.9756 0.780237 11.9283 0.681231C11.881 0.582225 11.8118 0.493275 11.7251 0.419985Z'
                  fill='white'
                />
              </svg>
            </div>
            <div className='relative flex flex-row justify-between items-center gap-3'>
              <input
                type='checkbox'
                id='apartment-checkbox'
                className='false cursor-pointer mr-3 appearance-none h-[22px] w-[22px] rounded-[6px] border-[1.5px] border-c4 hover:border-primary-blue checked:bg-primary-blue'
              />
              <label
                htmlFor='apartment-checkbox'
                className='text-checkbox-14 cursor-pointer'
              >
                Apartment
              </label>
              <svg
                width='12'
                height='9'
                viewBox='0 0 12 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute left-[5px] pointer-events-none'
              >
                <path
                  d='M11.7251 0.419985C11.6457 0.346628 11.5513 0.288403 11.4472 0.248668C11.3432 0.208934 11.2316 0.188477 11.1189 0.188477C11.0062 0.188477 10.8946 0.208934 10.7905 0.248668C10.6865 0.288403 10.592 0.346628 10.5126 0.419985L4.15139 6.2586L1.47882 3.80106C1.3964 3.72809 1.29911 3.67071 1.1925 3.6322C1.08589 3.59369 0.972054 3.5748 0.857483 3.57662C0.742911 3.57844 0.629852 3.60092 0.524761 3.64279C0.419669 3.68465 0.324603 3.74509 0.244991 3.82063C0.165378 3.89617 0.102779 3.98535 0.0607656 4.08307C0.0187524 4.18079 -0.00185163 4.28513 0.000130571 4.39015C0.00211277 4.49517 0.0266423 4.5988 0.0723181 4.69513C0.117994 4.79145 0.183922 4.87859 0.266338 4.95157L3.54515 7.95697C3.62453 8.03033 3.71897 8.08855 3.82302 8.12829C3.92707 8.16802 4.03867 8.18848 4.15139 8.18848C4.26411 8.18848 4.37572 8.16802 4.47977 8.12829C4.58382 8.08855 4.67826 8.03033 4.75763 7.95697L11.7251 1.57049C11.8118 1.4972 11.881 1.40825 11.9283 1.30924C11.9756 1.21024 12 1.10332 12 0.995238C12 0.887152 11.9756 0.780237 11.9283 0.681231C11.881 0.582225 11.8118 0.493275 11.7251 0.419985Z'
                  fill='white'
                />
              </svg>
            </div>
            <div className='relative flex flex-row justify-between items-center gap-3'>
              <input
                type='checkbox'
                id='resort-checkbox'
                className='false cursor-pointer mr-3 appearance-none h-[22px] w-[22px] rounded-[6px] border-[1.5px] border-c4 hover:border-primary-blue checked:bg-primary-blue'
              />
              <label
                htmlFor='resort-checkbox'
                className='text-checkbox-14 cursor-pointer'
              >
                Resort
              </label>
              <svg
                width='12'
                height='9'
                viewBox='0 0 12 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute left-[5px] pointer-events-none'
              >
                <path
                  d='M11.7251 0.419985C11.6457 0.346628 11.5513 0.288403 11.4472 0.248668C11.3432 0.208934 11.2316 0.188477 11.1189 0.188477C11.0062 0.188477 10.8946 0.208934 10.7905 0.248668C10.6865 0.288403 10.592 0.346628 10.5126 0.419985L4.15139 6.2586L1.47882 3.80106C1.3964 3.72809 1.29911 3.67071 1.1925 3.6322C1.08589 3.59369 0.972054 3.5748 0.857483 3.57662C0.742911 3.57844 0.629852 3.60092 0.524761 3.64279C0.419669 3.68465 0.324603 3.74509 0.244991 3.82063C0.165378 3.89617 0.102779 3.98535 0.0607656 4.08307C0.0187524 4.18079 -0.00185163 4.28513 0.000130571 4.39015C0.00211277 4.49517 0.0266423 4.5988 0.0723181 4.69513C0.117994 4.79145 0.183922 4.87859 0.266338 4.95157L3.54515 7.95697C3.62453 8.03033 3.71897 8.08855 3.82302 8.12829C3.92707 8.16802 4.03867 8.18848 4.15139 8.18848C4.26411 8.18848 4.37572 8.16802 4.47977 8.12829C4.58382 8.08855 4.67826 8.03033 4.75763 7.95697L11.7251 1.57049C11.8118 1.4972 11.881 1.40825 11.9283 1.30924C11.9756 1.21024 12 1.10332 12 0.995238C12 0.887152 11.9756 0.780237 11.9283 0.681231C11.881 0.582225 11.8118 0.493275 11.7251 0.419985Z'
                  fill='white'
                />
              </svg>
            </div>
            <svg
              width='277'
              height='1'
              viewBox='0 0 277 1'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='277' height='1' fill='#E7ECF3' />
            </svg>
          </div>
          {/* Filtering using the price slider */}
          <div>
            <div>
              <label
                htmlFor='price-range'
                className='text-sidebar text-body-18'
              >
                Price range
              </label>
              <div className='flex justify-between  mt-10'>
                <div className='relative w-3/4'>
                  <input
                    id='price-range'
                    type='range'
                    value={value}
                    min='50'
                    max='200'
                    step='1'
                    onChange={handleSliderChange}
                    className='relative w-full h-2 bg-primary-blue rounded-lg cursor-pointer'
                  />
                  <div
                    className='absolute pointer-events-none	 w-[80px] h-[66px] bottom-[28px] left-[50%] transform translate-x-[-50%]'
                    style={{ left: `${((value - 50) / 150) * 100}%` }}
                  >
                    <img
                      src='../../hotels/icons/slider.png'
                      className='w-full h-full'
                    />
                    <span className='text-white absolute left-1/2 top-[24px] transform -translate-x-1/2 -translate-y-1/2'>
                      {value}
                    </span>
                  </div>
                  <div className='flex justify-between pt-2'>
                    <span className='text-c3 text-caption-16'>€50</span>
                    <span className='text-c3 text-caption-16'>€200</span>
                  </div>
                </div>
                {/* Input box with the price value */}
                <input
                  type='number'
                  value={value}
                  min='50'
                  max='200'
                  step='1'
                  onChange={handleInputChange}
                  className='ml-2 pl-3 py-1  w-[64px] h-[30px] text-body-16 bg-white border border-primary-blue rounded'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
