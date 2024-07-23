import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotel } from "../../api";
import { hotelDetails } from "../../helper/data";
import Map from "../../components/Map";

const Hotel = () => {
  const { id } = useParams();
  const [hotelData, setHotelData] = useState([]);
  const [reviewData, setReviewData] = useState({
    comment: "",
    rating: 0,
  });

  // const [comment, setComment] = useState("");
  // const [rating, setRating] = useState(0);

  const handleStarRating = (index) => {
    // setRating(index + 1);
    setReviewData({ ...reviewData, rating: index + 1 });
  };

  useEffect(() => {
    const fetchHotel = async () => {
      const data = await getHotel(id);
      setHotelData(data);
      console.log(data);
    };

    fetchHotel();
  }, [id]);

  return (
    <>
      {hotelData.length !== 0 ? (
        <div className="flex flex-col">
          {/* images section */}
          <div className="h-[40vh] sm:h-[55vh] md:h-[70vh] lg:h-[75vh] w-full flex md:gap-2 lg:gap-4 mt-2 xl:mt-4 transition-all duration-300">
            <div className="flex h-full w-full flex-[1.3]">
              <img
                src={hotelData.img[0]}
                alt="single image"
                className="h-full w-full object-cover rounded-lg cursor-pointer shadow-lg drop-shadow-xl"
              />
            </div>
            <div className="hidden md:flex h-full w-full flex-1 duration-300">
              <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-1 lg:gap-2">
                {hotelData.img.slice(1, 5).map((img, i) => (
                  <>
                    <img
                      key={i}
                      src={img}
                      alt="multi images"
                      className="h-full w-full object-cover rounded-lg cursor-pointer drop-shadow-xl shadow-lg"
                    />
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* hotel nav */}
          <div className="flex gap-2 xl:gap-4 my-4 lg:mt-4">
            {hotelDetails.map((nav) => (
              <>
                <li
                  key={nav.id}
                  className="h-full list-none font-semibold xl:text-lg"
                >
                  <a
                    href={nav.to}
                    className="hover:border-b-4 hover:border-b-blue-500"
                  >
                    {nav.name}
                  </a>
                </li>
              </>
            ))}
          </div>

          {/* about */}
          <div
            className="flex flex-col shadow-lg drop-shadow-xl rounded-lg mb-4 p-5"
            id="about"
          >
            <div className="flex gap-4 items-end pb-2">
              <h1 className="text-5xl font-bold">{hotelData.rating}</h1>
              <p className="text-3xl font-bold text-blue-500">
                {hotelData.name}
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="flex text-justify font-normal">{hotelData.desc}</p>
              <div className="flex w-full justify-start">
                <button className="h-12 w-32 font-bold text-white rounded-lg bg-blue-500 hover:bg-blue-700 transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* location */}
          <div className="h-[60vh] my-4 w-full" id="location">
            <Map />
          </div>

          {/* write a review */}
          <div
            id="reviews"
            className="h-full w-full flex flex-col p-4 shadow-xl rounded-lg gap-2"
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
            <button className="h-12 w-32 font-bold text-white rounded-lg bg-blue-500 hover:bg-blue-700 transition-all duration-300">
              Submit Review
            </button>
          </div>

          {/* reviews */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Hotel;
