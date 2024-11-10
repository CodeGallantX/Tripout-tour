import Header from '../components/Header';
import Banner from '../components/Banner';
import BlogList from '../components/BlogList';
import BlogFilter from '../components/BlogFilter';
import Footer from '../components/Footer';

const App = () => {

  const page = {
    title: 'Blog',
    breadcrumb: [
      { name: 'BLOG', path: '/blog' },
    ],
  };

  return (
    <div>
      <Header />
      <Banner page={page} />
      <section className="flex flex-row items-start justify-between px-6 md:px-10 xl:px-36">
        <BlogList />
        <BlogFilter/>
      </section>
      <Footer />

    </div>
  )
}

export default App;