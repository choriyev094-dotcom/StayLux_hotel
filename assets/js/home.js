"use strict";

const watchBtn = document.getElementById("watchVideo");

if (watchBtn) {
    watchBtn.addEventListener("click", function (e) {
        e.preventDefault();

        alert("🎬 Not video yet.");
    });
}