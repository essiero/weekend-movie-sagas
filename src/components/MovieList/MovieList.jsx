import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  const showMovieDetails = (movie) => {
    console.log("movie: ", movie)
    console.log("movie.id: ", movie.id)
    
    dispatch({
      type: 'SAGA/SET_CURRENT_MOVIE',
      payload: movie
    })

    history.push(`/details`)
  }

  useEffect(() => {
    dispatch({ type: 'SAGA/FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <section className="movies">
        {movies.map(movie => {
          return ( 
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img className="poster" src={movie.poster} alt={movie.title} onClick={() => showMovieDetails(movie)} data-testid="toDetails"/>
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;
