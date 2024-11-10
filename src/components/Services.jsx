const Services = () => {
    return (
        <div>
            <section id="services" className="px-10 xl:px-36 py-20 flex lg:flex-row flex-col lg:items-center gap-4 justify-between items-start">
                <div className="lg:w-1/2 w-full">
                    <img src="/services_ill.png" alt="Illustration Image" loading='lazy' className="-ml-3" />
                    {/* <img src="https://media.istockphoto.com/id/2015350686/photo/tourist-relaxedly-took-the-pose-of-a-flying-plane-before-traveling.jpg?s=612x612&w=0&k=20&c=ukBtwcgCwmJcGFDrzdpz5akIdZloWc4O2QYWHbz-Kmg=" alt="Illustration Image" className="-ml-3" /> */}
                </div>
                <div className="lg:w-1/2 w-full rounded-r-lg flex flex-col items-start justify-center gap-7">
                    <h4 className="font-bold text-[#F7921E] font-serif">
                        <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5" />
                        &nbsp;What We Provide</h4>
                    <h2 className="lg:text-5xl text-2xl font-bold font-serif">Exceptional Services for Your Travel Experience</h2>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col items-start justify-center gap-4'>
                            <div className='flex flex-col items-start justify-center gap-3 border border-gray-300 rounded-2xl p-8 hover:border-none hover:shadow-lg transition-all duration-500 ease-in-out cursor-default'>
                                <div className="p-2 bg-[#F7921E] rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-white" fill="currentColor" viewBox="0 0 576 512">
                                        <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                                    </svg>
                                </div>
                                <div className='flex flex-col items-start justify-center gap-3'>
                                    <h3 className="text-lg text-gray-700 font-semibold">Custom Itineraries</h3>
                                    <p className="text-sm text-gray-600">Tailored Itineraries for your perfect trip. Discover your ideal travel experience today.</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-center gap-3 border border-gray-300 rounded-2xl p-8 hover:border-none hover:shadow-lg transition-all duration-500 ease-in-out cursor-default'>
                                <div className="p-2 bg-[#F7921E] rounded-full">
                                    <img src="/travel-insurance.png" alt="Icon" />
                                </div>
                                <div className='flex flex-col items-start justify-center gap-3'>
                                    <h3 className="text-lg text-gray-700 font-semibold">Travel Insurance</h3>
                                    <p className="text-sm text-gray-600">Tailored Itineraries for your perfect trip. Discover your ideal travel experience today.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-end justify-center gap-4 translate-y-0 lg:translate-y-4'>
                            <div className='flex flex-col items-start justify-center gap-3 border border-gray-300 rounded-2xl p-8 hover:border-none hover:shadow-lg transition-all duration-500 ease-in-out cursor-default'>
                                <div className="p-2 bg-[#F7921E] rounded-full">
                                    <img src="/professional-success.png" alt="Expert" />
                                </div>
                                <div className='flex flex-col items-start justify-center gap-3'>
                                    <h3 className="text-lg text-gray-700 font-semibold">Expert Guidance</h3>
                                    <p className="text-sm text-gray-600">Tailored Itineraries for your perfect trip. Discover your ideal travel experience today.</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-center gap-3 border border-gray-300 rounded-2xl p-8 hover:border-none hover:shadow-lg transition-all duration-500 ease-in-out cursor-default'>
                                <div className="p-2 bg-[#F7921E] rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-headset fill-white" viewBox="0 0 16 16">
                                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                                    </svg>
                                </div>
                                <div className='flex flex-col items-start justify-center gap-3'>
                                    <h3 className="text-lg text-gray-700 font-semibold">24/7 Support</h3>
                                    <p className="text-sm text-gray-600">Tailored Itineraries for your perfect trip. Discover your ideal travel experience today.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Services;