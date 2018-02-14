/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_dashboard_js__ = __webpack_require__(1);


class App {
  constructor() {
    document.body.style.background = 'url("/images/Jarvisback.jpg") no-repeat center center fixed'
    document.body.style.backgroundSize = 'cover'
    document.body.style.height = '100%'
    document.body.style.margin = '0'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'

    let content = document.getElementById('content')

    let dashboard = new __WEBPACK_IMPORTED_MODULE_0__containers_dashboard_js__["a" /* default */]()


    content.append(dashboard.getContent())
    dashboard.animate()
    
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = App;


let app = new App()
window.app = app



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login__ = __webpack_require__(2);


class Dashboard {
  constructor () {
  }

  getContent() {
    let container = document.createElement('div')
    container.id = 'container'

    let title = document.createElement('div')
    title.id = 'title'
    title.style.color = '#E0FFFF'
    title.style.marginTop = '20px'
    title.style.marginLeft = '1%'
    title.style.textAlign = 'center'
    title.style.fontFamily = 'stencil'
    title.style.fontWeight = 'bold'
    title.style.fontSize = '50px'
    title.append('Login Page')
    
    container.appendChild(title)

    let login = new __WEBPACK_IMPORTED_MODULE_0__components_login__["a" /* default */]()
    container.append(login.getContent())

    return container
  }

  animate() {
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Dashboard;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Login{
    constructor(options){
        this.options = options
    }

    getContent(){


        let loginCard = document.createElement('div')
        loginCard.style.width = '50%'
        loginCard.style.height = '300px'
        loginCard.style.width = '400px'
        loginCard.style.margin = 'auto'
        loginCard.style.boxShadow = '0px 0px 10px #19d8ff'
        loginCard.style.borderWidth = '2px'
        loginCard.style.borderStyle = 'none'
        loginCard.style.borderColor = 'gold'
        loginCard.style.background  = 'rgba(0, 0, 0, 0.8)'
        loginCard.style.borderRadius = '25px'

        let loginHeader = document.createElement('div')
        loginHeader.style.height = '10%'

        loginCard.append(loginHeader)

        let loginBody =  document.createElement('form')
        loginBody.style.height = '80%'
        loginBody.style.display = 'flex'
        loginBody.style.margin = 'auto'
        loginCard.append(loginBody)

        let formContainer = document.createElement('div')
        formContainer.style.margin = 'auto'
        loginBody.append(formContainer)
    
        let usernameLabel = document.createElement("LABEL")
        let user = document.createTextNode("Username")
        usernameLabel.setAttribute("for", "username")
        usernameLabel.style.color = 'white'
        usernameLabel.appendChild(user)
        formContainer.append(usernameLabel)
    
        let userName = document.createElement('input')
        userName.type = 'email'
        userName.value = ''
        userName.style.display = 'flex'
        userName.style.margin = 'auto'
        formContainer.append(userName)
        
        let passwordLabel = document.createElement("LABEL")
        let t = document.createTextNode("Password")
        passwordLabel.setAttribute("for", "password")
        passwordLabel.style.color = 'white'
        passwordLabel.appendChild(t)
        formContainer.append(passwordLabel)
    

        let password = document.createElement('input')
        password.type = 'password'
        password.value = ''
        password.style.display = 'flex'
        password.style.margin = 'auto'
        formContainer.append(password)


        let loginButton = document.createElement('button')
        loginButton.type = 'submit'
        loginButton.style.display = 'flex'
        loginButton.style.margin = 'auto'
        loginButton.style.marginTop = '10px'    
        loginButton.style.backgroundColor = '#89f6fb'
        loginButton.innerHTML = 'Login!'
        loginButton.onclick = () => {
            console.log('you clicked?')
            console.log(userName.value)
            console.log(password.value)

        }

        formContainer.append(loginButton)

        return loginCard
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Login;


/***/ })
/******/ ]);