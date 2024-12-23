import { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    tel: '',
    password: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='lg:grid lg:grid-cols-2'>
      <div className='hidden lg:block lg:w-5/6 xl:w-11/12 relative h-full bg-gradient-to-tl from-[#F7921E] to-[#24201D]'>
        <div className='absolute w-full opacity-50 h-full bg-green-100 backdrop-blur-3xl'></div>
        <div className='relative text-black top-1/4 left-5'>
          <div className='flex flex-col items-center justify-between gap-10 px-8'>
            <a href='/' className="text-4xl text-left font-bold">Tripout</a>
            <div className="flex flex-col gap-2 items-start px-6 ">
              <blockquote className="text-left text-4xl">&ldquo;The secret of getting ahead is getting started.&rdquo;</blockquote>
              <em className='text-right text-xl'>— Mark Twain</em>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-16 lg:px-10 xl:px-28 py-12 lg:py-8">
        <h1 className='text-4xl lg:text-6xl font-bold text-center'>Create Account</h1>
        <p>Already have an account? <a href="/login" className='text-[#F7921E] transition duration-300 ease-in-out'>Log in</a></p>
        
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 lg:gap-4'>
          <div className="flex flex-row items-center justify-between gap-4">
            <fieldset className="flex flex-col items-start justify-center gap-1 w-full">
              <label className='text-[#222831c6]' htmlFor="firstname">First Name</label>
              <input 
                className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#F7921E] text-gray-800" 
                type="text" 
                name="firstname" 
                id="firstname" 
                placeholder='Kia' 
                value={formData.firstname}
                onChange={handleChange}
                required 
              />
            </fieldset>
            <fieldset className="flex flex-col items-start justify-center gap-1 w-full">
              <label className='text-[#222831c6]' htmlFor="lastname">Last Name</label>
              <input 
                className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#F7921E] text-gray-800" 
                type="text" 
                name="lastname" 
                id="lastname" 
                placeholder='Smith' 
                value={formData.lastname}
                onChange={handleChange}
                required 
              />
            </fieldset>
          </div>

          <fieldset className="flex flex-col items-start justify-center gap-1">
            <label className='text-[#222831c6]' htmlFor="email">Email Address</label>
            <input 
              className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#F7921E] text-gray-800" 
              type="email" 
              name="email" 
              id="email" 
              placeholder='kiasmith@mail.com' 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </fieldset>

            <fieldset className="flex flex-col items-start justify-center gap-1">
              <label className='text-[#222831c6]' htmlFor="tel">Phone number</label>
              <input 
                className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#F7921E] text-gray-800" 
                type="tel" 
                name="tel" 
                id="tel" 
                placeholder='+234 80 123 45 678' 
                value={formData.tel}
                onChange={handleChange}
                required 
              />
            </fieldset>

          <fieldset className="flex flex-col items-start justify-center gap-1">
            <label className='text-[#222831c6]' htmlFor="password">Password</label>
            <input 
              className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#F7921E] text-gray-800" 
              type="password" 
              name="password" 
              id="password" 
              placeholder='Enter password' 
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <input 
                className="form-checkbox outline-none" 
                type="checkbox" 
                name="agree" 
                id="agree" 
                checked={formData.agree}
                onChange={handleChange}
              />
              <label htmlFor="agree" className="text-[#222831c6]">By checking this box, you agree with our <a className="text-[#F7921E] transition duration-300 ease-in-out">terms and conditions</a>.</label>
            </div>
          </div>

          <button className='mt-6 w-full bg-[#F7921E] hover:bg-[#ffca0d] transition duration-300 ease-in-out text-white py-3 rounded' type="submit">
            Create Account
          </button>
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
};

export default App;