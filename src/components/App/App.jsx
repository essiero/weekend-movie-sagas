import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails.jsx/MovieDetails';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Form from '../Form/Form';

function App() {
const history = useHistory();
const [formShown, setFormShown] = useState(false);

const showForm = () => {
  setFormShown(!formShown);
}


  const displayForm = () => {
    console.log("here is am, the button is clicking")
  }
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Button variant="contained" onClick={showForm}
       sx={{
        mb: 2
      }}>Add movie</Button>
      {formShown ? <Form />
    : ''}
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
