import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieDetails() {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentMovie = useSelector(store => store.currentMovie);
    console.log("Current movie: ", currentMovie);

    const returnToMainPage = () => {
        dispatch({
            type: "RESET_CURRENT_MOVIE"
        })
        history.push('/')
    }

    return (
        <div key={currentMovie.id}>
            <button onClick={returnToMainPage}>X</button>
            <h3>{currentMovie.title}</h3>
            <img src={currentMovie.poster} />
            <p>{currentMovie.description}</p>
        </div>
    )
}

export default MovieDetails;