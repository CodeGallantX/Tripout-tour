import blogs from '../data/blogs.json';
import { Link } from 'react-router-dom';

const BlogList = () => {
    return (
        <div className="px-10 xl:px-36 py-20 ">
            <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-8 items-center justify-start mt-8">
                {blogs.map((blog, index) => (
                    <div key={index} className="w-full h-auto md:h-[350px]">
                        <div className="group flex md:flex-row flex-col relative border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden hover:border-none hover:shadow-lg transition-all duration-200">
                            <a href={blog.url} className="w-full lg:w-3/4">
                                <img
                                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    src={blog.image}
                                    alt={blog.title}
                                    loading='lazy'
                                />
                            </a>
                            <div className="p-8 w-full">
                                <div className="flex flex-row gap-4">
                                    <p className="leading-relaxed mb-3 text-sm text-gray-500">
                                        {blog.author}
                                    </p>
                                    <p className="leading-relaxed mb-3 text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock fill-[#F7921E] inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                        </svg>
                                        &nbsp; {blog.date}
                                    </p>
                                </div>
                                <h1 className="font-sans text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                    {blog.title}
                                </h1>
                                <p className="leading-relaxed mb-3 text-sm text-gray-500">
                                    {blog.intro}
                                </p>
                                <hr className='w-full mt-8' />
                                <Link to={`/blog/${blog.id}`}>
                                    <button className="text-sm font-bold text-[#F7921E] my-4 font-serif hover:text-blue-600">
                                        READ MORE&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block -translate-y-0.5" viewBox="0 0 256 256">
                                            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" fill="#F7921E" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
