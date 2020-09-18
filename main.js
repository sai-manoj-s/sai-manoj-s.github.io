(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animate/animate.component.ts":
/*!**********************************************!*\
  !*** ./src/app/animate/animate.component.ts ***!
  \**********************************************/
/*! exports provided: AnimateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateComponent", function() { return AnimateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a0) { return { "second": a0 }; };
function AnimateComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", val_r1.val, "vh")("width", 5, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r0.sort === val_r1.state))("id", val_r1.id);
} }
"use strict";
class AnimateComponent {
    // sort:string="sorted";
    constructor(loc, rot) {
        this.loc = loc;
        this.rot = rot;
        this.values = [];
        this.dup = [];
        this.ids = [];
        this.comp = 0;
        this.swap = 0;
    }
    ngOnInit() {
        this.createArray();
    }
    createArray() {
        for (let index = 0; index < 75; index++) {
            this.values.push({ "id": index, "val": Math.floor(Math.random() * 70) + 5, "state": "unsorted" });
        }
        // console.log(this.values)
    }
    refresh() {
        this.values = [];
        this.comp = 0;
        this.swap = 0;
        this.dup = [];
        this.ids = [];
        this.comp = 0;
        this.swap = 0;
        this.id = 0;
        this.id3 = 0;
        this.id2 = 0;
        this.createArray();
        console.log(this.values);
    }
    bubbleSort() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let inde = 0; inde < this.values.length; inde++) {
                for (let index = 0; index < this.values.length - inde - 1; index++) {
                    ////////////////changin color of selected bars////////////////////////////
                    var id1 = JSON.stringify(index);
                    var id2 = JSON.stringify(index + 1);
                    let element1 = document.getElementById(id1);
                    let element2 = document.getElementById(id2);
                    element1.style.backgroundColor = "green";
                    element2.style.backgroundColor = "blue";
                    yield this.delay(10);
                    element1.style.backgroundColor = "yellow";
                    element2.style.backgroundColor = "yellow";
                    /////////////////////////////////////////////////////////////////////////////
                    this.comp = this.comp + 1;
                    if (this.values[index].val > this.values[index + 1].val) {
                        yield this.delay(10);
                        this.swap = this.swap + 1;
                        let temp = this.values[index].val;
                        this.values[index].val = this.values[index + 1].val;
                        this.values[index + 1].val = temp;
                    }
                }
                this.values[this.values.length - 1 - inde].state = "sorted";
                document.getElementById(JSON.stringify(this.values.length - 1 - inde)).style.backgroundColor = "red";
            }
        });
    }
    mergeSort() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.values);
            let dupli = [];
            for (let index = 0; index < this.values.length; index++) {
                dupli[index] = this.values[index].val;
            }
            this.mergeSortRange(dupli, 0, this.values.length - 1);
            yield this.delay(1000);
            console.log(dupli);
            console.log(this.values);
            console.log(this.dup);
            for (let index = 0; index < this.ids.length; index++) {
                for (let ind = 0; ind < this.ids[index].length; ind++) {
                    //this.ids[index][ind][1];
                    var id1 = JSON.stringify(this.ids[index][ind][0]);
                    var id2 = JSON.stringify(this.ids[index][ind][1]);
                    let element1 = document.getElementById(id1);
                    let element2 = document.getElementById(id2);
                    element1.style.backgroundColor = "green";
                    element2.style.backgroundColor = "blue";
                    yield this.delay(50);
                    element1.style.backgroundColor = "yellow";
                    element2.style.backgroundColor = "yellow";
                    this.comp++;
                }
                for (let indexs = 0; indexs < this.dup[index].length; indexs++) {
                    this.values[indexs].val = this.dup[index][indexs];
                    yield this.delay(5);
                }
            }
            for (let index = 0; index < this.values.length; index++) {
                document.getElementById(JSON.stringify(index)).style.backgroundColor = "red";
                yield this.delay(5);
            }
        });
    }
    mergeSortRange(list, l, h) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //await this.delay(10);
            if (l >= h)
                return;
            let m = Math.floor(l + (h - l) / 2);
            this.mergeSortRange(list, l, m);
            this.mergeSortRange(list, m + 1, h);
            //await this.delay(90)
            // this.sleep(5)
            // this.merge(list,l,m,h);
            let compare = [];
            let n1 = m - l + 1;
            let n2 = h - m;
            let a1 = [];
            let a2 = [];
            for (let index = 0; index < n1; index++) {
                a1[index] = list[l + index];
            }
            for (let index = 0; index < n2; index++) {
                a2[index] = list[m + 1 + index];
            }
            let i = 0;
            let j = 0;
            let k = l;
            while (i < n1 && j < n2) {
                var id1 = JSON.stringify(l + i);
                var id2 = JSON.stringify(l + n1 + j);
                let pair = [l + i, l + n1 + j];
                compare.push(pair);
                if (a1[i] <= a2[j]) {
                    //this.dup[k]=a1[i];
                    list[k] = a1[i];
                    i++;
                }
                else {
                    // this.dup[k]=a2[j];
                    list[k] = a2[j];
                    j++;
                }
                k++;
            }
            this.ids.push(compare);
            while (i < n1) {
                // this.dup[k]=a1[i];
                list[k] = a1[i];
                i++;
                k++;
            }
            while (j < n2) {
                //this.dup[k]=a2[j];
                list[k] = a2[j];
                j++;
                k++;
            }
            let a = list.slice(0, 70);
            this.dup.push(a);
        });
    }
    insertion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let len = this.values.length;
            for (let index = 1; index < len; index++) {
                let key = this.values[index].val;
                let j = index - 1;
                while (j >= 0 && this.values[j].val > key) {
                    var id1 = JSON.stringify(j);
                    var id2 = JSON.stringify(j + 1);
                    let element1 = document.getElementById(id1);
                    let element2 = document.getElementById(id2);
                    element1.style.backgroundColor = "green";
                    element2.style.backgroundColor = "blue";
                    yield this.delay(10);
                    element1.style.backgroundColor = "yellow";
                    element2.style.backgroundColor = "yellow";
                    this.values[j + 1].val = this.values[j].val;
                    this.swap++;
                    j = j - 1;
                }
                this.values[j + 1].val = key;
            }
            for (let index = 0; index < len; index++) {
                document.getElementById(JSON.stringify(index)).style.backgroundColor = "red";
                yield this.delay(5);
            }
        });
    }
    selection() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let n = this.values.length;
            for (let index = 0; index < n - 1; index++) {
                let min_idx = index;
                for (let inde = index + 1; inde < n; inde++) {
                    this.comp++;
                    var id1 = JSON.stringify(index);
                    var id2 = JSON.stringify(inde);
                    let element1 = document.getElementById(id1);
                    let element2 = document.getElementById(id2);
                    element1.style.backgroundColor = "green";
                    element2.style.backgroundColor = "blue";
                    yield this.delay(10);
                    element1.style.backgroundColor = "yellow";
                    element2.style.backgroundColor = "yellow";
                    if (this.values[inde].val < this.values[min_idx].val)
                        min_idx = inde;
                }
                if (min_idx != index) {
                    this.swap++;
                    let temp = this.values[min_idx].val;
                    this.values[min_idx].val = this.values[index].val;
                    this.values[index].val = temp;
                }
            }
        });
    }
    quick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sort(this.values, 0, this.values.length - 1);
        });
    }
    sort(val, low, high) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (low < high) {
                let pivotIndex = yield this.partition(this.values, low, high);
                document.getElementById(JSON.stringify(pivotIndex)).style.backgroundColor = "red";
                yield this.delay(2000);
                yield this.sort(this.values, low, pivotIndex - 1);
                yield this.sort(this.values, pivotIndex + 1, high);
            }
            for (let index = low; index <= high; index++) {
                document.getElementById(JSON.stringify(index)).style.backgroundColor = "red";
            }
        });
    }
    partition(valies, low, high) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let pivot = this.values[high].val;
            document.getElementById(JSON.stringify(pivot)).style.backgroundColor = "blue";
            yield this.delay(1000);
            let i = (low - 1); // index of smaller element 
            for (let j = low; j < high; j++) {
                var id1 = JSON.stringify(pivot);
                var id2 = JSON.stringify(j);
                let element1 = document.getElementById(id2);
                let element2 = document.getElementById(id1);
                element1.style.backgroundColor = "green";
                element2.style.backgroundColor = "blue";
                yield this.delay(100);
                element1.style.backgroundColor = "yellow";
                element2.style.backgroundColor = "yellow";
                if (this.values[j].val < pivot) {
                    i++;
                    let temp = this.values[i].val;
                    this.values[i].val = this.values[j].val;
                    this.values[j].val = temp;
                }
            }
            let temp = this.values[i + 1].val;
            this.values[i + 1].val = this.values[high].val;
            this.values[high].val = temp;
            return i + 1;
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
}
AnimateComponent.ɵfac = function AnimateComponent_Factory(t) { return new (t || AnimateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AnimateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnimateComponent, selectors: [["app-animate"]], decls: 20, vars: 3, consts: [[1, "nav"], [3, "click"], [2, "margin-top", "10px", "align-content", "center", "margin-left", "10%"], [4, "ngFor", "ngForOf"], [2, "margin-left", "30%"], [1, "bars", 3, "ngClass", "id"]], template: function AnimateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimateComponent_Template_button_click_1_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Generate New Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimateComponent_Template_button_click_3_listener() { return ctx.bubbleSort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bubble Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimateComponent_Template_button_click_5_listener() { return ctx.mergeSort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Merge Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimateComponent_Template_button_click_7_listener() { return ctx.insertion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Insertion Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimateComponent_Template_button_click_9_listener() { return ctx.selection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Selection Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimateComponent_Template_button_click_11_listener() { return ctx.quick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Quick Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AnimateComponent_span_14_Template, 2, 8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.values);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Number of comparisions:- ", ctx.comp, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Number of swaps:- ", ctx.swap, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".bars[_ngcontent-%COMP%]{\n    margin-left: 1px;\n    margin-right: 1px;\n    background-color: yellow;\n    display: inline-block;\n    vertical-align: bottom;\n}\n.nav[_ngcontent-%COMP%]{\n    border: 1px solid black;\n    border-radius: 10px;\n    \n    \n}\n.first[_ngcontent-%COMP%]{\n    background-color: green;\n}\n.second[_ngcontent-%COMP%]{\n    background-color: red;\n    \n}\n.tt[_ngcontent-%COMP%]{\n    background-color: blue;\n}\nli[_ngcontent-%COMP%]{\n    list-style: none;\n    background-color: burlywood;\n    width: 9%;\n    border: 1px solid black;\n    margin-top: 2px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWF0ZS9hbmltYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1COzs7QUFHdkI7QUFHQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kscUJBQXFCOztBQUV6QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hdGUvYW5pbWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhcnN7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ubmF2e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgXG4gICAgXG59XG5cblxuLmZpcnN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLnNlY29uZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgXG59XG4udHR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbmxpe1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICAgIHdpZHRoOiA5JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnimateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-animate',
                templateUrl: './animate.component.html',
                styleUrls: ['./animate.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_animate_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/animate/animate.component */ "./src/app/animate/animate.component.ts");
