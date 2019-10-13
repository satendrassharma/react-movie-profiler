import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import MovieState from "./context/MovieState";
import MovieContext from "./context/MovieContext";
import Details from "./Details";
import Home from "./Home";
import "./styles.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [text, setText] = useState("");

  const movieContext = useContext(MovieContext);
  const handleInput = e => {
    setText(e.target.value);
  };
  const OnSearch = e => {
    e.preventDefault();
    // console.log(text);
    // console.log(movieContext);
    movieContext.clearError();
    movieContext.searchMovie(text);
  };
  const resetText = () => {
    setText("");
  };
  return (
    <div className="App">
      <h1 className="Title">Movie Profiler</h1>
      <Route
        exact
        path="/"
        render={() => (
          <Home
            Error={movieContext.Error}
            OnSearch={OnSearch}
            handleInput={handleInput}
            resetText={resetText}
            text={text}
          />
        )}
      />
      <Route path="/details/:id" component={Details} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <MovieState>
      <App />
    </MovieState>
  </Router>,
  rootElement
);
