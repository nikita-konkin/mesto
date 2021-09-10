const showInputError = (formElement, inputElement, errorMessage) => {
  // console.log(inputElement.id)
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationClasses.inputErrorClass.substring(1));
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationClasses.errorClass.substring(1));
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationClasses.inputErrorClass.substring(1));
  errorElement.classList.remove(validationClasses.errorClass.substring(1));
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // console.log(inputElement)
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

function toggleButtonState(inputList, buttonElement){
  if (hasInvalidInput(inputList)) {

    buttonElement.classList.add(validationClasses.inactiveButtonClass.substring(1));
    buttonElement.classList.add('disabled');

  } else {

    buttonElement.classList.remove(validationClasses.inactiveButtonClass.substring(1));
    buttonElement.classList.remove('disabled');

  }
}

function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
     
    return !inputElement.validity.valid;

  })
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validationClasses.inputSelector));
  const buttonElement = formElement.querySelector(validationClasses.submitButtonSelector)
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {

      toggleButtonState(inputList, buttonElement);
      checkInputValidity(formElement, inputElement);
      
    });
  });
  const profileEditButton = document.querySelector('.profile__edit-button');
  profileEditButton.addEventListener('click',() => {toggleButtonState(inputList, buttonElement)})
};

const enableValidation = () => {

  const formList = Array.from(document.querySelectorAll(validationClasses.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    
    const fieldsetList = Array.from(formElement.querySelectorAll(validationClasses.formSet));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
    
  });
};

enableValidation();

