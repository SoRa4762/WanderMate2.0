import { footerLinks } from "../helper/data";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col xl:mx-10 my-10 mt-15 bg-white shadow-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 px-4 sm:px-12 pt-2">
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-gray-800 font-semibold text-sm md:text-xl pb-1 sm:pb-2">
              About WanderMate
            </h3>
            {footerLinks.slice(0, 5).map((about) => (
              <>
                <p className="text-xs md:text-base hover:text-blue-600 hover:font-semibold">
                  <a href={about.link}>{about.name}</a>
                </p>
              </>
            ))}
          </div>

          <div className="flex flex-col gap-2 items-start md:my-0">
            <h3 className="text-gray-800 font-semibold text-sm md:text-xl pb-1 sm:pb-2">
              Explore
            </h3>
            {footerLinks.slice(5, 9).map((explore) => (
              <>
                <p className="text-xs md:text-base hover:text-blue-600 hover:font-semibold">
                  <a href={explore.link}>{explore.name}</a>
                </p>
              </>
            ))}
          </div>

          <div className="flex flex-col gap-2 items-start my-6 lg:my-0">
            <h3 className="text-gray-800 font-semibold text-sm md:text-xl pb-1 sm:pb-2">
              Trip-Advisor Sites
            </h3>
            {footerLinks.slice(-4).map((extra) => (
              <>
                <p className="text-xs md:text-base hover:text-blue-600 hover:font-semibold">
                  <a href={extra.link}>{extra.name}</a>
                </p>
              </>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-900 font-semibold text-sm md:text-base mt-2 mb-6">
          &copy; 2024 WanderMate LLC All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
