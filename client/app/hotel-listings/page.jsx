import '../../styles/globals.css';
import Navbar from '../../components/Navbar';
import SearchField from '../../components/SearchField';
import Footer from '../../components/Footer';
import HotelList from '../../components/HotelListings/HotelList';
import Filter from '../../components/HotelListings/Filter';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='bg-[#fafafb]'>
        <SearchField />
        <div className='flex flex-row justify-center items-start m-5 gap-[40px]'>
          <Filter />
          <HotelList />
        </div>
      </div>
      <Footer />
    </>
  );
}
