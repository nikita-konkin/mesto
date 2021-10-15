export class Card{

	constructor( template, handlePreviewPicture){
		this._template = template;
		this._handleCardClick = handlePreviewPicture;
	}

	_getTemplate() {

		this._elementTemplate = this._template.querySelector('.element').cloneNode(true);
		return this._elementTemplate

	}

	cardCreate(data){

		this._getTemplate()

		this._elementTemplate
		.querySelector('.element__user-photo').src = data.link;

		this._elementTemplate
		.querySelector('.element__user-photo').alt = data.name;

		this._elementTemplate
		.querySelector('.element__user-photo-text').textContent = data.name;
		this._setEventListeners(data);

		return this._elementTemplate
	}

	_setEventListeners(data) {

		this._elementTemplate
		.querySelector('.element__like').addEventListener('click', this._toggleLike.bind(this._elementTemplate));

		this._elementTemplate
		.querySelector('.element__trash-button').addEventListener('click', this._elementTemplate.remove.bind(this._elementTemplate));

		this._elementTemplate.
		querySelector('.element__user-photo').addEventListener('click', () => {this._handleCardClick(data.name, data.link)});

    };

	_toggleLike(event){

		event.target.classList.toggle('element__like_liked');

	}

}