let BaseUrl = ''
let isDev = true;
let ENV = isDev ? 'DEV' : 'PROD';

if(ENV == 'DEV'){
    BaseUrl = 'http://www.mockjs.com'
}

if(ENV == 'PROD'){
    BaseUrl = ''
}

export default BaseUrl
