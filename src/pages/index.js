import './index.css';
import {Card} from '../components/card.js';
// import {initialCards} from '../utils/cards.js';
import {FormValidator} from '../components/formValidator.js'
import {validationClasses} from '../utils/validationSettings.js'
import {Section} from '../components/Section.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js'
import {PopupWithConfirmation} from '../components/PopupWithConfirmation.js'
import {UserInfo} from '../components/UserInfo.js'
import {Api} from '../components/Api.js'

import {container, popupPhotoImageElement, popupPhotoTitleElement} from '../utils/constants.js'

const profileName = document.querySelector('.profile__name');
const profileCareer = document.querySelector('.profile__career');

const formProfile = document.querySelector('.form_type_profile');
const formProfileName = document.querySelector('.form__decription-input_type_profile-name');
const formProfileCareer = document.querySelector('.form__decription-input_type_profile-career');

const formPhoto = document.querySelector('.form_type_add-photo');
const formPhotoName = document.querySelector('.form__decription-input_type_photo-name');
const formPhotoLink = document.querySelector('.form__decription-input_type_photo-link');

const formAvatar = document.querySelector('.form_type_avatar-edit');

const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileCloseButton = document.querySelector('.popup__close-button_type_profile');

const popupAddPhoto = document.querySelector('.popup_type_add-photo');
const popupAddPhotoCloseButton = document.querySelector('.popup__close-button_type_add-photo');

const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoCloseButton = document.querySelector('.popup-photo__close-button');

const popupTypeConfirm = document.querySelector('.popup_type_confirm')
const popupTypeConfirmCloseButton = document.querySelector('.popup__close-button_type_confirm')

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const profileEditAvatarButton = document.querySelector('.profile__avatar-edit');
const profileAvatar = document.querySelector('.profile__avatar');
const profileAvatarCloseButton = document.querySelector('.popup__close-button_avatar-edit');
const popupEditAvatar = document.querySelector('.popup_type_avatar-edit');

const elementTrashButton = document.querySelector('.element__trash-button')
const template = document.querySelector('#element').content;

function openPopupEditProfile(){
  popupFormChangeProfile.open();
	formProfileName.value = userInfo.getUserInfo().name;
	formProfileCareer.value = userInfo.getUserInfo().career;
}

function openPopupAddNewCard(){
  popupFormAddPhoto.open();
}

function openPopupEditAvatar(){
	popupFormEditAvatar.open();
}

const api = new Api({
  cardsUrl: 'https://mesto.nomoreparties.co/v1/cohort-29/cards',
  avatarsUrl: 'https://mesto.nomoreparties.co/v1/cohort-29/users/me/avatar',
  profileUrl: 'https://mesto.nomoreparties.co/v1/cohort-29/users/me',
  likesUrl: 'https://mesto.nomoreparties.co/v1/cohort-29/cards/likes',
  headers: {
    authorization: '6dcc8eb5-b36f-4e58-925f-68f8caf1b64a',
    'Content-Type': 'application/json'
  }
});

const editProfileValidator = new FormValidator(validationClasses, formProfile);
editProfileValidator.enableValidation();
const addCardValidator = new FormValidator(validationClasses, formPhoto);
addCardValidator.enableValidation();
const formAvatarValidator = new FormValidator(validationClasses, formAvatar);
formAvatarValidator.enableValidation();

const popupWithImage = new PopupWithImage(popupPhoto,
	popupPhotoImageElement, popupPhotoTitleElement, popupPhotoCloseButton);
popupWithImage.setEventListeners();


const card = new Card(template,
	(name, link) => {
		popupWithImage.open(name, link);
	},
	api,
	{handleDeleteIconClick: (elementTemplate) => {
			event.preventDefault();
			const popupWithConfirmation = new PopupWithConfirmation(popupTypeConfirm,
			popupTypeConfirmCloseButton, elementTemplate.path[1], api)
			popupWithConfirmation.setEventListeners()
			popupWithConfirmation.open()

		}}
	);

const initialCards = api.getInitialCards()
initialCards.then(cards =>  {
	
	const defaultCardList = new Section({
  data: cards,
  renderer: (item) => {
    const cardElement = card.cardCreate(item);
    defaultCardList.addItem(cardElement);
  }
	}, container);

	defaultCardList.renderer();
})

const userInfo = new UserInfo(profileName, profileCareer, profileAvatar);
const profileInfo = api.getProfileData()
profileInfo.then(info => {
	userInfo.setUserInfo(info.name, info.about);
	userInfo.setUserAvatar(info.avatar);
})

const popupFormEditAvatar = new PopupWithForm(
	popupEditAvatar,
	(link) => {	event.preventDefault();
              popupEditAvatar.querySelector('.form__submit').textContent = 'Сохранение...';
							api.patchAvatar(link.link)
							.then(res => {
								setTimeout(function() {
									profileAvatar.src = res.avatar
								  popupEditAvatar.querySelector('.form__submit').textContent = 'Сохранить';
								  popupFormEditAvatar.close()
								}, 2000);
							})
							},
	profileAvatarCloseButton,
	() => {formAvatarValidator.toggleButtonState()}
	)
popupFormEditAvatar.setEventListeners();

const popupFormAddPhoto = new PopupWithForm(
	popupAddPhoto,
	(data) => {	api.postCard(data.name, data.link)
							.then(res => {defaultCardList.rendererAdditionalCard(res)});
							popupFormAddPhoto.close();
						},
	popupAddPhotoCloseButton,
	() => {addCardValidator.toggleButtonState()})
popupFormAddPhoto.setEventListeners();

const popupFormChangeProfile = new PopupWithForm(
	popupProfile,
	(data) => {	popupProfile.querySelector('.form__submit').textContent = 'Сохранение...';
							api.patchUserInfo(data.name, data.career)
							.then(res => {
								setTimeout(function() {
									userInfo.setUserInfo(res.name, res.about)
									popupFormChangeProfile.close()
									popupProfile.querySelector('.form__submit').textContent = 'Сохранить';
									}, 2000) 
							});
							},
	popupProfileCloseButton,
	() => {addCardValidator.toggleButtonState()})
popupFormChangeProfile.setEventListeners();



profileEditButton.addEventListener('click', openPopupEditProfile);
profileAddButton.addEventListener('click', openPopupAddNewCard);
profileEditAvatarButton.addEventListener('click', openPopupEditAvatar)

