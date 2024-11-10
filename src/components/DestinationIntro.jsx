import MiniComps from './MiniComps';
import InfoBadges from './InfoBadges';

const DestinationIntro = () => {
    return (
        <div>
            <div className="w-full">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">Tropical Beach: Bali Beach Escape</h1>
                <MiniComps />
                <div className="text-sm text-gray-600 font-medium py-6">
                    <p>Experience the magic of the beach in Bali with this exclusive trip to the tropical islands. Discover the Experience the magic of the beach in Bali with this exclusive trip to the tropical islands. Discover the hidden gems of the island and enjoy the stunning coastline hidden gems of the island and enjoy the stunning coastline. Experience the magic of the beach in Bali with this exclusive trip to the tropical islands. Discover the hidden gems of the island and enjoy the stunning coastline.</p>
                    <p className="mt-1.5">Experience the magic of the beach in Bali with this Experience the magic of the beach in Bali with this exclusive trip to the tropical islands. Discover the hidden gems of the island and enjoy the stunning coastline exclusive trip to the tropical islands.</p>
                </div>
                <InfoBadges/>
            </div>
        </div>
    )
}

export default DestinationIntro;
