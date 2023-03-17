import React from 'react';
import logo from '../assets/images/bt.png'

function Footer(): {} {

  return (
    <footer className="flex flex-row justify-center items-center">
      <p className="text-l m-4 font-body font-light text-white text-center -mr-1 z-10">
        Powered using the Deezer API. Hasan Nakib 2023.
      </p>
      <img className="h-24 w-24 z-0" src={logo} alt="Logo" />
    </footer>
  );
}

export default Footer;