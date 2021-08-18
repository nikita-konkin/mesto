
let form = document.querySelector('.form');
let formName = document.querySelector('.decription-input_type_name');
let formCareer = document.querySelector('.form__decription-input_type_career');
let formSubmit = document.querySelector('.form__submit')

let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileCareer = document.querySelector('.profile__career');
let popupCloseButton = document.querySelector('.popup__close-button');

let profileEditButton = document.querySelector('.profile__edit-button');


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

function openPopap(){

	popup.classList.toggle('popup_opened');
	formName.value = profileName.textContent;
	formCareer.value = profileCareer.textContent;

}

function closePopap(){

	popup.classList.toggle('popup_opened');
}

function submitForm(evt){

	evt.preventDefault(); 
	profileName.textContent = formName.value;
	profileCareer.textContent = formCareer.value;

	closePopap()

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

profileEditButton.addEventListener('click',  openPopap);
popupCloseButton.addEventListener('click', closePopap);
formSubmit.addEventListener('click', submitForm);