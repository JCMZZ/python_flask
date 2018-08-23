(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animates/router.animate.ts":
/*!********************************************!*\
  !*** ./src/app/animates/router.animate.ts ***!
  \********************************************/
/*! exports provided: slideToRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideToRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerAnimate', [
    // 定义void表示空状态下
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', 'width': '100%', 'height': '100%' })),
    // * 表示任何状态
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', 'width': '100%', 'height': '100%' })),
    // 进场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-100%,0,0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0,0,0)' }))
    ]),
    // 出场动画
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0,0,0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(100%,0,0)' }))
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_list_app_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/list/app-list.component */ "./src/app/page/list/app-list.component.ts");
/* harmony import */ var _page_detail_app_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/detail/app-detail.component */ "./src/app/page/detail/app-detail.component.ts");
/* harmony import */ var _page_product_app_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/product/app-product.component */ "./src/app/page/product/app-product.component.ts");
/* harmony import */ var _page_company_app_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/company/app-company.component */ "./src/app/page/company/app-company.component.ts");
/* harmony import */ var _page_list_home_right_right_one_right_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/list/home_right/right_one/right-one.component */ "./src/app/page/list/home_right/right_one/right-one.component.ts");
/* harmony import */ var _page_list_home_right_right_two_right_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/list/home_right/right_two/right-two.component */ "./src/app/page/list/home_right/right_two/right-two.component.ts");
/* harmony import */ var _page_list_home_right_right_three_right_three_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/list/home_right/right_three/right-three.component */ "./src/app/page/list/home_right/right_three/right-three.component.ts");
/* harmony import */ var _page_list_home_right_right_four_right_four_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/list/home_right/right_four/right-four.component */ "./src/app/page/list/home_right/right_four/right-four.component.ts");
/* harmony import */ var _page_list_home_right_right_five_right_five_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/list/home_right/right_five/right-five.component */ "./src/app/page/list/home_right/right_five/right-five.component.ts");
/* harmony import */ var _page_list_home_right_right_six_right_six_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/list/home_right/right_six/right-six.component */ "./src/app/page/list/home_right/right_six/right-six.component.ts");
/* harmony import */ var _page_list_home_right_right_seven_right_seven_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/list/home_right/right_seven/right-seven.component */ "./src/app/page/list/home_right/right_seven/right-seven.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// home 子组件







