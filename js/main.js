"use strict";

const popUpRemove = document.querySelector(".pop-up__remove");
const hiddenCard = document.querySelector(".hidden-card");
const btn = document.querySelectorAll(".button");
const container = document.querySelector(".overlay-container");

popUpRemove.addEventListener("click", () => {
  container.classList.remove("active");
});

for (const item of btn) {
  item.addEventListener("click", () => {
    container.classList.add("active");
  });
}
