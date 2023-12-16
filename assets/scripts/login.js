'use strict';

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const passwordInput = document.getElementById("password");
const usernameInput = document.getElementById("username");
const errorMessage = document.getElementById("error-message");

function login() {
    const storedUsername = "johndoe2516";
    const storedPassword = "S2kw7lt";
  
    // Get the entered username and password values
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;
  
    // Check if the entered credentials match the stored credentials
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        // Successful login, redirect to home page
        window.location.href = "index.html";
    } else {
        // Display error message for incorrect credentials
        errorMessage.textContent = "Incorrect username or password";
    }
}

// Event listener for the login button
document.querySelector("button").addEventListener("click", login);

// Optionally, you can handle the login process on pressing "Enter" key
document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        login();
    }
});