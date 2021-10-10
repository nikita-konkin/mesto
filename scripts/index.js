import {Card} from './card.js';
import {initialCards} from './cards.js';
import {FormValidator} from './formValidator.js'
import {validationClasses} from './validationSettings.js'
import {Section} from './Section.js'
import {Popup} from './Popup.js'
import {PopupWithImage} from './PopupWithImage.js'
import {PopupWithForm} from './PopupWithForm.js'
import {UserInfo} from './UserInfo.js'

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

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const template = document.querySelector('#element').content;
const container = '.elements';

const popupPhotoImageElement = '.popup-photo__img';
const popupPhotoTitleElement = '.popup-photo__photo-descriprion';


const editProfileValidator = new FormValidator(validationClasses, formProfile);
editProfileValidator.enableValidation();
const addCardValidator = new FormValidator(validationClasses, formPhoto);
addCardValidator.enableValidation();

const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, template, 
    	(name, link) => {
  		  const popupWithImage = new PopupWithImage(popupPhoto, name, link, popupPhotoImageElement, popupPhotoTitleElement);
				popupWithImage.open();
    	});
    const cardElement = card.cardCreate();
    defaultCardList.addItem(cardElement);
  }
}, container);
defaultCardList.renderer();

const userInfo = new UserInfo(profileName, profileCareer);
userInfo.setUserInfo('Джек Салли', 'Житель Пандоры');

const popupCloseProfile = new Popup(popupProfile);
popupCloseProfile.setEventListeners(popupProfileCloseButton);
const popupCloseAddPhoto = new Popup(popupAddPhoto);
popupCloseAddPhoto.setEventListeners(popupAddPhotoCloseButton);
const popupClosePhoto = new Popup(popupPhoto);
popupClosePhoto.setEventListeners(popupPhotoCloseButton);

const popupFormPhoto = new PopupWithForm(popupAddPhoto,
	{name: formPhotoName, link: formPhotoLink},
	(data) => {defaultCardList.rendererAdditionalCard(data)},
	() => {addCardValidator.disableSubmitButton()})
popupFormPhoto.setEventListeners();

const popupFormProfile = new PopupWithForm(popupProfile,
	{name:formProfileName, link: formProfileCareer},
	(data) => {
		profileName.textContent = data.name;
		profileCareer.textContent = data.link;}
	)
popupFormProfile.setEventListeners();

function openPopupEditProfile(){

	editProfileValidator.toggleButtonState();

	const popup = new Popup(popupProfile);
  popup.open();

	formProfileName.value = userInfo.getUserInfo().name;
	formProfileCareer.value = userInfo.getUserInfo().career;

}

function openPopupAddProfilePhoto(){

	const popup = new Popup(popupAddPhoto);
  popup.open();
  
}

profileEditButton.addEventListener('click',  openPopupEditProfile);
profileAddButton.addEventListener('click',  openPopupAddProfilePhoto);

