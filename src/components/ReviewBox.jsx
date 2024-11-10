import { Link } from 'react-router-dom';

const ReviewBox = () => {
    return (
        <div>
            <section className="py-20">
                <div>
                    <h4 className="font-bold text-[#F7921E] font-serif md:mb-4 mb-3">
                        <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5" />
                        &nbsp;Write Review</h4>
                    <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold font-serif mt-4">Leave A Review</h2>
                </div>
                <div className="mt-10 w-full lg:w-11/12 flex flex-col items-start justify-center gap-4">
                    <div className="flex flex-col items-start justify-center gap-6">
                        <fieldset className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-center">
                            <div className="flex flex-row gap-4">
                                <input type="text" placeholder="Full Name" className="px-6 py-4 rounded-full w-full md:w-auto outline-none border text-sm border-gray-600 text-gray-600 placeholder:text-gray-600" />
                                <input type="email" placeholder="Email Address" className="px-6 py-4 rounded-full w-full md:w-auto outline-none border text-sm border-gray-600 text-gray-600 placeholder:text-gray-600" />
                            </div>
                            <span className="flex flex-row gap-2 ml-2 md:ml-0 w-full text-sm text-gray-500 md:items-center justify-start md:justify-center">
                                Give rating:
                                <div className="flex flex-row gap-2 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill fill-gray-300 hover:fill-yellow-400 cursor-pointer inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill fill-gray-300 hover:fill-yellow-400 cursor-pointer inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill fill-gray-300 hover:fill-yellow-400 cursor-pointer inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill fill-gray-300 hover:fill-yellow-400 cursor-pointer inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill fill-gray-300 hover:fill-yellow-400 cursor-pointer inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                                &nbsp;
                            </span>
                        </fieldset>
                        <textarea name="message" id="message" placeholder="Message..." className="px-6 py-4 w-full rounded-2xl h-[200px] outline-none border text-sm border-gray-600 text-gray-600 placeholder:text-gray-600"></textarea>
                    </div>
                    <Link to="#" className="rounded-full bg-[#F7921E] text-white px-7 py-4 text-sm font-medium">
                        <button>
                            <span>SUBMIT NOW
                                &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block" viewBox="0 0 256 256">
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

export default ReviewBox;


