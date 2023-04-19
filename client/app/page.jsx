import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardSection from '../components/Hotel/CardSection';
import HotelList from '../components/HotelSearch/HotelList';
import FeaturedDest from '../components/FeaturedDest/FeaturedDest';
import TopTour from '../components/TopTour/TopTour';
import ExploreWorld from '../components/Hotel/ExploreWorld';
import TrendingCites from '../components/Hotel/TrendingCites';
import TravelPasion from "../components/TravelPasion/TravelPasion"

export default function Home() {
  return (
    <>
      <Navbar />
      <CardSection />
      <TravelPasion />
      <FeaturedDest />
      <TopTour />
      <ExploreWorld />
      <TrendingCites />
      <HotelList />
      <Footer />
    </>
  );
}
