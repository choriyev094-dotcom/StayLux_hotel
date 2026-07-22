"use strict";

/* ===========================
   COUNTER ANIMATION
=========================== */

const counters = document.querySelectorAll(".stat-box h2");


counters.forEach(counter => {

    const text = counter.textContent;

    const number = parseFloat(
        text.replace(/[^\d.]/g, "")
    );

    let current = 0;

    const increment = number / 100;


    const updateCounter = () => {

        current += increment;


        if(current < number){

            if(text.includes("K")){

                counter.textContent =
                Math.floor(current) + "K+";

            }
            else if(text.includes("★")){

                counter.textContent =
                current.toFixed(1) + "★";

            }
            else{

                counter.textContent =
                Math.floor(current) + "+";

            }


            requestAnimationFrame(updateCounter);

        }
        else{

            counter.textContent = text;

        }

    };


    updateCounter();


});