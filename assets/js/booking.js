const bookingForm = document.getElementById("bookingForm");
const roomSelect = document.getElementById("room");
const price = document.getElementById("price");


function updatePrice(){

    const roomPrice = Number(roomSelect.value);

    price.textContent = `$${roomPrice}`;

}

roomSelect.addEventListener("change", updatePrice);

updatePrice();



bookingForm.addEventListener("submit",(e)=>{

    e.preventDefault();


    const booking = {

        id: Date.now(),

        fullName: document.getElementById("fullName").value,

        email: document.getElementById("email").value,

        checkIn: document.getElementById("checkIn").value,

        checkOut: document.getElementById("checkOut").value,

        guests: document.getElementById("guests").value,

        room: roomSelect.options[roomSelect.selectedIndex].text,

        price: roomSelect.value

    };


    const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];


    bookings.push(booking);


    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );


    showToast("Booking Successful!","success");


    bookingForm.reset();


    updatePrice();

});



function showToast(message,type){

    const toast=document.getElementById("toast");
    const toastMessage=document.getElementById("toastMessage");


    toastMessage.textContent=message;


    toast.classList.add("active");


    setTimeout(()=>{

        toast.classList.remove("active");

    },3000);

}