"use strict";

const bookingList = document.getElementById("bookingList");

if (bookingList) {

    let bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    renderBookings();

    function renderBookings() {

        if (bookings.length === 0) {

            bookingList.innerHTML = `

                <div class="booking-card">

                    <h2>No Bookings Yet</h2>

                    <p>You haven't booked any rooms.</p>

                </div>

            `;

            return;

        }

        bookingList.innerHTML = "";

        bookings.forEach((booking) => {

            bookingList.innerHTML += `

            <div class="booking-card">

                <h2>${booking.room}</h2>

                <p><strong>Check In:</strong> ${booking.checkIn}</p>

                <p><strong>Check Out:</strong> ${booking.checkOut}</p>

                <p><strong>Guests:</strong> ${booking.guests}</p>

                <h3>${booking.price}</h3>

                <button
                    class="delete-btn"
                    data-id="${booking.id}">

                    Delete

                </button>

            </div>

            `;

        });

        document.querySelectorAll(".delete-btn").forEach(btn => {

            btn.addEventListener("click", () => {

                const id = Number(btn.dataset.id);

                bookings = bookings.filter(item => item.id !== id);

                localStorage.setItem(
                    "bookings",
                    JSON.stringify(bookings)
                );

                showToast("Booking Deleted", "success");

                renderBookings();

            });

        });

    }

}