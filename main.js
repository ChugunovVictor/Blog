(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\chugunovvictor.github.io\source\src\main.ts */"zUnb");


/***/ }),

/***/ "5I4n":
/*!*********************************************************!*\
  !*** ./src/app/components/side-navigation.component.ts ***!
  \*********************************************************/
/*! exports provided: SideNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationComponent", function() { return SideNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_table_of_contents_table_of_contents_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/table_of_contents/table_of_contents.json */ "UIBc");
var _assets_table_of_contents_table_of_contents_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/table_of_contents/table_of_contents.json */ "UIBc", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a0) { return { path: a0 }; };
function SideNavigationComponent_li_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, menu_r1.path + "/" + item_r3.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
} }
function SideNavigationComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideNavigationComponent_li_1_li_3_Template, 3, 4, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menu_r1.children);
} }
class SideNavigationComponent {
    constructor() {
    }
    ngOnInit() {
        this.root = _assets_table_of_contents_table_of_contents_json__WEBPACK_IMPORTED_MODULE_1__.root;
    }
}
SideNavigationComponent.ɵfac = function SideNavigationComponent_Factory(t) { return new (t || SideNavigationComponent)(); };
SideNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavigationComponent, selectors: [["app-side-navigation"]], decls: 2, vars: 1, consts: [[1, "app-side-navigation"], [4, "ngFor", "ngForOf"], [1, "menuItemList"], ["routerLink", "/view", "routerLinkActive", "active", 3, "queryParams"]], template: function SideNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavigationComponent_li_1_Template, 4, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.root);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["[_nghost-%COMP%] {\n            width: 150px;\n            margin: 8px;\n            display: flex;\n        }", "[_nghost-%COMP%]:after {\n            content: \"\";\n            float: left;\n            background: black;\n            width: 0.5px;\n            height: 100%;\n            border-radius: 2px;\n        }", ".app-side-navigation[_ngcontent-%COMP%] {\n            padding: 8px;\n        }", ".menuItemList[_ngcontent-%COMP%] {\n            font-size: small;\n            padding-inline-start: 10px;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-navigation',
                template: `
        <ul class="app-side-navigation">
            <li *ngFor="let menu of root">
                {{ menu.title }}
                <ul class="menuItemList">
                    <li *ngFor="let item of menu.children">
                        <a routerLink="/view" [queryParams]="{ path: menu.path + '/' + item.path }"
                           routerLinkActive="active">{{ item.title }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    `,
                styles: [
                    `:host {
            width: 150px;
            margin: 8px;
            display: flex;
        }`,
                    `:host:after {
            content: "";
            float: left;
            background: black;
            width: 0.5px;
            height: 100%;
            border-radius: 2px;
        }`,
                    `.app-side-navigation {
            padding: 8px;
        }`,
                    `.menuItemList {
            font-size: small;
            padding-inline-start: 10px;
        }`
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "CE1P":
/*!**********************************************!*\
  !*** ./src/app/components/view.component.ts ***!
  \**********************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_dynamic_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-dynamic-hooks */ "orHV");






//https://github.com/MTobisch/ngx-dynamic-hooks
class ViewComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.content = '';
        route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(params => http.get('./assets/table_of_contents/' + this.path(params['path']), { responseType: 'text' }))).subscribe(data => {
            this.content = data;
        });
    }
    path(pre) {
        if (pre.endsWith('.html'))
            return pre;
        else
            return pre + "/index.html";
    }
    ngOnInit() {
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], decls: 1, vars: 1, consts: [["options", "", 3, "content"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-dynamic-hooks", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.content);
    } }, directives: [ngx_dynamic_hooks__WEBPACK_IMPORTED_MODULE_4__["OutletComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view',
                template: `
        <ngx-dynamic-hooks [content]="content" options></ngx-dynamic-hooks>
    `,
                styles: []
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Mc1M":
/*!******************************!*\
  !*** ./src/app/utils/svg.ts ***!
  \******************************/
/*! exports provided: WrapperSVG, Point, QueueElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperSVG", function() { return WrapperSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueElement", function() { return QueueElement; });
class WrapperSVG {
    constructor(type) {
        this.curryingAttr = attr => value => this.element.setAttribute(attr, value);
        this.element = document.createElementNS("http://www.w3.org/2000/svg", type);
    }
    setAttrs(...attrValue) {
        let cur;
        for (let value of attrValue) {
            if (cur == undefined) {
                cur = this.curryingAttr(value);
            }
            else {
                cur = cur(value);
            }
        }
        return this;
    }
    append(child) {
        this.element.appendChild(child);
        return this;
    }
    compile() {
        return this.element;
    }
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class QueueElement {
    constructor(id, parent, background = '#FFF') {
        this.id = id;
        this.parent = parent;
        this.background = background;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_side_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/side-navigation.component */ "5I4n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_abcd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/abcd.component */ "oNVB");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "app-root"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-abcd-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_side_navigation_component__WEBPACK_IMPORTED_MODULE_1__["SideNavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_abcd_component__WEBPACK_IMPORTED_MODULE_3__["AbcdComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
        <div class="app-root">
            <app-side-navigation></app-side-navigation>
            <div class="content">
                <router-outlet></router-outlet>
            </div>
            <app-abcd-component></app-abcd-component>
        </div>
    `
            }]
    }], null, null); })();


/***/ }),

/***/ "UIBc":
/*!*************************************************************!*\
  !*** ./src/assets/table_of_contents/table_of_contents.json ***!
  \*************************************************************/
/*! exports provided: root, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"root\":[{\"title\":\"Development\",\"path\":\"programming\",\"children\":[{\"title\":\"Carrying Sequences\",\"path\":\"CarryingSequences\"},{\"title\":\"Functional Sets\",\"path\":\"FunctionalSets\"},{\"title\":\"MENACE\",\"path\":\"Menace\"}]}]}");

/***/ }),

/***/ "XPCo":
/*!**********************************************!*\
  !*** ./src/app/components/tabs.component.ts ***!
  \**********************************************/
/*! exports provided: TabBlockComponent, TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBlockComponent", function() { return TabBlockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["*"];
function TabsComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const t_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.open(t_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r1);
} }
class TabBlockComponent {
    constructor() { }
}
TabBlockComponent.ɵfac = function TabBlockComponent_Factory(t) { return new (t || TabBlockComponent)(); };
TabBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabBlockComponent, selectors: [["app-tab-block"]], hostVars: 1, hostBindings: function TabBlockComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("header", ctx.header);
    } }, inputs: { header: "header" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function TabBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab-block',
                template: `
    <ng-content></ng-content>
  `,
                styles: []
            }]
    }], function () { return []; }, { header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.header']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class TabsComponent {
    constructor() {
        this.headers = [];
    }
    // @ContentChildren(forwardRef(() => TabBlockComponent), { descendants: true }) elements;
    onDynamicMount(data) {
        this.contentChildren = data.contentChildren;
        for (let i in this.contentChildren) {
            let native = this.contentChildren[i].componentRef.location.nativeElement;
            this.headers.push(native.getAttribute('header'));
            if (Number(i) !== 0)
                native.style.setProperty('display', 'none');
        }
    }
    open(title) {
        for (let i in this.contentChildren) {
            let native = this.contentChildren[i].componentRef.location.nativeElement;
            if (title !== native.getAttribute('header'))
                native.style.setProperty('display', 'none');
            else
                native.style.setProperty('display', 'block');
        }
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "tab"], ["class", "tablinks", 3, "click", 4, "ngFor", "ngForOf"], [1, "tablinks", 3, "click"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_span_1_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".tab[_ngcontent-%COMP%] {\n      overflow: hidden;\n    }", ".tablinks[_ngcontent-%COMP%] {\n      float: left;\n      cursor: pointer;\n      padding: 8px 16px;\n      font-size: 17px;\n    }", ".tablinks[_ngcontent-%COMP%]:not(:last-child) {\n      border-right: solid 1px black;\n    }", ".tablinks[_ngcontent-%COMP%]:hover {\n      text-decoration: underline;\n      text-underline-offset: 3px;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tabs',
                template: `
  <div class="tab">
    <span class="tablinks" (click)="open(t)" *ngFor="let t of headers">{{t}}</span>
  </div>
  <ng-content></ng-content>
  `,
                styles: [
                    `.tab {
      overflow: hidden;
    }`, `.tablinks {
      float: left;
      cursor: pointer;
      padding: 8px 16px;
      font-size: 17px;
    }`, `.tablinks:not(:last-child) {
      border-right: solid 1px black;
    }`, `.tablinks:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }`
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_katex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-katex */ "a7Q/");
/* harmony import */ var _components_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-navigation.component */ "5I4n");
/* harmony import */ var _components_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/view.component */ "CE1P");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_dynamic_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-dynamic-hooks */ "orHV");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var _components_code_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/code-block.component */ "vurP");
/* harmony import */ var _components_abcd_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/abcd.component */ "oNVB");
/* harmony import */ var _components_tabs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tabs.component */ "XPCo");
/* harmony import */ var _components_tree_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tree-chart.component */ "tTAp");
/* harmony import */ var _components_latex_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/latex.component */ "kFIQ");

















const componentParsers = [
    { component: ng_katex__WEBPACK_IMPORTED_MODULE_4__["KatexParagraphComponent"] },
    { component: ng_katex__WEBPACK_IMPORTED_MODULE_4__["KatexComponent"] },
    { component: _components_code_block_component__WEBPACK_IMPORTED_MODULE_10__["CodeBlockComponent"] },
    { component: _components_tabs_component__WEBPACK_IMPORTED_MODULE_12__["TabsComponent"] },
    { component: _components_tabs_component__WEBPACK_IMPORTED_MODULE_12__["TabBlockComponent"] },
    { component: _components_tree_chart_component__WEBPACK_IMPORTED_MODULE_13__["TreeChartComponent"] },
    { component: _components_latex_component__WEBPACK_IMPORTED_MODULE_14__["LatexComponent"] },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__["HIGHLIGHT_OPTIONS"],
            useValue: {
                coreLibraryLoader: () => __webpack_require__.e(/*! import() | highlight-js-lib-core */ "highlight-js-lib-core").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/core */ "ECCn", 7)),
                lineNumbersLoader: () => __webpack_require__.e(/*! import() | highlightjs-line-numbers-js */ "highlightjs-line-numbers-js").then(__webpack_require__.t.bind(null, /*! highlightjs-line-numbers.js */ "gPJM", 7)),
                languages: {
                    javascript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-javascript */ "highlight-js-lib-languages-javascript").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/javascript */ "TdF3", 7)),
                    scala: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-scala */ "highlight-js-lib-languages-scala").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/scala */ "n3/M", 7))
                }
            }
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ng_katex__WEBPACK_IMPORTED_MODULE_4__["KatexModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__["HighlightModule"],
            ngx_dynamic_hooks__WEBPACK_IMPORTED_MODULE_8__["DynamicHooksModule"].forRoot({
                globalParsers: componentParsers,
                globalOptions: { convertHTMLEntities: false, sanitize: false }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__["SideNavigationComponent"],
        _components_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"],
        _components_code_block_component__WEBPACK_IMPORTED_MODULE_10__["CodeBlockComponent"],
        _components_abcd_component__WEBPACK_IMPORTED_MODULE_11__["AbcdComponent"],
        _components_tabs_component__WEBPACK_IMPORTED_MODULE_12__["TabsComponent"],
        _components_tabs_component__WEBPACK_IMPORTED_MODULE_12__["TabBlockComponent"],
        _components_tree_chart_component__WEBPACK_IMPORTED_MODULE_13__["TreeChartComponent"],
        _components_latex_component__WEBPACK_IMPORTED_MODULE_14__["LatexComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ng_katex__WEBPACK_IMPORTED_MODULE_4__["KatexModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__["HighlightModule"], ngx_dynamic_hooks__WEBPACK_IMPORTED_MODULE_8__["DynamicHooksModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__["SideNavigationComponent"],
                    _components_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"],
                    _components_code_block_component__WEBPACK_IMPORTED_MODULE_10__["CodeBlockComponent"],
                    _components_abcd_component__WEBPACK_IMPORTED_MODULE_11__["AbcdComponent"],
                    _components_tabs_component__WEBPACK_IMPORTED_MODULE_12__["TabsComponent"],
                    _components_tabs_component__WEBPACK_IMPORTED_MODULE_12__["TabBlockComponent"],
                    _components_tree_chart_component__WEBPACK_IMPORTED_MODULE_13__["TreeChartComponent"],
                    _components_latex_component__WEBPACK_IMPORTED_MODULE_14__["LatexComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ng_katex__WEBPACK_IMPORTED_MODULE_4__["KatexModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__["HighlightModule"],
                    ngx_dynamic_hooks__WEBPACK_IMPORTED_MODULE_8__["DynamicHooksModule"].forRoot({
                        globalParsers: componentParsers,
                        globalOptions: { convertHTMLEntities: false, sanitize: false }
                    }),
                ],
                providers: [{
                        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__["HIGHLIGHT_OPTIONS"],
                        useValue: {
                            coreLibraryLoader: () => __webpack_require__.e(/*! import() | highlight-js-lib-core */ "highlight-js-lib-core").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/core */ "ECCn", 7)),
                            lineNumbersLoader: () => __webpack_require__.e(/*! import() | highlightjs-line-numbers-js */ "highlightjs-line-numbers-js").then(__webpack_require__.t.bind(null, /*! highlightjs-line-numbers.js */ "gPJM", 7)),
                            languages: {
                                javascript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-javascript */ "highlight-js-lib-languages-javascript").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/javascript */ "TdF3", 7)),
                                scala: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-scala */ "highlight-js-lib-languages-scala").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/scala */ "n3/M", 7))
                            }
                        }
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                entryComponents: [_components_latex_component__WEBPACK_IMPORTED_MODULE_14__["LatexComponent"], ng_katex__WEBPACK_IMPORTED_MODULE_4__["KatexComponent"], ng_katex__WEBPACK_IMPORTED_MODULE_4__["KatexParagraphComponent"], _components_code_block_component__WEBPACK_IMPORTED_MODULE_10__["CodeBlockComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "kFIQ":
/*!***********************************************!*\
  !*** ./src/app/components/latex.component.ts ***!
  \***********************************************/
/*! exports provided: LatexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatexComponent", function() { return LatexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_katex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-katex */ "a7Q/");



const _c0 = ["wrapper"];
const _c1 = ["*"];
class LatexComponent {
    constructor() {
        this.code = "";
    }
    ngAfterViewInit() {
        this.code = '$' + this.content.nativeElement.innerText.trim().replaceAll('\n', '') + '$';
    }
}
LatexComponent.ɵfac = function LatexComponent_Factory(t) { return new (t || LatexComponent)(); };
LatexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LatexComponent, selectors: [["app-latex"]], viewQuery: function LatexComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, ngContentSelectors: _c1, decls: 4, vars: 1, consts: [[2, "display", "none"], ["wrapper", ""], [3, "paragraph"]], template: function LatexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ng-katex-paragraph", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paragraph", ctx.code);
    } }, directives: [ng_katex__WEBPACK_IMPORTED_MODULE_1__["KatexParagraphComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-latex',
                template: `
    <div #wrapper style="display: none">
      <!-- transclusion slot -->
      <ng-content></ng-content>
    </div>
    <ng-katex-paragraph [paragraph]="code"></ng-katex-paragraph>
  `,
                styles: []
            }]
    }], function () { return []; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['wrapper']
        }] }); })();


/***/ }),

/***/ "oNVB":
/*!**********************************************!*\
  !*** ./src/app/components/abcd.component.ts ***!
  \**********************************************/
/*! exports provided: AbcdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbcdComponent", function() { return AbcdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AbcdComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
} if (rf & 2) {
    const symbol_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", symbol_r1.title)("innerHTML", symbol_r1.code, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class AbcdComponent {
    constructor() {
        this.codes = [{ title: "Alpha", code: "&#945;" },
            { title: "Alpha", code: "&#940;" },
            { title: "Alpha", code: "&#913;" },
            { title: "Alpha", code: "&#902;" },
            { title: "Beta", code: "&#946;" },
            { title: "Beta", code: "&#976;" },
            { title: "Beta", code: "&#914;" },
            { title: "Gamma", code: "&#947;" },
            { title: "Gamma", code: "&#915;" },
            { title: "Delta", code: "&#948;" },
            { title: "Delta", code: "&#916;" },
            { title: "Epsilon", code: "&#949;" },
            { title: "Epsilon", code: "&#941;" },
            { title: "Epsilon", code: "&#1013;" },
            { title: "Epsilon", code: "&#1014;" },
            { title: "Epsilon", code: "&#917;" },
            { title: "Epsilon", code: "&#904;" },
            { title: "Zeta", code: "&#950;" },
            { title: "Zeta", code: "&#918;" },
            { title: "Eta", code: "&#951;" },
            { title: "Eta", code: "&#942;" },
            { title: "Eta", code: "&#919;" },
            { title: "Eta", code: "&#905;" },
            { title: "Theta", code: "&#952;" },
            { title: "Theta", code: "&#977;" },
            { title: "Theta", code: "&#920;" },
            { title: "Theta", code: "&#1012;" },
            { title: "Iota", code: "&#953;" },
            { title: "Iota", code: "&#943;" },
            { title: "Iota", code: "&#970;" },
            { title: "Iota", code: "&#912;" },
            { title: "Iota", code: "&#921;" },
            { title: "Iota", code: "&#938;" },
            { title: "Iota", code: "&#906;" },
            { title: "Kappa", code: "&#954;" },
            { title: "Kappa", code: "&#922;" },
            { title: "Lambda", code: "&#955;" },
            { title: "Lambda", code: "&#923;" },
            { title: "Mu", code: "&#956;" },
            { title: "Mu", code: "&#924;" },
            { title: "Nu", code: "&#957;" },
            { title: "Nu", code: "&#925;" },
            { title: "Xi", code: "&#958;" },
            { title: "Xi", code: "&#926;" },
            { title: "Omicron", code: "&#959;" },
            { title: "Omicron", code: "&#972;" },
            { title: "Omicron", code: "&#927;" },
            { title: "Omicron", code: "&#908;" },
            { title: "Pi", code: "&#960;" },
            { title: "Pi", code: "&#982;" },
            { title: "Pi", code: "&#928;" },
            { title: "Rho", code: "&#961;" },
            { title: "Rho", code: "&#929;" },
            { title: "Sigma", code: "&#963;" },
            { title: "Sigma", code: "&#962;" },
            { title: "Sigma", code: "&#1010;" },
            { title: "Sigma", code: "&#891;" },
            { title: "Sigma", code: "&#892;" },
            { title: "Sigma", code: "&#893;" },
            { title: "Sigma", code: "&#931;" },
            { title: "Sigma", code: "&#1017;" },
            { title: "Sigma", code: "&#1021;" },
            { title: "Sigma", code: "&#1022;" },
            { title: "Sigma", code: "&#1023;" },
            { title: "Tau", code: "&#964;" },
            { title: "Tau", code: "&#932;" },
            { title: "Upsilon", code: "&#965;" },
            { title: "Upsilon", code: "&#971;" },
            { title: "Upsilon", code: "&#973;" },
            { title: "Upsilon", code: "&#944;" },
            { title: "Upsilon", code: "&#978;" },
            { title: "Upsilon", code: "&#933;" },
            { title: "Upsilon", code: "&#939;" },
            { title: "Upsilon", code: "&#910;" },
            { title: "Phi", code: "&#968;" },
            { title: "Phi", code: "&#981;" },
            { title: "Phi", code: "&#934;" },
            { title: "Chi", code: "&#967;" },
            { title: "Chi", code: "&#935;" },
            { title: "Psi", code: "&#968;" },
            { title: "Psi", code: "&#936;" },
            { title: "Omega", code: "&#969;" },
            { title: "Omega", code: "&#974;" },
            { title: "Omega", code: "&#937;" },
            { title: "Omega", code: "&#911;" }];
    }
}
AbcdComponent.ɵfac = function AbcdComponent_Factory(t) { return new (t || AbcdComponent)(); };
AbcdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbcdComponent, selectors: [["app-abcd-component"]], decls: 2, vars: 1, consts: [[1, "abcd-holder"], [3, "title", "innerHTML", 4, "ngFor", "ngForOf"], [3, "title", "innerHTML"]], template: function AbcdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbcdComponent_div_1_Template, 1, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.codes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n            width: 20px;\n            margin: 8px;\n            position: relative;\n            height: 100vh;\n        }", "[_nghost-%COMP%]:before {\n            content: \"\";\n            float: left;\n            background: black;\n            width: 0.5px;\n            height: 100%;\n            border-radius: 2px;\n            margin-right: 4px;\n        }", ".abcd-holder[_ngcontent-%COMP%] {\n                overflow: auto;\n                height: 100%;\n        }", ".abcd-holder[_ngcontent-%COMP%]::-webkit-scrollbar{\n              width: 0px;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbcdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-abcd-component',
                template: `
        <div class="abcd-holder">
            <div *ngFor="let symbol of codes"
                [title]="symbol.title"
                [innerHTML]="symbol.code">
            </div>
        </div>
        
    `,
                styles: [
                    `:host {
            width: 20px;
            margin: 8px;
            position: relative;
            height: 100vh;
        }`,
                    `:host:before {
            content: "";
            float: left;
            background: black;
            width: 0.5px;
            height: 100%;
            border-radius: 2px;
            margin-right: 4px;
        }`,
                    `.abcd-holder {
                overflow: auto;
                height: 100%;
        }`,
                    `.abcd-holder::-webkit-scrollbar{
              width: 0px;
        }`
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tTAp":
/*!****************************************************!*\
  !*** ./src/app/components/tree-chart.component.ts ***!
  \****************************************************/
/*! exports provided: TreeChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeChartComponent", function() { return TreeChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/svg */ "Mc1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["wrapper"];
const _c1 = ["svg"];
const _c2 = ["*"];
class TreeChartComponent {
    /*
      id : children is redundant - to find roots there are unnecessary actions
      defining parent much more convenient, so id : parent
      {
        "1": { "parent":"" },
        "2": { "parent":"1" },
        "3": { "parent":"1" },
        "4": { "parent":"3" }
        } */
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.src = '';
    }
    block(text) {
        let groupTag = new _utils_svg__WEBPACK_IMPORTED_MODULE_3__["WrapperSVG"]("g");
        let rectTag = new _utils_svg__WEBPACK_IMPORTED_MODULE_3__["WrapperSVG"]("rect").setAttrs("x", 0, "y", 0, "rx", 5, "fill", "none", "stroke", "black").compile();
        let textContent = document.createTextNode(text);
        let textTag = new _utils_svg__WEBPACK_IMPORTED_MODULE_3__["WrapperSVG"]("text").setAttrs("x", 5, "y", 20).append(textContent).compile();
        return [groupTag.append(rectTag).append(textTag).compile(), textTag, rectTag /* we could adjust width only after adding textTag into svg */];
    }
    path(x1, y1, x2, y2) {
        let dx = Math.abs(x1 - (x1 - x2) / 2);
        let dy = Math.abs(y1 - (y1 - y2) / 2);
        return new _utils_svg__WEBPACK_IMPORTED_MODULE_3__["WrapperSVG"]("path").setAttrs("stroke", "black", "fill", "none", "d", `M ${x1},${y1}
        C ${x1},${dy} ${dx},${dy} ${dx},${dy}
          ${dx},${dy} ${x2},${dy} ${x2},${y2 - 5}`, "marker-end", "url(#arrowhead)").compile();
    }
    getContent() {
        if (this.src) {
            return this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(params => this.http.get("./assets/table_of_contents/" + params['path'] + "/" + this.src, { responseType: 'text' })));
        }
        else
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.content.nativeElement.innerText.trim());
    }
    ngAfterViewInit() {
        const levelOffset = 30;
        const height = 30;
        const levelPadding = 30;
        const width = this.svg.nativeElement.parentElement.offsetWidth;
        this.getContent().subscribe(json => {
            console.log(json);
            let diagram = JSON.parse(json);
            let levels = Array();
            let blocks = new Map();
            // @ts-ignore
            levels[0] = Object.entries(diagram).filter(element => element[1].parent == "").map(element => new _utils_svg__WEBPACK_IMPORTED_MODULE_3__["QueueElement"](element[0], element[1].parent, element[1].background));
            for (let level = 0; level < levels.length; level++) {
                let queue = levels[level];
                let horizontalOffset = width / (queue.length + 1);
                for (let i = 0; i < queue.length; i++) {
                    let element = queue[i];
                    let [groupTag, textTag, rectTag] = this.block(element.id);
                    this.svg.nativeElement.appendChild(groupTag);
                    let point_y = level * levelOffset + level * levelPadding;
                    let point_x = (i + 1) * horizontalOffset + (textTag.clientWidth + 5) / 2;
                    element.in = new _utils_svg__WEBPACK_IMPORTED_MODULE_3__["Point"](point_x, point_y);
                    element.out = new _utils_svg__WEBPACK_IMPORTED_MODULE_3__["Point"](point_x, point_y + height);
                    groupTag.setAttribute("transform", `translate(${(i + 1) * horizontalOffset}, ${point_y})`);
                    rectTag.setAttribute("width", textTag.clientWidth + 5 + "");
                    rectTag.setAttribute("height", `${height}` /*textTag.clientHeight*/);
                    rectTag.setAttribute("fill", `${element.background}`);
                    // @ts-ignore
                    let children = Object.entries(diagram).filter(c => c[1].parent == element.id).map(c => new _utils_svg__WEBPACK_IMPORTED_MODULE_3__["QueueElement"](c[0], c[1].parent, c[1].background));
                    levels[level + 1] = levels[level + 1] ? levels[level + 1].concat(children) : children;
                    blocks.set(element.id, element);
                }
            }
            for (let block of blocks.values()) {
                if (block.parent && blocks.get(block.parent)) {
                    let parent = blocks.get(block.parent);
                    let path = this.path(parent.out.x, parent.out.y, block.in.x, block.in.y);
                    this.svg.nativeElement.appendChild(path);
                }
            }
            this.svg.nativeElement.setAttribute("height", `${levels.length * levelOffset + levels.length * levelPadding}`);
        });
    }
}
TreeChartComponent.ɵfac = function TreeChartComponent_Factory(t) { return new (t || TreeChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
TreeChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeChartComponent, selectors: [["app-tree-chart"]], viewQuery: function TreeChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.svg = _t.first);
    } }, inputs: { src: "src" }, ngContentSelectors: _c2, decls: 8, vars: 0, consts: [[2, "display", "none"], ["wrapper", ""], [2, "width", "100%"], ["svg", ""], ["id", "arrowhead", "markerWidth", "10", "markerHeight", "7", "refX", "0", "refY", "3.5", "orient", "auto"], ["points", "0 0, 5 3.5, 0 7"]], template: function TreeChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "marker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "polygon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tree-chart',
                template: `
  <div #wrapper style="display: none">
    <!-- transclusion slot -->
    <ng-content></ng-content>
  </div>
  <svg #svg style="width:100%">
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 5 3.5, 0 7" />
      </marker>
    </defs>
  </svg>
  `,
                styles: []
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['wrapper']
        }], svg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['svg']
        }], src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/view.component */ "CE1P");






const routes = [
    { path: 'app', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: 'view', component: _components_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"] },
    { path: '', redirectTo: '/app', pathMatch: 'full' },
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

/***/ "vurP":
/*!****************************************************!*\
  !*** ./src/app/components/code-block.component.ts ***!
  \****************************************************/
/*! exports provided: CodeBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBlockComponent", function() { return CodeBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");






const _c0 = ["wrapper"];
const _c1 = ["*"];
// contenteditable="true"
class CodeBlockComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.code = "";
    }
    ngAfterViewInit() {
        if (this.src) {
            this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(params => this.http.get("./assets/table_of_contents/" + params['path'] + "/" + this.src, { responseType: 'text' }))).subscribe(data => this.code = data);
        }
        else
            this.code = this.content.nativeElement.innerText.trim();
    }
}
CodeBlockComponent.ɵfac = function CodeBlockComponent_Factory(t) { return new (t || CodeBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CodeBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeBlockComponent, selectors: [["app-code-block"]], viewQuery: function CodeBlockComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { src: "src" }, ngContentSelectors: _c1, decls: 7, vars: 2, consts: [[2, "display", "none"], ["wrapper", ""], [3, "highlight", "lineNumbers"]], template: function CodeBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.code)("lineNumbers", true);
    } }, directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__["Highlight"]], styles: ["pre[_ngcontent-%COMP%] { margin: 0; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-code-block',
                template: `
    <div #wrapper style="display: none">
      <!-- transclusion slot -->
      <ng-content></ng-content>
    </div>
    <pre>
      <code [highlight]="code" [lineNumbers]="true"></code>
    </pre>
  `,
                styles: [
                    'pre { margin: 0; }',
                ]
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['wrapper']
        }], src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map