import { useState } from "react";

const PrototypeCarousel = ({ data }) => {
  const [itemId, setItemId] = useState(2);
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
              className="h-4 w-4 rounded-full border border-yellow-500 hover:bg-yellow-500"
            ></div>
          ))}
        </div>
        {/* descriptions */}
        {data
          .filter((item) => item.id === itemId)
          .map((item) => (
            <div key={item.id}>
              <p>{item.desc}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default PrototypeCarousel;
