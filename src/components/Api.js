export class Api {
// Токен: 6dcc8eb5-b36f-4e58-925f-68f8caf1b64a
// Идентификатор группы: cohort-29
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
    console.log(this._headers)
  }

  getInitialCards() {

	return fetch(this._baseUrl, {
		method: "GET",
		headers: this._headers})
		.then(res => res.json())
		.then((result) => {
			// console.log(result);
			return result
		});

	// fetch("https://mesto.nomoreparties.co/v1/cohort-29/users/me",
	// 		{
	// 		authorization: '6dcc8eb5-b36f-4e58-925f-68f8caf1b64a',
	// 		"Content-Type": "application/json"
	// 		})
	// 	.then(res => {
	// 	  if (res.ok) {
	// 	    return res.json();
	// 	  }else{console.log(`Ошибка: ${res.status}`)}
	// 	});

  }


}

// const api = new Api({
//   baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-29',
//   headers: {
//     authorization: '6dcc8eb5-b36f-4e58-925f-68f8caf1b64a',
//     'Content-Type': 'application/json'
//   }
// });