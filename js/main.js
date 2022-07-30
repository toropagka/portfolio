"use strict";

// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const popUpRemove = document.querySelector(".pop-up__remove");
const servicesPopUpRemoveAll = document.querySelectorAll(
  ".services-pop-up__remove"
);
const hiddenCard = document.querySelector(".hidden-card");
const btnContact = document.querySelectorAll(".button-contact");
const btnMore = document.querySelectorAll(".button-more");
const container = document.querySelector(".overlay-container");
const containerAll = document.querySelectorAll(".overlay-container");
const servicesContainer = document.querySelector(".services-container");
const servicesContainerAll = document.querySelectorAll(".services-container");
const benefitsBlock = document.querySelectorAll(".benefits__block");
const benefitsBlockNumber = document.querySelectorAll(
  ".benefits__block_number"
);
const video = document.getElementsByTagName("video");
const body = document.querySelector("body");

for (const item of btnContact) {
  item.addEventListener("click", () => {
    container.classList.add("active");
    body.classList.add("noscrol");
  });
}
popUpRemove.addEventListener("click", () => {
  container.classList.remove("active");
  body.classList.remove("noscrol");
});

btnMore.forEach(function (item, index) {
  item.addEventListener("click", () => {
    servicesContainerAll[index].classList.add("active");
    body.classList.add("noscrol");
  });
});
servicesPopUpRemoveAll.forEach((item, index) => {
  item.addEventListener("click", () => {
    servicesContainerAll[index].classList.remove("active");
    body.classList.remove("noscrol");
  });
});

benefitsBlock.forEach((element, index) => {
  element.onmouseover = function () {
    benefitsBlockNumber[index].style.color = "#fff";
    benefitsBlockNumber[index].style.transition = "all ease-in-out 0.3s";
  };

  element.onmouseout = function () {
    benefitsBlockNumber[index].style.color = "rgba(255, 255, 255, 0.3)";
  };
});

if (document.documentElement.clientWidth >= 1024) {
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
} else {
  new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 50,
    pauseOnMouseEnter: true,
    playOnMouseEnter: true,

    // If we need pagination

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
}

for (let i of video) {
  i.addEventListener("click", function () {
    i.paused ? i.play() : i.pause();
  });
}

document.body.onclick = function (e) {
  let el = e ? e.target : window.event.srcElement;
  if (el.className === "b-popup") block_modal_css.style.display = "none";
};
