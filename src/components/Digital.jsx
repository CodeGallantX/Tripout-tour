
const Digital = () => {
    return (
        <div>
            <section className="px-10 xl:px-36 py-10">
                <div className="relative flex px-6 sm:px-14 lg:px-16 py-8 rounded-2xl bg-[#24201D] md:flex-row flex-col items-center md:justify-between text-white">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col gap-4 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h4 className="font-bold text-[#F7921E] font-serif">
                            <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5"/>
                        &nbsp;Digital Platform</h4>
                        <h2 className="lg:text-4xl text-2xl font-bold font-serif">App Only Discounts <br/> Travel More for Less!</h2>
                        <p className="text-sm text-white w-11/12 lg:w-5/12 xl:w-10/12">Unlock exclusive discounts on travel by booking through our app today! Save more on flights, hotels, and adventures!</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:flex xl:flex-row lg:flex-col xl:items-center items-center lg:items-start justify-center gap-4">
                            <button className="bg-gray-100 inline-flex md:w-full w-auto lg:w-auto py-3 px-4 md:py-4 md:px-5 rounded-xl items-center hover:bg-gray-200 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 md:w-10 md:h-10 fill-[#F7921E]" viewBox="0 0 512 512">
                                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                </svg>
                                <span className="ml-4 flex items-start flex-col leading-none text-black">
                                    <span className="text-xs font-serif text-gray-600 md:mb-1 font-medium">Get It On</span>
                                    <span className="font-sans font-bold text-base md:text-xl text-left">Google Play</span>
                                </span>
                            </button>
                            <button className="bg-gray-100 inline-flex md:w-full w-auto lg:w-full xl:w-auto py-3 px-4 md:py-4 md:px-5 rounded-xl items-center hover:bg-gray-200 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 md:w-10 md:h-10 fill-[#F7921E]" viewBox="0 0 305 305">
                                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                                </svg>
                                <span className="ml-4 flex items-start flex-col leading-none text-black">
                                    <span className="text-xs font-serif text-gray-600 md:mb-1 font-medium">Download on the</span>
                                    <span className="font-sans font-bold text-base md:text-xl">App Store</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full translate-y-8 xl:translate-y-8 md:translate-y-0 lg:translate-y-0 static md:absolute xl:static bottom-0 right-0">
                        <img className="object-cover object-center rounded w-full" alt="hero" loading='lazy' src="/digital_ill.png" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Digital;