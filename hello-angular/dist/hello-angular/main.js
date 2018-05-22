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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _display_info_display_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-info/display-info.component */ "./src/app/display-info/display-info.component.ts");
/* harmony import */ var _edit_info_edit_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-info/edit-info.component */ "./src/app/edit-info/edit-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: _task_task_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'products/new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] },
    { path: 'products/:id', component: _display_info_display_info_component__WEBPACK_IMPORTED_MODULE_4__["DisplayInfoComponent"] },
    { path: 'products/:id/edit', component: _edit_info_edit_info_component__WEBPACK_IMPORTED_MODULE_5__["EditInfoComponent"] },
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

var routingComponents = [_new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n<div>\n  <h3>{{ tag_line }}</h3>\n\n</div>\n<router-outlet></router-outlet>\n\n\n\n\n<!-- \n<button (click)='getProducts()'>Get Products</button>\n<div *ngFor='let item of products'>\n<ul>\n<li>Name: {{item.name}}</li>\n<button (click)='showProduct(item._id)'>Show Details</button><br>\n<button (click)='delete_product(item._id)'>Delete PRoduct</button>\n\n</ul>\n</div>\n<app-task *ngIf='product' [productToShow]='product'></app-task>\n<div>\n<h3> New Product: </h3>\n<p *ngIf='error_check'>\n  <span *ngFor='let item of error_arr'>Error: {{ item.bullshit }}</span>\n</p>\n<form (submit)='on_submit()'>\n  <p> {{new_product | json }} </p>\n  Name: <input type='text' name='new_product.name' [(ngModel)]='new_product.name'><br>\n  <input type='submit' value='Create product'>\n</form>\n</div>\n<div *ngIf='product'>\n<h3> Edit Product: </h3>\n<form (submit)='on_edit(author._id)'>\n  <p> {{ product.name }}</p>\n  Name: <input type='text' name='edit_product.name' [(ngModel)]='edit_product.Name' value={{product.Name}}><br>\n  <input type='submit' value='Edit product'>\n</form>\n</div> -->\n\n"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Commerce Manager';
        this.products = [];
        this.product = {};
        this.error_check = false;
        this.error_arr = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.new_product = { name: '' };
        this.edit_product = { name: '' };
    };
    AppComponent.prototype.on_submit = function () {
        var _this = this;
        console.log('form submitted');
        // console.log(add_task);
        var add_product = this._httpService.add_product(this.new_product);
        add_product.subscribe(function (data) {
            console.log('Adding a product', data['error']);
            if (data['error'] !== '') {
                _this.error_check = true;
                _this.error_arr.push({ 'bullshit': data['error']['errors']['name']['message'] });
                console.log(_this.error_arr);
            }
        });
        this.new_product = { name: '' };
        this.error_arr = [];
    };
    AppComponent.prototype.getProducts = function () {
        var _this = this;
        var observable_products = this._httpService.getProducts();
        observable_products.subscribe(function (data) {
            console.log('Got all products', data);
            _this.products = data['data'];
            console.log('Hey', _this.products);
        });
        // this._httpService.getTasks();
    };
    AppComponent.prototype.showProduct = function (ID) {
        var _this = this;
        var observable_product = this._httpService.findProducts(ID);
        observable_product.subscribe(function (data) {
            console.log('Got specified product', data);
            _this.product = data['data'];
            console.log('dude', _this.product);
        });
    };
    // editTask(ID) {
    //   let observable_task = this._httpService.findTasks(ID);
    //   observable_task.subscribe(data => {
    //     console.log('Got specified task', data);
    //     this.task = data['data'];
    //     console.log('dude', this.task);
    //   });
    // }
    AppComponent.prototype.on_edit = function (ID) {
        console.log('Product edited');
        var editable_product = this._httpService.edit_product(ID, this.edit_product);
        // let editable_task = this._httpService.findTasks(ID);
        editable_product.subscribe(function (data) {
            console.log('got an editable author');
        });
    };
    AppComponent.prototype.delete_product = function (ID) {
        var deletable_products = this._httpService.deleteProducts(ID);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _display_info_display_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display-info/display-info.component */ "./src/app/display-info/display-info.component.ts");
