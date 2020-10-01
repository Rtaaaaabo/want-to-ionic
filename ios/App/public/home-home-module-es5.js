function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/componet/list-room/list-room.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/componet/list-room/list-room.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeComponetListRoomListRoomComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list>\n  <ion-list-header>\n    <ion-label>Want to</ion-label>\n    <ion-button (click)=\"presentAddRoomItem('002')\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-button>\n  </ion-list-header>\n  <ion-item-sliding #slidingItem *ngFor=\"let room of roomList\">\n    <ion-item (click)=\"navigateToTask(room)\">\n      <!-- <ion-avatar slot=\"start\">\n        <img src=\"../../../assets/img/sojiro-taku.jpg\" />\n      </ion-avatar> -->\n      <ion-label>\n        <h2>{{ room.name }}</h2>\n        <p>{{ room.describe }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option color=\"danger\">\n        <ion-icon\n          slot=\"icon-only\"\n          name=\"trash\"\n          (click)=\"deleteRoom(room.id)\"\n        ></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>会社名</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-list-room></app-list-room>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/home/componet/list-room/list-room.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/home/componet/list-room/list-room.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeComponetListRoomListRoomComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZXQvbGlzdC1yb29tL2xpc3Qtcm9vbS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/home/componet/list-room/list-room.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/home/componet/list-room/list-room.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ListRoomComponent */

  /***/
  function srcAppPagesHomeComponetListRoomListRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListRoomComponent", function () {
      return ListRoomComponent;
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


    var _shared_component_modal_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/component/modal/add-room-modal/add-room-modal.component */
    "./src/app/shared/component/modal/add-room-modal/add-room-modal.component.ts");
    /* harmony import */


    var _logic_home_logic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../logic/home-logic.service */
    "./src/app/pages/home/logic/home-logic.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ListRoomComponent = /*#__PURE__*/function () {
      function ListRoomComponent(modalCtrl, homeLogic, router) {
        _classCallCheck(this, ListRoomComponent);

        this.modalCtrl = modalCtrl;
        this.homeLogic = homeLogic;
        this.router = router;
      }

      _createClass(ListRoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.homeLogic.listRoom('takuCloudCom').subscribe(function (result) {
            _this.roomList = result;
          });
        }
      }, {
        key: "presentAddRoomItem",
        value: function presentAddRoomItem(companyId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal, observable;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _shared_component_modal_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_4__["AddRoomModalComponent"]
                    });

                  case 2:
                    modal = _context.sent;
                    observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(modal.onDidDismiss());
                    observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(function (_ref) {
                      var data = _ref.data;
                      return _this2.homeLogic.createRoom(data);
                    })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(function () {
                      return _this2.homeLogic.listRoom('takuCloudCom');
                    })).subscribe(function (response) {
                      _this2.roomList = response;
                    });
                    return _context.abrupt("return", modal.present());

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "navigateToTask",
        value: function navigateToTask(room) {
          this.router.navigate(['task', "".concat(room.id)]);
        }
      }, {
        key: "deleteRoom",
        value: function deleteRoom(roomId) {
          var _this3 = this;

          this.homeLogic.deleteRoomItem(roomId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(function () {
            return _this3.homeLogic.listRoom('takuCloudCom');
          })).subscribe(function (response) {
            _this3.roomList = response;
          });
        }
      }]);

      return ListRoomComponent;
    }();

    ListRoomComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _logic_home_logic_service__WEBPACK_IMPORTED_MODULE_5__["HomeLogicService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ListRoomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-room',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list-room.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/componet/list-room/list-room.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list-room.component.scss */
      "./src/app/pages/home/componet/list-room/list-room.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _logic_home_logic_service__WEBPACK_IMPORTED_MODULE_5__["HomeLogicService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ListRoomComponent);
    /***/
  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var _componet_list_room_list_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./componet/list-room/list-room.component */
    "./src/app/pages/home/componet/list-room/list-room.component.ts");
    /* harmony import */


    var _service_home_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./service/home-service.service */
    "./src/app/pages/home/service/home-service.service.ts");
    /* harmony import */


    var _logic_home_logic_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./logic/home-logic.service */
    "./src/app/pages/home/logic/home-logic.service.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomePageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      entryComponents: [],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _componet_list_room_list_room_component__WEBPACK_IMPORTED_MODULE_7__["ListRoomComponent"]],
      providers: [_service_home_service_service__WEBPACK_IMPORTED_MODULE_8__["HomeService"], _logic_home_logic_service__WEBPACK_IMPORTED_MODULE_9__["HomeLogicService"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_component_modal_edit_profile_modal_edit_profile_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component */
    "./src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component.ts");
    /* harmony import */


    var _logic_home_logic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./logic/home-logic.service */
    "./src/app/pages/home/logic/home-logic.service.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(logic, modalCtrl) {
        _classCallCheck(this, HomePage);

        this.logic = logic;
        this.modalCtrl = modalCtrl;
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.logic.fetchCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (attributes) {
            _this4.attributes = attributes;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () {
            return _this4.logic.checkRegistrationUser(_this4.attributes);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (_ref2) {
            var items = _ref2.items;
            return items.length === 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('Already');
          })).subscribe(function (data) {
            if (data === 'Already') {
              return;
            }

            _this4.presentRegistrationUser();
          });
        }
      }, {
        key: "presentRegistrationUser",
        value: function presentRegistrationUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: src_app_shared_component_modal_edit_profile_modal_edit_profile_modal_component__WEBPACK_IMPORTED_MODULE_5__["EditProfileModalComponent"],
                      componentProps: {
                        'status': 'new',
                        'email': this.attributes.email,
                        'userId': this.attributes.sub
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    return _context2.abrupt("return", modal.present());

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _logic_home_logic_service__WEBPACK_IMPORTED_MODULE_6__["HomeLogicService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_logic_home_logic_service__WEBPACK_IMPORTED_MODULE_6__["HomeLogicService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map