// home 子路由
var appChildRoutes = [
    { path: 'one', component: _page_list_home_right_right_one_right_one_component__WEBPACK_IMPORTED_MODULE_6__["AppRightOneComponent"] },
    { path: '', redirectTo: 'one', pathMatch: 'full' },
    { path: 'two', component: _page_list_home_right_right_two_right_two_component__WEBPACK_IMPORTED_MODULE_7__["AppRightTwoComponent"] },
    { path: 'three', component: _page_list_home_right_right_three_right_three_component__WEBPACK_IMPORTED_MODULE_8__["AppRightThreeComponent"] },
    { path: 'four', component: _page_list_home_right_right_four_right_four_component__WEBPACK_IMPORTED_MODULE_9__["AppRightFourComponent"] },
    { path: 'five', component: _page_list_home_right_right_five_right_five_component__WEBPACK_IMPORTED_MODULE_10__["AppRightFiveComponent"] },
    { path: 'six', component: _page_list_home_right_right_six_right_six_component__WEBPACK_IMPORTED_MODULE_11__["AppRightSixComponent"] },
    { path: 'seven', component: _page_list_home_right_right_seven_right_seven_component__WEBPACK_IMPORTED_MODULE_12__["AppRightSevenComponent"] }
];
var routes = [
    { path: 'home', component: _page_list_app_list_component__WEBPACK_IMPORTED_MODULE_2__["AppListComponent"], children: appChildRoutes },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'detail', component: _page_detail_app_detail_component__WEBPACK_IMPORTED_MODULE_3__["AppDetailComponent"] },
    { path: 'product', component: _page_product_app_product_component__WEBPACK_IMPORTED_MODULE_4__["AppProductComponent"] },
    { path: 'company', component: _page_company_app_company_component__WEBPACK_IMPORTED_MODULE_5__["AppCompanyComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routedComponents = [_page_list_app_list_component__WEBPACK_IMPORTED_MODULE_2__["AppListComponent"], _page_detail_app_detail_component__WEBPACK_IMPORTED_MODULE_3__["AppDetailComponent"],
    _page_product_app_product_component__WEBPACK_IMPORTED_MODULE_4__["AppProductComponent"], _page_company_app_company_component__WEBPACK_IMPORTED_MODULE_5__["AppCompanyComponent"],
    _page_list_home_right_right_one_right_one_component__WEBPACK_IMPORTED_MODULE_6__["AppRightOneComponent"], _page_list_home_right_right_two_right_two_component__WEBPACK_IMPORTED_MODULE_7__["AppRightTwoComponent"],
    _page_list_home_right_right_three_right_three_component__WEBPACK_IMPORTED_MODULE_8__["AppRightThreeComponent"], _page_list_home_right_right_four_right_four_component__WEBPACK_IMPORTED_MODULE_9__["AppRightFourComponent"],
    _page_list_home_right_right_five_right_five_component__WEBPACK_IMPORTED_MODULE_10__["AppRightFiveComponent"], _page_list_home_right_right_six_right_six_component__WEBPACK_IMPORTED_MODULE_11__["AppRightSixComponent"],
    _page_list_home_right_right_seven_right_seven_component__WEBPACK_IMPORTED_MODULE_12__["AppRightSevenComponent"]];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center;margin-bottom: 5px;\">\r\n  <app-head></app-head>\r\n</div>\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<ngx-loading-bar height=\"6px\" [includeSpinner]=\"false\" color=\"blue\" ></ngx-loading-bar>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ "./node_modules/@ngx-loading-bar/http-client/esm5/ngx-loading-bar-http-client.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/http.service */ "./src/app/service/http.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_header_app_head_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/header/app-head.component */ "./src/app/page/header/app-head.component.ts");
/* harmony import */ var _page_list_home_left_home_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/list/home_left/home-nav.component */ "./src/app/page/list/home_left/home-nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var declarations = [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _page_header_app_head_component__WEBPACK_IMPORTED_MODULE_10__["AppHeadComponent"], _page_list_home_left_home_nav_component__WEBPACK_IMPORTED_MODULE_11__["AppListNavComponent"]].concat(_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routedComponents"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: declarations,
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                // 加载动画
                _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__["LoadingBarHttpClientModule"],
            ],
            providers: [src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["httpInterceptorProviders"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/page/company/app-company.component.html":
/*!*********************************************************!*\
  !*** ./src/app/page/company/app-company.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>公司</h1>"

/***/ }),

/***/ "./src/app/page/company/app-company.component.less":
/*!*********************************************************!*\
  !*** ./src/app/page/company/app-company.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/company/app-company.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/company/app-company.component.ts ***!
  \*******************************************************/
/*! exports provided: AppCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCompanyComponent", function() { return AppCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppCompanyComponent = /** @class */ (function () {
    function AppCompanyComponent() {
    }
    AppCompanyComponent.prototype.ngOnInit = function () { };
    AppCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./app-company.component.html */ "./src/app/page/company/app-company.component.html"),
            styles: [__webpack_require__(/*! ./app-company.component.less */ "./src/app/page/company/app-company.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], AppCompanyComponent);
    return AppCompanyComponent;
}());



/***/ }),

/***/ "./src/app/page/detail/app-detail.component.html":
/*!*******************************************************!*\
  !*** ./src/app/page/detail/app-detail.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>详情</h1>"

/***/ }),

/***/ "./src/app/page/detail/app-detail.component.less":
/*!*******************************************************!*\
  !*** ./src/app/page/detail/app-detail.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/detail/app-detail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/detail/app-detail.component.ts ***!
  \*****************************************************/
/*! exports provided: AppDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDetailComponent", function() { return AppDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppDetailComponent = /** @class */ (function () {
    function AppDetailComponent() {
    }
    AppDetailComponent.prototype.ngOnInit = function () { };
    AppDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./app-detail.component.html */ "./src/app/page/detail/app-detail.component.html"),
            styles: [__webpack_require__(/*! ./app-detail.component.less */ "./src/app/page/detail/app-detail.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], AppDetailComponent);
    return AppDetailComponent;
}());



/***/ }),

