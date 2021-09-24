
class FormValidator{
	constructor(validationClasses, form){
		this._validationClasses = validationClasses;
		this._form = form;
	}

	enableValidation(){

		this._form.addEventListener('submit', () => {event.preventDefault()})

		const fieldsetList = Array.from(this._form.querySelectorAll(this._validationClasses.formSet));
		fieldsetList.forEach((fieldSet) => {

			this._setEventListeners(fieldSet);

		});
	};

	_showInputError(formElement, inputElement, errorMessage){

	  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	  inputElement.classList.add(this._validationClasses.inputErrorClass);
	  errorElement.textContent = errorMessage;
	  errorElement.classList.add(this._validationClasses.errorClass);

	};

	_hideInputError(formElement, inputElement){

	  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	  inputElement.classList.remove(this._validationClasses.inputErrorClass);
	  errorElement.classList.remove(this._validationClasses.errorClass);
	  errorElement.textContent = '';

	};

	_checkInputValidity(formElement, inputElement){

	  if (!inputElement.validity.valid) {
	    this._showInputError(formElement, inputElement, inputElement.validationMessage);
	  } else {
	    this._hideInputError(formElement, inputElement);
	  }

	};

	_toggleButtonState(inputList, buttonElement){

	  if (this._hasInvalidInput(inputList)) {
	    buttonElement.classList.add(this._validationClasses.inactiveButtonClass);
	    buttonElement.classList.add('disabled');
	  } else {
	    buttonElement.classList.remove(this._validationClasses.inactiveButtonClass);
	    buttonElement.classList.remove('disabled');
	  }

	}

	_hasInvalidInput(inputList){

	  return inputList.some((inputElement) => {
	     
	    return !inputElement.validity.valid;

	  })

	}

	_setEventListeners(formElement){

	  const inputList = Array.from(formElement.querySelectorAll(this._validationClasses.inputSelector));
	  const buttonElement = formElement.querySelector(this._validationClasses.submitButtonSelector)
	  this._toggleButtonState(inputList, buttonElement);
	  inputList.forEach((inputElement) => {
	    inputElement.addEventListener('input', () => {

	      this._toggleButtonState(inputList, buttonElement);
	      this._checkInputValidity(formElement, inputElement);
	      
	    });
	  });
	  const profileEditButton = document.querySelector('.profile__edit-button');
	  profileEditButton.addEventListener('click',() => {this._toggleButtonState(inputList, buttonElement)})
	};

}

export {FormValidator}