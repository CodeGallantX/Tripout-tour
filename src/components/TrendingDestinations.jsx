import trends from '../data/trending.json'
import { Link } from 'react-router-dom';

const TrendingDestinations = () => {
    return (
        <div>
            <section id="aboutIntro" className="px-10 xl:px-36 py-20">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center justify-between gap-6">
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                            <h4 className="font-bold text-[#F7921E] font-serif">
                                <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5" />
                                &nbsp; Trending Destinations</h4>
                            <h2 className="xl:text-5xl md:text-4xl text-3xl font-bold font-serif text-center">Explore the World; Adventure Awaits</h2>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                                {trends.map((destination, index) => (
                                    <div key={index}>
                                        <div className="group flex flex-row items-center justify-center gap-4 py-6 px-6 lg:px-10 border border-gray-400 hover:bg-white rounded-xl hover:border-none hover:shadow-lg cursor-pointer transition-all duration-200 ease">
                                            <div className=" w-24 h-24">
                                                <img className="rounded-full w-full h-full object-cover object-center group-hover:ring-2 ring-[#f7921e] transition-all duration-300 ease-in-out" src={destination.image} alt={destination.name} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl mb-1">{destination.name}</h3>
                                                <p className="text-sm text-gray-700 mt-1">{destination.visits} Visits</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link to="/destinations" className="flex items-center justify-center mt-8">
                                <button className="text-sm text-center font-semibold text-[#F7921E] bg-[#FDE9D1] hover:bg-orange-200 rounded-full md:px-6 px-6 md:py-4 py-4 font-serif transition-all duration-300 ease-in-out">
                                    SEE MORE
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block -translate-y-1" viewBox="0 0 256 256">
                                        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z">
                                        </path>
                                    </svg>

                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TrendingDestinations;
