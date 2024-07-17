import {
  hotels,
  travelPackages,
  thingsToDo,
  destination,
} from "../helper/data";
import TopHotels from "../assets/bg2.jpg";
import TopTravelPackage from "../assets/bg5.jpg";
import ThingsToDo from "../assets/bg.jpg";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import PrototypeCarousel from "../components/PrototypeCarousel";

const Destination = () => {
  return (
    <>
      <div className="h-full w-full">
        {/* carousel */}
        <Carousel data={destination} />
        {/* <PrototypeCarousel data={destination} /> */}

        {/* cards */}
        <div className="h-full w-full flex flex-col">
          {/* hotels */}
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

          {/* top travel packages */}
          <div className="h-full w-full flex flex-col xl:px-10">
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

          {/* things to do */}
          <div className="h-full w-full flex flex-col xl:px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full cursor-pointer"
                src={ThingsToDo}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl cursor-pointer">
                Things To Do
              </h1>
            </div>
            {/* cards */}
            <Cards data={thingsToDo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
