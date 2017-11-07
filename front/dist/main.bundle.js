webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../bootstrap/dist/css/bootstrap.min.css"), "");

// module
exports.push([module.i, "h1 {\n  color: #360;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <a routerLink='login'\nrouterLinkActive=\"active\">login from here</a> -->\n\n<app-navbar></app-navbar>\n\n<!-- if you don`t have account sign up from here\n\n<a routerLink='/signup'\nrouterLinkActive=\"active\">signup</a> -->\n\n<!-- <router-outlet></router-outlet> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speech_recognition_service__ = __webpack_require__("../../../../../src/app/speech-recognition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__post_post_component__ = __webpack_require__("../../../../../src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__language_language_component__ = __webpack_require__("../../../../../src/app/language/language.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//Components

// import { LoginComponent } from './login/index';








//import { BootstrapCompComponent } from './bootstrap-comp/bootstrap-comp.component';
var appRoutes = [
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_9__post_post_component__["a" /* PostComponent */] },
    { path: 'navbar', component: __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'language', component: __WEBPACK_IMPORTED_MODULE_12__language_language_component__["a" /* LanguageComponent */] },
    { path: 'Userprofile', component: __WEBPACK_IMPORTED_MODULE_13__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'Chat', component: __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__["a" /* ChatComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            // LoginComponent,
            __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_9__post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__language_language_component__["a" /* LanguageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__["a" /* ChatComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__speech_recognition_service__["a" /* SpeechRecognitionService */]],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_9__post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Fix user-agent */\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-weight: 300;\n  -webkit-font-smoothing: antialiased;\n}\n\nhtml, input {\n  font-family:\n    \"HelveticaNeue-Light\",\n    \"Helvetica Neue Light\",\n    \"Helvetica Neue\",\n    Helvetica,\n    Arial,\n    \"Lucida Grande\",\n    sans-serif;\n}\n\nhtml, body {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style: none;\n  word-wrap: break-word;\n}\n\n/* Pages */\n\n.pages {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.page {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n/* Login Page */\n\n.login.page {\n  background-color: #000;\n}\n\n.login.page .form {\n  height: 100px;\n  margin-top: -100px;\n  position: absolute;\n\n  text-align: center;\n  top: 50%;\n  width: 100%;\n}\n\n.login.page .form .usernameInput {\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid #fff;\n  outline: none;\n  padding-bottom: 15px;\n  text-align: center;\n  width: 400px;\n}\n\n.login.page .title {\n  font-size: 200%;\n}\n\n.login.page .usernameInput {\n  font-size: 200%;\n  letter-spacing: 3px;\n}\n\n.login.page .title, .login.page .usernameInput {\n  color: #fff;\n  font-weight: 100;\n}\n\n/* Chat page */\n\n.chat.page {\n  display: none;\n}\n\n/* Font */\n\n.messages {\n  font-size: 150%;\n}\n\n.inputMessage {\n  font-size: 100%;\n}\n\n.log {\n  color: gray;\n  font-size: 70%;\n  margin: 5px;\n  text-align: center;\n}\n\n/* Messages */\n\n.chatArea {\n  height: 100%;\n  padding-bottom: 60px;\n}\n\n.messages {\n  height: 100%;\n  margin: 0;\n  overflow-y: scroll;\n  padding: 10px 20px 10px 20px;\n}\n\n.message.typing .messageBody {\n  color: gray;\n}\n\n.username {\n  font-weight: 700;\n  overflow: hidden;\n  padding-right: 15px;\n  text-align: right;\n}\n\n/* Input */\n\n.inputMessage {\n  border: 10px solid #000;\n  bottom: 0;\n  height: 60px;\n  left: 0;\n  outline: none;\n  padding-left: 10px;\n  position: absolute;\n  right: 0;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>CHAT</title>\n  <!-- <link rel=\"stylesheet\" href=\"chat.component.css\"> -->\n</head>\n<body>\n  <ul class=\"pages\">\n    <li class=\"chat page\">\n      <div class=\"chatArea\">\n        <ul class=\"messages\"></ul>\n      </div>\n      <input class=\"inputMessage\" placeholder=\"Type here...\"/>\n    </li>\n    <li class=\"login page\">\n      <div class=\"form\">\n        <h3 class=\"title\" >What's your language?</h3>\n\n        <select class=\"usernameInput\">\n        <option value=\"AF\" >Afrikanns</option>\n  <option value=\"SQ\">Albanian</option>\n  <option value=\"AR\">Arabic</option>\n  <option value=\"HY\">Armenian</option>\n  <option value=\"EU\">Basque</option>\n  <option value=\"BN\">Bengali</option>\n  <option value=\"BG\">Bulgarian</option>\n  <option value=\"CA\">Catalan</option>\n  <option value=\"KM\">Cambodian</option>\n  <option value=\"ZH\">Chinese (Mandarin)</option>\n  <option value=\"HR\">Croation</option>\n  <option value=\"CS\">Czech</option>\n  <option value=\"DA\">Danish</option>\n  <option value=\"NL\">Dutch</option>\n  <option value=\"EN\">English</option>\n  <option value=\"ET\">Estonian</option>\n  <option value=\"FJ\">Fiji</option>\n  <option value=\"FI\">Finnish</option>\n  <option value=\"FR\">French</option>\n  <option value=\"KA\">Georgian</option>\n  <option value=\"DE\">German</option>\n  <option value=\"EL\">Greek</option>\n  <option value=\"GU\">Gujarati</option>\n  <option value=\"HE\">Hebrew</option>\n  <option value=\"HI\">Hindi</option>\n  <option value=\"HU\">Hungarian</option>\n  <option value=\"IS\">Icelandic</option>\n  <option value=\"ID\">Indonesian</option>\n  <option value=\"GA\">Irish</option>\n  <option value=\"IT\">Italian</option>\n  <option value=\"JA\">Japanese</option>\n  <option value=\"JW\">Javanese</option>\n  <option value=\"KO\">Korean</option>\n  <option value=\"LA\">Latin</option>\n  <option value=\"LV\">Latvian</option>\n  <option value=\"LT\">Lithuanian</option>\n  <option value=\"MK\">Macedonian</option>\n  <option value=\"MS\">Malay</option>\n  <option value=\"ML\">Malayalam</option>\n  <option value=\"MT\">Maltese</option>\n  <option value=\"MI\">Maori</option>\n  <option value=\"MR\">Marathi</option>\n  <option value=\"MN\">Mongolian</option>\n  <option value=\"NE\">Nepali</option>\n  <option value=\"NO\">Norwegian</option>\n  <option value=\"FA\">Persian</option>\n  <option value=\"PL\">Polish</option>\n  <option value=\"PT\">Portuguese</option>\n  <option value=\"PA\">Punjabi</option>\n  <option value=\"QU\">Quechua</option>\n  <option value=\"RO\">Romanian</option>\n  <option value=\"RU\">Russian</option>\n  <option value=\"SM\">Samoan</option>\n  <option value=\"SR\">Serbian</option>\n  <option value=\"SK\">Slovak</option>\n  <option value=\"SL\">Slovenian</option>\n  <option value=\"ES\">Spanish</option>\n  <option value=\"SW\">Swahili</option>\n  <option value=\"SV\">Swedish </option>\n  <option value=\"TA\">Tamil</option>\n  <option value=\"TT\">Tatar</option>\n  <option value=\"TE\">Telugu</option>\n  <option value=\"TH\">Thai</option>\n  <option value=\"BO\">Tibetan</option>\n  <option value=\"TO\">Tonga</option>\n  <option value=\"TR\">Turkish</option>\n  <option value=\"UK\">Ukranian</option>\n  <option value=\"UR\">Urdu</option>\n  <option value=\"UZ\">Uzbek</option>\n  <option value=\"VI\">Vietnamese</option>\n  <option value=\"CY\">Welsh</option>\n  <option value=\"XH\">Xhosa</option>\n               </select>\n      </div>\n    </li>\n  </ul>\n\n  <!-- <script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script> -->\n  <!-- <script src=\"/socket.io/socket.io.js\"></script> -->\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {ProfileComponent} from '.././profile/profile.component';
// import  {NavbarComponent} from '.././navbar/navbar.component';

var ChatComponent = (function () {
    function ChatComponent(http) {
        this.http = http;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var x = this;
        $(function () {
            var FADE_TIME = 150; // ms
            var TYPING_TIMER_LENGTH = 400; // ms
            var COLORS = [
                '#e21400', '#91580f', '#f8a700', '#f78b00',
                '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
                '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
            ];
            // Initialize letiables
            var $window = $(window);
            var $usernameInput = $('.usernameInput'); // Input for username
            console.log('username.     ', $usernameInput);
            var $messages = $('.messages'); // Messages area
            var $inputMessage = $('.inputMessage'); // Input message input box
            var $loginPage = $('.login.page'); // The login page
            var $chatPage = $('.chat.page'); // The chatroom page
            // Prompt for setting a username
            var username;
            var connected = false;
            var typing = false;
            var lastTypingTime;
            var $currentInput = $usernameInput.focus();
            // let socket = io();
            var socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__["connect"]('/');
            function addParticipantsMessage(data) {
                var message = '';
                if (data.numUsers === 1) {
                    message += "there's 1 participant";
                }
                else {
                    message += "there are " + data.numUsers + " participants";
                }
                log(message, {});
            }
            // Sets the client's username
            function setUsername() {
                username = cleanInput($usernameInput.val().trim());
                // If the username is valid
                if (username) {
                    $loginPage.fadeOut();
                    $chatPage.show();
                    $loginPage.off('click');
                    $currentInput = $inputMessage.focus();
                    // Tell the server your username
                    // username here is the language
                    socket.emit('add user', { username: x.username1, username1: username });
                }
            }
            // Sends a chat message
            function sendMessage() {
                var message = $inputMessage.val();
                // Prevent markup from being injected into the message
                message = cleanInput(message);
                // if there is a non-empty message and a socket connection
                if (message && connected) {
                    $inputMessage.val('');
                    addChatMessage({ username: x.username1, username1: username, message: message }, {});
                    // tell server to execute 'new message' and send along one parameter
                    socket.emit('new message', { message: message, lan: $usernameInput.val() });
                }
            }
            // Log a message
            function log(message, options) {
                var $el = $('<li>').addClass('log').text(message);
                addMessageElement($el, options);
            }
            // Adds the visual chat message to the message list
            function addChatMessage(data, options) {
                console.log('message data    ', data);
                // Don't fade the message in if there is an 'X was typing'
                var $typingMessages = getTypingMessages(data);
                options = options || {};
                if ($typingMessages.length !== 0) {
                    options.fade = false;
                    $typingMessages.remove();
                }
                var $usernameDiv = $('<span class="username"/>')
                    .text(data.username)
                    .css('color', getUsernameColor(data.username));
                var $messageBodyDiv = $('<span class="messageBody">')
                    .text(data.message);
                var typingClass = data.typing ? 'typing' : '';
                var $messageDiv = $('<li class="message"/>')
                    .data('username', data.username)
                    .addClass(typingClass)
                    .append($usernameDiv, $messageBodyDiv);
                addMessageElement($messageDiv, options);
            }
            // Adds the visual chat typing message
            function addChatTyping(data) {
                data.typing = true;
                data.message = 'is typing';
                addChatMessage(data, {});
            }
            // Removes the visual chat typing message
            function removeChatTyping(data) {
                getTypingMessages(data).fadeOut(function () {
                    $(this).remove();
                });
            }
            // Adds a message element to the messages and scrolls to the bottom
            // el - The element to add as a message
            // options.fade - If the element should fade-in (default = true)
            // options.prepend - If the element should prepend
            //   all other messages (default = false)
            function addMessageElement(el, options) {
                var $el = $(el);
                // Setup default options
                if (!options) {
                    options = {};
                }
                if (typeof options.fade === 'undefined') {
                    options.fade = true;
                }
                if (typeof options.prepend === 'undefined') {
                    options.prepend = false;
                }
                // Apply options
                if (options.fade) {
                    $el.hide().fadeIn(FADE_TIME);
                }
                if (options.prepend) {
                    $messages.prepend($el);
                }
                else {
                    $messages.append($el);
                }
                $messages[0].scrollTop = $messages[0].scrollHeight;
            }
            // Prevents input from having injected markup
            function cleanInput(input) {
                return $('<div/>').text(input).html();
            }
            // Updates the typing event
            function updateTyping() {
                if (connected) {
                    if (!typing) {
                        typing = true;
                        socket.emit('typing');
                    }
                    lastTypingTime = (new Date()).getTime();
                    setTimeout(function () {
                        var typingTimer = (new Date()).getTime();
                        var timeDiff = typingTimer - lastTypingTime;
                        if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
                            socket.emit('stop typing');
                            typing = false;
                        }
                    }, TYPING_TIMER_LENGTH);
                }
            }
            // Gets the 'X is typing' messages of a user
            function getTypingMessages(data) {
                return $('.typing.message').filter(function (i) {
                    return $(this).data('username') === data.username;
                });
            }
            // Gets the color of a username through our hash function
            function getUsernameColor(username) {
                // Compute hash code
                var hash = 7;
                for (var i = 0; i < username.length; i++) {
                    hash = username.charCodeAt(i) + (hash << 5) - hash;
                }
                // Calculate color
                var index = Math.abs(hash % COLORS.length);
                return COLORS[index];
            }
            // Keyboard events
            $window.keydown(function (event) {
                // Auto-focus the current input when a key is typed
                if (!(event.ctrlKey || event.metaKey || event.altKey)) {
                    $currentInput.focus();
                }
                // When the client hits ENTER on their keyboard
                if (event.which === 13) {
                    if (username) {
                        sendMessage();
                        socket.emit('stop typing');
                        typing = false;
                    }
                    else {
                        setUsername();
                    }
                }
            });
            $inputMessage.on('input', function () {
                updateTyping();
            });
            // Click events
            // Focus input when clicking anywhere on login page
            $loginPage.click(function () {
                $currentInput.focus();
            });
            // Focus input when clicking on the message input's border
            $inputMessage.click(function () {
                $inputMessage.focus();
            });
            // Socket events
            // Whenever the server emits 'login', log the login message
            socket.on('login', function (data) {
                // console.log('is here hanna',data)
                connected = true;
                // Display the welcome message
                var message = "Welcome to Socket.IO Chat – ";
                log(message, {
                    prepend: true
                });
                addParticipantsMessage(data);
            });
            // Whenever the server emits 'new message', update the chat body
            socket.on('new message', function (data) {
                console.log('data message   ', data);
                var msg = new SpeechSynthesisUtterance(data.message);
                //??
                msg.lang = data.lan.toLowerCase();
                window.speechSynthesis.speak(msg);
                addChatMessage(data, {});
            });
            // Whenever the server emits 'user joined', log it in the chat body
            socket.on('user joined', function (data) {
                log(data.username + ' joined', {});
                addParticipantsMessage(data);
            });
            // Whenever the server emits 'user left', log it in the chat body
            socket.on('user left', function (data) {
                log(data.username + ' left', {});
                addParticipantsMessage(data);
                removeChatTyping(data);
            });
            // Whenever the server emits 'typing', show the typing message
            socket.on('typing', function (data) {
                addChatTyping(data);
            });
            // Whenever the server emits 'stop typing', kill the typing message
            socket.on('stop typing', function (data) {
                removeChatTyping(data);
            });
            socket.on('disconnect', function () {
                log('you have been disconnected', {});
            });
            socket.on('reconnect', function () {
                log('you have been reconnected', {});
                if (username) {
                    socket.emit('add user', username);
                }
            });
            socket.on('reconnect_error', function () {
                log('attempt to reconnect has failed', {});
            });
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/Chat', { headers: headers })
            .map(function (res) {
            if (res) {
                x.username1 = res['_body'] + ': ';
                // console.log('teeeto    ',res['_body'])
            }
            else {
            }
        }).subscribe();
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChatComponent);

var _a;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
        this.FlagSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.currentFlag = this.FlagSource.asObservable();
    }
    DataService.prototype.changeFlag = function (flag) {
        this.FlagSource.next(flag);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/language/language.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/language/language.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n            <div class=\"card\">\n                <div class=\"header\">\n                    <h4 class=\"title\">&nbsp;&nbsp; Let's Make Communication Easier</h4>\n                </div>\n                <div class=\"content\">\n                    <div class=\"row\">\n                        <div class=\"col-md-2\"></div>\n                        <div class=\"col-md-8\">\n                            <div class=\"form-group\">\n                                <label></label>\n                                <input type=\"text\" class=\"form-control border-input\" name=\"txtSpeechSearchMovieName\" id=\"txtSpeechSearchMovieName\" value=\"\"\n                                placeholder=\"say something!!!\" [(ngModel)]=\"speechData\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-2\"></div>\n                    </div>\n                    <br />\n                    <div class=\"text-center\">\n                        <button class=\"btn btn-info btn-fill btn-wd\" \n                        name=\"btnActivateSpeechSearchMovie\" \n                        id=\"btnActivateSpeechSearchMovie\" \n                        (click)=\"activateSpeechSearchMovie()\"\n                        [hidden]=\"show\">\n                        Start\n                    </button>\n                    <button class=\"btn btn-danger\" \n                    (click)=\"ngOnDestroy()\"\n                    [hidden]=\"!show\">\n                    Stop\n                </button>\n                From:\n                <select id=\"languageFrom\">\n                <!--    <option value='ar'>Arabic</option>\n                   <option value='en-us'>English US</option>\n                   <option value='fr-FR'>'Français'</option>\n                   <option value='tr-TR'>'Türkçe'</option> -->\n                    <option value=\"AF\">Afrikanns</option>\n  <option value=\"SQ\">Albanian</option>\n  <option value=\"AR\">Arabic</option>\n  <option value=\"HY\">Armenian</option>\n  <option value=\"EU\">Basque</option>\n  <option value=\"BN\">Bengali</option>\n  <option value=\"BG\">Bulgarian</option>\n  <option value=\"CA\">Catalan</option>\n  <option value=\"KM\">Cambodian</option>\n  <option value=\"ZH\">Chinese (Mandarin)</option>\n  <option value=\"HR\">Croation</option>\n  <option value=\"CS\">Czech</option>\n  <option value=\"DA\">Danish</option>\n  <option value=\"NL\">Dutch</option>\n  <option value=\"EN\">English</option>\n  <option value=\"ET\">Estonian</option>\n  <option value=\"FJ\">Fiji</option>\n  <option value=\"FI\">Finnish</option>\n  <option value=\"FR\">French</option>\n  <option value=\"KA\">Georgian</option>\n  <option value=\"DE\">German</option>\n  <option value=\"EL\">Greek</option>\n  <option value=\"GU\">Gujarati</option>\n  <option value=\"HE\">Hebrew</option>\n  <option value=\"HI\">Hindi</option>\n  <option value=\"HU\">Hungarian</option>\n  <option value=\"IS\">Icelandic</option>\n  <option value=\"ID\">Indonesian</option>\n  <option value=\"GA\">Irish</option>\n  <option value=\"IT\">Italian</option>\n  <option value=\"JA\">Japanese</option>\n  <option value=\"JW\">Javanese</option>\n  <option value=\"KO\">Korean</option>\n  <option value=\"LA\">Latin</option>\n  <option value=\"LV\">Latvian</option>\n  <option value=\"LT\">Lithuanian</option>\n  <option value=\"MK\">Macedonian</option>\n  <option value=\"MS\">Malay</option>\n  <option value=\"ML\">Malayalam</option>\n  <option value=\"MT\">Maltese</option>\n  <option value=\"MI\">Maori</option>\n  <option value=\"MR\">Marathi</option>\n  <option value=\"MN\">Mongolian</option>\n  <option value=\"NE\">Nepali</option>\n  <option value=\"NO\">Norwegian</option>\n  <option value=\"FA\">Persian</option>\n  <option value=\"PL\">Polish</option>\n  <option value=\"PT\">Portuguese</option>\n  <option value=\"PA\">Punjabi</option>\n  <option value=\"QU\">Quechua</option>\n  <option value=\"RO\">Romanian</option>\n  <option value=\"RU\">Russian</option>\n  <option value=\"SM\">Samoan</option>\n  <option value=\"SR\">Serbian</option>\n  <option value=\"SK\">Slovak</option>\n  <option value=\"SL\">Slovenian</option>\n  <option value=\"ES\">Spanish</option>\n  <option value=\"SW\">Swahili</option>\n  <option value=\"SV\">Swedish </option>\n  <option value=\"TA\">Tamil</option>\n  <option value=\"TT\">Tatar</option>\n  <option value=\"TE\">Telugu</option>\n  <option value=\"TH\">Thai</option>\n  <option value=\"BO\">Tibetan</option>\n  <option value=\"TO\">Tonga</option>\n  <option value=\"TR\">Turkish</option>\n  <option value=\"UK\">Ukranian</option>\n  <option value=\"UR\">Urdu</option>\n  <option value=\"UZ\">Uzbek</option>\n  <option value=\"VI\">Vietnamese</option>\n  <option value=\"CY\">Welsh</option>\n  <option value=\"XH\">Xhosa</option>\n               </select>\n                To:\n               <select id=\"languageTo\">\n                <!--    <option value='ar'>Arabic</option>\n                   <option value='en-us'>English US</option>\n                   <option value='fr-FR'>'Français'</option>\n                   <option value='tr-TR'>'Türkçe'</option> -->\n                    <option value=\"AF\">Afrikanns</option>\n  <option value=\"SQ\">Albanian</option>\n  <option value=\"AR\">Arabic</option>\n  <option value=\"HY\">Armenian</option>\n  <option value=\"EU\">Basque</option>\n  <option value=\"BN\">Bengali</option>\n  <option value=\"BG\">Bulgarian</option>\n  <option value=\"CA\">Catalan</option>\n  <option value=\"KM\">Cambodian</option>\n  <option value=\"ZH\">Chinese (Mandarin)</option>\n  <option value=\"HR\">Croation</option>\n  <option value=\"CS\">Czech</option>\n  <option value=\"DA\">Danish</option>\n  <option value=\"NL\">Dutch</option>\n  <option value=\"EN\">English</option>\n  <option value=\"ET\">Estonian</option>\n  <option value=\"FJ\">Fiji</option>\n  <option value=\"FI\">Finnish</option>\n  <option value=\"FR\">French</option>\n  <option value=\"KA\">Georgian</option>\n  <option value=\"DE\">German</option>\n  <option value=\"EL\">Greek</option>\n  <option value=\"GU\">Gujarati</option>\n  <option value=\"HE\">Hebrew</option>\n  <option value=\"HI\">Hindi</option>\n  <option value=\"HU\">Hungarian</option>\n  <option value=\"IS\">Icelandic</option>\n  <option value=\"ID\">Indonesian</option>\n  <option value=\"GA\">Irish</option>\n  <option value=\"IT\">Italian</option>\n  <option value=\"JA\">Japanese</option>\n  <option value=\"JW\">Javanese</option>\n  <option value=\"KO\">Korean</option>\n  <option value=\"LA\">Latin</option>\n  <option value=\"LV\">Latvian</option>\n  <option value=\"LT\">Lithuanian</option>\n  <option value=\"MK\">Macedonian</option>\n  <option value=\"MS\">Malay</option>\n  <option value=\"ML\">Malayalam</option>\n  <option value=\"MT\">Maltese</option>\n  <option value=\"MI\">Maori</option>\n  <option value=\"MR\">Marathi</option>\n  <option value=\"MN\">Mongolian</option>\n  <option value=\"NE\">Nepali</option>\n  <option value=\"NO\">Norwegian</option>\n  <option value=\"FA\">Persian</option>\n  <option value=\"PL\">Polish</option>\n  <option value=\"PT\">Portuguese</option>\n  <option value=\"PA\">Punjabi</option>\n  <option value=\"QU\">Quechua</option>\n  <option value=\"RO\">Romanian</option>\n  <option value=\"RU\">Russian</option>\n  <option value=\"SM\">Samoan</option>\n  <option value=\"SR\">Serbian</option>\n  <option value=\"SK\">Slovak</option>\n  <option value=\"SL\">Slovenian</option>\n  <option value=\"ES\">Spanish</option>\n  <option value=\"SW\">Swahili</option>\n  <option value=\"SV\">Swedish </option>\n  <option value=\"TA\">Tamil</option>\n  <option value=\"TT\">Tatar</option>\n  <option value=\"TE\">Telugu</option>\n  <option value=\"TH\">Thai</option>\n  <option value=\"BO\">Tibetan</option>\n  <option value=\"TO\">Tonga</option>\n  <option value=\"TR\">Turkish</option>\n  <option value=\"UK\">Ukranian</option>\n  <option value=\"UR\">Urdu</option>\n  <option value=\"UZ\">Uzbek</option>\n  <option value=\"VI\">Vietnamese</option>\n  <option value=\"CY\">Welsh</option>\n  <option value=\"XH\">Xhosa</option>\n               </select>\n           </div>\n           <br />\n       </div>\n   </div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/language/language.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speech_recognition_service__ = __webpack_require__("../../../../../src/app/speech-recognition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguageComponent = (function () {
    function LanguageComponent(speechRecognitionService, http) {
        this.speechRecognitionService = speechRecognitionService;
        this.http = http;
        this.show = false;
        this.speechData = "";
    }
    LanguageComponent.prototype.ngOnInit = function () {
        console.log("areej and hanan");
    };
    LanguageComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.show = !this.show;
        this.speechRecognitionService.test();
        this.languageTo = $("#languageTo").val();
        this.languageFrom = $("#languageFrom").val();
        var text = $("#txtSpeechSearchMovieName").val();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/translate', { text: text, languageFrom: this.languageFrom, languageTo: this.languageTo }, { headers: headers })
            .map(function (res) {
            if (res) {
                _this.translate = res.json();
                console.log(_this.translate);
                _this.textToSpeech();
            }
            else {
            }
        }).subscribe();
    };
    LanguageComponent.prototype.activateSpeechSearchMovie = function () {
        var _this = this;
        this.show = !this.show;
        this.speechRecognitionService.record()
            .subscribe(
        //listener
        function (value) {
            _this.speechData = value;
            console.log(value);
        }, 
        //errror
        function (err) {
            console.log(err);
            if (err.error == "there is no speech untile now") {
                _this.activateSpeechSearchMovie();
            }
        }, 
        //completion
        function () {
            _this.activateSpeechSearchMovie();
        });
    };
    LanguageComponent.prototype.textToSpeech = function () {
        var msg = new SpeechSynthesisUtterance(this.translate);
        msg.lang = this.languageTo.toLowerCase();
        window.speechSynthesis.speak(msg);
    };
    return LanguageComponent;
}());
LanguageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-language',
        template: __webpack_require__("../../../../../src/app/language/language.component.html"),
        styles: [__webpack_require__("../../../../../src/app/language/language.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__speech_recognition_service__["a" /* SpeechRecognitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__speech_recognition_service__["a" /* SpeechRecognitionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], LanguageComponent);

var _a, _b;
//# sourceMappingURL=language.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\nbackground-color: gray;\n}\n\n.panel-shadow {\n    box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 7px;\n}\n.panel-white {\n  border: 1px solid #dddddd;\n}\n.panel-white  .panel-heading {\n  color: #333;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.panel-white  .panel-footer {\n  background-color: #fff;\n  border-color: #ddd;\n}\n\n.post .post-heading {\n  height: 20px;\n  padding: 20px 15px;\n}\n.post .post-heading .avatar {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-right: 15px;\n}\n.post .post-heading .meta .title {\n  margin-bottom: 0;\n}\n.post .post-heading .meta .title a {\n  color: black;\n}\n.post .post-heading .meta .title a:hover {\n  color: #aaaaaa;\n}\n.post .post-heading .meta .time {\n  margin-top: 8px;\n  color: #999;\n}\n.post .post-image .image {\n  width: 100%;\n  height: auto;\n}\n.post .post-description {\n  padding: 15px;\n}\n.post .post-description p {\n  font-size: 14px;\n}\n.post .post-description .stats {\n  margin-top: 20px;\n}\n.post .post-description .stats .stat-item {\n  display: inline-block;\n  margin-right: 15px;\n}\n.post .post-description .stats .stat-item .icon {\n  margin-right: 8px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-post></app-post>\n\n<div *ngFor=\"let post of posts ;index as i\" >\n\n\n\n   <div  class=\"w3-container w3-card-2 w3-white w3-round w3-margin\"><br>\n\n<div  class=\"row\">\n\n        <div class=\"col-sm-1\"><img src=\"{{post.imag}}\" alt=\"Avatar\"  style=\"width:70px;height:70px;border-radius: 50px;\"></div>\n\n        <div class=\"col-sm-1\"><h4 (click) = \"user(post.userName)\" \n        routerLink=\"/profile\" \n        routerLinkActive=\"active\"\n        >{{post.userName}}</h4></div>\n\n\n\n        <div class=\"col-sm-10\"><span class=\"w3-right w3-opacity\">32 min</span></div>\n        </div><br>\n\n        <hr class=\"w3-clear\">\n        <p>\n          Location : {{post.location}}  <br>\n          Description : {{post.discribtion}} <br>\n         Contact Info : {{post.contactInfo}} <br>\n        </p>\n\n\n        <img src=\"{{post.image}}\"  style=\"width: 98%;height: 78%\">\n        <br><br>\n      <!-- comment tag start hear  -->\n      <div *ngFor=\"let com of comments;index as j\" [hidden]=\"i != comID\">\n      <link rel=\"stylesheet\" type=\"text/css\" href=\"//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\">\n<div class=\"container\" >\n    <div class=\"row\"  style=\"height:5% , width:4%\">\n        <div class=\"col-sm-8\" >\n            <div class=\"panel panel-white post panel-shadow\">\n                <div class=\"post-heading\">\n                    <div class=\"pull-left image\">\n                        <img src={{com.imag}} class=\"img-circle avatar\" alt=\"user profile image\">\n                    </div>\n                    <div class=\"pull-left meta\">\n                        <div class=\"title h5\">\n                            <a href=\"#\"><b>{{com.username}}</b></a>\n                        </div>\n                    </div>\n                </div> \n                <div class=\"post-description\"> \n                    <p>{{com.comment}}</p>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n\n<!-- end for comment filed  -->\n\n    <!-- <div style=\"width: 60%;height: 40px;\"> -->\n        <input  type=\"text\" name=\"type your comment\" id=\"{{i}}\" placeholder=\"write a comment here...\" style=\"width: 80%;height: 40px;\">\n        <button type=\"button\"\n        (click)=\"commentFun(i,post.id)\" \n        class=\"w3-button w3-theme-d2\"><i class=\"fa fa-comment\"></i>  Comment</button>  <br><br>\n        <!-- </div> -->\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(http) {
        this.http = http;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/main', { headers: headers })
            .map(function (res) {
            if (res) {
                _this.posts = res.json();
                console.log(_this.posts);
            }
        }).subscribe();
    };
    MainComponent.prototype.commentFun = function (postIndex, roomId) {
        var _this = this;
        this.comment = $("#" + postIndex).val();
        this.id = roomId;
        this.comID = postIndex;
        console.log(this.comment);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/postcomment', { commet: this.comment, roomid: this.id }, { headers: headers })
            .map(function (res) {
            if (res) {
                _this.comments = res.json();
            }
            else {
            }
        }).subscribe();
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = " \n\n\n\n\n <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/lib/w3-theme-blue-grey.css\">\n<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<nav class=\"navbar navbar-inverse  navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!-- <div class=\"navbar-header\"> -->\n      <!-- <a class=\"navbar-brand\" href=\"#\">Batee5</a> -->\n    <!-- </div> -->\n    <ul class=\"nav navbar-right\">\n      <li class=\"active\"><a [hidden]= \"!flag\" href=\"#\"\n        routerLink='/main'\n        routerLinkActive=\"active\"\n        (click) = \"main\"\n      \t>Home</a></li>\n      <li><a href=\"#\"  \n        [hidden]= \"!flag\" \n      \trouterLink=\"/profile\" \n      \trouterLinkActive=\"active\" >Profile</a></li>\n          <li><a href=\"#\"  \n        [hidden]= \"!flag\" \n        routerLink=\"/language\" \n        routerLinkActive=\"active\" >Language</a></li>\n        <li><a href=\"#\"  \n        [hidden]= \"!flag\" \n        routerLink=\"/Chat\" \n        routerLinkActive=\"active\" >Chat</a></li>\n   \n\n      <!-- <li><a href=\"#\">Page 2</a></li> -->\n    </ul>\n    <ul class=\"nav navbar-left\">\n      <li data-toggle=\"modal\" data-target=\"#myModal\"><a href=\"#\"\n        [hidden]= \"flag\"\n        routerLink='/signup'\n        routerLinkActive=\"active\"\n      \t><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n\n        <div class=\"container\">\n                <div class=\"row\" [hidden] = \"!flag\">\n\n                  <div class=\"search\">\n                    <input type=\"text\" id=\"search\" class=\"form-control input-sm\" maxlength=\"64\" placeholder=\"Search\" />\n                    <button type=\"submit\" class=\"btn btn-primary btn-sm\" \n                    routerLink='/Userprofile'\n                    routerLinkActive=\"active\"\n                    >Search</button>\n                  </div>\n                </div>\n              </div>\n              \n\n         <li><a href=\"#\"\n          (click)=\"logout()\"\n        [hidden]= \"!flag\"\n        routerLink='/'\n        routerLinkActive=\"active\"\n        ><span class=\"glyphicon glyphicon-user\"></span> Logout</a></li>\n    </ul>\n  </div>\n</nav>\n<br><br>\n<br><br>\n<form [hidden]= \"flag\"><div class=\"input-group\">\n<span class=\"input-group-addon\">\nUser name:</span><input [(ngModel)]=\"username\" id = \"username\" type=\"username\" name=\"username\"></div>  <br>\n\n<div class=\"input-group\">\n<span class=\"input-group-addon\">Password :</span><input [(ngModel)]=\"password\" id = \"password\" type=\"password\" name=\"password\"></div>   <br> \n<button class=\"btn btn-defualt\"(click)=\"login()\"> Login </button>\n</form>\n\n\n<!-- <div class=\"input-group\">\n<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span><input id=\"Suser\" type=\"text\" class=\"input form-control w3-animate-zoom\" placeholder=\"Username\"><br>\n</div> -->\n\n<style type=\"text/css\">\nbody{\n  background-color: gray;\n}\nnav a{\n  color: white;\n}\nnav a:hover{\n  color: blue;\n}\n</style>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { AfterViewInit, ViewChild } from '@angular/core';



 //1


var NavbarComponent = (function () {
    function NavbarComponent(http, data, router, signup) {
        this.http = http;
        this.data = data;
        this.router = router;
        this.signup = signup;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentFlag.subscribe(function (flag) { return _this.flag = flag; }); //4
    };
    NavbarComponent.prototype.login = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/login', { password: this.password, username: this.username }, { headers: headers })
            .map(function (res) {
            if (res['_body'] == 'true') {
                _this.data.changeFlag(!_this.flag);
                _this.router.navigateByUrl('/main');
            }
            else {
                alert('wrong password or username stupid!!!');
                _this.router.navigateByUrl('/');
            }
        }).subscribe();
    };
    NavbarComponent.prototype.logout = function () {
        this.data.changeFlag(!this.flag); //5
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/logout', { headers: headers })
            .map(function (res) { }).subscribe();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */]] //2
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n  <!-- Trigger the modal with a button -->\n <!--  <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Post</button> -->\n\n  <!-- Modal -->\n <!--  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\"> -->\n    \n      <!-- Modal content-->\n      <div class=\"modal-content\" style=\"margin: 18px;\">\n        <div class=\"modal-header\" style=\"background-color: gray;\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">ADD room</h4>\n        </div>\n        <div class=\"modal-body\">\n         <div class=\"input-group\">\n<span class=\"input-group-addon\">Location: </span><input [(ngModel)]=\"location\" name=\"Location\" type=\"text\"></div><br>\n         <br>\n         <div class=\"input-group\">\n<span class=\"input-group-addon\">Description: </span><input [(ngModel)]=\"description\" name=\"Description\" type=\"text\"></div>  <br>\n         <div class=\"input-group\">\n<span class=\"input-group-addon\">Contact info: </span><input [(ngModel)]=\"contactInfo\" name=\"ContactInfo\" type=\"text\"></div> <br>\n         <div class=\"input-group\">\n<span class=\"input-group-addon\">Image:</span><input [(ngModel)]=\"image\" type=\"file\" id=\"image\" (change)=\"ima($event)\"></div>\n        </div>\n        <div class=\"modal-footer\">\n        <button (click)=\"submit()\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n      \n  <!--   </div>\n  </div>\n</div>\n\n -->\n"

/***/ }),

/***/ "../../../../../src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostComponent = (function () {
    function PostComponent(http) {
        this.http = http;
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.ima = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        this.url = reader["__zone_symbol__originalInstance"];
    };
    PostComponent.prototype.submit = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/post', { location: this.location, discribtion: this.description, image: this.url, contactInfo: this.contactInfo }, { headers: headers })
            .map(function (res) {
            if (res) {
                console.log("response from post", res);
            }
            else {
            }
        }).subscribe();
    };
    return PostComponent;
}());
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post',
        template: __webpack_require__("../../../../../src/app/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post/post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PostComponent);

var _a;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container w3-content\" style=\"max-width:1400px;margin-top:80px\">    \n  <!-- The Grid -->\n  <div class=\"w3-row\">\n    <!-- Left Column -->\n    <div class=\"w3-col m3\">\n      <!-- Profile -->\n      \n      <div class=\"w3-card-2 w3-round w3-white\">\n        <div class=\"w3-container\">\n         <h4 class=\"w3-center\">{{currentUser}}</h4>\n         <p class=\"w3-center\"><img src=\"{{profile}}\" class=\"w3-circle\" style=\"height:106px;width:106px\" alt=\"Avatar\"></p>\n         <hr>\n         <p><i class=\"fa fa-pencil fa-fw w3-margin-right w3-text-theme\"></i> {{nationality}}</p>\n         <p><i class=\"fa fa-home fa-fw w3-margin-right w3-text-theme\"></i> {{location}}</p>\n         <p><i class=\"fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme\"></i> {{birthday}}</p>\n        </div>\n      </div>\n      <br>          \n      <!-- Alert Box -->\n      <div class=\"w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small\">\n        <span onclick=\"this.parentElement.style.display='none'\" class=\"w3-button w3-theme-l3 w3-display-topright\">\n          <i class=\"fa fa-remove\"></i>\n        </span>\n        <p><strong>Hey!</strong></p>\n        <p>{{status}}</p>\n      </div>\n    \n    <!-- End Left Column -->\n    </div>\n    \n    <!-- Middle Column -->\n    <div class=\"w3-col m7\">\n    \n      <div class=\"w3-row-padding\">\n        <div class=\"w3-col m12\">\n          <div class=\"w3-card-2 w3-round w3-white\">\n            <div class=\"w3-container w3-padding\">\n              <h6 class=\"w3-opacity\">Social Media template by w3.css</h6>\n              <input contenteditable=\"true\" class=\"w3-border w3-padding\" id=\"status\">\n              <button type=\"button\" class=\"w3-button w3-theme\" (click)=\"getStatus()\"><i class=\"fa fa-pencil\"></i>  Add your status</button> \n            </div>\n          </div>\n        </div>\n      </div>\n      \n\n\n<!-- user profile posts -->\n\n  <div *ngFor=\"let data of postdata ;index as i\">\n\n\n   <div class=\"w3-container w3-card-2 w3-white w3-round w3-margin\"><br>\n\n        <img src=\"{{profile}}\" alt=\"Avatar\" class=\"w3-left w3-circle w3-margin-right\" style=\"width:60px\">\n        <span class=\"w3-right w3-opacity\">32 min</span>\n        <h4>{{data.userName}}</h4><br>\n        <hr class=\"w3-clear\">\n        <p>\n          Location : {{data.location}}  <br>\n          Description : {{data.discribtion}} <br>\n         Contact Info : {{data.contactInfo}} <br>\n        </p>\n        <img src=\"{{data.image}}\" style=\"width:25%\" class=\"w3-margin-bottom\">\n\n      <!-- comment tag start here  -->\n      <div *ngFor=\"let com of comments;index as j\" [hidden]=\"i != comID\">\n      <link rel=\"stylesheet\" type=\"text/css\" href=\"//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\">\n<div class=\"container\" >\n    <div class=\"row\"  style=\"height:5% , width:4%\">\n        <div class=\"col-sm-8\" >\n            <div class=\"panel panel-white post panel-shadow\">\n                <div class=\"post-heading\">\n                    <div class=\"pull-left image\">\n                        <img src={{com.imag}} class=\"img-circle avatar\" alt=\"user profile image\">\n                    </div>\n                    <div class=\"pull-left meta\">\n                        <div class=\"title h5\">\n                            <a href=\"#\"><b>{{com.username}}</b></a>\n                        </div>\n                    </div>\n                </div> \n                <div class=\"post-description\"> \n                    <p>{{com.comment}}</p>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n\n<!-- end for comment filed  -->\n\n\n        <input type=\"text\" name=\"type your comment\" id=\"{{i}}\" placeholder=\"write a comment here...\">\n        <button type=\"button\"\n        (click)=\"commentFun(i,data.id)\" \n        class=\"w3-button w3-theme-d2 w3-margin-bottom\"><i class=\"fa fa-comment\"></i>  Comment</button>  \n</div>\n</div>\n\n \n\n\n      \n      <div class=\"w3-card-2 w3-round w3-white w3-padding-32 w3-center\">\n        <p><i class=\"fa fa-bug w3-xxlarge\"></i></p>\n      </div>\n      \n    <!-- End Right Column -->\n   <!--  </div> -->\n    \n  <!-- End Grid -->\n  </div>\n  \n<!-- End Page Container -->\n</div>\n<br>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(http) {
        this.http = http;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/profile', { headers: headers })
            .map(function (res) {
            if (res) {
                _this.userData = res.json();
                _this.postdata = _this.userData[0];
                _this.currentUser = _this.userData[1][0].username;
                _this.nationality = _this.userData[1][0].Nationallity;
                _this.location = _this.userData[1][0].Location;
                _this.birthday = _this.userData[1][0].Birthday;
                _this.profile = _this.userData[1][0].imag;
                _this.status = _this.userData[1][0].status;
            }
            else {
            }
        }).subscribe();
    };
    ProfileComponent.prototype.getStatus = function () {
        var set = $('#status').val();
        this.status = $('#status').val();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/status', { status: set }, { headers: headers })
            .map(function (res) { }).subscribe();
    };
    ProfileComponent.prototype.commentFun = function (postIndex, roomId) {
        var _this = this;
        this.comment = $("#" + postIndex).val();
        this.id = roomId;
        this.comID = postIndex;
        console.log(this.comment);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/postcomment', { commet: this.comment, roomid: this.id }, { headers: headers })
            .map(function (res) {
            if (res) {
                _this.comments = res.json();
            }
            else {
            }
        }).subscribe();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"modal fade w3-animate-zoom in\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog w3-animate-zoom\"  style=\"display: block; padding-right: 15px;\">>\n    \n      <!-- Modal content-->\n      <div class=\"modal-content w3-animate-zoom\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Modal Header</h4>\n        </div>\n        <div class=\"modal-body w3-animate-zoom\">\n         \n\n<div class=\"input-group\"><span class=\"input-group-addon\">Username:</span><input [(ngModel)]=\"username\"  id = \"username\" type=\"username\" name=\"username\">  <br>\n</div><br>\n  <div class=\"input-group\"><span class=\"input-group-addon\">Password :</span><input [(ngModel)]=\"password\" id = \"password\" type=\"password\" name=\"password\">  </div><br>\n\n\n<div class=\"input-group\"><span class=\"input-group-addon\">Nationality:</span><input [(ngModel)]=\"nationality\" id = \"nationality\" type=\"text\" name=\"nationality\"></div> <br> \n   <div class=\"input-group\"><span class=\"input-group-addon\">Location  :</span><input [(ngModel)]=\"location\" id = \"location\" type=\"text\" name=\"location\"> <br> </div><br>\n\n\n<div class=\"input-group\"><span class=\"input-group-addon\">Upload your photo:\n  <input class='btn btn-default btn-file' type=\"file\" id=\"image\" (change)=\"ima($event)\"/>\n  </span>\n</div>\n\n<br>\n\n  <div class=\"input-group\"><span class=\"input-group-addon\">Birthday :\n  <select name=\"months\" id=\"month\">\n  <option value=\"JAN\">January</option>\n  <option value=\"FEB\">February</option>\n  <option value=\"MAR\">March</option>\n  <option value=\"APR\">April</option>\n  <option value=\"MAY\">May</option>\n  <option value=\"Jun\">June</option>\n  <option value=\"Jul\">July</option>\n    <option value=\"AUG\">August</option>\n    <option value=\"SEP\">Septemper</option>\n    <option value=\"OCT\">October</option>\n    <option value=\"NOV\">November</option>\n    <option value=\"DEC\">December</option>\n  </select>\n  <select  id= \"day\" >\n    <option *ngFor=\"let day of days\">{{day}}</option>\n  </select>\n  <select id=\"year\" >\n    <option *ngFor=\"let year of years\" [value]=\"year\">{{year}}</option>\n  </select>\n</span></div>\n\n        </div>\n        <div class=\"modal-footer\">\n\n\n          <button type=\"button\" class=\"navbar-left btn btn-success w3-animate-zoom\" data-dismiss=\"modal\" (click)=\"signup()\"> Signup </button>\n\n\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\n        </div>\n      </div>\n      \n    </div>\n  </div>\n\n\n\n\n\n<form>\n  \n</form>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(http, router, _sanitizer) {
        this.http = http;
        this.router = router;
        this._sanitizer = _sanitizer;
        this._html = $("#myimg");
        this.days = [];
        this.years = [];
    }
    Object.defineProperty(SignupComponent.prototype, "htmlProperty", {
        get: function () {
            return this._sanitizer.bypassSecurityTrustHtml(this._html);
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.ima = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        this.url = reader["__zone_symbol__originalInstance"];
        console.log(this.url);
    };
    SignupComponent.prototype.ngOnInit = function () {
        for (var i = 1; i <= 31; ++i) {
            this.days.push(i);
        }
        for (var i = 1905; i <= 2017; ++i) {
            this.years.push(i);
        }
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.y = $("#year").val();
        this.m = $("#month").val();
        this.d = $("#day").val();
        this.date = this.d + '/' + this.m + '/' + this.y;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/signup', { password: this.password, username: this.username, birthday: this.date, nationality: this.nationality, location: this.location, image: this.url }, { headers: headers })
            .map(function (res) {
            if (res['_body'] === 'true') {
                _this.router.navigateByUrl('/');
            }
            else {
                alert('account is already exist !!');
                _this.router.navigateByUrl('/');
            }
        }).subscribe();
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/speech-recognition.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognitionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeechRecognitionService = (function () {
    function SpeechRecognitionService(zone) {
        this.zone = zone;
    }
    SpeechRecognitionService.prototype.record = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
            var language = $("#languageFrom").val();
            //Speech recognition interfaces are currently prefixed on Chrome, so we'll need to prefix interface names appropriately so we used "webkitSpeechRecognition"
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            _this.speechRecognition = new webkitSpeechRecognition();
            // seting the attibutes 
            _this.speechRecognition.lang = language;
            _this.speechRecognition.continuous = true;
            _this.speechRecognition.maxAlternatives = 20;
            _this.speechRecognition.onresult = function (speech) {
                // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
                // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
                // It has a getter so it can be accessed like an array
                // The first [0] returns the SpeechRecognitionResult at position 0.
                // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
                // These also have getters so they can be accessed like arrays.
                // The second [0] returns the SpeechRecognitionAlternative at position 0.
                // We then return the transcript property of the SpeechRecognitionAlternative object
                var word = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    // SpeechRecognitionResult {0: SpeechRecognitionAlternative, 1: SpeechRecognitionAlternative,... up to 19  isFinal: true}
                    // 0:SpeechRecognitionAlternative {transcript: "Isabella", confidence: 0}
                    console.log("result", speech.results, speech.resultIndex);
                    var nearWord = result[0].transcript; //the original word alternative
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log("sorry!! this result kind of bad data");
                        }
                        else {
                            //we used trim here to Removes whitespace from the beginning and end of the 'nearword'.
                            word = __WEBPACK_IMPORTED_MODULE_2_lodash__["trim"](nearWord);
                            console.log("Did you mean? -> " + word + " , If not try say something else...");
                        }
                    }
                }
                _this.zone.run(function () {
                    observer.next(word);
                });
            };
            _this.speechRecognition.onerror = function (error) {
                observer.error(error);
            };
            _this.speechRecognition.start();
            console.log("Say something - I am giving up on you");
        });
    };
    SpeechRecognitionService.prototype.test = function () {
        if (this.speechRecognition)
            this.speechRecognition.stop();
    };
    return SpeechRecognitionService;
}());
SpeechRecognitionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object])
], SpeechRecognitionService);

