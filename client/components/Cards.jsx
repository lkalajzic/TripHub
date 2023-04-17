import React from 'react'
import cardList from './data';

const Cards = () => {
    return (
        <>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
                {cardList.map(card => (
                <div className='shadow-xl  rounded-3xl'>
                    <img className='rounded-t-3xl' src={card.img} alt=""/>
                    <div className='p-5'>
                        <h3 className='text-3x1 font-bold text-slate-800 mb-3'>{card.title}</h3>
                        <p className='text-lg font-normal text-gray-600'>{card.text}</p>
                    </div>
                </div>
                ))}
            </div>
        </>
      );
};

export default Cards