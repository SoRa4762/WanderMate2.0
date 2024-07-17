import { useState } from "react";
import userProfile from "../assets/userProfile.jpg";
import { headerLinks } from "../helper/data";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname);
  const [showLogout, setShowLogout] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleLogout = () => {
    navigate("/signin");
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
          transition={{ duration: 0.5 }}
          className={`
            h-screen w-[80%] md:hidden fixed top-0 right-0 bg-white z-50 rounded-lg`}
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

        <a href="/home" className="hidden md:flex text-blue-600">
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
            <p>username</p>
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
                href="/user/1"
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Profile
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
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