/***/ "./src/app/page/header/app-head.component.html":
/*!*****************************************************!*\
  !*** ./src/app/page/header/app-head.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <ul>\r\n        <li *ngFor=\"let nav of navs\" \r\n            [routerLink]=\"nav.path\" \r\n            routerLinkActive=\"routerActive\">\r\n            <!-- [routerLinkActiveOptions]=\"{exact: true}\" -->\r\n            {{nav.name}}\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/page/header/app-head.component.less":
/*!*****************************************************!*\
  !*** ./src/app/page/header/app-head.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: rgba(0, 0, 0, 0.5);\n  height: 80px;\n  width: 100%;\n  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.5);\n}\n.header ul {\n  width: 100%;\n  height: 100%;\n}\n.header ul li {\n  height: 100%;\n  line-height: 80px;\n  font-size: 30px;\n  display: inline-block;\n  width: 25%;\n  cursor: pointer;\n  transition: background 1s;\n}\n.header ul li:hover {\n  background: gold;\n  box-shadow: 0 1px 10px 1px gold;\n}\n.routerActive {\n  background: gold;\n  box-shadow: 0 1px 10px 1px gold !important;\n}\n"

/***/ }),

/***/ "./src/app/page/header/app-head.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page/header/app-head.component.ts ***!
  \***************************************************/
/*! exports provided: AppHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeadComponent", function() { return AppHeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHeadComponent = /** @class */ (function () {
    function AppHeadComponent() {
        this.navs = [{
                name: 'HOME',
                path: '/home'
            }, {
                name: 'DETAIL',
                path: '/detail'
            }, {
                name: 'PRODUCT',
                path: '/product'
            }, {
                name: 'COMPANY',
                path: '/company'
            }];
        this.green = 'green';
    }
    AppHeadComponent.prototype.ngOnInit = function () {
    };
    AppHeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-head',
            template: __webpack_require__(/*! ./app-head.component.html */ "./src/app/page/header/app-head.component.html"),
            styles: [__webpack_require__(/*! ./app-head.component.less */ "./src/app/page/header/app-head.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], AppHeadComponent);
    return AppHeadComponent;
}());



/***/ }),

/***/ "./src/app/page/list/app-list.component.html":
/*!***************************************************!*\
  !*** ./src/app/page/list/app-list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <div class=\"nav\">\r\n        <app-list-nav></app-list-nav>\r\n    </div>\r\n    <div class=\"content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page/list/app-list.component.less":
/*!***************************************************!*\
  !*** ./src/app/page/list/app-list.component.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100%;\n}\n.main .nav {\n  width: 23%;\n  display: inline-block;\n}\n.main .content {\n  position: relative;\n  display: inline-block;\n  width: 77%;\n}\n"

/***/ }),

/***/ "./src/app/page/list/app-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/page/list/app-list.component.ts ***!
  \*************************************************/
/*! exports provided: AppListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppListComponent", function() { return AppListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_left_home_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home_left/home-nav.component */ "./src/app/page/list/home_left/home-nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppListComponent = /** @class */ (function () {
    function AppListComponent() {
    }
    AppListComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('child1'),
        __metadata("design:type", _home_left_home_nav_component__WEBPACK_IMPORTED_MODULE_1__["AppListNavComponent"])
    ], AppListComponent.prototype, "child1", void 0);
    AppListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./app-list.component.html */ "./src/app/page/list/app-list.component.html"),
            styles: [__webpack_require__(/*! ./app-list.component.less */ "./src/app/page/list/app-list.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], AppListComponent);
    return AppListComponent;
}());



/***/ }),

/***/ "./src/app/page/list/home_left/home-nav.component.html":
/*!*************************************************************!*\
  !*** ./src/app/page/list/home_left/home-nav.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\r\n    <ul>\r\n        <li *ngFor=\"let item of items\" \r\n        [routerLink]=\"item.path\"\r\n        routerLinkActive=\"active\">{{item.name}}</li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/page/list/home_left/home-nav.component.less":
/*!*************************************************************!*\
  !*** ./src/app/page/list/home_left/home-nav.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  width: 100%;\n  padding: 15px;\n}\n.nav ul li {\n  height: 40px;\n  line-height: 40px;\n  padding: 0 20px;\n  margin: 20px 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: all 1s;\n}\n.nav ul li:hover {\n  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.5);\n}\n.active {\n  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.5);\n}\n"

/***/ }),

