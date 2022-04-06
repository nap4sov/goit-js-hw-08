import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form')
let feedbackFormData = {};

const FORM_DATA_KEY = "feedback-form-state";

populateFormInputAreas();

feedbackFormRef.addEventListener('input', throttle(onFormInput, 500));
feedbackFormRef.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    feedbackFormData[evt.target.name] = evt.target.value;

    localStorage.setItem(FORM_DATA_KEY, JSON.stringify(feedbackFormData));
}

function onFormSubmit(evt) {
    evt.preventDefault();

    const storedFormDataObject = JSON.parse(localStorage.getItem(FORM_DATA_KEY));
    if (storedFormDataObject) {
        console.log(storedFormDataObject); 
    }

    resetLocalStorage(evt)
}

function populateFormInputAreas() {
    const storedFormDataObject = JSON.parse(localStorage.getItem(FORM_DATA_KEY));

    if (storedFormDataObject?.email) {
        feedbackFormRef.email.value = storedFormDataObject.email;
    }
    if (storedFormDataObject?.message) {
        feedbackFormRef.message.value = storedFormDataObject.message;
    }
}

function resetLocalStorage(evt) {
    localStorage.removeItem(FORM_DATA_KEY);

    evt.target.reset();

    feedbackFormData = {};
}