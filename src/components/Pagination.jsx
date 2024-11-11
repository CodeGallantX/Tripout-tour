const Pagination = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="flex flex-row items-center justify-center gap-2">
        <a
          href="#"
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-sm md:text-lg bg-gray-200 cursor-not-allowed transition-all duration-100 ease-in-out rounded-full"
          aria-label="Previous Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left fill-gray-400" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" stroke="#9ca3af" strokeWidth="1" />
          </svg>
        </a>

        <a href="#" className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-sm md:text-lg bg-[#F7921E] text-white hover:bg-[#F7921E] hover:text-white transition-all duration-100 ease-in-out rounded-full">1</a>
        <a href="#" className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-sm md:text-lg bg-orange-100 text-gray-800 hover:bg-[#F7921E] hover:text-white transition-all duration-100 ease-in-out rounded-full">2</a>
        <a href="#" className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-sm md:text-lg bg-orange-100 text-gray-800 hover:bg-[#F7921E] hover:text-white transition-all duration-100 ease-in-out rounded-full">3</a>
        <a href="#" className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-sm md:text-lg bg-orange-100 text-gray-800 hover:bg-[#F7921E] hover:text-white transition-all duration-100 ease-in-out rounded-full">4</a>
        <a href="#" className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-sm md:text-lg bg-orange-100 text-gray-800 hover:bg-[#F7921E] hover:text-white transition-all duration-100 ease-in-out rounded-full">5</a>

        <a
          href="#"
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-sm md:text-lg hover:border-2 hover:border-[#F7921E] hover:text-white transition-all duration-100 ease-in-out rounded-full"
          aria-label="Next Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" stroke="#F7921E" strokeWidth="1"/>
</svg>
        </a>
      </div>
    </div>
  );
};

export default Pagination;
