import {handlePreviewPicture} from './index.js';

let keyHandler;
let closePopupByOverlay;

class Card{

	constructor(data, template){
		
		this._data = data;
		this._template = template;
	}

	_getTemplate() {

		this._elementTemplate = this._template.querySelector('.element').cloneNode(true);
		this._popupPhotoCloseButton = document.querySelector('.popup-photo__close-button');
		this._popupPhoto = document.querySelector('.popup-photo');

	}

	cardCreate(){

		this._getTemplate()
		this._elementTemplate.querySelector('.element__user-photo').src = this._data.link;
		this._elementTemplate.querySelector('.element__user-photo').alt = this._data.name;
		this._elementTemplate.querySelector('.element__user-photo-text').textContent = this._data.name;
		this._setEventListeners();

		return this._elementTemplate
	}

	_setEventListeners() {

		this._elementTemplate
		.querySelector('.element__like').addEventListener('click',  () => {this._toggleLike()});
		this._elementTemplate
		.querySelector('.element__trash-button').addEventListener('click', () => {this._elementTemplate.remove()});
		this._elementTemplate.
		querySelector('.element__user-photo').addEventListener('click', () => {handlePreviewPicture(this._data.name, this._data.link)})

    };

	_toggleLike(){

		this._elementTemplate.querySelector('.element__like').classList.toggle('element__like_liked');
	}

}


export {Card}