import { imageURL } from "../config.js";

class App {
  constructor(parentEl, errorMsg, successesMsg) {
    this.parentEl = parentEl;
    this.errorMsg = errorMsg;
    this.successesMsg = successesMsg;
  }
  // Virtual DOM , создаем DOM на основе верстки, берем текущий дом Элемента, сравниваем на отличия и изменяем класс и текст
  update(data) {
    this.data = data;
    const markup = this.generateMarkup();

    const newDOM = document.createRange().createContextualFragment(markup); // DOM на основе сгенерированой верстки
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const currElements = Array.from(this.parentEl.querySelectorAll("*"));

    newElements.forEach((newEl, i) => {
      const curElem = currElements[i];
      if (
        !newEl.isEqualNode(curElem) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curElem.textContent = newEl.textContent;
      }

      if (!newEl.isEqualNode(curElem)) {
        Array.from(newEl.attributes).forEach((attribute) => {
          curElem.setAttribute(attribute.name, attribute.value);
        });
      }
    });
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
              <use href="${imageURL.pathname}}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${error}</p>
        </div>
              `;
  }

  renderSuccesses() {
    this.parentEl.innerHTML = ``;
    this.parentEl.innerHTML = `
      <div class="error">
          <div>
            <svg>
              <use href="${imageURL.pathname}}#icon-smile"></use>
            </svg>
          </div>
          <p>${this.successesMsg}</p>
        </div>
`;
  }
}

export default App;
