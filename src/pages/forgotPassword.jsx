import { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='lg:grid lg:grid-cols-2 h-screen mt-[15%] md:mt-[15%] overflow-hidden lg:mt-0 px-10 lg:px-0'>
      <div className="flex items-center justify-center mx-auto lg:mx-0 shadow-md lg:shadow-none rounded-lg w-full md:max-w-lg lg:w-full xl:w-full">
        <div className="flex flex-col gap-5 px-8 lg:px-10 xl:px-28 py-12 lg:py-8 items-start justify-center w-full md:max-w-lg lg:w-full xl:w-full">
          <h1 className='text-2xl lg:text-4xl font-bold text-center'>Reset Password</h1>
          <p>Back to <a href="/login" className='ml-auto text-[#92B76D] hover:text-[#ffca0d] transition duration-300 ease-in-out'>login</a></p>

          <form onSubmit={handleSubmit} className='mt-3 flex flex-col gap-1 lg:gap-6 w-full'>
            <fieldset className="flex flex-col items-start justify-center gap-1">
              <label className='text-[#222831c6]' htmlFor="email">Email Address</label>
              <input
                className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#92B76D] text-[#6c8b4c]"
                type="email"
                name="email"
                id="email"
                placeholder='kiasmith@mail.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </fieldset>

            <button className='mt-3 w-full bg-[#92B76D] hover:bg-[#ffca0d] transition duration-300 ease-in-out text-white py-3 rounded' type="submit">
              Send Email
            </button>
          </form>
        </div>
      </div>
      <div className='hidden lg:block w-11/12 ml-auto relative h-full bg-gradient-to-tl from-[#92B76D] to-[#ffca0d]'>
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
    </div>
  );
};

export default App;
