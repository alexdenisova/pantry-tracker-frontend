import "./pantry/add.js";
import { main } from "./pantry/constants.js";
import { showPantryItems } from "./pantry/list.js";
import "./pantry/show.js";

const search_container = document.getElementById("search-container");
const search = document.getElementById("query");

const url = new URL(location.href);
const page = url.searchParams.get("page");

showPantryItems(page ? page : 1);

search_container.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    showPantryItems(`name_contains=${searchItem}`);
    search.value = "";
  }
});
