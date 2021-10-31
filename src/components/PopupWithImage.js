import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    constructor(popupSelector, popupPhotoImageSelector, popupPhotoTitleSelector, closeButton) {
        super(popupSelector, closeButton);

        this._photoSelector = popupSelector.querySelector(popupPhotoTitleSelector);
        this._titleSelector = popupSelector.querySelector(popupPhotoImageSelector);
    }

    open(name, link) {

        this._photoSelector.textContent = name;
        this._titleSelector.src = link;
        this._titleSelector.alt = name;
        super.open();

    }

    setEventListeners() {
        super.setEventListeners();
    }

    close() {
        super.close()
    }
}