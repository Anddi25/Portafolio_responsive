const form = document.querySelector('.form-container form');
const fields = form.querySelectorAll('input, textarea');
const emailInput = form.querySelector('input[type="email"]');
const errorMessages = form.querySelectorAll('.error-message');

form.addEventListener('submit', function (event) {
  let isValid = true;
    errorMessages.forEach(msg => msg.textContent = '');
    fields.forEach(field => field.classList.remove('invalid'));
    fields.forEach((field, index) => {
      const errorMsg = errorMessages[index];
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('invalid');
        errorMsg.textContent = `${field.placeholder || 'Este campo'} es requerido.`;
      } else if (field.name === 'email' && field.value !== field.value.toLowerCase()) {
        isValid = false;
        field.classList.add('invalid');
        errorMsg.textContent = 'El correo debe estar en minúsculas.';
      }
    });
    if (!isValid) {
      event.preventDefault();
    }
});

const forma = document.querySelector('form');
const inputs = forma.querySelectorAll('input[type="text"], input[type="email"], textarea');
window.addEventListener('DOMContentLoaded', () => {
    inputs.forEach(input => {
        const saved = localStorage.getItem(input.name);
        if (saved) input.value = saved;
    }); 
});
inputs.forEach(input => {
input.addEventListener('input', () => {
    localStorage.setItem(input.name, input.value);
});
});
forma.addEventListener('submit', () => {
inputs.forEach(input => localStorage.removeItem(input.name));
});
