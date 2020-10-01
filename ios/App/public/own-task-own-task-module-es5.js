function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["own-task-own-task-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/own-task/own-task.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/own-task/own-task.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOwnTaskOwnTaskPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>own-task</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/own-task/own-task-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/own-task/own-task-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: OwnTaskPageRoutingModule */

  /***/
  function srcAppPagesOwnTaskOwnTaskRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwnTaskPageRoutingModule", function () {
      return OwnTaskPageRoutingModule;
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


    var _own_task_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./own-task.page */
    "./src/app/pages/own-task/own-task.page.ts");

    var routes = [{
      path: '',
      component: _own_task_page__WEBPACK_IMPORTED_MODULE_3__["OwnTaskPage"]
    }];

    var OwnTaskPageRoutingModule = function OwnTaskPageRoutingModule() {
      _classCallCheck(this, OwnTaskPageRoutingModule);
    };

    OwnTaskPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OwnTaskPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/own-task/own-task.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/own-task/own-task.module.ts ***!
    \***************************************************/

  /*! exports provided: OwnTaskPageModule */

  /***/
  function srcAppPagesOwnTaskOwnTaskModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwnTaskPageModule", function () {
      return OwnTaskPageModule;
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


    var _own_task_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./own-task-routing.module */
    "./src/app/pages/own-task/own-task-routing.module.ts");
    /* harmony import */


    var _own_task_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./own-task.page */
    "./src/app/pages/own-task/own-task.page.ts");

    var OwnTaskPageModule = function OwnTaskPageModule() {
      _classCallCheck(this, OwnTaskPageModule);
    };

    OwnTaskPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _own_task_routing_module__WEBPACK_IMPORTED_MODULE_5__["OwnTaskPageRoutingModule"]],
      declarations: [_own_task_page__WEBPACK_IMPORTED_MODULE_6__["OwnTaskPage"]]
    })], OwnTaskPageModule);
    /***/
  },

  /***/
  "./src/app/pages/own-task/own-task.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/own-task/own-task.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOwnTaskOwnTaskPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bi10YXNrL293bi10YXNrLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/own-task/own-task.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/own-task/own-task.page.ts ***!
    \*************************************************/

  /*! exports provided: OwnTaskPage */

  /***/
  function srcAppPagesOwnTaskOwnTaskPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwnTaskPage", function () {
      return OwnTaskPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OwnTaskPage = /*#__PURE__*/function () {
      function OwnTaskPage() {
        _classCallCheck(this, OwnTaskPage);
      }

      _createClass(OwnTaskPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OwnTaskPage;
    }();

    OwnTaskPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-own-task',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./own-task.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/own-task/own-task.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./own-task.page.scss */
      "./src/app/pages/own-task/own-task.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], OwnTaskPage);
    /***/
  }
}]);
//# sourceMappingURL=own-task-own-task-module-es5.js.map