/* harmony import */ var _edit_info_edit_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-info/edit-info.component */ "./src/app/edit-info/edit-info.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _display_info_display_info_component__WEBPACK_IMPORTED_MODULE_8__["DisplayInfoComponent"],
                _edit_info_edit_info_component__WEBPACK_IMPORTED_MODULE_9__["EditInfoComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_10__["NewComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display-info/display-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/display-info/display-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#module_content{\r\n    border: 1px solid black;\r\n    padding: 10px;\r\n    width: 430px;\r\n}\r\n.errors{\r\n    color: #913eff;\r\n}\r\n#update_button{\r\n    background-color: #66bbff;\r\n}"

/***/ }),

/***/ "./src/app/display-info/display-info.component.html":
/*!**********************************************************!*\
  !*** ./src/app/display-info/display-info.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>{{ title }}</h1>\n</div>\n<div id='module_content'>\n  <h3>{{ tag_line }}</h3>\n  <span class='errors' *ngIf='edit_product.quantity !== 0'>Quantity must be Zero to delete</span><br>\n  <span class='header'>Name: </span><span>{{ edit_product.Name }}</span>\n  <br>\n  <span class='header'>Quantity: </span><span>{{ edit_product.quantity }}</span>\n  <br>\n  <span class='header'>Price: </span><span>${{ edit_product.price }}</span>\n  <br>\n\n  <nav>\n    <button [routerLink]=\"['/products']\">Back</button> &nbsp;\n    <button *ngIf='edit_product.quantity === 0' (click)='remove_product(edit_product.ID)'>Delete</button>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/display-info/display-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/display-info/display-info.component.ts ***!
  \********************************************************/
/*! exports provided: DisplayInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayInfoComponent", function() { return DisplayInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayInfoComponent = /** @class */ (function () {
    function DisplayInfoComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.tag_line = 'Product Details';
        this.products = [];
        this.like_button = true;
    }
    DisplayInfoComponent.prototype.ngOnInit = function () {
        this.edit_product = { ID: '', Name: '', quantity: '', price: '' };
        this.id = this._route.snapshot.paramMap.get('id');
        console.log('ID gotten from parammap', this.id);
        this.get_product(this.id);
    };
    DisplayInfoComponent.prototype.get_product = function (ID) {
        var _this = this;
        var product = this._httpService.findProducts(ID);
        product.subscribe(function (data) {
            console.log('Found product data', data);
            _this.edit_product = data['data'];
        });
    };
    DisplayInfoComponent.prototype.remove_product = function (ID) {
        var product = this._httpService.deleteProducts(ID);
        product.subscribe(function (data) {
            console.log('Component deleting product');
        });
        this._router.navigateByUrl('/products');
    };
    DisplayInfoComponent.prototype.cancel_click = function () {
        this._router.navigateByUrl('/products');
    };
    DisplayInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-info',
            template: __webpack_require__(/*! ./display-info.component.html */ "./src/app/display-info/display-info.component.html"),
            styles: [__webpack_require__(/*! ./display-info.component.css */ "./src/app/display-info/display-info.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DisplayInfoComponent);
    return DisplayInfoComponent;
}());



/***/ }),

/***/ "./src/app/edit-info/edit-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-info/edit-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#module_content{\r\n    border: 1px solid black;\r\n    padding: 10px;\r\n    width: 430px;\r\n}\r\n.errors{\r\n    color: #913eff;\r\n}\r\n#update_button{\r\n    background-color: #66bbff;\r\n}"

/***/ }),

