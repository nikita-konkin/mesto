import { Popup } from './Popup.js'

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector, closeButton, elementTemplate, api) {
        super(popupSelector, closeButton);
        this._elementTemplate = elementTemplate
        this._api = api
    }

    open(elementTemplate) {
        super.open()
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupSelector.addEventListener('submit', () => { this._handleDeleteIconClick(this._elementTemplate) });
    }

    _handleDeleteIconClick(elementTemplate) {
        // console.log(elementTemplate)
        event.preventDefault();
        const cardId = elementTemplate.querySelector('.element__like').id
        this._api.deleteCard(cardId)
            .then(res => {
                if (res) {
                    this._elementTemplate.remove(elementTemplate)
                }
            })

        this.close()

    }

    close() {
        super.close()
    }

}