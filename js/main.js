"use strict";

// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const popUpRemove = document.querySelector(".pop-up__remove");
const servicesPopUpRemove = document.querySelector(".services-pop-up__remove");
const hiddenCard = document.querySelector(".hidden-card");
const btnContact = document.querySelectorAll(".button-contact");
const btnMore = document.querySelectorAll(".button-more");
const container = document.querySelector(".overlay-container");
const servicesContainer = document.querySelector(".services-container");
const benefitsBlock = document.querySelectorAll(".benefits__block");
const benefitsBlockNumber = document.querySelectorAll(
  ".benefits__block_number"
);
const video = document.querySelectorAll(".slider-video");
const body = document.getElementsByTagName("body");

for (const item of btnContact) {
  item.addEventListener("click", () => {
    container.classList.add("active");
  });
}
popUpRemove.addEventListener("click", () => {
  container.classList.remove("active");
});

for (const item of btnMore) {
  item.addEventListener("click", () => {
    servicesContainer.classList.add("active");
  });
}
servicesPopUpRemove.addEventListener("click", () => {
  servicesContainer.classList.remove("active");
});

benefitsBlock.forEach((element, index) => {
  element.onmouseover = function () {
    benefitsBlockNumber[index].style.color = "#fff";
  };

  element.onmouseout = function () {
    benefitsBlockNumber[index].style.color = "rgba(255, 255, 255, 0.3)";
  };
});

new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 30,
  pauseOnMouseEnter: true,
  playOnMouseEnter: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

for (let i of video) {
  i.addEventListener("click", function () {
    i.paused ? i.play() : i.pause();
  });
}
