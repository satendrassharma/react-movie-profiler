import React,{useEffect,useContext} from 'react'
import MovieContext from './context/MovieContext';
import Loading from './Loading';
import {Link} from 'react-router-dom';





const Details=(props)=>{
  console.log(props.match.params.id);
  const {getMovie,movie,loading}=useContext(MovieContext)
  const id=props.match.params.id;
  useEffect(()=>{
    getMovie(id);
  },[id]);
  console.log(movie,loading);
  return(
    <>
    <Link to="/" className="back">Back</Link>
    {loading && <Loading text="loading..."/>}
    {movie && !loading && (<section className="grid">
        <div className="item img">
          <img
            src={movie.Poster}
            alt=""
            
          />
        </div>
        <div className="item detail">
          {/* Title,Date,Time,Language,Plot,Rating,Actors,Genre,Director,Writer,Awards,Production */}
          <h1>{movie.Title}</h1>
          <p>
            <strong>Genre :</strong> {movie.Genre}
          </p>
          <p>
            <strong>Date :</strong> {movie.Released}
          </p>
          <p>
            <strong>Length :</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Language :</strong> {movie.Language}
          </p>
          <p>
            <strong>Actors :</strong> {movie.Actors}
          </p>
          <p>
            <strong>Rating :</strong> {movie.imdbRating}/10
          </p>
          <p>
            <strong>Writer :</strong> {movie.Writer}
          </p>
          <p>
            <strong>Production :</strong> {movie.Production}
          </p>
          <p>
            <strong>Director :</strong> {movie.Director}
          </p>
          <p>
            <strong>Box Office :</strong> {movie.BoxOffice}
          </p>
          <p>
            <strong>Awards :</strong> {movie.Awards}
          </p>
          
        </div>
        <h4>
            {movie.Plot}
          </h4>
    </section>)}
    
    </>
  )
}

export default Details;