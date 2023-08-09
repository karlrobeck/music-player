import React from "react";

const Search = () => {
  return (
    <input
      type="text"
      class="w-1/2 bg-gray-300 bg-opacity-20 placeholder-opacity-100 px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Search songs, albums, artists, podcasts"
    />
  );
};

export default Search;
