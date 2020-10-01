function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-task-detail-task-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTaskDetailTaskDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>タスクの詳細</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBackToRoom()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentActionSheet(taskDetail)\">\n        <ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-icon\n      class=\"ion-padding\"\n      *ngIf=\"taskDetail?.status > 0\"\n      size=\"large\"\n      name=\"checkmark-circle\"\n      color=\"secondary\"\n    ></ion-icon>\n    <ion-card-header class=\"card-title\">\n      <ion-card-title>{{ taskDetail?.title }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item class=\"card-background\" lines=\"none\">\n        <ion-text>{{ taskDetail?.description}}</ion-text>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- ここから下はCommentとMessage -->\n  <ion-list>\n    <ion-list-header>\n      <ion-label>コメント</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let item of message\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../assets/svg/anonymous.svg\" />\n      </ion-avatar>\n      <ion-label>\n        <h3>{{ item.content }}</h3>\n        <p>送信者の名前</p>\n      </ion-label>\n    </ion-item>\n    <!-- <ion-item> MEssage </ion-item>\n    <ion-item> MEssage </ion-item> -->\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar light=\"light\">\n    <ion-row align-items-center class=\"ion-no-padding\">\n      <ion-col class=\"center-align\" size=\"10\">\n        <textarea\n          autosize\n          maxRows=\"2\"\n          [(ngModel)]=\"newMsg\"\n          class=\"message-input\"\n        ></textarea>\n      </ion-col>\n      <ion-col class=\"center-align\" size=\"2\">\n        <ion-button\n          expand=\"block\"\n          fill=\"clear\"\n          color=\"primary\"\n          [disabled]=\"newMsg === ''\"\n          class=\"msg-btn\"\n          (click)=\"sendMessage()\"\n        >\n          <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/task-detail/logic/task-detail-logic.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/task-detail/logic/task-detail-logic.service.ts ***!
    \**********************************************************************/

  /*! exports provided: TaskDetailLogicService */

  /***/
  function srcAppPagesTaskDetailLogicTaskDetailLogicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailLogicService", function () {
      return TaskDetailLogicService;
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


    var _service_task_detail_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/task-detail-service.service */
    "./src/app/pages/task-detail/service/task-detail-service.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);

    var TaskDetailLogicService = /*#__PURE__*/function () {
      function TaskDetailLogicService(taskDetailService) {
        _classCallCheck(this, TaskDetailLogicService);

        this.taskDetailService = taskDetailService;
      }

      _createClass(TaskDetailLogicService, [{
        key: "fetchAnyTask",
        value: function fetchAnyTask(taskId) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.taskDetailService.getTask(taskId));
        }
      }, {
        key: "fetchMessagePerTask",
        value: function fetchMessagePerTask(taskId) {
          var filterContent = {
            taskID: {
              eq: "".concat(taskId)
            }
          };
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.taskDetailService.fetchMessagePerTask(filterContent));
        }
      }, {
        key: "updateTaskItem",
        value: function updateTaskItem(taskItem, status) {
          var content = {
            id: taskItem.id,
            status: status
          };
          return this.taskDetailService.updateTaskItem(content);
        }
      }, {
        key: "sendNewMessage",
        value: function sendNewMessage(taskId, messageContent) {
          var inputContent = {
            id: "".concat(Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])()),
            content: messageContent,
            taskID: taskId,
            isSent: true
          };
          return this.taskDetailService.createMessageItem(inputContent);
        } // OnCreateMessageSubscription

      }, {
        key: "onCreateMessageListener",
        value: function onCreateMessageListener() {
          return this.taskDetailService.onMessageListener();
        }
      }]);

      return TaskDetailLogicService;
    }();

    TaskDetailLogicService.ctorParameters = function () {
      return [{
        type: _service_task_detail_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskDetailServiceService"]
      }];
    };

    TaskDetailLogicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_task_detail_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskDetailServiceService"]])], TaskDetailLogicService);
    /***/
  },

  /***/
  "./src/app/pages/task-detail/service/task-detail-service.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/task-detail/service/task-detail-service.service.ts ***!
    \**************************************************************************/

  /*! exports provided: TaskDetailServiceService */

  /***/
  function srcAppPagesTaskDetailServiceTaskDetailServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailServiceService", function () {
      return TaskDetailServiceService;
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

    var TaskDetailServiceService = /*#__PURE__*/function () {
      function TaskDetailServiceService(amplifyService) {
        _classCallCheck(this, TaskDetailServiceService);

        this.amplifyService = amplifyService;
      }

      _createClass(TaskDetailServiceService, [{
        key: "getTask",
        value: function getTask(taskId) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.GetTask(taskId));
        }
      }, {
        key: "fetchMessagePerTask",
        value: function fetchMessagePerTask(filterInfo) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.ListMessages(filterInfo));
        }
      }, {
        key: "updateTaskItem",
        value: function updateTaskItem(inputContent) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.UpdateTask(inputContent));
        }
      }, {
        key: "createMessageItem",
        value: function createMessageItem(inputContent) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.CreateMessage(inputContent));
        }
      }, {
        key: "onMessageListener",
        value: function onMessageListener() {
          return this.amplifyService.OnCreateMessageListener;
        }
      }]);

      return TaskDetailServiceService;
    }();

    TaskDetailServiceService.ctorParameters = function () {
      return [{
        type: _shared_service_amplify_service__WEBPACK_IMPORTED_MODULE_2__["AmplifyService"]
      }];
    };

    TaskDetailServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_amplify_service__WEBPACK_IMPORTED_MODULE_2__["AmplifyService"]])], TaskDetailServiceService);
    /***/
  },

  /***/
  "./src/app/pages/task-detail/task-detail-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/task-detail/task-detail-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: TaskDetailPageRoutingModule */

  /***/
  function srcAppPagesTaskDetailTaskDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailPageRoutingModule", function () {
      return TaskDetailPageRoutingModule;
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


    var _task_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task-detail.page */
    "./src/app/pages/task-detail/task-detail.page.ts");

    var routes = [{
      path: ':id/:segment',
      component: _task_detail_page__WEBPACK_IMPORTED_MODULE_3__["TaskDetailPage"]
    }, {
      path: '',
      redirectTo: ':id',
      pathMatch: 'full'
    }];

    var TaskDetailPageRoutingModule = function TaskDetailPageRoutingModule() {
      _classCallCheck(this, TaskDetailPageRoutingModule);
    };

    TaskDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TaskDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/task-detail/task-detail.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/task-detail/task-detail.module.ts ***!
    \*********************************************************/

  /*! exports provided: TaskDetailPageModule */

  /***/
  function srcAppPagesTaskDetailTaskDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailPageModule", function () {
      return TaskDetailPageModule;
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


    var _task_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./task-detail-routing.module */
    "./src/app/pages/task-detail/task-detail-routing.module.ts");
    /* harmony import */


    var _task_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./task-detail.page */
    "./src/app/pages/task-detail/task-detail.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var TaskDetailPageModule = function TaskDetailPageModule() {
      _classCallCheck(this, TaskDetailPageModule);
    };

    TaskDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _task_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskDetailPageRoutingModule"]],
      declarations: [_task_detail_page__WEBPACK_IMPORTED_MODULE_6__["TaskDetailPage"]]
    })], TaskDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/task-detail/task-detail.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/task-detail/task-detail.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTaskDetailTaskDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-custom-class .action-sheet-group {\n  background: #e5e5e5;\n}\n\n.card-background {\n  --background: \"#1c1c1d\";\n}\n\n.end-done-icon {\n  margin-left: auto;\n  margin-right: 50px;\n}\n\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n\n.card-title {\n  font-size: medium;\n}\n\n.center-align {\n  margin-top: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWt1bmFrYWdhd2EvZGV2L2lvbmljL3dhbnRUby9zcmMvYXBwL3BhZ2VzL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWN1c3RvbS1jbGFzcyAuYWN0aW9uLXNoZWV0LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kIHtcbiAgICAtLWJhY2tncm91bmQ6ICcjMWMxYzFkJztcbn1cblxuLmVuZC1kb25lLWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5tc2ctYnRuIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNWVtO1xuICAgIC0tcGFkZGluZy1lbmQ6IDAuNWVtO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG59IiwiLm15LWN1c3RvbS1jbGFzcyAuYWN0aW9uLXNoZWV0LWdyb3VwIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuLmNhcmQtYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogXCIjMWMxYzFkXCI7XG59XG5cbi5lbmQtZG9uZS1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubXNnLWJ0biB7XG4gIC0tcGFkZGluZy1zdGFydDogMC41ZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuNWVtO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/task-detail/task-detail.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/task-detail/task-detail.page.ts ***!
    \*******************************************************/

  /*! exports provided: TaskDetailPage */

  /***/
  function srcAppPagesTaskDetailTaskDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailPage", function () {
      return TaskDetailPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _logic_task_detail_logic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./logic/task-detail-logic.service */
    "./src/app/pages/task-detail/logic/task-detail-logic.service.ts");
    /* harmony import */


    var src_app_shared_component_modal_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/component/modal/add-task-modal/add-task-modal.component */
    "./src/app/shared/component/modal/add-task-modal/add-task-modal.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TaskDetailPage = /*#__PURE__*/function () {
      function TaskDetailPage(location, logic, route, scroll, modalCtrl, actionSheetCtrl, toastCtrl, platform) {
        var _this = this;

        _classCallCheck(this, TaskDetailPage);

        this.location = location;
        this.logic = logic;
        this.route = route;
        this.scroll = scroll;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.link = "comment";
        this.fragmentComment = '';
        this.newMsg = '';
        this.initializeApp().subscribe(function () {
          _this.logic.onCreateMessageListener().subscribe(function () {
            _this.logic.fetchMessagePerTask(_this.taskId).subscribe(function (result) {
              _this.message = result.items;
            });
          });
        });
      }

      _createClass(TaskDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.taskId = this.route.snapshot.paramMap.get('id');
          this.segment = this.route.snapshot.paramMap.get('segment');
          this.testHref = "task-detail/".concat(this.taskId, "#comment");
          this.logic.fetchAnyTask(this.taskId).subscribe(function (data) {
            _this2.taskDetail = data;
          });
          this.logic.fetchMessagePerTask(this.taskId).subscribe(function (data) {
            _this2.message = data.items;
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this3 = this;

          this.logic.sendNewMessage(this.taskId, this.newMsg).subscribe(function () {
            return _this3.newMsg = '';
          });
        }
      }, {
        key: "presentDoneToast",
        value: function presentDoneToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: 'おつかれさまでした！',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentMoveTask",
        value: function presentMoveTask() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: '再度、戻しました。',
                      duration: 2000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          this.route.fragment.subscribe(function (result) {
            _this4.scroll.scrollToAnchor(result);
          });
        }
      }, {
        key: "presentModalEditTask",
        value: function presentModalEditTask(taskDetail) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: src_app_shared_component_modal_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddTaskModalComponent"],
                      componentProps: {
                        taskDetail: taskDetail
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    return _context3.abrupt("return", modal.present());

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "doneTask",
        value: function doneTask(taskDetail) {
          var _this5 = this;

          var presentToast = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.presentDoneToast());
          this.logic.updateTaskItem(taskDetail, 10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function () {
            return _this5.logic.fetchAnyTask(taskDetail.id);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () {
            return presentToast;
          })).subscribe(function (data) {
            return _this5.taskDetail = data;
          });
        }
      }, {
        key: "moveTask",
        value: function moveTask(taskDetail) {
          var _this6 = this;

          var presentToast = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.presentMoveTask());
          this.logic.updateTaskItem(taskDetail, 0).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function () {
            return _this6.logic.fetchAnyTask(taskDetail.id);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () {
            return presentToast;
          })).subscribe(function (data) {
            return _this6.taskDetail = data;
          });
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet(taskDetail) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this7 = this;

            var activeActionSheet, doneActionSheet;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.actionSheetCtrl.create({
                      cssClass: 'my-custom-class',
                      buttons: [{
                        text: '完了',
                        handler: function handler() {
                          _this7.doneTask(taskDetail);
                        }
                      }, {
                        text: '編集',
                        handler: function handler() {
                          _this7.presentModalEditTask(taskDetail);
                        }
                      }, {
                        text: '削除',
                        role: 'destructive',
                        handler: function handler() {
                          _this7.deleteTask(taskDetail);
                        }
                      }, {
                        text: 'キャンセル',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    activeActionSheet = _context4.sent;
                    _context4.next = 5;
                    return this.actionSheetCtrl.create({
                      cssClass: 'my-custom-class',
                      buttons: [{
                        text: 'Activeに移動',
                        handler: function handler() {
                          _this7.moveTask(taskDetail);
                        }
                      }, {
                        text: '編集',
                        handler: function handler() {
                          _this7.presentModalEditTask(taskDetail);
                        }
                      }, {
                        text: '削除',
                        role: 'destructive',
                        handler: function handler() {
                          _this7.deleteTask(taskDetail);
                        }
                      }, {
                        text: 'キャンセル',
                        role: 'cancel'
                      }]
                    });

                  case 5:
                    doneActionSheet = _context4.sent;

                    if (!(this.segment === 'active')) {
                      _context4.next = 11;
                      break;
                    }

                    _context4.next = 9;
                    return activeActionSheet.present();

                  case 9:
                    _context4.next = 14;
                    break;

                  case 11:
                    if (!(this.segment === 'done')) {
                      _context4.next = 14;
                      break;
                    }

                    _context4.next = 14;
                    return doneActionSheet.present();

                  case 14:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(taskDetail) {
          console.log('削除します。', taskDetail);
        }
      }, {
        key: "goBackToRoom",
        value: function goBackToRoom() {
          this.location.back();
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.platform.ready());
        }
      }]);

      return TaskDetailPage;
    }();

    TaskDetailPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _logic_task_detail_logic_service__WEBPACK_IMPORTED_MODULE_6__["TaskDetailLogicService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comment'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", HTMLElement)], TaskDetailPage.prototype, "child", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])], TaskDetailPage.prototype, "content", void 0);
    TaskDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-detail.page.scss */
      "./src/app/pages/task-detail/task-detail.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _logic_task_detail_logic_service__WEBPACK_IMPORTED_MODULE_6__["TaskDetailLogicService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], TaskDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-task-detail-task-detail-module-es5.js.map