const BlogFilter = () => {
  return (
    <div className="max-w-xl hidden lg:block w-full mx-auto p-4 bg-white shadow-lg rounded-lg mt-6">
      <form action="" method="get" className="flex flex-col gap-6">
        {/* Search Input */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700">
            Search Blogs
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search by title..."
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Category Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="text-blue-600 hover:underline">Tech</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Lifestyle</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Travel</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Health</a></li>
          </ul>
        </div>

        {/* Recent Blogs Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Recent Blogs</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:underline">How to Improve Your Coding Skills</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:underline">Top Destinations for Digital Nomads</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:underline">A Guide to Healthy Living</a></li>
          </ul>
        </div>

        {/* Destinations Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Destinations</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="text-blue-600 hover:underline">Europe</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Asia</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Africa</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">South America</a></li>
          </ul>
        </div>

        {/* Tags Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Tags</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <a href="#" className="px-3 py-1 bg-gray-200 text-sm rounded-md hover:bg-blue-500 hover:text-white">#coding</a>
            <a href="#" className="px-3 py-1 bg-gray-200 text-sm rounded-md hover:bg-blue-500 hover:text-white">#travel</a>
            <a href="#" className="px-3 py-1 bg-gray-200 text-sm rounded-md hover:bg-blue-500 hover:text-white">#health</a>
            <a href="#" className="px-3 py-1 bg-gray-200 text-sm rounded-md hover:bg-blue-500 hover:text-white">#lifestyle</a>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogFilter;
