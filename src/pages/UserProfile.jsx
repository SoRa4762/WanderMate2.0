import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getUser,
  // getHotelBooking, getTravelBooking
} from "../api";
import UserBookings from "../components/UserBookings";

import Modal from "../components/Modal";

const UserProfile = () => {
  const hotelUrl = "/hotel";
  const travelUrl = "/travel";
  const { userId } = useParams();
  const [user, setUser] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [hotelBooking, setHotelBooking] = useState([]);
  const [travelBooking, setTravelBooking] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(userId);
      setUser(userData);
      console.log(userData);
    };

    fetchUser();
  }, [userId]);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      {!user ? (
        <div>Loading...</div>
      ) : (
        <div className="min-h-screen w-full flex flex-col mt-4">
          {/* profile and cover image */}
          <div className="relative h-56 md:h-80 w-full">
            <img
              className="h-56 md:h-80 w-full object-cover rounded-lg cursor-pointer"
              src={user.coverImage}
              alt={user.name}
            />
            <div className="h-full w-full">
              <img
                className="absolute left-8 top-[10.3rem] md:top-56 lg:left-28 xl:left-32 h-28 w-28 md:h-48 md:w-48 rounded-full object-cover cursor-pointer border-2 border-white"
                src={user.img}
                alt={user.name}
              />

              <button
                onClick={toggleModal}
                className="absolute top-[15.5rem] md:top-[345px] right-8 lg:right-28 xl:right-32 text-sm md:text-base text-normal text-black border-black border-2 rounded-3xl px-6 py-1 md:px-12 md:py-2 hover:bg-black hover:text-white transition-all ease-in-out duration-300"
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* user details */}
          <div className="h-full pt-20 md:pt-24 pb-10 flex flex-col">
            <h1 className="font-bold text-xl">{user.name}</h1>
            <p className="text-gray-500 text-sm">{user.userHandle}</p>
            <p className="text-[0.95rem]">{user.bio}</p>
          </div>

          {/* user hotels booking */}
          <h2 className="font-semibold text-sm md:text-xl lg:2xl">
            Hotel Bookings
          </h2>
          <div>
            <UserBookings data={hotelBooking} url={hotelUrl} />
          </div>

          {/* user travel packages booking */}
          <h2 className="font-semibold text-sm md:text-xl lg:2xl mt-8">
            Travel Packages Bookings
          </h2>
          <div>
            <UserBookings data={travelBooking} url={travelUrl} />
          </div>

          {/* Modal */}
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            coverImg={user.coverImage}
            profileImg={user.img}
          />
        </div>
      )}
    </>
  );
};

export default UserProfile;
