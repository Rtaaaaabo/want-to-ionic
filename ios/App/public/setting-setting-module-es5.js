function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSettingSettingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>設定</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-avatar class=\"profile-icon\">\n      <img src=\"../../../assets/svg/anonymous.svg\" />\n    </ion-avatar>\n    <ion-label class=\"margin-left\">\n      <h2>{{ user?.username }}</h2>\n      <p>{{ user?.positionName }}</p>\n      <a (click)=\"presentEditModal()\">編集</a>\n    </ion-label>\n  </ion-item>\n  <!-- <ion-card>\n    <ion-card-content>\n      <p>test</p>\n      <ion-list>\n        <ion-item> TEST </ion-item>\n        <ion-item> TEST </ion-item>\n        <ion-item> TEST </ion-item>\n        <ion-item lines=\"none\"> TEST </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card> -->\n  <ion-item\n    class=\"logout-line\"\n    lines=\"none\"\n    color=\"danger\"\n    (click)=\"confirmLogout()\"\n    >ログアウト</ion-item\n  >\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/setting/logic/setting-logic.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/setting/logic/setting-logic.service.ts ***!
    \**************************************************************/

  /*! exports provided: SettingLogic */

  /***/
  function srcAppPagesSettingLogicSettingLogicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingLogic", function () {
      return SettingLogic;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_service_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/service/session.service */
    "./src/app/shared/service/session.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _service_setting_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/setting-service.service */
    "./src/app/pages/setting/service/setting-service.service.ts");

    var SettingLogic = /*#__PURE__*/function () {
      function SettingLogic(sessionService, settingService) {
        _classCallCheck(this, SettingLogic);

        this.sessionService = sessionService;
        this.settingService = settingService;
      }

      _createClass(SettingLogic, [{
        key: "signOut",
        value: function signOut() {
          return this.sessionService.signOut().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return error;
          }));
        }
      }, {
        key: "fetchCurrentUser",
        value: function fetchCurrentUser() {
          return this.sessionService.fetchCurrentUser();
        }
      }, {
        key: "fetchUserInfo",
        value: function fetchUserInfo(userId) {
          return this.settingService.fetchUserInfo(userId);
        }
      }]);

      return SettingLogic;
    }();

    SettingLogic.ctorParameters = function () {
      return [{
        type: _shared_service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
      }, {
        type: _service_setting_service_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]
      }];
    };

    SettingLogic = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"], _service_setting_service_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]])], SettingLogic);
    /***/
  },

  /***/
  "./src/app/pages/setting/service/setting-service.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/setting/service/setting-service.service.ts ***!
    \******************************************************************/

  /*! exports provided: SettingService */

  /***/
  function srcAppPagesSettingServiceSettingServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingService", function () {
      return SettingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_service_amplify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/service/amplify.service */
    "./src/app/shared/service/amplify.service.ts");

    var SettingService = /*#__PURE__*/function () {
      function SettingService(amplifyService) {
        _classCallCheck(this, SettingService);

        this.amplifyService = amplifyService;
      }

      _createClass(SettingService, [{
        key: "fetchUserInfo",
        value: function fetchUserInfo(userId) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.amplifyService.GetUser(userId));
        }
      }]);

      return SettingService;
    }();

    SettingService.ctorParameters = function () {
      return [{
        type: _shared_service_amplify_service__WEBPACK_IMPORTED_MODULE_3__["AmplifyService"]
      }];
    };

    SettingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_amplify_service__WEBPACK_IMPORTED_MODULE_3__["AmplifyService"]])], SettingService);
    /***/
  },

  /***/
  "./src/app/pages/setting/setting-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/setting/setting-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SettingPageRoutingModule */

  /***/
  function srcAppPagesSettingSettingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function () {
      return SettingPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./setting.page */
    "./src/app/pages/setting/setting.page.ts");

    var routes = [{
      path: '',
      component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
    }];

    var SettingPageRoutingModule = function SettingPageRoutingModule() {
      _classCallCheck(this, SettingPageRoutingModule);
    };

    SettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SettingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/setting/setting.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/setting/setting.module.ts ***!
    \*************************************************/

  /*! exports provided: SettingPageModule */

  /***/
  function srcAppPagesSettingSettingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPageModule", function () {
      return SettingPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./setting-routing.module */
    "./src/app/pages/setting/setting-routing.module.ts");
    /* harmony import */


    var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./setting.page */
    "./src/app/pages/setting/setting.page.ts");

    var SettingPageModule = function SettingPageModule() {
      _classCallCheck(this, SettingPageModule);
    };

    SettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPageRoutingModule"]],
      declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
    })], SettingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/setting/setting.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/setting/setting.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSettingSettingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".margin-left {\n  margin-left: 20px;\n}\n\n.profile-icon {\n  width: 48px;\n  height: 48px;\n}\n\n.logout-line {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWt1bmFrYWdhd2EvZGV2L2lvbmljL3dhbnRUby9zcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ucHJvZmlsZS1pY29uIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5sb2dvdXQtbGluZSB7XG4gICAgbWFyZ2luOiAxMHB4O1xufSIsIi5tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ucHJvZmlsZS1pY29uIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmxvZ291dC1saW5lIHtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/setting/setting.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/setting/setting.page.ts ***!
    \***********************************************/

  /*! exports provided: SettingPage */

  /***/
  function srcAppPagesSettingSettingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPage", function () {
      return SettingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _logic_setting_logic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./logic/setting-logic.service */
    "./src/app/pages/setting/logic/setting-logic.service.ts");
    /* harmony import */


    var _shared_component_modal_edit_profile_modal_edit_profile_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/component/modal/edit-profile-modal/edit-profile-modal.component */
    "./src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SettingPage = /*#__PURE__*/function () {
      function SettingPage(actionSheetCtrl, logic, router, modalCtrl) {
        _classCallCheck(this, SettingPage);

        this.actionSheetCtrl = actionSheetCtrl;
        this.logic = logic;
        this.router = router;
        this.modalCtrl = modalCtrl;
      }

      _createClass(SettingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.logic.fetchCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(function (result) {
            return _this.logic.fetchUserInfo(result.username);
          })).subscribe(function (data) {
            console.log(data);
            _this.user = data;
          });
        }
      }, {
        key: "confirmLogout",
        value: function confirmLogout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var logoutActionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetCtrl.create({
                      cssClass: 'my-custom-class',
                      buttons: [{
                        text: 'ログアウト',
                        role: 'destructive',
                        handler: function handler() {
                          _this2.actionLogout();
                        }
                      }, {
                        text: 'キャンセル',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    logoutActionSheet = _context.sent;
                    return _context.abrupt("return", logoutActionSheet.present());

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "actionLogout",
        value: function actionLogout() {
          var _this3 = this;

          this.logic.signOut().subscribe(function () {
            return _this3.router.navigate(['/login']);
          });
        }
      }, {
        key: "presentEditModal",
        value: function presentEditModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal, observable;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _shared_component_modal_edit_profile_modal_edit_profile_modal_component__WEBPACK_IMPORTED_MODULE_5__["EditProfileModalComponent"],
                      componentProps: {
                        status: 'already',
                        user: this.user
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(modal.onDidDismiss());
                    return _context2.abrupt("return", modal.present());

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return SettingPage;
    }();

    SettingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }, {
        type: _logic_setting_logic_service__WEBPACK_IMPORTED_MODULE_4__["SettingLogic"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    SettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-setting',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./setting.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./setting.page.scss */
      "./src/app/pages/setting/setting.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _logic_setting_logic_service__WEBPACK_IMPORTED_MODULE_4__["SettingLogic"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], SettingPage);
    /***/
  }
}]);
//# sourceMappingURL=setting-setting-module-es5.js.map