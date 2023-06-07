import mongoose from 'mongoose';
//import hotelSchema from './hotelModel.js';

const Booking = new mongoose.Schema({
  hotel: { type: String, required: true },
  checkin: { type: Date, required: true },
  checkout: { type: Date, required: true },
  price: { type: Number, required: false },
});

export default mongoose.model('Booking', Booking);
