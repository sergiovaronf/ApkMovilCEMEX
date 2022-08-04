"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_my-travels_details-trip-request_details-trip-request_module_ts"],{

/***/ 722:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-request/details-trip-request-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTripRequestPageRoutingModule": () => (/* binding */ DetailsTripRequestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _details_trip_request_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-trip-request.page */ 54869);




const routes = [
    {
        path: '',
        component: _details_trip_request_page__WEBPACK_IMPORTED_MODULE_0__.DetailsTripRequestPage
    }
];
let DetailsTripRequestPageRoutingModule = class DetailsTripRequestPageRoutingModule {
};
DetailsTripRequestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsTripRequestPageRoutingModule);



/***/ }),

/***/ 23106:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-request/details-trip-request.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTripRequestPageModule": () => (/* binding */ DetailsTripRequestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _details_trip_request_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-trip-request-routing.module */ 722);
/* harmony import */ var _details_trip_request_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-trip-request.page */ 54869);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);








let DetailsTripRequestPageModule = class DetailsTripRequestPageModule {
};
DetailsTripRequestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__.CmxWebComponentsModule.forRoot(),
            _details_trip_request_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsTripRequestPageRoutingModule
        ],
        declarations: [_details_trip_request_page__WEBPACK_IMPORTED_MODULE_1__.DetailsTripRequestPage]
    })
], DetailsTripRequestPageModule);



/***/ }),

/***/ 54869:
/*!************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-request/details-trip-request.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTripRequestPage": () => (/* binding */ DetailsTripRequestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _details_trip_request_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-trip-request.page.html?ngResource */ 45304);
/* harmony import */ var _details_trip_request_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-trip-request.page.scss?ngResource */ 58162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/travels/travel.service */ 74894);
/* harmony import */ var _interfaces_travels_travel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../interfaces/travels/travel */ 44577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);







let DetailsTripRequestPage = class DetailsTripRequestPage {
    constructor(location, travelService) {
        this.location = location;
        this.travelService = travelService;
        this.travel = new _interfaces_travels_travel__WEBPACK_IMPORTED_MODULE_3__.Travel();
    }
    ngOnInit() {
        this.getData();
    }
    onBack() {
        this.location.back();
    }
    getData() {
        if (this.travelService.id !== null) {
            this.id = this.travelService.id;
            this.travelService.getTravelDetail(this.id).subscribe(data => {
                this.travel = data.data;
            });
        }
    }
};
DetailsTripRequestPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__.TravelService }
];
DetailsTripRequestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-details-trip-request',
        template: _details_trip_request_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_trip_request_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsTripRequestPage);



/***/ }),

/***/ 58162:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-request/details-trip-request.page.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = ".header-text {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  top: 1;\n  right: 50;\n  left: 0;\n  margin-left: 1rem;\n}\n\n.content-card {\n  padding-top: 3rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-bottom: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\nspan.style-name {\n  margin-left: 0.2rem;\n  font-size: small;\n  font-weight: 700;\n}\n\n.attr-name {\n  font-weight: 700;\n}\n\n.attr-user {\n  font-size: x-small;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.attr-trailer {\n  font-size: small;\n  margin-bottom: 1.5rem;\n}\n\n.attr-conductor {\n  font-size: small;\n  margin-top: 1rem;\n}\n\n.attr-document {\n  font-size: smaller;\n  font-weight: 700;\n  padding-bottom: 0.5rem;\n}\n\n.center-cell {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.text-info {\n  font-size: small;\n}\n\nspan.text-archive {\n  font-size: small;\n  color: black;\n  padding-left: 0;\n}\n\n.cell-button {\n  padding-top: 2rem;\n  text-align: right;\n}\n\n.button-cell {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.footer-detal-request {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n\n.btn-action {\n  margin-left: 1.5rem;\n}\n\nspan.text-btn {\n  padding-top: 0.1rem;\n  padding-bottom: 0.1rem;\n  font-size: small;\n}\n\n.modal-list {\n  --cwc-modal-border-width: 5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n}\n\n.card-info {\n  padding: 0.8rem;\n  padding-bottom: 1rem;\n}\n\n.header-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtdHJpcC1yZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUE7RUFDSSxtQkFBQTtBQURKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBTUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEoiLCJmaWxlIjoiZGV0YWlscy10cmlwLXJlcXVlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10ZXh0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxO1xyXG4gICAgcmlnaHQ6IDUwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQtY2FyZHtcclxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5zcGFuLnN0eWxlLW5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYXR0ci1uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgICAgXHJcbn1cclxuXHJcbi5hdHRyLXVzZXIge1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5hdHRyLXRyYWlsZXIge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmF0dHItY29uZHVjdG9ye1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcblxyXG4uYXR0ci1kb2N1bWVudCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmNlbnRlci1jZWxsIHtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLnRleHQtaW5mb3tcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbnNwYW4udGV4dC1hcmNoaXZle1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLmNlbGwtYnV0dG9ue1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIFxyXG59XHJcblxyXG4uYnV0dG9uLWNlbGx7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZvb3Rlci1kZXRhbC1yZXF1ZXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcbi5idG4tYWN0aW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcbn1cclxuc3Bhbi50ZXh0LWJ0biB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4xcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcblxyXG4vL01vZGFsXHJcblxyXG4ubW9kYWwtbGlzdHtcclxuICAgIC0tY3djLW1vZGFsLWJvcmRlci13aWR0aCA6IDVyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTsgICAgXHJcbn1cclxuXHJcbi5jYXJkLWluZm8ge1xyXG4gICAgcGFkZGluZzogMC44cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5oZWFkZXItY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbn0iXX0= */";

