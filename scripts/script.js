
const profileName = document.querySelector('.profile__name');
const profileCareer = document.querySelector('.profile__career');

const formProfile = document.querySelector('.form-profile');
const formProfileName = document.querySelector('.form-profile__decription-input_type_name');
const formProfileCareer = document.querySelector('.form-profile__decription-input_type_career');

const formPhoto = document.querySelector('.form-photo');
const formPhotoName = document.querySelector('.form-photo__decription-input_type_name');
const formPhotoLink = document.querySelector('.form-photo__decription-input_type_link');

const popupProfile = document.querySelector('.popup-profile');
const popupProfileCloseButton = document.querySelector('.popup-profile__close-button');

const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoCloseButton = document.querySelector('.popup-photo__close-button');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');


let initialCards = [

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

createElements(initialCards)

function createElements(initialCards){

	const container = document.querySelector('.elements');
	container.textContent = '';

	initialCards.forEach(function(item){
		
		const template = document.querySelector('#element').content;
		const elementTemplate = template.querySelector('.element').cloneNode(true)

		elementTemplate.querySelector('.element__user-photo').src = item.link;
		elementTemplate.querySelector('.element__user-photo-text').textContent = item.name;

		elementTemplate.querySelector('.element__like').addEventListener('click', function(evt){

			elementTemplate.querySelector('.element__like').classList.toggle('element__like_liked')

		});

		elementTemplate.querySelector('.element__trash-button').addEventListener('click', function(evt){

			let elementRemove = elementTemplate.querySelector('.element__trash-button').closest("article");
			elementRemove.remove()

		});

		container.append(elementTemplate);

	});


}

function openPopupEditProfile(){

	popupProfile.classList.toggle('popup-profile_opened');

	formProfileName.value = profileName.textContent;
	formProfileCareer.value = profileCareer.textContent;

}

function openPopupAddProfilePhoto(){

	popupPhoto.classList.toggle('popup-photo_opened');

	formPhotoName.placeholder = "Название";
	formPhotoLink.placeholder = "Ссылка на картинку";

}

function closePopup(){

	popupProfile.classList.remove('popup-profile_opened');
	popupPhoto.classList.remove('popup-photo_opened');

}

function submitProfileForm(evt){
	evt.preventDefault();

	profileName.textContent = formProfileName.value;
	profileCareer.textContent = formProfileCareer.value;

	closePopup();
}

function submitPhotoElement(evt){
	evt.preventDefault();

	initialCards.unshift({name: formPhotoName.value, link: formPhotoLink.value});
	createElements(initialCards);

	closePopup();
}

profileEditButton.addEventListener('click',  openPopupEditProfile);
profileAddButton.addEventListener('click',  openPopupAddProfilePhoto);

popupProfileCloseButton.addEventListener('click', closePopup);

popupPhotoCloseButton.addEventListener('click', closePopup);

formProfile.addEventListener('submit', submitProfileForm);
formPhoto.addEventListener('submit', submitPhotoElement);
