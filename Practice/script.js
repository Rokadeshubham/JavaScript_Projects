var userName = document.querySelector('#username');
var password = document.querySelector('#pass');


var userError = document.querySelector('#uerror');
var passError = document.querySelector('#perror');

submitButton.addEventListener('click',validate);

function validate() {
var isValid = true;

    if (userName.value === ''){
        userError.innerHTML = 'Enter username';

         }
    else if (userName.value.length < 5){
        userError.textContent = 'User Name should be greater than 5'


    }
    else if (password.value === ''){
        passError.textContent = 'Enter password';

    }
    else if (!password.value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)){
        passError.textContent = 'Enter one Alphabet ,one Special Symbol,And at least 8 characters'

    }
    else{
        alert('Form Submitted');
        userName.value = '';
        userError.value = '';
        password.value = '';
        passError.value = '';

    }


}