/***/ "./src/app/page/list/home_left/home-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/list/home_left/home-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: AppListNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppListNavComponent", function() { return AppListNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppListNavComponent = /** @class */ (function () {
    function AppListNavComponent() {
        this.items = [{
                name: '项目一',
                path: '/home/one'
            }, {
                name: '项目二',
                path: '/home/two'
            }, {
                name: '项目三',
                path: '/home/three'
            }, {
                name: '项目四',
                path: '/home/four'
            }, {
                name: '项目五',
                path: '/home/five'
            }, {
                name: '项目六',
                path: '/home/six'
            }, {
                name: '项目七',
                path: '/home/seven'
            }];
    }
    AppListNavComponent.prototype.ngOnInit = function () { };
    AppListNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-nav',
            template: __webpack_require__(/*! ./home-nav.component.html */ "./src/app/page/list/home_left/home-nav.component.html"),
            styles: [__webpack_require__(/*! ./home-nav.component.less */ "./src/app/page/list/home_left/home-nav.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], AppListNavComponent);
    return AppListNavComponent;
}());



/***/ }),

/***/ "./src/app/page/list/home_right/right_five/right-five.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_five/right-five.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div echarts [options] = \"busLineOption\" [loading]=\"showloading\" style=\"height: 700px;\"></div>"

/***/ }),

/***/ "./src/app/page/list/home_right/right_five/right-five.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_five/right-five.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/list/home_right/right_five/right-five.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_five/right-five.component.ts ***!
  \*************************************************************************/
/*! exports provided: AppRightFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRightFiveComponent", function() { return AppRightFiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animates/router.animate */ "./src/app/animates/router.animate.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppRightFiveComponent = /** @class */ (function () {
    function AppRightFiveComponent($http, es) {
        this.$http = $http;
        this.es = es;
        this.showloading = true;
        this.busLineOption = {};
    }
    AppRightFiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 测试请求
        // this.$http
        //     .get('http://jsonplaceholder.typicode.com/posts?name=1')
        //     .subscribe(data => console.log(data));
        this.$http
            .post('http://127.0.0.1:8888/data', { name: 'JCM' })
            .subscribe(function (data) {
            var hStep = 300 / (data.length - 1);
            var busLines = [].concat.apply([], data.map(function (busLine, idx) {
                var prevPt;
                var points = [];
                for (var i = 0; i < busLine.length; i += 2) {
                    var pt = [busLine[i], busLine[i + 1]];
                    if (i > 0) {
                        pt = [
                            prevPt[0] + pt[0],
                            prevPt[1] + pt[1]
                        ];
                    }
                    prevPt = pt;
                    points.push([pt[0] / 1e4, pt[1] / 1e4]);
                }
                return {
                    coords: points,
                    lineStyle: {
                        normal: {
                            color: _this.es.echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
                        }
                    }
                };
            }));
            _this.busLineOption = {
                title: {
                    text: '北京公交路线 - 特效'
                },
                bmap: {
                    center: [116.46, 39.92],
                    zoom: 10,
                    roam: false,
                    mapStyle: {
                        'styleJson': [
                            {
                                'featureType': 'water',
                                'elementType': 'all',
                                'stylers': {
                                    'color': '#031628'
                                }
                            },
                            {
                                'featureType': 'land',
                                'elementType': 'geometry',
                                'stylers': {
                                    'color': '#000102'
                                }
                            },
                            {
                                'featureType': 'highway',
                                'elementType': 'all',
                                'stylers': {
                                    'visibility': 'off'
                                }
                            },
                            {
                                'featureType': 'arterial',
                                'elementType': 'geometry.fill',
                                'stylers': {
                                    'color': '#000000'
                                }
                            },
                            {
                                'featureType': 'arterial',
                                'elementType': 'geometry.stroke',
                                'stylers': {
                                    'color': '#0b3d51'
                                }
                            },
                            {
                                'featureType': 'local',
                                'elementType': 'geometry',
                                'stylers': {
                                    'color': '#000000'
                                }
                            },
                            {
                                'featureType': 'railway',
                                'elementType': 'geometry.fill',
                                'stylers': {
                                    'color': '#000000'
                                }
                            },
                            {
                                'featureType': 'railway',
                                'elementType': 'geometry.stroke',
                                'stylers': {
                                    'color': '#08304b'
                                }
                            },
                            {
                                'featureType': 'subway',
                                'elementType': 'geometry',
                                'stylers': {
                                    'lightness': -70
                                }
                            },
                            {
                                'featureType': 'building',
                                'elementType': 'geometry.fill',
                                'stylers': {
                                    'color': '#000000'
                                }
                            },
                            {
                                'featureType': 'all',
                                'elementType': 'labels.text.fill',
                                'stylers': {
                                    'color': '#857f7f'
                                }
                            },
                            {
                                'featureType': 'all',
                                'elementType': 'labels.text.stroke',
                                'stylers': {
                                    'color': '#000000'
                                }
                            },
                            {
                                'featureType': 'building',
                                'elementType': 'geometry',
                                'stylers': {
                                    'color': '#022338'
                                }
                            },
                            {
                                'featureType': 'green',
                                'elementType': 'geometry',
                                'stylers': {
                                    'color': '#062032'
                                }
                            },
                            {
                                'featureType': 'boundary',
                                'elementType': 'all',
                                'stylers': {
                                    'color': '#465b6c'
                                }
                            },
                            {
                                'featureType': 'manmade',
                                'elementType': 'all',
                                'stylers': {
                                    'color': '#022338'
                                }
                            },
                            {
                                'featureType': 'label',
                                'elementType': 'all',
                                'stylers': {
                                    'visibility': 'off'
                                }
                            }
                        ]
                    }
                },
                series: [{
                        type: 'lines',
                        coordinateSystem: 'bmap',
                        polyline: true,
                        data: busLines,
                        silent: true,
                        lineStyle: {
                            normal: {
                                opacity: 0.2,
                                width: 1
                            }
                        },
                        progressiveThreshold: 500,
                        progressive: 200
                    }, {
                        type: 'lines',
                        coordinateSystem: 'bmap',
                        polyline: true,
                        data: busLines,
                        lineStyle: {
                            normal: {
                                width: 0
                            }
                        },
                        effect: {
                            constantSpeed: 20,
                            show: true,
                            trailLength: 0.1,
                            symbolSize: 1.5
                        },
                        zlevel: 1
                    }]
            };
        });
        this.showloading = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@routerAnimate'),
        __metadata("design:type", Object)
    ], AppRightFiveComponent.prototype, "state", void 0);
    AppRightFiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-five',
            template: __webpack_require__(/*! ./right-five.component.html */ "./src/app/page/list/home_right/right_five/right-five.component.html"),
            styles: [__webpack_require__(/*! ./right-five.component.less */ "./src/app/page/list/home_right/right_five/right-five.component.less")],
            animations: [
                _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__["slideToRight"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsService"]])
    ], AppRightFiveComponent);
    return AppRightFiveComponent;
}());



