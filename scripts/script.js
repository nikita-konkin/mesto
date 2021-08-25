
let form = document.querySelector('.form');
// let form = document.getElementsByTagName('.profile-edit-form');
let formName = document.querySelector('.form__decription-input_type_name');
let formCareer = document.querySelector('.form__decription-input_type_career');
// let formSubmit = document.querySelector('.form__submit')

let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileCareer = document.querySelector('.profile__career');
let popupCloseButton = document.querySelector('.popup__close-button');

let profileEditButton = document.querySelector('.profile__edit-button');
let profileAddButton = document.querySelector('.profile__add-button');
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
    link: 'https://images.wallpapersden.com/image/download/avatar-movie_a21qamaUmZqaraWkpJRmbmdlrWZlbWU.jpg'
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

	initialCards.forEach(function(item){
		
		const userTemplate = document.querySelector('#element').content.cloneNode(true);
		userTemplate.querySelector('.element__user-photo').src = item.link;
		userTemplate.querySelector('.element__user-photo-text').textContent = item.name;
		container.append(userTemplate);

		});

}


function openPopupEdirProfile(){

	popup.classList.toggle('popup_opened');
	document.querySelector('.form__header').textContent = 'Редактировать профиль';
	formName.value = profileName.textContent;
	formCareer.value = profileCareer.textContent;
	form.classList.add('form_type_profile');
	

}

function openPopupAddProfilePhoto(){

	popup.classList.toggle('popup_opened');
	document.querySelector('.form__header').textContent = 'Новое место';
	document.querySelector('.form__decription-input_type_name').classList.add('form__decription-input_type_photo');
	document.querySelector('.form__decription-input_type_career').classList.add('form__decription-input_type_photo');
	form.classList.add('form_type_photo');
	
	formName.value = 'Название';
	formCareer.value = 'Ссылка на картинку';

}

function closePopup(){

	popup.classList.toggle('popup_opened');
	form.classList.remove('form_type_photo');
	document.querySelector('.form__decription-input_type_name').classList.remove('form__decription-input_type_photo');
	document.querySelector('.form__decription-input_type_career').classList.remove('form__decription-input_type_photo');
	form.classList.remove('form_type_profile');
}

function submitForm(evt){

	evt.preventDefault();

	form.classList.value.split(' ').forEach(function(item){
		if (item === 'form_type_profile') {
			submitProfile();
		};
		if (item === 'form_type_photo') {
			submitPhotoElement();
		};
	})

	closePopup();

}

function submitProfile(){
	profileName.textContent = formName.value;
	profileCareer.textContent = formCareer.value;
}

function submitPhotoElement(){
	initialCards.unshift({name: 'Я и медузки', link: 'https://cutewallpaper.org/21/avatar-hd]/Avatar-HD-Wallpapers-7wallpapers.net.jpg'});
	console.log(initialCards)
	createElements(initialCards)
}

// function Liked(clicked_id){

// 	let likeButton_id = clicked_id.id
// 	// console.log(likeButton_id)

// 	for(var i in dict){
// 	    if(dict[i].key == likeButton_id){

// 	    	if (dict[i].value == 0){
// 				document.getElementById(clicked_id.id).src = "images/likeButton_active.svg";
// 				dict[i].value = 1
// 			} else {
// 				document.getElementById(clicked_id.id).src = "images/likeButton.svg";
// 				dict[i].value = 0
// 			}

// 	    }
// 	}

// 	// console.log(dict)


// }

profileEditButton.addEventListener('click',  openPopupEdirProfile);
profileAddButton.addEventListener('click',  openPopupAddProfilePhoto);
popupCloseButton.addEventListener('click', closePopup);

form.addEventListener('submit', submitForm);
// formSubmit.addEventListener('click', submitForm);

// let addButton = document.querySelector('.profile__add-button')
// let likeButton = document.querySelector('.element__like')
// let click_counter = 0

// var dict = [];
// values = document.querySelectorAll('[id^="like"]')
// for (var i = 0; i < values.length; i++) {
// 	dict.push({
// 	    key:   values[i].id,
// 	    value: 0
// 	});
// }

// window.onresize = function(){
// 	if (screen.width <= 768){
//     	addButton.src = "images/addButton_mobile.svg";
//        // console.log(addButton.src)
// 	} else{
// 		addButton.src = "images/addButton.svg";
// 	}
// }

// console.log(screen.width)