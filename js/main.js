"use strict";

const popUpRemove = document.querySelector(".pop-up__remove");
const hiddenCard = document.querySelector(".hidden-card");
const btn = document.querySelector(".button");
const container = document.querySelector(".overlay-container");

popUpRemove.addEventListener("click", () => {
  container.classList.remove("active");
});

btn.addEventListener("click", () => {
  container.classList.add("active");
});
