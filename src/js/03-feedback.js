import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', throttle(onFormSubmit, 500));
input.addEventListener('input', throttle(onFormInput, 500));
textarea.addEventListener('input', throttle(onFormInput, 500));

savedData();

function onFormInput() {
  const formData = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function savedData() {
  const localStorageDataParsed = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (localStorageDataParsed) {
    input.value = localStorageDataParsed.email;
  }
  if (localStorageDataParsed) {
    textarea.value = localStorageDataParsed.message;
  }
}
