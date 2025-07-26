import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => {
    const state = get();
    const updated = [...state.recipes, newRecipe];
    return set({
      recipes: updated,
      filteredRecipes: filter(updated, state.searchTerm),
    });
  },

  updateRecipe: (updatedRecipe) => {
    const state = get();
    const updated = state.recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    return set({
      recipes: updated,
      filteredRecipes: filter(updated, state.searchTerm),
    });
  },

  deleteRecipe: (id) => {
    const state = get();
    const updated = state.recipes.filter((r) => r.id !== id);
    return set({
      recipes: updated,
      filteredRecipes: filter(updated, state.searchTerm),
    });
  },

  searchTerm: '',
  setSearchTerm: (term) => {
    const state = get();
    set({
      searchTerm: term,
      filteredRecipes: filter(state.recipes, term),
    });
  },

  setRecipes: (recipes) => {
    const term = get().searchTerm;
    set({
      recipes,
      filteredRecipes: filter(recipes, term),
    });
  },

  addFavorite: (id) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, id])],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) =>
        !favorites.includes(r.id) &&
        favorites.some((favId) => r.title.includes(favId.toString())) && // simplistic logic
        Math.random() > 0.4
    );
    set({ recommendations: recommended });
  },
}));

function filter(recipes, term) {
  return recipes.filter((r) =>
    r.title.toLowerCase().includes(term.toLowerCase())
  );
}

