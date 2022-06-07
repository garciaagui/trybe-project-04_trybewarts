const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const submitButton = document.querySelector('#submit-button');

function validateLogin(event) {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
    event.preventDefault();
    emailInput.value = '';
    passwordInput.value = '';
  }
}

submitButton.addEventListener('click', validateLogin);
