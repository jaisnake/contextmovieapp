import React from 'react';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovies from './AddMovies';
import { MovieProvieder } from './MovieContext';

import './App.css';

function App() {
  return (
    <MovieProvieder>
      <div className="App">
       
        <Nav/>
        <AddMovies/>
        <MovieList/>
      </div>
    </MovieProvieder>
    
  );
}

export default App;
