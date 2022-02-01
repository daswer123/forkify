import AppView from "./AppView.js";

class AddView extends AppView {
  constructor() {
    super(
      document.querySelector(".upload"),
      "Something get wrong",
      "Successes Your recipy was uploaded"
    );
    this.overlay = document.querySelector(".overlay");
    this.window = document.querySelector(".add-recipe-window");
    this.addBtn = document.querySelector(".nav__btn--add-recipe");
    this.closeBtn = document.querySelector(".btn--close-modal");

    this.addHanlderToggleWindow();
  }

  render() {}

  addHanlderToggleWindow() {
    this.overlay.addEventListener("click", this.toggleForm.bind(this));
    this.addBtn.addEventListener("click", this.toggleForm.bind(this));
    this.closeBtn.addEventListener("click", this.toggleForm.bind(this));
  }

  addHanlderUpload(controlFunc) {
    this.parentEl.addEventListener("submit", function (e) {
      e.preventDefault();

      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      controlFunc(data);
    });
  }

  toggleForm() {
    this.overlay.classList.toggle("hidden");
    this.window.classList.toggle("hidden");
  }
}

export default new AddView();
