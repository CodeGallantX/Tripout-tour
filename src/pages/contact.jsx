import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const App = () => {

    const page = {
        title: 'Contact',
        breadcrumb: [
          { name: 'CONTACT', path: '/contact' },
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