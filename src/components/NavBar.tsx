import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <div className="bg-[#ECE9E2]">
        <div className="flex items-center justify-between p-6">
          <div className="w-24">
            <Link to="">
              <img
                src="https://cdn.prod.website-files.com/6649a073ce571a7f8882641d/66520df92e7578426e374ed7_BlogMin.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center  ">
            <ul className="flex text-[#e43c13] space-x-10 text-[18px]">
              <li className=" hover:underline">
                <Link to="/">Home</Link>
              </li>
              <li className=" hover:underline">
                <Link to="/Blog">Blog</Link>
              </li>
              <li className=" hover:underline">
                <Link to="/About">About</Link>
              </li>
              <li className=" hover:underline">
                <div className="  ">
                  <div className="group flex   ">
                    <div className="   ">
                      <Link
                        to={""}
                        className="menu-hover text-[#e43c13] text-base  lg:mx-4"
                      >
                        Page
                      </Link>
                    </div>

                    <div className="invisible absolute z-50 mt-6 flex rounded-[30px] text-[#e43c13] flex-col bg-white py-1 px-4   group-hover:visible">
                      <div className="flex">
                        <div>
                          <Link
                            to={"/"}
                            className="my-1 block  hover:underline border-gray-100 py-[5px] px-[20px] text-[20px]   md:mx-2"
                          >
                            Home
                          </Link>

                          <Link
                            to={"/Blog"}
                            className="my-1 block  hover:underline border-gray-100  py-[5px] px-[20px] text-[20px]  md:mx-2"
                          >
                            Blog
                          </Link>

                          <Link
                            to={"/About"}
                            className="my-1 block   hover:underline border-gray-100  py-[5px] px-[20px] text-[20px]"
                          >
                            About
                          </Link>

                          <Link
                            to={"/Subcrib"}
                            className="my-1 block  hover:underline border-gray-100 py-[5px] px-[20px] text-[20px]"
                          >
                            Subscribe
                          </Link>

                          <Link
                            to={"/Contact"}
                            className="my-1 block   hover:underline border-gray-100  py-[5px] px-[20px] text-[20px]"
                          >
                            Contact
                          </Link>
                        </div>
                        <div>
                          <Link
                            to={"/"}
                            className="my-1 block   hover:underline border-gray-100  py-[5px] px-[20px] text-[20px]"
                          >
                            Style Guide
                          </Link>
                          <Link
                            to={"/Licenses"}
                            className="my-1 block   hover:underline border-gray-100  py-[5px] px-[20px] text-[20px]"
                          >
                            Licenses
                          </Link>
                          <Link
                            to={"/Changelog"}
                            className="my-1 block   hover:underline border-gray-100  py-[5px] px-[20px] text-[20px]"
                          >
                            Changelog
                          </Link>
                        </div>
                      </div>
                      <button className="bg-[#e43c13] text-white hover:bg-white mb-3 rounded-2xl py-1 px-2 hover:text-[#e43c13]">
                        More Templates
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="hidden md:block pr-10">
            <Link
              to={"Subcrib"}
              className="bg-[#e43c13] rounded-[100px] text-[16px] text-center px-6 py-[14px] hover:bg-white hover:text-[#e43c13] text-white"
            >
              Subscribe
            </Link>
          </div>

          <div className="md:hidden flex items-center pr-4">
            <button onClick={toggleMenu} className="text-[#e43c13]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#ECE9E2] p-4 space-y-4">
            <ul className="flex flex-col text-[#e43c13] text-[18px] space-y-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <div className="">Page</div>
              </li>
              <li>
                <Link
                  to="Subcrib"
                  className="w-full bg-[#e43c13] rounded-[100px] text-[16px] text-center px-6 py-[14px] hover:bg-white hover:text-[#e43c13] text-white"
                >
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
