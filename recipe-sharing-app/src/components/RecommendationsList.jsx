import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const recommendations = recipes.slice(0, 3); // Example logic: top 3

  return (
    <div className="recommendations">
      <h2 className="section-title">Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p className="empty-text">No recommendations available.</p>
      ) : (
        <ul className="recommendation-list">
          {recommendations.map((recipe) => (
            <li key={recipe.id} className="recommendation-item">
              <Link to={`/recipe/${recipe.id}`} className="recommendation-link">
                <strong>{recipe.title}</strong>
              </Link>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendationsList;
