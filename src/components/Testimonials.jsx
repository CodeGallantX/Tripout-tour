import { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonials from '../data/testimonials.json';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        focusOnSelect: true,
        arrows: false,
        beforeChange: (current, next) => setActiveIndex(next),
    };

    const handleImageClick = (index) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };

    return (
        <div>
            <section id="services" className="px-10 xl:px-36 py-20 flex flex-col lg:items-start gap-8">
                <div className="lg:hidden w-full flex flex-col items-start justify-center gap-3 mb-8">
                    <h4 className="font-bold text-[#F7921E] font-serif">
                        <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5" />
                        &nbsp;Testimonials
                    </h4>
                    <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold font-serif text-left">Unforgettable Traveller Stories & Reviews</h2>
                </div>

                <div className="flex flex-col lg:grid grid-cols-2 items-center justify-between gap-6">

                    <div className="w-full hidden lg:grid lg:grid-cols-4 gap-6 mb-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`w-20 h-20 rounded-full overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-110 ${activeIndex === index ? 'scale-125 border border-[#F7921E]' : 'scale-90'}`}
                                onClick={() => handleImageClick(index)}
                            >
                                <img
                                    src={testimonial.imageUrl}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:max-w-2xl mx-auto">
                        <Slider ref={sliderRef} {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex flex-col md:flex-row items-center text-left justify-center md:justify-between gap-6 px-4 lg:px-8">
                                    <div className="lg:hidden mb-6">
                                        <img
                                            src={testimonial.imageUrl}
                                            alt={testimonial.name}
                                            className="w-40 h-40 rounded-full object-cover mx-auto"
                                        />
                                    </div>
                                    <div className="hidden w-full lg:flex flex-col items-start justify-center gap-3 mb-8">
                                        <h4 className="font-bold text-[#F7921E] font-serif flex flex-row items-center justify-start">
                                            <img src="/airplane.png" alt="icon" className="inline-flex translate-y-0.5" />
                                            <span>&nbsp;Testimonials</span>
                                        </h4>
                                        <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold font-serif text-left">Unforgettable Traveller Stories & Reviews</h2>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <p className="text-gray-700 text-base font-serif">{testimonial.details}</p>
                                        <div className="flex flex-row gap-4 justify-between">
                                            <div className="flex flex-col gap-2">
                                                <h3 className={`text-xl font-bold font-serif mt-3 ${activeIndex === index ? 'text-[#F7921E]' : 'text-gray-900'}`}>
                                                    {testimonial.name}
                                                </h3>
                                                <span className="text-gray-600 text-sm font-serif">{testimonial.role}</span>
                                                <span className="flex flex-row gap-1 text-sm text-gray-500">
                                                    <div className="flex flex-row gap-2 items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star-fill fill-yellow-400 inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star-fill fill-yellow-400 inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star-fill fill-yellow-400 inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star-fill fill-yellow-400 inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star-fill fill-yellow-400 inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                            <div>
                                                <img
                                                    src="/quotes.png"
                                                    alt="quotes"
                                                    className="opacity-20 w-16 h-16 lg:w-24 lg:h-24 ml-auto animate-pulse"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
