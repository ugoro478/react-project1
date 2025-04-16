import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black flex items-center justify-around ">
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
      </nav>
      <div className="flex gap-4 justify-center bg-gray-200 border border-red-400">
        <div className="flex items-center flex-col">
          <img
            className="w-100 rounded-2xl p-2"
            src=" https://images.unsplash.com/photo-1596075780750-81249df16d19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="">
            <span className="text-blue-400 text-center font-bold">Name:</span>{" "}
            Ugo Roland
          </p>
          <p>
            <span className="text-blue-400 text-center font-bold">School:</span>{" "}
            GoMyCode Lekki
          </p>
        </div>
        <div className="flex items-center flex-col">
          <img
            className="w-100 rounded-2xl p-2"
            src="https://images.unsplash.com/photo-1611747581637-a4c0993020ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="">
            <span className="text-blue-400 text-center font-bold">Name:</span>{" "}
            White SoftLife
          </p>
          <p>
            <span className="text-blue-400 text-center font-bold">School:</span>{" "}
            GoMyCode Lekki
          </p>
        </div>
        <div className="flex items-center flex-col">
          <img
            className="w-100 rounded-2xl p-2"
            src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="">
            <span className="text-blue-400 text-center font-bold">Name:</span>{" "}
            AkP viper
          </p>
          <p>
            <span className="text-blue-400 text-center font-bold">School:</span>{" "}
            GoMyCode Lekki
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