/***/ }),

/***/ "./src/app/page/list/home_right/right_four/right-four.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_four/right-four.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div echarts [options] = \"chartOption\" [loading]=\"showloading\" ></div>\r\n<div echarts [options] = \"Baroptions\" [loading]=\"showloading\" ></div>\r\n<div echarts [options] = \"linkoption\" [loading]=\"showloading\" ></div>"

/***/ }),

/***/ "./src/app/page/list/home_right/right_four/right-four.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_four/right-four.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/list/home_right/right_four/right-four.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_four/right-four.component.ts ***!
  \*************************************************************************/
/*! exports provided: AppRightFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRightFourComponent", function() { return AppRightFourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animates/router.animate */ "./src/app/animates/router.animate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppRightFourComponent = /** @class */ (function () {
    function AppRightFourComponent() {
        var _this = this;
        this.showloading = true;
        this.chartOption = {
            title: {
                text: '堆叠区域图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: { normal: {} },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        this.Baroptions = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '直达', selected: true },
                        { value: 679, name: '营销广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    data: [
                        { value: 335, name: '直达' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1048, name: '百度' },
                        { value: 251, name: '谷歌' },
                        { value: 147, name: '必应' },
                        { value: 102, name: '其他' }
                    ]
                }
            ]
        };
        this.linkoption = {
            title: {
                text: '懒猫今日访问量'
            },
            color: ['#3398DB'],
            // 气泡提示框，常用于展现更详细的数据
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            toolbox: {
                show: true,
                feature: {
                    // 显示缩放按钮
                    dataZoom: {
                        show: true
                    },
                    // 显示折线和块状图之间的切换
                    magicType: {
                        show: true,
                        type: ['bar', 'line']
                    },
                    // 显示是否还原
                    restore: {
                        show: true
                    },
                    // 是否显示图片
                    saveAsImage: {
                        show: true
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                    type: 'category',
                    data: [21231, 1212, 21231, 3213],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 20
                    },
                }],
            yAxis: [{
                    name: '懒猫今日访问量',
                    type: 'value'
                }],
            series: [{
                    name: '今日访问次数',
                    type: 'bar',
                    barWidth: '60%',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data: [21231, 1212, 21231, 3213]
                }]
        };
        setTimeout(function () {
            _this.showloading = false;
        }, 1000);
    }
    AppRightFourComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@routerAnimate'),
        __metadata("design:type", Object)
    ], AppRightFourComponent.prototype, "state", void 0);
    AppRightFourComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-four',
            template: __webpack_require__(/*! ./right-four.component.html */ "./src/app/page/list/home_right/right_four/right-four.component.html"),
            styles: [__webpack_require__(/*! ./right-four.component.less */ "./src/app/page/list/home_right/right_four/right-four.component.less")],
            animations: [
                _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__["slideToRight"]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppRightFourComponent);
    return AppRightFourComponent;
}());



