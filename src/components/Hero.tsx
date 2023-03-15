import React from 'react';

function Hero(): {} {

  return (
    <main className="flex justify-center flex-col items-center bg-black">
      <p className="text-2xl m-4 font-body text-white text-center">
        <span className="text-4xl ">
          Welcome to{" "}
          <span className="font-header hover:text-5xl hover:cursor-pointer py-22 ease-in-out duration-300 ">
            basstrace
          </span>
          !
        </span>
        An application where you can search for your favourite albums, artists,
        & songs.
        <br />
        You can also check the current Top 40 and much more!
      </p>
      <p className="text-l m-4 font-body text-white">
        Powered using the Deezer developer API
      </p>
    </main>
  );
}

export default Hero;