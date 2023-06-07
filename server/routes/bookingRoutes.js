import express from 'express';
import * as dotenv from 'dotenv';


import Booking from '../models/bookingModel.mjs';

const router = express.Router();

dotenv.config();

// API endpoint to add a new booking from frontend
router.route('/booking').post(async(req, res) => {
  try{
    const { hotel, checkin, checkout } = req.body;
    const price = hotel.price * Math.ceil((checkout.getTime() - checkin.getTime()) / 86400); //calculates total price of stay

    const booking = new Booking({ hotel, checkin, checkout, price });
    await booking.save();
    res.json({ success: true, message: 'Booking added successfully' });
  } catch(error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred' });
  }
});

// API endpoint to receive all bookings on this account
router.route('/checkTrip').get(async (req, res) => {
  try {
    const id = req.body;
    const response = await Booking.find(id);
    res.json({ success: true, data: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred' });
  }
});
export default router;
