const imageURL = new URL("../img/icons.svg", import.meta.url);

// console.log(icons);

const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza example

///////////////////////////////////////

const apiObj = {
  url: "https://forkify-api.herokuapp.com/api/v2/recipes",
  key: "bc63676d-6f1e-44f3-8d7f-45fbab8559fb",
};

// 1 GET RECIPY

const renderSpiner = (parantEl) => {
  const markup = `
  <div class="spinner">
  <svg>
    <use href="${imageURL.pathname}#icon-loader"></use>
  </svg>
</div>`;
  parantEl.innerHTML = ``;
  parantEl.insertAdjacentHTML("afterbegin", markup);
};

const showRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    renderSpiner(recipeContainer);

    const res = await fetch(`${apiObj.url}/${id}?${apiObj.key}`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${data.message} ${res.status}`);
    }
    const { recipe } = data.data;
    console.log(recipe);

    // RENDER RECIPY

    const createRecepyIng = ({ ingredients }) =>
      ingredients.reduce(
        (acc, { quantity, unit, description }) =>
          (acc += `<li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${imageURL.pathname}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${quantity ?? "as you want"}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${unit}</span>
          ${description}
        </div>
      </li>`),
        ""
      );

    const recipyHtml = `
      <figure class="recipe__fig">
      <img src="${recipe.image_url}" alt="${
      recipe.title
    }" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
      </figure>

      <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${imageURL.pathname}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          recipe.cooking_time
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${imageURL.pathname}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          recipe.servings
        }</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${imageURL.pathname}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${imageURL.pathname}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${imageURL.pathname}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${imageURL.pathname}#icon-bookmark-fill"></use>
        </svg>
      </button>
      </div>

      <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${createRecepyIng(recipe)}

      </ul>
      </div>

      <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
          recipe.publisher
        }</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${recipe.source_url}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="img/icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
      </div>`;

    recipeContainer.innerHTML = ``;
    recipeContainer.insertAdjacentHTML("beforeend", recipyHtml);
  } catch (err) {
    console.log(err);
  }
};

showRecipe();

window.addEventListener("hashchange", showRecipe);
window.addEventListener("load", showRecipe);
