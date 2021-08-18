
let form = document.querySelector('.form');
let formName = document.querySelector('.decription-input_type_name');
let formCareer = document.querySelector('.decription-input_type_career');
let formSubmit = document.querySelector('.form__submit')

let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileCareer = document.querySelector('.profile__career');
let popupCloseButton = document.querySelector('.popup__close-button');

let profileEditButton = document.querySelector('.profile__edit-button');


profileEditButton.addEventListener('click',  Open_form);
popupCloseButton.addEventListener('click', Close_form);
formSubmit.addEventListener('click', Submit_form);

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

function Open_form(){

	popup.classList.toggle('popup_opened');
	formName.value = profileName.textContent;
	formCareer.value = profileCareer.textContent;

}

function Close_form(){

	popup.classList.toggle('popup_opened');
}

function Submit_form(evt){

	evt.preventDefault(); 
	profileName.textContent = formName.value;
	profileCareer.textContent = formCareer.value;

	popup.classList.toggle('popup_opened');

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
