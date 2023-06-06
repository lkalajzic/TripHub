import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import SearchField from '../components/SearchField';
import CardSection from '../components/Hotel/CardSection';
import FeaturedDestinations from '../components/FeaturedDestinations/FeaturedDestinations';
import TopTour from '../components/TopTour/TopTour';
import ExploreWorld from '../components/Hotel/ExploreWorld';
import TrendingCites from '../components/Hotel/TrendingCites';
import Login from '../components/Signig/Login';
import HotelDetail from '../components/HotelDetail/HotelDetail';

export default function Home() {
  return (
    <div className='bg-slate-100'>
      <Navbar />
      <SearchField />
      <CardSection />
      <FeaturedDestinations />
      <TopTour />
      <ExploreWorld />
      <TrendingCites />
      <Footer />
    </div>
  );
}
