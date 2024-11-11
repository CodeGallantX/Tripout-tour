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
      <section className="flex flex-col-reverse lg:flex-row items-start justify-between gap-2 lg:gap-20 px-6 md:px-10 xl:px-36 py-10 lg:py-0">
        <BlogList />
        <BlogFilter/>
      </section>
      <Footer />

    </div>
  )
}

export default App;