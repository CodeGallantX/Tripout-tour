import Header from '../components/Header';
import Banner from '../components/Banner';
import DestinationGrid from '../components/DestinationGrid';
import DestinationIntro from '../components/DestinationIntro';
import InfoCard from '../components/InfoCard';
import Itinerary from '../components/Itinerary';
import TourMap from '../components/TourMap';
import Faq from '../components/Faq';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';



const App = () => {

  const page = {
    title: 'Destination Detail',
    breadcrumb: [
      { name: 'DESTINATIONS', path: '/destinations' },
      { name: 'DESTINATION DETAIL', path: '/destination-detail' },
    ],
  };

  return (
    <div>
      <Header />
      <Banner page={page} />
      <DestinationGrid />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-20 px-6 md:px-10 xl:px-36">
        <div className="lg:col-span-2">
          <DestinationIntro />
          <Itinerary />
          <TourMap />
          <Faq />
        </div>
        <div>
          <InfoCard />
        </div>
      </div>
          <Reviews />
      <Footer />

    </div>
  )
}

export default App;