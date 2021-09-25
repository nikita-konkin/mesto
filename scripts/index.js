import {Card} from './card.js';
import {initialCards} from './cards.js';
import {FormValidator} from './formValidator.js'
import {validationClasses} from './validationSettings.js'

const profileName = document.querySelector('.profile__name');
const profileCareer = document.querySelector('.profile__career');

const formSubmitButton = document.querySelector('.form__submit');

const formProfile = document.querySelector('.form_type_profile');
const formProfileName = document.querySelector('.form__decription-input_type_profile-name');
const formProfileCareer = document.querySelector('.form__decription-input_type_profile-career');

const formPhoto = document.querySelector('.form_type_add-photo');
const formPhotoName = document.querySelector('.form__decription-input_type_photo-name');
const formPhotoLink = document.querySelector('.form__decription-input_type_photo-link');

const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileCloseButton = document.querySelector('.popup__close-button_type_profile');

const popupAddPhoto = document.querySelector('.popup_type_add-photo');
const popupAddPhotoCloseButton = document.querySelector('.popup__close-button_type_add-photo');

const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoCloseButton = document.querySelector('.popup-photo__close-button');

const popup = document.querySelector('.photo');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const template = document.querySelector('#element').content;
const container = document.querySelector('.elements');
container.textContent = '';

const popupPhotoImageElement = popupPhoto.querySelector('.popup-photo__img');
const popupPhotoTitleElement = popupPhoto.querySelector('.popup-photo__photo-descriprion');

const formList = Array.from(document.querySelectorAll(validationClasses.formSelector));

initialCards.forEach((data) => renderCard(data));

function renderCard(data){

	const card = new Card(data, template);
	container.prepend(card.cardCreate());

}

formList.forEach((formElement) => {

	const formValidation = new FormValidator(validationClasses, formElement);
	formValidation.enableValidation();
	profileEditButton.addEventListener('click', () => {formValidation.toggleButtonState()});
	formPhoto.addEventListener('submit', () => {formValidation.toggleButtonStateOnSubmit()});

});

function keyHandler(evt){

	
	if (evt.key === "Escape") {
		const popupOpened = document.querySelector('.popup_opened');
    	closePopup(popupOpened);
  }

}

function openPopup(popupId){

	popupId.classList.add('popup_opened');

	window.addEventListener('keydown', keyHandler);
	window.addEventListener('click',  closePopupByOverlay);

}

function closePopup(popup){

	popup.classList.remove('popup_opened');

	window.removeEventListener('click', closePopupByOverlay);
	window.removeEventListener('keydown', keyHandler);

}

function closePopupByOverlay(evt){

	if (Array.from(evt.target.classList).includes("popup")){

		closePopup(evt.target);

	}

}

export function handlePreviewPicture(name, link) {

    popupPhotoTitleElement.textContent = name;
    popupPhotoImageElement.src = link;
    popupPhotoImageElement.alt = name;
    openPopup(popupPhoto)

}

function openPopupEditProfile(){

	openPopup(popupProfile);

	formProfileName.value = profileName.textContent;
	formProfileCareer.value = profileCareer.textContent;

}

function openPopupAddProfilePhoto(){

	openPopup(popupAddPhoto);

}

function submitProfileForm(evt){
	evt.preventDefault();

	profileName.textContent = formProfileName.value;
	profileCareer.textContent = formProfileCareer.value;

	closePopup(popupProfile);
}

function submitAddPhotoForm(evt){
	evt.preventDefault();

	const data = ({name: formPhotoName.value, link: formPhotoLink.value});

	renderCard(data);

	formPhotoName.value = '';
	formPhotoLink.value = '';

	closePopup(popupAddPhoto);

}


profileEditButton.addEventListener('click',  openPopupEditProfile);
profileAddButton.addEventListener('click',  openPopupAddProfilePhoto);

popupProfileCloseButton.addEventListener('click', function() {closePopup(popupProfile)} );
popupAddPhotoCloseButton.addEventListener('click', function() {closePopup(popupAddPhoto)} );

formProfile.addEventListener('submit', submitProfileForm);
formPhoto.addEventListener('submit', submitAddPhotoForm);

popupPhotoCloseButton.addEventListener('click', evt => {closePopup(popupPhoto)});

