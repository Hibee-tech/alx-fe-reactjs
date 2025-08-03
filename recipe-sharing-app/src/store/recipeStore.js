import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Replace all recipes
  setRecipes: (recipes) => set({ recipes }),

  // Update an existing recipe by ID
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id), // also remove from favorites
    })),

  // Get a recipe by ID
  getRecipeById: (id) => {
    const recipes = get().recipes;
    return recipes.find((recipe) => recipe.id === id);
  },

  // FAVORITES logic
  addFavorite: (id) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, id])],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  toggleFavorite: (id) => {
    const { favorites } = get();
    const isFavorite = favorites.includes(id);
    set({
      favorites: isFavorite
        ? favorites.filter((favId) => favId !== id)
        : [...favorites, id],
    });
  },
}));
