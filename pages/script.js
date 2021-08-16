
let form = document.querySelector('.form')
let form_overlay = document.querySelector('.overlay')
let profile_name = document.querySelector('.profile__name');
let profile_career = document.querySelector('.profile__career');
let form_name = document.querySelector('.form__name')
let form_career = document.querySelector('.form__career')

let add_button = document.querySelector('.profile__add-button')
let like_button = document.querySelector('.element__like')
let click_counter = 0

form.addEventListener('submit', Submit_form);

var dict = [];
values = document.querySelectorAll('[id^="like"]')
// console.log(typeof values)

for (var i = 0; i < values.length; i++) {
	dict.push({
	    key:   values[i].id,
	    value: 0
	});
}

window.onresize = function(){
	if (screen.width <= 768){
    	add_button.src = "images/add_button_mobile.svg";
       // console.log(add_button.src)
	} else{
		add_button.src = "images/add_button.svg";
	}
}

// console.log(screen.width)

function Open_form(){

	form.classList.toggle('form_active');
	form_overlay.classList.toggle('overlay_active');
	form_name.value = profile_name.textContent;
	form_career.value = profile_career.textContent;

}

function Close_form(){

	form.classList.toggle('form_active');
	form_overlay.classList.toggle('overlay_active');
}

function Submit_form(evt){

	evt.preventDefault(); 
	profile_name.textContent = form_name.value;
	profile_career.textContent = form_career.value;

}

function Liked(clicked_id){

	let like_button_id = clicked_id.id
	// console.log(like_button_id)

	for(var i in dict){
	    if(dict[i].key == like_button_id){

	    	if (dict[i].value == 0){
				document.getElementById(clicked_id.id).src = "images/like_button_active.svg";
				dict[i].value = 1
			} else {
				document.getElementById(clicked_id.id).src = "images/like_button.svg";
				dict[i].value = 0
			}

	    }
	}

	// console.log(dict)


}
