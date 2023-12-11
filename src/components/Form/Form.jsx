import * as React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory, HashRouter as Router, Route, Link } from "react-router-dom";

function Form() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [newMovieObject, setNewMovieObject] = useState({})
    // const formShown = useSelector((store) => store.formShown)

    // POST dispatch with newMovieObject to send to store
    const postNewMovie = () => {
        console.log("newMovieObject: ", newMovieObject)
        dispatch({
            type: 'SAGA/ADD_MOVIE',
            payload: newMovieObject });
// then return us to the main page
       history.push("/")
    }
    // function to make object with a given key and corresponding value
    // and then store it in React state "newMovieObject"
    const handleNameChange = (input, event) => {
        event.preventDefault();
        setNewMovieObject({...newMovieObject,
        [input]: event.target.value
    })
    }
return (
    <div id="formDiv">
    <form align="center">
      <input placeholder="Title" onChange={() => handleNameChange("title", event)}></input>
      <input placeholder='Movie poster URL' onChange={() => handleNameChange("poster", event)}></input>
      <input placeholder='Description' onChange={() => handleNameChange("description", event)}></input>
      <select onChange={() => handleNameChange("genre_id", event)}>
        <option value="" disabled>Select genre</option>
        <option value="1">Adventure</option>
        <option value="2">Animated</option>
        <option value="3">Biographical</option>
        <option value="4">Comedy</option>
        <option value="5">Disaster</option>
        <option value="6">Drama</option>
        <option value="7">Epic</option>
        <option value="8">Fantasy</option>
        <option value="9">Musical</option>
        <option value="10">Romantic</option>
        <option value="11">Science Fiction</option>
        <option value="12">Space Opera</option>
        <option value="13">Superhero</option>
      </select>
      <br />
      <Router>
        <Link to="/">
      <Button variant="outlined"
      sx={{
        margin: 1
      }} 
      >Cancel</Button>
      </Link>
      <Button variant="contained"
      onClick={postNewMovie}
      >Save</Button>
</Router>
      </form>
      </div>
)
}

export default Form;