export class Api {
  constructor(config) {
    this._cardsUrl = config.cardsUrl;
    this._profileUrl = config.profileUrl;
    this._avatarsUrl = config.avatarsUrl;
    this._headers = config.headers;
    this._likesUrl = config.likesUrl;
  }

  getInitialCards() {

		return fetch(this._cardsUrl, {
			method: "GET",
			headers: this._headers})
			// .then(res => res.json())
			.then(res => {
				if(res.ok){
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`)
			});
  }

  getProfileData() {

		return fetch(this._profileUrl, {
			method: "GET",
			headers: this._headers})
			// .then(res => res.json())
			.then(res => {
				if(res.ok){
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`)
			});

  }

	patchAvatar(link){

		return fetch(this._avatarsUrl, {
		  method: 'PATCH',
		  headers: this._headers,
		  body: JSON.stringify({
		    avatar: link
		  })
		})
		.then(res => {
			if(res.ok){
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`)
		});

	}

	patchUserInfo(name, about){

		return fetch(this._profileUrl, {
		  method: 'PATCH',
		  headers: this._headers,
		  body: JSON.stringify({
		    name: name,
		    about: about
		  })
		})
		.then(res => {
			if(res.ok){
				return res.json();
			}

			return Promise.reject(`Ошибка: ${res.status}`)
		});

	}

  postCard(name, link) {

		return fetch(this._cardsUrl, {
		  method: 'POST',
		  headers: this._headers,
		  body: JSON.stringify({
		    name: name,
		    link: link
		  })
		})
		.then(res => {
			if(res.ok){
				return res.json();
			}

			return Promise.reject(`Ошибка: ${res.status}`)
		});

	}

  deleteCard(cardId) {

		return fetch(`${this._cardsUrl}/${cardId}`, {
		  method: 'DELETE',
		  headers: this._headers
		})
		.then(res => {
			if(res.ok){
				return res.json();
			}

			return Promise.reject(`Ошибка: ${res.status}`)
		});

	}

	putLike(cardId, method){

		return fetch(`${this._likesUrl}/${cardId}`, {
		  method: method,
		  headers: this._headers
		})
		.then(res => {
			if(res.ok){
				return res.json();
			}

			return Promise.reject(`Ошибка: ${res.status}`)
		});


	}





}
