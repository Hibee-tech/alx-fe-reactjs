import './App.css';
import { Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">🍽️ My Recipe App</h1>
      </header>
      <main className="app-main">
        <Routes>
          <Route
            path="/"
            element={
              <div className="app-grid">
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </div>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
      <footer className="app-footer">
        Built with 💙 by a Class Dev
      </footer>
    </div>
  );
}

export default App;
