// DOM yuklangandan keyin
document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // Search
    // ==============================

    const searchBtn = document.querySelector(".search-btn");

    searchBtn.addEventListener("click", () => {

        const location = document.querySelector('input[type="text"]').value.trim();
        const checkIn = document.querySelector('input[type="date"]').value;
        const checkOut = document.querySelectorAll('input[type="date"]')[1].value;
        const guests = document.querySelector('input[type="number"]').value;

        if (
            location === "" ||
            checkIn === "" ||
            checkOut === "" ||
            guests === ""
        ) {
            alert("Please fill in all fields.");
            return;
        }

        alert(`
Location : ${location}
Check In : ${checkIn}
Check Out : ${checkOut}
Guests : ${guests}
        `);

        // keyinchalik hotels.html ga yuborish mumkin
        // window.location.href = "pages/hotels.html";

    });

    // ==============================
    // Navbar Scroll
    // ==============================

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }

    });

    // ==============================
    // Watch Video
    // ==============================

    const watchBtn = document.querySelector(".btn-secondary");

    watchBtn.addEventListener("click", (e) => {

        e.preventDefault();

        alert("Video will be available soon.");

    });

    // ==============================
    // Hotel Cards Animation
    // ==============================

    const cards = document.querySelectorAll(".hotel-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";
            card.style.transition = ".3s";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

    // ==============================
    // Booking Button
    // ==============================

    const hotelBtns = document.querySelectorAll(".hotel-btn");

    hotelBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            const hotel =
                btn.parentElement.querySelector("h3").textContent;

            localStorage.setItem("selectedHotel", hotel);

        });

    });

});

const watchBtn = document.getElementById("watchVideo");
const toast = document.getElementById("videoToast");

watchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-menu a").forEach(link => {

    const href = link.getAttribute("href");

    if (
        (currentPage === "index.html" && (href === "index.html"  || href === "../index.html")) ||
        href.endsWith(currentPage)
    ) {
        link.classList.add("active");
    }

});

///// QOSHIMCHA /////
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-menu a").forEach(link => {

    const page = link.getAttribute("href").split("/").pop();

    if (page === currentPage) {
        link.classList.add("active");
    }

});