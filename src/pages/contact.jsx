import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaXTwitter, FaYoutube, FaFacebook } from "react-icons/fa6";

const App = () => {

  const page = {
    title: 'Contact',
    breadcrumb: [
      { name: 'CONTACT', path: '/contact' },
    ],
  };

  return (
    <div>
      <Header />
      <Banner page={page} />
      <section className='px-10 xl:px-24 my-24 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10 xl:gap-0'>
        <div className="flex flex-col gap-6 w-full lg:w-1/2 xl:w-2/3">
          <h3 className="text-[18px] font-semibold">HELLO</h3>
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold">Get in Touch</h1>
          <p className='text-[18px] w-full lg:w-10/12'>We&rsquo;re here to help! Whether you have a question about our organisation, need assistance, or just want to give feedback, feel free to reach out to us.</p>
          <div className='flex flex-col text-[18px] lg:text-2xl xl:text-[28px] gap-3'>
            <a href="mailto:help@tripout.com" className="flex flex-row items-center group">
              <FaEnvelope />
              <span className="ml-4 group-hover:text-[#92B76D] transition-all duration-300 ease-in-out">help@tripout.com</span>
            </a>
            <a href="tel:+2348062121235" className="flex flex-row items-center group">
              <FaPhone />
              <span className="ml-4 group-hover:text-[#92B76D] transition-all duration-300 ease-in-out">+234 806 212 1235</span>
            </a>
            <a href="https://facebook.com" target='_blank' className="flex flex-row items-center group">
              <FaFacebook />
              <span className="ml-4 group-hover:text-[#92B76D] transition-all duration-300 ease-in-out">Tripout</span>
            </a>
            <a href="https://x.com" target='_blank' className="flex flex-row items-center group">
              <FaXTwitter />
              <span className="ml-4 group-hover:text-[#92B76D] transition-all duration-300 ease-in-out">Tripout_Tours</span>
            </a>
            <a href="https://youtube.com" target='_blank' className="flex flex-row items-center group">
              <FaYoutube />
              <span className="ml-4 group-hover:text-[#92B76D] transition-all duration-300 ease-in-out">Tripout</span>
            </a>
          </div>
        </div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d647.5733943089649!2d3.522427630760244!3d6.638443382808631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bef17a98def6b%3A0x563f17caaa84a67a!2sLagos%20State%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sng!4v1722723696425!5m2!1sen!2sng"
          className='w-full h-[400px] lg:w-[500px] lg:h-[600px]'
          allowfullscreen=""
          referrerPolicy="no-referrer-when-downgrade">
        </iframe> */}
        <div className="mt-10 w-full lg:w-1/2 flex flex-col items-start justify-center gap-4">
                    <div className="flex flex-col items-start justify-center gap-6">
                        <fieldset className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-center">
                            <div className="flex flex-row gap-4">
                                <input type="text" placeholder="Full Name" className="px-6 py-4 rounded-full w-full md:w-auto outline-none border text-sm border-gray-600 text-gray-600 placeholder:text-gray-600" />
                                <input type="email" placeholder="Email Address" className="px-6 py-4 rounded-full w-full md:w-auto outline-none border text-sm border-gray-600 text-gray-600 placeholder:text-gray-600" />
                            </div>
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
      <Footer />

    </div>
  )
}

export default App;