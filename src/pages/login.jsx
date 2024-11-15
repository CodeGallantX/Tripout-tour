import { FaEye, FaEyeSlash } from "react-icons/fa6";

import { useState } from 'react';

const App = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='lg:grid lg:grid-cols-2'>
      <div className='hidden lg:block lg:w-5/6 xl:w-11/12 relative h-screen bg-gradient-to-tl from-[#F7921E] to-[#24201D]'>
        <div className='absolute w-full opacity-50 h-screen bg-green-100  backdrop-blur-3xl'></div>
        <div className='relative text-black top-1/4 left-5'>
          <div className='flex flex-col items-start justify-between gap-10 px-2'>
            <a href='/' className="text-4xl text-center font-bold">Tripout</a>
            <div className="gap-2 ">
              <blockquote className="text-left text-8xl">&ldquo;Explore. <br/> Dream. <br/> Discover.&rdquo;</blockquote>
              <em className='text-right text-lg'>— Mark Twain</em>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-16 lg:px-10 xl:px-28 py-12 lg:py-8">
        <h1 className='text-4xl lg:text-6xl font-bold text-center'>Sign In</h1>
        <p>Don&apos;t have an account? <a href="/signup" className='text-[#F7921E] transition duration-300 ease-in-out'>Create Account</a></p>

        <form action="#" method="post" className='flex flex-col gap-3 lg:gap-6'>
          <fieldset className="flex flex-col items-start justify-center gap-1">
            <label className='text-[#222831c6]' htmlFor="email">Email Address</label>
            <input 
              className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:border-none focus:ring-1 focus:ring-[#F7921E] text-gray-800" 
              type="email" 
              name="email" 
              id="email" 
              placeholder='kiasmith@mail.com' 
              required 
            />
          </fieldset>

          <fieldset className="flex flex-col items-start justify-center gap-1 relative">
            <label className='text-[#222831c6]' htmlFor="password">Password</label>
            <input 
              className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:border-none focus:ring-1 focus:ring-[#F7921E] text-gray-800" 
              type={passwordVisible ? "text" : "password"} 
              name="password" 
              id="password" 
              placeholder='8 or more characters' 
              required
            />
            <button 
              type="button" 
              onClick={togglePasswordVisibility} 
              className="absolute right-3 top-10 transform text-gray-500"
            >
              {passwordVisible ? (
                <FaEyeSlash className="w-6 h-6"/>
              ) : (
                <FaEye className="w-6 h-6"/>
              )}
            </button>
          </fieldset>

          <div className="flex flex-row items-center justify-between">
            <fieldset>
              <input className="" type="checkbox" name="remember" id="remember" />
              <label className='text-[#222831c6] ml-2' htmlFor="remember">Remember me</label>
            </fieldset>
            <a className="text-[#F7921E] transition duration-300 ease-in-out" href="/forgot-password">Forgot Password?</a>
          </div>

          <button className="w-full text-xl font-semibold py-4 rounded bg-[#F7921E]  transition duration-300 ease-in-out" type="submit">SIGN IN</button>
        </form>

        <div className='mt-4'>
          <div className='flex flex-row gap-5 items-center justify-center mb-2'>
            <span className='w-full h-[1px] bg-[#22283184]'></span>
            <span className='text-lg font-semibold text-[#222831a1]'>Or</span>
            <span className='w-full h-[1px] bg-[#22283170]'></span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="#" className="w-full flex flex-row items-center justify-center gap-2 hover:bg-blue-100 px-2 py-3 rounded-full bg-transparent border border-solid border-blue-500">
              <img src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Google-icon.png" alt="Google Icon" width={20} height={20} />
              <span>Continue with Google</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