/***/ "./src/app/edit-info/edit-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-info/edit-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>{{ title }}</h1>\n</div>\n<div id='module_content'>\n  <h3>{{ tag_line }}</h3>\n  <div *ngIf='error_check'>\n    <p *ngFor='let item of error_arr'>Error: {{ item.bullshit }}</p>\n  </div>\n  <div>\n  <span class='errors' *ngIf='edit_product.Name.length < 3'>Name must be at least 3 characters</span><br>\n  <span class='errors' *ngIf='edit_product.quantity < 0'>Quantity must be at least 0</span><br>\n  <span class='errors' *ngIf='edit_product.price < 0'>Price must be at least 0</span><br>\n    <form (submit)='edit_submit(edit_product.ID)'>\n      Name:\n      <input type='text' name='e_name' [(ngModel)]='edit_product.Name'>\n      <br> Quantity:\n      <input type='number' min='0' name='e_type' [(ngModel)]='edit_product.quantity'>\n      <br> Price:\n      <input type='number' min='0' name='e_details' [(ngModel)]='edit_product.price'>\n      <br>\n      <input id='update_button' *ngIf='edit_product.Name.length > 2 && edit_product.quantity >= 0 && edit_product.price >= 0' type='submit' value='Update'>\n    </form>\n      <button (click)='reset_click(edit_product.ID)'>Reset</button> &nbsp;\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-info/edit-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-info/edit-info.component.ts ***!
  \**************************************************/
