import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DetailsRecipePage from './pages/DetailsRecipePage';
import ProgressRecipePage from './pages/ProgressRecipePage';
import MealRecipePage from './pages/MealRecipePage';
import CocktailRecipePage from './pages/CocktailRecipePage';
import ExplorePage from './pages/ExplorePage';
import ExploreRecipesPage from './pages/ExploreRecipesPage';
import ProfilePage from './pages/ProfilePage';
import MakeRecipesPage from './pages/MakeRecipesPage';
import FavoritesRecipesPage from './pages/FavoritesRecipesPage';
import SearchBar from './components/Searchbar';
import ExploreIngredients from './pages/ExploreIngredients';
import ExploreRecipesAreaPage from './pages/ExploreRecipesAreaPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ LoginPage } />
      <Route exact path="/comidas" component={ MealRecipePage } />
      <Route exact path="/bebidas" component={ CocktailRecipePage } />
      <Route exact path="/receitas-feitas" component={ MakeRecipesPage } />
      <Route exact path="/receitas-favoritas" component={ FavoritesRecipesPage } />
      <Route exact path="/comidas/:recipeId" component={ DetailsRecipePage } />
      <Route
        exact
        path="/bebidas/:recipeId"
        component={ DetailsRecipePage }
      />
      <Route
        exact
        path="/bebidas/:recipeId/in-progress"
        component={ ProgressRecipePage }
      />
      <Route
        exact
        path="/comidas/:recipeId/in-progress"
        component={ ProgressRecipePage }
      />
      <Route exact path="/explorar" component={ ExplorePage } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ExploreIngredients }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ ExploreIngredients }
      />
      <Route exact path="/explorar/:recipe" component={ ExploreRecipesPage } />
      <Route exact path="/explorar/bebidas/area" component={ NotFound } />
      <Route exact path="/explorar/:recipe/:area" component={ ExploreRecipesAreaPage } />
      <Route exact path="/perfil" component={ ProfilePage } />
      <Route exact path="/receitas-feitas" component={ MakeRecipesPage } />
      <Route exact path="/receitas-favoritas" component={ FavoritesRecipesPage } />
      <Route exact path="/sb" component={ SearchBar } />
    </Switch>
  );
}

export default App;
