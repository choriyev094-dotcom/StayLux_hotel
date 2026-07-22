"use strict";


/* ===========================
   PASSWORD TOGGLE
=========================== */

function togglePasswordView(inputId, buttonId) {

    const input = document.getElementById(inputId);
    const button = document.getElementById(buttonId);


    if(input && button){

        const icon = button.querySelector("i");


        button.addEventListener("click",()=>{


            if(input.type === "password"){


                input.type = "text";

                icon.classList.remove("fa-eye");

                icon.classList.add("fa-eye-slash");


            }else{


                input.type = "password";

                icon.classList.remove("fa-eye-slash");

                icon.classList.add("fa-eye");


            }


        });

    }

}


togglePasswordView(
    "password",
    "togglePassword"
);


togglePasswordView(
    "confirmPassword",
    "toggleConfirmPassword"
);



/* ===========================
   REGISTER
=========================== */


const registerForm =
document.getElementById("registerForm");


if(registerForm){


registerForm.addEventListener("submit",(e)=>{


    e.preventDefault();


    const name =
    document.getElementById("fullName").value.trim();


    const email =
    document.getElementById("email").value.trim();


    const password =
    document.getElementById("password").value.trim();


    const confirmPassword =
    document.getElementById("confirmPassword").value.trim();



    if(
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ){

        showToast(
            "Please fill all fields!",
            "error"
        );

        return;

    }



    if(password !== confirmPassword){


        showToast(
            "Passwords do not match!",
            "error"
        );

        return;

    }



    if(password.length < 6){


        showToast(
            "Password must be at least 6 characters!",
            "error"
        );

        return;

    }



    let users =
    JSON.parse(localStorage.getItem("users")) || [];



    const exists = users.find(user =>
        user.email === email
    );



    if(exists){


        showToast(
            "Email already registered!",
            "error"
        );

        return;

    }



    const user = {

        id: Date.now(),

        name:name,

        email:email,

        password:password

    };



    users.push(user);



    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );



    showToast(
        "Account created successfully!",
        "success"
    );



    registerForm.reset();



    setTimeout(()=>{


        window.location.href="login.html";


    },1500);



});


}