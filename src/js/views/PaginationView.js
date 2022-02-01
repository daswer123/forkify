import { ITEM_PER_PAGE, imageURL } from "../config";

class Pagination {
  constructor() {
    this.parentEl = document.querySelector(".pagination");
  }

  nextPage(state) {
    state.page++;
    this.render(state);
  }

  prevPage(state) {
    state.page--;
    this.render(state);
  }

  addEventHandlers(controllerFunc, state) {
    this.parentEl.addEventListener("click", (e) => {
      if (e.target.closest(".pagination__btn--prev")) {
        this.prevPage(state);
        controllerFunc();
      }

      if (e.target.closest(".pagination__btn--next")) {
        this.nextPage(state);
        controllerFunc();
      }
    });
  }

  render(state) {
    this.parentEl.innerHTML = "";
    this.parentEl.insertAdjacentHTML("beforeend", this.generateMarkup(state));
  }

  generateMarkup(state) {
    return `
        ${
          state.page === 0
            ? ""
            : `<button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${imageURL.pathname}#icon-arrow-left"></use>
            </svg>
            <span>Page ${state.page}</span>
           </button>`
        }
            
        ${
          state.search.length <= (state.page + 1) * ITEM_PER_PAGE
            ? ""
            : `
        <button class="btn--inline pagination__btn--next">
            <span>Page ${state.page + 2}</span>
            <svg class="search__icon">
              <use href="${imageURL.pathname}#icon-arrow-right"></use>
            </svg>
          </button>
        `
        }
          
        </div>`;
  }
}

export default new Pagination();
