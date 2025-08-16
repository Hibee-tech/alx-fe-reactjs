import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Recipe Sharing Platform
      </h1>

      {/* Grid Layout */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block mt-4 text-indigo-600 font-medium hover:underline"
              >
                View Recipe →
              </Link>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
              {recipe.title}
            </h2>
            <p className="text-gray-600 text-sm">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
