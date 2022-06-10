// Declaração das Variáveis;
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#submit-button');
const agreementCheck = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const commentTextArea = document.querySelector('#textarea');
let counter = 500;
const counterArea = document.querySelector('#counter');

// Declaração das Funções;
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

// Ativação das Funções
window.addEventListener('load', () => {
  submitButton.disabled = true;
  counterArea.innerHTML = counter;
});

loginButton.addEventListener('click', validateLogin);

commentTextArea.addEventListener('keyup', () => {
  const textAreaContent = commentTextArea.value.length;
  counter = 500 - textAreaContent;
  counterArea.innerHTML = counter;
});

agreementCheck.addEventListener('click', () => {
  if (agreementCheck.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
