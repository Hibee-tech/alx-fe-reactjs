import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  const searchTerm = useRecipeStore((state) => state.searchTerm);

  // Filter recipes locally
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  if (!recipes || recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Recipes</h2>
      {filteredRecipes.length === 0 && (
        <p className="text-gray-500">No recipes found.</p>
      )}
      {filteredRecipes.map((recipe) => (

      {recipes.map((recipe) => (

        <div key={recipe.id} className="border p-2 mb-2 rounded">
          <Link to={`/recipe/${recipe.id}`} className="font-bold text-blue-600 hover:underline">
            {recipe.title}
          </Link>
          <p>{recipe.description?.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
