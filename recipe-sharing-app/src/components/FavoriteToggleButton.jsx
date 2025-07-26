import { useRecipeStore } from './RecipeStore';

const FavoriteToggleButton = ({ recipeId }) => {
  const favorites = useRecipeStore((s) => s.favorites);
  const addFavorite = useRecipeStore((s) => s.addFavorite);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() => {
        isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId);
      }}
      className={`mt-2 px-3 py-1 rounded ${
        isFavorite ? 'bg-yellow-500 text-white' : 'bg-gray-200'
      }`}
    >
      {isFavorite ? '★ Remove Favorite' : '☆ Add to Favorites'}
    </button>
  );
};

export default FavoriteToggleButton;
