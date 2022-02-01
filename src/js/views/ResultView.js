import { API_KEY, imageURL } from "../config.js";
import App from "./AppView.js";

class Search extends App {
  constructor() {
    super(
      document.querySelector(".results"),
      "No recipes found for your query. Please try again!",
      "Congrat you cool cheaf"
    );
  }

  setData(data) {
    this.data = data;
  }

  render() {
    this.parentEl.innerHTML = "";
    this.parentEl.innerHTML = this.generateMarkup();
  }

  createSearchItemMarkup(item) {
    const id = window.location.hash.slice(1);

    return `
    <li class="preview">
            <a class="preview__link ${
              item.id === id ? "preview__link--active" : ""
            }" href="#${item.id}">
              <figure class="preview__fig">
                <img src="${item.image_url}" alt="${item.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${item.title}</h4>
                <p class="preview__publisher">${item.publisher}</p>
                ${
                  item.key === API_KEY
                    ? `
                  <div class="recipe__user-generated">
                    <svg>
                      <use href="${imageURL.pathname}#icon-user"></use>
                    </svg>
                  </div>
                  `
                    : ""
                }
              </div>
            </a>
          </li>
      `;
  }

  generateMarkup() {
    return this.data.reduce(
      (acc, item) => (acc += this.createSearchItemMarkup(item)),
      ""
    );
  }
}

export default new Search();
