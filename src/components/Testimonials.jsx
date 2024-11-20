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
            <section id="services" className="px-10 xl:px-36 py-20 flex flex-col lg:items-center gap-4">
                <div className="w-full rounded-r-lg flex flex-col items-start justify-center gap-3 mb-8">
                    <h4 className="font-bold text-[#F7921E] font-serif">
                        <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5" />
                        &nbsp;Testimonials
                    </h4>
                    <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold font-serif">Unforgettable Traveller Stories & Reviews</h2>
                </div>

                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 space-x-10">

                    {/* Image grid visible only on large screens */}
                    <div className="hidden lg:grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index} 
                                className={`w-24 h-24 rounded-full overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-110 ${activeIndex === index ? 'scale-125 border-4 border-[#F7921E]' : 'scale-90'}`}
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

                    {/* Testimonial slider section */}
                    <div className="w-full max-w-2xl p-10 lg:p-0">
                        <Slider ref={sliderRef} {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex flex-col items-center text-left justify-start p-4 space-y-4">
                                    {/* Image for smaller screens */}
                                    <div className="lg:hidden mb-6">
                                        <img
                                            src={testimonial.imageUrl}
                                            alt={testimonial.name}
                                            className="w-24 h-24 rounded-full object-cover mx-auto"
                                        />
                                    </div>
                                    <p className="text-gray-700 text-base font-serif">{testimonial.details}</p>
                                    <h3 className={`text-xl font-bold font-serif mt-3 ${activeIndex === index ? 'text-[#F7921E]' : 'text-gray-900'}`}>
                                        {testimonial.name}
                                    </h3>
                                    <span className="text-gray-600 text-sm font-serif">{testimonial.role}</span>
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
