import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import BGImg from "../assets/bg8.jpg";
import HeaderImage from "../assets/headerImg5.jpg";
import { landingFooterLinks, landingHeaderLinks } from "../helper/data";

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* encapsulates all */}
      <div
        className="h-screen w-full flex flex-col justify-between"
        style={{
          background: `linear-gradient(rgba(0, 128, 128, 0.6), rgba(0, 128, 128, 0.6)),url(${BGImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* header */}
        <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center">
          <RxHamburgerMenu
            size={25}
            color="white"
            className="cursor-pointer sm:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <Link
            to="/signup"
            className="sm:flex hidden pl-4 md:pl-8 text-orange-600 font-bold text-2xl lg:text-4xl hover:cursor-pointer"
            style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.4)" }}
          >
            Explore.
          </Link>
          <div className="hidden sm:flex h-full w-full items-center justify-center gap-9 lg:gap-14">
            {landingHeaderLinks.slice(0, 4).map((item) => (
              <>
                <Link
                  key={item.id}
                  to={item.link}
                  className="text-base text-white md:text-lg lg:text-xl hover:border-b-4 hover:border-b-yellow-500"
                >
                  {item.title}
                </Link>
              </>
            ))}
          </div>
          <img
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 0 50%)",
            }}
            className="h-36 md:h-52 lg:h-64 w-40 sm:w-52 md:w-64 object-cover"
            src={HeaderImage}
            alt="image"
          />
        </div>

        {/* side menu */}
        <motion.div
          initial={{ x: open ? 600 : 0 }}
          animate={{ x: open ? 0 : 600 }}
          transition={{ duration: 0.5 }}
          className={`
            h-screen w-[80%] sm:hidden fixed top-0 right-0 bg-white z-50 rounded-lg`}
        >
          {landingHeaderLinks.map((item) => (
            <>
              <Link
                className="flex font-bold text-gray-500 text-lg pl-4 py-1 
                cursor-pointer hover:bg-gray-100 hover:rounded-lg"
                key={item.id}
                to={item.link}
              >
                {item.title}
              </Link>
            </>
          ))}
        </motion.div>

        {/* hero */}
        <div className="w-full text-center text-white">
          <p className="text-lg font-bold md:text-xl lg:text-2xl bg-gradient-to-b from-gray-400 to-gray-100 text-transparent bg-clip-text">
            The Country of Himalays
          </p>
          <h1
            className="font-bold text-7xl md:text-8xl lg:text-9xl"
            style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)" }}
          >
            <span className="text-yellow-600">NEP</span>AL
          </h1>
        </div>
        {/* footer */}
        <div className="w-full grid grid-cols-2">
          {/* first side */}
          <div className="h-full w-full">
            <p className="leading-6 pl-6 md:pl-12 pb-6 md:pb-12 text-white">
              Visit Nepal, You will never regret it. <br /> This is something
              incredible, fantastic, <br /> mesmerizing and lifetime experience.{" "}
            </p>
          </div>
          {/* second side */}
          <div className="h-full flex items-end justify-end gap-4">
            <div className="h-16 flex items-center flex-wrap gap-4 md:gap-16 backdrop-blur-sm px-4">
              {landingFooterLinks.map((link) => (
                <>
                  <Link
                    to={link.link}
                    key={link.id}
                    className="list-none text-white cursor-pointer font-normal hover:border-b-4 hover:border-b-yellow-500"
                  >
                    {link.title}
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
