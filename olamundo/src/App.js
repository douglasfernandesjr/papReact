import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TitlesPage from "./pages/TitlesPage";
import PolaroidPage from "./pages/PolaroidPage";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/titles">Titles</NavLink>
            </li>
            <li>
              <NavLink to="/polaroid">Polaroid</NavLink>
            </li>
            <li>
              <NavLink to="/pokemon">Pokémon</NavLink>
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <Switch>
            <Router path="/pokemon">
              <PokemonPage/>
            </Router>
            <Route path="/polaroid">
              <PolaroidPage />
            </Route>
            <Route path="/titles">
              <TitlesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
