export class UserInfo{
	constructor(profileName, profileCareer){
		this._profileName = profileName;
		this._profileCareer = profileCareer;
	}

	getUserInfo(){

		return ({name: this._profileName.textContent, career: this._profileCareer.textContent})

	}

	setUserInfo(name, career){

		this._profileName.textContent = name;
		this._profileCareer.textContent = career;
		
	}
}