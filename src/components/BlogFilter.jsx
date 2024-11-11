const BlogFilter = () => {
  return (
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
  );
};

export default BlogFilter;
