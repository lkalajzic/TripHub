import express from 'express';
import * as dotenv from 'dotenv';

//import searchQuery from './searchQuery.js';
import hotels from '../constants/hotelData.js';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from searchRoutes!' });
});

const filterHotels = (name, location, maxPrice, minPrice, minRating, currency, minReviews) => {
  return hotels.filter(hotel =>
    (!location || hotel.location === location) &&
    (!minRating || hotel.rating >= minRating) &&
    (!maxPrice || hotel.price <= maxPrice) &&
    (!currency || hotel.currency === currency) &&
    (!minReviews || hotel.reviews >= minReviews) &&
    (!minPrice || hotel.price >= minPrice),
  );
};


router.route('/').post(async(req, res) => {
  try{
    const { query } = req.body;

    const res = filterHotels(query);
    res.status(200).json({ res });
  } catch(err){
    console.error(err);
    res.status(500).send(err?.response.data.error.message || 'Something went wrong');
  }
});

export default router;
