'use strict';

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const passwordInput = document.getElementById("password");
const usernameInput = document.getElementById("username");
const errorMessage = document.getElementById("error-message");

function login() {
    const storedUsername = "johndoe2516";
    const storedPassword = "S2kw7lt";
  
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;
  
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        window.location.href = "index.html";
    } else {
        errorMessage.textContent = "Incorrect username or password";
    }
}

document.querySelector("button").addEventListener("click", login);

document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        login();
    }
});