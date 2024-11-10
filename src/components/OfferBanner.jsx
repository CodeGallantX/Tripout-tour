import { Link } from 'react-router-dom';
const OfferBanner = () => {
  return (
    <div>
        <section className='border-box flex flex-col sm:flex-row items-center justify-center px-10 xl:px-36 my-10 h-[600px] sm:h-[355px]'>
            <div className="w-full sm:w-1/2 h-1/2 sm:h-full">
                <img src="/hot-air-balloons.jpg" alt="offer image" loading='lazy' className="object-cover object-center sm:object-top rounded-t-2xl sm:rounded-r-none sm:rounded-l-2xl h-full w-full"/>
            </div>
            <div className="w-full sm:w-1/2 bg-[#24201D] text-white rounded-b-2xl sm:rounded-l-none sm:rounded-r-2xl flex flex-col items-start justify-center gap-5 p-8 h-full ">
                <h4 className="font-bold text-[#F7921E] font-serif">
                <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5"/>
                &nbsp;Offer For You</h4>
                <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-3xl font-bold font-serif">Discover Incredible <br /> Deals Just For You</h2>
                <Link to="#" className="mt-4  rounded-full bg-[#F7921E] text-white px-6 py-3 sm:px-7 sm:py-4 text-sm font-medium">
                    <button>
                        <span className="sm:text-base text-[12px]">CONTACT US NOW
                         &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="sm:inline-block hidden" viewBox="0 0 256 256">
                                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" stroke="#ffffff" strokeWidth="1">
                                </path>
                            </svg>
                        </span>
                    </button>
                </Link>
            </div>    
        </section>
    </div>
  )
}

export default OfferBanner;