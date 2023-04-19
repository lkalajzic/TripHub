import Link from 'next/link';
import Image from 'next/image';

import logo from '../public/general/logo.png';

const Footer = () => {
  return (
    <>
      <div className='bg-[#F4F5F6] flex justify-center w-full items-center min-h-[500px] min-w-[390px]'>
        <div className='py-8 max-w-7xl flex w-full'>
          <div className='flex flex-col-reverse md:flex-row w-full pl-12'>
            <div className='w-1/3 flex flex-col gap-3 mr-4'>
              <Link href={'/'}>
                <div className='relative w-[40px] h-[38px] object-contain flex items-center'>
                  <Image src={logo} alt='logo' />
                  <p className='text-heading-4 text-c2 leading-6 ml-2'>
                    TripHub
                  </p>
                </div>
              </Link>
              <p className='text-c3 text-[14px] leading-6'>
                Explore your world effortlessly with TripHub - Your one-stop
                destination for hassle-free trip booking!
              </p>
            </div>

            <div className='flex flex-col md:flex-row md:ml-8 w-full mb-15'>
              <div className='w-full flex flex-col gap-3 text-sm pb-10 md:pb-0'>
                <h5 className='text-c2 text-heading-4'>Services</h5>
                <p className='text-c4 text-sm hover:underline cursor-pointer text-[14px] leading-6'>
                  Travel Booking
                </p>
                <p className='text-c4 text-sm hover:underline cursor-pointer text-[14px] leading-6'>
                  Flight Booking
                </p>
                <p className='text-c4 text-sm hover:underline cursor-pointer text-[14px] leading-6'>
                  Car Booking
                </p>
              </div>

              <div className='w-full flex flex-col gap-3 text-sm pb-10 md:pb-0'>
                <h5 className='text-c2 text-heading-4'>Support</h5>
                <p className='text-c4 text-sm hover:underline cursor-pointer text-[14px] leading-6'>
                  Account
                </p>
                <p className='text-c4 text-sm hover:underline cursor-pointer text-[14px] leading-6'>
                  Legal
                </p>
                <p className='text-c4 text-sm hover:underline cursor-pointer text-[14px] leading-6'>
                  Contact
                </p>
                <p className='text-c4 text-sm hover:underline cursor-pointer text-[14px] leading-6'>
                  Terms & Conditions
                </p>
                <p className='text-c4 text-sm hover:underline cursor-pointer text-[14px] leading-6'>
                  Privacy Policy
                </p>
              </div>

              <div className='w-full flex flex-col gap-3 text-sm pb-10 md:pb-0'>
                <h5 className='text-c2 text-heading-4'>Business</h5>
                <p className='text-c4 text-sm hover:underline cursor-pointer text-[14px] leading-6'>
                  Success
                </p>
                <p className='text-c4 text-sm hover:underline cursor-pointer text-[14px] leading-6'>
                  About
                </p>
                <p className='text-c4 text-sm hover:underline cursor-pointer text-[14px] leading-6'>
                  Blog
                </p>
                <p className='text-c4 text-sm hover:underline cursor-pointer text-[14px] leading-6'>
                  Information
                </p>
                <p className='text-c4 text-sm hover:underline cursor-pointer text-[14px] leading-6'>
                  Travel Guide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