/***/ }),

/***/ 45304:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-request/details-trip-request.page.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-header design-version=\"v2\" slot=\"header\" show-Menu-Button=\"false\" show-cemex-logo=\"false\">\r\n  <div class=\"header-text\">\r\n    <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px;\" (click)=\"onBack()\"></ion-icon>\r\n    <div class=\"attr-name\" style=\"padding-left: 1rem;\">Viaje {{travel.codeTravel}}</div>\r\n  </div>\r\n</cwc-header>\r\n<div slot=\"main\" class=\"content-card\">\r\n  <cwc-card class=\"card-info\" design-version=\"v1\">\r\n    <div class=\"card-content\">\r\n      <div class=\"header-card\">\r\n        <div class=\"avatar-info\">\r\n          <div class=\"attr-name\">CONDUCTOR</div>\r\n          <span class=\"style-name\">Pendiente por confirmar</span>\r\n        </div>\r\n      </div>\r\n\r\n      <hr color=\"#D0D0D0\" />\r\n      <cwc-grid class=\"demo-grid center-cell\" style=\"padding-top: 0.5rem;\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"attr-user\">ORIGEN</div>\r\n          <span class=\"attr-detail\">{{travel.source}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"attr-user\">DESTINO</div>\r\n          <span class=\"attr-detail\">{{travel.destiny}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"attr-user\">PRODUCTO</div>\r\n          <span class=\"attr-detail\">{{travel.productName}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">FECHA Y HORA DE CITA</div>\r\n          <span class=\"attr-detail\">{{travel.dateTravel}} {{travel.timerStar}}</span>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">CANTIDAD</div>\r\n          <span class=\"attr-detail\">{{travel.amount}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">MODELO</div>\r\n          <span class=\"attr-detail\">{{travel.vehicleModelName}}</span>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">NUMERO DE PLACA</div>\r\n          <span class=\"attr-detail\">{{travel.vehicleLissenceName}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">CLIENTE</div>\r\n          <span class=\"attr-detail\">{{travel.companyName}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <hr color=\"#D0D0D0\" />\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell class=\"flex flex__align--bullseye\" style=\"text-align: end;\">\r\n          <cwc-button variant=\"link\">\r\n            <div style=\"font-size: 15px; font-weight: normal;\">ASIGNAR CONDUCTOR</div>\r\n          </cwc-button>\r\n        </cwc-cell>\r\n        <cwc-cell class=\"flex flex__align--bullseye\" style=\"text-align: end;\">\r\n          <cwc-button variant=\"link\">\r\n            <div style=\"font-size: 15px; font-weight: normal;\">CANCELAR</div>\r\n          </cwc-button>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n    </div>\r\n  </cwc-card>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-travels_details-trip-request_details-trip-request_module_ts.js.map