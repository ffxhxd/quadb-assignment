import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-white bg-slate-800 opacity-90 pt-5 pl-6 pr-6 pb-5 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <BiSolidMoviePlay size={45} />
      </div>
      <div className="flex">
        <ul className="flex space-x-4">
          <li>
            <Link to="/">
              <div className="text-sm py-2 px-4 md:py-2 md:px-4 cursor-pointer rounded-full transition-transform duration-300 transform group-hover:scale-105">
                HOME
              </div>
            </Link>
          </li>
          <li className="relative group cursor-pointer">
            <Link to="/tickets">
              <div className="text-sm py-1 px-4 md:py-2 md:px-4 border border-white rounded-full transition-transform duration-300 transform group-hover:scale-105">
                My Tickets
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
