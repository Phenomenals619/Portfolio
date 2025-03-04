import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center sticky top-0 justify-between px-10 py-5 bg-pink-500 text-white">
        <div>
          <a
            className="text-xl text-yellow-200 font-bold hover:scale-125 transition-all duration-300 cursor-pointer"
            href="/"
          >
            HYMENSHU
          </a>
        </div>
        <div className="flex justify-between items-center gap-10">
          <a
            className="hover:scale-125 transition-all duration-300"
            href="#about"
          >
            About
          </a>
          <a className="hover:scale-125 transition-all duration-300" href="#skills">
            Skills
          </a>
          <a className="hover:scale-125 transition-all duration-300" href="#project">
            Project
          </a>
          <a className="hover:scale-125 transition-all duration-300" href="#contact">
            Contact Us
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
