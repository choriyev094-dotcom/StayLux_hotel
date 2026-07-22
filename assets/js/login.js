/* ===========================
   SHOW / HIDE PASSWORD
=========================== */

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");


if(password && togglePassword){

    const icon = togglePassword.querySelector("i");


    togglePassword.addEventListener("click",()=>{


        if(password.type === "password"){


            password.type = "text";


            icon.classList.remove("fa-eye");

            icon.classList.add("fa-eye-slash");


        }else{


            password.type = "password";


            icon.classList.remove("fa-eye-slash");

            icon.classList.add("fa-eye");


        }


    });

}



/* ===========================
   LOGIN
=========================== */


const loginForm = document.getElementById("loginForm");


if(loginForm){


    loginForm.addEventListener("submit",(e)=>{


        e.preventDefault();


        const email =
        document.getElementById("email").value.trim();


        const passwordValue =
        document.getElementById("password").value.trim();



        if(email === "" || passwordValue === ""){


            showToast(
                "Please fill all fields!",
                "error"
            );


            return;

        }



        const users =
        JSON.parse(localStorage.getItem("users")) || [];



        const user = users.find(item =>

            item.email === email &&
            item.password === passwordValue

        );



        if(user){


            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );


            showToast(
                "Login successful!",
                "success"
            );


            setTimeout(()=>{

                window.location.href="../index.html";

            },1500);



        }else{


            showToast(
                "Invalid email or password!",
                "error"
            );


        }



    });


}