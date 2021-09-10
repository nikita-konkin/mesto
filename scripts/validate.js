const showInputError = (formElement, inputElement, errorMessage) => {
  // console.log(inputElement.id)
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
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

    buttonElement.classList.add('form__submit_inactive');

  } else {

    buttonElement.classList.remove('form__submit_inactive');

  }
};

function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
     
    return !inputElement.validity.valid;

  })
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__decription-input'));
  const buttonElement = formElement.querySelector('.form__submit')
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
  const formList = Array.from(document.querySelectorAll('.form'));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
    
  });
};

enableValidation();

