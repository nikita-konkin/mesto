export class Card {

    constructor(template, handlePreviewPicture, api, { handleDeleteIconClick }) {
        this._template = template;
        this._handleCardClick = handlePreviewPicture;
        this._api = api
        this._handleDeleteIconClick = handleDeleteIconClick
    }

    _getTemplate() {

        this._elementTemplate = this._template.querySelector('.element').cloneNode(true);
        return this._elementTemplate

    }

    cardCreate(data) {

        this._getTemplate()
        this._elementTemplate
            .querySelector('.element__trash-button').classList.add('element__trash-button_invisible')

        this._elementTemplate
            .querySelector('.element__user-photo').src = data.link;

        this._elementTemplate
            .querySelector('.element__user-photo').alt = data.name;

        this._elementTemplate
            .querySelector('.element__user-photo-text').textContent = data.name;

        this._elementTemplate
            .querySelector('.element__click').textContent = data.likes.length;

        this._elementTemplate.querySelector('.element__like').setAttribute("id", data._id);

        if (data.owner.name === document.querySelector('.profile__name').textContent) {
            this._elementTemplate.querySelector('.element__trash-button')
                .classList.remove('element__trash-button_invisible')
        }

        this._setEventListeners(data, this._api);

        return this._elementTemplate
    }

    _setEventListeners(data, api) {

        this._elementTemplate
            .querySelector('.element__like').addEventListener('click', this._toggleLike.bind(event, api));

        this._elementTemplate
            .querySelector('.element__trash-button')
            .addEventListener('click', (event) => { this._handleDeleteIconClick(event) });
        // .querySelector('.element__trash-button').addEventListener('click', () => {this._handleDeleteIconClick(this._elementTemplate)});

        this._elementTemplate.
        querySelector('.element__user-photo').addEventListener('click', () => { this._handleCardClick(data.name, data.link) });

    }

    _toggleLike(api, event) {
        // console.log(event.target.nextSibling.nextSibling.textContent)
        // console.log(api)
        event.target.classList.toggle('element__like_liked');

        if (Array.from(event.target.classList).includes('element__like_liked')) {
            api.putLike(event.target.id, 'PUT')
                .then(res => {
                    event.target.nextSibling.nextSibling.textContent = res.likes.length
                })
                .catch(res => { console.log(res) })
        } else {
            api.putLike(event.target.id, 'DELETE')
                .then(res => {
                    event.target.nextSibling.nextSibling.textContent = res.likes.length
                })
                .catch(res => { console.log(res) })

        };

    }

}