/***/ }),

/***/ "./src/app/page/list/home_right/right_one/right-one.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_one/right-one.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <img src=\"https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=d2670f96e7f81a4c323fe49bb6430b3c/b3b7d0a20cf431ad15bbfedb4736acaf2fdd98e3.jpg\" alt=\"\">\r\n    <img src=\"https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=d2670f96e7f81a4c323fe49bb6430b3c/b3b7d0a20cf431ad15bbfedb4736acaf2fdd98e3.jpg\" alt=\"\">\r\n</div>"

/***/ }),

/***/ "./src/app/page/list/home_right/right_one/right-one.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_one/right-one.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 0 5px;\n}\n.content img {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/page/list/home_right/right_one/right-one.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/page/list/home_right/right_one/right-one.component.ts ***!
  \***********************************************************************/
/*! exports provided: AppRightOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRightOneComponent", function() { return AppRightOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animates/router.animate */ "./src/app/animates/router.animate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppRightOneComponent = /** @class */ (function () {
    function AppRightOneComponent() {
    }
    AppRightOneComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@routerAnimate'),
        __metadata("design:type", Object)
    ], AppRightOneComponent.prototype, "state", void 0);
    AppRightOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-one',
            template: __webpack_require__(/*! ./right-one.component.html */ "./src/app/page/list/home_right/right_one/right-one.component.html"),
            styles: [__webpack_require__(/*! ./right-one.component.less */ "./src/app/page/list/home_right/right_one/right-one.component.less")],
            animations: [
                _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__["slideToRight"]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppRightOneComponent);
    return AppRightOneComponent;
}());



/***/ }),

/***/ "./src/app/page/list/home_right/right_seven/right-seven.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_seven/right-seven.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>7</h1>"

/***/ }),

/***/ "./src/app/page/list/home_right/right_seven/right-seven.component.less":
/*!*****************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_seven/right-seven.component.less ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/list/home_right/right_seven/right-seven.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_seven/right-seven.component.ts ***!
  \***************************************************************************/
/*! exports provided: AppRightSevenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRightSevenComponent", function() { return AppRightSevenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animates/router.animate */ "./src/app/animates/router.animate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppRightSevenComponent = /** @class */ (function () {
    function AppRightSevenComponent() {
    }
    AppRightSevenComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@routerAnimate'),
        __metadata("design:type", Object)
    ], AppRightSevenComponent.prototype, "state", void 0);
    AppRightSevenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-seven',
            template: __webpack_require__(/*! ./right-seven.component.html */ "./src/app/page/list/home_right/right_seven/right-seven.component.html"),
            styles: [__webpack_require__(/*! ./right-seven.component.less */ "./src/app/page/list/home_right/right_seven/right-seven.component.less")],
            animations: [
                _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__["slideToRight"]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppRightSevenComponent);
    return AppRightSevenComponent;
}());



/***/ }),

/***/ "./src/app/page/list/home_right/right_six/right-six.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_six/right-six.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>6</h1>"

/***/ }),

/***/ "./src/app/page/list/home_right/right_six/right-six.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_six/right-six.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/list/home_right/right_six/right-six.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/page/list/home_right/right_six/right-six.component.ts ***!
  \***********************************************************************/
