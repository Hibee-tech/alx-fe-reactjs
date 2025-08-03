import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes || []);
  const favoriteIds = useRecipeStore((state) => state.favorites || []);

  // Guard clause: Still undefined or not arrays
  if (!Array.isArray(recipes) || !Array.isArray(favoriteIds)) {
    return <p className="favorites-error">Unable to load favorites.</p>;
  }

  const favoriteRecipes = favoriteIds
    .map((id) => recipes.find((r) => r?.id === id))
    .filter(Boolean); // remove null/undefined

  if (favoriteRecipes.length === 0) {
    return <p className="favorites-empty">No favorites yet.</p>;
  }

  return (
    <div className="favorites-list">
      <h2 className="favorites-title">Favorite Recipes</h2>
      <ul className="favorites-items">
        {favoriteRecipes.map((recipe) => (
          <li key={recipe.id} className="favorite-item">
            <Link to={`/recipe/${recipe.id}`} className="favorite-link">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
