import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const button = document.querySelector('.feedback-form button');

let formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
button.addEventListener('submit', throttle(onButtonSubmit, 500));
savedData();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onButtonSubmit(event) {
  event.preventDefault();
  const showLocalStorageData = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  console.log(showLocalStorageData);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function savedData() {
  const localStorageDataParse = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  console.log(localStorageDataParse);
  if (localStorageDataParse) {
    form.elements.email.value = localStorageDataParse.email;
    form.elements.message.value = localStorageDataParse.message;
  }
}
