import { hotels, travelPackages, topDestinations } from "../helper/data";
// import { fetchHotels, fetchTravelPackages, fetchTopDestinations } from "../api";
import Cards from "../components/Cards";
import TopHotels from "../assets/bg2.jpg";
import TopTravelPackage from "../assets/bg5.jpg";
import TopDestination from "../assets/bg.jpg";
import bgImg from "../assets/headerImg9.jpg";
import { IoSearch } from "react-icons/io5";

const Home = () => {
  return (
    <>
      {/* home */}
      <div className="h-full w-full">
        {/* search section */}
        <div
          className="h-[40vh] relative sm:h-[55vh] md:h-[70vh] lg:h-[75vh] mt-8 w-full transition-all duration-300 ease-in-out rounded-lg"
          style={{
            background: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-[12%] lg:w-[39%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white flex justify-center items-center gap-2 p-1 md:p-4 rounded-lg">
            <input
              className="h-[90%] w-[80%] lg:w-[90%] border-none outline-none text-xs sm:text-sm md:text-base lg:text-lg"
              placeholder="Search Your Places, Destination..."
              type="text"
            />
            <div className="h-5 w-5 sm:h-7 sm:w-7 md:h-10 md:w-10 lg:h-11 lg:w-11 flex items-center justify-center bg-blue-600 rounded-full cursor-pointer">
              <IoSearch
                className="lg:flex xs:hidden hidden"
                size={22}
                color="white"
              />
              <IoSearch
                className="md:flex lg:hidden hidden"
                size={18}
                color="white"
              />
              <IoSearch
                className="sm:flex md:hidden hidden"
                size={16}
                color="white"
              />
              <IoSearch className="flex sm:hidden" size={12} color="white" />
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="h-full w-full flex flex-col">
          {/* destinations */}
          <div className="h-full w-full flex flex-col pt-4 xl:px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full cursor-pointer"
                src={TopDestination}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl cursor-pointer">
                Top Destinations
              </h1>
            </div>
            {/* cards */}
            <Cards data={topDestinations} />
          </div>

          {/* hotel */}
          <div className="h-full w-full flex flex-col pt-4 xl:px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full cursor-pointer"
                src={TopHotels}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl cursor-pointer">
                Top Hotels
              </h1>
            </div>
            {/* cards */}
            <Cards data={hotels} />
          </div>

          {/* destinations */}
          <div className="h-full w-full flex flex-col pt-4 xl:px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full cursor-pointer"
                src={TopTravelPackage}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl cursor-pointer">
                Top Travel Packages
              </h1>
            </div>
            {/* cards */}
            <Cards data={travelPackages} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
