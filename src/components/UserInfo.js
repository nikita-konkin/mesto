export class UserInfo {
    constructor(profileName, profileCareer, profileAvatar) {
        this._profileName = profileName;
        this._profileCareer = profileCareer;
        this._profileAvatar = profileAvatar;
    }

    getUserInfo() {

        return ({ name: this._profileName.textContent, career: this._profileCareer.textContent })

    }

    setUserAvatar(link) {
        this._profileAvatar.src = link;
    }

    setUserInfo(name, career) {

        this._profileName.textContent = name;
        this._profileCareer.textContent = career;

    }
}