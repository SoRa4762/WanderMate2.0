import { useEffect, useState } from "react";

const PrototypeCarousel = ({ data }) => {
  const [itemId, setItemId] = useState(1);
  const [seeMore, setSeeMore] = useState(false);

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
      <div className="flex flex-col h-full w-full">
        {/* images */}
        {data
          .filter((item) => item.id === itemId)
          .map((item) => (
            <div className="h-[40vh] w-full" key={item.id}>
              <img
                className="h-full w-full object-cover"
                src={item.img}
                alt={item.title}
              />
            </div>
          ))}

        {/* buttons */}
        <div className="flex h-[7vh] w-full justify-center items-center gap-4">
          {data.map((item) => (
            <div
              onClick={() => {
                setItemId(item.id);
              }}
              key={item.id}
              className={`h-4 w-4 cursor-pointer
                 rounded-full border border-yellow-500 hover:bg-yellow-500
                ${item.id === itemId && "bg-yellow-500"}
                `}
            ></div>
          ))}
        </div>
        {/* descriptions */}
        {data
          .filter((item) => item.id === itemId)
          .map((item) => (
            <div key={item.id}>
              <p className={`${seeMore ? "line-clamp-none" : "line-clamp-4"} `}>
                {item.desc}
              </p>
              <button
                className="font-semibold text-blue-500 flex justify-end w-full"
                onClick={() => {
                  setSeeMore(!seeMore);
                }}
              >
                {`${seeMore ? "See Less" : "See More"}`}
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default PrototypeCarousel;
