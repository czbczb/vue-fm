export default class Auth {
    static getToken() {
        return localStorage.getItem('tooken')
    }
    static setToken(tooken) {
        localStorage.setItem('tooken', tooken);
    }
    static login () {

    }
    static logOut() {
        // 返回登陆页
    }
    static getPrivilege() {

    }
}