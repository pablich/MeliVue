const categoryGetters = {
  // All categories
  allCategories: (state, getters) => state.categories,
  // Get Category by ID
  categoryById: (state, getters) => (id) => {
    if (getters.allCategories.length > 0) {
      return getters.allCategories.filter(p => p._id === id)[0];
    }
    return state.category;
  },
};

export default categoryGetters;

