//start register form functionality
    document.addEventListener("DOMContentLoaded", function () {
        let registForm = document.querySelector('#register-form');
        if (!registForm) return; 

        let pass = document.querySelector('#password');
        let confirmPass = document.querySelector('#confirm-password');
        let email = document.querySelector('#email');
        let username = document.querySelector('#name');
        let submitRegist = document.querySelector('.register');

        // start input validation functionality
            submitRegist.addEventListener('click', (e) => {
                console.log("clicked");
                
                if(!pass.value){
                    e.preventDefault();
                    document.querySelector('#password-error').innerText = "Password Reqeuired";
                }else if (pass.value.length < 8){
                    e.preventDefault();
                    document.querySelector('#password-error').innerText = "Password must be at least 8 characters long";
                }else{
                    document.querySelector('#password-error').innerText = "";
                }

                if (!username.value) {
                    e.preventDefault();
                    document.querySelector('#name-error').innerText = "Username Required";
                } else if (username.value.length < 3) {
                    e.preventDefault();
                    document.querySelector('#name-error').innerText = "Username must be at least 3 characters long";
                } else {
                    document.querySelector('#name-error').innerText = "";
                }

                if (pass.value != confirmPass.value){
                    e.preventDefault();
                    document.querySelector('#confirm-password-error').innerText = "Passwords do not match";
                }else{
                    document.querySelector('#confirm-password-error').innerText = "";
                }

                if (!email.value) {
                    e.preventDefault();
                    document.querySelector('#email-error').innerText = "Email Required";
                } else if (!email.value.includes('@')) {
                    e.preventDefault();
                    document.querySelector('#email-error').innerText = "Invalid email";
                } else {
                    document.querySelector('#email-error').innerText = "";
                }

            });
        // end input validation functionality

        // start hide/show password functionality
            let passEye = document.querySelector('.pass-eye');
            let passEyeSlash = document.querySelector('.pass-eye-splash');
            passEye.addEventListener('click', () => {
                if(pass.value.length > 0 ){
                    pass.type = "text";
                    passEye.style.display = "none";
                    passEyeSlash.classList.toggle('d-none');
            }});

            passEyeSlash.addEventListener('click', () => {
                pass.type = "password";
                passEye.style.display = "block";
                passEyeSlash.classList.toggle('d-none');
            });
        
            let confirmEye = document.querySelector('.confirm-eye');
            let confirmEyeSlash = document.querySelector('.confirm-eye-splash');
            confirmEye.addEventListener('click', () => {
                if(confirmPass.value.length > 0 ){
                    confirmPass.type = "text";
                    confirmEye.style.display = "none";
                    confirmEyeSlash.classList.toggle('d-none');
            }});

            confirmEyeSlash.addEventListener('click', () => {
                confirmPass.type = "password";
                confirmEye.style.display = "block";
                confirmEyeSlash.classList.toggle('d-none');
            });

        // end hide/show password functionality

        // start register submit functionality ==> check if add user  in local storage
            registForm.addEventListener("submit", (e) => {
                e.preventDefault(); 

                let emailError = document.querySelector("#email-error");
                let usernameError = document.querySelector("#name-error");

                
                let userData = {
                    username: username.value,
                    email: email.value,
                    password: pass.value
                };
                let users = JSON.parse(localStorage.getItem("users")) || [];

                let emailExists = users.some(user => user.email === email.value);
                let usernameExists = users.some(user => user.username === username.value);

                if  (usernameExists) {
                    usernameError.innerText = "Username already exists!";
                    return;
                }else if (emailExists) {
                    emailError.innerText = "Email already exists!";
                    return;
                }
                else {
                    emailError.innerText = "";
                    usernameError.innerText = "";
                    users.push(userData);
                    localStorage.setItem("users", JSON.stringify(users));
                    let successful = document.querySelector('.register-success-msg');
                    successful.innerText = "Registration Successful";
                    successful.classList.toggle('d-none');
                    setTimeout(() => {
                        window.location.href = "login.html";
                    }, 2000);
                }

                registForm.reset(); 
                
            });
        // end register submit functionality ==> check if add user  in local storage


    });
// end register form functionality








