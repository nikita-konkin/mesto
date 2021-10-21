import './index.css';
import {Card} from '../components/card.js';
import {initialCards} from '../utils/cards.js';
import {FormValidator} from '../components/formValidator.js'
import {validationClasses} from '../utils/validationSettings.js'
import {Section} from '../components/Section.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js'
import {UserInfo} from '../components/UserInfo.js'

import {container, popupPhotoImageElement, popupPhotoTitleElement} from '../utils/constants.js'

const profileName = document.querySelector('.profile__name');
const profileCareer = document.querySelector('.profile__career');

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

function openPopupEditProfile(){

  popupFormChangeProfile.open();

	formProfileName.value = userInfo.getUserInfo().name;
	formProfileCareer.value = userInfo.getUserInfo().career;

}

function openPopupAddNewCard(){

  popupFormAddPhoto.open();
  
}

const editProfileValidator = new FormValidator(validationClasses, formProfile);
editProfileValidator.enableValidation();
const addCardValidator = new FormValidator(validationClasses, formPhoto);
addCardValidator.enableValidation();

const popupWithImage = new PopupWithImage(popupPhoto,
	popupPhotoImageElement, popupPhotoTitleElement, popupPhotoCloseButton);
popupWithImage.setEventListeners();

const card = new Card(template, 
	(name, link) => {
		popupWithImage.open(name, link);
	});

const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = card.cardCreate(item);
    defaultCardList.addItem(cardElement);
  }
}, container);
defaultCardList.renderer();

const userInfo = new UserInfo(profileName, profileCareer);
userInfo.setUserInfo('Джек Салли', 'Житель Пандоры');

const popupFormAddPhoto = new PopupWithForm(
	popupAddPhoto,
	(data) => {defaultCardList.rendererAdditionalCard(data);
						popupFormAddPhoto.close()},
	popupAddPhotoCloseButton,
	() => {addCardValidator.toggleButtonState()})
popupFormAddPhoto.setEventListeners();

const popupFormChangeProfile = new PopupWithForm(
	popupProfile,
	(data) => {userInfo.setUserInfo(data.name, data.career);
						popupFormChangeProfile.close()},
	popupProfileCloseButton,
	() => {addCardValidator.toggleButtonState()})
popupFormChangeProfile.setEventListeners();



profileEditButton.addEventListener('click', openPopupEditProfile);
profileAddButton.addEventListener('click', openPopupAddNewCard);

