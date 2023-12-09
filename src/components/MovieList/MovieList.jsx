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
    dispatch({
      type: 'SET_CURRENT_MOVIE',
      payload: movie
    })

    history.push(`/details`)
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          let movieBeingMapped = movie;
          return ( 
            <div data-testid='movieItem' key={movie.id} onClick={() => showMovieDetails(movie)}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title}/>
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;
