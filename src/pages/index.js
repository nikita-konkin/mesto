import './index.css';

import {Card} from '../components/card.js';
import {initialCards} from '../utils/cards.js';
import {FormValidator} from '../components/formValidator.js'
import {validationClasses} from '../utils/validationSettings.js'
import {Section} from '../components/Section.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js'
import {UserInfo} from '../components/UserInfo.js'

import {profileName, profileCareer, formProfile, formProfileName, formProfileCareer,
				formPhoto, formPhotoName, formPhotoLink, popupProfile, popupProfileCloseButton,
				popupAddPhoto, popupAddPhotoCloseButton, popupPhoto, popupPhotoCloseButton,
				profileEditButton, profileAddButton, template,
				container, popupPhotoImageElement, popupPhotoTitleElement} from '../utils/constants.js'

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

function openPopupAddNewCard(){

  popupFormChangeProfile.open();

	formProfileName.value = userInfo.getUserInfo().name;
	formProfileCareer.value = userInfo.getUserInfo().career;

}

function openPopupAddProfilePhoto(){

  popupFormAddPhoto.open();
  
}

profileEditButton.addEventListener('click',  openPopupAddNewCard);
profileAddButton.addEventListener('click',  openPopupAddProfilePhoto);

