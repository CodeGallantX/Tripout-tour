import Header from '../components/Header';
import AboutIntro from '../components/AboutIntro';
import TrendingDestinations from '../components/TrendingDestinations';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import About from '../components/About';
import Process from '../components/Process';
import Digital from '../components/Digital';

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
            <About />
            <Process />
            <Digital />
            <Footer />
        </div>
    )
}

export default App;