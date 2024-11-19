import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const partners = [
        "travla.ai",
        "xcursions.ng",
        "wanderlust.com",
        "jetaway.co",
        "adventurely.io",
        "skytrip.in",
        "globetrotter.uk",
        "roamfree.ca",
    ];

    return (
        <div className="px-10 xl:px-36 bg-orange-200 py-12">
            <Slider {...settings} className="flex items-center">
                {partners.map((partner, index) => (
                    <div key={index} className="text-center">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800">
                            {partner}
                        </h1>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Partners;
