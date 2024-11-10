import itinerary from '../data/itinerary.json';
import { useState } from 'react';

const Itinerary = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const takeoffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 256 256">
      <path d="M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM247.86,93.15a8,8,0,0,1-3.76,5.39l-147.41,88a40.18,40.18,0,0,1-20.26,5.52,39.78,39.78,0,0,1-27.28-10.87l-.12-.12L13,145.8a16,16,0,0,1,4.49-26.21l3-1.47a8,8,0,0,1,6.08-.4l28.26,9.54L75,115.06,53.17,93.87A16,16,0,0,1,57.7,67.4l.32-.13,7.15-2.71a8,8,0,0,1,5.59,0L124.7,84.38,176.27,53.6a39.82,39.82,0,0,1,51.28,9.12l.12.15,18.64,23.89A8,8,0,0,1,247.86,93.15Zm-19.74-3.7-13-16.67a23.88,23.88,0,0,0-30.68-5.42l-54.8,32.72a8.06,8.06,0,0,1-6.87.64L68,80.58l-4,1.53.21.2L93.57,110.8a8,8,0,0,1-1.43,12.58L59.93,142.87a8,8,0,0,1-6.7.73l-28.67-9.67-.19.1-.37.17a.71.71,0,0,1,.13.12l36,35.26a23.85,23.85,0,0,0,28.42,3.18Z"></path>
    </svg>
  );

  const landingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 256 256">
      <path d="M256,216a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16H248A8,8,0,0,1,256,216Zm-26.16-24.3L53.21,142.24A40.12,40.12,0,0,1,24,103.72V48A16,16,0,0,1,45.06,32.82l5.47,1.82a8,8,0,0,1,5,4.87L66.13,68.88,96,77.39V48a16,16,0,0,1,21.06-15.18l5.47,1.82a8,8,0,0,1,4.85,4.5l22.5,53.63,60.84,17A40.13,40.13,0,0,1,240,148.32V184a8,8,0,0,1-10.16,7.7ZM224,148.32a24.09,24.09,0,0,0-17.58-23.13l-64.57-18a8,8,0,0,1-5.23-4.61L114,48.67,112,48V88a8,8,0,0,1-10.19,7.7l-44-12.54a8,8,0,0,1-5.33-5L41.79,48.59,40,48v55.72a24.09,24.09,0,0,0,17.53,23.12L224,173.45Z"></path>
    </svg>
  );

  return (
    <div className="py-6 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold font-serif text-left mb-8">Destination Itinerary</h3>
      <div className="pl-4">
        <div className="relative border-l-2 border-dotted border-orange-300">
          {itinerary.map((item, index) => (
            <div key={index} className="mb-10 ml-8">
              <div className="absolute -left-2 flex items-center justify-center">
                {item.day === "Day 1" ? (
                  <div
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className={`relative -left-3 rounded-full p-2 bg-orange-500 border border-orange-500 cursor-pointer`}
                  >
                    {takeoffIcon()}
                  </div>
                ) : item.day === "Day 5" ? (
                  <div
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className={`relative -left-3 rounded-full p-2 bg-orange-500 border border-orange-500 cursor-pointer`}
                  >
                    {landingIcon()}
                  </div>
                ) : (
                  <div
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-4 h-4 bg-white rounded-full border border-orange-500 cursor-pointer"
                  />
                )}
              </div>

              <h4
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`text-lg font-semibold text-gray-800 cursor-pointer ${
                  activeIndex === index ? 'text-orange-500' : ''
                }`}
              >
                {item.day}: {item.location}
              </h4>

              <p
                id="description"
                className={`text-gray-500 text-sm w-11/12 md:w-2/3 mt-2 transition-all duration-300 ${
                  activeIndex === index ? 'block' : 'hidden'
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
