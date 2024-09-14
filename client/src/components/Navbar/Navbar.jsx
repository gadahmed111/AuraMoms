/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./NavItem.jsx";
import { CiShoppingCart } from "react-icons/ci";
import NavButton from "../ReUseable/NavButton.jsx";
import ThemeMode from "../ReUseable/DarkModeButton";
import MobileItems from "./MobileNavItem.jsx";
import { useTranslation } from "react-i18next";

const Navbar = () => {
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
  const { t, i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="NavBarMainBody">
      <motion.nav
        className="flex justify-between items-center px-4 h-24 bg-[#dde2cc] text-[#799263] font-Cabin dark:bg-DarkColor"
      >
        <h1 className="text-3xl text-black dark:text-white">Aura Moms</h1>
        <NavItem />
        <div className="flex justify-center items-center space-x-6 max-md:hidden">
          <select
            onChange={changeLanguage}
            defaultValue={i18n.language}
            className="border p-1 rounded-xl hover:border-gray-700 transition-all dark:bg-black dark:text-white"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
          <CiShoppingCart className="cursor-pointer text-2xl hover:text-gray-500 transition-all" />
          <ThemeMode />
          <NavButton>{t("signUp")}</NavButton>
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="flex flex-col absolute md:hidden top-24 bottom-0 left-0 w-[50vw] bg-[#fff] shadow-xl dark:bg-black text-black dark:text-white z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
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
                  onChange={changeLanguage}
                  defaultValue={i18n.language}
                  className="border p-1 ml-2 rounded-xl hover:border-gray-700 transition-all dark:bg-black dark:text-white"
                >
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                </motion.select>
                <motion.div variants={staggerItem} className="pl-2">
                  <ThemeMode />
                </motion.div>
                <motion.div variants={staggerItem} className="w-full px-2">
                  <NavButton className="px-2 py-2 text-sm w-full">
                    {t("signUp")}
                  </NavButton>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
