import React from 'react';
import Favorites from '../Favorites/Favorites';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';


function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Router>
        

        <Route path="/favorites" exact>
          <Link to="/">Search GIFs</Link>
          <Favorites />
        </Route>

        <Route path="/" exact>
          <Link to="/favorites">Favorite GIFs</Link>
          <SearchForm />
        </Route>
        
        
      </Router>
    </div>
  );
}

export default App;
