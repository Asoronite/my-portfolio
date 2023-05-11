import React, { useState, useEffect } from "react";
import  MovieCard from "./MovieCard";

const MovieApp = () => {
   

    const API_KEY = "66f1bbfa102553833be2a0ab2d457342";
    const API_URL = (`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    
    const [movies, setMovies] = useState([])


useEffect(() => {
fetch(API_URL)
.then((res)=>res.json())
.then(data=>{
    console.log(data)
    setMovies(data.results);
})
},[])
 
  return <div>
{movies.map((movieReq)=><MovieCard key={movieReq.id} {...movieReq}/>)}

  </div>;
};

export default MovieApp;
