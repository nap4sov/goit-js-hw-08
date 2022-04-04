import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form')
const feedbackFormData = {};
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
        localStorage.removeItem(FORM_DATA_KEY);
    }
    
    evt.target.reset();
}

function populateFormInputAreas() {
    const storedFormDataObject = JSON.parse(localStorage.getItem(FORM_DATA_KEY));
    if (storedFormDataObject) {
        feedbackFormRef.email.value = storedFormDataObject.email;
        feedbackFormRef.message.value = storedFormDataObject.message;
    }
}

