import { useState } from "react";
import { adminSidebar } from "../helper/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";

const DashboardSidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:5171/api/Auth/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("expiresIn");
      navigate("/signin")

      console.log(response)
     
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
        alert(`Error: ${error.response.data}`);
      } else {
        console.error("Error during logout:", error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        {/* Logo or Brand Name */}
        <h1 className="text-2xl font-bold">WanderMate</h1>

        {/* Right side logout/profile */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon/Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-800"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Triggerable Sidebar */}
      <div className="flex">
        <div
          className={`${
            !open && "hidden"
          } flex justify-center items-center border-2 h-10 w-10 border-black rounded-sm cursor-pointer`}
          onClick={toggleSidebar}
        >
          <RxHamburgerMenu className="w-6 h-6 flex" />
        </div>

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
            <hr className="w-[80%]" />
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
      </div>
    </>
  );
};

export default DashboardSidebar;
