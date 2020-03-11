(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/filter.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/filter */ "./node_modules/rxjs-compat/_esm5/operator/filter.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.filter = _operator_filter__WEBPACK_IMPORTED_MODULE_1__["filter"];
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_mergeMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/operator/mergeMap.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.mergeMap = _operator_mergeMap__WEBPACK_IMPORTED_MODULE_1__["mergeMap"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.flatMap = _operator_mergeMap__WEBPACK_IMPORTED_MODULE_1__["mergeMap"];
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/filter.js ***!
  \***********************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function filter(predicate, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(predicate, thisArg)(this);
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/mergeMap.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/mergeMap.js ***!
  \*************************************************************/
/*! exports provided: mergeMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function mergeMap(project, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(project, concurrent)(this);
}
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./src/app/pages/bookmark/bookmark.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/bookmark/bookmark.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<style>\r\n    .bookmark_card{\r\n         background-color : white;\r\n    }\r\n</style>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card bookmark_card\" *ngIf=\"this.data.length == 0\" style=\"font-style: inherit\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">즐겨찾기를 해주세요.</h3>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\" *ngFor=\"let bookmark of this.data\" (click)=\"memberProfile(bookmark)\">\r\n            <div class=\"card-body bookmark_card\">\r\n                <div class=\"lec1\" style=\"width: 10%\">              \r\n                    <img *ngIf=\"bookmark.m_img == null\" src=\"../../../assets/images/users/ice.jpg \" id=\"bookmark_img\" style=\"width: 100%; height: -1%; float: left; margin-right: 20%;border-radius: 50%;\"/>\r\n                    <img *ngIf=\"bookmark.m_img != null\" src=\"../../../assets/images/{{bookmark.m_img}} \" id=\"bookmark_img\" style=\"width: 100%; height: -1%; float: left; margin-right: 20%;border-radius: 50%;\"/>\r\n                </div>\r\n\r\n                <div class=\"lec1\" style=\"width: 40%; float: left; margin-top: 20px\">              \r\n                        <h3 class=\"card-title\">{{bookmark.m_name}}</h3>\r\n                        <h5 class=\"card-title\">이메일: {{bookmark.m_email}}</h5>\r\n                        <h5 class=\"card-title\">등급: {{bookmark.m_grade}}</h5>\r\n                        <h5 class=\"card-title\">분야: {{bookmark.m_language}}</h5>\r\n                        <br>\r\n                       \r\n                </div>\r\n                \r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/bookmark/bookmark.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/bookmark/bookmark.component.ts ***!
  \******************************************************/
/*! exports provided: BookmarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkComponent", function() { return BookmarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/getinfo/getinfo */ "./src/providers/getinfo/getinfo.ts");




var BookmarkComponent = /** @class */ (function () {
    function BookmarkComponent(router, getinfoProvider) {
        this.router = router;
        this.getinfoProvider = getinfoProvider;
        this.data = [];
        this.subtitle = 'bookmark';
        console.log(this.subtitle);
    }
    BookmarkComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var email = sessionStorage.getItem("email");
        this.getinfoProvider.getBookmark(email).then(function (data) {
            var res = data;
            _this.data = res;
        });
    };
    BookmarkComponent.prototype.memberProfile = function (member) {
        member.m_password = null;
        this.router.navigate(['/memberProfile', member]);
    };
    BookmarkComponent.prototype.ngOnInit = function () {
        $(function () {
            //var t_color = $('.bookmark_card').css("backgroundColor")
            setTimeout(function () {
                $('.bookmark_card').hover(function () {
                    // border-radius: 50%;
                    $(this).css("background-color", "beige");
                }, function () {
                    $(this).css("background-color", "white");
                });
            }, 500);
        });
        if (!sessionStorage.getItem("email")) {
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/bookmark']);
        }
    };
    BookmarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./bookmark.component.html */ "./src/app/pages/bookmark/bookmark.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_3__["GetinfoProvider"]])
    ], BookmarkComponent);
    return BookmarkComponent;
}());



/***/ }),

/***/ "./src/app/pages/chooseQuest/chooseQuest.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/chooseQuest/chooseQuest.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">      \r\n                <h4 class=\"card-subtitle\">채택 된 답변</h4>        \r\n\r\n                <table id=\"question_table\" mat-table class=\"mat-elevation-z8\" style=\"text-align: center\">\r\n                    <tr width=50%>\r\n                        <th class=\"th1\" mat-header-cell witdth=\"30%\">작성자</th>\r\n                        <th>분야</th>\r\n                        <th mat-header-cell width=\"60%\">제목</th>      \r\n                        <th>답변 수</th> \r\n                        <th>작성일</th>\r\n                        <th>조회수</th>                 \r\n                    </tr>\r\n                    \r\n\r\n                    <tr class=\"table_hover\" *ngFor=\"let question of this.data\" (click)=\"this.qDetail(question)\">\r\n                        <td mat-cell>{{question.m_name}}</td>  \r\n                        <td>{{question.c_name}}</td>\r\n                        <td mat-cell>{{question.q_title}}</td> \r\n                        <td mat-cell>{{question.awn_count}}</td>     \r\n                        <td mat-cell>{{question.qq_date}}</td>\r\n                        <td mat-cell>{{question.q_view}}</td>\r\n                    </tr>\r\n                    \r\n                </table>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/chooseQuest/chooseQuest.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/chooseQuest/chooseQuest.component.ts ***!
  \************************************************************/
/*! exports provided: ChooseQuestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseQuestComponent", function() { return ChooseQuestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/getinfo/getinfo */ "./src/providers/getinfo/getinfo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ChooseQuestComponent = /** @class */ (function () {
    //qdata: any = [];
    function ChooseQuestComponent(getinfoProvider, router, location) {
        var _this = this;
        this.getinfoProvider = getinfoProvider;
        this.router = router;
        this.location = location;
        this.data = [];
        this.getinfoProvider.getChooseQuest().then(function (data) {
            var res = data;
            _this.data = res;
        });
        this.subtitle = 'chooseQuest';
        console.log(this.subtitle);
    }
    ChooseQuestComponent.prototype.qDetail = function (question) {
        console.log('왜 안되는거야2222', question);
        this.router.navigate(['/user/question', question]);
    };
    ChooseQuestComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            setTimeout(function () {
                var textColor = $('.table_hover').css("color");
                $('.table_hover').hover(function () {
                    $(this).css("color", "#BDBDBD");
                }, function () {
                    $(this).css("color", textColor);
                });
            }, 500);
        });
    };
    ChooseQuestComponent.prototype.ngOnInit = function () {
        this.email = sessionStorage.getItem("email");
    };
    ChooseQuestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./chooseQuest.component.html */ "./src/app/pages/chooseQuest/chooseQuest.component.html"),
            styles: ["#question_table {\n    border-collapse: separate;\n    border-spacing: 1px;\n    text-align: left;\n    line-height: 1.5;\n    border-top: 1px solid #ccc;\n  margin : 20px 10px;\n}\n#question_table th {\n    padding: 10px;\n    font-weight: bold;\n    vertical-align: top;\n    border-bottom: 1px solid #ccc;\n}\n.th1{\n\n}\n.table_hover{\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n#question_table td {\n    padding: 10px;\n    vertical-align: top;\n    border-bottom: 1px solid #ccc;\n}\n"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_2__["GetinfoProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ChooseQuestComponent);
    return ChooseQuestComponent;
}());



/***/ }),

/***/ "./src/app/pages/lecture/createLecture/createLecture.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/lecture/createLecture/createLecture.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\" >\r\n\r\n                <div class=\"login-item\" style=\"margin-top: 30px;\">\r\n                        <form #myform=\"ngForm\" (ngSubmit)=\"this.creatLecture(myform, fileInput.files)\" class=\"form form-login\">\r\n                          <div class=\"form-group form-field f1\" style=\"width: 50%;\">\r\n                            <label class=\"user\" for=\"login-email\"><span class=\"hidden\">강의 제목&nbsp;&nbsp;</span></label>\r\n                            <input matInput name=\"l_title\" id=\"login-email\" type=\"text\" class=\"form-control\" required ngModel>\r\n                          </div>\r\n\r\n                          <div class=\"form-group form-field f1\" style=\"width: 50%;\">\r\n                            <label class=\"user\" for=\"login-email\"><span class=\"hidden\">카테고리&nbsp;&nbsp;</span></label>\r\n                            <!-- <input matInput name=\"c_name\" id=\"login-email\" type=\"text\" class=\"form-control\" required ngModel> -->\r\n                            <select name=\"category\" class=\"form-control\" required ngModel>\r\n                                <option value=\"C\">C</option>\r\n                                <option value=\"JAVA\">JAVA</option>\r\n                                <option value=\"Python\">Python</option>\r\n                                <option value=\"Angular\">Angular</option>\r\n                                <option value=\"CSS\">CSS</option>\r\n                                <option value=\"JavaScript\">JavaScript</option>\r\n\r\n                            </select>\r\n                          </div>\r\n                  \r\n                          <div class=\"form-group form-field\" style=\"width: 50%;\">\r\n                            <label class=\"lock\" for=\"login-password\"><span class=\"hidden\">강의 소개&nbsp;&nbsp;</span></label>\r\n                            <textarea name=\"l_intro\" class=\"form-control\" required ngModel>\r\n\r\n                            </textarea>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                                <!-- <img *ngIf=\"imageSrc\" [src]=\"imageSrc\" class=\"avatar\"> -->\r\n                                <label class=\"lock\" for=\"login-password\"><span class=\"hidden\">강의 이미지&nbsp;&nbsp;</span></label>\r\n                                <div class=\"btns clearfix\">\r\n                                  <label class=\"btn btn-primary\">background Img\r\n                                    <input type=\"file\" name=\"l_img\" class=\"form-control\" #fileInput> \r\n                                  </label>\r\n                                </div>\r\n                            </div>\r\n                  \r\n                          <div class=\"form-group form-field\">\r\n                            <input matInput id=\"log_button\" type=\"submit\" value=\"개설하기\" class=\"btn-primary\">\r\n                            \r\n                          </div>\r\n                        </form>\r\n                      </div>\r\n                \r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/lecture/createLecture/createLecture.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/lecture/createLecture/createLecture.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateLectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLectureComponent", function() { return CreateLectureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/getinfo/getinfo */ "./src/providers/getinfo/getinfo.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var CreateLectureComponent = /** @class */ (function () {
    function CreateLectureComponent(router, route, getinfoProvider, location, http) {
        this.router = router;
        this.route = route;
        this.getinfoProvider = getinfoProvider;
        this.location = location;
        this.http = http;
        this.data = [];
        this.apiUrl = 'http://ec2-13-209-164-128.ap-northeast-2.compute.amazonaws.com:3000';
        this.subtitle = 'createLecture';
        console.log(this.subtitle);
    }
    CreateLectureComponent.prototype.creatLecture = function (form, files) {
        var _this = this;
        console.log(form.value);
        console.log(form.value.l_img);
        var formData = new FormData();
        formData.append('avatar', files[0]);
        this.data = formData.get('avatar');
        this.getinfoProvider.getCreatLecture({ l_title: form.value.l_title, l_intro: form.value.l_intro, c_name: form.value.category, l_imgname: this.data.name, email: sessionStorage.getItem("email"), name: sessionStorage.getItem("name") }).then(function (data) {
            var res = data;
            _this.http.post(_this.apiUrl + "/upload", formData)
                .subscribe(function (res) {
                console.log("고생했다", res);
                alert("강의가 개설되었습니다.");
                _this.location.go('/lecture');
                window.location.reload();
            });
        });
    };
    CreateLectureComponent.prototype.ngAfterViewInit = function () {
        $(function () {
        });
    };
    CreateLectureComponent.prototype.ngOnInit = function () {
        if (!sessionStorage.getItem("email")) {
            alert("로그인이 필요한 서비스입니다.");
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/lecture/createLecture']);
        }
    };
    CreateLectureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./createLecture.component.html */ "./src/app/pages/lecture/createLecture/createLecture.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_3__["GetinfoProvider"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], CreateLectureComponent);
    return CreateLectureComponent;
}());



