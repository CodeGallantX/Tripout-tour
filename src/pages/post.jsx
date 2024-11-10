import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const App = () => {

    const page = {
        title: 'Post',
        breadcrumb: [
          { name: 'BLOG', path: '/blog' },
          { name: 'BLOGPOST', path: '/blog/post' },
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