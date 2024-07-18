import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="h-full w-full grid grid-cols-2 xl:grid-cols-4 gap-4 pt-4">
      {data?.slice(0, 4).map((item) => (
        <div key={item.id}>
          <Link
            to={`#`}
            className="h-[30vh] sm:h-[40vh] xl:h-[50vh] w-full flex flex-col justify-between bg-red-200 rounded-lg cursor-pointer drop-shadow-lg  hover:-translate-y-3 transition-all ease-in-out duration-300"
            style={{
              background: `url(${item.img[0]})`,
              backgroundSize: "cover",
            }}
          >
            {/* lg */}
            {console.log("images: ", item.img)}
            <div className="h-8 w-8 m-2 rounded-full bg-white flex justify-center items-center">
              <CiHeart size={24} />
            </div>
            <div className="backdrop-blur-sm text-xs sm:text-sm md:text-base rounded-b-lg p-3 sm:p-4 flex justify-between text-white font-bold">
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
