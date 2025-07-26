import { useRecipeStore } from './RecipeStore';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore((s) => s.generateRecommendations);
  const recommendations = useRecipeStore((s) => s.recommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map((recipe) => (
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

export default RecommendationsList;
