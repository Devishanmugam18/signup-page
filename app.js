const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputGroup = element.parentElement;
    const errorDisplay = inputGroup.querySelector('.error');

    errorDisplay.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
    
}

const setSuccess = (element) => {
    const inputGroup = element.parentElement;
    const errorDisplay = inputGroup.querySelector('.error');

    errorDisplay.innerText = '';

    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const isValidEmail = (email) => {
    return String(email).toLocaleLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

const validateInputs = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if (usernameVal === '') {
        setError(username, "Username is required");
    }
    else {
        setSuccess(username);
    }

    if (emailVal == '') {
        setError(email,'Email is required')
    }
    else if (!isValidEmail(emailVal)) {
        setError(email,'Invalid email address')
    }
    else {
        setSuccess(email)
    }

    if (passwordVal === '') {
        setError(password,"Password is required")
    }
    else if (passwordVal.length < 8) {
        setError(password,"Password must be atleast 8 character")
    }
    else {
        setSuccess(password)
    }

    if (cpasswordVal === '') {
        setError(cpassword,'Confirm your password')
    }
    else if (cpasswordVal != passwordVal){
        setError(cpassword,"Password doesn't match")
    }
    else {
        setSuccess(cpassword)
    }
};