import { useEffect, useState } from "react";
import "animate.css";

const Carousel = ({ data }) => {
  const [itemId, setItemId] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [animate, setAnimate] = useState(false);
  const handleItemId = (id) => {
    setItemId(id);
  };

  const handleAnimate = () => {
    setExpanded(!expanded);
    setAnimate(!animate);
    // setTimeout(() => {
    //   setAnimate(false);
    // }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (itemId < 5) {
        setItemId((prev) => prev + 1);
      } else {
        setItemId(1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [itemId]);

  return (
    <>
      <div className="h-full w-full">
        {/* images */}
        {data
          .filter((item) => item.id === itemId)
          .map((item) => (
            <>
              <div
                className="h-[40vh] sm:h-[55vh] md:h-[70vh] lg:h-[75vh] w-full mt-8 shadow-xl relative transition-all ease-in-out duration-300"
                key={item.id}
              >
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src={item.img}
                  alt={item.title}
                />
                <p className="absolute top-[2%] lg:top-[3%] right-[2%] lg:right-[1%] py-4 lg:py-6 px-2 bg-gray-50 backdrop-blur-sm rounded-xl font-bold lg:text-3xl cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-300">
                  Explore <span className="text-orange-600">{item.title}</span>
                </p>
              </div>
            </>
          ))}

        {/* buttons */}
        <div className="h-full w-full flex justify-center items-center gap-2 md:gap-4 py-8 transition-all ease-in-out duration-300">
          {data.map((item) => (
            <>
              <div
                className={`md:h-[0.95rem] md:w-[0.95rem] md:border-[3px] h-2 w-2 border border-orange-600 rounded-full cursor-pointer indent-[-99999px] hover:bg-orange-600 transition-all ease-in-out duration-300 ${
                  itemId == item.id ? "bg-orange-600" : "bg-white"
                }`}
                onClick={() => handleItemId(item.id)}
              >
                {item.id}
              </div>
            </>
          ))}
        </div>

        {/* desc */}
        <div className={`h-full w-full p-4 sm:p-8 mt-4 shadow-2xl`}>
          {data
            .filter((item) => item.id === itemId)
            .map((item) => (
              <p
                className={`text-center overflow-hidden animate__animated ${
                  expanded ? "line-clamp-none" : "line-clamp-4"
                }
                ${animate ? "animate__fadeInDown" : "animate__fadeInUp"}`}
                // style={{ WebkitLineClamp: expanded ? "unset" : 3 }}
                key={item.id}
              >
                {item.desc}
              </p>
            ))}
          <div className="flex h-full w-full justify-end">
            <button
              className=" font-semibold hover:text-blue-600"
              onClick={handleAnimate}
            >
              {expanded ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
