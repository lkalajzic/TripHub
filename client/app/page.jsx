import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardSection from '../components/Hotel/CardSection';
import HotelList from '../components/HotelSearch/HotelList';
import FeaturedDest from '../components/FeaturedDest/FeaturedDest';
import TopTour from '../components/TopTour/TopTour';

export default function Home() {
  return (
    <>
      <Navbar />
      <TopTour />
      <FeaturedDest />
      <HotelList />
      <CardSection />
      <Footer />
    </>
  );
}
