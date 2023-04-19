import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardSection from '../components/Hotel/CardSection';
import HotelList from '@/components/HotelSearch/HotelList';
import FeaturedDest from '@/components/FeaturedDest/FeaturedDest';

export default function Home() {
  return (
    <>
      <Navbar />
      <CardSection />
      <FeaturedDest/>
      <FeaturedDest/>
      <Footer />
    </>
  );
}
