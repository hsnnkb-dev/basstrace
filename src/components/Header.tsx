import React from 'react';
import logo from "../assets/images/bt.png"

function Header(): {} {

  return (
    <header className="flex justify-center flex-row items-center bg-black">
      <img className="h-96 w-96 z-0 md:h-64 md:w-64" src={logo} alt="Logo" />
      <h1 className="text-9xl md:text-7xl  font-bold m-4 -ml-10 z-10 font-header text-white">
        basstrace
      </h1>
    </header>
  );
}

export default Header;