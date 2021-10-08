export class Popup{
	constructor(popupSelector){
		this._popupSelector = popupSelector;
	}

	_handleEscClose(){
		if (event.key === "Escape") {
			const popupOpened = document.querySelector('.popup_opened');
			this.close();
		}
	}

	_handlePopupOverlayClicklClose(){

		if (Array.from(event.target.classList).includes("popup")){

			this.close(this._popupSelector)

		}
	}


	setEventListeners(closeButton){

		closeButton.addEventListener('click', event => this.close(this._popupSelector))
		window.addEventListener('click', event => this._handlePopupOverlayClicklClose());

		

	}

	open(){

		this._popupSelector.classList.add('popup_opened');

		window.addEventListener('keydown', () => {this._handleEscClose()});
		// window.addEventListener('click',  closePopupByOverlay);

	}

	close(){

		this._popupSelector.classList.remove('popup_opened');
		console.log(this._popupSelector)
		window.removeEventListener('keydown', () => {this._handleEscClose()});
		// window.removeEventListener('click', closePopupByOverlay);
		// window.removeEventListener('keydown', keyHandler);

	}




}