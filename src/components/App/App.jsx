import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails.jsx/MovieDetails';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

function App() {
const history = useHistory();

  const addNewMovie = () => {
    console.log("here is am, the button is clicking")
  }
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Button variant="contained" onClick={addNewMovie}>Add movie</Button>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route exact path="/details">
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}


export default App;
