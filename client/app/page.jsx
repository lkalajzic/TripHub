import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardSection from '../components/Hotel/CardSection';
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
      <ExploreWorld />
      <TrendingCites />
      <Footer />
    </>
  );
}
