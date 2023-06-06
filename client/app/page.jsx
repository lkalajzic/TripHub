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
import Signup from '../components/Signig/Signup';

export default function Home() {
  return (
    <>
      <Navbar />
      <Login />
      <Signup />
      <SearchField />
      <CardSection />
      <FeaturedDestinations />
      <TopTour />
      <ExploreWorld />
      <TrendingCites />
      <Footer />
    </>
  );
}
