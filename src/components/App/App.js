import React from 'react';
import Categories from './Categories/Categories';


import Favorites from '../Favorites/Favorites.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';


function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Router>
      
        <Route path="/favorites"
          <Favorites />
          <Categories />
        </Route>
        <Route path="/">
          <SearchForm />
        </Route>
        
        
      </Router>
    </div>
  );
}

export default App;
