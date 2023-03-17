import React, { useState } from 'react';
import Search from "./Search";

function ResultList(): {} {
  const [ results, setResults ] = useState({});

  return (
    <section className="mb-auto">
      <Search />
    </section>
  );
}

export default ResultList;