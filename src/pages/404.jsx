import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Header />
            <div className='flex flex-col items-center justify-center gap-8 py-36 bg-gradient-to-tl from-orange-200 to-amber-950'>
                <h1 className='text-4xl md:text-7xl font-semibold'>Ooops!</h1>
                <p className="text-xl">This page does not exist</p>
                <Link to='/'>
                    <button className='bg-orange-400 hover:bg-amber-950 hover:text-white outline-none px-4 py-3 hover:scale-105 transition-all duration-300 ease-in-out'>Back to Home</button>
                </Link>
            </div>
            <Footer />

        </div>
    )
}

export default App;