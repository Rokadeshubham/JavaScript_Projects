

// Get the input Elements
var userField = document.querySelector('#username');
var emailField = document.querySelector('#email');
var passwordField = document.querySelector('#password');
var confirmPasswordField = document.querySelector('#password_confirm');

// Get the Validation Message Elements
var userError = document.querySelector('#name_error');
var emailError = document.querySelector('#email_error');
var passwordError = document.querySelector('#password_error');


// Add Blur Event Handling
userField.addEventListener('blur',verifyUser);
emailField.addEventListener('blur',verifyEmail);
passwordField.addEventListener('blur',verifyPassword);
confirmPasswordField.addEventListener('blur',verifyPassword);

function validate() {
    var isValid = true;

    // Required User Name Validation
    if(userField.value === ''){
        displayErrorMessage(userField,userError,'User Name Required');
        isValid = false;
        return isValid;
    }

    // User Name Length Validation
    if(userField.value.length < 5){
        displayErrorMessage(userField,userError,'Enter atleast 5 letters');
        isValid = false;
        return isValid;
    }

    // UserName Pattern Validation ^[A-Za-z0-9_]{1,15}$
    if(!userField.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        displayErrorMessage(userField,userError,'Pattern Not Matched');
        isValid = false;
        return isValid;
    }

    // Required Email Validation
    if(emailField.value === ''){
        displayErrorMessage(emailField,emailError,'Email Required');
        isValid = false;
        return isValid;
    }

    // Required Password Validation
    if(passwordField.value === ''){
        displayErrorMessage(passwordField,passwordError,'Password Required');
        isValid = false;
        return isValid;
    }

    // Required Confirm Password validation
    if(confirmPasswordField.value === ''){
        displayErrorMessage(confirmPasswordField,passwordError,'Confirm Password Required');
        isValid = false;
        return isValid;
    }

    // Password Match Validation
    if(passwordField.value !== confirmPasswordField.value){
        displayErrorMessage(passwordField,passwordError,'Passwords Not Matched');
        confirmPasswordField.style.borderColor = 'red';
        confirmPasswordField.style.backgroundColor = 'lightsalmon';
        isValid = false;
        return isValid;
    }

    if(isValid === false){
        return isValid;
    }
    else{
        alert('Form Submitted');
        return true;
    }

}

function displayErrorMessage(inputField,errorField,message) {
    inputField.style.borderColor = 'red';
    inputField.style.backgroundColor = 'lightsalmon';
    errorField.textContent = message;
    errorField.style.color = 'red';
}

function verifyUser(){
    userField.style.borderColor = 'gray';
    userField.style.backgroundColor = 'white';
    userError.textContent = '';
}
function verifyEmail() {
    emailField.style.borderColor = 'gray';
    emailField.style.backgroundColor = 'white';
    emailError.textContent = '';
}
function verifyPassword() {
    passwordField.style.borderColor = 'gray';
    passwordField.style.backgroundColor = 'white';
    confirmPasswordField.style.borderColor = 'gray';
    confirmPasswordField.style.backgroundColor = 'white';
    passwordError.textContent = '';
}
