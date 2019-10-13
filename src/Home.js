import React from "react";
import SearchResult from "./SearchResult";

const Home = ({ OnSearch, handleInput, text, resetText, Error }) => {
  return (
    <>
      <form onSubmit={OnSearch}>
        <input
          placeholder="Enter the movie name here"
          value={text}
          type="search"
          name="search"
          onChange={handleInput}
        />
        <br />
        <input type="submit" value="Search" />
        <input type="reset" onClick={resetText} />
      </form>
      {Error && <div className="error">{Error}</div>}
      <SearchResult />
    </>
  );
};

export default Home;
