function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/add-room-modal/add-room-modal.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/add-room-modal/add-room-modal.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentModalAddRoomModalAddRoomModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>案件の追加</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"roomItemGroup\">\n    <ion-item>\n      <ion-label position=\"floating\">案件名</ion-label>\n      <ion-input formControlName=\"nameItem\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">詳細</ion-label>\n      <ion-textarea autoGrow=\"true\b\" formControlName=\"descriptionItem\">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-button\n      (click)=\"createItem()\"\n      [disabled]=\"nameItem.invalid\"\n      expand=\"full\"\n      >追加\n    </ion-button>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/add-task-modal/add-task-modal.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/add-task-modal/add-task-modal.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentModalAddTaskModalAddTaskModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>{{ room.name }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"taskItemForm\">\n    <ion-item>\n      <ion-label position=\"floating\">名前</ion-label>\n      <ion-input formControlName=\"nameItem\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">説明</ion-label>\n      <ion-input formControlName=\"descriptionItem\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">期限</ion-label>\n      <ion-datetime\n        (ionChange)=\"changeDate()\"\n        displayFormat=\"YYYY/MM/DD\"\n        displayTimezone=\"Asia/Tokyo\"\n        cancelText=\"キャンセル\"\n        dayNames=\"曜日\"\n        formControlName=\"scheduleDateItem\"\n        doneText=\"完了\"\n        [min]=\"minYear\"\n        [max]=\"maxYear\"\n        [value]=\"currentIsoString\"\n      ></ion-datetime>\n    </ion-item>\n\n    \b<ion-button\n      (click)=\"createTaskItem()\"\n      [disabled]=\"taskItemForm.invalid\"\n      expand=\"full\"\n    >\n      追加\n    </ion-button>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/delete-task-modal/delete-task-modal.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/delete-task-modal/delete-task-modal.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentModalDeleteTaskModalDeleteTaskModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>タスクを削除してもよいでしょうか？</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content fullscreen padding>\n  <ion-grid class=\"item-paddind\">\n    <ion-row class=\"ion-align-items-center ion-padding-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <p>「{{ task.title }}」</p>\n        <p>削除してもよいでしょうか？</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"6\" class=\"ion-text-center ion-padding-top\">\n        <ion-button (click)=\"onCancel()\">キャンセル</ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-button\n          (click)=\"deleteTargetTask(task)\"\n          color=\"danger\"\n          fill=\"outline\"\n        >\n          削除\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentModalEditProfileModalEditProfileModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons *ngIf=\"status !== 'new'\" slot=\"start\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"editProfileForm.invalid\" (click)=\"saveProfile()\"\n        >保存</ion-button\n      >\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"editProfileForm\">\n    <div class=\"card\">\n      <div class=\"header\">\n        <div class=\"avatar\">\n          <img src=\"../../../../../assets/svg/anonymous.svg\" alt=\"\" />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card-body\">\n      <div class=\"user-meta ion-text-center\">\n        <ion-item>\n          <ion-label position=\"floating\">名前</ion-label>\n          <ion-input\n            formControlName=\"userName\"\n            placeholder=\"名前を追加\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">役職</ion-label>\n          <ion-input\n            formControlName=\"positionName\"\n            placeholder=\"役職や職種、ポジションなどを追加\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input\n            [disabled]=\"true\"\n            formControlName=\"targetEmail\"\n            placeholder=\"メールアドレスを追加\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">電話番号</ion-label>\n          <ion-input\n            formControlName=\"tel\"\n            placeholder=\"電話番号を追加\"\n          ></ion-input>\n        </ion-item>\n      </div>\n    </div>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guard/auth.guard */
    "./src/app/guard/auth.guard.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tabs-tabs-module */
        "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./pages/tabs/tabs.module */
        "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'setting',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-setting-setting-module */
        "setting-setting-module").then(__webpack_require__.bind(null,
        /*! ./pages/setting/setting.module */
        "./src/app/pages/setting/setting.module.ts")).then(function (m) {
          return m.SettingPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'own-task',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-own-task-own-task-module */
        "own-task-own-task-module").then(__webpack_require__.bind(null,
        /*! ./pages/own-task/own-task.module */
        "./src/app/pages/own-task/own-task.module.ts")).then(function (m) {
          return m.OwnTaskPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-signup-signup-module */
        "pages-signup-signup-module").then(__webpack_require__.bind(null,
        /*! ./pages/signup/signup.module */
        "./src/app/pages/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'confirm',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-confirm-confirm-module */
        "pages-confirm-confirm-module").then(__webpack_require__.bind(null,
        /*! ./pages/confirm/confirm.module */
        "./src/app/pages/confirm/confirm.module.ts")).then(function (m) {
          return m.ConfirmPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'task',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-task-task-module */
        "pages-task-task-module").then(__webpack_require__.bind(null,
        /*! ./pages/task/task.module */
        "./src/app/pages/task/task.module.ts")).then(function (m) {
          return m.TaskPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'task-detail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-task-detail-task-detail-module */
        "pages-task-detail-task-detail-module").then(__webpack_require__.bind(null,
        /*! ./pages/task-detail/task-detail.module */
        "./src/app/pages/task-detail/task-detail.module.ts")).then(function (m) {
          return m.TaskDetailPageModule;
        });
      }
    }, {
      path: 'comment',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-comment-comment-module */
        "pages-comment-comment-module").then(__webpack_require__.bind(null,
        /*! ./pages/comment/comment.module */
        "./src/app/pages/comment/comment.module.ts")).then(function (m) {
          return m.CommentPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 64]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/guard/auth.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/guard/auth.guard.ts ***!
    \*************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_service_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/service/session.service */
    "./src/app/shared/service/session.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(sessionService, router) {
        _classCallCheck(this, AuthGuard);

        this.sessionService = sessionService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this2 = this;

          return this.sessionService.isAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            if (!loggedIn) {
              _this2.router.navigate(['/login']);
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _shared_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/pages/home/logic/home-logic.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/home/logic/home-logic.service.ts ***!
    \********************************************************/

  /*! exports provided: HomeLogicService */

  /***/
  function srcAppPagesHomeLogicHomeLogicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeLogicService", function () {
      return HomeLogicService;
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


    var _service_home_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/home-service.service */
    "./src/app/pages/home/service/home-service.service.ts");
    /* harmony import */


    var _shared_service_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/service/session.service */
    "./src/app/shared/service/session.service.ts");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    ;

    var HomeLogicService = /*#__PURE__*/function () {
      function HomeLogicService(homeService, sessionService) {
        _classCallCheck(this, HomeLogicService);

        this.homeService = homeService;
        this.sessionService = sessionService;
      }

      _createClass(HomeLogicService, [{
        key: "checkRegistrationUser",
        value: function checkRegistrationUser(attribute) {
          return this.homeService.checkRegistrationUser(attribute.email);
        }
      }, {
        key: "fetchCurrentUser",
        value: function fetchCurrentUser() {
          return this.sessionService.fetchCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.attributes;
          }));
        }
      }, {
        key: "createRoom",
        value: function createRoom(content) {
          var requestContent = {
            id: "".concat(Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])()),
            companyID: 'takuCloudCom',
            name: content.nameItem,
            description: content.descriptionItem
          };
          return this.homeService.createRoom(requestContent);
        }
      }, {
        key: "createUser",
        value: function createUser(formContent) {
          var requestContent = {
            id: formContent.get('id').value,
            companyID: 'takuCloudCom',
            email: formContent.get('targetEmail').value,
            username: formContent.get('userName').value,
            positionName: formContent.get('positionName').value,
            tel: formContent.get('tel').value,
            iconImage: formContent.get('iconImage').value
          };
          console.log("requestContent: ".concat(requestContent));
          return this.homeService.createUser(requestContent);
        }
      }, {
        key: "listRoom",
        value: function listRoom(companyId) {
          return this.homeService.fetchRoomList(companyId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result.items;
          }));
        }
      }, {
        key: "deleteRoomItem",
        value: function deleteRoomItem(roomId) {
          return this.homeService.deleteRoomItem(roomId);
        }
      }]);

      return HomeLogicService;
    }();

    HomeLogicService.ctorParameters = function () {
      return [{
        type: _service_home_service_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]
      }, {
        type: _shared_service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
      }];
    };

    HomeLogicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_home_service_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"], _shared_service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])], HomeLogicService);
    /***/
  },

  /***/
  "./src/app/pages/home/service/home-service.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/home/service/home-service.service.ts ***!
    \************************************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppPagesHomeServiceHomeServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
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


    var _shared_service_amplify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/service/amplify.service */
    "./src/app/shared/service/amplify.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var HomeService = /*#__PURE__*/function () {
      function HomeService(amplifyService) {
        _classCallCheck(this, HomeService);

        this.amplifyService = amplifyService;
      }

      _createClass(HomeService, [{
        key: "checkRegistrationUser",
        value: function checkRegistrationUser(email) {
          var filterContent = {
            email: {
              eq: "".concat(email)
            }
          };
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.ListUsers(filterContent));
        }
      }, {
        key: "createRoom",
        value: function createRoom(content) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.CreateRoom(content));
        }
      }, {
        key: "createUser",
        value: function createUser(content) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.CreateUser(content));
        }
      }, {
        key: "fetchRoomList",
        value: function fetchRoomList(companyId) {
          var filterContent = {
            companyID: {
              eq: "".concat(companyId)
            }
          };
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.ListRooms(filterContent));
        }
      }, {
        key: "deleteRoomItem",
        value: function deleteRoomItem(roomId) {
          var requestContent = {
            id: roomId
          };
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.DeleteRoom(requestContent));
        }
      }]);

      return HomeService;
    }();

    HomeService.ctorParameters = function () {
      return [{
        type: _shared_service_amplify_service__WEBPACK_IMPORTED_MODULE_2__["AmplifyService"]
      }];
    };

    HomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_amplify_service__WEBPACK_IMPORTED_MODULE_2__["AmplifyService"]])], HomeService);
    /***/
  },

  /***/
  "./src/app/shared/component/modal/add-room-modal/add-room-modal.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared/component/modal/add-room-modal/add-room-modal.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentModalAddRoomModalAddRoomModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvYWRkLXJvb20tbW9kYWwvYWRkLXJvb20tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/component/modal/add-room-modal/add-room-modal.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/shared/component/modal/add-room-modal/add-room-modal.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: AddRoomModalComponent */

  /***/
  function srcAppSharedComponentModalAddRoomModalAddRoomModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRoomModalComponent", function () {
      return AddRoomModalComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddRoomModalComponent = /*#__PURE__*/function () {
      function AddRoomModalComponent(modalCtrl) {
        _classCallCheck(this, AddRoomModalComponent);

        this.modalCtrl = modalCtrl;
        this.roomItemGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          nameItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
          descriptionItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
      }

      _createClass(AddRoomModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "createItem",
        value: function createItem() {
          this.modalCtrl.dismiss(this.roomItemGroup.value);
        }
      }, {
        key: "nameItem",
        get: function get() {
          return this.roomItemGroup.get('nameItem');
        }
      }, {
        key: "descriptionItem",
        get: function get() {
          return this.roomItemGroup.get('descriptionItem');
        }
      }]);

      return AddRoomModalComponent;
    }();

    AddRoomModalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    AddRoomModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-room-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-room-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/add-room-modal/add-room-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-room-modal.component.scss */
      "./src/app/shared/component/modal/add-room-modal/add-room-modal.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], AddRoomModalComponent);
    /***/
  },

  /***/
  "./src/app/shared/component/modal/add-task-modal/add-task-modal.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared/component/modal/add-task-modal/add-task-modal.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentModalAddTaskModalAddTaskModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvYWRkLXRhc2stbW9kYWwvYWRkLXRhc2stbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/component/modal/add-task-modal/add-task-modal.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/shared/component/modal/add-task-modal/add-task-modal.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: AddTaskModalComponent */

  /***/
  function srcAppSharedComponentModalAddTaskModalAddTaskModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTaskModalComponent", function () {
      return AddTaskModalComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddTaskModalComponent = /*#__PURE__*/function () {
      function AddTaskModalComponent(modalCtrl) {
        _classCallCheck(this, AddTaskModalComponent);

        this.modalCtrl = modalCtrl;
        this.taskItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          nameItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
          descriptionItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          scheduleDateItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.minYear = '';
        this.maxYear = '';
      }

      _createClass(AddTaskModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.taskDetail !== undefined) {
            this.taskItemForm.patchValue({
              nameItem: this.taskDetail.title,
              descriptionItem: this.taskDetail.description
            });
            this.room = this.taskDetail.room;
          }

          console.log(this.taskDetail);
          var currentDate = new Date();
          this.minYear = currentDate.getFullYear().toString();
          this.maxYear = (currentDate.getFullYear() + 1).toString();
          this.currentIsoString = currentDate.toISOString();
          this.taskItemForm.patchValue({
            scheduleDateItem: this.currentIsoString
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "createTaskItem",
        value: function createTaskItem() {
          this.modalCtrl.dismiss(this.taskItemForm.value);
        }
      }, {
        key: "changeDate",
        value: function changeDate() {
          console.log('changeDate');
        }
      }]);

      return AddTaskModalComponent;
    }();

    AddTaskModalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    AddTaskModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-task-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-task-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/add-task-modal/add-task-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-task-modal.component.scss */
      "./src/app/shared/component/modal/add-task-modal/add-task-modal.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], AddTaskModalComponent);
    /***/
  },

  /***/
  "./src/app/shared/component/modal/delete-task-modal/delete-task-modal.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/shared/component/modal/delete-task-modal/delete-task-modal.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentModalDeleteTaskModalDeleteTaskModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-paddind {\n  margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWt1bmFrYWdhd2EvZGV2L2lvbmljL3dhbnRUby9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvZGVsZXRlLXRhc2stbW9kYWwvZGVsZXRlLXRhc2stbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvZGVsZXRlLXRhc2stbW9kYWwvZGVsZXRlLXRhc2stbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDSSxlQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L21vZGFsL2RlbGV0ZS10YXNrLW1vZGFsL2RlbGV0ZS10YXNrLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnQge1xuLy8gICAgIGRpdiB7XG4vLyAgICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIH1cbi8vIH1cblxuLml0ZW0tcGFkZGluZCB7XG4gICAgbWFyZ2luLXRvcDogNTAlO1xufSIsIi5pdGVtLXBhZGRpbmQge1xuICBtYXJnaW4tdG9wOiA1MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/component/modal/delete-task-modal/delete-task-modal.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/shared/component/modal/delete-task-modal/delete-task-modal.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DeleteTaskModalComponent */

  /***/
  function srcAppSharedComponentModalDeleteTaskModalDeleteTaskModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteTaskModalComponent", function () {
      return DeleteTaskModalComponent;
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

    var DeleteTaskModalComponent = /*#__PURE__*/function () {
      function DeleteTaskModalComponent(modalCtrl) {
        _classCallCheck(this, DeleteTaskModalComponent);

        this.modalCtrl = modalCtrl;
      }

      _createClass(DeleteTaskModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "deleteTargetTask",
        value: function deleteTargetTask(taskItem) {
          this.modalCtrl.dismiss(taskItem);
        }
      }]);

      return DeleteTaskModalComponent;
    }();

    DeleteTaskModalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    DeleteTaskModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete-task-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./delete-task-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/delete-task-modal/delete-task-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./delete-task-modal.component.scss */
      "./src/app/shared/component/modal/delete-task-modal/delete-task-modal.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], DeleteTaskModalComponent);
    /***/
  },

  /***/
  "./src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentModalEditProfileModalEditProfileModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.card {\n  margin: 0 auto;\n}\n.card .header {\n  height: 200px;\n}\n.card .header .avatar {\n  width: 120px;\n  height: 120px;\n  position: relative;\n  margin: 0 auto;\n}\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  border: 3px solid #4dd0e1;\n}\n.card-body {\n  padding: 10px;\n  height: calc(100vh – (200px + 56px));\n  overflow: hidden;\n}\n.card-body .user-meta {\n  padding-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9tb2RhbC9lZGl0LXByb2ZpbGUtbW9kYWwvZWRpdC1wcm9maWxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Rha3VuYWthZ2F3YS9kZXYvaW9uaWMvd2FudFRvL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9tb2RhbC9lZGl0LXByb2ZpbGUtbW9kYWwvZWRpdC1wcm9maWxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGNBQUE7QURFSjtBQ0FJO0VBQ0ksYUFBQTtBREVSO0FDQVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBREVaO0FDQVk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QURFaEI7QUNJQTtFQUNJLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FEREo7QUNHSTtFQUNJLGlCQUFBO0FERFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L21vZGFsL2VkaXQtcHJvZmlsZS1tb2RhbC9lZGl0LXByb2ZpbGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2FyZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQgLmhlYWRlciB7XG4gIGhlaWdodDogMjAwcHg7XG59XG4uY2FyZCAuaGVhZGVyIC5hdmF0YXIge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIC5hdmF0YXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzRkZDBlMTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCDigJMgKDIwMHB4ICsgNTZweCkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59IiwiLmNhcmQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNGRkMGUxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCDigJMgKDIwMHB4ICsgNTZweCkpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAudXNlci1tZXRhIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: EditProfileModalComponent */

  /***/
  function srcAppSharedComponentModalEditProfileModalEditProfileModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileModalComponent", function () {
      return EditProfileModalComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pages_home_logic_home_logic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../pages/home/logic/home-logic.service */
    "./src/app/pages/home/logic/home-logic.service.ts");

    var EditProfileModalComponent = /*#__PURE__*/function () {
      function EditProfileModalComponent(modalCtrl, logic) {
        _classCallCheck(this, EditProfileModalComponent);

        this.modalCtrl = modalCtrl;
        this.logic = logic;
        this.editProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          iconImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
          positionName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          targetEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
          tel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
      }

      _createClass(EditProfileModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.status === 'new') {
            this.editProfileForm.patchValue({
              id: this.userId,
              targetEmail: this.email
            });
            this.title = 'プロフィールの作成';
            console.log(this.editProfileForm.value);
          } else {
            this.editProfileForm.patchValue({
              id: this.user.id,
              targetEmail: this.user.email,
              userName: this.user.username,
              positionName: this.user.positionName,
              tel: this.user.tel
            });
            this.title = 'プロフィールの編集';
          }
        }
      }, {
        key: "saveProfile",
        value: function saveProfile() {
          var _this3 = this;

          this.logic.createUser(this.editProfileForm).subscribe(function () {
            _this3.modalCtrl.dismiss();
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalCtrl.dismiss();
        }
      }]);

      return EditProfileModalComponent;
    }();

    EditProfileModalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _pages_home_logic_home_logic_service__WEBPACK_IMPORTED_MODULE_4__["HomeLogicService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], EditProfileModalComponent.prototype, "status", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], EditProfileModalComponent.prototype, "email", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], EditProfileModalComponent.prototype, "userId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditProfileModalComponent.prototype, "user", void 0);
    EditProfileModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-profile-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-profile-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-profile-modal.component.scss */
      "./src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _pages_home_logic_home_logic_service__WEBPACK_IMPORTED_MODULE_4__["HomeLogicService"]])], EditProfileModalComponent);
    /***/
  },

  /***/
  "./src/app/shared/logic/shared-logic.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/logic/shared-logic.service.ts ***!
    \******************************************************/

  /*! exports provided: SharedLogicService */

  /***/
  function srcAppSharedLogicSharedLogicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedLogicService", function () {
      return SharedLogicService;
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

    var SharedLogicService = function SharedLogicService(modalCtrl) {
      _classCallCheck(this, SharedLogicService);

      this.modalCtrl = modalCtrl;
    };

    SharedLogicService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    SharedLogicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], SharedLogicService);
    /***/
  },

  /***/
  "./src/app/shared/service/amplify.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/service/amplify.service.ts ***!
    \***************************************************/

  /*! exports provided: ModelAttributeTypes, AmplifyService */

  /***/
  function srcAppSharedServiceAmplifyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelAttributeTypes", function () {
      return ModelAttributeTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmplifyService", function () {
      return AmplifyService;
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


    var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @aws-amplify/api */
    "./node_modules/@aws-amplify/api/lib-esm/index.js");
    /* tslint:disable */

    /* eslint-disable */
    //  This file was automatically generated and should not be edited.


    var ModelAttributeTypes;

    (function (ModelAttributeTypes) {
      ModelAttributeTypes["binary"] = "binary";
      ModelAttributeTypes["binarySet"] = "binarySet";
      ModelAttributeTypes["bool"] = "bool";
      ModelAttributeTypes["list"] = "list";
      ModelAttributeTypes["map"] = "map";
      ModelAttributeTypes["number"] = "number";
      ModelAttributeTypes["numberSet"] = "numberSet";
      ModelAttributeTypes["string"] = "string";
      ModelAttributeTypes["stringSet"] = "stringSet";
      ModelAttributeTypes["_null"] = "_null";
    })(ModelAttributeTypes || (ModelAttributeTypes = {}));

    var AmplifyService = /*#__PURE__*/function () {
      function AmplifyService() {
        _classCallCheck(this, AmplifyService);

        this.OnCreateCompanyListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnCreateCompany {\n        onCreateCompany {\n          __typename\n          id\n          name\n          domain\n          room {\n            __typename\n            items {\n              __typename\n              id\n              companyID\n              name\n              description\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          members {\n            __typename\n            items {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          createdAt\n          updatedAt\n        }\n      }"));
        this.OnUpdateCompanyListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnUpdateCompany {\n        onUpdateCompany {\n          __typename\n          id\n          name\n          domain\n          room {\n            __typename\n            items {\n              __typename\n              id\n              companyID\n              name\n              description\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          members {\n            __typename\n            items {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          createdAt\n          updatedAt\n        }\n      }"));
        this.OnDeleteCompanyListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnDeleteCompany {\n        onDeleteCompany {\n          __typename\n          id\n          name\n          domain\n          room {\n            __typename\n            items {\n              __typename\n              id\n              companyID\n              name\n              description\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          members {\n            __typename\n            items {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          createdAt\n          updatedAt\n        }\n      }"));
        this.OnCreateRoomListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnCreateRoom {\n        onCreateRoom {\n          __typename\n          id\n          companyID\n          name\n          description\n          members {\n            __typename\n            id\n            email\n            companyID\n            username\n            registered\n            authority\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            createdAt\n            updatedAt\n          }\n          company {\n            __typename\n            id\n            name\n            domain\n            room {\n              __typename\n              nextToken\n            }\n            members {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          tasks {\n            __typename\n            items {\n              __typename\n              id\n              authorID\n              roomID\n              title\n              description\n              scheduleDate\n              priority\n              status\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          createdAt\n          updatedAt\n        }\n      }"));
        this.OnUpdateRoomListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnUpdateRoom {\n        onUpdateRoom {\n          __typename\n          id\n          companyID\n          name\n          description\n          members {\n            __typename\n            id\n            email\n            companyID\n            username\n            registered\n            authority\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            createdAt\n            updatedAt\n          }\n          company {\n            __typename\n            id\n            name\n            domain\n            room {\n              __typename\n              nextToken\n            }\n            members {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          tasks {\n            __typename\n            items {\n              __typename\n              id\n              authorID\n              roomID\n              title\n              description\n              scheduleDate\n              priority\n              status\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          createdAt\n          updatedAt\n        }\n      }"));
        this.OnDeleteRoomListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnDeleteRoom {\n        onDeleteRoom {\n          __typename\n          id\n          companyID\n          name\n          description\n          members {\n            __typename\n            id\n            email\n            companyID\n            username\n            registered\n            authority\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            createdAt\n            updatedAt\n          }\n          company {\n            __typename\n            id\n            name\n            domain\n            room {\n              __typename\n              nextToken\n            }\n            members {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          tasks {\n            __typename\n            items {\n              __typename\n              id\n              authorID\n              roomID\n              title\n              description\n              scheduleDate\n              priority\n              status\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          createdAt\n          updatedAt\n        }\n      }"));
        this.OnCreateTaskListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnCreateTask {\n        onCreateTask {\n          __typename\n          id\n          authorID\n          roomID\n          title\n          description\n          scheduleDate\n          priority\n          status\n          createdAt\n          members {\n            __typename\n            id\n            email\n            companyID\n            username\n            registered\n            authority\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            createdAt\n            updatedAt\n          }\n          room {\n            __typename\n            id\n            companyID\n            name\n            description\n            members {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            tasks {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          messages {\n            __typename\n            items {\n              __typename\n              id\n              taskID\n              content\n              createdAt\n              isSent\n              updatedAt\n            }\n            nextToken\n          }\n          updatedAt\n        }\n      }"));
        this.OnUpdateTaskListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnUpdateTask {\n        onUpdateTask {\n          __typename\n          id\n          authorID\n          roomID\n          title\n          description\n          scheduleDate\n          priority\n          status\n          createdAt\n          members {\n            __typename\n            id\n            email\n            companyID\n            username\n            registered\n            authority\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            createdAt\n            updatedAt\n          }\n          room {\n            __typename\n            id\n            companyID\n            name\n            description\n            members {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            tasks {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          messages {\n            __typename\n            items {\n              __typename\n              id\n              taskID\n              content\n              createdAt\n              isSent\n              updatedAt\n            }\n            nextToken\n          }\n          updatedAt\n        }\n      }"));
        this.OnDeleteTaskListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnDeleteTask {\n        onDeleteTask {\n          __typename\n          id\n          authorID\n          roomID\n          title\n          description\n          scheduleDate\n          priority\n          status\n          createdAt\n          members {\n            __typename\n            id\n            email\n            companyID\n            username\n            registered\n            authority\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            createdAt\n            updatedAt\n          }\n          room {\n            __typename\n            id\n            companyID\n            name\n            description\n            members {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            tasks {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          messages {\n            __typename\n            items {\n              __typename\n              id\n              taskID\n              content\n              createdAt\n              isSent\n              updatedAt\n            }\n            nextToken\n          }\n          updatedAt\n        }\n      }"));
        this.OnCreateMessageListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnCreateMessage {\n        onCreateMessage {\n          __typename\n          id\n          taskID\n          content\n          createdAt\n          isSent\n          task {\n            __typename\n            id\n            authorID\n            roomID\n            title\n            description\n            scheduleDate\n            priority\n            status\n            createdAt\n            members {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            room {\n              __typename\n              id\n              companyID\n              name\n              description\n              createdAt\n              updatedAt\n            }\n            messages {\n              __typename\n              nextToken\n            }\n            updatedAt\n          }\n          updatedAt\n        }\n      }"));
        this.OnUpdateMessageListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnUpdateMessage {\n        onUpdateMessage {\n          __typename\n          id\n          taskID\n          author {\n            __typename\n            id\n            email\n            companyID\n            username\n            registered\n            authority\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            createdAt\n            updatedAt\n          }\n          content\n          createdAt\n          isSent\n          task {\n            __typename\n            id\n            authorID\n            roomID\n            title\n            description\n            scheduleDate\n            priority\n            status\n            createdAt\n            members {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            room {\n              __typename\n              id\n              companyID\n              name\n              description\n              createdAt\n              updatedAt\n            }\n            messages {\n              __typename\n              nextToken\n            }\n            updatedAt\n          }\n          updatedAt\n        }\n      }"));
        this.OnDeleteMessageListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnDeleteMessage {\n        onDeleteMessage {\n          __typename\n          id\n          taskID\n          author {\n            __typename\n            id\n            email\n            companyID\n            username\n            registered\n            authority\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            createdAt\n            updatedAt\n          }\n          content\n          createdAt\n          isSent\n          task {\n            __typename\n            id\n            authorID\n            roomID\n            title\n            description\n            scheduleDate\n            priority\n            status\n            createdAt\n            members {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            room {\n              __typename\n              id\n              companyID\n              name\n              description\n              createdAt\n              updatedAt\n            }\n            messages {\n              __typename\n              nextToken\n            }\n            updatedAt\n          }\n          updatedAt\n        }\n      }"));
        this.OnCreateUserListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnCreateUser {\n        onCreateUser {\n          __typename\n          id\n          email\n          companyID\n          username\n          registered\n          authority\n          company {\n            __typename\n            id\n            name\n            domain\n            room {\n              __typename\n              nextToken\n            }\n            members {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          createdAt\n          updatedAt\n        }\n      }"));
        this.OnUpdateUserListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnUpdateUser {\n        onUpdateUser {\n          __typename\n          id\n          email\n          companyID\n          username\n          registered\n          authority\n          company {\n            __typename\n            id\n            name\n            domain\n            room {\n              __typename\n              nextToken\n            }\n            members {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          createdAt\n          updatedAt\n        }\n      }"));
        this.OnDeleteUserListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnDeleteUser {\n        onDeleteUser {\n          __typename\n          id\n          email\n          companyID\n          username\n          registered\n          authority\n          company {\n            __typename\n            id\n            name\n            domain\n            room {\n              __typename\n              nextToken\n            }\n            members {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          createdAt\n          updatedAt\n        }\n      }"));
      }

      _createClass(AmplifyService, [{
        key: "CreateCompany",
        value: function CreateCompany(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    statement = "mutation CreateCompany($input: CreateCompanyInput!, $condition: ModelCompanyConditionInput) {\n        createCompany(input: $input, condition: $condition) {\n          __typename\n          id\n          name\n          domain\n          room {\n            __typename\n            items {\n              __typename\n              id\n              companyID\n              name\n              description\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          members {\n            __typename\n            items {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context.sent;
                    return _context.abrupt("return", response.data.createCompany);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "UpdateCompany",
        value: function UpdateCompany(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    statement = "mutation UpdateCompany($input: UpdateCompanyInput!, $condition: ModelCompanyConditionInput) {\n        updateCompany(input: $input, condition: $condition) {\n          __typename\n          id\n          name\n          domain\n          room {\n            __typename\n            items {\n              __typename\n              id\n              companyID\n              name\n              description\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          members {\n            __typename\n            items {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context2.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context2.sent;
                    return _context2.abrupt("return", response.data.updateCompany);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "DeleteCompany",
        value: function DeleteCompany(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    statement = "mutation DeleteCompany($input: DeleteCompanyInput!, $condition: ModelCompanyConditionInput) {\n        deleteCompany(input: $input, condition: $condition) {\n          __typename\n          id\n          name\n          domain\n          room {\n            __typename\n            items {\n              __typename\n              id\n              companyID\n              name\n              description\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          members {\n            __typename\n            items {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context3.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context3.sent;
                    return _context3.abrupt("return", response.data.deleteCompany);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "CreateRoom",
        value: function CreateRoom(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    statement = "mutation CreateRoom($input: CreateRoomInput!, $condition: ModelRoomConditionInput) {\n        createRoom(input: $input, condition: $condition) {\n          __typename\n          id\n          companyID\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context4.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context4.sent;
                    return _context4.abrupt("return", response.data.createRoom);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }, {
        key: "UpdateRoom",
        value: function UpdateRoom(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    statement = "mutation UpdateRoom($input: UpdateRoomInput!, $condition: ModelRoomConditionInput) {\n        updateRoom(input: $input, condition: $condition) {\n          __typename\n          id\n          companyID\n          name\n          description\n          members {\n            __typename\n            id\n            email\n            companyID\n            username\n            registered\n            authority\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            createdAt\n            updatedAt\n          }\n          company {\n            __typename\n            id\n            name\n            domain\n            room {\n              __typename\n              nextToken\n            }\n            members {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          tasks {\n            __typename\n            items {\n              __typename\n              id\n              authorID\n              roomID\n              title\n              description\n              scheduleDate\n              priority\n              status\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context5.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context5.sent;
                    return _context5.abrupt("return", response.data.updateRoom);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
        }
      }, {
        key: "DeleteRoom",
        value: function DeleteRoom(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    statement = "mutation DeleteRoom($input: DeleteRoomInput!, $condition: ModelRoomConditionInput) {\n        deleteRoom(input: $input, condition: $condition) {\n          __typename\n          id\n          companyID\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context6.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context6.sent;
                    return _context6.abrupt("return", response.data.deleteRoom);

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));
        }
      }, {
        key: "CreateTask",
        value: function CreateTask(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    statement = "mutation CreateTask($input: CreateTaskInput!, $condition: ModelTaskConditionInput) {\n        createTask(input: $input, condition: $condition) {\n          __typename\n          id\n          authorID\n          roomID\n          title\n          description\n          scheduleDate\n          priority\n          status\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context7.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context7.sent;
                    return _context7.abrupt("return", response.data.createTask);

                  case 7:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
        }
      }, {
        key: "UpdateTask",
        value: function UpdateTask(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    statement = "mutation UpdateTask($input: UpdateTaskInput!, $condition: ModelTaskConditionInput) {\n        updateTask(input: $input, condition: $condition) {\n          __typename\n          id\n          authorID\n          roomID\n          title\n          description\n          scheduleDate\n          priority\n          status\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context8.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context8.sent;
                    return _context8.abrupt("return", response.data.updateTask);

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        }
      }, {
        key: "DeleteTask",
        value: function DeleteTask(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    statement = "mutation DeleteTask($input: DeleteTaskInput!, $condition: ModelTaskConditionInput) {\n        deleteTask(input: $input, condition: $condition) {\n          __typename\n          id\n          authorID\n          roomID\n          title\n          description\n          scheduleDate\n          priority\n          status\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context9.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context9.sent;
                    return _context9.abrupt("return", response.data.deleteTask);

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));
        }
      }, {
        key: "CreateMessage",
        value: function CreateMessage(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    statement = "mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {\n        createMessage(input: $input, condition: $condition) {\n          __typename\n          id\n          taskID\n          content\n          createdAt\n          isSent\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context10.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context10.sent;
                    return _context10.abrupt("return", response.data.createMessage);

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));
        }
      }, {
        key: "UpdateMessage",
        value: function UpdateMessage(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    statement = "mutation UpdateMessage($input: UpdateMessageInput!, $condition: ModelMessageConditionInput) {\n        updateMessage(input: $input, condition: $condition) {\n          __typename\n          id\n          taskID\n          author {\n            __typename\n            id\n            email\n            companyID\n            username\n            registered\n            authority\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            createdAt\n            updatedAt\n          }\n          content\n          createdAt\n          isSent\n          task {\n            __typename\n            id\n            authorID\n            roomID\n            title\n            description\n            scheduleDate\n            priority\n            status\n            createdAt\n            members {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            room {\n              __typename\n              id\n              companyID\n              name\n              description\n              createdAt\n              updatedAt\n            }\n            messages {\n              __typename\n              nextToken\n            }\n            updatedAt\n          }\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context11.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context11.sent;
                    return _context11.abrupt("return", response.data.updateMessage);

                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11);
          }));
        }
      }, {
        key: "DeleteMessage",
        value: function DeleteMessage(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    statement = "mutation DeleteMessage($input: DeleteMessageInput!, $condition: ModelMessageConditionInput) {\n        deleteMessage(input: $input, condition: $condition) {\n          __typename\n          id\n          taskID\n          author {\n            __typename\n            id\n            email\n            companyID\n            username\n            registered\n            authority\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            createdAt\n            updatedAt\n          }\n          content\n          createdAt\n          isSent\n          task {\n            __typename\n            id\n            authorID\n            roomID\n            title\n            description\n            scheduleDate\n            priority\n            status\n            createdAt\n            members {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            room {\n              __typename\n              id\n              companyID\n              name\n              description\n              createdAt\n              updatedAt\n            }\n            messages {\n              __typename\n              nextToken\n            }\n            updatedAt\n          }\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context12.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context12.sent;
                    return _context12.abrupt("return", response.data.deleteMessage);

                  case 7:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));
        }
      }, {
        key: "CreateUser",
        value: function CreateUser(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    statement = "mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {\n        createUser(input: $input, condition: $condition) {\n          __typename\n          id\n          email\n          companyID\n          username\n          tel\n          positionName\n          iconImage\n          registered\n          authority\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context13.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context13.sent;
                    return _context13.abrupt("return", response.data.createUser);

                  case 7:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          }));
        }
      }, {
        key: "UpdateUser",
        value: function UpdateUser(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    statement = "mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {\n        updateUser(input: $input, condition: $condition) {\n          __typename\n          id\n          email\n          companyID\n          username\n          registered\n          authority\n          company {\n            __typename\n            id\n            name\n            domain\n            room {\n              __typename\n              nextToken\n            }\n            members {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context14.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context14.sent;
                    return _context14.abrupt("return", response.data.updateUser);

                  case 7:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14);
          }));
        }
      }, {
        key: "DeleteUser",
        value: function DeleteUser(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    statement = "mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {\n        deleteUser(input: $input, condition: $condition) {\n          __typename\n          id\n          email\n          companyID\n          username\n          registered\n          authority\n          company {\n            __typename\n            id\n            name\n            domain\n            room {\n              __typename\n              nextToken\n            }\n            members {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context15.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context15.sent;
                    return _context15.abrupt("return", response.data.deleteUser);

                  case 7:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15);
          }));
        }
      }, {
        key: "GetCompany",
        value: function GetCompany(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    statement = "query GetCompany($id: ID!) {\n        getCompany(id: $id) {\n          __typename\n          id\n          name\n          domain\n          room {\n            __typename\n            items {\n              __typename\n              id\n              companyID\n              name\n              description\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          members {\n            __typename\n            items {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            nextToken\n          }\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      id: id
                    };
                    _context16.next = 4;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 4:
                    response = _context16.sent;
                    return _context16.abrupt("return", response.data.getCompany);

                  case 6:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16);
          }));
        }
      }, {
        key: "ListCompanys",
        value: function ListCompanys(filter, limit, nextToken) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    statement = "query ListCompanys($filter: ModelCompanyFilterInput, $limit: Int, $nextToken: String) {\n        listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {\n          __typename\n          items {\n            __typename\n            id\n            name\n            domain\n            room {\n              __typename\n              nextToken\n            }\n            members {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          nextToken\n        }\n      }";
                    gqlAPIServiceArguments = {};

                    if (filter) {
                      gqlAPIServiceArguments.filter = filter;
                    }

                    if (limit) {
                      gqlAPIServiceArguments.limit = limit;
                    }

                    if (nextToken) {
                      gqlAPIServiceArguments.nextToken = nextToken;
                    }

                    _context17.next = 7;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 7:
                    response = _context17.sent;
                    return _context17.abrupt("return", response.data.listCompanys);

                  case 9:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17);
          }));
        }
      }, {
        key: "GetRoom",
        value: function GetRoom(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    statement = "query GetRoom($id: ID!) {\n        getRoom(id: $id) {\n          __typename\n          id\n          companyID\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      id: id
                    };
                    _context18.next = 4;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 4:
                    response = _context18.sent;
                    return _context18.abrupt("return", response.data.getRoom);

                  case 6:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18);
          }));
        }
      }, {
        key: "ListRooms",
        value: function ListRooms(filter, limit, nextToken) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    statement = "query ListRooms($filter: ModelRoomFilterInput, $limit: Int, $nextToken: String) {\n        listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {\n          __typename\n          items {\n            __typename\n            id\n            companyID\n            name\n            description\n            createdAt\n            updatedAt\n          }\n          nextToken\n        }\n      }";
                    gqlAPIServiceArguments = {};

                    if (filter) {
                      gqlAPIServiceArguments.filter = filter;
                    }

                    if (limit) {
                      gqlAPIServiceArguments.limit = limit;
                    }

                    if (nextToken) {
                      gqlAPIServiceArguments.nextToken = nextToken;
                    }

                    _context19.next = 7;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 7:
                    response = _context19.sent;
                    return _context19.abrupt("return", response.data.listRooms);

                  case 9:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19);
          }));
        }
      }, {
        key: "GetTask",
        value: function GetTask(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    statement = "query GetTask($id: ID!) {\n        getTask(id: $id) {\n          __typename\n          id\n          authorID\n          roomID\n          title\n          description\n          scheduleDate\n          priority\n          status\n          createdAt\n          room {\n            __typename\n            id\n            companyID\n            name\n            description\n            members {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            tasks {\n              __typename\n              nextToken\n            }\n            createdAt\n            updatedAt\n          }\n          messages {\n            __typename\n            items {\n              __typename\n              id\n              taskID\n              content\n              createdAt\n              isSent\n              updatedAt\n            }\n            nextToken\n          }\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      id: id
                    };
                    _context20.next = 4;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 4:
                    response = _context20.sent;
                    return _context20.abrupt("return", response.data.getTask);

                  case 6:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20);
          }));
        }
      }, {
        key: "ListTasks",
        value: function ListTasks(filter, limit, nextToken) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    statement = "query ListTasks($filter: ModelTaskFilterInput, $limit: Int, $nextToken: String) {\n        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {\n          __typename\n          items {\n            __typename\n            id\n            authorID\n            roomID\n            title\n            description\n            scheduleDate\n            priority\n            status\n            createdAt\n            updatedAt\n          }\n          nextToken\n        }\n      }";
                    gqlAPIServiceArguments = {};

                    if (filter) {
                      gqlAPIServiceArguments.filter = filter;
                    }

                    if (limit) {
                      gqlAPIServiceArguments.limit = limit;
                    }

                    if (nextToken) {
                      gqlAPIServiceArguments.nextToken = nextToken;
                    }

                    _context21.next = 7;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 7:
                    response = _context21.sent;
                    return _context21.abrupt("return", response.data.listTasks);

                  case 9:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21);
          }));
        }
      }, {
        key: "GetMessage",
        value: function GetMessage(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    statement = "query GetMessage($id: ID!) {\n        getMessage(id: $id) {\n          __typename\n          id\n          taskID\n          author {\n            __typename\n            id\n            email\n            companyID\n            username\n            registered\n            authority\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            createdAt\n            updatedAt\n          }\n          content\n          createdAt\n          isSent\n          task {\n            __typename\n            id\n            authorID\n            roomID\n            title\n            description\n            scheduleDate\n            priority\n            status\n            createdAt\n            members {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            room {\n              __typename\n              id\n              companyID\n              name\n              description\n              createdAt\n              updatedAt\n            }\n            messages {\n              __typename\n              nextToken\n            }\n            updatedAt\n          }\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      id: id
                    };
                    _context22.next = 4;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 4:
                    response = _context22.sent;
                    return _context22.abrupt("return", response.data.getMessage);

                  case 6:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22);
          }));
        }
      }, {
        key: "ListMessages",
        value: function ListMessages(filter, limit, nextToken) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    statement = "query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {\n        listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {\n          __typename\n          items {\n            __typename\n            id\n            taskID\n            author {\n              __typename\n              id\n              email\n              companyID\n              username\n              registered\n              authority\n              createdAt\n              updatedAt\n            }\n            content\n            createdAt\n            isSent\n            task {\n              __typename\n              id\n              authorID\n              roomID\n              title\n              description\n              scheduleDate\n              priority\n              status\n              createdAt\n              updatedAt\n            }\n            updatedAt\n          }\n          nextToken\n        }\n      }";
                    gqlAPIServiceArguments = {};

                    if (filter) {
                      gqlAPIServiceArguments.filter = filter;
                    }

                    if (limit) {
                      gqlAPIServiceArguments.limit = limit;
                    }

                    if (nextToken) {
                      gqlAPIServiceArguments.nextToken = nextToken;
                    }

                    _context23.next = 7;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 7:
                    response = _context23.sent;
                    return _context23.abrupt("return", response.data.listMessages);

                  case 9:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23);
          }));
        }
      }, {
        key: "GetUser",
        value: function GetUser(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    statement = "query GetUser($id: ID!) {\n        getUser(id: $id) {\n          __typename\n          id\n          email\n          companyID\n          username\n          registered\n          authority\n          createdAt\n          updatedAt\n          positionName\n        }\n      }";
                    gqlAPIServiceArguments = {
                      id: id
                    };
                    _context24.next = 4;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 4:
                    response = _context24.sent;
                    return _context24.abrupt("return", response.data.getUser);

                  case 6:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24);
          }));
        }
      }, {
        key: "ListUsers",
        value: function ListUsers(filter, limit, nextToken) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    statement = "query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {\n        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {\n          __typename\n          items {\n            __typename\n            id\n            email\n            companyID\n            username\n            registered\n            authority\n            company {\n              __typename\n              id\n              name\n              domain\n              createdAt\n              updatedAt\n            }\n            createdAt\n            updatedAt\n          }\n          nextToken\n        }\n      }";
                    gqlAPIServiceArguments = {};

                    if (filter) {
                      gqlAPIServiceArguments.filter = filter;
                    }

                    if (limit) {
                      gqlAPIServiceArguments.limit = limit;
                    }

                    if (nextToken) {
                      gqlAPIServiceArguments.nextToken = nextToken;
                    }

                    _context25.next = 7;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 7:
                    response = _context25.sent;
                    return _context25.abrupt("return", response.data.listUsers);

                  case 9:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25);
          }));
        }
      }]);

      return AmplifyService;
    }();

    AmplifyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AmplifyService);
    /***/
  },

  /***/
  "./src/app/shared/service/session.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/service/session.service.ts ***!
    \***************************************************/

  /*! exports provided: SessionService */

  /***/
  function srcAppSharedServiceSessionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionService", function () {
      return SessionService;
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


    var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! aws-amplify */
    "./node_modules/aws-amplify/lib-esm/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SessionService = /*#__PURE__*/function () {
      function SessionService(router) {
        _classCallCheck(this, SessionService);

        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
      }

      _createClass(SessionService, [{
        key: "entryUserSignup",
        value: function entryUserSignup(valueObj) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp(valueObj));
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var _this4 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            _this4.loggedIn.next(true);

            return true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
            _this4.loggedIn.next(false);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
          }));
        }
      }, {
        key: "confirmSignUp",
        value: function confirmSignUp(username, code) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignUp(username, code));
        }
      }, {
        key: "resendConfirmNumberForSignUp",
        value: function resendConfirmNumberForSignUp(username) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].resendSignUp(username));
        }
      }, {
        key: "userLogin",
        value: function userLogin(email, password) {
          var _this5 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signIn(email, password)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            return _this5.loggedIn.next(true);
          }));
        }
      }, {
        key: "fetchCurrentUser",
        value: function fetchCurrentUser() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser());
        }
      }, {
        key: "signOut",
        value: function signOut() {
          var _this6 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            return _this6.loggedIn.next(false);
          }));
        }
      }]);

      return SessionService;
    }();

    SessionService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SessionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SessionService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _service_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./service/session.service */
    "./src/app/shared/service/session.service.ts");
    /* harmony import */


    var _logic_shared_logic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./logic/shared-logic.service */
    "./src/app/shared/logic/shared-logic.service.ts");
    /* harmony import */


    var _component_modal_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/modal/add-room-modal/add-room-modal.component */
    "./src/app/shared/component/modal/add-room-modal/add-room-modal.component.ts");
    /* harmony import */


    var _component_modal_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/modal/add-task-modal/add-task-modal.component */
    "./src/app/shared/component/modal/add-task-modal/add-task-modal.component.ts");
    /* harmony import */


    var _component_modal_delete_task_modal_delete_task_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component/modal/delete-task-modal/delete-task-modal.component */
    "./src/app/shared/component/modal/delete-task-modal/delete-task-modal.component.ts");
    /* harmony import */


    var _component_modal_edit_profile_modal_edit_profile_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./component/modal/edit-profile-modal/edit-profile-modal.component */
    "./src/app/shared/component/modal/edit-profile-modal/edit-profile-modal.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_modal_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddRoomModalComponent"], _component_modal_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_8__["AddTaskModalComponent"], _component_modal_delete_task_modal_delete_task_modal_component__WEBPACK_IMPORTED_MODULE_9__["DeleteTaskModalComponent"], _component_modal_edit_profile_modal_edit_profile_modal_component__WEBPACK_IMPORTED_MODULE_10__["EditProfileModalComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      entryComponents: [_component_modal_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddRoomModalComponent"], _component_modal_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_8__["AddTaskModalComponent"], _component_modal_delete_task_modal_delete_task_modal_component__WEBPACK_IMPORTED_MODULE_9__["DeleteTaskModalComponent"], _component_modal_edit_profile_modal_edit_profile_modal_component__WEBPACK_IMPORTED_MODULE_10__["EditProfileModalComponent"]],
      exports: [_component_modal_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddRoomModalComponent"], _component_modal_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_8__["AddTaskModalComponent"], _component_modal_delete_task_modal_delete_task_modal_component__WEBPACK_IMPORTED_MODULE_9__["DeleteTaskModalComponent"], _component_modal_edit_profile_modal_edit_profile_modal_component__WEBPACK_IMPORTED_MODULE_10__["EditProfileModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [_service_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], _logic_shared_logic_service__WEBPACK_IMPORTED_MODULE_6__["SharedLogicService"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/aws-exports.js":
  /*!****************************!*\
    !*** ./src/aws-exports.js ***!
    \****************************/

  /*! exports provided: default */

  /***/
  function srcAwsExportsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* eslint-disable */
    // WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.


    var awsmobile = {
      "aws_project_region": "ap-northeast-1",
      "aws_cognito_identity_pool_id": "ap-northeast-1:1c83b07b-ce19-49f6-ae74-da6ffcc69554",
      "aws_cognito_region": "ap-northeast-1",
      "aws_user_pools_id": "ap-northeast-1_ByovDG4bt",
      "aws_user_pools_web_client_id": "47bkbu7qf1aue8v7i0elq754tr",
      "oauth": {},
      "aws_appsync_graphqlEndpoint": "http://192.168.0.13:20002/graphql",
      "aws_appsync_region": "ap-northeast-1",
      "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
      "aws_appsync_apiKey": "da2-fakeApiId123456",
      "aws_appsync_dangerously_connect_to_http_endpoint_for_testing": true
    };
    /* harmony default export */

    __webpack_exports__["default"] = awsmobile;
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! aws-amplify */
    "./node_modules/aws-amplify/lib-esm/index.js");
    /* harmony import */


    var _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @aws-amplify/pubsub */
    "./node_modules/@aws-amplify/pubsub/lib-esm/index.js");
    /* harmony import */


    var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @aws-amplify/api */
    "./node_modules/@aws-amplify/api/lib-esm/index.js");
    /* harmony import */


    var _aws_exports__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./aws-exports */
    "./src/aws-exports.js"); // Amplify Config


    aws_amplify__WEBPACK_IMPORTED_MODULE_4__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_7__["default"]);

    _aws_amplify_api__WEBPACK_IMPORTED_MODULE_6__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_7__["default"]);

    _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_5__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_7__["default"]);

    aws_amplify__WEBPACK_IMPORTED_MODULE_4__["Auth"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_7__["default"]);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/takunakagawa/dev/ionic/wantTo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map