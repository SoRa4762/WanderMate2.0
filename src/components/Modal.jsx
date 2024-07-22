import { GoArrowLeft } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { TbCameraHeart } from "react-icons/tb";
import { useState } from "react";

const Modal = ({ openModal, setOpenModal, userId, profileImg, coverImg }) => {
  const [profilePicture, setProfilePicture] = useState(profileImg);
  const [coverPhoto, setCoverPhoto] = useState(coverImg);
  const [profilePictureChanged, setProfilePictureChanged] = useState(false);
  const [coverPhotoChanged, setCoverPhotoChanged] = useState(false);

  return (
    <>
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col gap-4 justify-center items-center">
          <div className="h-full w-full relative md:h-[40rem] md:w-[38rem] flex flex-col bg-white rounded-none md:rounded-xl overflow-y-scroll">
            {/* header */}
            <div className="h-16 bg-white sticky z-10 top-0 left-0 w-full flex justify-between items-center py-4 px-4">
              <div className="flex justify-center items-center gap-4">
                <GoArrowLeft
                  className="md:hidden cursor-pointer rounded-full hover:bg-gray-200 h-8 w-8 p-1 duration-300"
                  onClick={() => setOpenModal(false)}
                />

                <RxCross2
                  className="hidden md:block cursor-pointer rounded-full hover:bg-gray-200 h-8 w-8 p-1 duration-300"
                  onClick={() => setOpenModal(false)}
                />
                <p className="font-bold text-xl">Edit Profile</p>
              </div>
              <button
                className="h-10 bg-black text-white px-6 rounded-full hover:bg-gray-500 duration-300"
                onClick={() => setOpenModal(false)}
              >
                Save
              </button>
            </div>
            {/* body */}
            <div>
              {/* image section */}
              <div
                className="relative flex justify-center items-center h-44 md:h-48 w-full duration-300"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
                  ${
                    coverPhotoChanged
                      ? `url(${URL.createObjectURL(coverPhoto)})`
                      : `url(${coverPhoto})`
                  }`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex gap-3">
                  <label htmlFor="coverPhoto">
                    <TbCameraHeart className="text-white h-11 w-11 p-3 bg-gray-500 bg-opacity-60 hover:bg-opacity-95 rounded-full cursor-pointer" />
                  </label>
                  <input
                    type="file"
                    id="coverPhoto"
                    className="hidden"
                    onChange={(e) => {
                      setCoverPhoto(e.target.files[0]);
                      setCoverPhotoChanged(true);
                    }}
                  />
                  <RxCross2
                    className="text-white h-11 w-11 p-3 bg-gray-500 bg-opacity-60 hover:bg-opacity-95 rounded-full cursor-pointer"
                    onClick={() => {
                      setCoverPhoto("");
                      setCoverPhotoChanged(false);
                    }}
                  />
                </div>
                <div
                  style={{
                    background: `${
                      profilePictureChanged
                        ? `url(${URL.createObjectURL(profilePicture)})`
                        : `url(${profilePicture})`
                    }`,
                    backgroundSize: "cover",
                  }}
                  className="h-28 w-28 absolute flex justify-center items-center rounded-full top-[7.3rem] md:top-[8.4rem] left-6 border border-white"
                >
                  <label htmlFor="profilePicture">
                    <TbCameraHeart className="text-white h-11 w-11 p-3 bg-gray-500 bg-opacity-60 hover:bg-opacity-95 rounded-full cursor-pointer" />
                  </label>
                  <input
                    id="profilePicture"
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      setProfilePicture(e.target.files[0]);
                      setProfilePictureChanged(true);
                      console.log("Profile picture: ", e.target.files[0]);
                      console.log("Profile picture: ", profilePicture);
                    }}
                  />
                  {/* <img
                    src={
                      profilePictureChanged
                        ? URL.createObjectURL(profilePicture)
                        : profilePicture
                    }
                    alt="profilePicture"
                  /> */}
                </div>
              </div>

              {/* form */}
              <div className="p-4 pt-[4.5rem] flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  maxLength={50}
                  className="h-14 w-full border border-black rounded-sm p-4 focus:outline-none focus:border-blue-600"
                />
                <textarea
                  type="text"
                  placeholder="Bio"
                  maxLength={160}
                  className="h-24 w-full border border-black rounded-sm p-4 focus:outline-none focus:border-blue-600"
                />
                <input
                  type="text"
                  placeholder="Location"
                  maxLength={30}
                  className="h-14 w-full border border-black rounded-sm p-4 focus:outline-none focus:border-blue-600"
                />
                <input
                  type="text"
                  placeholder="Website"
                  maxLength={100}
                  className="h-14 w-full border border-black rounded-sm p-4 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            {/* <input
                  className="h-10 md:h-14 pl-4 w-50% border-2 border-blue-600 rounded-md focus:border-blue-600"
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                />
                <input
                  className="h-10 md:h-14 pl-4 w-50% border-2 border-blue-600 rounded-md focus:border-blue-600"
                  type="text"
                  placeholder="Bio"
                  name="bio"
                  id="bio"
                />

                <div className="flex gap-4">
                  <button
                    onClick={toggleModal}
                    className="right-8 lg:right-28 xl:right-32 text-sm md:text-base text-normal text-black border-black border-2 rounded-3xl px-6 py-1 md:px-12 md:py-2 bg-white hover:bg-gray-300 transition-all ease-in-out duration-300"
                  >
                    Save
                  </button>
                  <button
                    onClick={toggleModal}
                    className="right-8 lg:right-28 xl:right-32 text-sm md:text-base text-normal border-black border-2 rounded-3xl px-6 py-1 md:px-12 md:py-2 bg-gray-700 hover:bg-gray-500 text-white transition-all ease-in-out duration-300"
                  >
                    Cancel
                  </button>
                </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
