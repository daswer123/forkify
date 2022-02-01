const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const API_URL_SEARCH =
  "https://forkify-api.herokuapp.com/api/v2/recipes?search=";
const API_KEY = "daed302b-f036-411b-9618-d5e212f17989";
const TIMEOUTSEC = 10;
const ITEM_PER_PAGE = 15;

const imageURL = new URL("../img/icons.svg", import.meta.url); // Путь до icons.svg, нужно для Parcel

export {
  API_KEY,
  API_URL,
  API_URL_SEARCH,
  TIMEOUTSEC,
  imageURL,
  ITEM_PER_PAGE,
};
