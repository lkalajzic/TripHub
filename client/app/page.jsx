import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardSection from '../components/Hotel/CardSection';
import ExploreWorld from '../components/Hotel/ExploreWorld';
import TrendingCites from '../components/Hotel/TrendingCites';

export default function Home() {
  return (
    <>
      <Navbar />
      <CardSection />
      <ExploreWorld />
      <TrendingCites />
      <Footer />
    </>
  );
}
