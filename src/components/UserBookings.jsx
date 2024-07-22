import StarRating from "../elements/StarRating";
import { Link } from "react-router-dom";

const UserBookings = ({ data, url }) => {
  return (
    <div className="h-full w-full flex flex-col gap-8 py-4">
      {data?.map((item) => (
        <>
          <div
            key={item.id}
            className="h-[20vh] sm:h-[25vh] xl:h-[30vh] w-full flex bg-white rounded-md cursor-pointer drop-shadow-xl transition-all ease-in-out duration-300"
          >
            {/* lg */}
            <div className="flex-1">
              <img
                src={item.image[0]}
                alt="img"
                className="h-full w-full object-cover rounded-l-md"
              />
            </div>
            <div className="flex-1 text-xs sm:text-sm md:text-base lg:text-2xl rounded-b-lg p-3 sm:p-4 flex justify-around items-center flex-col text-black font-semibold">
              <p>{item.name}</p>
              <div className="flex flex-col text-center gap-2">
                <p>$ {item.price}</p>
                <Link
                  to={`/${url}/${item.id}`}
                  className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-1 rounded-md font-medium"
                >
                  View Deal
                </Link>
                <StarRating rating={item.rating} />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default UserBookings;
