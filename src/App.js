import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MealRecipePage from './pages/MealRecipePage';
import CocktailRecipePage from './pages/CocktailRecipePage';
import ExplorePage from './pages/ExplorePage';
import DetailsMealRecipePage from './pages/DetailsMealRecipePage';
import ProfilePage from './pages/ProfilePage';
import MakeRecipesPage from './pages/MakeRecipesPage';
import FavoritesRecipesPage from './pages/FavoritesRecipesPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ LoginPage } />
      <Route exact path="/comidas" component={ MealRecipePage } />
      <Route exact path="/bebibas" component={ CocktailRecipePage } />
      <Route exact path="/comidas/:id-da-receita" component={ DetailsMealRecipePage } />
      <Route exact path="/explorar" component={ ExplorePage } />
      <Route exact path="/perfil" component={ ProfilePage } />
      <Route exact path="/receitas-feitas" component={ MakeRecipesPage } />
      <Route exact path="/receitas-favoritas" component={ FavoritesRecipesPage } />
    </Switch>
  );
}

export default App;
