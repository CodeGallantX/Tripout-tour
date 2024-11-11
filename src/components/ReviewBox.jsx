import { Link } from 'react-router-dom';
import Rating from './Rating'

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
                            <Rating />
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


