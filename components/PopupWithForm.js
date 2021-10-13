import {Popup} from './Popup.js'

export class PopupWithForm extends Popup{
	constructor(popupSelector, renderer, closeButton, toggleButtonState){
		super(popupSelector, closeButton);
		this._renderer = renderer;
		this._toggleButtonState = toggleButtonState;
	}

	_getInputValues(){

		this._inputList = Array.from(this._popupSelector.querySelectorAll('input'));
		return this._data = ({name: this._inputList[0].value, link: this._inputList[1].value})

	}

	setEventListeners(){
		
		this._popupSelector.addEventListener('submit', ()=>{this._renderer(this._getInputValues())});
		super.setEventListeners();

	}

	close(){
		
		this._getInputValues()
		this._inputList[0].value = '';
		this._inputList[1].value = '';
		this._toggleButtonState();
		super.close();

	}
}