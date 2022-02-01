import {
  state,
  loadRecipe,
  loadSearchRecipes,
  CreateSeparatedArr,
  updateServing,
  toggleBookmarks,
  uploadRecipe,
  // clearBookmarks,
} from "./modules/model.js";
import RecipeView from "./views/RecipeView.js";
import SearchView from "./views/SearchView.js";
import ResultView from "./views/ResultView.js";
import PaginationView from "./views/PaginationView.js";
import BookmarkView from "./views/BookmarkView.js";
import AddView from "./views/AddView.js";

// https://forkify-api.herokuapp.com/v2
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza example

///////////////////////////////////////
// 1 GET RECIPY

const controllRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    RecipeView.renderSpiner();

    ResultView.update(CreateSeparatedArr());

    await loadRecipe(id);

    console.log(state.recipe);

    RecipeView.render(state.recipe);
  } catch (err) {
    console.log(err);
    RecipeView.renderError();
  }
};

const controllPagination = () => {
  ResultView.setData(CreateSeparatedArr());
  ResultView.render();
};

const controllSearch = async (query) => {
  try {
    ResultView.renderSpiner();

    await loadSearchRecipes(query);

    if (!state.search.length) {
      throw new Error("No match result");
    }
    ResultView.setData(state.search);
    ResultView.render();

    state.page = 0;

    PaginationView.render(state);
    console.log(state.search);

    controllPagination();
  } catch (err) {
    console.log(err);
    ResultView.renderError();
  }
};

const controllSevings = (newServing) => {
  updateServing(newServing);
  RecipeView.update(state.recipe);
  // RecipeView.render(state.recipe);
};

const controllBookmarks = () => {
  toggleBookmarks(state.recipe);
  RecipeView.update(state.recipe);
  BookmarkView.render(state.bookmarks);

  BookmarkView.uploadBookmarsFromLocalStorage();
  console.log("New bookmark Added ", state.bookmarks);
};

const controllAddNewRecipe = async (formData) => {
  try {
    AddView.renderSpiner();
    await uploadRecipe(formData);
    RecipeView.render(state.recipe);

    BookmarkView.uploadBookmarsFromLocalStorage(state.bookmarks);
    BookmarkView.render(state.bookmarks);

    AddView.renderSuccesses("Your recept successes was upload, GOOD ✨✨✨");

    window.location.hash = state.recipe.id;

    setTimeout(() => location.reload(), 1000);
  } catch (err) {
    AddView.renderError("Opps, something get wrong try again");
  }
};

const init = () => {
  RecipeView.addEventHandler(controllRecipe);
  RecipeView.addEventHandlerSevings(controllSevings);
  RecipeView.addBookmarkHandler(controllBookmarks);
  SearchView.addEventHandlers(controllSearch);
  PaginationView.addEventHandlers(controllPagination, state);
  AddView.addHanlderUpload(controllAddNewRecipe);

  state.bookmarks = BookmarkView.loadBookmarsFromLocalStorage();

  // AddView.toggleForm();
  // clearBookmarks()
  // controllSevings();
};

init();
