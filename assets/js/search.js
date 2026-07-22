/* ===========================
   SEARCH
=========================== */

const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        const location = document.getElementById("location").value.trim();
        const checkin = document.getElementById("checkin").value;
        const checkout = document.getElementById("checkout").value;
        const guests = document.getElementById("guests").value;

        if (!location || !checkin || !checkout || !guests) {

            alert("Please fill in all fields.");

            return;

        }

        localStorage.setItem("searchLocation", location);
        localStorage.setItem("searchCheckIn", checkin);
        localStorage.setItem("searchCheckOut", checkout);
        localStorage.setItem("searchGuests", guests);

        window.location.href = "pages/hotels.html";

    });

}
const location = localStorage.getItem("searchLocation");

if (location) {

    const title = document.querySelector(".hotel-title");

    if (title) {

        title.textContent =`Hotels in ${location}`;

    }

}