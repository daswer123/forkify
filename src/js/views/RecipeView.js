import { Fraction } from "fractional";
import { imageURL } from "../config";
import App from "./AppView";

class RecipeView extends App {
  constructor() {
    super(
      document.querySelector(".recipe"),
      "No recipes found for your query. Please try again!",
      "Congrat you cool cheaf"
    );
  }

  _generateIngMarkup() {
    return this.data.ingredients.reduce(
      (acc, { quantity, unit, description }) =>
        (acc += `<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${imageURL.pathname}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${
        quantity ? new Fraction(+quantity, 2).toString() : ""
      }</div>
      <div class="recipe__description">
        <span class="recipe__unit">${unit}</span>
        ${description}
      </div>
    </li>`),
      ""
    );
  }
  _generateMarkup() {
    return `
    <figure class="recipe__fig">
    <img src="${this.data.image_url}" alt="${
      this.data.title
    }" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this.data.title}</span>
    </h1>
    </figure>

    <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${imageURL.pathname}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${
        this.data.cooking_time
      }</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${imageURL.pathname}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${
        this.data.servings
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
    ${this._generateIngMarkup()}

    </ul>
    </div>

    <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${
        this.data.publisher
      }</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this.data.source_url}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="img/icons.svg#icon-arrow-right"></use>
      </svg>
    </a>
    </div>`;
  }

  render(data) {
    this.data = data;
    this.parentEl.innerHTML = ``;
    this.parentEl.insertAdjacentHTML("beforeend", this._generateMarkup());
  }

  addEventHandler(controlFunc) {
    window.addEventListener("hashchange", controlFunc);
    window.addEventListener("load", controlFunc);
  }

  renderSuccsses(success = this.succsessMsg) {
    this.parentEl.innerHTML = ``;
    this.parentEl.innerHTML = `
    <div class="error">
      <div>
        <svg>
          <use href="${imageURL}}#icon-smile"></use>
        </svg>
      </div>
      <p>${success}</p>
    </div>
          `;
  }
}

export default new RecipeView();
