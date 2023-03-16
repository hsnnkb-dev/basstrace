import React from 'react';
import { getSearchResults } from '../api/api.ts';

function Search(): {} {

  return (
    <section className="flex justify-center">
      <input className="bg-white p-4 rounded-l-2xl w-1/2 border-white border-2"></input>
      <button className="bg-white p-4 rounded-r-2xl border-white border-2 font-bold font-body text-2xl ease-in-out duration-300 hover:bg-black hover:text-white"
      onClick={() => getSearchResults()}>
        Search
      </button>
    </section>
  );
}

export default Search;