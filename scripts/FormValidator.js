
class FormValidator{

	constructor(validationClasses, form){

		this._validationClasses = validationClasses;
		this._form = form;

		this._inputList = Array.from(this._form.querySelectorAll(this._validationClasses.inputSelector));
		this._buttonElement = this._form.querySelector(this._validationClasses.submitButtonSelector);

	}

	enableValidation(){

		this._form.addEventListener('submit', () => {event.preventDefault()})

		const fieldsetList = Array.from(this._form.querySelectorAll(this._validationClasses.formSet));
		fieldsetList.forEach((fieldSet) => {

			this._setEventListeners(fieldSet);

		});
	};

	_showInputError(inputElement, errorMessage){

	  const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
	  inputElement.classList.add(this._validationClasses.inputErrorClass);
	  errorElement.textContent = errorMessage;
	  errorElement.classList.add(this._validationClasses.errorClass);

	};

	_hideInputError(inputElement){

	  const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
	  inputElement.classList.remove(this._validationClasses.inputErrorClass);
	  errorElement.classList.remove(this._validationClasses.errorClass);
	  errorElement.textContent = '';

	};

	_checkInputValidity(inputElement){

	  if (!inputElement.validity.valid) {
	    this._showInputError(inputElement, inputElement.validationMessage);
	  } else {
	    this._hideInputError(inputElement);
	  }

	};

	toggleButtonState(){

	  if (this._hasInvalidInput()) {
	    this._buttonElement.classList.add(this._validationClasses.inactiveButtonClass);
	    this._buttonElement.classList.add('disabled');
	  } else {
	    this._buttonElement.classList.remove(this._validationClasses.inactiveButtonClass);
	    this._buttonElement.classList.remove('disabled');
	  }

	}

	_hasInvalidInput(){

	  return this._inputList.some((inputElement) => {
	     
	    return !inputElement.validity.valid;

	  })

	}

	_setEventListeners(){

	  this.toggleButtonState();
	  this._inputList.forEach((inputElement) => {
	    inputElement.addEventListener('input', () => {

	      this.toggleButtonState();
	      this._checkInputValidity(inputElement);
	      
	    });
	  });

	};

}

export {FormValidator}