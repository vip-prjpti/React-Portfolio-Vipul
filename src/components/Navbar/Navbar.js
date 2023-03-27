import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import '../../App.css'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="fixed w-full h-[60px] flex justify-around items-center bg-[#08192f] text-[#ccd6f6]">
        {/* menu */}
        <ul className="hidden md:flex cursor-pointer">
          <li className="px-5 hover:border-b-2 pb-1">
           <Link to="home" smooth={true} duration={100}>
              Home
            </Link>
          </li>
          <li className="px-5 hover:border-b-2 pb-1"><Link to="about"  smooth={true} duration={100}>
          About
        </Link></li>
          <li className="px-5 hover:border-b-2 pb-1"><Link to="skills"  smooth={true} duration={100}>
          Skills
        </Link></li>
          <li className="px-5 hover:border-b-2 pb-1"><Link to="project"  smooth={true} duration={100}>
          Projects
        </Link></li>
          <li className="px-5 hover:border-b-2 pb-1">
           <Link to="contact" smooth={true} duration={100}>
              Contact
            </Link>
          </li>
        </ul>
        {/* Hamburger */}
        <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
          {nav ? <FaTimes /> : <FaBars />}
        </div>
        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden cursor-pointer"
              : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-3xl cursor-pointer"><Link onClick={handleClick} to="home" smooth={true} duration={100}>
              Home
            </Link></li>
          <li className="py-6 text-3xl cursor-pointer"><Link onClick={handleClick} to="about"  smooth={true} duration={100}>
          About
        </Link></li>
          <li className="py-6 text-3xl cursor-pointer"><Link onClick={handleClick} to="skills"  smooth={true} duration={100}>
          Skills
        </Link></li>
          <li className="py-6 text-3xl cursor-pointer"><Link onClick={handleClick}to="project"  smooth={true} duration={100}>
          Projects
        </Link></li>
          <li className="py-6 text-3xl cursor-pointer"><Link onClick={handleClick} to="contact" smooth={true} duration={100}>
              Contact
            </Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
