import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="text-secondary">
        <nav className="relative px-5">
          <div className="flex justify-between h-[10dvh] items-center ">
            <Link to={"/"}>
              <h1 className=" cursor-pointer text-2xl font-semibold">
                Se7en Magic
              </h1>
            </Link>

            <div className=" hidden sm:visible sm:flex sm:items-center gap-5">
              <NavLink
                className=" cursor-pointer hover:underline hover:text-primary hover:underline-offset-[6px] text-xl"
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className=" cursor-pointer hover:underline hover:text-primary hover:underline-offset-[6px] text-xl"
                to={"/project"}
              >
                Projects
              </NavLink>
              <NavLink
                className=" cursor-pointer hover:underline hover:text-primary hover:underline-offset-[6px] text-xl"
                to={"/contact"}
              >
                Contact
              </NavLink>

              <div className=" hidden sm:visible sm:flex gap-3">
                <FaYoutube />
                <FaLinkedin />
                <FaSquareInstagram />
              </div>
            </div>

            {!showMenu ? (
              <button
                onClick={toggleMenu}
                className=" sm:hidden text-2xl font-bold"
              >
                <GiHamburgerMenu />
              </button>
            ) : (
              <button
                onClick={toggleMenu}
                className=" sm:hidden text-2xl font-extrabold"
              >
                <GrClose />
              </button>
            )}
          </div>

          {/* Drop down Menu */}
          <div className="sm:hidden absolute left-0 w-full flex justify-center z-50 px-5  ">
            {showMenu ? (
              <div className=" sm:hidden flex flex-col justify-center items-center w-full h-[70dvh] rounded-md top-19 bg-primary opacity-90 gap-8 text-2xl ">
                <NavLink
                  className=" cursor-pointer hover:underline text-white hover:text-gray-300 hover:underline-offset-[6px]"
                  to={"/"}
                >
                  Home
                </NavLink>
                <NavLink
                  className=" cursor-pointer hover:underline text-white hover:text-gray-300 hover:underline-offset-[6px]"
                  to={"/project"}
                >
                  Projects
                </NavLink>
                <NavLink
                  className=" cursor-pointer hover:underline text-white hover:text-gray-300 hover:underline-offset-[6px]"
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </div>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
