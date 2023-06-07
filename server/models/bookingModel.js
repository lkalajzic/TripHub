const mongoose = require('mongoose');
import hotelSchema from './hotelModel';

const Booking = new mongoose.schema({
  hotel: { type: hotelSchema, required: true },
  checkin: { type: Date, required: true },
  checkout: { type: Date, required: true },
  price: { type: Number, required: false },
});


const bookingSchema = mongoose.model('Booking', Booking);

export default bookingSchema;
