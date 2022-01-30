import { state, loadRecipe, loadSearchRecipes } from "./modules/model.js";
import recipeView from "./views/RecipeView.js";
import searchView from "./views/SearchView.js";

// https://forkify-api.herokuapp.com/v2
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza example

///////////////////////////////////////
// 1 GET RECIPY

const controllRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpiner();

    await loadRecipe(id);

    recipeView.render(state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};

const controllSearch = async (query) => {
  try {
    searchView.renderSpiner();

    await loadSearchRecipes(query);

    if (!state.search.length) {
      throw new Error("No match result");
    }
    searchView.setData(state.search);
    searchView.render();
  } catch (err) {
    console.log(err);
    searchView.renderError();
  }
};

const init = () => {
  recipeView.addEventHandler(controllRecipe);
  searchView.addEventHandlers(controllSearch);
};

init();
