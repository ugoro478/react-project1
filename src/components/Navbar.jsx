import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black flex items-center justify-around ">
      <h1 className="text-2xl text-green-400 font-bold py-6">ReactApp</h1>
      <ul className="flex font-semibold">
        <li className="text-white py-2 px-4  hover:bg-green-400 hover:text">
          Home
        </li>
        <li className="text-white py-2 px-4  hover:bg-green-400 hover:text">
          About
        </li>
        <li className="text-white py-2 px-4  hover:bg-green-400 hover:text">
          Prices
        </li>
        <li className="text-white py-2 px-4  hover:bg-green-400 hover:text">
          FAQs
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
