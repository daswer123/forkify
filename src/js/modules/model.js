import * as config from "../config.js";
import { getJSON } from "../helper.js";

const state = {
  recipe: {},
  search: {},
  bookmarks: [],
};

const loadRecipe = async (id) => {
  try {
    const url = `${config.API_URL}/${id}?${config.API_KEY}`;

    const { recipe } = (await getJSON(url)).data;
    state.recipe = recipe;
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

export { state, loadRecipe, loadSearchRecipes };
