import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: filter(updatedRecipes, state.searchTerm),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: filter(updatedRecipes, state.searchTerm),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: filter(updatedRecipes, state.searchTerm),
      };
    }),

  setSearchTerm: (term) => {
    const state = get();
    set({
      searchTerm: term,
      filteredRecipes: filter(state.recipes, term),
    });
  },

  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: filter(recipes, state.searchTerm),
    })),
}));

const filter = (recipes, term) =>
  recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );

