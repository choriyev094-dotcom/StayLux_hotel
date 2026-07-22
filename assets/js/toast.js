"use strict";


function showToast(message,type){


    const toast = document.getElementById("toast");

    const toastMessage =
    document.getElementById("toastMessage");


    if(!toast || !toastMessage) return;



    toastMessage.textContent = message;


    toast.classList.add("show");


    setTimeout(()=>{


        toast.classList.remove("show");


    },3000);


}