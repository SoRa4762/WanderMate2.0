import { useState } from "react";

const ManageTravelPackages = () => {
  const [images, setImages] = useState([]);
  const handleImages = (e) => {
    const selectedImage = Array.from(e.target.files);
    setImages((prevImage) => [...prevImage, ...selectedImage]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImage) => prevImage.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <input
          type="file"
          multiple
          onChange={(e) => {
            handleImages(e);
          }}
        />
        <div className="flex gap-4">
          {images.map((imag, i) => (
            <>
              <img
                className="h-52 w-52 object-cover relative"
                src={URL.createObjectURL(imag)}
                alt=""
              />

              <div
                className="cursor-pointer h-4 w-4 flex bg-red-500 text-white justify-center items-center"
                onClick={() => handleRemoveImage(i)}
              >
                X
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageTravelPackages;
