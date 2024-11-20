import testimonials from '../data/testimonials.json'
const Testimonials = () => {
  return (
      <div>
          <section id="services" className="px-10 xl:px-36 py-20 flex lg:flex-row flex-col lg:items-center gap-4 justify-between items-start">
              <div className="w-full rounded-r-lg flex flex-col items-start justify-center gap-3">
                  <h4 className="font-bold text-[#F7921E] font-serif">
                      <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5" />
                      &nbsp;Testimonials</h4>
                  <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold font-serif">Unforgettable Traveller Stories & Reviews</h2>
              </div>
              {testimonials.map((testimonial, index) => (
              <div key={index}>
                  <p className="text-gray-600 text-sm font-serif">{testimonial.details}</p>
                  <h3 className="text-xl font-bold font-serif mt-3">{testimonial.name}</h3>
                  <span className="text-gray-600 text-sm font-serif">{testimonial.role}</span>
              </div>
              ))}
              <div>
                Quotes
              </div>
          </section>
      </div>
  )
}

export default Testimonials;