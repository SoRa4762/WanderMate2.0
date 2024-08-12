import { useState } from "react";
import { motion } from "framer-motion";
import { adminSidebar } from "../helper/data";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu,  } from "react-icons/rx";

const DashboardSidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* triggerable sidebar */}
      <div
        className={`${
          !open && "hidden"
        } flex justify-center items-center border-2 h-10 w-10 border-black rounded-sm cursor-pointer`}
        onClick={toggleSidebar}
      >
        <RxHamburgerMenu className="w-6 h-6 flex" />
      </div>

      {/* <motion.div
        initial={{ x: open ? -430 : 0 }}
        animate={{ x: open ? 0 : -430 }}
        transition={{ duration: 0 }}
        // style={{
        //   transition: "opacity 0.5s, display 0.5s",
        // }}
        className={`
            ${open ? "block" : "hidden"}
            lg:hidden h-screen sticky top-0 left-0 w-52 transition-all bg-gray-700 duration-700`}
      >
        <div className="flex items-center">
          <RxCross2
            onClick={toggleSidebar}
            className={`${
              !open && "hidden"
            } w-6 h-6 flex text-white cursor-pointer ml-4`}
          />

          <h1 className="flex justify-center text-xl sm:text-2xl font-bold text-white pl-4 py-6">
            WanderMate
          </h1>
        </div>

        <div className="flex justify-center">
          <hr className="w-[80%] " />
        </div>
        {adminSidebar.map((item) => (
          <div key={item.id}>
            <Link
              className={`${
                location.pathname === item.to && "bg-gray-900"
              } flex font-bold text-white sm:text-lg md:text-xl lg:text-2xl pl-4 py-2 transition-all duration-300
                cursor-pointer hover:bg-gray-100 hover:text-black hover:border`}
              to={item.to}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </motion.div> */}

      {/* hide when screen not lg */}
      <div
        className={`
          ${open && "hidden"}
            h-screen sticky top-0 left-0 w-64 flex flex-col bg-gray-700 transition-all duration-700 cursor-pointer select-none`}
        onClick={toggleSidebar}
      >
        <h1 className="flex justify-center text-xl sm:text-2xl font-bold text-white pl-4 py-8">
          WanderMate
        </h1>
        <div className="flex justify-center">
          <hr className="w-[80%] " />
        </div>
        {adminSidebar.map((item) => (
          <div key={item.id}>
            <Link
              className={`${
                location.pathname === item.to && "bg-gray-900"
              } flex font-bold text-white sm:text-lg pl-4 py-2 transition-all duration-300
                cursor-pointer hover:bg-gray-100 hover:text-black hover:border`}
              to={item.to}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardSidebar;
