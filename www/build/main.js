webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_usuario_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_perfil__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_controller__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_action_sheet_action_sheet_controller__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CadastroPage = /** @class */ (function () {
    function CadastroPage(camera, navCtrl, action, usuarioService) {
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.action = action;
        this.usuarioService = usuarioService;
        this.perfil = new __WEBPACK_IMPORTED_MODULE_2__models_perfil__["a" /* Perfil */]();
        this.perfil = new __WEBPACK_IMPORTED_MODULE_2__models_perfil__["a" /* Perfil */]();
        this.buscarPerfil();
    }
    CadastroPage.prototype.buscarPerfil = function () {
        var _this = this;
        this.perfil = JSON.parse(localStorage.getItem('usuario'));
        this.usuarioService.findById(this.perfil.id).subscribe(function (perfil) {
            _this.perfil = perfil;
        });
    };
    // public existeLogin(login) {
    //         if(login == undefined){
    //             return
    //         }
    //         this.usuarioService.existeLogin(login, this.perfil.id).subscribe((res: any) => {
    //             console.log(res);
    //             if (res.status === 200) {
    //                 if (res._body === 'true') {
    //                     this.form.controls.login.setErrors({ loginJaExiste: 'Login já Existe'})
    //                 }
    //             }
    //         }, err => {
    //             console.log(err);
    //         });
    //     }
    CadastroPage.prototype.salvar = function () {
        var _this = this;
        this.usuarioService.save(this.perfil).subscribe(function (data) {
            if (data !== null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
            }
        });
    };
    //Metodo que faço as configurações aparecerem ao clicar na imagem para abrir a camera
    CadastroPage.prototype.opcoes = function () {
        var _this = this;
        this.action.create({
            title: 'Escolha Uma Opção',
            buttons: [
                {
                    text: 'Camera', icon: 'camera', handler: function () {
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            sourceType: _this.camera.PictureSourceType.CAMERA
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.perfil.foto = 'data:image/jpeg;base64,' + imageData;
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Galeria', icon: 'photo', handler: function () {
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            sourceType: _this.camera.PictureSourceType.SAVEDPHOTOALBUM
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.perfil.foto = 'data:image/jpeg;base64,' + imageData;
                        }, function (err) {
                        });
                    }
                }
            ]
        });
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'cadastro-page',template:/*ion-inline-start:"D:\FADEP - 5º Periodo\ComputacaoMovel\tcc\src\pages\perfil\cadastro.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title> Meu Perfil </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="salvar()">\n\n    <ion-icon name="checkmark"></ion-icon>\n\n    </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n    <div><img src="{{perfil.foto}}" class="img" (click)="opcoes()" alt=""></div>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label floating>Nome</ion-label>\n\n            <ion-input type="text" name="nome" [(ngModel)]="perfil.nome" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>E-mail</ion-label>\n\n            <ion-input type="email" nome="email" [(ngModel)]="perfil.email" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Login</ion-label>\n\n            <ion-input type="text" nome="login" [(ngModel)]="perfil.login"  required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Senha</ion-label>\n\n            <ion-input type="password" nome="senha" [(ngModel)]="perfil.senha" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Celular</ion-label>\n\n            <ion-input type="text" nome="celular" [(ngModel)]="perfil.celular" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Cidade</ion-label>\n\n            <ion-input type="text" nome="cidade" [(ngModel)]="perfil.cidade" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Cep</ion-label>\n\n            <ion-input type="text" nome="cep" [(ngModel)]="perfil.cep" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Bairro</ion-label>\n\n            <ion-input type="text" nome="bairro" [(ngModel)]="perfil.bairro" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Rua</ion-label>\n\n            <ion-input type="text" nome="rua" [(ngModel)]="perfil.rua" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Número</ion-label>\n\n            <ion-input type="number" nome="numero" [(ngModel)]="perfil.numero" required></ion-input>\n\n        </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\FADEP - 5º Periodo\ComputacaoMovel\tcc\src\pages\perfil\cadastro.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_usuario_service__["a" /* UsuarioService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_action_sheet_action_sheet_controller__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1__services_usuario_service__["a" /* UsuarioService */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_usuario_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_perfil__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__perfil_cadastro__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, usuarioService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.perfil = new __WEBPACK_IMPORTED_MODULE_2__models_perfil__["a" /* Perfil */]();
        this.usuario = {};
        this.salvou = false;
        this.typeCampoSenha = 'password';
        this.senhaIcon = 'eye';
        this.senhafocused = false;
        //Icone de olho no campo senha ()
        this.mostrarsenha = function () {
            if (this.typeCampoSenha == 'password') {
                this.typeCampoSenha = 'text';
                this.senhaIcon = 'eye-off';
            }
            else {
                this.typeCampoSenha = 'password';
                this.senhaIcon = 'eye';
            }
            this.focoInputSenha(true);
        };
        this.formLogin = this.formBuilder.group({
            login: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            senha: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.logar = function () {
        var _this = this;
        this.usuarioService.logar(this.perfil).subscribe(function (data) {
            if (data !== null) {
                localStorage.setItem('usuario', JSON.stringify(data));
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            }
            //mensagem se o usuario estiver errado 
        });
    };
    LoginPage.prototype.focoInputSenha = function (value) {
        this.senhafocused = value;
    };
    LoginPage.prototype.abrirPreCadastro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__perfil_cadastro__["a" /* CadastroPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\FADEP - 5º Periodo\ComputacaoMovel\tcc\src\pages\login\login.html"*/'<ion-content padding>\n\n\n\n  <ion-grid>\n\n    <!--Logo-->\n\n    <ion-row justify-content-center>\n\n      <ion-img src="assets/imgs/logo.png" width="100" height="100"></ion-img>\n\n\n\n    </ion-row>\n\n\n\n    <!--Usuário e senha-->\n\n    <ion-row class="input-row">\n\n\n\n      <form [formGroup]="formLogin">\n\n\n\n\n\n        <ion-item>\n\n          <ion-label floating>Usuário</ion-label>\n\n          <ion-input type="text" [(ngModel)]="perfil.login" formControlName="login" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Senha</ion-label>\n\n          <ion-input [(ngModel)]="perfil.senha" formControlName="senha" name="senha" type="{{typeCampoSenha}}" (ionFocus)="focoInputSenha(true)"\n\n            required></ion-input>\n\n        </ion-item>\n\n        <ion-icon class="icon-senha" color="dark" name="{{senhaIcon}}" (click)="mostrarsenha()"></ion-icon>\n\n      </form>\n\n    </ion-row>\n\n    <p>\n\n      <a (click)="abrirPreCadastro()">Cadastre-se</a>\n\n    </p>\n\n\n\n\n\n    <!--Botão Logar-->\n\n    <ion-row>\n\n      <button ion-button block icon-end (click)="logar()">  \n\n        Entrar\n\n        <ion-icon name="person"></ion-icon>\n\n        </button>\n\n    </ion-row>\n\n\n\n    <!--Cadastra-->\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\FADEP - 5º Periodo\ComputacaoMovel\tcc\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_usuario_service__["a" /* UsuarioService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__services_usuario_service__["a" /* UsuarioService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_constants__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_service__ = __webpack_require__(271);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioService = /** @class */ (function (_super) {
    __extends(UsuarioService, _super);
    function UsuarioService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    UsuarioService.prototype.getWebService = function () {
        return 'usuario';
    };
    UsuarioService.prototype.logar = function (user) {
        var url = this.urlWeb + "/logar";
        return this.http.post(url, user).map(function (res) {
            if (res.text() !== null) {
                var json = res.json();
                console.log(json);
                __WEBPACK_IMPORTED_MODULE_0__app_app_constants__["a" /* AUTH */].token = json.token;
                return json;
            }
            return null;
        });
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], UsuarioService);
    return UsuarioService;
}(__WEBPACK_IMPORTED_MODULE_3__abstract_service__["a" /* AbstractService */]));

//# sourceMappingURL=usuario-service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Perfil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstractentity__ = __webpack_require__(199);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Perfil = /** @class */ (function (_super) {
    __extends(Perfil, _super);
    function Perfil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Perfil;
}(__WEBPACK_IMPORTED_MODULE_0__abstractentity__["a" /* AbstractEntity */]));

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(-26.227652, -52.672028);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\FADEP - 5º Periodo\ComputacaoMovel\tcc\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="corfonte">Ponto Fácil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n  <div #map id="map"></div> \n  \n</ion-content>'/*ion-inline-end:"D:\FADEP - 5º Periodo\ComputacaoMovel\tcc\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH; });
var AUTH = { token: null };
//# sourceMappingURL=app.constants.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractEntity; });
var AbstractEntity = /** @class */ (function () {
    function AbstractEntity() {
    }
    Object.defineProperty(AbstractEntity.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractEntity;
}());

//# sourceMappingURL=abstractentity.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_perfil_cadastro__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__http_factory__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_perfil_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_perfil_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_11__http_factory__["a" /* httpFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* RequestOptions */]]
                },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_perfil_cadastro__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_usuario_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_perfil__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, usuarioService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.usuarioService = usuarioService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.perfil = new __WEBPACK_IMPORTED_MODULE_6__models_perfil__["a" /* Perfil */]();
        this.pages = [];
        this.pages = [
            { title: 'Favoritos' },
            { title: 'Sair', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], icon: 'exit' }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        if (page.component == __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]) {
            this.showConfirm(page);
        }
        else {
            this.nav.push(page.component);
        }
    };
    MyApp.prototype.showConfirm = function (page) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'ATENÇÃO!',
            subTitle: 'Deseja Realmente sair!',
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.nav.push(page.component);
                    }
                }
            ]
        });
        prompt.present();
    };
    //Evendo de click, na imagem para abrir o perfil
    MyApp.prototype.abrirPerfil = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_0__pages_perfil_cadastro__["a" /* CadastroPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\FADEP - 5º Periodo\ComputacaoMovel\tcc\src\app\app.html"*/'<ion-menu [content]="content" id="menu-perfil">\n\n  <ion-header class="cabecalho">\n\n    <ion-toolbar color="primary" class="usuario">\n\n      <img src="{{perfil.foto}}" class="imagem" menuClose (click)="abrirPerfil()">\n\n      <div class="text">Ponto Fácil</div>\n\n      <div class="text">Willian_mugnon@hotmail.com</div>\n\n    </ion-toolbar>\n\n    <ion-content>\n\n      <ion-list inset>\n\n        <button ion-item *ngFor="let p of pages" menuClose (click)="openPage(p)">\n\n      {{p.title}}\n\n    </button>\n\n      </ion-list>\n\n    </ion-content>\n\n\n\n  </ion-header>\n\n</ion-menu>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Desativar deslize para voltar, porque é mau UX para combinar STGB com menus laterais -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\FADEP - 5º Periodo\ComputacaoMovel\tcc\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_usuario_service__["a" /* UsuarioService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__services_usuario_service__["a" /* UsuarioService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(273);
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




var AbstractService = /** @class */ (function () {
    function AbstractService(http) {
        this.http = http;
        this.protocolo = 'http';
        this.ip = 'localhost';
        this.porta = '8080';
        this.contextSistema = 'MugBus/rest/';
        this.url = this.protocolo + '://' + this.ip + ':' + this.porta + '/' + this.contextSistema;
        this.urlWeb = '';
        this.urlWeb = this.url + this.getWebService();
    }
    AbstractService.prototype.findAll = function () {
        return this.http.get(this.urlWeb).map(function (res) {
            return res.json();
        });
    };
    AbstractService.prototype.findById = function (id) {
        return this.http.get(this.urlWeb + "/" + id).map(function (res) {
            return res.json();
        });
    };
    AbstractService.prototype.remove = function (id) {
        return this.http.delete(this.urlWeb + "/" + id).map(function (res) {
            return res.json();
        });
    };
    AbstractService.prototype.save = function (obj) {
        console.log(obj);
        return this.http.post(this.urlWeb + "/salvar", obj).map(function (res) {
            return res.json();
        });
    };
    AbstractService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]])
    ], AbstractService);
    return AbstractService;
}());

