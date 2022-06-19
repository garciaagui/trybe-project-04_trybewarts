// Declaração das Variáveis;
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#submit-button');
const mainContent = document.getElementsByTagName('main')[0];
const evaluationForm = document.querySelector('#evaluation-form');
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

function checkPersonalInfoFill() {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  if (name.length === 0 || lastName.length === 0 || email.length === 0) {
    window.alert('Verifique se os campos Nome, Sobrenome e Email foram preenchidos.');
    return false;
  } return true;
}

function checkFamilySelection() {
  const families = document.getElementsByName('family');
  let checks = 0;
  for (let i = 0; i < families.length; i += 1) {
    if (families[i].checked === false) {
      checks += 1;
    }
  }
  if (checks === families.length) {
    window.alert('Verifique se a Família foi selecionada.');
    return false;
  } return true;
}

function checkSubjectsSelection() {
  const subjects = document.querySelectorAll('.subject');
  let checks = 0;
  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked === false) {
      checks += 1;
    }
  }
  if (checks === subjects.length) {
    window.alert('Verifique se ao menos um conteúdo foi selecionado.');
    return false;
  } return true;
}

function checkEvaluationSelection() {
  const rates = document.getElementsByName('rate');
  let checks = 0;
  for (let i = 0; i < rates.length; i += 1) {
    if (rates[i].checked === false) {
      checks += 1;
    }
  }
  if (checks === rates.length) {
    window.alert('Verifique se uma nota foi selecionada.');
    return false;
  } return true;
}

function checkFills() {
  const a = checkPersonalInfoFill();
  const b = checkFamilySelection();
  const c = checkSubjectsSelection();
  const d = checkEvaluationSelection();
  if (a === false || b === false || c === false || d === false) {
    return false;
  } return true;
}

function getFullName(form) {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const fullName = `${name} ${lastName}`;
  const fullNameParagraph = document.createElement('p');
  fullNameParagraph.innerHTML = `Nome: ${fullName}`;
  form.appendChild(fullNameParagraph);
}

function getEmail(form) {
  const email = document.querySelector('#input-email').value;
  const emailParagraph = document.createElement('p');
  emailParagraph.innerHTML = `Email: ${email}`;
  form.appendChild(emailParagraph);
}

function getHouse(form) {
  const houses = document.querySelectorAll('.houses');
  const selectedHouseParagraph = document.createElement('p');
  for (let i = 0; i < houses.length; i += 1) {
    if (houses[i].selected === true) {
      const selectedHouse = houses[i].value;
      selectedHouseParagraph.innerHTML = `Casa: ${selectedHouse}`;
    }
  }
  form.appendChild(selectedHouseParagraph);
}

function getFamily(form) {
  const families = document.getElementsByName('family');
  const selectedFamilyParagraph = document.createElement('p');
  for (let i = 0; i < families.length; i += 1) {
    if (families[i].checked === true) {
      const selectedFamily = families[i].value;
      selectedFamilyParagraph.innerHTML = `Família: ${selectedFamily}`;
    }
  }
  form.appendChild(selectedFamilyParagraph);
}

function getSubjects(form) {
  const subjects = document.querySelectorAll('.subject');
  const selectedSubjects = [];
  const selectedSubjectsParagraph = document.createElement('p');
  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked === true) {
      selectedSubjects.push(` ${subjects[i].value}`);
    }
  }
  selectedSubjectsParagraph.innerHTML = `Matérias: ${selectedSubjects}`;
  form.appendChild(selectedSubjectsParagraph);
}

function getEvaluation(form) {
  const rates = document.getElementsByName('rate');
  const selectedRateParagraph = document.createElement('p');
  for (let i = 0; i < rates.length; i += 1) {
    if (rates[i].checked === true) {
      const selectedRate = rates[i].value;
      selectedRateParagraph.innerHTML = `Avaliação: ${selectedRate}`;
    }
  }
  form.appendChild(selectedRateParagraph);
}

function getComment(form) {
  const comment = document.querySelector('#textarea').value;
  const commentParagraph = document.createElement('p');
  commentParagraph.innerHTML = `Observações: ${comment}`;
  form.appendChild(commentParagraph);
}

function switchForm() {
  const dataForm = document.createElement('form');
  dataForm.setAttribute('id', 'form-data');
  mainContent.appendChild(dataForm);
  getFullName(dataForm);
  getEmail(dataForm);
  getHouse(dataForm);
  getFamily(dataForm);
  getSubjects(dataForm);
  getEvaluation(dataForm);
  getComment(dataForm);
}

// Ativação das Funções
window.addEventListener('load', () => {
  submitButton.disabled = true;
  counterArea.innerHTML = `Caracteres restantes: ${counter}.`;
});

loginButton.addEventListener('click', validateLogin);

commentTextArea.addEventListener('keyup', () => {
  const textAreaContent = commentTextArea.value.length;
  counter = 500 - textAreaContent;
  counterArea.innerHTML = `Caracteres restantes: ${counter}.`;
});

agreementCheck.addEventListener('click', () => {
  if (agreementCheck.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

submitButton.addEventListener('click', (e) => {
  if (checkFills() === true) {
    e.preventDefault();
    evaluationForm.style.display = 'none';
    switchForm();
  } else {
    e.preventDefault();
  }
});
