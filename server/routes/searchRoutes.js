import express from 'express';
import * as dotenv from 'dotenv';

import Hotel from '../models/hotelModel.js';

dotenv.config();

const router = express.Router();

//api to check connection
router.route('/search').get(async (req, res) => {
  res.status(200).json({ message: 'Hello from searchRoutes!' });
});


//filter through hotels in the database using arguments receiceved from frontend
async function filterHotels(name, location, maxPrice, minPrice, minRating, currency) {
  const filter = {};

  if(name !== undefined && name !== null){
    filter.name = name;
  }

  if(location !== undefined && location !== null){
    filter.location = location;
  }

  if(maxPrice !== undefined && maxPrice !== 0){
    filter.Price = { $lte: maxPrice };
  }

  if(minPrice !== undefined && minPrice !== 0){
    if(filter.Price) {
      filter.Price.$gte = minPrice;
    } else {
      filter.Price = minPrice;
    }
  }

  if(minRating !== undefined && minRating !== 0){
    filter.rating = { $gte: minRating };
  }

  if(currency !== undefined && currency !== null){
    filter.currency = currency;
  }

  const filteredHotels = await Hotel.find(filter);
  return filteredHotels;
}

//creates API endpoint to handle filter request
router.route('/').post(async(req, res) => {
  try{
    const { name, location, maxPrice, minPrice, minRating, currency } = req.body;

    const filteredHotels = filterHotels(name, location, maxPrice, minPrice, minRating, currency);

    res.status(200).json({ filteredHotels });
  } catch(err){
    console.error(err);
    res.status(500).send(err?.response.data.error.message || 'Something went wrong');
  }
});

export default router;
