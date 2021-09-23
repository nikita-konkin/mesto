// const popupPhoto = document.querySelector('.popup-photo');
// const popupPhotoCloseButton = document.querySelector('.popup-photo__close-button');
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
    	this._elementTemplate
    	.querySelector('.element__user-photo').addEventListener('click',  () => {this._photoToPopup()});
    	this._popupPhotoCloseButton.
    	addEventListener('click', () => {this._closePopup(this._popupPhoto)});
    };

	_toggleLike(){

		this._elementTemplate.querySelector('.element__like').classList.toggle('element__like_liked');
	}

	_photoToPopup(){
		this._popupPhoto.querySelector('.popup-photo__img').src = this._data.link;
		this._popupPhoto.querySelector('.popup-photo__photo-descriprion').textContent = this._data.name;
		this._openPopup(this._popupPhoto)
	}

	_openPopup(popupId){

		popupId.classList.add('popup_opened');
		// console.log(this._popupPhoto)
		

		document.addEventListener('keydown', keyHandler = this._keyHandler.bind(this));
		document.addEventListener('click',  closePopupByOverlay = this._closePopupByOverlay.bind(this));

	}

	_keyHandler(){
		const popupOpened = document.querySelector('.popup_opened');
		if (event.key === "Escape") {
			// console.log(popupOpened)
			this._closePopup(popupOpened);
		}
	}

	_closePopup(popup){

		popup.classList.remove('popup_opened');

		document.removeEventListener('click', closePopupByOverlay);
		document.removeEventListener('keydown', keyHandler);

	}

	_closePopupByOverlay(){

		if (Array.from(event.target.classList).includes("popup")){

			this._closePopup(event.target);

		}

	}

}


export {Card}