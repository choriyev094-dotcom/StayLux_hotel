"use strict";

/* ==========================================
   HOTEL DATA
========================================== */

const hotels = [
    {
        id: 1,
        name: "Royal Palace Hotel",
        city: "Tashkent, Uzbekistan",
        rating: 4.9,
        price: 180,
        detailsPage: "royal-palace.html",
        badge: "Top Rated",
        favorite: false,
        features: [
            "Free WiFi",
            "Infinity Pool",
            "Spa & Wellness",
            "Breakfast Included"
        ]
    },

    {
        id: 2,
        name: "Hilton Resort",
        city: "Dubai, UAE",
        rating: 4.8,
        price: 250,
        detailsPage: "hilton-resort.html",
        badge: "Best Seller",
        favorite: false,
        features: [
            "Private Beach",
            "Luxury Spa",
            "Airport Transfer",
            "Free Breakfast"
        ]
    },

    {
        id: 3,
        name: "Grand Luxury Hotel",
        city: "Paris, France",
        rating: 5.0,
        price: 320,
        detailsPage: "grand-luxury.html",
        badge: "Luxury",
        favorite: false,
        features: [
            "City View",
            "Restaurant",
            "Gym",
            "Free Parking"
        ]
    }
];

/* ==========================================
   DOM
========================================== */

const hotelGrid = document.getElementById("hotelGrid");

/* ==========================================
   RENDER HOTELS
========================================== */

function renderHotels(data = hotels) {

    if (!hotelGrid) return;

    hotelGrid.innerHTML = "";

    data.forEach(hotel => {

        hotelGrid.innerHTML += `

        <div class="hotel-card">

            <button class="favorite-btn">

                <i class="fa-regular fa-heart"></i>

            </button>

            <span class="hotel-badge">

                ${hotel.badge}

            </span>

            <h2>${hotel.name}</h2>

            <div class="hotel-top">

                <div class="rating">

                    ⭐ ${hotel.rating}

                </div>

                <span>

                    📍 ${hotel.city}

                </span>

            </div>

            <ul class="hotel-features">

                ${hotel.features.map(feature => `

                    <li>

                        <i class="fa-solid fa-circle-check"></i>

                        ${feature}

                    </li>

                `).join("")}

            </ul>

            <div class="hotel-bottom">

                <h3>

                    $${hotel.price}

                    <span>/ Night</span>

                </h3>

                <a href="${hotel.detailsPage}" class="hotel-btn">

                    View Details →

                </a>

            </div>

        </div>

        `;

    });

}

/* ==========================================
   START
========================================== */

renderHotels(hotels);