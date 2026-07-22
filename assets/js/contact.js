"use strict";

/* ==============================
   CONTACT FORM
============================== */

const contactForm = document.querySelector(".contact-form form");


contactForm.addEventListener("submit", (e) => {

    e.preventDefault();


    const inputs = contactForm.querySelectorAll("input");
    const textarea = contactForm.querySelector("textarea");


    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const subject = inputs[2].value.trim();
    const message = textarea.value.trim();


    if(
        name === "" ||
        email === "" ||
        message === ""
    ){

        alert("Please fill in all required fields.");

        return;

    }


    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(!emailPattern.test(email)){

        alert("Please enter a valid email address.");

        return;

    }


    const contactMessage = {

        id: Date.now(),

        name:name,

        email:email,

        subject:subject,

        message:message

    };


    const messages =
    JSON.parse(localStorage.getItem("messages")) || [];


    messages.push(contactMessage);


    localStorage.setItem(
        "messages",
        JSON.stringify(messages)
    );


    alert("Your message has been sent successfully!");


    contactForm.reset();


});