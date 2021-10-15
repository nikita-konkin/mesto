export class Popup{
	constructor(popupSelector, closeButton){
		this._popupSelector = popupSelector;
		this._closeButton = closeButton;
		this._handleEscClose = this._handleEscClose.bind(this);
	}

	_handleEscClose(event){

		if (event.key === "Escape") {

			this.close();
			
		}
	}

	_handlePopupOverlayClicklClose(event){

		if (Array.from(event.target.classList).includes("popup")){

			this.close()

		}
	}

	setEventListeners(){

		this._closeButton.addEventListener('click', () => this.close())
		this._popupSelector.addEventListener('click', (event) => this._handlePopupOverlayClicklClose(event));

	}

	open(){
		
		this._popupSelector.classList.add('popup_opened');
		document.addEventListener('keydown', this._handleEscClose);

	}

	close(){

		this._popupSelector.classList.remove('popup_opened');
		document.removeEventListener('keydown', this._handleEscClose);

	}

}