import mongoose from 'mongoose';


const Hotel = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  location: { type: String, required: true },
  price: { type: Number, required: true, max: 5000 },
  image: { type: String, required: false },
  currency: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
});

//filling up database

const hotelSchema = mongoose.model('Hotel', Hotel);

const HotelsDB =[
  {
    name: 'Hotel California',
    location: 'Paris, France',
    image: 'hotel-california.jpg',
    price: 300,
    currency: 'EUR',
    rating: 4.7,
    reviews: 157,
    description: 'A georgious hotel in a neocolonial style in the canter of XVI district made to blow you away.',
  },
  {
    name: 'Barcelona Beach Resort',
    location: 'Barcelona, Spain',
    image: 'barcelona-beach-resort.jpg',
    price: 200,
    currency: 'EUR',
    rating: 4.5,
    reviews: 82,
    description: 'A beautiful beachfront resort in Barcelona.',
  },
  {
    name: 'Tokyo Skyline Hotel',
    location: 'Tokyo, Japan',
    image: 'tokyo-skyline-hotel.jpg',
    price: 25000,
    currency: 'JPY',
    rating: 4.8,
    reviews: 231,
    description: 'A luxurious hotel with stunning views of Tokyo skyline.',
  },
  {
    name: 'London Grand Palace',
    location: 'London, UK',
    image: 'london-grand-palace.jpg',
    price: 220,
    currency: 'GBP',
    rating: 4.6,
    reviews: 109,
    description: 'An elegant palace hotel in the heart of London.',
  },
  {
    name: 'Athens Pantheon Resort',
    location: 'Athens, Greece',
    image: 'athens-pantheon-resort.jpg',
    price: 180,
    currency: 'EUR',
    rating: 4.4,
    reviews: 76,
    description: 'A resort-style hotel overlooking the Pantheon in Athens.',
  },
  {
    name: 'Cairo Nile View Hotel',
    location: 'Cairo, Egypt',
    image: 'cairo-nile-view-hotel.jpg',
    price: 1500,
    currency: 'EGP',
    rating: 4.3,
    reviews: 63,
    description: 'A hotel with stunning Nile River views in Cairo.',
  },
];

Promise.all(HotelsDB.map((HotelDB) => new hotelSchema(HotelDB).save()))
  .then(() => {
    console.log('All bookings saved successfully!');
  })
  .catch((error) => {
    console.error('Error saving bookings:', error);
  });

export default hotelSchema;
