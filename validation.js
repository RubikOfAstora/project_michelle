const form = document.getElementById('form');
const ansprache = document.getElementById('ansprache');
const vorname = document.getElementById('vorname');
const nachname = document.getElementById('nachname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submit = document.getElementById('submit');

document.getElementById('form-control');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.vorname = 'form-control error';
    formControl.nachname = 'form-control error';
    formControl.email = 'form-control error';
    formControl.password = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.vorname = 'form-control success';
    formControl.nachname = 'form-control success';
    formControl.email = 'form-control success';
    formControl.password = 'form-control success';
}



form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});