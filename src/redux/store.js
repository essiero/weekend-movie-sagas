import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("SAGA/FETCH_MOVIES", fetchAllMovies);
  yield takeLatest("SAGA/SET_CURRENT_MOVIE", getCurrentMovieGenres);
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get("/api/movies");
    // Set the value of the movies reducer:
    yield put({
      type: "SET_MOVIES",
      payload: moviesResponse.data,
    });
  } catch (error) {
    console.log("fetchAllMovies error:", error);
  }
}

function* getCurrentMovieGenres(action) {
  try {
    const movieResponse = yield axios.get(`/api/genres/${action.payload.id}`);
    yield put({
      type: "SET_CURRENT_MOVIE_GENRES",
      payload: movieResponse.data,
    });
  } catch (error) {
    console.log("Error getting movie genres: ", error);
  }
}

// Set current movie:
const currentMovie = (state = {}, action) => {
  switch (action.type) {
    case "SAGA/SET_CURRENT_MOVIE":
      return action.payload;
    case "RESET_CURRENT_MOVIE":
      return {};
  }
  return state;
};

// Set current movie genres:
const currentMovieGenres = (state = [], action) => {
  if (action.type === "SET_CURRENT_MOVIE_GENRES") {
    return action.payload;
  } else return state;
};

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    currentMovie,
    currentMovieGenres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
