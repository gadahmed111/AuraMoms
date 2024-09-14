import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const NavItem = ({ className = "" }) => {
  return (
    <div
      className={`${className}flex space-x-12 max-md:hidden text-black dark:text-white`}
    >
      <FlyOut to="/" FlyoutContent>
        <p>Home</p>
      </FlyOut>
      <FlyOut to="/about" FlyoutContent>
        <p>About</p>
      </FlyOut>
      <FlyOut to="/contact" FlyoutContent>
        <p>Contact</p>
      </FlyOut>
      <FlyOut to="/blog" FlyoutContent>
        <p>Contact</p>
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
      {/* {ShowContent && (
        <div className="absolute left-1/2 top-[60px] -translate-x-1/2 bg-white text-black">
          <div className="absolute -top-10 bg-rose-600 left-0 right-0 h-6 bg-transparent" />
          <FlyoutContent />
        </div>
      )} */}
    </div>
  );
};
// #09090b
// #262626
const NavBarFlyoutContent = () => {
  return (
    <>
      <div className="h-[60vh] w-[50rem] bg-white p-6 shadow-xl">
        <h1>pricing Content</h1>
      </div>
    </>
  );
};
const MobileNav = ({}) => {
  return (
    <>
      <h1>hello world</h1>
    </>
  );
};
export default NavItem;
