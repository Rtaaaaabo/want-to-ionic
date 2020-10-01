function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-task-task-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task/task.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task/task.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTaskTaskPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title> {{ room.name }} </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBackToRoom()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"segment === 'active'\" slot=\"end\">\n      <ion-button (click)=\"sortTaskItem()\">\n        <ion-icon *ngIf=\"!isReorder\" name=\"swap-vertical-sharp\"></ion-icon>\n        <ion-icon *ngIf=\"isReorder\" name=\"checkmark-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"!isReorder\">\n    <ion-segment [value]=\"segment\" (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button value=\"active\">\n        <ion-label>Active</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"done\">\n        <ion-label>Done</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"segment === 'active'\">\n  <ion-list>\n    <ion-reorder-group\n      (ionItemReorder)=\"reorderTask($event)\"\n      [disabled]=\"!isReorder\"\n    >\n      <ion-card *ngFor=\"let item of taskActiveItems\">\n        <ion-card-content\n          class=\"task-card-content\"\n          (click)=\"navigateToTaskDetail(item, segment)\"\n        >\n          <ion-reorder *ngIf=\"isReorder\">\n            <ion-item class=\"card-background\" lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <img\n                  src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"\n                />\n              </ion-avatar>\n              <ion-label>\n                <h2 class=\"task-title\">{{ item.title }}</h2>\n                <p>{{item.description}}</p>\n              </ion-label>\n            </ion-item>\n          </ion-reorder>\n          <ion-item *ngIf=\"!isReorder\" class=\"card-background\" lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img\n                src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"\n              />\n            </ion-avatar>\n            <ion-label *ngIf=\"!isReorder\">\n              <h2 class=\"task-title\">{{ item.title }}</h2>\n              <p>{{item.description}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n        <ion-row *ngIf=\"!isReorder\" class=\"cardfooter\">\n          <ion-col class=\"button-center\">\n            <ion-button\n              (click)=\"addCommentToTaskDetail(item)\"\n              fill=\"clear\"\n              color=\"primary\"\n            >\n              <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"button-center\">\n            <ion-button (click)=\"doneTask(item)\" fill=\"clear\" color=\"primary\">\n              <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"button-center\">\n            <ion-button\n              (click)=\"presentConfirmDelete(item)\"\n              fill=\"clear\"\n              color=\"danger\"\n            >\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-reorder-group>\n  </ion-list>\n</ion-content>\n<ion-fab *ngIf=\"segment === 'active'\" vertical=\"bottom\" horizontal=\"end\">\n  <ion-fab-button (click)=\"presentAddTask()\">\n    <ion-icon name=\"add-sharp\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-content *ngIf=\"segment === 'done'\">\n  <ion-list>\n    <ion-card *ngFor=\"let item of taskDoneItems\">\n      <ion-card-content\n        class=\"task-card-content\"\n        (click)=\"navigateToTaskDetail(item, segment)\"\n      >\n        <ion-item class=\"card-background\" lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img\n              src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"\n            />\n          </ion-avatar>\n          <ion-label>\n            <h2 class=\"task-title\">{{ item.title }}</h2>\n            <p>{{item.description}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/task/logic/task-logic.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/task/logic/task-logic.service.ts ***!
    \********************************************************/

  /*! exports provided: TaskLogicService */

  /***/
  function srcAppPagesTaskLogicTaskLogicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskLogicService", function () {
      return TaskLogicService;
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


    var _service_task_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/task-service.service */
    "./src/app/pages/task/service/task-service.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_service_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/service/session.service */
    "./src/app/shared/service/session.service.ts");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);

    var TaskLogicService = /*#__PURE__*/function () {
      function TaskLogicService(taskService, sessionService) {
        _classCallCheck(this, TaskLogicService);

        this.taskService = taskService;
        this.sessionService = sessionService;
      }

      _createClass(TaskLogicService, [{
        key: "fetchRoomInfo",
        value: function fetchRoomInfo(roomId) {
          return this.taskService.fetchRoomInfo(roomId);
        }
      }, {
        key: "fetchCurrentUserInfo",
        value: function fetchCurrentUserInfo() {
          return this.sessionService.fetchCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res.attributes.email;
          }));
        }
      }, {
        key: "createTaskToRoom",
        value: function createTaskToRoom(dismissData, roomId, email) {
          var iosStringDate = new Date().toISOString();

          if (dismissData === undefined) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
          } else {
            var content = {
              id: "".concat(Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])()),
              authorID: "".concat(email),
              roomID: "".concat(roomId),
              title: dismissData.nameItem,
              description: dismissData.descriptionItem,
              scheduleDate: dismissData.scheduleDateItem,
              createdAt: iosStringDate,
              status: 0,
              priority: 1
            };
            return this.taskService.createTaskItem(content);
          }
        }
      }, {
        key: "fetchActiveTaskPerRoom",
        value: function fetchActiveTaskPerRoom(roomId) {
          var filterContent = {
            roomID: {
              eq: "".concat(roomId)
            }
          };
          return this.taskService.fetchTaskItemsPerRoom(filterContent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (res) {
            return res.items;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) {
            return data.status < 10;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])());
        }
      }, {
        key: "fetchDoneTaskPerRoom",
        value: function fetchDoneTaskPerRoom(roomId) {
          var filterContent = {
            roomID: {
              eq: "".concat(roomId)
            }
          };
          return this.taskService.fetchTaskItemsPerRoom(filterContent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (res) {
            return res.items;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) {
            return data.status === 10;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])());
        }
      }, {
        key: "updateTaskItem",
        value: function updateTaskItem(taskItem, status) {
          var content = {
            id: taskItem.id,
            status: status
          };
          return this.taskService.updateTaskItem(content);
        }
      }, {
        key: "deleteTaskItem",
        value: function deleteTaskItem(taskId) {
          var content = {
            id: "".concat(taskId)
          };
          return this.taskService.deleteTaskItem(content);
        }
      }]);

      return TaskLogicService;
    }();

    TaskLogicService.ctorParameters = function () {
      return [{
        type: _service_task_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskServiceService"]
      }, {
        type: _shared_service_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
      }];
    };

    TaskLogicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_task_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskServiceService"], _shared_service_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])], TaskLogicService);
    /***/
  },

  /***/
  "./src/app/pages/task/service/task-service.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/task/service/task-service.service.ts ***!
    \************************************************************/

  /*! exports provided: TaskServiceService */

  /***/
  function srcAppPagesTaskServiceTaskServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskServiceService", function () {
      return TaskServiceService;
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

    var TaskServiceService = /*#__PURE__*/function () {
      function TaskServiceService(amplifyService) {
        _classCallCheck(this, TaskServiceService);

        this.amplifyService = amplifyService;
      }

      _createClass(TaskServiceService, [{
        key: "fetchRoomInfo",
        value: function fetchRoomInfo(roomId) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.GetRoom(roomId));
        }
      }, {
        key: "createTaskItem",
        value: function createTaskItem(content) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.CreateTask(content));
        }
      }, {
        key: "updateTaskItem",
        value: function updateTaskItem(content) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.UpdateTask(content));
        }
      }, {
        key: "fetchTaskItemsPerRoom",
        value: function fetchTaskItemsPerRoom(content) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.ListTasks(content));
        }
      }, {
        key: "deleteTaskItem",
        value: function deleteTaskItem(content) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.amplifyService.DeleteTask(content));
        }
      }]);

      return TaskServiceService;
    }();

    TaskServiceService.ctorParameters = function () {
      return [{
        type: _shared_service_amplify_service__WEBPACK_IMPORTED_MODULE_2__["AmplifyService"]
      }];
    };

    TaskServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_amplify_service__WEBPACK_IMPORTED_MODULE_2__["AmplifyService"]])], TaskServiceService);
    /***/
  },

  /***/
  "./src/app/pages/task/task-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/task/task-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: TaskPageRoutingModule */

  /***/
  function srcAppPagesTaskTaskRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskPageRoutingModule", function () {
      return TaskPageRoutingModule;
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


    var _task_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task.page */
    "./src/app/pages/task/task.page.ts");

    var routes = [{
      path: ':id',
      component: _task_page__WEBPACK_IMPORTED_MODULE_3__["TaskPage"]
    }];

    var TaskPageRoutingModule = function TaskPageRoutingModule() {
      _classCallCheck(this, TaskPageRoutingModule);
    };

    TaskPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TaskPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/task/task.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/task/task.module.ts ***!
    \*******************************************/

  /*! exports provided: TaskPageModule */

  /***/
  function srcAppPagesTaskTaskModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskPageModule", function () {
      return TaskPageModule;
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


    var _task_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./task-routing.module */
    "./src/app/pages/task/task-routing.module.ts");
    /* harmony import */


    var _task_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./task.page */
    "./src/app/pages/task/task.page.ts");
    /* harmony import */


    var _logic_task_logic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./logic/task-logic.service */
    "./src/app/pages/task/logic/task-logic.service.ts");
    /* harmony import */


    var _service_task_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./service/task-service.service */
    "./src/app/pages/task/service/task-service.service.ts");

    var TaskPageModule = function TaskPageModule() {
      _classCallCheck(this, TaskPageModule);
    };

    TaskPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _task_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskPageRoutingModule"]],
      declarations: [_task_page__WEBPACK_IMPORTED_MODULE_6__["TaskPage"]],
      providers: [_logic_task_logic_service__WEBPACK_IMPORTED_MODULE_7__["TaskLogicService"], _service_task_service_service__WEBPACK_IMPORTED_MODULE_8__["TaskServiceService"]]
    })], TaskPageModule);
    /***/
  },

  /***/
  "./src/app/pages/task/task.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/task/task.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTaskTaskPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".task-title {\n  font-weight: 500;\n  font-size: large;\n}\n\n.task-card-content {\n  padding-top: 30px;\n  padding-bottom: 10px;\n}\n\n.card-background {\n  --background: \"#1c1c1d\";\n}\n\n.button-center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWt1bmFrYWdhd2EvZGV2L2lvbmljL3dhbnRUby9zcmMvYXBwL3BhZ2VzL3Rhc2svdGFzay5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rhc2svdGFzay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2svdGFzay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4udGFzay1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XG59XG5cbi5jYXJkLWJhY2tncm91bmQge1xuICAgIC0tYmFja2dyb3VuZDogJyMxYzFjMWQnO1xufVxuXG4uYnV0dG9uLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIi50YXNrLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLnRhc2stY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiBcIiMxYzFjMWRcIjtcbn1cblxuLmJ1dHRvbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/task/task.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/task/task.page.ts ***!
    \*****************************************/

  /*! exports provided: TaskPage */

  /***/
  function srcAppPagesTaskTaskPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskPage", function () {
      return TaskPage;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_component_modal_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/component/modal/add-task-modal/add-task-modal.component */
    "./src/app/shared/component/modal/add-task-modal/add-task-modal.component.ts");
    /* harmony import */


    var _logic_task_logic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./logic/task-logic.service */
    "./src/app/pages/task/logic/task-logic.service.ts");

    var TaskPage = /*#__PURE__*/function () {
      function TaskPage(router, modalCtrl, route, location, logic, toastCtrl, actionSheetCtrl) {
        _classCallCheck(this, TaskPage);

        this.router = router;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.location = location;
        this.logic = logic;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.room = {};
      }

      _createClass(TaskPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.isReorder = false;
          this.segment = 'active';
          this.roomId = this.route.snapshot.paramMap.get('id');
          this.logic.fetchRoomInfo(this.roomId).subscribe(function (roomInfo) {
            _this.room = roomInfo;
          });
          this.logic.fetchCurrentUserInfo().subscribe(function (email) {
            return _this.userEmail = email;
          });
          this.logic.fetchActiveTaskPerRoom(this.roomId).subscribe(function (items) {
            _this.taskActiveItems = items;
          });
          this.logic.fetchDoneTaskPerRoom(this.roomId).subscribe(function (items) {
            _this.taskDoneItems = items;
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
        key: "presentAddTask",
        value: function presentAddTask() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var modal, dismissObservable;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _shared_component_modal_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddTaskModalComponent"],
                      componentProps: {
                        room: this.room
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    dismissObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(modal.onDidDismiss());
                    dismissObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function (_ref) {
                      var data = _ref.data;
                      return _this2.logic.createTaskToRoom(data, _this2.roomId, _this2.userEmail);
                    })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function () {
                      return _this2.logic.fetchActiveTaskPerRoom(_this2.roomId);
                    })).subscribe(function (items) {
                      _this2.taskActiveItems = items;
                    });
                    return _context2.abrupt("return", modal.present());

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "goBackToRoom",
        value: function goBackToRoom() {
          this.location.back();
        }
      }, {
        key: "sortTaskItem",
        value: function sortTaskItem() {
          this.isReorder = !this.isReorder;
        }
      }, {
        key: "reorderTask",
        value: function reorderTask(ev) {
          var itemMove = this.taskActiveItems.splice(ev.detail.from, 1)[0];
          this.taskActiveItems.splice(ev.detail.to, 0, itemMove);
          ev.detail.complete();
        }
      }, {
        key: "navigateToTaskDetail",
        value: function navigateToTaskDetail(task, segment) {
          this.router.navigate(['task-detail', "".concat(task.id), "".concat(segment)]);
        }
      }, {
        key: "addCommentToTaskDetail",
        value: function addCommentToTaskDetail(task) {
          this.router.navigate(['task-detail', "".concat(task.id)], {
            fragment: 'comment'
          });
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          this.segment = ev.detail.value;
        }
      }, {
        key: "doneTask",
        value: function doneTask(taskItem) {
          var _this3 = this;

          var presentToast = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.presentDoneToast());
          this.logic.updateTaskItem(taskItem, 10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function () {
            return _this3.logic.fetchActiveTaskPerRoom(_this3.roomId);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            return presentToast;
          })).subscribe(function (data) {
            return _this3.taskActiveItems = data;
          });
        }
      }, {
        key: "presentConfirmDelete",
        value: function presentConfirmDelete(task) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.actionSheetCtrl.create({
                      buttons: [{
                        text: '削除',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this4.deleteTask(task);
                        }
                      }, {
                        text: 'キャンセル',
                        icon: 'close',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context3.sent;
                    return _context3.abrupt("return", actionSheet.present());

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(task) {
          var _this5 = this;

          console.log(task);
          this.logic.deleteTaskItem(task.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function () {
            return _this5.logic.fetchActiveTaskPerRoom(_this5.roomId);
          })).subscribe(function (result) {
            return _this5.taskActiveItems = result;
          });
        }
      }]);

      return TaskPage;
    }();

    TaskPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _logic_task_logic_service__WEBPACK_IMPORTED_MODULE_8__["TaskLogicService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }];
    };

    TaskPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task/task.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task.page.scss */
      "./src/app/pages/task/task.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _logic_task_logic_service__WEBPACK_IMPORTED_MODULE_8__["TaskLogicService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])], TaskPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-task-task-module-es5.js.map