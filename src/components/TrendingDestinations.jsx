import trends from '../data/trending.json'

const TrendingDestinations = () => {
    return (
        <div>
            <section id="aboutIntro" className="px-10 xl:px-36 py-20">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0">
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                            <h4 className="font-bold text-[#F7921E] font-serif">
                                <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5" />
                                &nbsp; Trending Destinations</h4>
                            <h2 className="xl:text-5xl md:text-4xl text-3xl font-bold font-serif">Explore the World; Adventure Awaits</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {trends.map((destination, index) => (
                                <div key={index}>
                                    <div className="rounded-xl hover:shadow-lg">
                                        <div className=" w-32 h-32">
                                            <img className="rounded-full w-full h-full object-cover object-center hover:border-2 border-[#f7921e] transition-all duration-300 ease-in-out" src={destination.image} alt={destination.name} />
                                        </div>
                                        <div>
                                            <h3>{destination.name}</h3>
                                            <p>{destination.visits} People vists</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TrendingDestinations;
