"use strict";


const bookingList = document.getElementById("bookingList");



function renderBookings(){


    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];


    bookingList.innerHTML = "";


    if(bookings.length === 0){

        bookingList.innerHTML = `
            <h2>No bookings found.</h2>
        `;

        return;

    }



    bookings.forEach((booking,index)=>{


        bookingList.innerHTML += `

        <div class="booking-card">

            <h2>${booking.hotel || "StayLux Hotel"}</h2>

            <p>Name: ${booking.fullName || "-"}</p>

            <p>Email: ${booking.email || "-"}</p>

            <p>Check In: ${booking.checkIn}</p>

            <p>Check Out: ${booking.checkOut}</p>

            <p>Guests: ${booking.guests}</p>

            <p>Room: ${booking.room}</p>

            <p>Price: $${booking.price}</p>


            <button class="delete-booking"
            data-index="${index}">
                Delete Booking
            </button>


        </div>

        `;


    });


}



renderBookings();




document.addEventListener("click",(e)=>{


    if(e.target.classList.contains("delete-booking")){


        let bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];



        const index =
        e.target.dataset.index;



        bookings.splice(index,1);



        localStorage.setItem(
            "bookings",
            JSON.stringify(bookings)
        );



        alert("Booking deleted!");



        renderBookings();


    }


});