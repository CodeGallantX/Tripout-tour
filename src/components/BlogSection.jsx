import blogs from '../data/blogs.json';
import { Link } from 'react-router-dom';
import BlogList from './BlogList';

const BlogSection = () => {
    return (
        <div className="px-10 xl:px-36 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <BlogList />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 my-8">
                {blogs.map((blog, index) => (
                    <div key={index} className="w-full h-auto">
                        <div className="group  flex flex-col lg:h-[250px] md:flex-row border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                            <a href={blog.url} className="w-full md:w-1/2 lg:w-3/5 overflow-hidden">
                                <img
                                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    src={blog.image}
                                    alt={blog.title}
                                    loading="lazy"
                                />
                            </a>
                            <div className="p-6 md:p-8 w-full">
                                <div className="flex flex-row gap-4 mb-3 text-sm items-center justify-between text-gray-500">
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person fill-[#F7921E] inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                        </svg>
                                        &nbsp;{blog.author}</p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock fill-[#F7921E] inline-block -translate-y-0.5" viewBox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                        </svg>
                                        &nbsp; {blog.date}
                                    </p>
                                </div>
                                <h1 className="font-sans text-lg md:text-xl font-bold text-gray-900 mb-4">
                                    {blog.title}
                                </h1>
                                <hr className="w-full mt-4" />
                                <Link to={`/blog/${blog.id}`}>
                                    <button className="text-sm font-bold text-[#F7921E] mt-4 font-serif flex items-center">
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
        </div>
    );
};

export default BlogSection;