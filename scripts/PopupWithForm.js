import {Popup} from './Popup.js'

export class PopupWithForm extends Popup{
	constructor(popupSelector, {name, link}, renderer, validator){
		super(popupSelector);
		this._name = name;
		this._link = link;
		this._renderer = renderer;
		this._validator = validator;
	}

	_getInputValues(){

		return this._data = ({name: this._name.value, link: this._link.value})

	}

	setEventListeners(){

		this._popupSelector.addEventListener('submit', ()=>{this._renderer(this._getInputValues())});
		this._popupSelector.addEventListener('submit', ()=>{this._validator});
		this._popupSelector.addEventListener('submit', ()=>{this.close()});

	}

	close(){
		
		this._name.value = '';
		this._link.value = '';
		super.close();

	}
}