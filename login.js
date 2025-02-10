// start login form functionality
    document.addEventListener("DOMContentLoaded", function () {
        let logInForm = document.querySelector('#login-form');
        if (!logInForm) return;

        let loginPass = document.querySelector('#login-password');
        let loginUsername = document.querySelector('#login-name');
        let loginSubmit = document.querySelector('.login');
        
        // start input validation functionality
            loginSubmit.addEventListener('click', (e) => {

                if (!loginPass.value) {
                    e.preventDefault();
                    document.querySelector('#login-password-error').innerText = "Password Required";
                } else {
                    document.querySelector('#login-password-error').innerText = "";
                }

                if (!loginUsername.value) {
                    e.preventDefault();
                    document.querySelector('#login-name-error').innerText = "Username Required";
                } else {
                    document.querySelector('#login-name-error').innerText = "";
                }

            });
        // end input validation functionality


        // start hide/show password functionality
        let logInPassEye = document.querySelector('.login-pass-eye');
        let logInPassEyeSlash = document.querySelector('.login-pass-eye-splash');

        logInPassEye.addEventListener('click', () => {
            if (loginPass.value.length > 0) {
                loginPass.type = "text";
                logInPassEye.classList.add('d-none');
                logInPassEyeSlash.classList.remove('d-none');
            }
        });

        logInPassEyeSlash.addEventListener('click', () => {
            loginPass.type = "password";
            logInPassEye.classList.remove('d-none');
            logInPassEyeSlash.classList.add('d-none');
        });
        // end hide/show password functionality


        // start login submit functionality ==> check if user exists in local storage
        let loginForm = document.querySelector('#login-form');
        loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let name = loginUsername.value;
        let pass = loginPass.value;
        
        let users = JSON.parse(localStorage.getItem("users")) || [];
        console.log("Stored Users:", users);
        let user = users.find(user => user.username === name);
        console.log("User Found:", user);
        

        if(user) {
            
            if(user.password === pass) {
                let successful = document.querySelector('.login-success-msg');
                successful.innerText = "Login Successful";
                successful.classList.toggle('d-none');
                setTimeout(() => {
                    window.location.href = 'welcome.html';
                }, 2000);
                
            } else {
                let passError = document.querySelector('#login-password-error');
                passError.innerText = "Incorrect Password";  
                
            }
        } else {
            let nameError = document.querySelector('#login-name-error');
            nameError.innerText = "Invalid UserName"; 
            
        }

        loginForm.reset();
    });
    // end login submit functionality ==> check if user exists in local storage


    });
// end login form functionality
