import React, { useContext } from "react";
import MovieContext from "./context/MovieContext";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const SearchResult = () => {
  const { movies, loading } = useContext(MovieContext);
  return (
    <section className="result_wrapper">
      {loading && <Loading text="Searching movie for you..." />}
      {movies &&
        !loading &&
        movies.map((item, i) => (
          <div className="result" key={item.imdbID + i}>
            <img src={item.Poster} alt="" />
            <h3>{item.Title}</h3>
            <p>
              <strong>Year:</strong> {item.Year}
            </p>
            <Link to={`/details/${item.imdbID}`} className="view">
              View More
            </Link>
          </div>
        ))}
    </section>
  );
};

export default SearchResult;
