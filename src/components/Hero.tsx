import React from 'react';

function Hero(): {} {

  return (
    <main className="flex flex-col items-center bg-black my-4">
      <p className="text-3xl m-4 font-body text-white text-center max-w-4xl leading-8 font-light">
        <span className="text-5xl font-normal">
          Welcome to{" "}
          <span className="font-header">
            basstrace
          </span>
          !
        </span>
        <br />
        A convenient application where you can search for your favourite albums, artists,
        & songs.
        You can also check the current charts for your favourite genres and much more!
      </p>
    </main>
  );
}

export default Hero;