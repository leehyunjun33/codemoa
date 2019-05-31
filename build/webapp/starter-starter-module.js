(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starter-starter-module"],{

/***/ "./src/app/pages/starter/starter.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/starter/starter.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">추천 강의 영상</h4>\r\n                    <!-- Row -->\r\n                    <div class=\"row\">\r\n                        <!-- column -->\r\n                        <div class=\"col-lg-3 col-md-6\">\r\n                            <!-- Card -->\r\n                            <div class=\"card\">\r\n                                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/java.PNG\" alt=\"Card image cap\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-title\">JAVA 기초 1</h4>\r\n                                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                                    <a href=\"#\" class=\"btn btn-primary\">보러가기</a>\r\n                                </div>\r\n                            </div>\r\n                            <!-- Card -->\r\n                        </div>\r\n                        <!-- column -->\r\n                        <!-- column -->\r\n                        <div class=\"col-lg-3 col-md-6\">\r\n                            <!-- Card -->\r\n                            <div class=\"card\">\r\n                                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/angular.jpeg\" alt=\"Card image cap\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-title\">Angular 기초 3</h4>\r\n                                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                                    <a href=\"#\" class=\"btn btn-primary\">보러가기</a>\r\n                                </div>\r\n                            </div>\r\n                            <!-- Card -->\r\n                        </div>\r\n                        <!-- column -->\r\n                        <!-- column -->\r\n                        <div class=\"col-lg-3 col-md-6\">\r\n                            <!-- Card -->\r\n                            <div class=\"card\">\r\n                                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/python.jpg\" alt=\"Card image cap\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-title\">파이썬 완전 정복</h4>\r\n                                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                                    <a href=\"#\" class=\"btn btn-primary\">보러가기</a>\r\n                                </div>\r\n                            </div>\r\n                            <!-- Card -->\r\n                        </div>\r\n                        <!-- column -->\r\n                        <!-- column -->\r\n                        <div class=\"col-lg-3 col-md-6 img-responsive\">\r\n                            <!-- Card -->\r\n                            <div class=\"card\">\r\n                                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/css.jpeg\" alt=\"Card image cap\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-title\">CSS 기초 다지기</h4>\r\n                                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                                    <a href=\"#\" class=\"btn btn-primary\">보러가기</a>\r\n                                </div>\r\n                            </div>\r\n                            <!-- Card -->\r\n                        </div>\r\n\r\n                        <div class=\"col-lg-3 col-md-6 img-responsive\">\r\n                                <!-- Card -->\r\n                                <div class=\"card\">\r\n                                    <img class=\"card-img-top img-responsive\" src=\"assets/images/big/css.jpeg\" alt=\"Card image cap\">\r\n                                    <div class=\"card-body\">\r\n                                        <h4 class=\"card-title\">CSS 심화 과정</h4>\r\n                                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                                        <a href=\"#\" class=\"btn btn-primary\">보러가기</a>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- Card -->\r\n                            </div>\r\n                        <!-- column -->\r\n                    </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">인기 답변</h4>\r\n                Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/starter/starter.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/starter/starter.component.ts ***!
  \****************************************************/
/*! exports provided: StarterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterComponent", function() { return StarterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StarterComponent = /** @class */ (function () {
    function StarterComponent() {
        this.subtitle = '바꼇다';
        console.log(this.subtitle);
    }
    StarterComponent.prototype.ngAfterViewInit = function () { };
    StarterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./starter.component.html */ "./src/app/pages/starter/starter.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StarterComponent);
    return StarterComponent;
}());



/***/ }),

/***/ "./src/app/pages/starter/starter.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/starter/starter.module.ts ***!
  \*************************************************/
/*! exports provided: StarterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterModule", function() { return StarterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _starter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starter.component */ "./src/app/pages/starter/starter.component.ts");






var routes = [
    {
        path: '',
        data: {
            title: 'WELCOME',
            urls: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'COMDMOA' }
            ]
        },
        component: _starter_component__WEBPACK_IMPORTED_MODULE_5__["StarterComponent"]
    }
];
var StarterModule = /** @class */ (function () {
    function StarterModule() {
    }
    StarterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            declarations: [_starter_component__WEBPACK_IMPORTED_MODULE_5__["StarterComponent"]]
        })
    ], StarterModule);
    return StarterModule;
}());



/***/ })

}]);
//# sourceMappingURL=starter-starter-module.js.map