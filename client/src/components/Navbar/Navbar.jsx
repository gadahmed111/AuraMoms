import React from "react";
import NavItem from "./NavItem.jsx";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import NavButton from "../ReUseable/NavButton.jsx";
import DarkModeButton from "../ReUseable/DarkModeButton";
import ThemeMode from "../ReUseable/DarkModeButton";
// import NavInput from "./NavInput.jsx";
// import Wavify from "react-wavify";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-4 h-24  text-[#799263] font-Cabin dark:bg-DarkColor">
        <h1 className="text-2xl text-black dark:text-white">Aura Moms</h1>
        <NavItem />
        <div className="flex justify-center items-center space-x-6 max-lg:hidden">
          <select
            name=""
            id=""
            className="border p-1 rounded-xl hover:border-gray-700 transition-all dark:bg-black dark:text-white"
          >
            <option value="">EN</option>
            <option value="">Fr</option>
          </select>
          {/* <NavInput /> */}
          <CiShoppingCart className="cursor-pointer text-2xl hover:text-gray-500 transition-all" />
          <ThemeMode />
          <NavButton className="">sign up</NavButton>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
