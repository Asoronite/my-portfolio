import React from 'react'
import MovieAppStyle from "./MovieApp.module.css";
const API_IMG="https://image.tmdb.org/t/p/original/"



const MovieCard = ({title, poster_path, release_date, overview}) => {
  return (
    <div className={MovieAppStyle.MovieContainer}>
      <div className={MovieAppStyle.Cards}>
        <img className={MovieAppStyle.posters} src={API_IMG + poster_path} />
        <div className={MovieAppStyle.MovieTitle}>
          <h1 className={MovieAppStyle.names}>{title}</h1>
          <h2 className={MovieAppStyle.dates}>{release_date}</h2>
        </div>
      </div>
    </div>
  );
}

export default MovieCard