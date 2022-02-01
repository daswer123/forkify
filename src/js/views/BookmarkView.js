import { API_KEY, imageURL } from "../config";

class BookmarkView {
  constructor() {
    this.data = [];
    this.parentEl = document.querySelector(".bookmarks__list");
    this.errorMsg = `<div class="message">
    <div>
      <svg>
        <use href="${imageURL.pathname}#icon-smile"></use>
      </svg>
    </div>
    <p>
      No bookmarks yet. Find a nice recipe and bookmark it :)
    </p>
  </div>
  `;
  }

  render(data) {
    this.data = data;
    this.parentEl.innerHTML = "";

    this.parentEl.insertAdjacentHTML("beforeend", this.generateMarkup());

    if (this.data.length === 0) {
      this.parentEl.innerHTML = this.errorMsg;
    }
  }

  createSearchItemMarkup(item) {
    return `
    <li class="preview">
            <a class="preview__link" href="#${item.id}">
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

  uploadBookmarsFromLocalStorage() {
    window.localStorage.setItem("bookmarks", JSON.stringify(this.data));
  }

  loadBookmarsFromLocalStorage() {
    const data = window.localStorage.getItem("bookmarks");

    if (!data || data === "undefined") return;

    this.data = JSON.parse(data);
    this.render(this.data);

    return this.data;
  }
}

export default new BookmarkView();
