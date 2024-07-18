// import { CiHeart } from "react-icons/ci";

// import StarRating from "../elements/StarRating";
import { Link } from "react-router-dom";
import StarRating from "../elements/StarRating";
const HCard = ({ data }) => {
  return (
    <div className="h-full w-full flex flex-col gap-8 pt-8">
      {data?.map((item) => (
        <>
          <div
            key={item.id}
            className="h-[30vh] sm:h-[40vh] xl:h-[50vh] w-full flex bg-white rounded-md cursor-pointer drop-shadow-xl transition-all ease-in-out duration-300"
          >
            {/* lg */}
            <div className="flex-1">
              <img
                src={item.img[0]}
                alt="img"
                className="h-full w-full object-cover rounded-l-md"
              />
            </div>
            <div className="flex-1 text-xs sm:text-sm md:text-base lg:text-2xl rounded-b-lg p-3 sm:p-4 flex justify-around items-center flex-col text-black font-semibold">
              <p>{item.name}</p>
              <div className="flex flex-col text-center gap-2">
                <p>$ {item.price}</p>
                <Link className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-1 rounded-md font-medium">
                  View Deal
                </Link>
                {/* <div>

                </div> */}
                <p className="flex text-gray-700 text-xs lg:text-normal gap-2">
                  {item.freeCancellation ? (
                    <span className="w-4"> &#10003;</span>
                  ) : (
                    <span className="w-4">&#x274C;</span>
                  )}{" "}
                  Free Cancellation
                </p>
                <p className="flex text-gray-700 text-xs lg:text-normal gap-2">
                  {item.reserveNow ? (
                    <span className="w-4"> &#10003;</span>
                  ) : (
                    <span className="w-4">&#x274C;</span>
                  )}{" "}
                  Reserve now, pay at stay
                </p>
                <StarRating rating={item.rating} />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default HCard;
