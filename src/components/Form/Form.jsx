import * as React from 'react';
import Button from '@mui/material/Button';

function Form() {
return (
    <div id="formDiv">
    <form align="center">
      <input placeholder="Title"></input>
      <input placeholder='Movie poster URL'></input>
      <input placeholder='Description'></input>
      <select>
      <option value="" disabled selected>Select genre</option>
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
      <Button variant="outlined"
      sx={{
        margin: 1
      }}>Cancel</Button>
      <Button variant="contained">Save</Button>

      </form>
      </div>
)
}

export default Form;