/*! exports provided: AppRightSixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRightSixComponent", function() { return AppRightSixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animates/router.animate */ "./src/app/animates/router.animate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppRightSixComponent = /** @class */ (function () {
    function AppRightSixComponent() {
    }
    AppRightSixComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@routerAnimate'),
        __metadata("design:type", Object)
    ], AppRightSixComponent.prototype, "state", void 0);
    AppRightSixComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-six',
            template: __webpack_require__(/*! ./right-six.component.html */ "./src/app/page/list/home_right/right_six/right-six.component.html"),
            styles: [__webpack_require__(/*! ./right-six.component.less */ "./src/app/page/list/home_right/right_six/right-six.component.less")],
            animations: [
                _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__["slideToRight"]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppRightSixComponent);
    return AppRightSixComponent;
}());



/***/ }),

/***/ "./src/app/page/list/home_right/right_three/right-three.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_three/right-three.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n    <div class=\"position\">\r\n        <div class=\"position\">\r\n            <div class=\"position\">\r\n                <div class=\"position\">\r\n                    <span class=\"text position\">\r\n                        努力\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page/list/home_right/right_three/right-three.component.less":
/*!*****************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_three/right-three.component.less ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);\n  height: 600px;\n  width: 100%;\n  margin-top: 20px;\n  position: relative;\n}\n.position {\n  position: absolute;\n  width: 90%;\n  height: 80%;\n  box-shadow: 0 0 50px 2px rgba(0, 0, 0, 0.5);\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  margin: auto;\n}\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 100px;\n  letter-spacing: 100px;\n}\n.position:after {\n  content: '';\n  width: 0;\n  height: 100%;\n  display: inline-block;\n  vertical-align: middle;\n}\n"

/***/ }),

/***/ "./src/app/page/list/home_right/right_three/right-three.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_three/right-three.component.ts ***!
  \***************************************************************************/
/*! exports provided: AppRightThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRightThreeComponent", function() { return AppRightThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animates/router.animate */ "./src/app/animates/router.animate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppRightThreeComponent = /** @class */ (function () {
    function AppRightThreeComponent() {
    }
    AppRightThreeComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@routerAnimate'),
        __metadata("design:type", Object)
    ], AppRightThreeComponent.prototype, "state", void 0);
    AppRightThreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-three',
            template: __webpack_require__(/*! ./right-three.component.html */ "./src/app/page/list/home_right/right_three/right-three.component.html"),
            styles: [__webpack_require__(/*! ./right-three.component.less */ "./src/app/page/list/home_right/right_three/right-three.component.less")],
            animations: [
                _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__["slideToRight"]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppRightThreeComponent);
    return AppRightThreeComponent;
}());



/***/ }),

/***/ "./src/app/page/list/home_right/right_two/right-two.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_two/right-two.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"center\">\r\n        <table>\r\n            <thead>\r\n                <tr>\r\n                    <th>姓名</th>\r\n                    <th>年龄</th>\r\n                    <th>身高</th>\r\n                    <th>体重</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of persons;let index = index;\"\r\n                    [ngClass]=\"{'rowActive':rowActive === index}\">\r\n                    <td (mouseenter)=\"active(index, 0)\" [ngClass]=\"{'rowActive':cloumActive === 0}\">{{item.name}}</td>\r\n                    <td (mouseenter)=\"active(index, 1)\" [ngClass]=\"{'rowActive':cloumActive === 1}\">{{item.age}}</td>\r\n                    <td (mouseenter)=\"active(index, 2)\" [ngClass]=\"{'rowActive':cloumActive === 2}\">{{item.height}}</td>\r\n                    <td (mouseenter)=\"active(index, 3)\" [ngClass]=\"{'rowActive':cloumActive === 3}\">{{item.weight}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <p class=\"tip\">\r\n            第<span>{{rowActive+1}}</span>行\r\n            第<span>{{cloumActive+1}}</span>列\r\n        </p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page/list/home_right/right_two/right-two.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/page/list/home_right/right_two/right-two.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 20px;\n  width: 100%;\n  height: 600px;\n}\n.content .center {\n  width: 100%;\n  height: 100%;\n}\n.content .center table {\n  width: 100%;\n}\ntable td,\ntable th {\n  box-shadow: 0 0 1px 1px goldenrod;\n  width: 20%;\n  text-align: center;\n  vertical-align: bottom;\n  height: 50px;\n  border-collapse: collapse;\n  transition: all 1.5s;\n  cursor: pointer;\n}\ntable tr {\n  transition: all 1.5s;\n}\n.rowActive {\n  background: rgba(136, 39, 39, 0.479);\n}\n.tip {\n  float: left;\n  margin: 15px 0;\n}\n.tip span {\n  display: inline-block;\n  width: 50px;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/page/list/home_right/right_two/right-two.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/page/list/home_right/right_two/right-two.component.ts ***!
  \***********************************************************************/
