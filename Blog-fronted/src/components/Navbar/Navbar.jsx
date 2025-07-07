import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-4 w-auto h-14 bg-purple-900 text-white font-semibold">
        <div className="bg-white w-9 h-9 rounded-full" />
        <ul className="list-none flex justify-between items-center">
          <Link to="#" className="mr-5 hover:text-gray-300">
            <li className="list-none">Menu</li>
          </Link>
          <Link to="#" className="mr-5 hover:text-gray-300">
            <li className="list-none">Contact</li>
          </Link>
          <Link to="#" className="mr-5 hover:text-gray-300">
            <li className="list-none">About Us</li>
          </Link>
          <Link to="/createBlog" className="bg-indigo-500 hover:text-indigo-500 hover:bg-white py-1 px-3">
            <li className="list-none">Create blog</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
