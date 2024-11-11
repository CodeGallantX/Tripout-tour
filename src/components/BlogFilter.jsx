const BlogFilter = () => {
  return (
    <div>
    <div className="w-1/3 hidden lg:block ml-auto p-4 mt-6">
      <form action="" method="get" className="flex flex-col gap-6">
        <div className="bg-orange-100 rounded-xl p-4">
          <label htmlFor="search" className="block text-sm font-bold text-gray-700">
            Search Blogs
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search by title..."
            className="mt-1 block w-full px-4 py-2 bg-orange-100 placeholder:text-gray-700 text-sm border border-orange-300 rounded-full focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div className="bg-orange-100 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#" className="text-gray-600 hover:underline">Tech</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Lifestyle</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Travel</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Health</a></li>
          </ul>
        </div>

        <div className="bg-orange-100 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-800">Recent Blogs</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#" className="text-gray-700 hover:text-orange-600 hover:underline">How to Improve Your Coding Skills</a></li>
            <li><a href="#" className="text-gray-700 hover:text-orange-600 hover:underline">Top Destinations for Digital Nomads</a></li>
            <li><a href="#" className="text-gray-700 hover:text-orange-600 hover:underline">A Guide to Healthy Living</a></li>
          </ul>
        </div>

        
        <div className="bg-orange-100 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-800">Destinations</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#" className="text-gray-600 hover:underline">Europe</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Asia</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Africa</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">South America</a></li>
          </ul>
        </div>

        <div className="bg-orange-100 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-800">Tags</h3>
          <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-600">
            <a href="#" className="px-3 py-1 bg-none border border-orange-300 text-sm rounded-full hover:bg-orange-500 hover:text-white">coding</a>
            <a href="#" className="px-3 py-1 bg-none border border-orange-300 text-sm rounded-full hover:bg-orange-500 hover:text-white">travel</a>
            <a href="#" className="px-3 py-1 bg-none border border-orange-300 text-sm rounded-full hover:bg-orange-500 hover:text-white">health</a>
            <a href="#" className="px-3 py-1 bg-none border border-orange-300 text-sm rounded-full hover:bg-orange-500 hover:text-white">lifestyle</a>
          </div>
        </div>

        <div className="">
          <button
            type="submit"
            className="opacity-0"
          >
          </button>
        </div>
      </form>
    </div>
    <div className='w-full grid lg:hidden grid-cols-3 items-center gap-2 justify-between p-3 bg-orange-100 rounded-xl'>
          <div className="flex flex-row gap-2">
            <a href="#" className="border border-[#f7921e] bg-[#f7921e] rounded-lg p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="fill-white" viewBox="0 0 256 256">
                <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>
              </svg>
            </a>
            <a href="#" className="border border-gray-600 rounded-lg p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="fill-gray-600" viewBox="0 0 256 256">
                <path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"></path>
              </svg>
            </a>
          </div>
          <div className="mr-auto">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search by title..."
            className="mt-1 block w-full px-4 py-2 bg-orange-100 placeholder:text-gray-700 text-sm border border-orange-300 rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          </div>
          <div>
            <select name="Sorting" id="sortingDropdown" className="px-2 w-full max-w-sm sm:w-52 md:w-64 font-medium text-sm py-2 outline-none rounded-lg bg-orange-50 placeholder:text-gray-700 border border-orange-300 text-gray-700">
              <option value="">Categories</option>
              <option value="location">Tech</option>
              <option value="price">Lifestyle</option>
              <option value="duration">Travel</option>
              <option value="duration">Health</option>
            </select>
          </div>
        </div>
    </div>
  );
};

export default BlogFilter;
