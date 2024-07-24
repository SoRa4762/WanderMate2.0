import { useState } from "react";

const WriteReview = () => {
  const [reviewData, setReviewData] = useState({
    comment: "",
    rating: 0,
  });

  const handleStarRating = (index) => {
    // setRating(index + 1);
    setReviewData({ ...reviewData, rating: index + 1 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewData.rating === 0 || reviewData.comment === "") {
      alert("Rating and Comment shall not be empty!");
    } else {
      console.log("Submitted data: ", reviewData);
    }
  };

  return (
    <form
      action="submit"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div
        id="reviews"
        className="h-full w-full flex flex-col p-4 shadow-md rounded-lg gap-2"
      >
        <h1 className="font-bold sm:text-lg lg:text-xl">Write a Review</h1>
        <label htmlFor="review">Your Review</label>
        <textarea
          name="review"
          id="review"
          rows={4}
          maxLength={500}
          className="border focus:outline-none focus:border-blue-500 p-2 rounded-md"
          onChange={(e) => {
            setReviewData({ ...setReviewData, comment: e.target.value });
          }}
        ></textarea>
        <label htmlFor="rating">Your Rating</label>
        <div id="rating" className="flex gap-1">
          {[...Array(5)].map((star, i) => (
            <span
              key={i}
              className={`text-2xl cursor-pointer ${
                reviewData.rating > i ? "text-yellow-500" : "text-gray-300"
              } `}
              onClick={() => handleStarRating(i)}
            >
              &#9733;
            </span>
          ))}
        </div>
        <button
          type="submit"
          className="h-12 w-32 font-bold text-white rounded-lg bg-blue-500 hover:bg-blue-700 transition-all duration-300"
        >
          Submit Review
        </button>
      </div>
    </form>
  );
};

export default WriteReview;
