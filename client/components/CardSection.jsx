import React from 'react'
import Cards from './Cards'

const CardSection = () => {
    return (
        <>
            <div className='container mx-auto py-36 px-8'>
                <div>
                <h1 className='text-heading-1 text-center text-slate-800 mb-3'>
                    Explore the best places in the world
                </h1>
                </div>
                <div>
                <p className='text-body-16 text-center text-gray-600'>
                    Whether you're goigng on a business trip or looking for a vecation destination, we're here to help and guide you through trip planning.
                </p>
                </div>
                <div className='p-9'>
                    <Cards />
                </div>
            </div>
        </>
      );
};

export default CardSection