/***/ }),

/***/ "./src/app/pages/lecture/lecture.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/lecture/lecture.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <!-- <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                            <h4 class=\"card-title\">강의 영상 업로드</h4>\r\n                            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(fileInput.files)\">\r\n                              <div class=\"form-group\">\r\n                                <img *ngIf=\"imageSrc\" [src]=\"imageSrc\" class=\"avatar\">\r\n                                <div class=\"btns clearfix\">\r\n                                  <label class=\"btn btn-file btn-cancel\">Pick an video\r\n                                    <input type=\"file\"\r\n                                      (change)=\"onFileChange(fileInput.files)\" #fileInput>\r\n                                  </label>\r\n                                  <button type=\"submit\" class=\"btn btn-save\"\r\n                                    [disabled]=\"form.invalid || loading\">\r\n                                    Save\r\n                                    <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i>\r\n                                  </button>\r\n                                </div>\r\n                              </div>\r\n                            </form>\r\n                            <pre>{{ form.value | json }}</pre>\r\n                            <pre>{{ result | json }}</pre>\r\n\r\n                    \r\n\r\n\r\n\r\n\r\n           <video controls>\r\n                    <source src=\"../../../assets/video/small.mp4\"/>\r\n                    <source src=\"../../../assets/video/small.ogv\"/>\r\n                </video> \r\n\r\n\r\n\r\n                \r\n                \r\n            </div>\r\n        </div> -->\r\n        <div class=\"card\">\r\n <!--           <div class=\"card-body\">\r\n\r\n                <h5 class=\"card-title\">당신만의 강의를 만들어주세요</h5>\r\n              <button *ngIf=\"this.email\" class=\"btn btn-info\" (click)=\"this.creatLecture()\">강의 개설하기</button>\r\n\r\n                \r\n            </div>\r\n        </div>\r\n-->\r\n        <div class=\"card\">\r\n            <div class=\"card-body\"> \r\n\r\n                <div class=\"row\">\r\n\r\n                <div class=\"col-lg-3 col-md-6\" *ngFor=\"let lecture of this.lectureList\">\r\n                    <!-- Card -->\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top img-responsive\" src=\"../../../assets/images/{{lecture.l_img}}\" alt=\"Card image cap\" style=\"width: 70%; height: -1%;\">\r\n                        <div class=\"card-body\">\r\n                            <h4 class=\"card-title\">{{lecture.l_title}}</h4>\r\n                            <button class=\"btn btn-primary\" (click)=\"this.lDetail(lecture)\">보러 가기</button>\r\n                        </div>\r\n                    </div>\r\n                    <!-- Card -->\r\n                </div>\r\n\r\n                </div>\r\n\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/lecture/lecture.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/lecture/lecture.component.ts ***!
  \****************************************************/
/*! exports provided: LectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureComponent", function() { return LectureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/getinfo/getinfo */ "./src/providers/getinfo/getinfo.ts");






var LectureComponent = /** @class */ (function () {
    function LectureComponent(fb, http, router, getinfoProvider) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.getinfoProvider = getinfoProvider;
        this.data = [];
        this.lectureList = [];
        this.email = [];
        this.apiUrl = 'http://ec2-13-209-164-128.ap-northeast-2.compute.amazonaws.com:3000';
        this.loading = false;
        this.imageSrc = ' ';
        this.subtitle = 'lecture';
        console.log(this.subtitle);
        this.form = this.fb.group({
            avatar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LectureComponent.prototype.onFileChange = function (files) {
        var _this = this;
        if (files && files.length > 0) {
            // For Preview
            var file = files[0];
            var reader_1 = new FileReader();
            /* 브라우저는 보안 문제로 인해 파일 경로의 참조를 허용하지 않는다.
              따라서 파일 경로를 img 태그에 바인딩할 수 없다.
              FileReader.readAsDataURL 메소드를 사용하여 이미지 파일을 읽어
              base64 인코딩된 스트링 데이터를 취득한 후, img 태그에 바인딩한다. */
            reader_1.readAsDataURL(file);
            reader_1.onload = function () {
                _this.imageSrc = reader_1.result;
            };
            /* reactive form에서 input[type="file"]을 지원하지 않는다.
              즉 파일 선택 시에 값이 폼컨트롤에 set되지 않는다
              https://github.com/angular/angular.io/issues/3466
              form validation을 위해 file.name을 폼컨트롤에 set한다. */
            this.avatar.setValue(file.name);
        }
    };
    LectureComponent.prototype.onSubmit = function (files) {
        var _this = this;
        var formData = new FormData();
        formData.append('avatar', files[0]);
        console.log("난 뭐임");
        this.data = formData.get('avatar');
        this.loading = true;
        // Send data (payload = formData)
        console.log(formData.get('avatar'));
        console.log(this.data.name);
        // 폼데이터를 서버로 전송한다.
        this.http.post(this.apiUrl + "/upload", formData)
            .subscribe(function (res) {
            _this.result = res;
            _this.loading = false;
            _this.avatar.setValue(null);
        });
    };
    Object.defineProperty(LectureComponent.prototype, "avatar", {
        get: function () {
            return this.form.get('avatar');
        },
        enumerable: true,
        configurable: true
    });
    LectureComponent.prototype.creatLecture = function () {
        this.router.navigate(['/lecture/createLecture']);
    };
    LectureComponent.prototype.lDetail = function (lecture) {
        this.router.navigate(['/lecture/lectureDetail', lecture]);
    };
    LectureComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log("왜안돼");
        this.getinfoProvider.getLectureList().then(function (data) {
            var res = data;
            _this.lectureList = res;
            console.log("asdasd", _this.lectureList);
        });
    };
    LectureComponent.prototype.ngOnInit = function () {
        this.email = sessionStorage.getItem("email");
    };
    LectureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./lecture.component.html */ "./src/app/pages/lecture/lecture.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_5__["GetinfoProvider"]])
    ], LectureComponent);
    return LectureComponent;
}());



/***/ }),

/***/ "./src/app/pages/lecture/lectureDetail/lectureDetail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/lecture/lectureDetail/lectureDetail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\" style=\"width: 100%\" >\r\n\r\n                <div class=\"lec1\" style=\"width: 20%\">              \r\n                    <img src=\"../../../../assets/images/{{this.lecture.l_img}} \" style=\"width: 100%; height: -1%; float: left; margin-right: 15%\"/>\r\n                </div>\r\n\r\n                <div class=\"lec1\" style=\"width: 40%; float: left; margin-top: 30px\">              \r\n                        <h4 class=\"card-title\">강의명: {{this.lecture.l_title}}</h4>\r\n                        <h5 class=\"card-title\">분야: {{this.lecture.c_name}}</h5>\r\n                        <h5 class=\"card-title\">강사명: {{this.lecture.lm_name}}</h5>\r\n                        <h5 class=\"card-title\">이메일: {{this.lecture.lm_email}}</h5>\r\n                        <br>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n                <div class=\"card-body\" style=\"width: 100%\" >\r\n                    <h4 class=\"card-subtitle\">강의소개</h4>\r\n                        <textarea style=\"border: 0px solid white; width: 100%; background-color: white\" disabled=\"true\">{{this.lecture.l_intro}}</textarea>\r\n                    \r\n                </div>\r\n            </div>\r\n\r\n        <div class=\"card\">\r\n                <div class=\"card-body\" style=\"text-align: center\">\r\n                  \r\n                    <!-- <button *ngIf=\"this.lecture.lm_email == this.email\" class=\"btn btn-info\">강의 업로드</button> -->\r\n\r\n                        <video controls width=\"70%\">\r\n                            <source src=\"../../../../assets/video/{{this.lecture.l_video}}\"/>\r\n                            <!-- <source src=\"../../../../assets/video/small.ogv\"/> -->\r\n                        </video> \r\n                    \r\n                </div>\r\n            </div>\r\n\r\n        <div class=\"card\" *ngIf=\"this.email != null\">\r\n            <div class=\"card-body\" >\r\n                    <h5 class=\"card-title\">메모하기</h5>   \r\n                        <textarea id=\"lectureMemo\" class=\"form-group\" style=\"width: 100%; height: 300px;\"> </textarea>\r\n                        <button class=\"btn btn-success\" style=\"float: right;\" (click)=\"this.setMemo()\">저장</button>\r\n    \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/lecture/lectureDetail/lectureDetail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/lecture/lectureDetail/lectureDetail.component.ts ***!
  \************************************************************************/
/*! exports provided: LectureDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureDetailComponent", function() { return LectureDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/getinfo/getinfo */ "./src/providers/getinfo/getinfo.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var LectureDetailComponent = /** @class */ (function () {
    function LectureDetailComponent(router, route, getinfoProvider, location) {
        this.router = router;
        this.route = route;
        this.getinfoProvider = getinfoProvider;
        this.location = location;
        this.lecture = [];
        this.memo = [];
        this.subtitle = 'lectureDetail';
        console.log(this.subtitle);
    }
    LectureDetailComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getinfoProvider.getMemo({ m_id: this.id, l_id: this.lecture.l_id }).then(function (data) {
            var res = data;
            _this.memo = res;
            console.log('메모불러오기22222', _this.memo[0].me_content);
            $("#lectureMemo").val(_this.memo[0].me_content);
        });
    };
    LectureDetailComponent.prototype.setMemo = function () {
        var memo = $("#lectureMemo").val();
        console.log("메모1", memo);
        this.getinfoProvider.setMemo({ id: this.id, l_id: this.lecture.l_id, email: this.email, "content": memo }).then(function (data) {
            var res = data;
            console.log('메모저장');
        });
        alert("저장완료");
    };
    LectureDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.email = sessionStorage.getItem("email");
        this.id = sessionStorage.getItem("id");
        var qdata = this.route.params.subscribe(function (params) {
            console.log('params2', params);
            _this.lecture = params;
        });
        // this.getMemo(this.id, this.lecture.l_id);
    };
    LectureDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./lectureDetail.component.html */ "./src/app/pages/lecture/lectureDetail/lectureDetail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_3__["GetinfoProvider"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], LectureDetailComponent);
    return LectureDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                \r\n                <h4 class=\"card-title\">로그인이 필요한 서비스입니다.</h4>\r\n\r\n                    <div class=\"login-item\">\r\n                            <form #myform=\"ngForm\" (ngSubmit)=\"this.login(myform)\" class=\"form form-login\">\r\n                              <div class=\"mat-form-field form-field f1\">\r\n                                <label class=\"user\" for=\"login-email\"><span class=\"hidden\">Email&nbsp;&nbsp;</span></label>\r\n                                <input matInput name=\"email\" id=\"login-email\" type=\"email\" class=\"form-input\" placeholder=\" Email\" required ngModel>\r\n                              </div>\r\n                      \r\n                              <div class=\"mat-form-field form-field\">\r\n                                <label class=\"lock\" for=\"login-password\"><span class=\"hidden\">Password&nbsp;&nbsp;</span></label>\r\n                                <input matInput name=\"password\" id=\"login-password\" type=\"password\" class=\"form-input\" placeholder=\" Password\" required ngModel>\r\n                              </div><br>\r\n                      \r\n                              <div class=\"mat-form-field form-field\">\r\n                                <input matInput id=\"log_button\" type=\"submit\" value=\"로그인\" class=\"btn-primary\">\r\n                                \r\n                              </div>\r\n                            </form>\r\n\r\n                            <button class=\"btn-info reg\" (click)=\"this.register()\">회원가입</button>\r\n                          </div>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/getinfo/getinfo */ "./src/providers/getinfo/getinfo.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





