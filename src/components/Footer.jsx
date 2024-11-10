import Logo from './LogoLight';
import footerData from './../data/footer.json'
import Email from './Icons/Email';
import Facebook from './Icons/Facebook';
import Instagram from './Icons/Instagram';
import LinkedIn from './Icons/Linkedin';
import Phone from './Icons/Phone';
import Youtube from './Icons/Youtube';

const App = () => {
  return (
    <div className="bg-[#24201D] py-4">
      <footer className="font-sans px-10 xl:px-36 py-16 text-white">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center justify-between">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-8">
            <div className="flex flex-row items-center justify-start gap-3">
              <div className="p-2 bg-[#F7921E] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt fill-white" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </div>
              <div className="text-white flex flex-col items-start justify-center gap-2">
                <h5 className=" font-bold">Location</h5>
                <address className="text-sm not-italic">Suiteroad, Cityville, ST 12345</address>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <div className="p-2.5 bg-[#F7921E] rounded-full">
                <Phone />
              </div>
              <div className="text-white flex flex-col items-start justify-center gap-2">
                <h5 className=" font-bold">Call Us Now!</h5>
                <a href="tel:" className="text-sm">(555) 123-4567, (555) 987-6543</a>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <div className="p-2.5 bg-[#F7921E] rounded-full">
                <Email />
              </div>
              <div className="text-white flex flex-col items-start justify-center gap-2">
                <h5 className=" font-bold">Email Now!</h5>
                <a href="mailto:" className="text-sm">info@tripout.com</a>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <a href="https://facebook.com" target="_blank" className="p-2 bg-[#4F4E4A] rounded-full"><Facebook /></a>
            <a href="https://instagram.com" target="_blank" className="p-2 bg-[#4F4E4A] rounded-full"><Instagram /></a>
            <a href="https://linkedin.com" target="_blank" className="p-2 bg-[#4F4E4A] rounded-full"><LinkedIn /></a>
            <a href="https://youtube.com" target="_blank" className="p-2 bg-[#4F4E4A] rounded-full"><Youtube /></a>
          </div>
        </div>
        <hr className="w-full h-[1px] bg-gray-700 opacity-20 mt-10 mb-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="relative">
              <h3 className='font-serif text-2xl font-bold text-white'>About Us</h3>
              <span className='absolute bottom-0 w-14 bg-[#F7921E] h-[1px]'></span>
            </div>
            <p className="text-sm">We create personalised travel experiences designed to inspire and delight. Discover breathtaking destinations and unforgettable adventures, all tailored just for you.</p>
            <Logo />
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <h3 className='font-serif text-2xl font-bold text-white'>Our Links</h3>
              <span className='absolute bottom-0 w-14 bg-[#F7921E] h-[1px]'></span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {footerData.map((footer, index) => (
                <ul key={index}>
                  <li><a href={footer.url}>{footer.link}</a></li>
                </ul>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <h3 className='font-serif text-2xl font-bold text-white'>Newsletter</h3>
              <span className='absolute bottom-0 w-14 bg-[#F7921E] h-[1px]'></span>
            </div>

            <p className="text-sm">Unlock Exclusive Travel Tips, Destination Guides, and Deals Straight to Your Inbox!</p>

            <div className="flex flex-row justify-center items-center">
              <input type="text" id="search" placeholder="Email Address..." className="text-gray-600 placeholder:text-gray-600 placeholder:text-sm rounded-full bg-white w-full max-w-sm px-6 py-3 outline-none focus:ring-1 focus:ring-[#F7921E] text-sm font-medium transition-all duration-300 ease" />
              <button className="rounded-full p-2 bg-[#F7921E] -translate-x-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fill-white" viewBox="0 0 512 512">
                  <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div>
        <div className="relative">
          <hr className="w-full h-[1px] bg-gray-700 opacity-20 mt-10 mb-8" />
          <a href="#" className='p-2 bg-[#F7921E] text-white rounded-full absolute -bottom-5 left-1/2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-up" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z" />
              <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
          </a>
        </div>
        <span className="text-[12px] sm:text-sm font-sans text-center text-white flex flex-row items-center justify-center">Copyright 2024 &nbsp;<span className="text-[#F7921E]">Tripout</span>. &nbsp;&nbsp; All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default App;