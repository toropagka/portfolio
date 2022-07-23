"use strict";

const popUpRemove = document.querySelector(".pop-up__remove");
const hiddenCard = document.querySelector(".hidden-card");
const btnContact = document.querySelectorAll(".button-contact");
const container = document.querySelector(".overlay-container");
const benefitsBlock = document.querySelectorAll(".benefits__block");
const benefitsBlockNumber = document.querySelectorAll(
  ".benefits__block_number"
);

popUpRemove.addEventListener("click", () => {
  container.classList.remove("active");
});

for (const item of btnContact) {
  item.addEventListener("click", () => {
    container.classList.add("active");
  });
}

benefitsBlock.forEach((element, index) => {
  element.onmouseover = function () {
    benefitsBlockNumber[index].style.color = "#fff";
  };

  element.onmouseout = function () {
    benefitsBlockNumber[index].style.color = "rgba(255, 255, 255, 0.3)";
  };
});
