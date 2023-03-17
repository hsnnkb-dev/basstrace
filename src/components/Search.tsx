import React, { useState } from "react";
import { getSearchResults } from "../api/api";

function Search(): JSX.Element {
  const [ userInput, setUserInput ] = useState("pinkpantheress");
  const handleUserInput = (input: string): void => setUserInput(input);

  return (
    <section className="flex justify-center">
      <input
        className="bg-white p-4 rounded-l-2xl w-1/2  border-white border-2 text-2xl font-body"
        type="text"
        placeholder="Search for your favourite Album, Artist or Song..."
        onChange={(event: { target: { value: string } }) =>
          handleUserInput(event?.target.value)
        }
      ></input>
      <button
        className="bg-white p-4 rounded-r-2xl border-white border-2 font-bold font-body text-2xl ease-in-out duration-300 hover:bg-black hover:text-white"
        onClick={() => getSearchResults(userInput)}
      >
        Search
      </button>
    </section>
  );
}

export default Search;
