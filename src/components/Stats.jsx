
const Stats = () => {
    return (
        <div>
            <section className="px-10 xl:px-36 py-10">
                <div className="flex w-full px-10 md:px-8 lg:px-14 py-14 rounded-2xl bg-orange-50 flex-col justify-between gap-6">
                    <div className="flex flex-row gap-3 items-center justify-center">
                        <hr className="hidden md:block w-1/2 h-[1.5px] bg-gray-600 opacity-80"/>
                        <span className="w-full font-bold text-center text-sm md:text-base font-sans flex flex-row items-center justify-center">
                            We Are Proudly Operating In
                            &nbsp; 
                                <span className="bg-white px-2.5 md:px-2.5 py-2 text-sm md:text-base text-[#F7921E] rounded-full shadow-lg">50</span>
                            &nbsp; 
                                 Countries Globally</span>
                        <hr className="hidden md:block w-1/2 h-[1.5px] bg-gray-600 opacity-80"/>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col items-center justify-center font-sans text-[12px] md:text-sm text-center">
                            <span className="font-serif text-[#F7921E] text-2xl md:text-4xl font-bold">8745</span>
                            <span>Happy Travellers</span>
                        </div>
                        <div className="flex flex-col items-center justify-center font-sans text-[12px] md:text-sm text-center">
                            <span className="font-serif text-[#F7921E] text-2xl md:text-4xl font-bold">9874</span>
                            <span>Destinations Visited</span>
                        </div>
                        <div className="flex flex-col items-center justify-center font-sans text-[12px] md:text-sm text-center">
                            <span className="font-serif text-[#F7921E] text-2xl md:text-4xl font-bold">7841</span>
                            <span>Memorable Journeys</span>
                        </div>
                        <div className="flex flex-col items-center justify-center font-sans text-[12px] md:text-sm text-center">
                            <span className="font-serif text-[#F7921E] text-2xl md:text-4xl font-bold">6874</span>
                            <span>Given Expert Guides</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Stats;