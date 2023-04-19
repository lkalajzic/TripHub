import {genRand} from "../utils/index.js"

export default [
    {
        img: '/../public/imagesTravel/beach.jpg',
        title: 'Beach Hobby',
        text: `${genRand(1, 5, 1)} (${genRand(1, 130, 0)} reviews)`,
    },
    {
        img: '/../public/imagesTravel/sports.jpg',
        title: 'Spoirts Trips',
        text: `${genRand(1, 5, 1)} (${genRand(1, 130, 0)} reviews)`,
    },
    {
        img: '/../public/imagesTravel/city.jpg',
        title: 'City Tours',
        text: `${genRand(1, 5, 1)} (${genRand(1, 130, 0)} reviews)`,
    },
    {
        img: '/../public/imagesTravel/hike.jpg',
        title: 'Hiking Trips',
        text: `${genRand(1, 5, 1)} (${genRand(1, 130, 0)} reviews)`,
    }
  ];