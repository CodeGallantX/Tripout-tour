import { useState } from 'react';
import faqs from '../data/faqs.json';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full lg:max-w-2xl mt-10 mb-4">
            <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <button
                            onClick={() => toggleFaq(index)}
                            className={`w-full text-left py-4 px-6 rounded-full font-bold transition-all duration-300 ${activeIndex === index
                                    ? 'bg-[#F7921E] text-white'
                                    : 'bg-[#FFF7F4] text-gray-900'
                                }`}
                        >
                            <span>{faq.question}</span>
                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" 
                            className={`float-right transition-all duration-500 ease ${activeIndex === index
                                    ? 'fill-[#fff] rotate-[225deg]'
                                    : 'fill-[#F7921E]'
                                }`} 
                            viewBox="0 0 256 256">
                                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                            </svg>
                        </button>
                        {activeIndex === index && (
                            <div className="relative text-sm font-serif -z-10 -top-6 px-6 pb-4 pt-12 text-gray-700 bg-[#FFF7F4] rounded-b-2xl">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
