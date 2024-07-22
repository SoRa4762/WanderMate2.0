import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getHotel,
  getHotelReview,
  //   fetchHotelReviews,
  //   postHotelReview,
  //   bookHotel,
} from "../../api";
import { hotelDetails } from "../../helper/data";
import Map from "../../components/Map";
import StarRating from "../../elements/StarRating";
import userProfile from "../../assets/userProfile.jpg";

const Hotel = () => {
  // const userId = sessionStorage.getItem("userId");
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewData, setReviewData] = useState({
    reviewText: "",
    rating: 0,
  });

  useEffect(() => {
    const fetchHotel = async () => {
      const data = await getHotel(id);
      await setHotel(data);
    };

    const fetchReviews = async () => {
      const data = await getHotelReview(id);
      await setReviews(data);
    };

    fetchHotel();
    fetchReviews();
  }, [id]);

  const handleBookHotel = async (hotelName) => {
    //   const book = await bookHotel(hotelName);
    //   console.log(book);
    console.log(hotelName);
  };

  const handleStarClick = (index) => {
    setReviewData((prevData) => ({
      ...prevData,
      rating: index + 1,
    }));
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (reviewData.reviewText.trim() === "" || reviewData.rating === 0) {
      alert("Please provide a review and a rating.");
      return;
    }

    console.log(reviewData);

    // try {
    //   await postHotelReview(id, reviewData);
    //   await console.log(reviewData);
    //   // await setReviews(reviewData);
    //   setReviews([...reviews, reviewData]);
    //   setReviewData((prevData) => ({
    //     ...prevData,
    //     reviewText: "",
    //     rating: "",
    //   }));
    //   alert("Review submitted successfully!");
    // } catch (error) {
    //   console.error("Error submitting review:", error);
    //   alert("Failed to submit review. Please try again.");
    // }
  };

  return (
    <>
      {!hotel ? (
        <div>Loading...</div>
      ) : (
        <div className="h-full w-full">
          {/* 5 images section */}
          <div className="h-[40vh] sm:h-[55vh] md:h-[70vh] lg:h-[75vh] flex gap-4 mt-8 w-full transition-all duration-300 ease-in-out rounded-lg">
            {/* 1 image: slice one image */}
            <div className="h-full w-full lg:w-[60%] rounded-lg shadow-xl cursor-pointer">
              <img
                className="h-full w-full object-cover rounded-lg"
                src={hotel.img[0]}
                alt={hotel.name}
              />
            </div>
            {/* 4 images: slice 4 images and map them */}
            <div className="hidden lg:flex h-full w-[40%] shadow-xl rounded-lg">
              <div className="lg:grid h-full w-full grid-cols-2 grid-rows-2 gap-2">
                {hotel.img.slice(1, 5).map((img, i) => (
                  <img
                    key={i}
                    className="h-full w-full object-cover rounded-lg cursor-pointer"
                    src={img}
                    alt={hotel.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* details section */}
          <div className="h-full w-full">
            {/* details section - nav */}
            <div className="h-16 flex gap-4 px-4 items-center flex-wrap">
              {hotelDetails.map((item) => (
                <li
                  className="list-none cursor-pointer font-normal hover:border-b-4 border-blue-500"
                  key={item.id}
                >
                  <a href={item.to}>{item.name}</a>
                </li>
              ))}
            </div>

            {/* details section - about */}
            <div
              className="h-full w-full p-4 flex flex-col sm:flex-row shadow-md rounded-lg"
              id="about"
            >
              <div className="flex sm:flex-[2] flex-col">
                <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                  {hotel.rating}
                </p>
                <p>{hotel.desc}</p>
              </div>
              <div className="flex sm:flex-1 flex-col justify-center items-center">
                <button
                  onClick={() => handleBookHotel(hotel.name)}
                  className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-1 md:px-8 md:py-3 rounded-md font-medium mt-4"
                >
                  Book Now
                </button>
              </div>
            </div>

            {/* details section - location */}
            <div className="h-[60vh] w-full my-8 rounded-md" id="location">
              <Map />
            </div>

            {/* details section - reviews */}
            {/* Write a Review Section */}
            <div
              className="h-full w-full shadow-lg p-8 rounded-lg mb-8"
              id="write-review"
            >
              <h2 className="font-semibold text-sm md:text-xl lg:2xl mb-2">
                Write a Review
              </h2>
              <form onSubmit={handleReviewSubmit}>
                <div className="mb-4">
                  <label className="block text-xs md:text-base mb-2">
                    Your Review
                  </label>
                  <textarea
                    value={reviewData.reviewText}
                    onChange={(e) =>
                      setReviewData({
                        ...reviewData,
                        reviewText: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-600"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="mb-2">
                  <label className="block text-xs md:text-base">
                    Your Rating
                  </label>
                </div>
                <div className="flex gap-1 items-center mb-2">
                  {[...Array(5)].map((star, i) => (
                    <span
                      className={`text-gray-300 text-lg md:text-xl xl:text-2xl cursor-pointer ${
                        reviewData.rating > i && "text-yellow-500"
                      }`}
                      key={i}
                      onClick={() => {
                        handleStarClick(i);
                        console.log(reviewData.rating);
                      }}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-1 md:px-8 md:py-3 rounded-md font-medium"
                >
                  Submit Review
                </button>
              </form>
            </div>

            {/* reviews */}
            <div className="h-full w-full shadow-lg mb-8" id="reviews">
              <h2 className="p-4 font-semibold text-sm md:text-xl lg:2xl">
                Reviews
              </h2>
              {console.log(reviews)}
              {!reviews ? (
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
                    <p className="font-medium text-xs md:text-base">
                      {review.comment}
                    </p>
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
          </div>
        </div>
      )}
    </>
  );
};

export default Hotel;
