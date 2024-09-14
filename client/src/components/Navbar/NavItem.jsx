/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavItem = ({ className = "" }) => {
  const { t, i18n } = useTranslation(); // Using translation hook

  return (
    <div className={`${className} flex space-x-12 max-md:hidden text-black dark:text-white`}>
      <FlyOut to="/" FlyoutContent>
        <p>{t("home")}</p> {/* Translated text */}
      </FlyOut>
      <FlyOut to="/about" FlyoutContent>
        <p>{t("about")}</p> {/* Translated text */}
      </FlyOut>
      <FlyOut to="/contact" FlyoutContent>
        <p>{t("contact")}</p> {/* Translated text */}
      </FlyOut>
      <FlyOut to="/blog" FlyoutContent>
        <p>{t("blog")}</p> {/* Translated text */}
      </FlyOut>
    </div>
  );
};

const FlyOut = ({ children, to, FlyoutContent }) => {
  const [Open, setOpen] = useState(false);
  const ShowContent = Open && FlyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <NavLink to={to} className="relative">
        {children}
        <span
          style={{ transform: ShowContent ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 h-1 -right-2 
            rounded-full bg-[black] transition-all
           duration-200 ease-out dark:bg-white"
        />
      </NavLink>
    </div>
  );
};

const NavBarFlyoutContent = () => {
  return (
    <>
      <div className="h-[60vh] w-[50rem] bg-white p-6 shadow-xl">
        <h1>{t("pricing_content")}</h1> {/* Translated text */}
      </div>
    </>
  );
};
<<<<<<< HEAD

=======
>>>>>>> f85dd91 (add center of hero)
const MobileNav = () => {
  return (
    <>
      <h1>{t("hello_world")}</h1> {/* Translated text */}
    </>
  );
};

export default NavItem;
