import { imageURL } from "../config.js";
import App from "./AppView.js";

class Search extends App {
  constructor() {
    super(
      document.querySelector(".results"),
      "No recipes found for your query. Please try again!",
      "Congrat you cool cheaf"
    );
    this.searchForm = document.querySelector(".search");
    this.searchInput = document.querySelector(".search__field");
    this.nextPage = document.querySelector(".pagination__btn--next");
    this.prevPage = document.querySelector(".pagination__btn--prev");
    this.separatedData = {};
    this.currentPage = 1;
  }

  setData(data) {
    this.data = data;
  }

  render() {
    this.separatedData = this.data.slice(
      this.currentPage,
      (this.currentPage + 1) * 10
    );
    this.parentEl.innerHTML = "";
    this.parentEl.innerHTML = this.createSearchListMarkup();

    // this.nextPage.textContent = this.currentPage + 1;
    // this.prevPage.textContent = this.currentPage - 1;
  }

  addEventHandlers(controllerFunc) {
    this.searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      controllerFunc(this.searchInput.value);
      this.searchInput.value = "";
    });
  }

  nextSearchPage() {
    this.currentPage++;
  }

  prevSearchPage() {
    this.currentPage--;
  }
  createSearchItemMarkup(item) {
    return `
    <li class="preview">
            <a class="preview__link " href="#${item.id}">
              <figure class="preview__fig">
                <img src="${item.image_url}" alt="${item.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${item.title}</h4>
                <p class="preview__publisher">${item.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${imageURL}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
      `;
  }

  createSearchListMarkup() {
    return this.separatedData.reduce(
      (acc, item) => (acc += this.createSearchItemMarkup(item)),
      ""
    );
  }
}

export default new Search();
