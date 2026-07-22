"use strict";

/* ==========================================
   FAVORITE HOTELS
========================================== */

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

document.addEventListener("click", (e) => {

    const button = e.target.closest(".favorite-btn");

    if (!button) return;

    const card = button.closest(".hotel-card");

    const hotelName = card.querySelector("h3").textContent;

    const icon = button.querySelector("i");

    if (favorites.includes(hotelName)) {

        favorites = favorites.filter(item => item !== hotelName);

        icon.classList.remove("fa-solid");

        icon.classList.add("fa-regular");

    } else {

        favorites.push(hotelName);

        icon.classList.remove("fa-regular");

        icon.classList.add("fa-solid");

    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

});
window.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".hotel-card").forEach(card => {

        const hotelName = card.querySelector("h3").textContent;

        const icon = card.querySelector(".favorite-btn i");

        if (favorites.includes(hotelName)) {

            icon.classList.remove("fa-regular");

            icon.classList.add("fa-solid");

        }

    });

});