import StarRating from "../elements/StarRating";
import userProfile from "../assets/userProfile.jpg";

const Reviews = ({ reviews }) => {
  return (
    <div className="h-full w-full shadow-md my-8 rounded-lg" id="reviews">
      <h2 className="p-4 font-semibold text-sm md:text-xl lg:2xl">Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-xs md:text-base p-4">No Reviews Yet</p>
      ) : (
        reviews.map((review) => (
          <div
            key={review.id}
            className="h-20vh w-full flex flex-col p-8 gap-2"
          >
            <div className="h-full w-full flex items-center gap-4">
              <img
                src={userProfile}
                alt={review?.user}
                className="h-8 w-8 md:h-12 md:w-12 rounded-full object-cover"
              />
              <p className="w-96 font-semibold text-sm md:text-xl lg:2xl">
                {review.user}
              </p>
              <StarRating rating={review.rating} />
            </div>
            <p className="font-medium text-xs md:text-base">{review.comment}</p>
            <p className="font-bold text-xs md:text-base">
              {review.date}
              {/* {new Date(review.createdOn).toLocaleString()} */}
            </p>{" "}
            <div className="flex justify-center pt-4">
              <hr className="border-b-1 border-gray-500 w-[80%]" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