/*! exports provided: EditInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInfoComponent", function() { return EditInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditInfoComponent = /** @class */ (function () {
    function EditInfoComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.tag_line = 'Update Product';
        this.products = [];
        this.error_check = false;
        this.error_arr = [];
    }
    EditInfoComponent.prototype.ngOnInit = function () {
        this.edit_product = { ID: '', Name: '', quantity: '', price: '' };
        this.id = this._route.snapshot.paramMap.get('id');
        console.log('ID gotten from parammap', this.id);
        this.get_product(this.id);
    };
    EditInfoComponent.prototype.get_product = function (ID) {
        var _this = this;
        var product = this._httpService.findProducts(ID);
        product.subscribe(function (data) {
            console.log('Found product data', data);
            _this.edit_product = data['data'];
        });
    };
    EditInfoComponent.prototype.reset_click = function (ID) {
        console.log('reset click');
        this.get_product(ID);
    };
    EditInfoComponent.prototype.edit_submit = function (ID) {
        var _this = this;
        console.log('Product edited');
        var editable_product = this._httpService.edit_product(ID, this.edit_product);
        editable_product.subscribe(function (data) {
            console.log('got an editable product');
            if (data['error'] !== undefined) {
                console.log('Adding a product', data['error']);
                if (data['error']['errors'] !== undefined) {
                    console.log('there were errors');
                    if (data['error']['errors']['Name'] !== undefined) {
                        console.log('data["error"]["errors"]["Name"]', data['error']['errors']['Name']);
                        _this.error_check = true;
                        _this.error_arr.push({ 'bullshit': data['error']['errors']['Name']['message'] });
                        // console.log('Error_arr', this.error_arr);
                    }
                    if (data['error']['errors']['quantity'] !== undefined) {
                        console.log('data["error"]["errors"]["quantity"]', data['error']['errors']['quantity']);
                        _this.error_check = true;
                        _this.error_arr.push({ 'bullshit': data['error']['errors']['quantity']['message'] });
                        // console.log('Error_arr', this.error_arr);
                    }
                    if (data['error']['errors']['price'] !== undefined) {
                        console.log('data["error"]["errors"]["price"]', data['error']['errors']['price']);
                        _this.error_check = true;
                        _this.error_arr.push({ 'bullshit': data['error']['errors']['price']['message'] });
                        console.log('Error_arr', _this.error_arr);
                    }
                }
            }
            else {
                console.log('no errors');
                _this._router.navigate(['/products']);
            }
        });
        if (this.error_arr === []) {
            console.log('empty errors');
        }
        this.error_arr = [];
    };
    EditInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-info',
            template: __webpack_require__(/*! ./edit-info.component.html */ "./src/app/edit-info/edit-info.component.html"),
            styles: [__webpack_require__(/*! ./edit-info.component.css */ "./src/app/edit-info/edit-info.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditInfoComponent);
    return EditInfoComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getProducts = function () {
        return this._http.get('/products');
    };
    HttpService.prototype.findProducts = function (ID) {
        return this._http.get('/products/' + ID);
    };
    HttpService.prototype.deleteProducts = function (ID) {
        var tempObservable = this._http.delete('/products/' + ID);
        tempObservable.subscribe(function (data) { return console.log('Deleted product with id: ', data); });
        return this._http.get('/pets');
    };
    HttpService.prototype.add_product = function (new_product) {
        console.log('made it to service');
        console.log(new_product);
        return this._http.post('/products', new_product);
    };
    HttpService.prototype.edit_product = function (ID, edit_product) {
        console.log('Made it to edit_product in SERVICE');
        return this._http.put('/products/' + ID, edit_product);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#module_content{\r\n    border: 1px solid black;\r\n    padding: 10px;\r\n    width: 430px;\r\n}\r\n.errors{\r\n    color: #913eff;\r\n}\r\n#create_button{\r\n    background-color: #66bbff;\r\n}"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>{{ title }}</h1>\n</div>\n<div id='module_content'>\n  <h3>{{ tag_line }}</h3>\n  <div *ngIf='error_check'>\n    <p *ngFor='let item of error_arr'>Error: {{ item.bullshit }}</p>\n  </div>\n  <span class='errors' *ngIf='new_product.Name.length < 3'>Name must be at least 3 characters</span><br>\n  <span class='errors' *ngIf='new_product.quantity < 0'>Quantity must be at least 0</span><br>\n  <span class='errors' *ngIf='new_product.price < 0'>Price must be at least 0</span><br>\n  <form (submit)='on_submit()'>\n    Name:<input type='text' name='new_product.Name' [(ngModel)]='new_product.Name'>\n    <br> Quantity:<input type='number' min='0' name='new_product.quantity' [(ngModel)]='new_product.quantity'>\n    <br> Price:<input type='number' min='0' name='new_product.price' [(ngModel)]='new_product.price'>\n    <br><button (click)='cancel_click()'>Cancel</button> &nbsp;\n    <input id='create_button' *ngIf='new_product.Name.length > 2 && new_product.quantity >= 0 && new_product.price >= 0' type='submit' value='Create product'>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.tag_line = 'New Product';
        this.error_check = false;
        this.error_arr = [];
        this.submit_check = false;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.new_product = { ID: '', Name: '', quantity: 0, price: 0 };
        if (this.new_product.Name.length > 2) {
            if (this.new_product.quantity >= 0) {
                if (this.new_product.price >= 0) {
                    this.submit_check = true;
                }
            }
        }
    };
    NewComponent.prototype.on_submit = function () {
        var _this = this;
        console.log('form submitted');
        var add_product = this._httpService.add_product(this.new_product);
        // console.log(add_task);
        add_product.subscribe(function (data) {
            console.log('Adding a product', data['error']);
            if (data['error'] !== undefined) {
                console.log('errors?');
                if (data['error']['errors']['Name'] !== undefined) {
                    console.log('data["error"]["errors"]["Name"]', data['error']['errors']['Name']);
                    _this.error_check = true;
                    _this.error_arr.push({ 'bullshit': data['error']['errors']['Name']['message'] });
                    // console.log('Error_arr', this.error_arr);
                }
                else if (data['error']['errors']['quantity'] !== undefined) {
                    console.log('data["error"]["errors"]["quantity"]', data['error']['errors']['quantity']);
                    _this.error_check = true;
                    _this.error_arr.push({ 'bullshit': data['error']['errors']['quantity']['message'] });
                    // console.log('Error_arr', this.error_arr);
                }
                else if (data['error']['errors']['price'] !== undefined) {
                    console.log('data["error"]["errors"]["price"]', data['error']['errors']['price']);
                    _this.error_check = true;
                    _this.error_arr.push({ 'bullshit': data['error']['errors']['price']['message'] });
                    console.log('Error_arr', _this.error_arr);
                }
            }
            else {
                console.log('now I should re route to /products');
                _this._router.navigate(['/']);
            }
        });
        this.new_product = { Name: '', quantity: 0, price: 0 };
        this.error_arr = [];
    };
    NewComponent.prototype.cancel_click = function () {
        this._router.navigateByUrl('/products');
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td{\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n    padding: 10px;\r\n}\r\nthead{\r\n    background-color: #d3d3d3;\r\n}\r\n#add_new{\r\n    display: inline-block;\r\n    float: right;\r\n\r\n}\r\n#tag_line{\r\n    display: inline-block;\r\n}\r\n#module_content{\r\n    border: 1px solid black;\r\n    padding: 10px;\r\n    width: 430px;\r\n}\r\n.actions{\r\n    width: 100px; \r\n}\r\n.edit_button{\r\n    background-color: #f2dcc5;\r\n}\r\n.details_button{\r\n    background-color: #debcbd;\r\n}"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='title'>\n    <h1>{{ title }}</h1>\n</div>\n<div id='module_content'>\n    <h3 id='tag_line'>{{ tag_line }}</h3>\n    <button id='add_new' (click)='on_new()'>Add a new product</button>\n    <table>\n        <thead>\n            <td>ID</td>\n            <td>Name</td>\n            <td>QTY</td>\n            <td>Price</td>\n            <td class='actions'>Actions</td>\n        </thead>\n        <tbody *ngFor='let item of products'>\n            <tr>\n                <td>{{item.ID}}</td>\n                <td>{{item.Name}}</td>\n                <td>{{item.quantity}}</td>\n                <td>${{item.price}}</td>\n                <td class='actions'>\n                    <button (click)='on_edit(item.ID)' class='edit_button'>Edit</button>\n                    <button (click)='showProduct(item.ID)' class='details_button'>Details</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.tag_line = 'Product List';
        this.products = [];
        this.product = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.edit_product = { Name: '' };
        var products_get = this._httpService.getProducts();
        products_get.subscribe(function (data) {
            console.log('displaying products', data);
            _this.products = data['data'];
        });
    };
    HomeComponent.prototype.getProducts = function () {
        var _this = this;
        var observable_products = this._httpService.getProducts();
        observable_products.subscribe(function (data) {
            console.log('Got all products', data);
            _this.products = data['data'];
            console.log('Hey', _this.products);
        });
        // this._httpService.getTasks();
    };
    HomeComponent.prototype.showProduct = function (ID) {
        var _this = this;
        console.log('attempting to show product', ID);
        var show_product_observable = this._httpService.findProducts(ID);
        show_product_observable.subscribe(function (data) {
            console.log('made it in to subscribe', data['data']);
            _this.product = data['data'];
        });
        this._router.navigate(['/products/' + ID]);
    };
    HomeComponent.prototype.on_new = function (ID) {
        this._router.navigate(['/products/new']);
    };
    HomeComponent.prototype.on_edit = function (ID) {
        this._router.navigate(['/products/' + ID + '/edit']);
    };
    HomeComponent.prototype.delete_product = function (ID) {
        var deletable_products = this._httpService.deleteProducts(ID);
    };
    HomeComponent.prototype.go_new = function () {
        this._router.navigate(['/new']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



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

module.exports = __webpack_require__(/*! C:\Users\Rob\Documents\DojoAssignments\Mean\ANGULAR\Belt Exam 2\hello-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map