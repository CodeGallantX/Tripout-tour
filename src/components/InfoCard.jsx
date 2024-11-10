import { Link } from 'react-router-dom';
const InfoCard = () => {
    return (
        <div className="py-14">
            <div className="border border-gray-500 rounded-lg w-full md:max-w-4xl lg:w-full px-5 py-4 ml-auto">
                <div className="flex flex-row items-center justify-start mb-4">
                    <span className="text-gray-8 font-semibold mr-1 inline-flex items-center leading-none text-sm">
                        Starts from
                    </span>
                    <span className="text-[#F7921E] text-xl font-bold">
                        $225
                    </span>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="leading-relaxed text-sm border border-gray-700 text-gray-500 rounded-full px-4 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt inline-block fill-[#F7921E]" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                        &nbsp; From: 08 Oct - 10 Oct
                    </p>
                    <p className="leading-relaxed text-sm border border-gray-700 text-gray-500 rounded-full px-4 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt inline-block fill-[#F7921E]" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                        &nbsp; Guests: 2 Adults - 1 Child
                    </p>
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-bold">Popular Landmarks</h3>
                    <div className="flex flex-col  gap-4 mt-2 mb-8">
                        <div className="flex flex-row items-center justify-between text-gray-500">
                            <p className="leading-relaxed text-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt inline-block fill-[#F7921E]" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                                &nbsp; Royal Culture Museum
                            </p>
                            <span>0.5km</span>
                        </div>
                        <div className="flex flex-row items-center justify-between text-gray-500">
                            <p className="leading-relaxed text-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt inline-block fill-[#F7921E]" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                                &nbsp; Neon Lex Club
                            </p>
                            <span>1.0km</span>
                        </div>
                        <div className="flex flex-row items-center justify-between text-gray-500">
                            <p className="leading-relaxed text-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt inline-block fill-[#F7921E]" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                                &nbsp; White Sand Beach
                            </p>
                            <span>1.5km</span>
                        </div>
                        <div className="flex flex-row items-center justify-between text-gray-500">
                            <p className="leading-relaxed text-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt inline-block fill-[#F7921E]" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                                &nbsp; Walking Street 11
                            </p>
                            <span>2.5km</span>
                        </div>
                    </div>
                </div>

                <Link to="#" className="mt-4 mb-2 rounded-full bg-[#F7921E] flex flex-col items-center justify-center w-full text-white px-6 py-4">
                    <button>
                        <span className="text-sm font-semibold">GET STARTED NOW
                            &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block" viewBox="0 0 256 256">
                                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" stroke="#ffffff" strokeWidth="1">
                                </path>
                            </svg>
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default InfoCard
