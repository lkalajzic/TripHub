import '../../styles/globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HotelDetail from '../../components/HotelDetail/HotelDetail';

export default function Home() {
  return (
    <>
      <Navbar />
      <HotelDetail />
      <Footer />
    </>
  );
}