//# sourceMappingURL=abstract-service.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = httpFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_interceptor__ = __webpack_require__(283);

function httpFactory(xhrBackend, requestOptions) {
    return new __WEBPACK_IMPORTED_MODULE_0__http_interceptor__["a" /* InterceptorHttp */](xhrBackend, requestOptions);
}
//# sourceMappingURL=http.factory.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_constants__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_abstractentity__ = __webpack_require__(199);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InterceptorHttp = /** @class */ (function (_super) {
    __extends(InterceptorHttp, _super);
    function InterceptorHttp(backend, defaultOptions) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.backend = backend;
        _this.defaultOptions = defaultOptions;
        return _this;
    }
    InterceptorHttp.prototype.get = function (url, options) {
        return _super.prototype.get.call(this, this.updateBaseUrl(url), this.getRequestOptionsArgs(options));
    };
    InterceptorHttp.prototype.post = function (url, body, options) {
        return _super.prototype.post.call(this, this.updateBaseUrl(url), this.validarObjeto(body), this.getRequestOptionsArgs(options));
    };
    InterceptorHttp.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, this.updateBaseUrl(url), this.validarObjeto(body), this.getRequestOptionsArgs(options));
    };
    InterceptorHttp.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, this.updateBaseUrl(url), this.getRequestOptionsArgs(options));
    };
    InterceptorHttp.prototype.updateBaseUrl = function (url) {
        if (url.indexOf('http://') != -1) {
            return url;
        }
        else {
            // return BASE_URL + url;
        }
    };
    InterceptorHttp.prototype.getRequestOptionsArgs = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        }
        options.headers.append('Content-Type', 'application/json');
        if (__WEBPACK_IMPORTED_MODULE_0__app_constants__["a" /* AUTH */] != null) {
            options.headers.set('Authorization', __WEBPACK_IMPORTED_MODULE_0__app_constants__["a" /* AUTH */].token);
        }
        return options;
    };
    InterceptorHttp.prototype.validarObjeto = function (body) {
        var obj = '';
        if (body != null && ((body instanceof __WEBPACK_IMPORTED_MODULE_3__models_abstractentity__["a" /* AbstractEntity */]))) {
            // obj = JSON.stringify(Object.assign(body), Object.keys(body.constructor.prototype));
            obj = JSON.stringify(body);
            Object.keys(body).filter(function (key) { return key[0] === "_"; }).forEach(function (key) {
                obj = obj.replace(key, key.substring(1));
            });
        }
        else if (typeof body == 'object') {
            obj = JSON.stringify(body);
        }
        else {
            obj = body;
        }
        return obj;
    };
    InterceptorHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* ConnectionBackend */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]])
    ], InterceptorHttp);
    return InterceptorHttp;
}(__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]));

//# sourceMappingURL=http.interceptor.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map