// import { AuthService } from 'angularx-social-login';
// import { SocialUser } from 'angularx-social-login';
// import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
var LoginComponent = /** @class */ (function () {
    //user: SocialUser; ,private authService: AuthService
    function LoginComponent(getinfoProvider, router, loca) {
        this.getinfoProvider = getinfoProvider;
        this.router = router;
        this.loca = loca;
        this.loginId = '';
        this.loginPw = '';
        this.subtitle = 'login';
        console.log(this.subtitle);
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.authService.authState.subscribe((user) => {
        //   this.user = user;
        //   console.log(user);
        // });
    };
    // signInWithGoogle(): void {
    //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
    // }
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        console.log(form);
        this.getinfoProvider.getLogin({ id: form.value.email, pw: form.value.password }).then(function (data) {
            var res = data;
            console.log('data', res.m_email);
            if (data) {
                alert(res.m_name + "님 안녕하세요");
                sessionStorage.setItem("email", res.m_email);
                sessionStorage.setItem("name", res.m_name);
                sessionStorage.setItem("id", res.m_id);
                sessionStorage.setItem("point", res.m_point);
                sessionStorage.setItem("grade", res.m_grade);
                sessionStorage.setItem("m_img", res.m_img);
                sessionStorage.setItem('m_language', res.m_language);
                //console.log(data);
                _this.loca.go('/');
                window.location.reload();
            }
            else {
                alert("아이디와 비밀번호를 확인해주세요");
                _this.loca.go('/login');
                window.location.reload();
            }
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.ngAfterViewInit = function () { };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: ["#log_button {margin-right : 10px; float : left}\n           .f1 {margin-bottom : 10px;\n               margin-top : 25px;} \n           .reg {}   \n  \n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_3__["GetinfoProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/memberProfile/memberProfile.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/memberProfile/memberProfile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n\r\n        <div class=\"card loginPort\">\r\n            <div class=\"card-body\">\r\n                    <div class=\"lec1\" style=\"width: 10%\">              \r\n                            <img id=\"port_img\" src=\"../../../assets/images/users/ice.jpg\" style=\"width: 100%; height: -1%; float: left; margin-right: 20%;border-radius: 50%;\"/>\r\n                    </div>\r\n                    \r\n                    <div class=\"lec1\" style=\"width: 40%; float: left; margin-top: 20px\">              \r\n                            <h4 class=\"card-title\">{{this.data.m_name}}</h4>\r\n                            <h5 class=\"card-title\">이메일: {{this.data.m_email}}</h5>\r\n                            <h5 class=\"card-title\" style=\"color: firebrick; font-weight: bold\">등급: {{this.data.m_grade}}</h5>\r\n                            <h5 class=\"card-title\">점수: {{this.data.m_point}}</h5>\r\n                            <h5 class=\"card-title\">관심 분야: {{this.data.m_language}}</h5>\r\n                            <br>\r\n                           \r\n                    </div>\r\n        \r\n\r\n    \r\n                </div>\r\n        </div>\r\n\r\n        <div class=\"card loginPort\">\r\n            \r\n\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-subtitle\">questions</h4>\r\n\r\n                <p *ngIf=\"this.questData.length == 0\" style=\"font-style: inherit\">질문을 해주세요.</p>\r\n\r\n                <table id=\"my_question_table\" mat-table class=\"mat-elevation-z8\" *ngIf=\"this.questData.length != 0\">   \r\n\r\n                     <tr class=\"myq table_hover\" style='text-align: center'>\r\n                         <td>제목</td>\r\n                         <td>답변 수</td>\r\n                         <td>작성일</td>\r\n                         <td>채택</td>\r\n                     </tr>\r\n                     \r\n\r\n\r\n                        <tr class=\"myq table_hover\" *ngFor=\"let question of this.questData\" (click)=\"this.qDetail(question)\" style='text-align: center'> \r\n                            <td mat-cell>{{question.q_title}}</td>\r\n                            <td mat-cell>{{question.awn_count}}</td>\r\n                            <td mat-cell>{{question.qq_date}}</td>\r\n                            <td mat-cell>\r\n                                <span *ngIf=\"question.q_choose == 1\">V</span>\r\n                            </td>  \r\n                           \r\n                        </tr>\r\n                        \r\n                </table>\r\n                \r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card loginPort\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-subtitle\">choose awnsers</h4>\r\n\r\n                <p *ngIf=\"this.awnsers.length == 0\" style=\"font-style: inherit\">채택 된 답변이 없습니다.</p>\r\n\r\n                <table id=\"my_question_table\" mat-table class=\"mat-elevation-z8\" *ngIf=\"this.awnsers.length != 0\">   \r\n\r\n                        <tr class=\"myq table_hover\" style='text-align: center'>\r\n                            <td>작성자</td>\r\n                            <td>분야</td>\r\n                            <td>제목</td>\r\n                        </tr>\r\n                        \r\n   \r\n   \r\n                           <tr class=\"myq table_hover\" *ngFor=\"let awnsers of this.awnsers\" (click)=\"this.qDetail(awnsers)\" style='text-align: center'> \r\n                               <td mat-cell>{{awnsers.m_name}}</td>\r\n                               <td mat-cell>{{awnsers.c_name}}</td>\r\n                               <td mat-cell>{{awnsers.q_title}}</td>  \r\n                              \r\n                           </tr>\r\n                           \r\n                   </table>\r\n\r\n              \r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card loginPort\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-subtitle\">lectures</h4>\r\n\r\n                <p *ngIf=\"this.lectureList.length == 0\" style=\"font-style: inherit\">강의를 올려주세요.</p>\r\n\r\n                <div class=\"row\">\r\n                        <!-- column -->\r\n                        <div class=\"col-lg-3 col-md-6\" *ngFor=\"let lecture of this.lectureList\">\r\n                            <!-- Card -->\r\n                            <div class=\"card\">\r\n                                <img class=\"card-img-top img-responsive\" src=\"../../../assets/images/{{lecture.l_img}}\" alt=\"Card image cap\" style=\"width: 70%; height: -1%;\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-title\">{{lecture.l_title}}</h4>\r\n                                    <p class=\"card-text\">{{lecture.l_intro}}</p>\r\n                                    <button class=\"btn btn-primary\" (click)=\"this.lDetail(lecture)\">보러 가기</button>\r\n                                </div>\r\n                            </div>\r\n                            <!-- Card -->\r\n                        </div>\r\n                        \r\n                    </div>\r\n              \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/memberProfile/memberProfile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/memberProfile/memberProfile.component.ts ***!
  \****************************************************************/
/*! exports provided: MemberProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberProfileComponent", function() { return MemberProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/getinfo/getinfo */ "./src/providers/getinfo/getinfo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var MemberProfileComponent = /** @class */ (function () {
    function MemberProfileComponent(getinfoProvider, router, loca, route) {
        this.getinfoProvider = getinfoProvider;
        this.router = router;
        this.loca = loca;
        this.route = route;
        this.data = [];
        this.questData = [];
        this.lectureList = [];
        this.awnsers = [];
        this.subtitle = 'memberProfile';
        console.log(this.subtitle);
        // if(sessionStorage.getItem("m_img")){
        //   this.m_img = sessionStorage.getItem("m_img");
        // }else{
        //   this.m_img = 'users/ice.jpg'
        // }
    }
    MemberProfileComponent.prototype.qDetail = function (question) {
        console.log('왜 안되는거야2222', question);
        this.router.navigate(['/user/question', question]);
    };
    MemberProfileComponent.prototype.lDetail = function (lecture) {
        this.router.navigate(['/lecture/lectureDetail', lecture]);
    };
    MemberProfileComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var email = this.data.m_email;
        console.log("m_email", email);
        this.getinfoProvider.getMyQuestion(email).then(function (data) {
            var res = data;
            _this.questData = res;
            console.log("qdata", data);
        });
        this.getinfoProvider.getMyChooseAwnsers(email).then(function (data) {
            var res = data;
            _this.awnsers = res;
            console.log("cadata", data);
        });
        this.getinfoProvider.getMyLecture(email).then(function (data) {
            var res = data;
            _this.lectureList = res;
            console.log("ldata", data);
        });
    };
    MemberProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(function () {
            setTimeout(function () {
                var textColor = $('.table_hover').css("color");
                $('.table_hover').hover(function () {
                    $(this).css("color", "#BDBDBD");
                }, function () {
                    $(this).css("color", textColor);
                });
            }, 500);
        });
        var qdata = this.route.params.subscribe(function (params) {
            console.log('memberParam', params);
            console.log('test', params.m_id);
            _this.data = params;
        });
        this.m_img = this.data.m_img;
        console.log("사진 확인44", this.m_img);
        if (this.m_img == 'null') {
            var a = 'assets/images/users/ice.jpg';
            $("#port_img").attr('src', a);
            console.log("널입니다.");
        }
        else {
            $("#port_img").attr('src', 'assets/images/' + this.m_img);
            console.log("널이 아닙니다.", this.m_img);
        }
    };
    MemberProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./memberProfile.component.html */ "./src/app/pages/memberProfile/memberProfile.component.html"),
            styles: [".myq { margin-bottom : 15px;}\n  #my_question_table {\n    border-collapse: separate;\n    border-spacing: 1px;\n    text-align: left;\n    line-height: 1.5;\n    border-top: 1px solid #ccc;\n  margin : 20px 10px;\n}\n#my_question_table th {\n    padding: 10px;\n    font-weight: bold;\n    vertical-align: top;\n    border-bottom: 1px solid #ccc;\n}\n#my_question_table td {\n    padding: 10px;\n    vertical-align: top;\n    border-bottom: 1px solid #ccc;\n}"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_2__["GetinfoProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MemberProfileComponent);
    return MemberProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _lecture_lecture_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lecture/lecture.component */ "./src/app/pages/lecture/lecture.component.ts");
/* harmony import */ var _portpolio_portpolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portpolio/portpolio.component */ "./src/app/pages/portpolio/portpolio.component.ts");
/* harmony import */ var _user_question_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/question/question.component */ "./src/app/pages/user/question/question.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bookmark/bookmark.component */ "./src/app/pages/bookmark/bookmark.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _lecture_createLecture_createLecture_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lecture/createLecture/createLecture.component */ "./src/app/pages/lecture/createLecture/createLecture.component.ts");
/* harmony import */ var _lecture_lectureDetail_lectureDetail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lecture/lectureDetail/lectureDetail.component */ "./src/app/pages/lecture/lectureDetail/lectureDetail.component.ts");
/* harmony import */ var _chooseQuest_chooseQuest_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chooseQuest/chooseQuest.component */ "./src/app/pages/chooseQuest/chooseQuest.component.ts");
/* harmony import */ var _memberProfile_memberProfile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./memberProfile/memberProfile.component */ "./src/app/pages/memberProfile/memberProfile.component.ts");
















var routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"],
        children: [
            {
                path: 'starter',
                loadChildren: './starter/starter.module#StarterModule'
            },
            {
                path: 'user',
                component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]
            },
            {
                path: 'chooseQuest',
                component: _chooseQuest_chooseQuest_component__WEBPACK_IMPORTED_MODULE_14__["ChooseQuestComponent"]
            },
            {
                path: 'user/question',
                component: _user_question_question_component__WEBPACK_IMPORTED_MODULE_7__["QuestionComponent"]
            },
            {
                path: 'lecture',
                component: _lecture_lecture_component__WEBPACK_IMPORTED_MODULE_5__["LectureComponent"]
            },
            {
                path: 'lecture/createLecture',
                component: _lecture_createLecture_createLecture_component__WEBPACK_IMPORTED_MODULE_12__["CreateLectureComponent"]
            },
            {
                path: 'lecture/lectureDetail',
                component: _lecture_lectureDetail_lectureDetail_component__WEBPACK_IMPORTED_MODULE_13__["LectureDetailComponent"]
            },
            {
                path: 'portpolio',
                component: _portpolio_portpolio_component__WEBPACK_IMPORTED_MODULE_6__["PortpolioComponent"]
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
            },
            {
                path: 'bookmark',
                component: _bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_9__["BookmarkComponent"]
            },
            {
                path: 'memberProfile',
                component: _memberProfile_memberProfile_component__WEBPACK_IMPORTED_MODULE_15__["MemberProfileComponent"]
            },
            {
                path: 'search',
                component: _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"]
            },
            {
                path: 'component',
                loadChildren: './component/component.module#ComponentsModule'
            }
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<div id=\"main-wrapper\">\r\n    <!-- ============================================================== -->\r\n    <!-- Topbar header - style you can find in pages.scss -->\r\n    <!-- ============================================================== -->\r\n    <app-navigation></app-navigation>\r\n    <!-- ============================================================== -->\r\n    <!-- Left Sidebar - style you can find in sidebar.scss  -->\r\n    <!-- ============================================================== -->\r\n    <app-sidebar></app-sidebar>\r\n    <!-- ============================================================== -->\r\n    <!-- End Left Sidebar - style you can find in sidebar.scss  -->\r\n    <!-- ============================================================== -->\r\n    <!-- ============================================================== -->\r\n    <!-- Page wrapper  -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"page-wrapper\">\r\n        <!-- ============================================================== -->\r\n        <!-- Container fluid  -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"container-fluid\">\r\n            <app-breadcrumb></app-breadcrumb>\r\n            <!-- ============================================================== -->\r\n            <!-- Start Page Content -->\r\n            <!-- ============================================================== -->\r\n            <router-outlet></router-outlet>\r\n            <!-- ============================================================== -->\r\n            <!-- End Start Page Content -->\r\n            <!-- ============================================================== -->\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- End Container fluid  -->\r\n        <!-- ============================================================== -->\r\n        <!-- ============================================================== -->\r\n        <!-- footer -->\r\n        <!-- ============================================================== -->\r\n        <footer class=\"footer\">\r\n            © COMEMOA\r\n        </footer>\r\n        <!-- ============================================================== -->\r\n        <!-- End footer -->\r\n        <!-- ============================================================== -->\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- End Page wrapper  -->\r\n    <!-- ============================================================== -->\r\n</div>"

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-top: 60px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL2NvZGluZ21vYS93ZWJhcHAvc3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSTtJQUNJLDJCQUEyQixFQUFBLEVBQzlCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PageComponent = /** @class */ (function () {
    function PageComponent(router) {
        this.router = router;
    }
    PageComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/starter']);
        }
        else if (this.router.url === 'user') {
            this.router.navigate(['/user']);
        }
        else if (this.router.url === 'profile') {
        }
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _shared_sidebar_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/sidebar.directive */ "./src/app/shared/sidebar.directive.ts");
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/header-navigation/navigation.component */ "./src/app/shared/header-navigation/navigation.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _lecture_lecture_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lecture/lecture.component */ "./src/app/pages/lecture/lecture.component.ts");
/* harmony import */ var _portpolio_portpolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portpolio/portpolio.component */ "./src/app/pages/portpolio/portpolio.component.ts");
/* harmony import */ var _user_question_question_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/question/question.component */ "./src/app/pages/user/question/question.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bookmark/bookmark.component */ "./src/app/pages/bookmark/bookmark.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _lecture_lectureDetail_lectureDetail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lecture/lectureDetail/lectureDetail.component */ "./src/app/pages/lecture/lectureDetail/lectureDetail.component.ts");
/* harmony import */ var _lecture_createLecture_createLecture_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lecture/createLecture/createLecture.component */ "./src/app/pages/lecture/createLecture/createLecture.component.ts");
/* harmony import */ var _chooseQuest_chooseQuest_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chooseQuest/chooseQuest.component */ "./src/app/pages/chooseQuest/chooseQuest.component.ts");
/* harmony import */ var _memberProfile_memberProfile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./memberProfile/memberProfile.component */ "./src/app/pages/memberProfile/memberProfile.component.ts");






















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
            ],
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"],
                _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                _chooseQuest_chooseQuest_component__WEBPACK_IMPORTED_MODULE_20__["ChooseQuestComponent"],
                _shared_sidebar_directive__WEBPACK_IMPORTED_MODULE_5__["SIDEBAR_TOGGLE_DIRECTIVES"],
                _lecture_lecture_component__WEBPACK_IMPORTED_MODULE_10__["LectureComponent"],
                _portpolio_portpolio_component__WEBPACK_IMPORTED_MODULE_11__["PortpolioComponent"],
                _user_question_question_component__WEBPACK_IMPORTED_MODULE_12__["QuestionComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_15__["BookmarkComponent"],
                _memberProfile_memberProfile_component__WEBPACK_IMPORTED_MODULE_21__["MemberProfileComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _lecture_lectureDetail_lectureDetail_component__WEBPACK_IMPORTED_MODULE_18__["LectureDetailComponent"],
                _lecture_createLecture_createLecture_component__WEBPACK_IMPORTED_MODULE_19__["CreateLectureComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/portpolio/portpolio.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/portpolio/portpolio.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n\r\n        <div class=\"card loginPort\">\r\n            <div class=\"card-body\">\r\n                    <div class=\"lec1\" style=\"width: 10%\">              \r\n                            <img id=\"port_img\" src=\"../../../assets/images/users/ice.jpg\" style=\"width: 100%; height: -1%; float: left; margin-right: 20%;border-radius: 50%;\"/>\r\n                    </div>\r\n                    \r\n                    <div class=\"lec1\" style=\"width: 40%; float: left; margin-top: 20px\">              \r\n                            <h4 class=\"card-title\">{{this.name}}</h4>\r\n                            <h5 class=\"card-title\">이메일: {{this.email}}</h5>\r\n                            <h5 class=\"card-title\" style=\"color: firebrick; font-weight: bold\">등급: {{this.grade}}</h5>\r\n                            <h5 class=\"card-title\">점수: {{this.point}}</h5>\r\n                            <h5 class=\"card-title\">관심 분야: {{this.language}}</h5>\r\n                            <br>\r\n                           \r\n                    </div>\r\n        \r\n\r\n    \r\n                </div>\r\n        </div>\r\n\r\n        <div class=\"card loginPort\">\r\n            \r\n\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-subtitle\">questions</h4>\r\n\r\n                <p *ngIf=\"this.data.length == 0\" style=\"font-style: inherit\">질문을 해주세요.</p>\r\n\r\n                <table id=\"my_question_table\" mat-table class=\"mat-elevation-z8\" *ngIf=\"this.data.length != 0\">   \r\n\r\n                     <tr class=\"myq table_hover\" style='text-align: center'>\r\n                         <td>제목</td>\r\n                         <td>답변 수</td>\r\n                         <td>작성일</td>\r\n                         <td>채택</td>\r\n                     </tr>\r\n                     \r\n\r\n\r\n                        <tr class=\"myq table_hover\" *ngFor=\"let question of this.data\" (click)=\"this.qDetail(question)\" style='text-align: center'> \r\n                            <td mat-cell>{{question.q_title}}</td>\r\n                            <td mat-cell>{{question.awn_count}}</td>\r\n                            <td mat-cell>{{question.qq_date}}</td>\r\n                            <td mat-cell>\r\n                                <span *ngIf=\"question.q_choose == 1\">V</span>\r\n                            </td>  \r\n                           \r\n                        </tr>\r\n                        \r\n                </table>\r\n                \r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card loginPort\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-subtitle\">choose awnsers</h4>\r\n\r\n                <p *ngIf=\"this.awnsers.length == 0\" style=\"font-style: inherit\">채택 된 답변이 없습니다.</p>\r\n\r\n                <table id=\"my_question_table\" mat-table class=\"mat-elevation-z8\" *ngIf=\"this.awnsers.length != 0\">   \r\n\r\n                        <tr class=\"myq table_hover\" style='text-align: center'>\r\n                            <td>작성자</td>\r\n                            <td>분야</td>\r\n                            <td>제목</td>\r\n                        </tr>\r\n                        \r\n   \r\n   \r\n                           <tr class=\"myq table_hover\" *ngFor=\"let awnsers of this.awnsers\" (click)=\"this.qDetail(awnsers)\" style='text-align: center'> \r\n                               <td mat-cell>{{awnsers.m_name}}</td>\r\n                               <td mat-cell>{{awnsers.c_name}}</td>\r\n                               <td mat-cell>{{awnsers.q_title}}</td>  \r\n                              \r\n                           </tr>\r\n                           \r\n                   </table>\r\n\r\n              \r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card loginPort\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-subtitle\">lectures</h4>\r\n\r\n                <p *ngIf=\"this.lectureList.length == 0\" style=\"font-style: inherit\">강의를 올려주세요.</p>\r\n\r\n                <div class=\"row\">\r\n                        <!-- column -->\r\n                        <div class=\"col-lg-3 col-md-6\" *ngFor=\"let lecture of this.lectureList\">\r\n                            <!-- Card -->\r\n                            <div class=\"card\">\r\n                                <img class=\"card-img-top img-responsive\" src=\"../../../assets/images/{{lecture.l_img}}\" alt=\"Card image cap\" style=\"width: 70%; height: -1%;\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-title\">{{lecture.l_title}}</h4>\r\n                                    <button class=\"btn btn-primary\" (click)=\"this.lDetail(lecture)\">보러 가기</button>\r\n                                </div>\r\n                            </div>\r\n                            <!-- Card -->\r\n                        </div>\r\n                        \r\n                    </div>\r\n              \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/portpolio/portpolio.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/portpolio/portpolio.component.ts ***!
  \********************************************************/
/*! exports provided: PortpolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortpolioComponent", function() { return PortpolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/getinfo/getinfo */ "./src/providers/getinfo/getinfo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var PortpolioComponent = /** @class */ (function () {
    function PortpolioComponent(getinfoProvider, router, loca) {
        this.getinfoProvider = getinfoProvider;
        this.router = router;
        this.loca = loca;
        this.data = [];
        this.lectureList = [];
        this.awnsers = [];
        this.subtitle = 'portpolio';
        console.log(this.subtitle);
        this.grade = sessionStorage.getItem("grade");
        this.point = sessionStorage.getItem("point");
        this.language = sessionStorage.getItem("m_language");
        if (sessionStorage.getItem("m_img")) {
            this.m_img = sessionStorage.getItem("m_img");
        }
        else {
            this.m_img = 'users/ice.jpg';
        }
    }
    PortpolioComponent.prototype.qDetail = function (question) {
        console.log('왜 안되는거야2222', question);
        this.router.navigate(['/user/question', question]);
    };
    PortpolioComponent.prototype.lDetail = function (lecture) {
        this.router.navigate(['/lecture/lectureDetail', lecture]);
    };
    PortpolioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var email = sessionStorage.getItem("email");
        console.log("qemail", email);
        this.getinfoProvider.getMyQuestion(email).then(function (data) {
            var res = data;
            _this.data = res;
            console.log("qdata", data);
        });
        this.getinfoProvider.getMyChooseAwnsers(email).then(function (data) {
            var res = data;
            _this.awnsers = res;
            console.log("cadata", data);
        });
        this.getinfoProvider.getMyLecture(email).then(function (data) {
            var res = data;
            _this.lectureList = res;
            console.log("ldata", data);
        });
    };
    PortpolioComponent.prototype.ngOnInit = function () {
        $(function () {
            setTimeout(function () {
                var textColor = $('.table_hover').css("color");
                $('.table_hover').hover(function () {
                    $(this).css("color", "#BDBDBD");
                }, function () {
                    $(this).css("color", textColor);
                });
            }, 500);
        });
        this.email = sessionStorage.getItem("email");
        this.name = sessionStorage.getItem("name");
        //$('#port_img').attr("src", "assets/images/"+sessionStorage.getItem("m_img"));
        this.m_img = sessionStorage.getItem("m_img");
        console.log("사진 확인44", this.m_img);
        if (this.m_img == 'null') {
            var a = 'assets/images/users/ice.jpg';
            $("#port_img").attr('src', a);
            console.log("널입니다.");
        }
        else {
            $("#port_img").attr('src', 'assets/images/' + this.m_img);
            console.log("널이 아닙니다.", this.m_img);
        }
        if (!sessionStorage.getItem("email")) {
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/portpolio']);
        }
    };
    PortpolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./portpolio.component.html */ "./src/app/pages/portpolio/portpolio.component.html"),
            styles: [".myq { margin-bottom : 15px;}\n  #my_question_table {\n    border-collapse: separate;\n    border-spacing: 1px;\n    text-align: left;\n    line-height: 1.5;\n    border-top: 1px solid #ccc;\n  margin : 20px 10px;\n}\n#my_question_table th {\n    padding: 10px;\n    font-weight: bold;\n    vertical-align: top;\n    border-bottom: 1px solid #ccc;\n}\n#my_question_table td {\n    padding: 10px;\n    vertical-align: top;\n    border-bottom: 1px solid #ccc;\n}"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_2__["GetinfoProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], PortpolioComponent);
    return PortpolioComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n\r\n                    <h4 class=\"card-title\">회원가입</h4>\r\n\r\n                    <div id=\"registerF\" class=\"login-item\">\r\n                            <!-- #myform=\"ngForm\" (ngSubmit)=\"this.creatLecture(myform, fileInput.files)\" -->\r\n                            <form #myform=\"ngForm\" (ngSubmit)=\"this.registerInput(myform, fileInput.files)\" class=\"form form-login\">\r\n                                <div class=\"form-field form-group\">\r\n                                    <label class=\"user\" for=\"login-email\"><span class=\"hidden\">E-mail</span></label><br>\r\n                                    <input name=\"m_email\" id=\"login-email\" type=\"email\" class=\"form-input\" required ngModel>\r\n                                  </div><br>\r\n                          \r\n                                  <div class=\"form-field form-group\">\r\n                                    <label class=\"lock\" for=\"login-password\"><span class=\"hidden\">Password</span></label><br>\r\n                                    <input name=\"m_password\" id=\"login-password\" type=\"password\" class=\"form-input\" required ngModel>\r\n                                    \r\n                                  </div><br>\r\n\r\n                                  <div class=\"form-field form-group\">\r\n                                        <label class=\"lock\" for=\"login-name\"><span class=\"hidden\">Nickname</span></label><br>\r\n                                        <input name=\"m_name\" id=\"login-name\" type=\"text\" class=\"form-input\" required ngModel>\r\n                                        \r\n                                  </div><br>\r\n\r\n                                  <div class=\"form-group form-field f1\" style=\"width: 25%;\">\r\n                                        <label class=\"user\" for=\"login-email\"><span class=\"hidden\">카테고리&nbsp;&nbsp;</span></label>\r\n                                        <!-- <input matInput name=\"c_name\" id=\"login-email\" type=\"text\" class=\"form-control\" required ngModel> -->\r\n                                        <select name=\"category\" class=\"form-control\" required ngModel>\r\n                                            <option value=\"C\">C</option>\r\n                                            <option value=\"JAVA\">JAVA</option>\r\n                                            <option value=\"Python\">Python</option>\r\n                                            <option value=\"Angular\">Angular</option>\r\n                                            <option value=\"CSS\">CSS</option>\r\n                                            <option value=\"JavaScript\">JavaScript</option>\r\n            \r\n                                        </select>\r\n                                  </div>\r\n\r\n                                  <div class=\"form-group\">\r\n                                        <!-- <img *ngIf=\"imageSrc\" [src]=\"imageSrc\" class=\"avatar\"> -->\r\n                                        <label class=\"lock\" for=\"login-password\"><span class=\"hidden\">회원 이미지&nbsp;&nbsp;</span></label>\r\n                                        <div class=\"btns clearfix\">\r\n                                          <label class=\"btn btn-warning\">image\r\n                                            <input type=\"file\" name=\"m_img\" class=\"form-control\" #fileInput> \r\n                                          </label>\r\n                                        </div>\r\n                                  </div>\r\n                          \r\n                                  <div class=\"form-field\">\r\n                                    <input id=\"log_button\" type=\"submit\" value=\"회원가입\" class=\"btn-primary\">\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/getinfo/getinfo */ "./src/providers/getinfo/getinfo.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(getinfoProvider, location, http) {
        this.getinfoProvider = getinfoProvider;
        this.location = location;
        this.http = http;
        this.data = [];
        this.apiUrl = 'http://ec2-13-209-164-128.ap-northeast-2.compute.amazonaws.com:3000';
        this.subtitle = 'register';
        console.log(this.subtitle);
    }
    RegisterComponent.prototype.registerInput = function (form, files) {
        var _this = this;
        var formData = new FormData();
        formData.append('avatar', files[0]);
        this.data = formData.get('avatar');
        this.getinfoProvider.getRegister({ m_email: form.value.m_email, m_password: form.value.m_password, m_name: form.value.m_name, c_name: form.value.category, m_img: this.data.name }).then(function (data) {
            var res = data;
            //this.data = res;
            //  this.http.post(`${this.apiUrl}/upload`, formData);
            //  if(data){ 
            //   alert("환영합니다.");
            //   this.location.go('/');
            //   window.location.reload();
            //  }
            _this.http.post(_this.apiUrl + "/upload", formData)
                .subscribe(function (res) {
                console.log("고생했다", res);
                alert("회원가입이 완료되었습니다.");
                _this.location.go('/');
                window.location.reload();
            });
        });
    };
    RegisterComponent.prototype.ngAfterViewInit = function () { };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_2__["GetinfoProvider"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                \r\n                <h4 class=\"card-title\">'{{this.data}}' 관련 질문 검색</h4>\r\n\r\n                <table id=\"question_table\" mat-table class=\"mat-elevation-z8\" style=\"text-align: center\">\r\n                        <tr width=50%>\r\n                            <th class=\"th1\" mat-header-cell witdth=\"30%\">작성자</th>\r\n                            <th>분야</th>\r\n                            <th mat-header-cell width=\"60%\">제목</th>      \r\n                            <th>답변 수</th>                  \r\n                        </tr>\r\n                        \r\n    \r\n                        <tr class=\"table_hover\" *ngFor=\"let question of this.questionList\" (click)=\"this.qDetail(question)\">\r\n                            <td mat-cell>{{question.m_name}}</td>  \r\n                            <td>{{question.c_name}}</td>\r\n                            <td mat-cell>{{question.q_title}}</td> \r\n                            <td mat-cell>{{question.awn_count}}</td>     \r\n                        </tr>\r\n                        \r\n                </table>\r\n\r\n                  \r\n                \r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                    \r\n                <h4 class=\"card-title\">'{{this.data}}' 관련 강의 검색</h4>\r\n\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-lg-3 col-md-6\" *ngFor=\"let lecture of this.lectureList\">\r\n                            <!-- Card -->\r\n                        <div class=\"card\">\r\n                            <img class=\"card-img-top img-responsive\" src=\"../../../assets/images/{{lecture.l_img}}\" alt=\"Card image cap\" style=\"width: 70%; height: -1%;\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">{{lecture.l_title}}</h4>\r\n                                <p class=\"card-text\">{{lecture.l_intro}}</p>\r\n                                <button class=\"btn btn-primary\" (click)=\"this.lDetail(lecture)\">보러 가기</button>\r\n                        </div>\r\n                        </div>\r\n                            <!-- Card -->\r\n                    </div>\r\n\r\n                </div>\r\n    \r\n                      \r\n                    \r\n             </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                \r\n                <h4 class=\"card-title\">'{{this.data}}' 관련 채택 답변</h4>\r\n\r\n                  \r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/getinfo/getinfo */ "./src/providers/getinfo/getinfo.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var SearchComponent = /** @class */ (function () {
    function SearchComponent(getinfoProvider, router, location2, route) {
        this.getinfoProvider = getinfoProvider;
        this.router = router;
        this.location2 = location2;
        this.route = route;
        this.questionList = [];
        this.lectureList = [];
        this.loginId = '';
        this.loginPw = '';
        this.subtitle = 'search';
        console.log(this.subtitle);
    }
    SearchComponent.prototype.qDetail = function (question) {
        console.log('왜 안되는거야2222', question);
        this.router.navigate(['/user/question', question]);
    };
    SearchComponent.prototype.lDetail = function (lecture) {
        this.router.navigate(['/lecture/lectureDetail', lecture]);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        var qdata = this.route.params.subscribe(function (params) {
            console.log("searchParams", params);
            // if(params[0] != this.data){
            //   this.data = params[0];
            //   window.location.reload();
            // }
            _this.data = params[0];
            console.log("searchText", _this.data);
            if (self.name != 'reload') {
                self.name = 'reload';
                _this.data = "";
                self.location.reload(true);
            }
            else
                self.name = '';
        });
        //this.data = this.route.snapshot.params['searchText'];
        console.log("searchText", this.route);
        this.getinfoProvider.getSearchQuestList({ searchText: this.data }).then(function (data) {
            var res = data;
            _this.questionList = res;
            console.log("questionList", _this.questionList);
        });
        this.getinfoProvider.getSearchLectureList({ searchText: this.data }).then(function (data) {
            var res = data;
            _this.lectureList = res;
            console.log("lectureList", _this.lectureList);
        });
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        // $(function(){
        //   if (self.name != 'reload') {
        //     self.name = 'reload';
        //     self.location.reload(true);
        // }
        // else self.name = ''; 
        // })
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/pages/search/search.component.html"),
            styles: ["#question_table {\n    border-collapse: separate;\n    border-spacing: 1px;\n    text-align: left;\n    line-height: 1.5;\n    border-top: 1px solid #ccc;\n  margin : 20px 10px;\n}\n#question_table th {\n    padding: 10px;\n    font-weight: bold;\n    vertical-align: top;\n    border-bottom: 1px solid #ccc;\n}\n.th1{\n\n}\n.table_hover{\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n#question_table td {\n    padding: 10px;\n    vertical-align: top;\n    border-bottom: 1px solid #ccc;\n}\n"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_3__["GetinfoProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/question/question.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/question/question.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\" >\r\n                <h3 class=\"card-title\">{{this.data.q_title}}</h3>\r\n                <h6 class=\"card-subtitle\">{{this.data.m_name}}</h6>\r\n\r\n                <input id=\"email_hidden\" type=\"hidden\" value=\"this.data.m_email\"/>\r\n\r\n                <div style=\"height: 250px; margin-top: 50px\">\r\n                    <textarea id=\"content_replace\" style=\"border: 0px solid white; width: 100%; height: 100%;\">{{this.data.q_content}}</textarea>\r\n                    <br>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\" *ngFor=\"let awnser of this.awnList\">\r\n                <div class=\"card-body\" style=\"border: 1px solid royalblue; height: 120%;\" *ngIf=\"awnser.a_choose == 1\">\r\n                    <h5 class=\"casd-subtitle\">{{awnser.am_name}}</h5>\r\n                    <p>\r\n                        {{awnser.a_content}}\r\n                    </p>\r\n\r\n                    <!-- *ngIf=\"this.data.m_email != this.emailCheck\"  -->\r\n                    <button  *ngIf=\"this.emailCheck == this.data.m_email && this.data.q_choose == 0\"class=\"checkBtn btn btn-info btn-circle\" (click)=\"this.chooseAwnser(awnser.am_email, awnser.a_id, awnser.q_id)\"><i class=\"fa fa-check\"></i></button>\r\n                    <button  *ngIf=\"this.emailCheck != awnser.am_email\" class=\"checkBtn btn btn-danger btn-circle\" (click)=\"this.bookmark(awnser.am_email)\" placement=\"top\" ngbTooltip=\"즐겨찾기\"><i class=\"fa fa-heart\"></i></button>\r\n                </div>\r\n\r\n                <div class=\"card-body\" *ngIf=\"awnser.a_choose == 0\">\r\n                        <h5 class=\"casd-subtitle\">{{awnser.am_name}}</h5>\r\n                        <p>\r\n                            {{awnser.a_content}}\r\n                        </p>\r\n    \r\n                        <!-- *ngIf=\"this.data.m_email != this.emailCheck\"  -->\r\n                        <button  *ngIf=\"this.emailCheck == this.data.m_email && this.data.q_choose == 0\"class=\"checkBtn btn btn-info btn-circle\" (click)=\"this.chooseAwnser(awnser.am_email, awnser.a_id, awnser.q_id)\"><i class=\"fa fa-check\"></i></button>\r\n                        <button  *ngIf=\"this.emailCheck != awnser.am_email\" class=\"checkBtn btn btn-warning btn-circle\" (click)=\"this.bookmark(awnser.am_email)\" placement=\"top\" ngbTooltip=\"즐겨찾기\"><i class=\"fa fa-heart\"></i></button>\r\n                    </div>\r\n        </div>\r\n\r\n        \r\n\r\n        <div class=\"card\" *ngIf=\"this.data.q_choose == 0\">\r\n            <div class=\"card-body\" >\r\n                <h4 id=\"noAwntitle\" class=\"card-title\">답변을 기다리고 있습니다.</h4>\r\n                <div id=\"awnserF\" class=\"login-item\">\r\n                        <form #myform=\"ngForm\" (ngSubmit)=\"this.awnser_input(myform)\" class=\"form form-login\">               \r\n                              <div class=\"form-field\">\r\n                                <label class=\"lock\" for=\"login-password\"><span class=\"hidden\">Awnser</span></label><br>\r\n                                <!-- <input name=\"password\" id=\"login-password\" type=\"password\" class=\"form-input\" placeholder=\"Password\" required ngModel> -->\r\n                                <textarea name=\"a_content\" class=\"form-field\" style=\"width: 50%; height: 300px;\" required ngModel>\r\n    \r\n    \r\n                                </textarea>\r\n                              </div><br>\r\n                      \r\n                              <div class=\"form-field\">\r\n                                <input id=\"aws_button\" type=\"submit\" value=\"답변하기\" class=\"btn-primary\">\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                <button *ngIf=\"this.data.m_email != this.emailCheck\" id=\"awnShow\" class=\"btn-primary\">답변하기</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/user/question/question.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user/question/question.component.ts ***!
  \***********************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/getinfo/getinfo */ "./src/providers/getinfo/getinfo.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(router, route, getinfoProvider, location) {
        this.router = router;
        this.route = route;
        this.getinfoProvider = getinfoProvider;
        this.location = location;
        this.data = [];
        this.awnList = [];
        this.subtitle = 'quest';
        console.log(this.subtitle);
        this.emailCheck = sessionStorage.getItem("email");
    }
    QuestionComponent.prototype.bookmark = function (email) {
        var _this = this;
        var email2 = sessionStorage.getItem("email");
        this.getinfoProvider.bookmark({ q_email: email2, a_email: email }).then(function (data) {
            var res = data;
            _this.data = res;
            console.log(data);
            if (data) {
                //this.location.go('/user');
                alert("즐겨찾기를 하였습니다.");
                window.location.reload();
            }
            else {
                window.location.reload();
                alert("이미 즐겨찾기를 하셨습니다.");
            }
        });
    };
    QuestionComponent.prototype.chooseAwnser = function (email, a_id, q_id) {
        var _this = this;
        this.getinfoProvider.chooseAwnser(email, a_id, q_id).then(function (data) {
            var res = data;
            _this.data = res;
            console.log(data);
            if (data) {
                alert("채택하였습니다.");
                _this.location.go('/user');
                window.location.reload();
            }
        });
    };
    QuestionComponent.prototype.awnser_input = function (form) {
        var _this = this;
        var qid = this.data.q_id;
        var qname = this.data.m_name;
        var mname = sessionStorage.getItem("name");
        var m_email = sessionStorage.getItem("email");
        this.getinfoProvider.getAwnser({ q_id: qid, q_name: qname, m_name: mname, content: form.value.a_content, email: m_email }).then(function (data) {
            var res = data;
            _this.data = res;
            console.log(data);
            if (data) {
                //this.location.go('/user');
                window.location.reload();
            }
        });
    };
    QuestionComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            $("#awnserF").hide();
            var email = $("#email_hidden").attr('value');
            $("#awnShow").on("click", function () {
                $("#noAwntitle").hide();
                $("#awnserF").show();
                $(this).hide();
            });
            if (!sessionStorage.getItem("email")) {
                $("#awnShow").hide();
            }
            if (email == sessionStorage.getItem("email")) {
                $(".checkBtn").hide();
            }
            //$("#content_replace").text().replaceAll("<br/>", "\r\n");
            //$("#content_replace").text(text);
            var str = $("#content_replace").text().replace("<br/>", "\r\n");
            $("#content_replace").text(str);
        });
    };
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var qdata = this.route.params.subscribe(function (params) {
            console.log('params2', params);
            console.log('test', params.q_content);
            _this.data = params;
            console.log("testtest", _this.data.q_content);
        });
        this.getinfoProvider.getAwnserList({ q_id: this.data.q_id }).then(function (data) {
            var res = data;
            _this.awnList = res;
            console.log("awnList", _this.awnList);
            if (!data) {
                $("#noAwntitle").hide();
            }
        });
    };
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/pages/user/question/question.component.html"),
            styles: [" .checkBtn { float : right; \n                        margin-left : 10px}\n\n  }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_3__["GetinfoProvider"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">      \r\n                <!-- <a href=\"/user\">{{subtitle}}</a> -->\r\n                <!-- <button type=\"button\" class=\"btn btn-outline-primary guswls\"  (click)=\"this.dbcall()\">DB를 불러주세요</button> -->\r\n\r\n                <h4 class=\"card-subtitle\">질문 및 답변</h4>        \r\n\r\n                <table id=\"question_table\" mat-table class=\"mat-elevation-z8\" style=\"text-align: center\">\r\n                    <tr width=50%>\r\n                        <th class=\"th1\" mat-header-cell witdth=\"30%\">작성자</th>\r\n                        <th>분야</th>\r\n                        <th mat-header-cell width=\"60%\">제목</th>      \r\n                        <th>답변 수</th> \r\n                        <th>작성일</th>\r\n                        <th>조회수</th>                 \r\n                    </tr>\r\n                    \r\n\r\n                    <tr class=\"table_hover\" *ngFor=\"let question of this.data\" (click)=\"this.qDetail(question)\">\r\n                        <td mat-cell>{{question.m_name}}</td>  \r\n                        <td>{{question.c_name}}</td>\r\n                        <td mat-cell>{{question.q_title}}</td> \r\n                        <td mat-cell>{{question.awn_count}}</td>     \r\n                        <td mat-cell>{{question.qq_date}}</td>\r\n                        <td mat-cell>{{question.q_view}}</td>\r\n                    </tr>\r\n                    \r\n                </table>\r\n\r\n                <div id=\"questionF\" class=\"login-item\">\r\n                    <form #myform=\"ngForm\" (ngSubmit)=\"this.queust_input(myform)\" class=\"form form-login\">\r\n                        <div class=\"form-field\" style=\"width: 30%;\">\r\n                            <label class=\"user\" for=\"login-email\"><span class=\"hidden\">제목</span></label><br>\r\n                            <input name=\"q_title\" id=\"login-email\" type=\"email\" class=\"form-input\"  required ngModel>\r\n                            </div><br>\r\n\r\n                            <div class=\"form-field\">\r\n                                <label class=\"user\" for=\"login-email\"><span class=\"hidden\">카테고리</span></label><br>\r\n                                <!-- <input name=\"category\" id=\"login-email\" type=\"email\" class=\"form-input\" required ngModel> -->\r\n                                <select name=\"category\" class=\"form-input\" required ngModel>\r\n                                    <option value=\"C\">C</option>\r\n                                    <option value=\"JAVA\">JAVA</option>\r\n                                    <option value=\"python\">Python</option>\r\n                                    <option value=\"angular\">angular</option>\r\n                                    <option value=\"CSS\">css</option>\r\n\r\n                                </select>\r\n                            </div><br>\r\n\r\n                  \r\n                          <div class=\"form-field\">\r\n                            <label class=\"lock\" for=\"login-password\"><span class=\"hidden\">Content</span></label><br>\r\n                            <!-- <input name=\"password\" id=\"login-password\" type=\"password\" class=\"form-input\" placeholder=\"Password\" required ngModel> -->\r\n                            <textarea id=\"q_textarea\" name=\"q_content\" class=\"form-field\" style=\"width: 50%; height: 300px;\"  required ngModel>\r\n\r\n\r\n                            </textarea>\r\n                          </div><br>\r\n                  \r\n                          <div class=\"form-field\">\r\n                            <input id=\"log_button\" type=\"submit\" value=\"질문하기\" class=\"btn btn-info\">\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n\r\n\r\n\r\n                <br>\r\n\r\n                <button *ngIf=\"this.email\"  id=\"questButton\" class=\"btn btn-info\" (click)=\"this.showForm()\">질문하기</button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/getinfo/getinfo */ "./src/providers/getinfo/getinfo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var UserComponent = /** @class */ (function () {
    //qdata: any = [];
    function UserComponent(getinfoProvider, router, location) {
        var _this = this;
        this.getinfoProvider = getinfoProvider;
        this.router = router;
        this.location = location;
        this.data = [];
        this.getinfoProvider.getUser().then(function (data) {
            var res = data;
            _this.data = res;
        });
        this.subtitle = 'useruser';
        console.log(this.subtitle);
    }
    UserComponent.prototype.qDetail = function (question) {
        console.log('왜 안되는거야2222', question);
        this.router.navigate(['/user/question', question]);
    };
    UserComponent.prototype.showForm = function () {
        $("#question_table").hide();
        $("#questionF").show();
        $("#questButton").hide();
    };
    UserComponent.prototype.queust_input = function (form) {
        var _this = this;
        var m_name = sessionStorage.getItem("name");
        var m_email = sessionStorage.getItem("email");
        var str = $('#q_textarea').val();
        //str = str.replace(/(?:\r\n|\r|\n)/g, '<br>');
        $('#q_textarea').val(str);
        this.getinfoProvider.getQuestion({ name: m_name, email: m_email, title: form.value.q_title, content: str, category: form.value.category }).then(function (data) {
            var res = data;
            _this.data = res;
            console.log(data);
            if (data) {
                alert("질문이 작성되었습니다.");
                _this.location.go('/user');
                window.location.reload();
            }
        });
    };
    UserComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            $("#questionF").hide();
            setTimeout(function () {
                var textColor = $('.table_hover').css("color");
                $('.table_hover').hover(function () {
                    $(this).css("color", "#BDBDBD");
                }, function () {
                    $(this).css("color", textColor);
                });
            }, 500);
        });
    };
    UserComponent.prototype.ngOnInit = function () {
        this.email = sessionStorage.getItem("email");
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/pages/user/user.component.html"),
            styles: ["#question_table {\n    border-collapse: separate;\n    border-spacing: 1px;\n    text-align: left;\n    line-height: 1.5;\n    border-top: 1px solid #ccc;\n  margin : 20px 10px;\n}\n#question_table th {\n    padding: 10px;\n    font-weight: bold;\n    vertical-align: top;\n    border-bottom: 1px solid #ccc;\n}\n.th1{\n\n}\n.table_hover{\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n#question_table td {\n    padding: 10px;\n    vertical-align: top;\n    border-bottom: 1px solid #ccc;\n}\n"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_2__["GetinfoProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Bread crumb and right sidebar toggle -->\n<!-- ============================================================== -->\n<div class=\"row page-titles\">\n    <div class=\"col-md-6 col-8 align-self-center\">\n        <h3 class=\"text-themecolor m-b-0 m-t-0\">{{pageInfo?.title}}</h3>\n    </div>\n</div>\n<!-- ============================================================== -->\n<!-- End Bread crumb and right sidebar toggle -->\n<!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");







var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
            _this.pageInfo = event;
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BreadcrumbComponent.prototype, "layout", void 0);
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/breadcrumb/breadcrumb.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/header-navigation/navigation.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"topbar\" style=\"background: linear-gradient(to left, #0178bc -300%, #00bdda 100%)\">\r\n    <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\r\n        <!-- ============================================================== -->\r\n        <!-- Logo -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"navbar-header\" style=\"background: linear-gradient(to right, #0178bc 0%, #00bdda 100%)!important\">\r\n            <a class=\"navbar-brand\" href=\"/\">\r\n                <!-- Logo icon -->\r\n                <b>\r\n                    <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\r\n                    <!-- Dark Logo icon -->\r\n                    <!-- <img src=\"assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" /> -->\r\n                    <!-- Light Logo icon -->\r\n                    <!-- <img src=\"assets/images/logo-light-icon.png\" alt=\"homepage\" class=\"light-logo\" /> -->\r\n                </b>\r\n                <!--End Logo icon -->\r\n                <!-- Logo text -->\r\n                    <!-- dark Logo text -->\r\n                    <img src=\"assets/images/codemoa_logo.png\" style=\"width: 29%;\" alt=\"homepage\" class=\"dark-logo\" />\r\n                    <!-- Light Logo text -->    \r\n                    <img src=\"assets/images/codemoa_logo.png\" style=\"width: 29%;\"  class=\"light-logo\" alt=\"homepage\" />\r\n            </a>\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- End Logo -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"navbar-collapse\">\r\n            <!-- ============================================================== -->\r\n            <!-- toggle and nav items -->\r\n            <!-- ============================================================== -->\r\n            <ul class=\"navbar-nav mr-auto mt-md-0 \">\r\n                <!-- This is  -->\r\n                <li class=\"nav-item\"> <a class=\"nav-link nav-toggler hidden-lg-up text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"><i class=\"ti-menu\"></i></a> </li>\r\n            </ul>\r\n            <!-- ============================================================== -->\r\n            <!-- User profile and search -->\r\n            <!-- ============================================================== -->\r\n            <ul class=\"navbar-nav my-lg-0\">\r\n                <li class=\"nav-item hidden-sm-down\">\r\n                    <form class=\"app-search\" >\r\n                        <input type=\"text\" id=\"search_input\" class=\"form-control\" placeholder=\"Search for...\" style=\"margin-bottom: 15px;\"> \r\n                        <a id=\"search_btn\" class=\"srh-btn\" (click)=\"this.search()\"><i class=\"ti-search\"></i></a> \r\n                    </form>\r\n                </li>\r\n                <li class=\"nav-item dropdown\">\r\n                    <!-- <a class=\"nav-link dropdown-toggle text-muted waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"profile-pic\" /></a> -->\r\n                    <div class=\"dropdown-menu dropdown-menu-right animated flipInY\">\r\n                        <ul class=\"dropdown-user\">\r\n                            <li>\r\n                                <div class=\"dw-user-box\">\r\n                                    <div class=\"u-img\"><img src=\"assets/images/users/ice.jpg\" alt=\"user\"></div>\r\n                                    <div class=\"u-text\">\r\n                                        <h4>Steave Jobs</h4>\r\n                                        <p class=\"text-muted\">varun@gmail.com</p><a href=\"profile.html\" class=\"btn btn-rounded btn-danger btn-sm\">View Profile</a>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li role=\"separator\" class=\"divider\"></li>\r\n                            <li><a href=\"#\"><i class=\"ti-user\"></i> My Profile</a></li>\r\n                            <li><a href=\"#\"><i class=\"ti-wallet\"></i> My Balance</a></li>\r\n                            <li><a href=\"#\"><i class=\"ti-email\"></i> Inbox</a></li>\r\n                            <li role=\"separator\" class=\"divider\"></li>\r\n                            <li><a href=\"#\"><i class=\"ti-settings\"></i> Account Setting</a></li>\r\n                            <li role=\"separator\" class=\"divider\"></li>\r\n                            <li><a href=\"#\"><i class=\"fa fa-power-off\"></i> Logout</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</header>"

/***/ }),

/***/ "./src/app/shared/header-navigation/navigation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/getinfo/getinfo */ "./src/providers/getinfo/getinfo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(getinfoProvider, route, router, location) {
        this.getinfoProvider = getinfoProvider;
        this.route = route;
        this.router = router;
        this.location = location;
        // This is for Notifications
        this.notifications = [
            {
                round: 'round-danger',
                icon: 'ti-link',
                title: 'Luanch Admin',
                subject: 'Just see the my new admin!',
                time: '9:30 AM'
            },
            {
                round: 'round-success',
                icon: 'ti-calendar',
                title: 'Event today',
                subject: 'Just a reminder that you have event',
                time: '9:10 AM'
            },
            {
                round: 'round-info',
                icon: 'ti-settings',
                title: 'Settings',
                subject: 'You can customize this template as you want',
                time: '9:08 AM'
            },
            {
                round: 'round-primary',
                icon: 'ti-user',
                title: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
        // This is for Mymessages
        this.mymessages = [
            {
                useravatar: 'assets/images/users/1.jpg',
                status: 'online',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:30 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'I have sung a song! See you at',
                time: '9:10 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'away',
                from: 'Arijit Sinh',
                subject: 'I am a singer!',
                time: '9:08 AM'
            },
            {
                useravatar: 'assets/images/users/4.jpg',
                status: 'offline',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
    }
    NavigationComponent.prototype.search = function () {
        this.searchText = $("#search_input").val();
        this.router.navigate(['/search', [this.searchText]]);
    };
    NavigationComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            $('.preloader').fadeOut();
        });
        var set = function () {
            var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;
            var topOffset = 70;
            if (width < 1170) {
                $('body').addClass('mini-sidebar');
                $('.navbar-brand span').hide();
                $('.scroll-sidebar, .slimScrollDiv')
                    .css('overflow-x', 'visible')
                    .parent()
                    .css('overflow', 'visible');
            }
            else {
                $('body').removeClass('mini-sidebar');
                $('.navbar-brand span').show();
            }
            var height = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
            height = height - topOffset;
            // tslint:disable-next-line:curly
            if (height < 1)
                height = 1;
            if (height > topOffset) {
                $('.page-wrapper').css('min-height', height + 'px');
            }
        };
        $(window).ready(set);
        $(window).on('resize', set);
        $('.search-box a, .search-box .app-search .srh-btn').on('click', function () {
            $('.app-search').toggle(200);
        });
        $('[data-toggle="tooltip"]').tooltip();
        $('.scroll-sidebar').slimScroll({
            position: 'left',
            size: '5px',
            height: '100%',
            color: '#dcdcdc'
        });
        $('body').trigger('resize');
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/shared/header-navigation/navigation.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_getinfo_getinfo__WEBPACK_IMPORTED_MODULE_2__["GetinfoProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/sidebar.directive.ts ***!
  \*********************************************/
/*! exports provided: MobileSidebarToggleDirective, RightSidebarToggleDirective, SIDEBAR_TOGGLE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return MobileSidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarToggleDirective", function() { return RightSidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TOGGLE_DIRECTIVES", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Allows the sidebar to be toggled via click.
 */
/*@Directive({
  selector: '.sidebartoggler',
})
export class SidebarToggleDirective {
  constructor() { }

@HostListener('click', ['$event'])
    toggleOpen($event:any) {
        $event.preventDefault();
        if(document.querySelector('body').classList.contains('mini-sidebar')) {
            document.querySelector('body').classList.remove('mini-sidebar');
        } else {
            document.querySelector('body').classList.add('mini-sidebar');
        }
    }
}*/
var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('show-sidebar');
        document.querySelector('.nav-toggler i').classList.toggle('ti-menu');
        document.querySelector('.nav-toggler i').classList.add('ti-close');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '.nav-toggler'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

var RightSidebarToggleDirective = /** @class */ (function () {
    function RightSidebarToggleDirective() {
    }
    RightSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('.right-sidebar').classList.toggle('shw-rside');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], RightSidebarToggleDirective.prototype, "toggleOpen", null);
    RightSidebarToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '.right-side-toggle'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RightSidebarToggleDirective);
    return RightSidebarToggleDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [
    MobileSidebarToggleDirective,
    RightSidebarToggleDirective
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n    #user_name{\r\n        margin-top: 20px;\r\n    }\r\n</style>\r\n\r\n\r\n<aside class=\"left-sidebar\">\r\n    <!-- Sidebar scroll-->\r\n    <div class=\"scroll-sidebar\">\r\n        <!-- User profile -->j\r\n        <div class=\"user-profile\">\r\n            <!-- User profile image -->\r\n            <div class=\"profile-img\"> \r\n                <img id=\"user_img\" src=\"assets/images/users/ice.jpg\" alt=\"users22\" />\r\n            </div>\r\n            <!-- User profile text-->\r\n            <div class=\"profile-text\"> <span id=\"user_name\"> </span>\r\n                <!-- <div id=\"user_drop\" class=\"dropdown-menu animated flipInY\">\r\n                    <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-user\"></i>프로필</a>\r\n                    <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-wallet\"></i> 즐겨찾기</a>\r\n\r\n                    <div class=\"dropdown-divider\"></div> <a (click)=\"this.logout()\" href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-power-off\"></i>\r\n                        Logout</a>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n        <!-- End User profile text-->\r\n        <!-- Sidebar navigation-->\r\n        <nav class=\"sidebar-nav\">\r\n            <ul id=\"sidebarnav\">\r\n                <li class=\"nav-devider\"></li>\r\n                <li [class.active]=\"showMenu === 'starter'\">\r\n                    <a routerLink=\"/starter\" (click)=\"addExpandClass('starter')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-file\"></i><span class=\"hide-menu\">Main</span></a>\r\n                </li>\r\n                <!-- <li *ngIf=\"this.email\">\r\n                        <a routerLink=\"/profile\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi mdi-sort-variant\"></i><span class=\"hide-menu\">프로필</span></a>\r\n                    </li> -->\r\n                <li *ngIf=\"this.email\">\r\n                    <a routerLink=\"/portpolio\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                        class=\"mdi mdi-calendar-clock\"></i><span class=\"hide-menu\">포트폴리오</span></a>\r\n                </li>\r\n                <li class=\"nav-small-cap\">CODEMOA ITEM</li>\r\n                <li>\r\n                    <a routerLink=\"/user\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-equal\"></i><span class=\"hide-menu\">질문 및 답변</span></a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/chooseQuest\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-backburger\"></i><span class=\"hide-menu\">채택 된 답변</span></a>\r\n                    </li>\r\n                <li>\r\n                    <a routerLink=\"/lecture\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                        class=\"mdi mdi-tablet\"> </i><span class=\"hide-menu\">강의</span></a>\r\n                </li>\r\n                \r\n                <li>\r\n                    <a routerLink=\"/bookmark\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                        class=\"mdi mdi-image-filter-vintage\"></i><span class=\"hide-menu\">즐겨찾기</span></a>\r\n                </li>\r\n\r\n                <!-- <li>\r\n                        <a routerLink=\"/component/buttons\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                                class=\"mdi mdi-blur-radial\"></i><span class=\"hide-menu\">Button</span></a>\r\n                    </li>\r\n\r\n                    <li>\r\n                            <a routerLink=\"/component/rating\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                                    class=\"mdi mdi-bandcamp\"></i><span class=\"hide-menu\">Ratings</span></a>\r\n                        </li> -->\r\n                \r\n                \r\n                <!-- <li>\r\n                    <a routerLink=\"/component/accordion\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-equal\"></i><span class=\"hide-menu\">Accordion</span></a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/component/alert\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-message-bulleted\"></i><span class=\"hide-menu\">Alert</span></a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/component/carousel\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-view-carousel\"></i><span class=\"hide-menu\">Carousel</span></a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/component/dropdown\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-arrange-bring-to-front\"></i><span class=\"hide-menu\">Dropdown - Collapse</span></a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/component/modal\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-tablet\"></i><span class=\"hide-menu\">Modal</span></a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/component/pagination\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-backburger\"></i><span class=\"hide-menu\">Pagination</span></a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/component/poptool\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-image-filter-vintage\"></i><span class=\"hide-menu\">Popover & Tooltip</span></a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/component/progressbar\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-poll\"></i><span class=\"hide-menu\">Progressbar</span></a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/component/rating\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-bandcamp\"></i><span class=\"hide-menu\">Ratings</span></a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/component/tabs\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-sort-variant\"></i><span class=\"hide-menu\">Tabs</span></a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/component/timepicker\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-calendar-clock\"></i><span class=\"hide-menu\">Timepicker</span></a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/component/buttons\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-blur-radial\"></i><span class=\"hide-menu\">Button</span></a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/component/cards\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\r\n                            class=\"mdi mdi-arrange-bring-forward\"></i><span class=\"hide-menu\">Card</span></a>\r\n                </li> -->\r\n            </ul>\r\n        </nav>\r\n        <!-- End Sidebar navigation -->\r\n    </div>\r\n    <!-- End Sidebar scroll-->\r\n    <!-- Bottom points-->\r\n    <div class=\"sidebar-footer\">\r\n        <!-- item-->\r\n        <a href=\"\" class=\"link\" data-toggle=\"tooltip\" title=\"Settings\"><i class=\"ti-settings\"></i></a>\r\n        <!-- item-->\r\n        <a href=\"\" class=\"link\" data-toggle=\"tooltip\" title=\"Alarm\"><i class=\"mdi mdi-gmail\"></i></a>\r\n        <!-- item-->\r\n        <a id=\"log\" (click)=\"this.logState()\" class=\"link\" data-toggle=\"tooltip\" title=\"Login\"><i class=\"mdi mdi-power\"></i></a>\r\n    </div>\r\n    <!-- End Bottom points-->\r\n</aside>"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, location) {
        this.router = router;
        this.location = location;
        // this is for the open close
        this.isActive = true;
        this.showMenu = '';
        this.showSubMenu = '';
        this.email = '';
        this.m_img = null;
        this.loginCheck = false;
    }
    SidebarComponent.prototype.logState = function () {
        if (!sessionStorage.getItem("email")) {
            this.router.navigate(['/login']);
        }
        else {
            sessionStorage.removeItem("email");
            sessionStorage.removeItem("name");
            sessionStorage.removeItem("id");
            sessionStorage.removeItem("point");
            sessionStorage.removeItem("grade");
            sessionStorage.removeItem("m_img");
            this.m_img = null;
            this.location.go('/');
            window.location.reload();
        }
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.addActiveClass = function (element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    // End open close
    SidebarComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            $('.sidebartoggler').on('click', function () {
                if ($('body').hasClass('mini-sidebar')) {
                    $('body').trigger('resize');
                    $('.scroll-sidebar, .slimScrollDiv')
                        .css('overflow', 'hidden')
                        .parent()
                        .css('overflow', 'visible');
                    $('body').removeClass('mini-sidebar');
                    $('.navbar-brand span').show();
                    // $(".sidebartoggler i").addClass("ti-menu");
                }
                else {
                    $('body').trigger('resize');
                    $('.scroll-sidebar, .slimScrollDiv')
                        .css('overflow-x', 'visible')
                        .parent()
                        .css('overflow', 'visible');
                    $('body').addClass('mini-sidebar');
                    $('.navbar-brand span').hide();
                    // $(".sidebartoggler i").removeClass("ti-menu");
                }
            });
        });
    };
    SidebarComponent.prototype.ngOnInit = function () {
        this.m_img = sessionStorage.getItem("m_img");
        console.log("사진 확인44", this.m_img);
        if (this.m_img == 'null') {
            var a = 'assets/images/users/ice.jpg';
            $("#user_img").attr('src', a);
            console.log("널입니다.");
        }
        else {
            $("#user_img").attr('src', 'assets/images/' + this.m_img);
            console.log("널이 아닙니다.", this.m_img);
        }
        if (!sessionStorage.getItem("email")) {
            $('.user-profile').hide();
            $('#log').attr('title', 'Login');
        }
        else {
            $('#user_name').text(sessionStorage.getItem("name"));
            $('#log').attr('title', 'Logout');
        }
        this.email = sessionStorage.getItem("email");
        //this.m_img = sessionStorage.getItem("m_img");
        if (this.email) {
            this.loginCheck = true;
        }
        else {
            this.loginCheck = false;
        }
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/providers/getinfo/getinfo.ts":
/*!******************************************!*\
  !*** ./src/providers/getinfo/getinfo.ts ***!
  \******************************************/
/*! exports provided: GetinfoProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetinfoProvider", function() { return GetinfoProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var GetinfoProvider = /** @class */ (function () {
    function GetinfoProvider(http) {
        this.http = http;
        this.SERVER_PATH = 'http://ec2-13-209-164-128.ap-northeast-2.compute.amazonaws.com:3000';
        // console.log('Hello InfoProvider Provider');
    }
    GetinfoProvider.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.SERVER_PATH + '/user', { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getChooseQuest = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.SERVER_PATH + '/chooseQuest', { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getLectureList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.SERVER_PATH + '/lectureList', { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getMyQuestion = function (m_email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.SERVER_PATH + '/myQuestion?m_email=' + m_email, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getMyChooseAwnsers = function (m_email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.SERVER_PATH + '/myChooseAnwser?m_email=' + m_email, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getMyLecture = function (m_email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.SERVER_PATH + '/myLecture?m_email=' + m_email, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getQDetail = function (q_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.SERVER_PATH + '/user/question?q_id=' + q_id, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getLogin = function (form) {
        var _this = this;
        var id = form.id;
        var pass = form.pw;
        console.log(id, pass);
        return new Promise(function (resolve) {
            _this.http.post(_this.SERVER_PATH + '/login', JSON.stringify({ 'loginid': id, 'loginpw': pass }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getRegister = function (form) {
        var _this = this;
        var email = form.m_email;
        var pass = form.m_password;
        var name = form.m_name;
        var c_name = form.c_name;
        var m_img = form.m_img;
        console.log(email, pass, name);
        return new Promise(function (resolve) {
            _this.http.post(_this.SERVER_PATH + '/register', JSON.stringify({ 'm_email': email, 'm_password': pass, 'm_name': name, 'c_name': c_name, 'm_img': m_img }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getQuestion = function (form) {
        var _this = this;
        var name = form.name;
        var email = form.email;
        var title = form.title;
        var content = form.content;
        var category = form.category;
        return new Promise(function (resolve) {
            _this.http.post(_this.SERVER_PATH + '/questInput', JSON.stringify({ 'name': name, 'email': email, 'title': title, 'content': content, 'category': category }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.setMemo = function (form) {
        var _this = this;
        var id = form.id;
        var email = form.email;
        var content = form.content;
        var l_id = form.l_id;
        console.log("a");
        return new Promise(function (resolve) {
            _this.http.post(_this.SERVER_PATH + '/setMemo', JSON.stringify({ 'id': id, 'email': email, "content": content, 'l_id': l_id }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getMemo = function (form) {
        var _this = this;
        var m_id = form.m_id;
        var l_id = form.l_id;
        return new Promise(function (resolve) {
            _this.http.post(_this.SERVER_PATH + '/getMemo', JSON.stringify({ 'm_id': m_id, 'l_id': l_id }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.chooseAwnser = function (email, a_id, q_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.SERVER_PATH + '/chooseAwnser', JSON.stringify({ 'email': email, 'a_id': a_id, 'q_id': q_id }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.bookmark = function (form) {
        var _this = this;
        var q_email = form.q_email;
        var a_email = form.a_email;
        return new Promise(function (resolve) {
            _this.http.post(_this.SERVER_PATH + '/insertBookmark', JSON.stringify({ 'q_email': q_email, 'a_email': a_email }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getBookmark = function (email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.SERVER_PATH + '/myBookmark?m_email=' + email, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getAwnser = function (form) {
        var _this = this;
        var q_id = form.q_id;
        var q_name = form.q_name;
        var m_name = form.m_name;
        var content = form.content;
        var email = form.email;
        return new Promise(function (resolve) {
            _this.http.post(_this.SERVER_PATH + '/awnserInput', JSON.stringify({ 'q_id': q_id, 'q_name': q_name, 'a_name': m_name, 'content': content, 'email': email }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getAwnserList = function (form) {
        var _this = this;
        var q_id = form.q_id;
        return new Promise(function (resolve) {
            _this.http.post(_this.SERVER_PATH + '/awnserList', JSON.stringify({ 'q_id': q_id, 'temp': 'temp' }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getCreatLecture = function (form) {
        var _this = this;
        var l_title = form.l_title;
        var l_intro = form.l_intro;
        var c_name = form.c_name;
        var l_imgname = form.l_imgname;
        var email = form.email;
        var name = form.name;
        return new Promise(function (resolve) {
            _this.http.post(_this.SERVER_PATH + '/creatLecture', JSON.stringify({ 'l_title': l_title, 'l_intro': l_intro, 'c_name': c_name, 'l_imgname': l_imgname, 'email': email, 'name': name }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getSearchQuestList = function (form) {
        var _this = this;
        var searchText = form.searchText;
        return new Promise(function (resolve) {
            _this.http.post(_this.SERVER_PATH + '/searchQuestList', JSON.stringify({ 'searchText': searchText, 'temp': 'temp' }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider.prototype.getSearchLectureList = function (form) {
        var _this = this;
        var searchText = form.searchText;
        return new Promise(function (resolve) {
            _this.http.post(_this.SERVER_PATH + '/searchLectureList', JSON.stringify({ 'searchText': searchText, 'temp': 'temp' }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
                subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GetinfoProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetinfoProvider);
    return GetinfoProvider;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map