/* harmony import */ var _app_bubble_bubble_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/bubble/bubble.component */ "./src/app/bubble/bubble.component.ts");
/* harmony import */ var _app_quick_quick_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/quick/quick.component */ "./src/app/quick/quick.component.ts");
/* harmony import */ var _app_selection_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/selection/selection.component */ "./src/app/selection/selection.component.ts");
/* harmony import */ var _app_merge_merge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/merge/merge.component */ "./src/app/merge/merge.component.ts");
/* harmony import */ var _app_insertion_insertion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/insertion/insertion.component */ "./src/app/insertion/insertion.component.ts");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/home/home.component */ "./src/app/home/home.component.ts");











const routes = [
    {
        path: 'refresh',
        component: _app_animate_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"]
    },
    {
        path: '',
        component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    },
    {
        path: 'n',
        component: _app_animate_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"]
    },
    {
        path: 'mergesort',
        component: _app_merge_merge_component__WEBPACK_IMPORTED_MODULE_6__["MergeComponent"]
    },
    {
        path: 'bubblesort',
        component: _app_bubble_bubble_component__WEBPACK_IMPORTED_MODULE_3__["BubbleComponent"]
    },
    {
        path: 'insertionsort',
        component: _app_insertion_insertion_component__WEBPACK_IMPORTED_MODULE_7__["InsertionComponent"]
    },
    {
        path: 'quicksort',
        component: _app_quick_quick_component__WEBPACK_IMPORTED_MODULE_4__["QuickComponent"]
    },
    {
        path: 'selectionsort',
        component: _app_selection_selection_component__WEBPACK_IMPORTED_MODULE_5__["SelectionComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'visualizer2-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, consts: [[1, "bd"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet", 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _animate_animate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animate/animate.component */ "./src/app/animate/animate.component.ts");
/* harmony import */ var _bubble_bubble_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bubble/bubble.component */ "./src/app/bubble/bubble.component.ts");
/* harmony import */ var _insertion_insertion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./insertion/insertion.component */ "./src/app/insertion/insertion.component.ts");
/* harmony import */ var _selection_selection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selection/selection.component */ "./src/app/selection/selection.component.ts");
/* harmony import */ var _quick_quick_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quick/quick.component */ "./src/app/quick/quick.component.ts");
/* harmony import */ var _merge_merge_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./merge/merge.component */ "./src/app/merge/merge.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
        _animate_animate_component__WEBPACK_IMPORTED_MODULE_6__["AnimateComponent"],
        _bubble_bubble_component__WEBPACK_IMPORTED_MODULE_7__["BubbleComponent"],
        _insertion_insertion_component__WEBPACK_IMPORTED_MODULE_8__["InsertionComponent"],
        _selection_selection_component__WEBPACK_IMPORTED_MODULE_9__["SelectionComponent"],
        _quick_quick_component__WEBPACK_IMPORTED_MODULE_10__["QuickComponent"],
        _merge_merge_component__WEBPACK_IMPORTED_MODULE_11__["MergeComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                    _animate_animate_component__WEBPACK_IMPORTED_MODULE_6__["AnimateComponent"],
                    _bubble_bubble_component__WEBPACK_IMPORTED_MODULE_7__["BubbleComponent"],
                    _insertion_insertion_component__WEBPACK_IMPORTED_MODULE_8__["InsertionComponent"],
                    _selection_selection_component__WEBPACK_IMPORTED_MODULE_9__["SelectionComponent"],
                    _quick_quick_component__WEBPACK_IMPORTED_MODULE_10__["QuickComponent"],
                    _merge_merge_component__WEBPACK_IMPORTED_MODULE_11__["MergeComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bubble/bubble.component.ts":
/*!********************************************!*\
  !*** ./src/app/bubble/bubble.component.ts ***!
  \********************************************/
/*! exports provided: BubbleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleComponent", function() { return BubbleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0) { return { "second": a0 }; };
function BubbleComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", val_r1.val, "vh")("width", 5, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r0.sort === val_r1.state))("id", val_r1.id);
} }
class BubbleComponent {
    constructor() {
        this.values = [];
        this.time = 10;
        this.comp = 0;
        this.swap = 0;
        this.isDisabled = false;
        this.ishidden = false;
        this.block = true;
        this.size = 80;
    }
    ngOnInit() {
        this.createArray();
    }
    stop() {
        this.time = 0;
    }
    refresh() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.values = [];
            this.comp = 0;
            this.swap = 0;
            this.ishidden = false;
            this.block = true;
            this.isDisabled = false;
            yield this.delay(this.time);
            document.getElementById('link1').style.pointerEvents = "all";
            document.getElementById('link2').style.pointerEvents = "all";
            document.getElementById('link3').style.pointerEvents = "all";
            document.getElementById('link4').style.pointerEvents = "all";
            document.getElementById('link5').style.pointerEvents = "all";
            this.createArray();
            console.log(this.values.length);
            this.ishidden = false;
            this.block = true;
        });
    }
    createArray() {
        for (let index = 0; index < this.size; index++) {
            this.values.push({ "id": index, "val": Math.floor(Math.random() * 70) + 5, "state": "unsorted" });
        }
        // console.log(this.values)
    }
    bubbleSort() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ishidden = true;
            this.block = false;
            this.isDisabled = true;
            document.getElementById('link1').style.pointerEvents = "none";
            document.getElementById('link2').style.pointerEvents = "none";
            document.getElementById('link3').style.pointerEvents = "none";
            document.getElementById('link4').style.pointerEvents = "none";
            document.getElementById('link5').style.pointerEvents = "none";
            for (let inde = 0; inde < this.values.length; inde++) {
                for (let index = 0; index < this.values.length - inde - 1; index++) {
                    ////////////////changin color of selected bars////////////////////////////
                    var id1 = JSON.stringify(index);
                    var id2 = JSON.stringify(index + 1);
                    let element1 = document.getElementById(id1);
                    let element2 = document.getElementById(id2);
                    element1.style.backgroundColor = "green";
                    element2.style.backgroundColor = "blue";
                    yield this.delay(this.time);
                    element1.style.backgroundColor = "yellow";
                    element2.style.backgroundColor = "yellow";
                    /////////////////////////////////////////////////////////////////////////////
                    this.comp = this.comp + 1;
                    if (this.values[index].val > this.values[index + 1].val) {
                        yield this.delay(this.time);
                        this.swap = this.swap + 1;
                        let temp = this.values[index].val;
                        this.values[index].val = this.values[index + 1].val;
                        this.values[index + 1].val = temp;
                    }
                }
                this.values[this.values.length - 1 - inde].state = "sorted";
                document.getElementById(JSON.stringify(this.values.length - 1 - inde)).style.backgroundColor = "red";
            }
            this.isDisabled = false;
            this.ishidden = false;
            this.block = true;
            document.getElementById('link1').style.pointerEvents = "all";
            document.getElementById('link2').style.pointerEvents = "all";
            document.getElementById('link3').style.pointerEvents = "all";
            document.getElementById('link4').style.pointerEvents = "all";
            document.getElementById('link5').style.pointerEvents = "all";
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
BubbleComponent.ɵfac = function BubbleComponent_Factory(t) { return new (t || BubbleComponent)(); };
BubbleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BubbleComponent, selectors: [["app-bubble"]], decls: 24, vars: 11, consts: [[2, "padding", "10px", "background-color", "rgb(78, 75, 75)", "align-content", "center"], [2, "margin-left", "20px", "font-size", "140%", "background-color", "cornsilk", "font-weight", "500", "font-family", "'Bree Serif', serif", "letter-spacing", "2px"], [1, "btn", 3, "disabled", "click"], [1, "btn", "btn-danger", 3, "hidden", "disabled", "click"], [1, "row"], [1, "col-sm-2"], [1, "col-sm-10"], [2, "margin", "auto", "width", "20%", 3, "hidden"], ["min", "10", "max", "80", "step", "1", 3, "ngModel", "ngModelChange", "change"], [2, "height", "60px", 3, "hidden"], [2, "margin-top", "30px", "align-content", "center", "margin", "auto", "width", "55%"], [4, "ngFor", "ngForOf"], [2, "margin-top", "15px", "margin-left", "15%"], [2, "margin-left", "30%"], [1, "bars", 3, "ngClass", "id"]], template: function BubbleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SORTING VISUALIZER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BubbleComponent_Template_button_click_3_listener() { return ctx.bubbleSort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BubbleComponent_Template_button_click_5_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Generate new Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BubbleComponent_Template_button_click_7_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Stop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Choose Size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BubbleComponent_Template_mat_slider_ngModelChange_14_listener($event) { return ctx.size = $event; })("change", function BubbleComponent_Template_mat_slider_change_14_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, BubbleComponent_span_18_Template, 2, 8, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.block)("disabled", !ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.ishidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Current Size: - ", ctx.size, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.block);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.values);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Number of comparisions:- ", ctx.comp, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Number of swaps:- ", ctx.swap, "");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".bars[_ngcontent-%COMP%]{\n    margin-left: 1px;\n    margin-right: 1px;\n    background-color: yellow;\n    display: inline-block;\n    vertical-align: bottom;\n}\nbutton[_ngcontent-%COMP%]{\n    margin: 5px;\n    margin-left:15%;\n    \n}\n.first[_ngcontent-%COMP%]{\n    background-color: green;\n}\n.second[_ngcontent-%COMP%]{\n    background-color: red;\n    \n}\n.tt[_ngcontent-%COMP%]{\n    background-color: blue;\n}\nli[_ngcontent-%COMP%]{\n    list-style: none;\n    background-color: burlywood;\n    width: 9%;\n    border: 1px solid black;\n    margin-top: 2px;\n    text-align: center;\n}\np[_ngcontent-%COMP%]{\n    font-size: 130%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnViYmxlL2J1YmJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7O0FBRW5CO0FBR0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9idWJibGUvYnViYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyc3tcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbmJ1dHRvbntcbiAgICBtYXJnaW46IDVweDtcbiAgICBtYXJnaW4tbGVmdDoxNSU7XG4gICAgXG59XG5cblxuLmZpcnN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLnNlY29uZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgXG59XG4udHR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbmxpe1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xuICAgIHdpZHRoOiA5JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxucHtcbiAgICBmb250LXNpemU6IDEzMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BubbleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bubble',
                templateUrl: './bubble.component.html',
                styleUrls: ['./bubble.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() { }
    ngOnInit() {
        document.body.className = 'bg';
    }
    ngOnDestroy() {
        document.body.className = "";
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 0, consts: [[1, "log"], [2, "margin", "auto", "width", "60%", "margin-top", "10%"], [1, "btn"], ["routerLink", "/bubblesort", "routerLinkActive", "active"], ["routerLink", "/mergesort", "routerLinkActive", "active"], ["routerLink", "/insertionsort", "routerLinkActive", "active"], ["routerLink", "/selectionsort", "routerLinkActive", "active"], ["routerLink", "/quicksort", "routerLinkActive", "active"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SORTING VISUALIZER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bubble Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Merge Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Insertion Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Selection Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Quick Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".log[_ngcontent-%COMP%]{\n    font-size: 50px;\n    text-align: center;\n    font-style:italic ;\n    font-family: cursive;\n    margin-top: 20px;\n}\na[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: black;\n    font-size: 20px;\n}\n.btn[_ngcontent-%COMP%]{\n    border: 1px solid black;\n    background: chartreuse;\n   padding: 20px;\n   margin: 50px;\n   border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7R0FDdkIsYUFBYTtHQUNiLFlBQVk7R0FDWixtQkFBbUI7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2d7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOml0YWxpYyA7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uYnRue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQ6IGNoYXJ0cmV1c2U7XG4gICBwYWRkaW5nOiAyMHB4O1xuICAgbWFyZ2luOiA1MHB4O1xuICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/insertion/insertion.component.ts":
/*!**************************************************!*\
  !*** ./src/app/insertion/insertion.component.ts ***!
  \**************************************************/
/*! exports provided: InsertionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertionComponent", function() { return InsertionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0) { return { "second": a0 }; };
function InsertionComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", val_r1.val, "vh")("width", 5, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r0.sort === val_r1.state))("id", val_r1.id);
} }
class InsertionComponent {
    constructor() {
        this.time = 10;
        this.values = [];
        this.comp = 0;
        this.swap = 0;
        this.isDisabled = false;
        this.ishidden = false;
        this.block = true;
        this.size = 80;
    }
    ngOnInit() {
        this.createArray();
    }
    stop() {
        this.time = 0;
    }
    refresh() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.values = [];
            this.comp = 0;
            this.swap = 0;
            this.ishidden = false;
            this.block = true;
            yield this.delay(this.time);
            document.getElementById('link1').style.pointerEvents = "all";
            document.getElementById('link2').style.pointerEvents = "all";
            document.getElementById('link3').style.pointerEvents = "all";
            document.getElementById('link4').style.pointerEvents = "all";
            document.getElementById('link5').style.pointerEvents = "all";
            this.createArray();
            this.ishidden = false;
            this.block = true;
        });
    }
    createArray() {
        for (let index = 0; index < this.size; index++) {
            this.values.push({ "id": index, "val": Math.floor(Math.random() * 70) + 5, "state": "unsorted" });
        }
        // console.log(this.values)
    }
    insertion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ishidden = true;
            this.block = false;
            this.isDisabled = true;
            document.getElementById('link1').style.pointerEvents = "none";
            document.getElementById('link2').style.pointerEvents = "none";
            document.getElementById('link3').style.pointerEvents = "none";
            document.getElementById('link4').style.pointerEvents = "none";
            document.getElementById('link5').style.pointerEvents = "none";
            let len = this.values.length;
            for (let index = 1; index < len; index++) {
                let key = this.values[index].val;
                let j = index - 1;
                while (j >= 0 && this.values[j].val > key) {
                    var id1 = JSON.stringify(j);
                    var id2 = JSON.stringify(j + 1);
                    let element1 = document.getElementById(id1);
                    let element2 = document.getElementById(id2);
                    element1.style.backgroundColor = "green";
                    element2.style.backgroundColor = "blue";
                    this.comp++;
                    yield this.delay(this.time);
                    element1.style.backgroundColor = "yellow";
                    element2.style.backgroundColor = "yellow";
                    this.values[j + 1].val = this.values[j].val;
                    this.swap++;
                    j = j - 1;
                }
                this.values[j + 1].val = key;
                this.swap++;
            }
            for (let index = 0; index < len; index++) {
                document.getElementById(JSON.stringify(index)).style.backgroundColor = "red";
                yield this.delay(this.time / 2);
            }
            this.isDisabled = false;
            this.ishidden = false;
            this.block = true;
            document.getElementById('link1').style.pointerEvents = "all";
            document.getElementById('link2').style.pointerEvents = "all";
            document.getElementById('link3').style.pointerEvents = "all";
            document.getElementById('link4').style.pointerEvents = "all";
            document.getElementById('link5').style.pointerEvents = "all";
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
InsertionComponent.ɵfac = function InsertionComponent_Factory(t) { return new (t || InsertionComponent)(); };
InsertionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InsertionComponent, selectors: [["app-insertion"]], decls: 24, vars: 11, consts: [[2, "padding", "10px", "background-color", "rgb(78, 75, 75)", "align-content", "center"], [2, "margin-left", "20px", "font-size", "140%", "background-color", "cornsilk", "font-weight", "500", "font-family", "'Bree Serif', serif", "letter-spacing", "2px"], [1, "btn", 3, "disabled", "click"], [1, "btn", "btn-danger", 3, "disabled", "hidden", "click"], [1, "row"], [1, "col-sm-2"], [1, "col-sm-10"], [2, "margin", "auto", "width", "20%", 3, "hidden"], ["min", "10", "max", "80", "step", "1", 3, "ngModel", "ngModelChange", "change"], [2, "height", "60px", 3, "hidden"], [2, "margin-top", "30px", "align-content", "center", "margin", "auto", "width", "55%"], [4, "ngFor", "ngForOf"], [2, "margin-top", "15px", "margin-left", "15%"], [2, "margin-left", "30%"], [1, "bars", 3, "ngClass", "id"]], template: function InsertionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SORTING VISUALIZER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InsertionComponent_Template_button_click_3_listener() { return ctx.insertion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InsertionComponent_Template_button_click_5_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Generate new Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InsertionComponent_Template_button_click_7_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Stop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Choose Size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InsertionComponent_Template_mat_slider_ngModelChange_14_listener($event) { return ctx.size = $event; })("change", function InsertionComponent_Template_mat_slider_change_14_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, InsertionComponent_span_18_Template, 2, 8, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isDisabled)("hidden", ctx.block);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.ishidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Current Size: - ", ctx.size, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.block);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.values);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Number of comparisions:- ", ctx.comp, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Number of swaps:- ", ctx.swap, "");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".bars[_ngcontent-%COMP%]{\n    margin-left: 1px;\n    margin-right: 1px;\n    background-color: yellow;\n    display: inline-block;\n    vertical-align: bottom;\n}\nbutton[_ngcontent-%COMP%]{\n    \n    margin: 5px;\n    margin-left:15%\n}\n.first[_ngcontent-%COMP%]{\n    background-color: green;\n}\n.second[_ngcontent-%COMP%]{\n    background-color: red;\n    \n}\n.tt[_ngcontent-%COMP%]{\n    background-color: blue;\n}\nli[_ngcontent-%COMP%]{\n    list-style: none;\n    background-color: burlywood;\n    width: 9%;\n    border: 1px solid black;\n    margin-top: 2px;\n    text-align: center;\n}\np[_ngcontent-%COMP%]{\n    font-size: 130%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zZXJ0aW9uL2luc2VydGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLFdBQVc7SUFDWDtBQUNKO0FBR0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9pbnNlcnRpb24vaW5zZXJ0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyc3tcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbmJ1dHRvbntcbiAgICBcbiAgICBtYXJnaW46IDVweDtcbiAgICBtYXJnaW4tbGVmdDoxNSVcbn1cblxuXG4uZmlyc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uc2Vjb25ke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBcbn1cbi50dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxubGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG4gICAgd2lkdGg6IDklO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5we1xuICAgIGZvbnQtc2l6ZTogMTMwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InsertionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-insertion',
                templateUrl: './insertion.component.html',
                styleUrls: ['./insertion.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/merge/merge.component.ts":
/*!******************************************!*\
  !*** ./src/app/merge/merge.component.ts ***!
  \******************************************/
/*! exports provided: MergeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeComponent", function() { return MergeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0) { return { "second": a0 }; };
function MergeComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", val_r1.val, "vh")("width", 5, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r0.sort === val_r1.state))("id", val_r1.id);
} }
class MergeComponent {
    // sort:string="sorted";
    constructor() {
        this.values = [];
        this.dup = [];
        this.ids = [];
        this.time = 10;
        this.comp = 0;
        this.swap = 0;
        this.isDisabled = false;
        this.ishidden = false;
        this.block = true;
        this.size = 80;
    }
    ngOnInit() {
        this.createArray();
    }
    stop() {
        this.time = 0;
    }
    createArray() {
        for (let index = 0; index < this.size; index++) {
            this.values.push({ "id": index, "val": Math.floor(Math.random() * 67) + 5, "state": "unsorted" });
        }
        // console.log(this.values)
    }
    refresh() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.values = [];
            this.comp = 0;
            this.swap = 0;
            this.ishidden = false;
            this.block = true;
            yield this.delay(this.time);
            document.getElementById('link1').style.pointerEvents = "all";
            document.getElementById('link2').style.pointerEvents = "all";
            document.getElementById('link3').style.pointerEvents = "all";
            document.getElementById('link4').style.pointerEvents = "all";
            document.getElementById('link5').style.pointerEvents = "all";
            this.isDisabled = false;
            this.ishidden = false;
            this.block = true;
            this.dup = [];
            this.ids = [];
            this.comp = 0;
            this.swap = 0;
            this.id = 0;
            this.id3 = 0;
            this.id2 = 0;
            this.createArray();
            console.log(this.values);
            this.ishidden = false;
            this.block = true;
        });
    }
    merge() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ishidden = true;
            this.block = false;
            this.isDisabled = true;
            document.getElementById('link1').style.pointerEvents = "none";
            document.getElementById('link2').style.pointerEvents = "none";
            document.getElementById('link3').style.pointerEvents = "none";
            document.getElementById('link4').style.pointerEvents = "none";
            document.getElementById('link5').style.pointerEvents = "none";
            console.log(this.values);
            let dupli = [];
            for (let index = 0; index < this.values.length; index++) {
                dupli[index] = this.values[index].val;
            }
            this.mergeSortRange(dupli, 0, this.values.length - 1);
            yield this.delay(50 * this.time);
            console.log(dupli);
            console.log(this.values);
            console.log(this.dup);
            for (let index = 0; index < this.ids.length; index++) {
                for (let ind = 0; ind < this.ids[index].length; ind++) {
                    //this.ids[index][ind][1];
                    var id1 = JSON.stringify(this.ids[index][ind][0]);
                    var id2 = JSON.stringify(this.ids[index][ind][1]);
                    let element1 = document.getElementById(id1);
                    let element2 = document.getElementById(id2);
                    element1.style.backgroundColor = "green";
                    element2.style.backgroundColor = "blue";
                    yield this.delay(2 * this.time);
                    element1.style.backgroundColor = "yellow";
                    element2.style.backgroundColor = "yellow";
                    this.comp++;
                }
                for (let indexs = 0; indexs < this.dup[index].length; indexs++) {
                    this.values[indexs].val = this.dup[index][indexs];
                    yield this.delay(this.time / 10);
                }
            }
            for (let index = 0; index < this.values.length; index++) {
                document.getElementById(JSON.stringify(index)).style.backgroundColor = "red";
                yield this.delay(this.time / 2);
            }
            document.getElementById('link1').style.pointerEvents = "all";
            document.getElementById('link2').style.pointerEvents = "all";
            document.getElementById('link3').style.pointerEvents = "all";
            document.getElementById('link4').style.pointerEvents = "all";
            debugger;
            document.getElementById('link5').style.pointerEvents = "all";
            this.isDisabled = false;
            this.ishidden = false;
            this.block = true;
        });
    }
    mergeSortRange(list, l, h) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //await this.delay(10);
            if (l >= h)
                return;
            let m = Math.floor(l + (h - l) / 2);
            this.mergeSortRange(list, l, m);
            this.mergeSortRange(list, m + 1, h);
            //await this.delay(90)
            // this.sleep(5)
            // this.merge(list,l,m,h);
            let compare = [];
            let n1 = m - l + 1;
            let n2 = h - m;
            let a1 = [];
            let a2 = [];
            for (let index = 0; index < n1; index++) {
                a1[index] = list[l + index];
            }
            for (let index = 0; index < n2; index++) {
                a2[index] = list[m + 1 + index];
            }
            let i = 0;
            let j = 0;
            let k = l;
            while (i < n1 && j < n2) {
                var id1 = JSON.stringify(l + i);
                var id2 = JSON.stringify(l + n1 + j);
                let pair = [l + i, l + n1 + j];
                compare.push(pair);
                if (a1[i] <= a2[j]) {
                    //this.dup[k]=a1[i];
                    list[k] = a1[i];
                    i++;
                }
                else {
                    // this.dup[k]=a2[j];
                    list[k] = a2[j];
                    j++;
                }
                k++;
            }
            this.ids.push(compare);
            while (i < n1) {
                // this.dup[k]=a1[i];
                list[k] = a1[i];
                i++;
                k++;
            }
            while (j < n2) {
                //this.dup[k]=a2[j];
                list[k] = a2[j];
                j++;
                k++;
            }
            let a = list.slice(0, this.size);
            this.dup.push(a);
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
MergeComponent.ɵfac = function MergeComponent_Factory(t) { return new (t || MergeComponent)(); };
MergeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MergeComponent, selectors: [["app-merge"]], decls: 24, vars: 11, consts: [[2, "background-color", "rgb(78, 75, 75)", "padding", "10px"], [2, "margin-left", "20px", "font-size", "140%", "background-color", "cornsilk", "font-weight", "500", "font-family", "'Bree Serif', serif", "letter-spacing", "2px"], [1, "btn", 3, "disabled", "click"], [1, "btn", "btn-danger", 3, "disabled", "hidden", "click"], [1, "row"], [1, "col-sm-2"], [1, "col-sm-10"], [2, "margin", "auto", "width", "20%", 3, "hidden"], ["min", "10", "max", "80", "step", "1", 3, "ngModel", "ngModelChange", "change"], [2, "height", "50px", 3, "hidden"], [2, "margin-top", "20px", "align-content", "center", "margin-left", "20%"], [4, "ngFor", "ngForOf"], [2, "margin-top", "15px", "margin-left", "15%"], [2, "margin-left", "30%"], [1, "bars", 3, "ngClass", "id"]], template: function MergeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SORTING VISUALIZER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MergeComponent_Template_button_click_3_listener() { return ctx.merge(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MergeComponent_Template_button_click_5_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Generate new Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MergeComponent_Template_button_click_7_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Stop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Choose Size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MergeComponent_Template_mat_slider_ngModelChange_14_listener($event) { return ctx.size = $event; })("change", function MergeComponent_Template_mat_slider_change_14_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MergeComponent_span_18_Template, 2, 8, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isDisabled)("hidden", ctx.block);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.ishidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Current Size: - ", ctx.size, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.block);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.values);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Number of comparisions:- ", ctx.comp, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Number of swaps:- ", ctx.swap, "");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".bars[_ngcontent-%COMP%]{\n    margin-left: 1px;\n    margin-right: 1px;\n    background-color: yellow;\n    display: inline-block;\n    vertical-align: bottom;\n}\nbutton[_ngcontent-%COMP%]{\n    \n    margin: 5px;\n    margin-left:15%\n}\n.first[_ngcontent-%COMP%]{\n    background-color: green;\n}\n.second[_ngcontent-%COMP%]{\n    background-color: red;\n    \n}\n.tt[_ngcontent-%COMP%]{\n    background-color: blue;\n}\nli[_ngcontent-%COMP%]{\n    list-style: none;\n    background-color: burlywood;\n    width: 9%;\n    border: 1px solid black;\n    margin-top: 2px;\n    text-align: center;\n}\np[_ngcontent-%COMP%]{\n    font-size: 130%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVyZ2UvbWVyZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksV0FBVztJQUNYO0FBQ0o7QUFHQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kscUJBQXFCOztBQUV6QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21lcmdlL21lcmdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5iYXJze1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuYnV0dG9ue1xuICAgIFxuICAgIG1hcmdpbjogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OjE1JVxufVxuXG5cbi5maXJzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5zZWNvbmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIFxufVxuLnR0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5saXtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcbiAgICB3aWR0aDogOSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnB7XG4gICAgZm9udC1zaXplOiAxMzAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MergeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-merge',
                templateUrl: './merge.component.html',
                styleUrls: ['./merge.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class NavComponent {
    constructor(route, rot, loc) {
        this.route = route;
        this.rot = rot;
        this.loc = loc;
    }
    ngOnInit() {
    }
    refresh() {
        this.rot.navigateByUrl('/new');
        console.log("g");
        this.rot.navigateByUrl("/new", { skipLocationChange: true }).then(() => {
            this.rot.navigate([decodeURI(this.loc.path())]);
            console.log(decodeURI(this.loc.path()));
        });
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 17, vars: 0, consts: [[1, "nav"], [1, "nav", "flex-column"], [1, "nav-item"], ["id", "link1", "routerLink", "/bubblesort", "routerLinkActive", "active"], ["id", "link2", "routerLink", "/mergesort", "routerLinkActive", "active"], ["id", "link3", "routerLink", "/insertionsort", "routerLinkActive", "active"], ["id", "link4", "routerLink", "/selectionsort", "routerLinkActive", "active"], ["id", "link5", "routerLink", "/quicksort", "routerLinkActive", "active"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bubble Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Merge Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Insertion Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Selection Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quick Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["div[_ngcontent-%COMP%]{\n    \n   \n    background-color: rgb(78, 75, 75);\n    height: 90vh;\n    \n}\n\na[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bold;\n    font-size: 120%;\n    margin-top: 10px;\n    color: white;\n\n}\n\na[_ngcontent-%COMP%]:hover{\n    color: black;\n}\n\n.active[_ngcontent-%COMP%]{\n    background-color: white;\n    color: black;\n    border-left: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7SUFHSSxpQ0FBaUM7SUFDakMsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTs7QUFFaEI7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XG4gICAgXG4gICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc1LCA3NSk7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIFxufVxuXG5he1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuXG5cbmE6aG92ZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/quick/quick.component.ts":
/*!******************************************!*\
  !*** ./src/app/quick/quick.component.ts ***!
  \******************************************/
/*! exports provided: QuickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickComponent", function() { return QuickComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0) { return { "second": a0 }; };
function QuickComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", val_r1.val, "vh")("width", 5, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r0.sort === val_r1.state))("id", val_r1.id);
} }
class QuickComponent {
    constructor() {
        this.time = 10;
        this.values = [];
        this.comp = 0;
        this.swap = 0;
        this.isDisabled = false;
        this.ishidden = false;
        this.block = true;
        this.size = 80;
    }
    ngOnInit() {
        this.createArray();
    }
    stop() {
        this.time = -10;
    }
    refresh() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.values = [];
            this.comp = 0;
            this.swap = 0;
            this.time = 10;
            this.ishidden = false;
            this.block = true;
            yield this.delay(this.time);
            document.getElementById('link1').style.pointerEvents = "all";
            document.getElementById('link2').style.pointerEvents = "all";
            document.getElementById('link3').style.pointerEvents = "all";
            document.getElementById('link4').style.pointerEvents = "all";
            document.getElementById('link5').style.pointerEvents = "all";
            this.isDisabled = false;
            this.ishidden = false;
            this.block = true;
            this.createArray();
            console.log(this.values.length);
            this.ishidden = false;
            this.block = true;
            this.isDisabled = false;
        });
    }
    createArray() {
        for (let index = 0; index < this.size; index++) {
            this.values.push({ "id": index, "val": Math.floor(Math.random() * 70) + 5, "state": "unsorted" });
        }
        // console.log(this.values)
    }
    quick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ishidden = true;
            this.block = false;
            this.isDisabled = true;
            document.getElementById('link1').style.pointerEvents = "none";
            document.getElementById('link2').style.pointerEvents = "none";
            document.getElementById('link3').style.pointerEvents = "none";
            document.getElementById('link4').style.pointerEvents = "none";
            document.getElementById('link5').style.pointerEvents = "none";
            yield this.sort(this.values, 0, this.values.length - 1);
            document.getElementById('link1').style.pointerEvents = "all";
            document.getElementById('link2').style.pointerEvents = "all";
            document.getElementById('link3').style.pointerEvents = "all";
            document.getElementById('link4').style.pointerEvents = "all";
            document.getElementById('link5').style.pointerEvents = "all";
            this.isDisabled = false;
            this.ishidden = false;
            this.block = true;
            this.refresh();
        });
    }
    sort(val, low, high) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (low < high) {
                let pivotIndex = yield this.partition(this.values, low, high);
                document.getElementById(JSON.stringify(pivotIndex)).style.backgroundColor = "red";
                yield this.delay(this.time * 20);
                yield this.sort(this.values, low, pivotIndex - 1);
                yield this.sort(this.values, pivotIndex + 1, high);
            }
            for (let index = low; index <= high; index++) {
                document.getElementById(JSON.stringify(index)).style.backgroundColor = "red";
            }
        });
    }
    partition(valies, low, high) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let pivot = this.values[high].val;
            //document.getElementById(JSON.stringify(pivot)).style.backgroundColor="blue"
            let i = (low - 1); // index of smaller element 
            for (let j = low; j < high; j++) {
                var id1 = JSON.stringify(high);
                var id2 = JSON.stringify(j);
                let element1 = document.getElementById(id2);
                let element2 = document.getElementById(id1);
                element1.style.backgroundColor = "green";
                element2.style.backgroundColor = "blue";
                this.comp++;
                yield this.delay(this.time * 2);
                element1.style.backgroundColor = "yellow";
                element2.style.backgroundColor = "yellow";
                if (this.values[j].val < pivot) {
                    i++;
                    let temp = this.values[i].val;
                    this.values[i].val = this.values[j].val;
                    this.values[j].val = temp;
                    this.swap++;
                }
            }
            let temp = this.values[i + 1].val;
            this.values[i + 1].val = this.values[high].val;
            this.values[high].val = temp;
            this.swap++;
            return i + 1;
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
QuickComponent.ɵfac = function QuickComponent_Factory(t) { return new (t || QuickComponent)(); };
QuickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuickComponent, selectors: [["app-quick"]], decls: 24, vars: 11, consts: [[2, "padding", "10px", "background-color", "rgb(78, 75, 75)", "align-content", "center"], [2, "margin-left", "20px", "font-size", "140%", "background-color", "cornsilk", "font-weight", "500", "font-family", "'Bree Serif', serif", "letter-spacing", "2px"], [1, "btn", 3, "disabled", "click"], [1, "btn", "btn-danger", 3, "disabled", "hidden", "click"], [1, "row"], [1, "col-sm-2"], [1, "col-sm-10"], [2, "margin", "auto", "width", "20%", 3, "hidden"], ["min", "10", "max", "80", "step", "1", 3, "ngModel", "ngModelChange", "change"], [2, "height", "60px", 3, "hidden"], [2, "margin-top", "30px", "align-content", "center", "margin", "auto", "width", "55%"], [4, "ngFor", "ngForOf"], [2, "margin-top", "15px", "margin-left", "15%"], [2, "margin-left", "30%"], [1, "bars", 3, "ngClass", "id"]], template: function QuickComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SORTING VISUALIZER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuickComponent_Template_button_click_3_listener() { return ctx.quick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuickComponent_Template_button_click_5_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Generate new Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuickComponent_Template_button_click_7_listener() { return ctx.stop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Stop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Choose Size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QuickComponent_Template_mat_slider_ngModelChange_14_listener($event) { return ctx.size = $event; })("change", function QuickComponent_Template_mat_slider_change_14_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, QuickComponent_span_18_Template, 2, 8, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isDisabled)("hidden", ctx.block);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.ishidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Current Size: - ", ctx.size, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.block);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.values);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Number of comparisions:- ", ctx.comp, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Number of swaps:- ", ctx.swap, "");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".bars[_ngcontent-%COMP%]{\n    margin-left: 1px;\n    margin-right: 1px;\n    background-color: yellow;\n    display: inline-block;\n    vertical-align: bottom;\n}\nbutton[_ngcontent-%COMP%]{\n    \n    margin: 5px;\n    margin-left:15%\n}\n.first[_ngcontent-%COMP%]{\n    background-color: green;\n}\n.second[_ngcontent-%COMP%]{\n    background-color: red;\n    \n}\n.tt[_ngcontent-%COMP%]{\n    background-color: blue;\n}\nli[_ngcontent-%COMP%]{\n    list-style: none;\n    background-color: burlywood;\n    width: 9%;\n    border: 1px solid black;\n    margin-top: 2px;\n    text-align: center;\n}\np[_ngcontent-%COMP%]{\n    font-size: 130%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpY2svcXVpY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSxXQUFXO0lBQ1g7QUFDSjtBQUdBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcXVpY2svcXVpY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJze1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuYnV0dG9ue1xuICAgIFxuICAgIG1hcmdpbjogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OjE1JVxufVxuXG5cbi5maXJzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5zZWNvbmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIFxufVxuLnR0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5saXtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcbiAgICB3aWR0aDogOSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnB7XG4gICAgZm9udC1zaXplOiAxMzAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuickComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-quick',
                templateUrl: './quick.component.html',
                styleUrls: ['./quick.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/selection/selection.component.ts":
/*!**************************************************!*\
  !*** ./src/app/selection/selection.component.ts ***!
  \**************************************************/
/*! exports provided: SelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionComponent", function() { return SelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0) { return { "second": a0 }; };
function SelectionComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", val_r1.val, "vh")("width", 5, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r0.sort === val_r1.state))("id", val_r1.id);
} }
class SelectionComponent {
    // sort:string="sorted";
    constructor() {
        this.values = [];
        this.time = 10;
        this.comp = 0;
        this.swap = 0;
        this.isDisabled = false;
        this.ishidden = false;
        this.block = true;
        this.size = 80;
    }
    ngOnInit() {
        this.createArray();
    }
    stop() {
        this.time = 0;
    }
    createArray() {
        for (let index = 0; index < this.size; index++) {
            this.values.push({ "id": index, "val": Math.floor(Math.random() * 70) + 5, "state": "unsorted" });
        }
        // console.log(this.values)
    }
    refresh() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.values = [];
            this.comp = 0;
            this.swap = 0;
            this.ishidden = false;
            this.block = true;
            this.isDisabled = false;
            yield this.delay(this.time);
            document.getElementById('link1').style.pointerEvents = "all";
            document.getElementById('link2').style.pointerEvents = "all";
            document.getElementById('link3').style.pointerEvents = "all";
            document.getElementById('link4').style.pointerEvents = "all";
            document.getElementById('link5').style.pointerEvents = "all";
            this.comp = 0;
            this.swap = 0;
            this.createArray();
            console.log(this.values);
            this.ishidden = false;
            this.block = true;
        });
    }
    selection() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ishidden = true;
            this.block = false;
            this.isDisabled = true;
            document.getElementById('link1').style.pointerEvents = "none";
            document.getElementById('link2').style.pointerEvents = "none";
            document.getElementById('link3').style.pointerEvents = "none";
            document.getElementById('link4').style.pointerEvents = "none";
            document.getElementById('link5').style.pointerEvents = "none";
            let n = this.values.length;
            for (let index = 0; index < n - 1; index++) {
                let min_idx = index;
                for (let inde = index + 1; inde < n; inde++) {
                    this.comp++;
                    var id1 = JSON.stringify(index);
                    var id2 = JSON.stringify(inde);
                    let element1 = document.getElementById(id1);
                    let element2 = document.getElementById(id2);
                    element1.style.backgroundColor = "green";
                    element2.style.backgroundColor = "blue";
                    yield this.delay(this.time);
                    element1.style.backgroundColor = "yellow";
                    element2.style.backgroundColor = "yellow";
                    if (this.values[inde].val < this.values[min_idx].val)
                        min_idx = inde;
                }
                if (min_idx != index) {
                    this.swap++;
                    let temp = this.values[min_idx].val;
                    this.values[min_idx].val = this.values[index].val;
                    this.values[index].val = temp;
                }
                document.getElementById(JSON.stringify(index)).style.backgroundColor = "red";
            }
            document.getElementById(JSON.stringify(this.values.length - 1)).style.backgroundColor = "red";
            this.isDisabled = false;
            this.ishidden = false;
            this.block = true;
            document.getElementById('link1').style.pointerEvents = "all";
            document.getElementById('link2').style.pointerEvents = "all";
            document.getElementById('link3').style.pointerEvents = "all";
            document.getElementById('link4').style.pointerEvents = "all";
            document.getElementById('link5').style.pointerEvents = "all";
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
SelectionComponent.ɵfac = function SelectionComponent_Factory(t) { return new (t || SelectionComponent)(); };
SelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectionComponent, selectors: [["app-selection"]], decls: 24, vars: 11, consts: [[2, "padding", "10px", "background-color", "rgb(78, 75, 75)", "align-content", "center"], [2, "margin-left", "20px", "font-size", "140%", "background-color", "cornsilk", "font-weight", "500", "font-family", "'Bree Serif', serif", "letter-spacing", "2px"], [1, "btn", 3, "disabled", "click"], [1, "btn", "btn-danger", 3, "hidden", "disabled", "click"], [1, "row"], [1, "col-sm-2"], [1, "col-sm-10"], [2, "margin", "auto", "width", "20%", 3, "hidden"], ["min", "10", "max", "80", "step", "1", 3, "ngModel", "ngModelChange", "change"], [2, "height", "60px", 3, "hidden"], [2, "margin-top", "30px", "align-content", "center", "margin", "auto", "width", "55%"], [4, "ngFor", "ngForOf"], [2, "margin-top", "15px", "margin-left", "15%"], [2, "margin-left", "30%"], [1, "bars", 3, "ngClass", "id"]], template: function SelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SORTING VISUALIZER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionComponent_Template_button_click_3_listener() { return ctx.selection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionComponent_Template_button_click_5_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Generate new Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionComponent_Template_button_click_7_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Stop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Choose Size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectionComponent_Template_mat_slider_ngModelChange_14_listener($event) { return ctx.size = $event; })("change", function SelectionComponent_Template_mat_slider_change_14_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SelectionComponent_span_18_Template, 2, 8, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.block)("disabled", !ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.ishidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Current Size: - ", ctx.size, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.block);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.values);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Number of comparisions:- ", ctx.comp, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Number of swaps:- ", ctx.swap, "");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".bars[_ngcontent-%COMP%]{\n    margin-left: 1px;\n    margin-right: 1px;\n    background-color: yellow;\n    display: inline-block;\n    vertical-align: bottom;\n}\nbutton[_ngcontent-%COMP%]{\n    \n    margin: 5px;\n    margin-left:15%\n}\n.first[_ngcontent-%COMP%]{\n    background-color: green;\n}\n.second[_ngcontent-%COMP%]{\n    background-color: red;\n    \n}\n.tt[_ngcontent-%COMP%]{\n    background-color: blue;\n}\nli[_ngcontent-%COMP%]{\n    list-style: none;\n    background-color: burlywood;\n    width: 9%;\n    border: 1px solid black;\n    margin-top: 2px;\n    text-align: center;\n}\np[_ngcontent-%COMP%]{\n    font-size: 130%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0aW9uL3NlbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLFdBQVc7SUFDWDtBQUNKO0FBR0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3Rpb24vc2VsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyc3tcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbmJ1dHRvbntcbiAgICBcbiAgICBtYXJnaW46IDVweDtcbiAgICBtYXJnaW4tbGVmdDoxNSVcbn1cblxuXG4uZmlyc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uc2Vjb25ke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBcbn1cbi50dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxubGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG4gICAgd2lkdGg6IDklO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5we1xuICAgIGZvbnQtc2l6ZTogMTMwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-selection',
                templateUrl: './selection.component.html',
                styleUrls: ['./selection.component.css']
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/manoj/7A8CC1658CC11C8F/algovisual/visualizer2-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map