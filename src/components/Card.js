export class Card{

	constructor(template, handlePreviewPicture, api){
		this._template = template;
		this._handleCardClick = handlePreviewPicture;
		this._api = api
	}

	_getTemplate() {

		this._elementTemplate = this._template.querySelector('.element').cloneNode(true);
		return this._elementTemplate

	}

	cardCreate(data){
		// console.log(data)

		this._getTemplate()


		this._elementTemplate
		.querySelector('.element__user-photo').src = data.link;

		this._elementTemplate
		.querySelector('.element__user-photo').alt = data.name;

		this._elementTemplate
		.querySelector('.element__user-photo-text').textContent = data.name;

		this._elementTemplate
		.querySelector('.element__click').textContent = data.likes;

		this._elementTemplate.querySelector('.element__like').setAttribute("id", data.owner._id);

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

    }

	_toggleLike(event){
		console.log(event.target.id)
		event.target.classList.toggle('element__like_liked');

		if(Array.from(event.target.classList).includes('element__like_liked')){
			const putLike = this._api.putLike(event.target.id, 'PUT')
		}else{
			this._api.putLike(event.target.id, 'DELETE')
		};
		console.log(event.target.id);

	}

}