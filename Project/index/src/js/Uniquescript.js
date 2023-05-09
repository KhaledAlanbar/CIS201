// Selecting the elements
const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const forgotPasswordForm = document.querySelector('.forgot-password-form');
const loginButton = document.querySelector('.login-btn');
const registerButton = document.querySelector('.register-btn');
const forgotPasswordButton = document.querySelector('.forgot-password-btn');
const backToLoginButton = document.querySelector('.back-to-login-btn');
const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');
const registerName = document.querySelector('#register-name');
const registerEmail = document.querySelector('#register-email');
const registerPassword = document.querySelector('#register-password');
const forgotPasswordEmail = document.querySelector('#forgot-password-email');

// Function to toggle the login and register forms
function toggleForms(showForm, hideForm1, hideForm2) {
showForm.style.display = 'block';
hideForm1.style.display = 'none';
hideForm2.style.display = 'none';
}

// Event listener for the login button
loginButton.addEventListener('click', () => {
toggleForms(loginForm, registerForm, forgotPasswordForm);
});

// Event listener for the register button
registerButton.addEventListener('click', () => {
toggleForms(registerForm, loginForm, forgotPasswordForm);
});

// Event listener for the forgot password button
forgotPasswordButton.addEventListener('click', () => {
toggleForms(forgotPasswordForm, loginForm, registerForm);
});

// Event listener for the back to login button
backToLoginButton.addEventListener('click', () => {
toggleForms(loginForm, forgotPasswordForm, registerForm);
});

// Event listener for the submit button in the login form
loginForm.addEventListener('submit', (event) => {
event.preventDefault();
// Get the email and password from the form
const email = loginEmail.value;
const password = loginPassword.value;
// Perform login validation here
});

// Event listener for the submit button in the register form
registerForm.addEventListener('submit', (event) => {
event.preventDefault();
// Get the name, email, and password from the form
const name = registerName.value;
const email = registerEmail.value;
const password = registerPassword.value;
// Perform registration validation here
});

// Event listener for the submit button in the forgot password form
forgotPasswordForm.addEventListener('submit', (event) => {
event.preventDefault();
// Get the email from the form
const email = forgotPasswordEmail.value;
// Perform forgot password validation here
});

// Event listener for clicking anywhere on the page
document.addEventListener('click', (event) => {
// If the clicked element is not inside the login form, hide the login form
if (!loginForm.contains(event.target)) {
loginForm.style.display = 'none';
}
});

// show the login form when clicking the login button
function toggleLogin() {
loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
registerForm.style.display = "none";
}

// show the register form when clicking the register button
function toggleRegister() {
registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
loginForm.style.display = "none";
}
