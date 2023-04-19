import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardSection from '../components/Hotel/CardSection';
import HotelList from '../components/HotelSearch/HotelList';
import FeaturedDest from '../components/FeaturedDest/FeaturedDest';
import TopTour from '../components/TopTour/TopTour';
import ExploreWorld from '../components/Hotel/ExploreWorld';
import TrendingCites from '../components/Hotel/TrendingCites';
import HotelList from '@/components/HotelSearch/HotelList';
import SearchField from '@/components/SearchField';

export default function Home() {
  return (
    <>
      <Navbar />
      <SearchField />
      <CardSection />
      <FeaturedDest />
      <TopTour />
      <ExploreWorld />
      <TrendingCites />
      <HotelList />
      <Footer />
    </>
  );
}
