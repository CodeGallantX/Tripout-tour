import destinations from '.././data/destinations.json';
import { Link } from 'react-router-dom';

const Destinations = () => {
    return (
        <div>
            <section id="destinations" className="px-10 xl:px-36 py-20">
                <div>
                    <h4 className="font-bold text-[#F7921E] font-serif md:mb-4 mb-3">
                    <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5"/>
                    &nbsp;Popular Destinations</h4>
                    <Link to="/destinations">
                        <button className="text-sm font-medium text-[#F7921E] mb-0 -mt-7 bg-[#FDE9D1] hover:bg-orange-200 rounded-full md:px-6 px-5 md:py-4 py-3 font-serif float-right">
                            SEE MORE
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block -translate-y-1" viewBox="0 0 256 256">
                                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z">
                                </path>
                            </svg>

                        </button>
                    </Link>
                    <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold font-serif mt-4">Top Destinations You Must Explore</h2>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-2 items-center justify-start mt-4">
                    {destinations.map((destination, index) => (
                        <div key={index} className="p-4 pl-0 w-full">
                            <div className="relative group h-full rounded-2xl overflow-hidden cursor-pointer font-sans">
                                <img className="md:h-80 h-64 w-full object-cover object-left group-hover:object-center group-hover:brightness-90 transition-all duration-500 ease-in-out" src={destination.url} loading='lazy' alt="blog" />
                                <div className="absolute h-full md:h-auto md:bottom-0 -bottom-5 md:right-6 right-0 md:w-10/12 w-full mx-auto p-6 md:bg-orange-50 bg-black/50 mb-0 rounded-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 transition-all duration-500 delay-75 ease">
                                    <div className='flex flex-col gap-3 md:items-start items-center justify-center md:translate-y-0 translate-y-20 transition-all duration-700 ease'>
                                        <h1 className="title-font md:text-2xl text-3xl font-bold md:text-gray-700 text-white font-serif">{destination.country}</h1>
                                        <p className="leading-relaxed text-sm md:text-gray-500 text-gray-200">{destination.visits} People Visits</p>
                                    </div>
                                </div>
                                <span className="px-2 py-1 bg-orange-50 rounded-full absolute top-4 right-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star-fill fill-yellow-400 inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    &nbsp;
                                    {destination.rating}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center mt-4 font-serif'>
                    <span className="text-center text-sm">Explore our top destinations voted by more than <span className="text-[#F7921E]">100,000+</span> customers around the world.</span>
                </div>
            </section>
        </div>
    )
}

export default Destinations;