import stories from '../data/stories.json'

const Stories = () => {
    return (
        <div>
            <section id="stories" className="px-10 xl:px-36 py-20">
                <div className="flex flex-col items-center justify-center gap-3">
                    <h4 className="font-bold text-[#F7921E] font-serif">
                        <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5" />
                        &nbsp;Destination Story</h4>
                    <h2 className="lg:text-5xl text-2xl font-bold font-serif">Destination Stories to Inspire</h2>

                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 flex-wrap gap-2 items-center justify-start mt-4">
                    {stories.map((story, index) => (
                        <div key={index} className="p-4 pl-0 w-full">
                            <div className="relative group h-full rounded-2xl overflow-hidden cursor-pointer font-sans">
                                <img className="md:h-80 h-64 w-full object-cover object-left group-hover:scale-105 transition-all duration-500 ease-in-out" src={story.image} alt="blog" loading='lazy' />
                                <div className="absolute h-full -bottom-5 right-0 w-full mx-auto p-6 bg-black/50 mb-0 rounded-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 transition-all duration-500 delay-75 ease">
                                    <div className='flex flex-col gap-3 items-center justify-center translate-y-16 md:translate-y-20 transition-all duration-700 ease'>
                                        <a href={story.url} className="leading-relaxed p-2 bg-[#F7921E] rounded-full text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-link-45deg fill-white" viewBox="0 0 16 16">
                                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                                            </svg>
                                        </a>
                                        <h1 className="md:text-2xl text-2xl font-bold text-white font-serif">{story.country}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Stories;