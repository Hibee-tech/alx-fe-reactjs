import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, deleteRecipe, toggleFavorite, favorites } = useRecipeStore();

  const recipe = recipes.find((r) => r.id === Number(id));
  const isFavorite = favorites.includes(Number(id));

  if (!recipe) {
    return <div className="recipe-detail-container">Recipe not found.</div>;
  }

  return (
    <div className="recipe-detail-container">
      <h2 className="recipe-detail-title">{recipe.title}</h2>
      <p className="recipe-detail-description">{recipe.description}</p>
      <div className="recipe-detail-buttons">
        <button className="delete-btn" onClick={() => {
          deleteRecipe(recipe.id);
          navigate('/');
        }}>
          Delete
        </button>
        <button className="favorite-btn" onClick={() => toggleFavorite(recipe.id)}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