/*! exports provided: AppRightTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRightTwoComponent", function() { return AppRightTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animates/router.animate */ "./src/app/animates/router.animate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppRightTwoComponent = /** @class */ (function () {
    function AppRightTwoComponent() {
        this.rowActive = -1;
        this.cloumActive = -1;
        this.persons = [{
                name: 'JCM',
                age: 23,
                weight: '72kg',
                height: '182cm'
            }, {
                name: 'JCM',
                age: 23,
                weight: '72kg',
                height: '182cm'
            }, {
                name: 'JCM',
                age: 23,
                weight: '72kg',
                height: '182cm'
            }, {
                name: 'JCM',
                age: 23,
                weight: '72kg',
                height: '182cm'
            }, {
                name: 'JCM',
                age: 23,
                weight: '72kg',
                height: '182cm'
            }, {
                name: 'JCM',
                age: 23,
                weight: '72kg',
                height: '182cm'
            }, {
                name: 'JCM',
                age: 23,
                weight: '72kg',
                height: '182cm'
            }];
    }
    AppRightTwoComponent.prototype.ngOnInit = function () { };
    AppRightTwoComponent.prototype.active = function (index, cloum) {
        this.rowActive = index;
        this.cloumActive = cloum;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@routerAnimate'),
        __metadata("design:type", Object)
    ], AppRightTwoComponent.prototype, "state", void 0);
    AppRightTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-two',
            template: __webpack_require__(/*! ./right-two.component.html */ "./src/app/page/list/home_right/right_two/right-two.component.html"),
            styles: [__webpack_require__(/*! ./right-two.component.less */ "./src/app/page/list/home_right/right_two/right-two.component.less")],
            animations: [
                _animates_router_animate__WEBPACK_IMPORTED_MODULE_1__["slideToRight"]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppRightTwoComponent);
    return AppRightTwoComponent;
}());



/***/ }),

/***/ "./src/app/page/product/app-product.component.html":
/*!*********************************************************!*\
  !*** ./src/app/page/product/app-product.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>产品</h1>"

/***/ }),

/***/ "./src/app/page/product/app-product.component.less":
/*!*********************************************************!*\
  !*** ./src/app/page/product/app-product.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/product/app-product.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/product/app-product.component.ts ***!
  \*******************************************************/
/*! exports provided: AppProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProductComponent", function() { return AppProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppProductComponent = /** @class */ (function () {
    function AppProductComponent() {
    }
    AppProductComponent.prototype.ngOnInit = function () { };
    AppProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./app-product.component.html */ "./src/app/page/product/app-product.component.html"),
            styles: [__webpack_require__(/*! ./app-product.component.less */ "./src/app/page/product/app-product.component.less")],
        }),
        __metadata("design:paramtypes", [])
    ], AppProductComponent);
    return AppProductComponent;
}());



/***/ }),

/***/ "./src/app/service/http.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/service/http.interceptor.ts ***!
  \*********************************************/
/*! exports provided: BaseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseInterceptor", function() { return BaseInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*设置请求的基地址，方便替换*/
var baseurl = 'http://127.0.0.1:8360';
var BaseInterceptor = /** @class */ (function () {
    function BaseInterceptor() {
    }
    BaseInterceptor.prototype.intercept = function (req, next) {
        var newReq = req.clone({ headers: req.headers.set('token', 'Header:Token'), body: { name: '这是Body' } });
        // console.log(newReq.headers.get('auth'));
        // console.log(newReq.body && newReq.body.name);
        // console.log(newReq.params.get('age'));
        // console.log(newReq.method);
        return next.handle(newReq)
            .pipe(
        /*失败时重试2次，可自由设置*/
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(2), 
        /*捕获响应错误，可根据需要自行改写*/
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    BaseInterceptor.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    BaseInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BaseInterceptor);
    return BaseInterceptor;
}());



/***/ }),

/***/ "./src/app/service/http.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.interceptor */ "./src/app/service/http.interceptor.ts");


/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _http_interceptor__WEBPACK_IMPORTED_MODULE_1__["BaseInterceptor"], multi: true },
];
/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\visual studio\EMAY_GIT\example_angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map