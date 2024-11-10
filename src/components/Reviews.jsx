import Reviewer from './Reviewer';
import ReviewBox from './ReviewBox';

const Reviews = () => {
    return (
        <div>
            <section className="pt-10 pb-0 px-6 md:px-10 xl:px-36 w-8/12">
                <div>
                    <h4 className="font-bold text-[#F7921E] font-serif md:mb-4 mb-3">
                    <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5"/>
                    &nbsp;Destination Review</h4>
                    <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold font-serif mt-4">Real Experiences Shared</h2>
                </div>
                <Reviewer/>
                <ReviewBox/>
            </section>
        </div>
    )
}

export default Reviews;


