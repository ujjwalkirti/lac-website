import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const maxRating = 5;
  const filledStars = Math.floor(rating);
  const decimal = rating - filledStars;
  const hasHalfStar = decimal >= 0.5;
  const emptyStars = maxRating - filledStars - (hasHalfStar ? 1 : 0);

  const renderStar = (filled: boolean, key: number) => (
    <svg
      key={key}
      className={`h-5 lg:h-7 w-5 lg:w-7 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
    >
      <path
        stroke="none"
        d="M10 1.28l2.364 6.77h7.636l-5.98 4.364 2.363 6.77-5.98-4.364-5.98 4.365 2.364-6.77-5.98-4.364h7.636z"
      />
      <path
        fill="none"
        d="M10 1.28l2.364 6.77h7.636l-5.98 4.364 2.363 6.77-5.98-4.364-5.98 4.365 2.364-6.77-5.98-4.364h7.636z"
      />
    </svg>
  );

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(renderStar(true, i));
    }

    if (hasHalfStar) {
      stars.push(renderStar(false, filledStars));
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(renderStar(false, filledStars + (hasHalfStar ? 1 : 0) + i));
    }

    return stars;
  };

  return <div className="flex items-center mb-5">{renderStars()}</div>;
};

export default StarRating;
