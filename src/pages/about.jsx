import Header from '../components/Header';
import Banner from '../components/Banner';
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
            <Footer />

        </div>
    )
}

export default App;