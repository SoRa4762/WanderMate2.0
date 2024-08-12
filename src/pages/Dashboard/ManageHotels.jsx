import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { getHotels } from "../../api";
import axios from "axios";
import DeleteModal from "../../elements/DeleteModal";

const ManageHotels = () => {
  // State variables
  const [hotels, setHotels] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [reserveNow, setReserveNow] = useState(false);
  const [description, setDescription] = useState("");

  // Ref for resetting form data for image input field
  const imageInputRef = useRef(null);

  // Fetch hotels from API
  const fetchHotels = async () => {
    try {
      const response = await getHotels();
      setHotels(response);
      console.log("Fetched hotels:", response);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  // Handle image changes
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...selectedFiles]);
    console.log("Images added:", selectedFiles);
  };

  // Remove image
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    console.log(`Image at index ${index} removed`);
  };
  // Upload images to Cloudinary
  const uploadImagesToCloudinary = async (newImages) => {
    const cloudinaryUrl =
      "https://api.cloudinary.com/v1_1/devkjwg6r/image/upload";
    const uploadPreset = "vkxvktv3";

    try {
      const imageUrls = await Promise.all(
        // binary large object
        // A Blob is designed to hold binary data, such as images, videos, files, or other types of binary data that are not text-based.
        newImages
          .filter((image) => image instanceof Blob || image instanceof File)
          .map(async (image) => {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", uploadPreset);

            const response = await axios.post(cloudinaryUrl, formData);
            // here we retrun response.data.secure_url because we need to pass url to the our database
            console.log("cloudinary response:", response.data.secure_url);
            return response.data.secure_url;
          })
      );
      console.log("Uploaded images to Cloudinary:", imageUrls);
      return imageUrls;
    } catch (err) {
      console.error("Error uploading images to Cloudinary:", err);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting form...");

    // Separate new images from existing ones
    const newImages = images.filter(
      (image) => image instanceof Blob || image instanceof File
    );
    const existingImageUrls = images.filter(
      (image) => typeof image === "string"
    );

    // Upload new images if any
    const newImageUrls =
      newImages.length > 0 ? await uploadImagesToCloudinary(newImages) : [];
    console.log(`Uploaded new images: ${newImageUrls}`);

    // Combine existing and new image URLs
    const combinedImageUrls = [...existingImageUrls, ...newImageUrls];
    console.log(`Combined image URLs: ${combinedImageUrls}`);
    const imageUrl = combinedImageUrls.filter(
      (item) => Object.keys(item).length !== 0
    );

    const hotelData = {
      Name: name,
      Price: price,
      ImageUrl: imageUrl,
      FreeCancellation: freeCancellation,
      ReserveNow: reserveNow,
      Description: description,
    };

    // Determine whether to add or update hotel data
    const uploadData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5039/api/Hotel",
          hotelData
        );
        console.log("Hotel added:", response);
        setLoading(false);
        fetchHotels();
        resetForm();
      } catch (err) {
        console.error("Error adding hotel:", err);
        setLoading(false);
      }
    };

    const editData = async () => {
      try {
        const response = await axios.put(
          `http://localhost:5039/api/Hotel/${id}`,
          hotelData
        );
        console.log("Hotel updated:", response);
        setLoading(false);
        fetchHotels();
        resetForm();
      } catch (err) {
        console.error("Error updating hotel:", err);
        setLoading(false);
      }
    };

    isEditing ? editData() : uploadData();
  };
  // Handle hotel editing
  const handleEdit = (hotel) => {
    setId(hotel.id);
    setIsEditing(true);
    setName(hotel.name);
    setPrice(hotel.price);
     
    // setImages(hotel.imageUrl || []);
    setFreeCancellation(hotel.freeCancellation);
    setReserveNow(hotel.reserveNow);
    setDescription(hotel.description);
    console.log("Editing hotel:", hotel);
  };
  // Reset form fields
  const resetForm = () => {
    
    setName("");
    setPrice("");
    setImages([]);
    setFreeCancellation(false);
    setReserveNow(false);
    setDescription("");
    // setCurrentHotel(null);
    setIsEditing(false);
    if (imageInputRef.current) {
      imageInputRef.current.value = null;
    }
    console.log("Form reset");
  };

  // Handle hotel deletion
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5039/api/Hotel/${id}`
      );
      console.log("Hotel deleted:", response);
      fetchHotels();
    } catch (err) {
      console.error("Error deleting hotel:", err);
    }
  };

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full p-6"
    >
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">
          {isEditing ? "Edit Hotel" : "Add New Hotel"}
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border-2 rounded focus:outline-none focus:border-2 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border-2 rounded focus:outline-none focus:border-2 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Images</label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              ref={imageInputRef}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={`${
                    image instanceof Blob || image instanceof File
                      ? URL.createObjectURL(image)
                      : image
                  }`}
                  alt={`preview-${index}`}
                  className="h-24 w-24 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="h-6 w-6 flex justify-center items-center absolute top-0 right-0 bg-red-500 text-white rounded-full"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Free Cancellation</label>
            <input
              type="checkbox"
              checked={freeCancellation}
              onChange={(e) => setFreeCancellation(e.target.checked)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Reserve Now</label>
            <input
              type="checkbox"
              checked={reserveNow}
              onChange={(e) => setReserveNow(e.target.checked)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border-2 rounded focus:outline-none focus:border-2 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className={`bg-blue-500 text-white py-2 px-4 rounded ${
              loading ? "cursor-not-allowed bg-blue-300" : "cursor-pointer"
            }`}
          >
            {isEditing ? "Update Hotel" : "Add Hotel"}
          </button>
        </form>

        <div className="mt-10">
          <h1 className="text-3xl font-bold mb-4">View Hotels</h1>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="border px-2 py-2">S.N</th>
                <th className="border px-2 py-2">Hotel ID</th>
                <th className="border px-14 py-2">Name</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-1 py-2">Free Cancellation</th>
                <th className="border px-2 py-2">Reserve Now</th>
                <th className="border px-20 py-2">Description</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {hotels?.map((hotel, index) => (
                <tr key={index}>
                  <td className="border px-1 py-2">{index + 1}</td>
                  <td className="border px-4 py-2 text-gray-900 font-semibold">
                    {hotel.id}
                  </td>
                  <td className="border px-4 py-2 text-gray-900 font-semibold">
                    {hotel.name}
                  </td>
                  <td className="border px-4 py-2 text-gray-900 font-semibold">
                    ${hotel.price}
                  </td>
                  <td
                    className={`border px-4 py-2 ${
                      hotel.freeCancellation ? "text-green-600" : "text-red-600"
                    } font-medium`}
                  >
                    {hotel.freeCancellation ? "Yes" : "No"}
                  </td>
                  <td
                    className={`border px-4 py-2 text-green-600 font-medium ${
                      hotel.reserveNow ? "text-green-600   " : "text-red-600"
                    }`}
                  >
                    {hotel.reserveNow ? "Yes" : "No"}
                  </td>
                  <td className="border px-4 py-2 text-gray-700">
                    {hotel.description}
                  </td>

                  <td className="border px-6 py-2">
                    <button
                      onClick={() => handleEdit(hotel)}
                      className="bg-green-500 text-white py-1 px-3 rounded mr-2"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="border px-6 py-2">
                    <button
                      onClick={() => {
                        setOpen(true);
                        setId(hotel.id);
                      }}
                      className="bg-red-500 text-white py-1 px-3 rounded mr-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <DeleteModal
          open={open}
          setOpen={setOpen}
          handleDelete={handleDelete}
          id={id}
        />
      </div>
    </motion.div>
  );
};

export default ManageHotels;
