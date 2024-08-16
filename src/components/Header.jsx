import { useState, useEffect } from "react";
import userProfile from "../assets/userProfile.jpg";
import { headerLinks } from "../helper/data";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogout, setShowLogout] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  // const [userName, setUserName] = useState(""); // State for storing user name
  // useEffect(() => {
  //   const fetchUserName = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5171/api/User");
  //       console.log("API Response:", response.data); // Inspect the entire response
  
  //       if (response.data && response.data.getUserDto) {
  //         // Ensure that getUserDto is an array of objects with valid properties
  //         const usernames = response.data.getUserDto.map(user => {
  //           // Check if the user object is defined and has a Username property
  //           return user?.Username || 'Unknown Username';
  //         });
  
  //         console.log("Usernames Array:", usernames);
  //         setUserName(usernames[0]); // Assuming you want the first username
  //       }
  //     } catch (error) {
  //       console.error(
  //         "Error fetching user data:",
  //         error.response?.data || error.message
  //       );
  //     }
  //   };
  
  //   fetchUserName();
  // }, []);
  

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5171/api/Auth/Logout");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("expiresIn");
      console.log("User logged out successfully!");
      navigate("/signin");
    } catch (error) {
      console.error(
        "Error logging out:",
        error.response?.data || error.message
      );
    }
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <>
      <div className="h-[7vh] w-full flex justify-between items-center font-bold lg:text-xl pt-2">
        {/* menu */}
        <RxHamburgerMenu
          className="w-6 h-6 flex md:hidden cursor-pointer"
          onClick={toggleSideMenu}
        />

        {/* side menu */}
        <motion.div
          initial={{ x: showSideMenu ? 600 : 0 }}
          animate={{ x: showSideMenu ? 0 : 600 }}
          transition={{ duration: 0 }}
          className={`
            ${showSideMenu ? "opacity-1" : "opacity-0"}
            h-screen w-[80%] md:hidden fixed top-0 right-0 bg-white z-50 rounded-lg transition-all duration-700`}
        >
          {headerLinks.map((item) => (
            <div key={item.id}>
              <Link
                className={`${
                  location.pathname === item.link && "bg-gray-100"
                } flex font-bold text-gray-500 text-lg pl-4 py-1 
                cursor-pointer hover:bg-gray-100 hover:rounded-lg`}
                to={item.link}
              >
                {item.linkTitle}
              </Link>
            </div>
          ))}
        </motion.div>

        <a href="/user/home" className="hidden md:flex text-blue-600">
          WanderMate
        </a>
        <div className="hidden md:flex md:gap-4 lg:gap-8 items-center">
          {headerLinks.map((nav, index) => (
            <li
              key={index}
              className={`${
                location.pathname === nav.link && "border-b-blue-600 border-b-4"
              } list-none cursor-pointer lg:text-xl hover:border-b-4 hover:border-b-blue-600`}
            >
              <a href={nav.link}>{nav.linkTitle}</a>
            </li>
          ))}
        </div>

        {/* user profile */}
        <div className="relative">
          <div
            onClick={toggleLogout}
            className="h-full flex items-center gap-2 cursor-pointer"
          >
            <p>user</p>
            <img
              className="h-12 w-12 rounded-full"
              src={userProfile}
              alt="userProfile"
            />
          </div>

          {/* logout menu  */}
          {showLogout && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg z-10">
              <a
                href="/user/profile/1"
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 hover:rounded-t-lg"
              >
                Profile
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 hover:rounded-b-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
