import { Link } from 'react-router-dom';
import { useRecipeStore } from './RecipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Recipes</h2>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="border p-2 mb-2 rounded">
          <Link to={`/recipe/${recipe.id}`} className="font-bold text-blue-600 hover:underline">
            {recipe.title}
          </Link>
          <p>{recipe.description.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
