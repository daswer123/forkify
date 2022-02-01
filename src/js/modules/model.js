import * as config from "../config.js";
import { getJSON, sendJSON } from "../helper.js";

const state = {
  recipe: {},
  search: [],
  bookmarks: [],
  page: 0,
};

console.log(state);

// Загрузка рецепта из АПИ
const loadRecipe = async (id) => {
  try {
    // Ловим ошибки с помощью try catch
    const url = `${config.API_URL}/${id}?${config.API_KEY}`; // Динамически составляем URL и делаем запрос на сервер

    const { recipe } = (await getJSON(url)).data;

    state.recipe = recipe;

    // if (!state.bookmarks) return;

    if (state.bookmarks.some((el) => el.id === recipe.id)) {
      // Проверяем есть ли в закладках этот рецепт, если есть ставим ему свойство bookmarked
      state.recipe.bookmarked = true;
    } else state.recipe.bookmarked = false;
  } catch (err) {
    throw new Error(err);
  }
};

const loadSearchRecipes = async (query) => {
  // Загружаем список рецептов по ключевому запросу
  try {
    const url = `${config.API_URL_SEARCH}${query}&key=${config.API_KEY}`;
    const { recipes } = (await getJSON(url)).data;

    state.search = recipes;
  } catch (err) {
    throw new Error(err);
  }
};

const CreateSeparatedArr = () =>
  // Создаем разделенный массив согласно текущей странице и количеству итемов на странице
  state.search.slice(
    state.page * config.ITEM_PER_PAGE,
    (state.page + 1) * config.ITEM_PER_PAGE
  );

const updateServing = (num) => {
  // Обновляем количество людей на котоых может готовится блюдо
  state.recipe.ingredients.forEach((ing) => {
    if (!ing.quantity) return; // Если количества ингридиента нет, то возвращем пустой результат
    ing.quantity =
      Math.round((ing.quantity / state.recipe.servings) * num * 100) / 100; // Расчитываем по формуле и округляем до 2 знаков после ,
  });

  state.recipe.servings = num;
};

const removeNewBookmark = (recipe) => {
  // Убираем закладку из общего списка
  const index = state.bookmarks.findIndex((el) => el.id === recipe.id);
  state.bookmarks = [
    // Создаем новый масив в котором исключаем удаляеммый элемент
    ...state.bookmarks.slice(0, index),
    ...state.bookmarks.slice(index + 1),
  ];
  state.recipe.bookmarked = false; // Значение bookmarked текущего рецепта становится false
};

const addNewBookmark = (recipe) => {
  // Добавить новую закладку в общий список
  state.bookmarks.push(recipe);
  state.recipe.bookmarked = true;
};

const toggleBookmarks = (recipe) => {
  // Проверяем, если свойство bookmarked === true , тогда убираем, если нет, то добавляем
  recipe.bookmarked ? removeNewBookmark(recipe) : addNewBookmark(recipe);
};

const clearBookmarks = () => {
  // Служебная функция, удаляет все закладки и очищает localStorage
  state.bookmarks = [];
  window.localStorage.removeItem("bookmarks");
};

const uploadRecipe = async (recipeData) => {
  // Загрузка рецепта в API, получаем Formatdata в виде обьекта
  try {
    const { cookingTime, image, publisher, servings, sourceUrl, title } =
      recipeData; // С помощью деструктуризации вытаскиваем почти все значения

    const ingredients = Object.entries(recipeData) // Создаем свой список рецептов из ing-$ в обьект с списком всех ингридиентов
      .filter(([title, value]) => title.includes("ingredient") && value !== "") // избавляемся от всего в чем нет ingridient
      .map(([, value]) => {
        // После получаем значение в виде строки, разделяем , и чистим пробелы
        const ingArr = value.split(",").map((el) => el.trim());

        if (ingArr.length !== 3)
          // Если строка не соответсвует формату данных, возвращаем ошибку
          throw new Error(
            "Wrong Ingridient format! Please use the correct Format :)"
          );
        const [quantity, unit, description] = ingArr; // Деструктуризируем полученные данные

        return {
          quantity:
            Number.isFinite(+quantity) && quantity !== "" ? +quantity : null, // Если quantity нет, то возвращаем null
          unit,
          description,
        };
      });

    const newRecipe = {
      // Формируем новый рецепт правильном формате
      title,
      source_url: sourceUrl,
      image_url: image,
      cooking_time: cookingTime,
      publisher,
      servings,
      ingredients,
    };

    // Отправляем рецепт на АПИ, добавляем в закладки и стейт
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
