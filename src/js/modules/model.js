import * as config from "../config.js";
import { getJSON, sendJSON } from "../helper.js";

const state = {
  recipe: {},
  search: [],
  bookmarks: [],
  page: 0,
};

const loadRecipe = async (id) => {
  try {
    const url = `${config.API_URL}/${id}?${config.API_KEY}`;

    const { recipe } = (await getJSON(url)).data;

    state.recipe = recipe;

    if (state.bookmarks.some((el) => el.id === recipe.id)) {
      state.recipe.bookmarked = true;
    } else state.recipe.bookmarked = false;
  } catch (err) {
    throw new Error(err);
  }
};

const loadSearchRecipes = async (query) => {
  try {
    const url = `${config.API_URL_SEARCH}${query}&key=${config.API_KEY}`;
    const { recipes } = (await getJSON(url)).data;

    state.search = recipes;
  } catch (err) {
    throw new Error(err);
  }
};

const CreateSeparatedArr = () =>
  state.search.slice(
    state.page * config.ITEM_PER_PAGE,
    (state.page + 1) * config.ITEM_PER_PAGE
  );

const updateServing = (num) => {
  state.recipe.ingredients.forEach((ing) => {
    if (!ing.quantity) return;
    ing.quantity = Math.round((ing.quantity / state.recipe.servings) * num);
  });

  state.recipe.servings = num;

  console.log("changed", state.recipe);
};

const removeNewBookmark = (recipe) => {
  const index = state.bookmarks.findIndex((el) => el.id === recipe.id);
  state.bookmarks = [
    ...state.bookmarks.slice(0, index),
    ...state.bookmarks.slice(index + 1),
  ];
  state.recipe.bookmarked = false;
};

const addNewBookmark = (recipe) => {
  state.bookmarks.push(recipe);
  state.recipe.bookmarked = true;
};

const toggleBookmarks = (recipe) => {
  recipe.bookmarked ? removeNewBookmark(recipe) : addNewBookmark(recipe);
};

const clearBookmarks = () => {
  state.bookmarks = [];
  window.localStorage.removeItem("bookmarks");
};

const uploadRecipe = async (recipeData) => {
  try {
    console.log(recipeData);
    const { cookingTime, image, publisher, servings, sourceUrl, title } =
      recipeData;
    const ingredients = Object.entries(recipeData)
      .filter(([title, value]) => title.includes("ingredient") && value !== "")
      .map(([, value]) => {
        const ingArr = value.split(",").map((el) => el.trim());

        if (ingArr.length !== 3)
          throw new Error(
            "Wrong Ingridient format! Please use the correct Format :)"
          );
        const [quantity, unit, description] = ingArr;

        return {
          quantity:
            Number.isFinite(+quantity) && quantity !== "" ? +quantity : null,
          unit,
          description,
        };
      });

    const newRecipe = {
      title,
      source_url: sourceUrl,
      image_url: image,
      cooking_time: cookingTime,
      publisher,
      servings,
      ingredients,
    };

    console.log(newRecipe);
    const { recipe } = (await sendJSON(config.API_URL, newRecipe)).data;
    addNewBookmark(recipe);
    recipe.bookmarked = true;
    state.recipe = recipe;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export {
  state,
  loadRecipe,
  loadSearchRecipes,
  CreateSeparatedArr,
  updateServing,
  toggleBookmarks,
  clearBookmarks,
  uploadRecipe,
};
