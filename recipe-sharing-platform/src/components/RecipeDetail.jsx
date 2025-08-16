import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-10 text-gray-600">
        Recipe not found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        {recipe.title}
      </h1>

      <p className="text-gray-600 mb-6">{recipe.summary}</p>

      {/* Ingredients */}
      {recipe.ingredients && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions */}
      {recipe.instructions && (
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">
            Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      <div className="mt-6">
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
