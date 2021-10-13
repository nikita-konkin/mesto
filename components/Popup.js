export class Popup{
	constructor(popupSelector, closeButton){
		this._popupSelector = popupSelector;
		this._closeButton = closeButton;
	}

	_handleEscClose(event){

		if (event.key === "Escape") {

			this.close();
			
		}
	}

	_handlePopupOverlayClicklClose(){

		if (Array.from(event.target.classList).includes("popup")){

			this.close()

		}
	}


	setEventListeners(){

		this._closeButton.addEventListener('click', event => this.close())
		window.addEventListener('click', event => this._handlePopupOverlayClicklClose());
				// this._popupSelector.addEventListener('submit', ()=>{this._validator});
		this._popupSelector.addEventListener('submit', ()=>{this.close()});

	}

	open(){
		
		this._popupSelector.classList.add('popup_opened');
		window.addEventListener('keydown', this._handleEscClose.bind(this));

	}

	close(){

		this._popupSelector.classList.remove('popup_opened');
		window.removeEventListener('keydown', this._handleEscClose.bind(this));

	}




}