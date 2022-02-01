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

// Контролер Рецепта, получаем id из окна, пока ждем показываем спинер и обновляем отображение всех рецептов, для активного класса
const controllRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    RecipeView.renderSpiner();
    ResultView.update(CreateSeparatedArr());

    await loadRecipe(id);
    // Как только все загрузилось рендерим
    console.log(state.recipe);
    RecipeView.render(state.recipe);
  } catch (err) {
    console.log(err);
    RecipeView.renderError();
  }
};

const controllPagination = () => {
  // Контроллер Пагиннации, создаем разделенный массив, передаем в ResultView и рендерим
  ResultView.setData(CreateSeparatedArr());
  ResultView.render();
};

const controllSearch = async (query) => {
  // Контроллер поиска, пока результат грузится показываем спинер, после передаем в ResultView и рендерим
  try {
    ResultView.renderSpiner();
    await loadSearchRecipes(query);

    if (!state.search.length) {
      throw new Error("No match result");
    }

    ResultView.setData(state.search);
    ResultView.render();

    state.page = 0; // Ставим значение текущей страницы в 0

    PaginationView.render(state); // Рендерим пагинацию
    controllPagination();
  } catch (err) {
    console.log(err);
    ResultView.renderError();
  }
};

const controllSevings = (newServing) => {
  // Контролер Персон, обнавляем через модель и делаем обновление через VirtualDOM
  updateServing(newServing);
  RecipeView.update(state.recipe);
};

const controllBookmarks = () => {
  // Контролер Закладок, переключаем статус закладки рецепта, обновляем рецепт и делаем рендер всех закладок
  toggleBookmarks(state.recipe);
  RecipeView.update(state.recipe);
  BookmarkView.render(state.bookmarks);

  // Делаем запись в LocalStorage
  BookmarkView.uploadBookmarsFromLocalStorage();
  // console.log("New bookmark Added ", state.bookmarks);
};

// Контролер добавление нового рецепта, рендерим спинер, как только все загрузилось, перекидываем пользователя на его новый рецепт,
// добавляем в закладки и обновляем страницу для перезагрузки формы
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
    setTimeout(() => location.reload(), 1000);
  }
};

const init = () => {
  // Первоначальная инициализация проекта, добавление всех обработчиков и передача функций из контролера в View
  RecipeView.addEventHandler(controllRecipe);
  RecipeView.addEventHandlerSevings(controllSevings);
  RecipeView.addBookmarkHandler(controllBookmarks);
  SearchView.addEventHandlers(controllSearch);
  PaginationView.addEventHandlers(controllPagination, state);
  AddView.addHanlderUpload(controllAddNewRecipe);

  BookmarkView.loadBookmarsFromLocalStorage();
};

init();
