import React from "react";
import Logo from "../assets/logo.svg";
import { CgSearch } from "react-icons/cg";
import { Button } from "antd";
import { Link } from "react-router-dom";

// Define props for the HeaderNavigation component
interface NavigationMenuProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const HeaderNavigation: React.FC<NavigationMenuProps> = ({
  currentPath,
  onNavigate,
}) => {
  // Define your navigation links with their paths and display names
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/room", name: "Hotels" },
    { path: "/", name: "Experience" },
    { path: "/", name: "About" },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full flex items-center justify-between sm:justify-center gap-3 flex-wrap ">
      <div
        className="order-1 w-36 sm:w-44 aspect-[7/2] cursor-pointer"
        onClick={() => onNavigate("/")} // Navigate to home on logo click
      >
        <Link to="/">
          <img className="object-fill w-full h-full" src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Action Buttons Section (Search & Login) */}
      <div className="order-3 sm:order-4 flex gap-3 items-center">
        <div
          className="relative cursor-pointer"
          onClick={() => onNavigate("/checkout")}
        >
          <CgSearch className="text-xl sm:text-2xl text-blue-400 hover:text-blue-300" />{" "}
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex w-16 sm:w-18 justify-between items-center cursor-pointer font-semibold">
            <Button
              type="primary"
              shape="round"
              onClick={() => onNavigate("/login")}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Links Section */}
      <div className="flex-1 min-w-72 order-5 sm:order-3">
        <ul className="flex justify-center items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.path}
              className={`
                text-white text-lg font-medium cursor-pointer transition-all duration-200 ease-in-out
                hover:text-blue-300 hover:underline hover:underline-offset-2 hover:border-blue-300
                pb-1 px-2 rounded-sm
                ${
                  currentPath === link.path
                    ? "border-blue-500 hover:underline hover:underline-offset-2 text-blue-400"
                    : ""
                }
              `}
              onClick={() => onNavigate(link.path)} // Call onNavigate with the clicked link's path
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderNavigation;
