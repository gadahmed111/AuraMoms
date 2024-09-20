/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import NavItem from "./NavItem.jsx";
import { CiShoppingCart } from "react-icons/ci";
import NavButton from "../ReUseable/NavButton.jsx";
import ThemeMode from "../ReUseable/DarkModeButton";
import MobileItems from "./MobileNavItem.jsx";
import AuraMoms from "./auraMoms.jsx";
const Navbar = () => {
  // Animation section
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const [isOpen, setIsOpen] = useState(false);
  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { scrollY } = useScroll();
  const [Hidden, setHidden] = useState(false); // Start with Navbar visible

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prevScrollY = scrollY.getPrevious();

    if (latest < prevScrollY) {
      setHidden(true); // Hide Navbar on upward scroll past 150px
    } else if (latest > prevScrollY || latest <= 150) {
      setHidden(false); // Show Navbar on downward scroll or scroll above 150px
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          hidden: { y: 0 },
          visible: { y: "-100%" },
        }}
        animate={Hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex  sticky top-0 w-full  justify-between items-center px-4 h-24 text-[#799263] font-Cabin dark:bg-DarkBackground shadow-xl bg-[#fff] z-50"
      >
        
        <AuraMoms />
        <NavItem />
        {/* Desktop Menu */}
        <div className="flex justify-center items-center space-x-6 max-md:hidden">
          <select className="border p-1 rounded-xl hover:border-gray-700 transition-all dark:bg-black dark:text-white">
            <option>EN</option>
            <option>FR</option>
          </select>
          <CiShoppingCart className="cursor-pointer text-2xl hover:text-gray-500 transition-all" />
          <ThemeMode />
          <NavButton className="bg-[#46644c] dark:bg-[#46644c] hover:scale-105 duration-300">
            signUp
          </NavButton>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="relative z-20 flex flex-col items-center justify-between w-8 h-6"
          >
            <motion.div
              className="w-full h-1 bg-black dark:bg-white rounded"
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.div
              className="w-full h-1 bg-black dark:bg-white rounded"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.1 }}
            />
            <motion.div
              className="w-full h-1 bg-black dark:bg-white rounded"
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence key={isOpen ? "open" : "closed"}>
          {isOpen && (
            <motion.div
              key="mobileMenu"
              className="flex flex-col fixed md:hidden top-24 bottom-0 right-0 w-[50vw] bg-[#fff] shadow-xl dark:bg-black text-black dark:text-white z-[40]"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }} // Exit animation
              transition={{ duration: 0.3 }} // The animation when the menu opens
              exitTransition={{ duration: 0.45 }} // 450ms for exit animation
              variants={staggerContainer}
            >
              <motion.div className="" variants={staggerContainer}>
                <MobileItems variants={staggerItem} />
              </motion.div>
              <motion.div
                className="flex justify-center items-start flex-col gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <motion.select
                  variants={staggerItem}
                  className="border p-1 ml-2 rounded-xl hover:border-gray-700 transition-all dark:bg-black dark:text-white"
                >
                  <option>EN</option>
                  <option>FR</option>
                </motion.select>
                <motion.div variants={staggerItem} className="pl-2">
                  <ThemeMode />
                </motion.div>
                <motion.div variants={staggerItem} className="w-full px-2">
                  <NavButton className="px-2 py-2 text-sm w-full bg-[#46644c] dark:bg-[#46644c]">
                    signUp
                  </NavButton>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
