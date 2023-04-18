import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HotelList from '@/components/HotelSearch/HotelList';

export default function Home() {
  return (
    <>
      <Navbar />
      <HotelList />
      <Footer />
    </>
  );
}
