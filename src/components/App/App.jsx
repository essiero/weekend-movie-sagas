import { HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails.jsx/MovieDetails';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Form from '../Form/Form';

function App() {
const [formShown, setFormShown] = useState(false)

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router> 
      <Route exact path="/addnew">
      <Form />
         </Route>

        <Route path="/" exact>
        {/* turns button into a link to the "/addnew" page */}
          <Link to="/addnew">
        <Button variant="contained"
       sx={{
        // margin-bottom:
        mb: 2
      }}
      >Add movie</Button>
      </Link>
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
