import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieDetails() {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentMovie = useSelector(store => store.currentMovie);
    const currentMovieGenres = useSelector(store => store.currentMovieGenres);
    console.log("Current movie: ", currentMovie);
    console.log("currentMovieGenres: ", currentMovieGenres)
    console.log("movie.id", currentMovie.id)

    const returnToMainPage = () => {
        dispatch({
            type: "RESET_CURRENT_MOVIE"
        })
        history.push('/')
    }

    // const getGenres = () => {
    //     dispatch({
    //         type: "GET_GENRES",
    //         payload: currentMovie.id
    //     })
    // }
 
    return (
        <div key={currentMovie.id} data-testid="movieDetails">
            <button onClick={returnToMainPage} data-testid="toList">X</button>
            <h3>{currentMovie.title}</h3>
            <h4>{currentMovieGenres.map(genre => {
                return (
                    <p>{genre.name}</p>
                )
            })}</h4>
            <img src={currentMovie.poster} />
            <p>{currentMovie.description}</p>
            
        </div>
    )
}

export default MovieDetails;