document.querySelector('.login-btn').addEventListener('click', () => {
  const imputEmail = document.querySelector('input[name="email"]');
  const imputPassword = document.querySelector('input[name="password"]');

  if (imputEmail.value === 'tryber@teste.com' && imputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const button = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

button.disabled = true;

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});
