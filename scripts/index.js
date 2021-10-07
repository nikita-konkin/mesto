import {Card} from './card.js';
import {initialCards} from './cards.js';
import {FormValidator} from './formValidator.js'
import {validationClasses} from './validationSettings.js'
import {Section} from './Section.js'
import {Popup} from './Popup.js'

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

// const popup = document.querySelector('.photo');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const template = document.querySelector('#element').content;
const container = '.elements';

const popupPhotoImageElement = popupPhoto.querySelector('.popup-photo__img');
const popupPhotoTitleElement = popupPhoto.querySelector('.popup-photo__photo-descriprion');

const formList = Array.from(document.querySelectorAll(validationClasses.formSelector));

const editProfileValidator = new FormValidator(validationClasses, formProfile);
editProfileValidator.enableValidation();
const addCardValidator = new FormValidator(validationClasses, formPhoto);
addCardValidator.enableValidation();


const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, template);
    const cardElement = card.cardCreate();
    defaultCardList.addItem(cardElement);
  }
}, container);

defaultCardList.renderer();



// function keyHandler(evt){

	
// 	if (evt.key === "Escape") {
// 		const popupOpened = document.querySelector('.popup_opened');
//     	closePopup(popupOpened);
//   }

// }

// function openPopup(popupId){

	
// 	popupId.classList.add('popup_opened');

// 	window.addEventListener('keydown', keyHandler);
// 	window.addEventListener('click',  closePopupByOverlay);

// }

// function closePopup(popup){

// 	popup.classList.remove('popup_opened');

// 	window.removeEventListener('click', closePopupByOverlay);
// 	window.removeEventListener('keydown', keyHandler);

// }

// function closePopupByOverlay(evt){

// 	if (Array.from(evt.target.classList).includes("popup")){

// 		closePopup(evt.target);

// 	}

// }

export function handlePreviewPicture(name, link) {

    popupPhotoTitleElement.textContent = name;
    popupPhotoImageElement.src = link;
    popupPhotoImageElement.alt = name;
    // openPopup(popupPhoto)
    const popup = new Popup(popupPhoto);
    popup.open()

}

function openPopupEditProfile(){

	editProfileValidator.toggleButtonState();
	// openPopup(popupProfile);
	const popup = new Popup(popupProfile);
    popup.open()

	formProfileName.value = profileName.textContent;
	formProfileCareer.value = profileCareer.textContent;

}

function openPopupAddProfilePhoto(){

	// openPopup(popupAddPhoto);
	const popup = new Popup(popupAddPhoto);
    popup.open()

}

function submitProfileForm(evt){
	evt.preventDefault();

	profileName.textContent = formProfileName.value;
	profileCareer.textContent = formProfileCareer.value;

	// closePopup(popupProfile);
	const popup = new Popup(popupProfile);
    popup.close()
}

function submitAddPhotoForm(evt){
	evt.preventDefault();

	const data = ({name: formPhotoName.value, link: formPhotoLink.value});

	renderCard(data);

	formPhotoName.value = '';
	formPhotoLink.value = '';

	addCardValidator.disableSubmitButton();

	// closePopup(popupAddPhoto);
	const popup = new Popup(popupAddPhoto);
    popup.close()

}


profileEditButton.addEventListener('click',  openPopupEditProfile);
profileAddButton.addEventListener('click',  openPopupAddProfilePhoto);

// popupProfileCloseButton.addEventListener('click', function() {closePopup(popupProfile)} );
// popupAddPhotoCloseButton.addEventListener('click', function() {closePopup(popupAddPhoto)} );
const popupCloseProfile = new Popup(popupProfile);
popupCloseProfile.setEventListeners(popupProfileCloseButton)
const popupCloseAddPhoto = new Popup(popupAddPhoto);
popupCloseAddPhoto.setEventListeners(popupAddPhotoCloseButton)

formProfile.addEventListener('submit', submitProfileForm);
formPhoto.addEventListener('submit', submitAddPhotoForm);

// popupPhotoCloseButton.addEventListener('click', evt => {closePopup(popupPhoto)});
const popupClosePhoto = new Popup(popupPhoto);
popupClosePhoto.setEventListeners(popupPhotoCloseButton)

