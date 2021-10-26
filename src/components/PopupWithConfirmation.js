import {Popup} from './Popup.js'

export class PopupWithConfirmation extends Popup{
	constructor(popupSelector, closeButton){
		super(popupSelector, closeButton);
	}
}