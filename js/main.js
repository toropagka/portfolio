"use strict";

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

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

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    dragSize: 70,
    snapOnRelease: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
