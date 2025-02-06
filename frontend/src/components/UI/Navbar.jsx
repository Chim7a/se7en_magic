import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="container mx-auto text-secondary">
        <nav className="relative">
          <div className="flex justify-between h-[10dvh] items-center p-5">
            <div>
              <h1 className=" text-xl font-semibold">Se7en Magic</h1>
            </div>

            <div className=" hidden sm:visible sm:flex gap-5">
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
            </div>

            <div className=" hidden sm:visible sm:flex gap-5">
              <FaYoutube />
              <FaLinkedin />
              <FaSquareInstagram />
            </div>

            {!showMenu ? (
              <button
                onClick={toggleMenu}
                className=" sm:hidden text-xl font-bold"
              >
                <GiHamburgerMenu />
              </button>
            ) : (
              <button
                onClick={toggleMenu}
                className=" sm:hidden text-xl font-bold"
              >
                <GrClose />
              </button>
            )}
          </div>

          {/* Drop down Menu */}
          <div className="sm:hidden absolute w-full flex justify-center z-50  ">
            {showMenu ? (
              <div className=" sm:hidden flex flex-col justify-center items-center w-full h-[90dvh] top-19 bg-white gap-8 ">
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
