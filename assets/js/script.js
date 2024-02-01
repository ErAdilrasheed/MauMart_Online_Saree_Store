"use strict";

// SearchBar
const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("product-box");
  const product = document.querySelectorAll("showcase");
  const pname = storeitems.getElementsByTagName("h3");
  const proname = storeitems.getElementsByTagName("h4");
  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h3")[0];
    for (var i = 0; i < proname.length; i++) {
      let match = product[i].getElementsByTagName("h4")[0];

      if (match) {
        let textvalue = match.textContent || match.innerHTML;

        if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
          product[i].style.display = "";
        } else {
          product[i].style.display = "none";
        }
      }
    }
  }
};

// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

// modal eventListener
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// notification toast eventListener
toastCloseBtn.addEventListener("click", function () {
  notificationToast.classList.add("closed");
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

// ------------------Google Contact Form Script-------------//

const scriptURL =
  "https://script.google.com/macros/s/AKfycbywAOSGGPtqIILFnUBfOwHVejLbPf2hvNw7gsrSjh6kh8zpVNLyTV5kHIwlWAMFaHgY/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Subscribing MauMart! ";
      setTimeout(function () {
        msg.innerHTML = "";
        form.reset();
      }, 5000);
    })
    .catch((error) => console.error("Error!", error.message));
});
