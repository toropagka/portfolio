"use strict";

const popUpRemove = document.querySelector(".pop-up__remove");
const container = document.querySelector(".hidden-card");

popUpRemove.addEventListener("click", () => {
  container.innerHTML = "";
});
