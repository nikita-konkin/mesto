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
const container = '.elements';

const popupPhotoImageElement = '.popup-photo__img';
const popupPhotoTitleElement = '.popup-photo__photo-descriprion';

export {profileName, profileCareer, formProfile, formProfileName, formProfileCareer,
				formPhoto, formPhotoName, formPhotoLink, popupProfile, popupProfileCloseButton,
				popupAddPhoto, popupAddPhotoCloseButton, popupPhoto, popupPhotoCloseButton,
				profileEditButton, profileAddButton, template,
				container, popupPhotoImageElement, popupPhotoTitleElement}