
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

const popup = document.querySelector('.photo');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const template = document.querySelector('#element').content;
const container = document.querySelector('.elements');
container.textContent = '';


initialCards.forEach((data) => renderCard(createCard(data)));

function createCard(data){

	const elementTemplate = template.querySelector('.element').cloneNode(true);
	const elementRemove = elementTemplate.querySelector('.element__trash-button').closest("article");

	elementTemplate.querySelector('.element__user-photo').src = data.link;
	elementTemplate.querySelector('.element__user-photo').alt = data.name;
	elementTemplate.querySelector('.element__user-photo-text').textContent = data.name;

	function toggleLike(evt){
		elementTemplate.querySelector('.element__like').classList.toggle('element__like_liked');
	}

	elementTemplate.querySelector('.element__like').addEventListener('click', toggleLike);
	elementTemplate.querySelector('.element__trash-button').addEventListener('click', (evt) => {elementRemove.remove()});

	function photoToPopup(evt){
		popupPhoto.querySelector('.popup-photo__img').src = data.link;
		popupPhoto.querySelector('.popup-photo__photo-descriprion').textContent = data.name;
		openPopup(popupPhoto)
	}

	elementTemplate.querySelector('.element__user-photo').addEventListener('click', photoToPopup);

	return elementTemplate;

}

function renderCard(card){

	container.prepend(card);

}

function keyHandler(evt){
	const popupOpened = document.querySelector('.popup_opened');
	if (evt.key === "Escape") {
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
	window.removeEventListener('click', keyHandler);

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
	renderCard(createCard(data));

	formPhotoName.value = '';
	formPhotoLink.value = '';

	closePopup(popupAddPhoto);
}

function closePopupByOverlay(evt){

	if (Array.from(evt.target.classList).includes("popup")){

		closePopup(evt.target);

	}

}


profileEditButton.addEventListener('click',  openPopupEditProfile);
profileAddButton.addEventListener('click',  openPopupAddProfilePhoto);

popupProfileCloseButton.addEventListener('click', function() {closePopup(popupProfile)} );
popupAddPhotoCloseButton.addEventListener('click', function() {closePopup(popupAddPhoto)} );

formProfile.addEventListener('submit', submitProfileForm);
formPhoto.addEventListener('submit', submitAddPhotoForm);

popupPhotoCloseButton.addEventListener('click', evt => {closePopup(popupPhoto)});