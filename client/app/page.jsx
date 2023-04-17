import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardSection from '../components/CardSection';

export default function Home() {
  return (
    <>
      <Navbar />

      <div className='text-heading-hero font-poppins'>heading-hero</div>
      <div className='text-heading-1'>heading-1</div>
      <div className='text-heading-2'>heading-2</div>
      <div className='text-heading-3'>heading-3</div>
      <div className='text-heading-4'>heading-4</div>
      <div className='text-body-16'>body-16</div>
      <div className='text-caption-16'>caption-16</div>

      <button className='bg-primary-blue text-c9 p-5 m-5'>primary-blue</button>
      <button className='bg-blue-hover text-c9 p-5 m-5'>blue-hover</button>
      <button className='bg-primary-red text-c9 p-5 m-5'>primary-red</button>
      <button className='bg-primary-purple text-c9 p-5 m-5'>
        primary-purple
      </button>
      <button className='bg-secondary-orange text-c9 p-5 m-5'>
        secondary-orange
      </button>
      <button className='bg-secondary-sky text-c9 p-5 m-5'>
        secondary-sky
      </button>
      
      <CardSection />
      <Footer />
    </>
  );
}
