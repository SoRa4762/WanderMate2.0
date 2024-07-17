const StarRating = ({ rating }) => {
  const ratings = () => {
    let stars = [];
    const maxStars = 5;
    for (let i = 0; i < maxStars; i++) {
      if (i < rating) {
        stars.push(
          <span className="text-base md:text-lg xl:text-xl text-yellow-500">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span className="text-base md:text-lg xl:text-xl text-gray-300">
            &#9733;
          </span>
        );
      }
    }
    return stars;
  };

  return <div className="flex w-full gap-1 justify-center">{ratings()}</div>;
};

export default StarRating;
