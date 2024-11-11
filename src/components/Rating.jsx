import { useState } from 'react';

const StarRating = () => {
  const [hoverIndex, setHoverIndex] = useState(0);
  const [rating, setRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-row gap-2 ml-2 md:ml-0 w-full text-sm text-gray-500 md:items-center justify-start md:justify-center">
      Give rating:
      <div className="flex flex-row gap-2 items-center justify-center">
        {stars.map((star, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className={`bi bi-star-fill cursor-pointer inline-block -translate-y-0.5 
              ${index < (hoverIndex || rating) ? 'fill-yellow-400' : 'fill-gray-300'}`}
            viewBox="0 0 16 16"
            onMouseEnter={() => setHoverIndex(index + 1)}
            onMouseLeave={() => setHoverIndex(0)} 
            onClick={() => setRating(index + 1)}
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default StarRating;