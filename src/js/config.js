const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";
const API_URL_SEARCH =
  "https://forkify-api.herokuapp.com/api/v2/recipes?search=";
const API_KEY = "bc63676d-6f1e-44f3-8d7f-45fbab8559fb";
const TIMEOUTSEC = 10;

const imageURL = new URL("../img/icons.svg", import.meta.url);

export { API_KEY, API_URL, API_URL_SEARCH, TIMEOUTSEC, imageURL };
