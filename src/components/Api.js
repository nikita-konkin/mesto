export class Api {
// Токен: 6dcc8eb5-b36f-4e58-925f-68f8caf1b64a
// Идентификатор группы: cohort-29
  constructor(config) {
    this._cardsUrl = config.cardsUrl;
    this._profileUrl = config.profileUrl;
    this._avatarsUrl = config.avatarsUrl;
    this._headers = config.headers;
    this._likesUrl = config.likesUrl;
    console.log(this._headers)
  }

  getInitialCards() {

		return fetch(this._cardsUrl, {
			method: "GET",
			headers: this._headers})
			.then(res => res.json())
			.then((result) => {
				// console.log(result);
				return result
			})
			.catch(err => {console.log(err)});
  }

  getProfileData() {

		return fetch(this._profileUrl, {
			method: "GET",
			headers: this._headers})
			.then(res => res.json())
			.then((result) => {
				// console.log(result);
				return result
			})
			.catch(err => {console.log(err)});

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
			return Promise.reject('Error')
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

			return Promise.reject('Error')
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

			return Promise.reject('Error')
		});

	}

	putLike(cardId, method){
		console.log(cardId)
		console.log(method)
		return fetch(this._likesUrl+`/${cardId}`, {
		  method: method,
		  headers: this._headers,
		  body: JSON.stringify({
		    likes: ''
		  })
		})
		.then(res => {
			if(res.ok){
				return res.json();
			}

			return Promise.reject('Error')
		});


	}





}