var _a;
//# sourceMappingURL=speech-recognition.service.js.map

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container w3-content\" style=\"max-width:1400px;margin-top:80px\">    \n  <!-- The Grid -->\n  <div class=\"w3-row\">\n    <!-- Left Column -->\n    <div class=\"w3-col m3\">\n      <!-- Profile -->\n      \n      <div class=\"w3-card-2 w3-round w3-white\">\n        <div class=\"w3-container\">\n         <h4 class=\"w3-center\">{{currentUser}}</h4>\n         <p class=\"w3-center\"><img src=\"{{profile}}\" class=\"w3-circle\" style=\"height:106px;width:106px\" alt=\"Avatar\"></p>\n         <hr>\n         <p><i class=\"fa fa-pencil fa-fw w3-margin-right w3-text-theme\"></i> {{nationality}}</p>\n         <p><i class=\"fa fa-home fa-fw w3-margin-right w3-text-theme\"></i> {{location}}</p>\n         <p><i class=\"fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme\"></i> {{birthday}}</p>\n        </div>\n      </div>\n      <br>          \n      <!-- Alert Box -->\n      <div class=\"w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small\">\n        <span onclick=\"this.parentElement.style.display='none'\" class=\"w3-button w3-theme-l3 w3-display-topright\">\n          <i class=\"fa fa-remove\"></i>\n        </span>\n        <p><strong>Hey!</strong></p>\n        <p>{{status}}</p>\n      </div>\n    \n    <!-- End Left Column -->\n    </div>\n    \n    <!-- Middle Column -->\n   <!--  <div class=\"w3-col m7\">\n    \n      <div class=\"w3-row-padding\">\n        <div class=\"w3-col m12\">\n          <div class=\"w3-card-2 w3-round w3-white\">\n            <div class=\"w3-container w3-padding\">\n              <h6 class=\"w3-opacity\">Social Media template by w3.css</h6>\n              <input contenteditable=\"true\" class=\"w3-border w3-padding\" id=\"status\">\n              <button type=\"button\" class=\"w3-button w3-theme\" (click)=\"getStatus()\"><i class=\"fa fa-pencil\"></i>  Add your status</button> \n            </div>\n          </div>\n        </div>\n      </div> -->\n      \n\n\n<!-- user profile posts -->\n\n  <div *ngFor=\"let data of postdata ;index as i\">\n\n\n   <div class=\"w3-container w3-card-2 w3-white w3-round w3-margin\"><br>\n\n        <img src=\"{{profile}}\" alt=\"Avatar\" class=\"w3-left w3-circle w3-margin-right\" style=\"width:60px\">\n        <span class=\"w3-right w3-opacity\">32 min</span>\n        <h4>{{data.userName}}</h4><br>\n        <hr class=\"w3-clear\">\n        <p>\n          Location : {{data.location}}  <br>\n          Description : {{data.discribtion}} <br>\n         Contact Info : {{data.contactInfo}} <br>\n        </p>\n        <img src=\"{{data.image}}\" style=\"width:25%\" class=\"w3-margin-bottom\">\n\n      <!-- comment tag start here  -->\n      <div *ngFor=\"let com of comments;index as j\" [hidden]=\"i != comID\">\n      <link rel=\"stylesheet\" type=\"text/css\" href=\"//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\">\n<div class=\"container\" >\n    <div class=\"row\"  style=\"height:5% , width:4%\">\n        <div class=\"col-sm-8\" >\n            <div class=\"panel panel-white post panel-shadow\">\n                <div class=\"post-heading\">\n                    <div class=\"pull-left image\">\n                        <img src={{com.imag}} class=\"img-circle avatar\" alt=\"user profile image\">\n                    </div>\n                    <div class=\"pull-left meta\">\n                        <div class=\"title h5\">\n                            <a href=\"#\"><b>{{com.username}}</b></a>\n                        </div>\n                    </div>\n                </div> \n                <div class=\"post-description\"> \n                    <p>{{com.comment}}</p>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n\n<!-- end for comment filed  -->\n\n\n        <input type=\"text\" name=\"type your comment\" id=\"{{i}}\" placeholder=\"write a comment here...\">\n        <button type=\"button\"\n        (click)=\"commentFun(i,data.id)\" \n        class=\"w3-button w3-theme-d2 w3-margin-bottom\"><i class=\"fa fa-comment\"></i>  Comment</button>  \n</div>\n</div>\n\n \n\n\n      \n      <div class=\"w3-card-2 w3-round w3-white w3-padding-32 w3-center\">\n        <p><i class=\"fa fa-bug w3-xxlarge\"></i></p>\n      </div>\n      \n    <!-- End Right Column -->\n   <!--  </div> -->\n    \n  <!-- End Grid -->\n  </div>\n  \n<!-- End Page Container -->\n</div>\n<br>"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = (function () {
    function UserProfileComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = $("#search").val();
        console.log(this.username);
        $.ajax({
            url: "/Userprofile",
            async: false,
            data: { username: this.username },
            type: "POST",
            success: function (data) {
                console.log(data);
                _this.userData = data;
                _this.postdata = _this.userData[0];
                _this.currentUser = _this.userData[1][0].username;
                _this.nationality = _this.userData[1][0].Nationallity;
                _this.location = _this.userData[1][0].Location;
                _this.birthday = _this.userData[1][0].Birthday;
                _this.profile = _this.userData[1][0].imag;
                _this.status = _this.userData[1][0].status;
                console.log('out', _this.currentUser, _this.nationality);
            }
        });
    };
    UserProfileComponent.prototype.commentFun = function (postIndex, roomId) {
        var _this = this;
        this.comment = $("#" + postIndex).val();
        this.id = roomId;
        this.comID = postIndex;
        console.log(this.comment);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/postcomment', { commet: this.comment, roomid: this.id }, { headers: headers })
            .map(function (res) {
            if (res) {
                _this.comments = res.json();
            }
            else {
            }
        }).subscribe();
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UserProfileComponent);

var _a, _b;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map