import React from "react";

import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <a href="#">
            <img src={Logo} alt="logo" className="w-[180px]" />
          </a>
          {/* Button */}
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
