import { imageURL } from "../config.js";

class App {
  constructor(parentEl, errorMsg, successesMsg) {
    this.parentEl = parentEl;
    this.errorMsg = errorMsg;
    this.successesMsg = successesMsg;
  }

  renderSpiner() {
    const markup = `
        <div class="spinner">
        <svg>
          <use href="${imageURL.pathname}#icon-loader"></use>
        </svg>
      </div>`;
    this.parentEl.innerHTML = ``;
    this.parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(error = this.errorMsg) {
    this.parentEl.innerHTML = ``;
    this.parentEl.innerHTML = `
        <div class="error">
          <div>
            <svg>
              <use href="${imageURL}}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${error}</p>
        </div>
              `;
  }

  renderSuccesses() {}
}

export default App;
