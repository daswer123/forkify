class SearchView {
  constructor() {
    this.searchForm = document.querySelector(".search");
    this.searchInput = document.querySelector(".search__field");
  }

  addEventHandlers(controllerFunc) {
    this.searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      controllerFunc(this.searchInput.value);
      this.searchInput.value = "";
    });
  }
}

export default new SearchView();
