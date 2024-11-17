const AboutIntro = () => {
    return (
        <div>
            <section id="aboutIntro" className="px-10 xl:px-36 py-20">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0">
                        <div className="w-full lg:w-8/12 flex flex-col items-start justify-center gap-5">
                            <h4 className="font-bold text-[#F7921E] font-serif">
                                <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5" />
                                &nbsp;What We Offer</h4>
                            <h2 className="xl:text-5xl md:text-4xl text-3xl font-bold font-serif">Discover New Destinations and Adventure Around the World</h2>
                            <p className="text-gray-700 text-sm w-10/12">
                                Embark on a journey filled with exciting destinations and unforgettable experiences. 
                                Explore the world, one adventure at a time, with our tailored travel solutions.
                            </p>
                        </div>
                        <div className="w-auto lg:w-3/12 flex flex-row items-center justify-start gap-4 py-4 px-8 rounded-2xl border-l-4 border-l-[#f7921e] shadow-lg">
                            <span className="text-[#f7921e] text-4xl lg:text-5xl font-bold">25+</span>
                            <h3 className="font-semibold lg:text-2xl">Years of Travel Experiences</h3>
                        </div>
                    </div>
                    <div>
                    <img
            className="object-cover object-left w-full h-[60vh] md:h-[550px] rounded-2xl"
            alt="hero"
            loading='lazy'
            src="/about-banner.jpeg"
          />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutIntro;
