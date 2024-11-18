import Header from '../components/Header';
import AboutIntro from '../components/AboutIntro';
import TrendingDestinations from '../components/TrendingDestinations';
import Banner from '../components/Banner';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import OfferBanner from '../components/OfferBanner';
import Digital from '../components/Digital';
import Footer from '../components/Footer';

const App = () => {

    const page = {
        title: 'About',
        breadcrumb: [
          { name: 'ABOUT', path: '/about' },
        ],
      };

    return (
        <div>
            <Header />
            <Banner page={page}/>
            <AboutIntro />
            <TrendingDestinations />
            <Team />
            <Testimonials />
            <Partners />
            <OfferBanner />
            <Digital />
            <Footer />
        </div>
    )
}

export default App;