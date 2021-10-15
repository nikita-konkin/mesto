import {Popup} from './Popup.js'

export class PopupWithForm extends Popup{
	constructor(popupSelector, renderer, closeButton, toggleButtonState){
		super(popupSelector, closeButton);
		this._renderer = renderer;
		this._toggleButtonState = toggleButtonState;
		this._popupForm = document.getElementById("photo-edit-form");
	}

	_getInputValues(){

		this._newObject = {}
		this._popupSelector.querySelectorAll('input').forEach(element => this._newObject[element.name] = element.value);

		return this._newObject

	}

	setEventListeners(){
		
		this._popupSelector.addEventListener('submit', ()=>{this._renderer(this._getInputValues())});
		super.setEventListeners();

	}

	close(){

		this._popupForm.reset();
		this._toggleButtonState();
		super.close();

	}
}