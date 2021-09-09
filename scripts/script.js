
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
const container = document.querySelector('.elements');
container.textContent = '';

const inputDescription = document.querySelector('.form__decription-input');
const popup = document.querySelector('.popup');

const initialCards = [

  {
    name: 'Она',
    link: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iQd9BBvgU_DU/v1/1000x-1.jpg'
  },
  {
    name: 'Пандора',
    link: 'https://www.vfxvoice.com/wp-content/uploads/2018/06/PIX-3-Avatar-Flight-of-Passage-Scene-E.jpg'
  },
  {
    name: 'Гиагнтысие медузы',
    link: 'https://thumb.spokesman.com/byon-p8oC8HNoj80DvpTNR8ztKc=/2500x1875/smart/media.spokesman.com/photos/2017/05/13/TRAVEL_UST-DISNEY-PANDORA_9_LA_LvY02dP.jpg'
  },
  {
    name: 'Левитирующие горы',
    link: 'https://images4.alphacoders.com/758/thumb-1920-75844.jpg'
  },
  {
    name: 'Медузка',
    link: 'http://www.designbordeaux.com/upload/snimki/cool-wallpaper-avatar-movie-hd-3d-012.jpg'
  },
  {
    name: 'Я и медузки',
    link: 'https://cutewallpaper.org/21/avatar-hd]/Avatar-HD-Wallpapers-7wallpapers.net.jpg'
  }

];

initialCards.forEach((data) => renderCard(createCard(data)));

function createCard(data){

	const elementTemplate = template.querySelector('.element').cloneNode(true);
	
	elementTemplate.querySelector('.element__user-photo').src = data.link;
	elementTemplate.querySelector('.element__user-photo-text').textContent = data.name;

	elementTemplate.querySelector('.element__like').addEventListener('click', function(evt){

		elementTemplate.querySelector('.element__like').classList.toggle('element__like_liked');

	});

	elementTemplate.querySelector('.element__trash-button').addEventListener('click', function(evt){

		let elementRemove = elementTemplate.querySelector('.element__trash-button').closest("article");
		elementRemove.remove();

	});

	popupPhotoCloseButton.addEventListener('click', function(evt){
			closePopup(popupPhoto);
	});

	elementTemplate.querySelector('.element__user-photo').addEventListener('click', function(evt){

		const photo = elementTemplate.querySelector('.element__user-photo').src;
		const photoDescription = elementTemplate.querySelector('.element__user-photo-text').textContent;
		popupPhoto.querySelector('.popup-photo__img').src = photo;
		popupPhoto.querySelector('.popup-photo__photo-descriprion').textContent = photoDescription;

		openPopup(popupPhoto)

	});

	return elementTemplate;

}

function renderCard(card){

	container.prepend(card);

}

function openPopup(popupId){

	popupId.classList.add('popup_opened');

}

function closePopup(popup){

	popup.classList.remove('popup_opened');

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

	closePopup(popupAddPhoto);
}

function closePopupByOverlay(evt){

	if (Array.from(evt.target.classList).includes("popup_type_profile")){
		closePopup(popupProfile);
	} else if(Array.from(evt.target.classList).includes("popup_type_add-photo")){
		closePopup(popupAddPhoto);
	}

}

function keyHandler(evt){
console.log(evt.key)
 if (evt.key === "Escape") {
    closePopup(popupProfile);
    closePopup(popupAddPhoto);
  }

}


profileEditButton.addEventListener('click',  openPopupEditProfile);
profileAddButton.addEventListener('click',  openPopupAddProfilePhoto);

popupProfileCloseButton.addEventListener('click', function() {closePopup(popupProfile)} );
popupAddPhotoCloseButton.addEventListener('click', function() {closePopup(popupAddPhoto)} );

window.addEventListener('click', closePopupByOverlay);

formProfile.addEventListener('submit', submitProfileForm);
formPhoto.addEventListener('submit', submitAddPhotoForm);

window.addEventListener('keydown', keyHandler);


