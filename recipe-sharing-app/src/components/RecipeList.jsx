import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Recipe List</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border p-2 mb-2 rounded">
          <h3 className="font-bold">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
