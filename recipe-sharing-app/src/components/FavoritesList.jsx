import { useRecipeStore } from './RecipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id)).filter(Boolean)
  );

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id} className="border p-2 mb-2 rounded">
            <Link to={`/recipe/${recipe.id}`} className="font-bold text-blue-600 hover:underline">
              {recipe.title}
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
