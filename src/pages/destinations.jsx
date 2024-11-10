import destinationgrid from '../data/destinationgrid.json';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';


function heartFill(index) {
  const heart = document.getElementById(`heart-${index}`);

  if (heart.classList.contains('filled')) {
    heart.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#F7921E" class="fill-[#F7921E]" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
      </svg>
    `;
    heart.classList.remove('filled');
  } else {
    heart.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#F7921E" className="fill-[#F7921E] hover:fill-[#fff]" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
      </svg>
    `;
    heart.classList.add('filled');
  }
}


const App = () => {

  const page = {
    title: 'Destinations',
    breadcrumb: [
      { name: 'DESTINATIONS', path: '/destinations' },
    ],
  };

  return (
    <div>
      <Header />
      <Banner page={page} />
      <section className='px-6 md:px-10 xl:px-44 py-28'>
        <div className='flex flex-row items-center justify-between p-3 bg-orange-50 rounded-xl'>
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
          <div>
            <select name="Sorting" id="sortingDropdown" className="px-2 w-full max-w-sm sm:w-52 md:w-64 font-medium text-sm py-2 outline-none rounded-lg border border-gray-500 text-gray-500">
              <option value="">Default Sorting</option>
              <option value="location">Sort by Location</option>
              <option value="price">Sort by Price</option>
              <option value="duration">Sort by Rating</option>
              <option value="duration">Sort by Duration</option>
            </select>
          </div>
        </div>
        <div>
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-start mt-8">
            {destinationgrid.map((tour, index) => (
              <div key={index} className="w-full ">
                <div className="group relative h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden hover:border-none hover:shadow-lg transition-all duration-200">
                  <a href={tour.url}>
                    <img className="lg:h-56 md:h-36 w-full object-cover object-center group-hover:scale-105 duration-700 ease-in-out" src={tour.image} alt={tour.title} loading='lazy' />
                  </a>
                  <span className="px-2 py-1 bg-orange-50 rounded-full absolute top-4 left-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star-fill fill-yellow-400 inline-block -translate-y-0.5" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    {tour.rating}
                  </span>
                  <div
                    onClick={() => heartFill(index)}
                    className='group absolute top-1/2 -translate-y-7 right-3 bg-[#fff] group-hover:bg-[#F7921E] transition-all duration-300 ease shadow-md p-4 rounded-full cursor-pointer'
                  >
                    <div id={`heart-${index}`} className="heart-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="fill-[#F7921E] group-hover:fill-[#fff] transition-all duration-300 ease-in-out" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-8">
                    <h1 className="font-serif text-xl font-semibold text-gray-900 mb-4">{tour.title}</h1>
                    <p className="leading-relaxed mb-3 text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt inline-block fill-[#F7921E]" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      &nbsp; {tour.location}
                    </p>
                    <div className="flex items-center flex-wrap text-sm border-t-2 border-t-gray-400 border-opacity-50 pt-4">
                      <span className="text-gray-500 items-center md:mb-2 lg:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock fill-[#F7921E] inline-block -translate-y-0.5" viewBox="0 0 16 16">
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                        </svg>
                        &nbsp;
                        {tour.duration}

                      </span>
                      <span className="text-gray-8 font-semibold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
                        Starts from
                      </span>
                      <span className="text-[#F7921E] text-xl font-bold">
                        {tour.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Pagination />
      <Footer />

    </div>
  )
}

export default App;