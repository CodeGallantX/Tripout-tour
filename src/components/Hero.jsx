import HeaderHome from "./HeaderHome";

const Hero = () => {
  return (
    <div>
      <HeaderHome />
      <section className="font-sans bg-gray-50 text-white min-h-screen">
        <div className="relative flex items-center justify-center flex-col">
          <img
            className="object-cover object-left w-full h-[105vh] md:h-screen"
            alt="hero"
            loading='lazy'
            src="https://media.gettyimages.com/id/1308867983/photo/brecon-beacons-landscape.jpg?s=612x612&w=0&k=20&c=GsbYnKwpqpEMQ4FPtZG5DFGMAcoOVlPSd_R38RlXNNE="
          />
          <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0"></div>
          <div className="text-center lg:w-2/3 py-20 px-10 xl:px-16 w-full absolute">
            <p className="mb-8 leading-relaxed">It&apos;s Time to Travel</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-bold font-serif">
              Embark on Your Ultimate Travel Adventure Today!
            </h1>
            <p className="mb-8 leading-relaxed">Your Adventure Awaits; Explore the World</p>
            <div className="flex flex-row justify-center items-center text-gray-600 space-x-2 md:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt w-5 h-5 sm:w-4 sm:h-4 translate-x-12 md:translate-x-14"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <input
                type="text"
                id="search"
                placeholder="Search Your Destination..."
                className="rounded-full w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl py-4 px-12 md:py-5 outline-none focus:ring-2 focus:ring-[#F7921E] text-sm font-medium transition-all duration-300 ease"
              />
              <button className="rounded-full p-3 md:p-3.5 bg-[#F7921E] -translate-x-14 md:-translate-x-[68px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search fill-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
