import {Popup} from './Popup.js'

export class PopupWithImage extends Popup{
	constructor(popupSelector, name, link, popupPhotoImageSelector, popupPhotoTitleSelector){
		super(popupSelector);
		this._name = name;
		this._link = link;
		this._photoSelector = popupSelector.querySelector(popupPhotoTitleSelector);
		this._titleSelector = popupSelector.querySelector(popupPhotoImageSelector);
	
	}

	open(){

	    this._photoSelector.textContent = this._name;
	    this._titleSelector.src = this._link;
	    this._titleSelector.alt = this._name;
		super.open();

	}
}