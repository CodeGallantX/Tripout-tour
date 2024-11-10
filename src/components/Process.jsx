import { Link } from 'react-router-dom';
const Process = () => {
    return (
        <div>
            <section className="px-10 xl:px-36 py-20 flex flex-col lg:flex-row items-start lg:items-center justify-center bg-[#fff7f4] ">
                <div className='w-full lg:w-1/3 flex flex-col items-start gap-4'>
                    <h4 className="font-bold text-[#F7921E] font-serif">
                        <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5" />
                        &nbsp;Our Process</h4>
                    <h2 className="lg:text-5xl text-2xl font-bold font-serif">Simple Steps to Your Dream Adventure</h2>
                    <p className="text-sm text-gray-600">We simplify travel planning, guiding you from inspiration to booking with ease. Your adventure awaits!</p>

                    <Link to="#" className="rounded-full bg-[#F7921E] text-white px-7 py-4 text-sm font-medium">
                        <button>
                            <span>GET IN TOUCH
                                &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block" viewBox="0 0 256 256">
                                    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" stroke="#ffffff" strokeWidth="1">
                                    </path>
                                </svg>
                            </span>
                        </button>
                    </Link>
                </div>
                <div className="w-full h-96 lg:w-1/3 ml-0 lg:ml-8">
                    <img src="/process_ill.png" alt="image" loading='lazy' className="w-11/12 h-full object-cover object-center rounded-b-2xl" />
                    {/* <img src="https://media.istockphoto.com/id/1174712683/photo/smiling-african-american-hiker-walking-with-backpack-in-nature.jpg?s=612x612&w=0&k=20&c=SYAvBkvQeGOAutXBYcALcZgbxXm8yE7th_XDR0toPIM=" alt="image" loading='lazy' className="w-11/12" /> */}
                </div>
                <div className='w-full lg:w-1/3 flex flex-col items-start gap-8 lg:gap-4'>
                    <div className='flex flex-row items-center justify-start gap-3'>
                        <div className="p-3 bg-white rounded-full shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-[#F7921E]" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M152,80a32,32,0,1,0-32-32A32,32,0,0,0,152,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,152,32Zm48,112v88a8,8,0,0,1-16,0V151.66c-25.75-2.25-34.35-15.52-42-27.36-2.85-4.39-5.56-8.57-9.13-12.19l-13.4,30.81,37.2,26.57A8,8,0,0,1,160,176v56a8,8,0,0,1-16,0V180.12l-31.07-22.2L79.34,235.19A8,8,0,0,1,72,240a7.84,7.84,0,0,1-3.19-.67,8,8,0,0,1-4.14-10.52L122.19,96.5a8,8,0,0,1,11-3.92,40.92,40.92,0,0,1,8,5.47c6.37,5.52,10.51,11.91,14.16,17.55,7.68,11.84,13.22,20.4,36.6,20.4A8,8,0,0,1,200,144ZM72,152a8,8,0,0,0,7.35-4.85l24-56a8,8,0,0,0-4.2-10.5l-28-12a8,8,0,0,0-10.5,4.2l-24,56a8,8,0,0,0,4.2,10.5l28,12A8,8,0,0,0,72,152ZM54.51,127.8,72.2,86.5l13.3,5.7L67.8,133.49Z"></path>
                            </svg>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-2'>
                            <h3 className="text-lg text-gray-700 font-semibold">Explore Destinations</h3>
                            <p className="text-sm text-gray-600">Discover exciting destinations that inspire your next adventure!</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-3'>
                        <div className="p-3 bg-white rounded-full shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-[#F7921E]" fill="currentColor" viewBox="0 0 576 512">
                                <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                            </svg>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-2'>
                            <h3 className="text-lg text-gray-700 font-semibold">Customise Itinerary</h3>
                            <p className="text-sm text-gray-600">Create a unique itinerary that matches your travel dreams!</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-3'>
                        <div className="p-3 bg-white rounded-full shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-[#F7921E]" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M232,104a8,8,0,0,0,8-8V64a16,16,0,0,0-16-16H32A16,16,0,0,0,16,64V96a8,8,0,0,0,8,8,24,24,0,0,1,0,48,8,8,0,0,0-8,8v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160a8,8,0,0,0-8-8,24,24,0,0,1,0-48ZM32,167.2a40,40,0,0,0,0-78.4V64H88V192H32Zm192,0V192H104V64H224V88.8a40,40,0,0,0,0,78.4Z"></path>
                            </svg>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-2'>
                            <h3 className="text-lg text-gray-700 font-semibold">Book Trip</h3>
                            <p className="text-sm text-gray-600">Finalize your plans and book your dream getaway today!</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Process;