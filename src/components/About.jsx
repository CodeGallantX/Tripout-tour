import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <section id="about" className="px-10 xl:px-36 py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between bg-[#fff7f4]">
                <div className="w-full lg:w-1/2 rounded-l-lg">
                    <img src="/about_ill.png" alt="image" className="w-11/12" loading='lazy'/>
                </div>
                <div className="w-full lg:w-1/2 rounded-r-lg flex flex-col items-start justify-center gap-5">
                    <h4 className="font-bold text-[#F7921E] font-serif">
                        <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5"/>
                        &nbsp;About</h4>
                    <h2 className="lg:text-5xl text-2xl font-bold font-serif">Your Journey Begins Here <br /> Explore With Us</h2>
                    <p className="text-sm text-gray-600">Just a bunch of rubbish and meaningless text used by developers to fill empty text spaces. We call them placeholders; they hold places for the real thing, so that the particular section lacking real text will not look unseemly.</p>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-28'>
                        <div className='flex flex-row items-center justify-start gap-3'>
                            <div className="p-3 bg-white rounded-full shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-[#F7921E]" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a87.5,87.5,0,0,1,48,14.28V74L153.83,99.74,122.36,104l-.31-.22L102.38,90.92A16,16,0,0,0,79.87,95.1L58.93,126.4a16,16,0,0,0-2.7,8.81L56,171.44l-3.27,2.15A88,88,0,0,1,128,40ZM62.29,186.47l2.52-1.65A16,16,0,0,0,72,171.53l.21-36.23L93.17,104a3.62,3.62,0,0,0,.32.22l19.67,12.87a15.94,15.94,0,0,0,11.35,2.77L156,115.59a16,16,0,0,0,10-5.41l22.17-25.76A16,16,0,0,0,192,74V67.67A87.87,87.87,0,0,1,211.77,155l-16.14-14.76a16,16,0,0,0-16.93-3l-30.46,12.65a16.08,16.08,0,0,0-9.68,12.45l-2.39,16.19a16,16,0,0,0,11.77,17.81L169.4,202l2.36,2.37A87.88,87.88,0,0,1,62.29,186.47ZM185,195l-4.3-4.31a16,16,0,0,0-7.26-4.18L152,180.85l2.39-16.19L184.84,152,205,170.48A88.43,88.43,0,0,1,185,195Z"></path>
                                </svg>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <h3 className="text-lg text-gray-700 font-semibold">Discovery</h3>
                                <p className="text-sm text-gray-600">More meaningless text, we never get tired. It is said that they originate from Latin.</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-start gap-3'>
                            <div className="p-3 bg-white rounded-full shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-[#F7921E]" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M238.25,229A8,8,0,0,1,227,230.25c-.37-.3-38.82-30.25-99-30.25S29.36,230,29,230.26a8,8,0,0,1-10-12.51c1.63-1.3,38.52-30.26,98.29-33.45A119.94,119.94,0,0,1,114,146.37c1.74-21.71,10.92-50.63,43-72.48A64.65,64.65,0,0,0,140.26,72c-19,.62-30.94,11.71-36.5,33.92A8,8,0,0,1,96,112a7.64,7.64,0,0,1-1.94-.24,8,8,0,0,1-5.82-9.7c9.25-36.95,33.11-45.42,51.5-46a81.48,81.48,0,0,1,21.68,2.45c-3.83-6.33-9.43-12.93-17.21-16.25-10-4.24-22.17-2.39-36.31,5.51a8,8,0,0,1-7.8-14c18.74-10.45,35.72-12.54,50.48-6.2,12.49,5.36,20.73,15.78,25.87,25,6.18-9.64,13.88-16.17,22.39-18.94,11.86-3.87,24.64-.72,38,9.37a8,8,0,0,1-9.64,12.76c-8.91-6.73-16.77-9.06-23.35-6.93-7.29,2.35-12.87,10-16.37,16.61A70.46,70.46,0,0,1,208,73.07c14.61,8.35,32,26.05,32,62.94a8,8,0,0,1-16,0c0-23.46-8.07-40-24-49a50.49,50.49,0,0,0-5.75-2.8,55.64,55.64,0,0,1,5.06,33.06,59.41,59.41,0,0,1-8.86,23.41,8,8,0,0,1-13.09-9.2c.74-1.09,16.33-24.38-3.26-49.37-27,15.21-41.89,37.25-44.16,65.59a104.27,104.27,0,0,0,3.83,36.44c62.65,1.81,101.52,32.33,103.2,33.66A8,8,0,0,1,238.25,229ZM24,140a28,28,0,1,1,28,28A28,28,0,0,1,24,140Zm16,0a12,12,0,1,0,12-12A12,12,0,0,0,40,140Z"></path>
                                </svg>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <h3 className="text-lg text-gray-700 font-semibold">Inspiration</h3>
                                <p className="text-sm text-gray-600"> Infact, I have proof: Does &ldquo;Lorem Ipsum&rdquo; ring a bell?</p>
                            </div>
                        </div>
                    </div>
                    <Link to="#" className="rounded-full bg-[#F7921E] text-white px-7 py-4 text-sm font-medium">
                        <button>
                            <span>EXPLORE MORE
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

export default About;