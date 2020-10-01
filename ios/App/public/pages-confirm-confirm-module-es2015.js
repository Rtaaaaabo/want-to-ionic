(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-confirm-confirm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confirm/confirm.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confirm/confirm.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>ユーザーの確認</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding content-margin\">\n  <form [formGroup]=\"confirmForm\">\n    <ion-item>\n      <ion-label position=\"stacked\">確認コード</ion-label>\n      <ion-input\n        required\n        type=\"text\"\n        formControlName=\"confirmNumber\"\n      ></ion-input>\n    </ion-item>\n    <ion-button type=\"submit\" (click)=\"confirmSignup()\" expand=\"block\"\n      >確認</ion-button\n    >\n  </form>\n\n  <div class=\"center-signup\">\n    <a (click)=\"reSendSignup()\">再度送る</a>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/confirm/confirm-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/confirm/confirm-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function() { return ConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm.page */ "./src/app/pages/confirm/confirm.page.ts");




const routes = [
    {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
    }
];
let ConfirmPageRoutingModule = class ConfirmPageRoutingModule {
};
ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/confirm/confirm.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/confirm/confirm.module.ts ***!
  \*************************************************/
/*! exports provided: ConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-routing.module */ "./src/app/pages/confirm/confirm-routing.module.ts");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm.page */ "./src/app/pages/confirm/confirm.page.ts");
/* harmony import */ var _logic_confirm_logic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logic/confirm-logic.service */ "./src/app/pages/confirm/logic/confirm-logic.service.ts");









let ConfirmPageModule = class ConfirmPageModule {
};
ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]
        ],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]],
        providers: [_logic_confirm_logic_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmLogicService"]],
    })
], ConfirmPageModule);



/***/ }),

/***/ "./src/app/pages/confirm/confirm.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/confirm/confirm.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center-signup {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.content-margin {\n  margin: 30% 10% 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWt1bmFrYWdhd2EvZGV2L2lvbmljL3dhbnRUby9zcmMvYXBwL3BhZ2VzL2NvbmZpcm0vY29uZmlybS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbmZpcm0vY29uZmlybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uZmlybS9jb25maXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItc2lnbnVwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbnRlbnQtbWFyZ2luIHtcbiAgICBtYXJnaW46IDMwJSAxMCUgMDtcbn0iLCIuY2VudGVyLXNpZ251cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbnRlbnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAzMCUgMTAlIDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/confirm/confirm.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/confirm/confirm.page.ts ***!
  \***********************************************/
/*! exports provided: ConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPage", function() { return ConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _logic_confirm_logic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/confirm-logic.service */ "./src/app/pages/confirm/logic/confirm-logic.service.ts");





let ConfirmPage = class ConfirmPage {
    constructor(logic, router) {
        this.logic = logic;
        this.router = router;
        this.confirmForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            confirmNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    }
    ngOnInit() {
        this.confirmTargetEmail = this.router.getCurrentNavigation().extras.state.data.email;
    }
    confirmSignup() {
        this.logic.sendConfirmUser(this.confirmTargetEmail, this.confirmForm.get('confirmNumber').value).subscribe(() => {
            this.router.navigate(['/login']);
        });
    }
    reSendSignup() {
        console.log('reSendSignup');
    }
};
ConfirmPage.ctorParameters = () => [
    { type: _logic_confirm_logic_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmLogicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirm.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confirm/confirm.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirm.page.scss */ "./src/app/pages/confirm/confirm.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_logic_confirm_logic_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmLogicService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ConfirmPage);



/***/ }),

/***/ "./src/app/pages/confirm/logic/confirm-logic.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/confirm/logic/confirm-logic.service.ts ***!
  \**************************************************************/
/*! exports provided: ConfirmLogicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmLogicService", function() { return ConfirmLogicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_service_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/session.service */ "./src/app/shared/service/session.service.ts");



let ConfirmLogicService = class ConfirmLogicService {
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
    sendConfirmUser(username, code) {
        return this.sessionService.confirmSignUp(username, code);
    }
    resendConfirm(username) {
        return this.sessionService.resendConfirmNumberForSignUp(username);
    }
};
ConfirmLogicService.ctorParameters = () => [
    { type: _shared_service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }
];
ConfirmLogicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
], ConfirmLogicService);



/***/ })

}]);
//# sourceMappingURL=pages-confirm-confirm-module-es2015.js.map