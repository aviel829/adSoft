webpackJsonp([0],{

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Dev\Private\Ionic\adSoft\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Dev\Private\Ionic\adSoft\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'age-about',template:/*ion-inline-start:"C:\Dev\Private\Ionic\adSoft\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Dev\Private\Ionic\adSoft\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Dev\Private\Ionic\adSoft\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Dev\Private\Ionic\adSoft\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_locales_he__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_modal_event_modal__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






Object(__WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_4__angular_common_locales_he__["a" /* default */]);
var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
    }
    HomePage.prototype.addEvent = function (editMode, start, end, title) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__event_modal_event_modal__["a" /* EventModalPage */], { selectedDay: this.selectedDay, startTime: start, endTime: end, editMode: editMode, title: title });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    HomePage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    HomePage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var title = event.title;
        this.addEvent(true, start, end, title);
        // let alert = this.alertCtrl.create({
        //   title: '' + event.title,
        //   subTitle: 'From: ' + start + '<br>To: ' + end,
        //   buttons: ['OK']
        // })
        // alert.present();
    };
    HomePage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Dev\Private\Ionic\adSoft\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addEvent()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <calendar [eventSource]="eventSource" [calendarMode]="calendar.mode" [currentDate]="calendar.currentDate" (onEventSelected)="onEventSelected($event)"\n\n    (onTitleChanged)="onViewTitleChanged($event)" (onTimeSelected)="onTimeSelected($event)" step="30" class="calendar">\n\n  </calendar>\n\n  <h2>Welcome to Ionic!</h2>\n\n  <p>\n\n    This starter project comes with simple tabs-based layout for apps that are going to primarily use a Tabbed UI.\n\n  </p>\n\n  <p>\n\n    Take a look at the\n\n    <code>src/pages/</code> directory to add or change tabs, update any existing page or create new pages.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Dev\Private\Ionic\adSoft\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EventModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var EventModalPage = (function () {
    function EventModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false, title: '' };
        this.minDate = new Date().toISOString();
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        var editMode = this.navParams.get('editMode');
        if (editMode) {
            this.event.startTime = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('startTime')).format();
            this.event.endTime = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('endTime')).format();
            this.event.title = this.navParams.get('title');
        }
        else {
            this.event.startTime = preselectedDate;
            this.event.endTime = preselectedDate;
        }
    }
    EventModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EventModalPage.prototype.save = function () {
        this.viewCtrl.dismiss(this.event);
    };
    EventModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventModalPage');
    };
    EventModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-event-modal',template:/*ion-inline-start:"C:\Dev\Private\Ionic\adSoft\src\pages\event-modal\event-modal.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Event Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Title" [(ngModel)]="event.title"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Start</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>End</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>All Day?</ion-label>\n      <ion-checkbox [(ngModel)]="event.allDay"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button full icon-left (click)="save()">\n    <ion-icon name="checkmark"></ion-icon> Add Event\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Dev\Private\Ionic\adSoft\src\pages\event-modal\event-modal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _c || Object])
    ], EventModalPage);
    return EventModalPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=event-modal.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_dialogs__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_logger_app_core_providers__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_logger_app_core_providers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_logger_app_core_providers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_signaturepad__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vendor_data_service_data_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__vendor_demo_service_demo_service__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vendor_user_service_user_service__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__vendor_alert_service_alert_service__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__vendor_dialog_service_dialog_service__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__vendor_toast_service_toast_service__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__vendor_localstorage_service_localstorage_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__vendor_lookup_service_lookup_service__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__vendor_event_service_event_service__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__vendor_auth_interceptor_auth_service__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__vendor_adal_service_adal_service__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__vendor_formbuilder_service_shared_formbuilder_service__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__vendor_notification_service_notification_service__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__vendor_network_network_service__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__vendor_signaturefield_service_signaturefield_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__vendor_auth_interceptor_auth_factory__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_event_modal_event_modal__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ionic2_calendar__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_common__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { Logger } from "angular2-logger/core";
 // fix build error resolving symbol values statically



//VENDOR
// import { Logger } from "../vendor/logger.service/logger.service";




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_event_modal_event_modal__["a" /* EventModalPage */],
                __WEBPACK_IMPORTED_MODULE_29__vendor_signaturefield_service_signaturefield_component__["a" /* SignatureFieldComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_33_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                // CloudModule.forRoot(CloudSettingsToken),
                __WEBPACK_IMPORTED_MODULE_31__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["f" /* ReactiveFormsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_event_modal_event_modal__["a" /* EventModalPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], useValue: "he-IL" },
                __WEBPACK_IMPORTED_MODULE_15__vendor_data_service_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_16__vendor_demo_service_demo_service__["a" /* DemoService */],
                __WEBPACK_IMPORTED_MODULE_17__vendor_user_service_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_dialogs__["a" /* Dialogs */],
                __WEBPACK_IMPORTED_MODULE_19__vendor_dialog_service_dialog_service__["a" /* DialogService */],
                __WEBPACK_IMPORTED_MODULE_18__vendor_alert_service_alert_service__["a" /* Alert */],
                __WEBPACK_IMPORTED_MODULE_20__vendor_toast_service_toast_service__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_logger_app_core_providers__["LOG_LOGGER_PROVIDERS"],
                // Logger,
                __WEBPACK_IMPORTED_MODULE_24__vendor_auth_interceptor_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_25__vendor_adal_service_adal_service__["a" /* AdalService */],
                __WEBPACK_IMPORTED_MODULE_26__vendor_formbuilder_service_shared_formbuilder_service__["a" /* FormBuilderService */],
                __WEBPACK_IMPORTED_MODULE_21__vendor_localstorage_service_localstorage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_28__vendor_network_network_service__["a" /* NetworkService */],
                __WEBPACK_IMPORTED_MODULE_22__vendor_lookup_service_lookup_service__["a" /* LookupService */],
                __WEBPACK_IMPORTED_MODULE_23__vendor_event_service_event_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_27__vendor_notification_service_notification_service__["a" /* NotificationService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_31__angular_http__["c" /* Http */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_30__vendor_auth_interceptor_auth_factory__["a" /* httpFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_31__angular_http__["f" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_31__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_21__vendor_localstorage_service_localstorage_service__["a" /* LocalStorageService */]]
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================
/**
  * LOGGER FOR ANGULAR 2.0.0.
**/
var Logger = (function () {
    /**
     * logger constructor()
     **/
    function Logger(_logger) {
        this._logger = _logger;
    }
    /**
     * info()
     * @input : info message log(message).
     * @output : throw message into the console.
     **/
    Logger.prototype.info = function (message, param) {
        param ? this._logger.info(message, param) : this._logger.info(message);
    };
    /**
    * debug()
    * @input : debug message log(message).
    * @output : throw message into the console.
    **/
    Logger.prototype.debug = function (message, param) {
        param ? this._logger.debug(message, param) : this._logger.info(message);
    };
    /**
    * error()
    * @input : info message log(message).
    * @output : throw message into the console.
    **/
    Logger.prototype.error = function (message, param) {
        param ? this._logger.error(message, param) : this._logger.info(message);
    };
    /**
   * warning()
   * @input : info message log(message).
   * @output : throw message into the console.
   **/
    Logger.prototype.warning = function (message, param) {
        param ? this._logger.warning(message, param) : this._logger.info(message);
    };
    Logger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [Logger])
    ], Logger);
    return Logger;
}());

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Dev\Private\Ionic\adSoft\src\app\app.html"*/'<ion-menu [content]="content" [swipeEnabled]="true">\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n  \n\n    <ion-content>\n\n      <ion-list>\n\n        <button menuClose ion-item *ngFor="let p of pages" (tap)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  \n\n  </ion-menu>\n\n  \n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n\n'/*ion-inline-end:"C:\Dev\Private\Ionic\adSoft\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_service_logger_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
  * DATA SERVICE FOR ANGULAR 2.0.0.
**/
var DemoService = (function () {
    function DemoService(_logger) {
        this.loadDemoData();
        this.logger = _logger;
    }
    DemoService.prototype.ngOnInit = function () {
        this.demoMode = false;
    };
    DemoService.prototype.loadDemoData = function () {
        this.lookupsDemo = {
            "cutoff": [
                {
                    "id": null,
                    "value": "מלל של ניתוק"
                }
            ],
            "serviceproductinventoryproduct": [
                {
                    "id": "da4b0162-3f08-e711-80d4-00155dcce607",
                    "value": "לוח מקשים -665"
                },
                {
                    "id": "28442cf4-d41a-e711-80d6-00155dcce607",
                    "value": "Test"
                },
                {
                    "id": "5b42060c-d51a-e711-80d6-00155dcce607",
                    "value": "Test"
                },
                {
                    "id": "3727cb55-ae1e-e711-80d6-00155dcce607",
                    "value": "test"
                },
                {
                    "id": "4cb23044-2f21-e711-80d7-00155dcce607",
                    "value": "1423"
                },
                {
                    "id": "ac93207c-9926-e711-80d7-00155dcce607",
                    "value": "‎Bundle- ‎TEST2"
                },
                {
                    "id": "df8f2655-1335-e711-80d7-00155dcce607",
                    "value": "‎התקנת  מערכת איתור פעילה- ‎דמי אכיפה - רכב פרטי"
                },
                {
                    "id": "1aa74b02-1435-e711-80d7-00155dcce607",
                    "value": "‎התקנת  מערכת איתור פעילה- ‎MAX"
                },
                {
                    "id": "7b7d4737-1435-e711-80d7-00155dcce607",
                    "value": "‎התקנת  מערכת איתור פעילה- ‎MAX"
                },
                {
                    "id": "f58c8c2b-ff39-e711-80d8-00155dcce607",
                    "value": "‎מערכת פעילה+מיגון ועלוקה- ‎MAX"
                },
                {
                    "id": "4a82a792-a948-e711-80d9-00155dcce607",
                    "value": "‎פעילה + דמי מנוי- ‎123"
                },
                {
                    "id": "2bdef9be-a948-e711-80d9-00155dcce607",
                    "value": "‎מערכת פעילה+מיגון ועלוקה- ‎123"
                },
                {
                    "id": "ad8679a2-a64a-e711-80d9-00155dcce607",
                    "value": "‎הוספת לוח מקשים- ‎TEST2"
                },
                {
                    "id": "7ef1fa10-b44a-e711-80d9-00155dcce607",
                    "value": "‎התקנת  מערכת איתור פעילה- ‎123"
                },
                {
                    "id": "112610ab-b84a-e711-80d9-00155dcce607",
                    "value": "‎החלפת לוח מקשים- ‎החלפת לוח מקשים"
                },
                {
                    "id": "415a981d-c24a-e711-80d9-00155dcce607",
                    "value": "‎TEST2- ‎call center"
                },
                {
                    "id": "bad9e564-9359-e711-80db-00155dcce607",
                    "value": "‎הוספת עלוקה- ‎הוספת עלוקה"
                },
                {
                    "id": "78410041-f75b-e711-80db-00155dcce607",
                    "value": "‎התקנת  מערכת איתור פעילה- ‎CE824V"
                },
                {
                    "id": "dfe5dd98-f95b-e711-80db-00155dcce607",
                    "value": null
                },
                {
                    "id": "c3b089e7-065c-e711-80db-00155dcce607",
                    "value": "‎מערכת פעילה+מיגון ועלוקה- ‎מערכת פעילה+מיגון ועלוקה"
                },
                {
                    "id": "1f1ec80c-075c-e711-80db-00155dcce607",
                    "value": "‎מערכת פעילה+מיגון ועלוקה- ‎מערכת פעילה+מיגון ועלוקה"
                },
                {
                    "id": "75abb512-095c-e711-80db-00155dcce607",
                    "value": "‎התקנת  מערכת איתור פעילה- ‎התקנת  מערכת איתור פעילה"
                },
                {
                    "id": "9bdf414b-ec5f-e711-80db-00155dcce607",
                    "value": "‎123- ‎123"
                },
                {
                    "id": "65dfcb56-ec5f-e711-80db-00155dcce607",
                    "value": "‎123- ‎123"
                },
                {
                    "id": "4d1785ac-ad60-e711-80db-00155dcce607",
                    "value": "‎התקנת  מערכת איתור פעילה- ‎CE824V"
                },
                {
                    "id": "16c66234-4661-e711-80db-00155dcce607",
                    "value": "‎התקנת  מערכת איתור פעילה- ‎CE824V"
                },
                {
                    "id": "ce372559-7964-e711-80db-00155dcce607",
                    "value": "‎התקנת  מערכת איתור פעילה- ‎ big bundle "
                },
                {
                    "id": "741614ac-be64-e711-80db-00155dcce607",
                    "value": "‎*בדיקות מוצר נועם- ‎Marat Overlapping Test"
                },
                {
                    "id": "7911f62d-fb64-e711-80db-00155dcce607",
                    "value": "‎גלאי רוורס- ‎Bundle"
                },
                {
                    "id": "aeb703d0-9f68-e711-80db-00155dcce607",
                    "value": "‎ big bundle - ‎ big bundle "
                }
            ],
            "assetneutralizationmethod": [
                {
                    "id": "1",
                    "value": "אין"
                },
                {
                    "id": "2",
                    "value": "קודן"
                },
                {
                    "id": "3",
                    "value": "שלט קוד"
                },
                {
                    "id": "4",
                    "value": "לחצן"
                },
                {
                    "id": "5",
                    "value": "רב קודן"
                },
                {
                    "id": "6",
                    "value": "רוזמן"
                },
                {
                    "id": "7",
                    "value": "RFID"
                },
                {
                    "id": "8",
                    "value": "שלט מאסטר"
                }
            ],
            "reportstatus": [
                {
                    "id": "1",
                    "value": "אין"
                },
                {
                    "id": "2",
                    "value": "קודן"
                },
                {
                    "id": "3",
                    "value": "שלט קוד"
                },
                {
                    "id": "4",
                    "value": "לחצן"
                },
                {
                    "id": "5",
                    "value": "רב קודן"
                },
                {
                    "id": "6",
                    "value": "רוזמן"
                },
                {
                    "id": "7",
                    "value": "RFID"
                },
                {
                    "id": "8",
                    "value": "שלט מאסטר"
                }
            ],
            "detectionsystemlocation": [
                {
                    "id": "1",
                    "value": "אין"
                },
                {
                    "id": "2",
                    "value": "קודן"
                },
                {
                    "id": "3",
                    "value": "שלט קוד"
                },
                {
                    "id": "4",
                    "value": "לחצן"
                },
                {
                    "id": "5",
                    "value": "רב קודן"
                },
                {
                    "id": "6",
                    "value": "רוזמן"
                },
                {
                    "id": "7",
                    "value": "RFID"
                },
                {
                    "id": "8",
                    "value": "שלט מאסטר"
                }
            ],
            "protectionsystemversionid": [
                {
                    "id": "1",
                    "value": "אין"
                },
                {
                    "id": "2",
                    "value": "קודן"
                },
                {
                    "id": "3",
                    "value": "שלט קוד"
                },
                {
                    "id": "4",
                    "value": "לחצן"
                },
                {
                    "id": "5",
                    "value": "רב קודן"
                },
                {
                    "id": "6",
                    "value": "רוזמן"
                },
                {
                    "id": "7",
                    "value": "RFID"
                },
                {
                    "id": "8",
                    "value": "שלט מאסטר"
                }
            ],
            "alukaposition": [
                {
                    "id": "1",
                    "value": "אין"
                },
                {
                    "id": "2",
                    "value": "קודן"
                },
                {
                    "id": "3",
                    "value": "שלט קוד"
                },
                {
                    "id": "4",
                    "value": "לחצן"
                },
                {
                    "id": "5",
                    "value": "רב קודן"
                },
                {
                    "id": "6",
                    "value": "רוזמן"
                },
                {
                    "id": "7",
                    "value": "RFID"
                },
                {
                    "id": "8",
                    "value": "שלט מאסטר"
                }
            ],
            "product": [
                {
                    "id": "d69b65eb-7a0f-e611-80d1-00155dcc27de",
                    "value": "test product"
                },
                {
                    "id": "8fb53f1c-7c0f-e611-80d1-00155dcc27de",
                    "value": "test2 product"
                },
                {
                    "id": "7ff354eb-11d1-e611-80cd-00155dcce607",
                    "value": "*בדיקות מוצר נועם"
                },
                {
                    "id": "fb096d7b-cfe3-e611-80ce-00155dcce607",
                    "value": "123"
                },
                {
                    "id": "1132e3e7-1bfc-e611-80d4-00155dcce607",
                    "value": "TEST2"
                },
                {
                    "id": "3fb02afc-3d08-e711-80d4-00155dcce607",
                    "value": "דמי אכיפה - רכב פרטי"
                },
                {
                    "id": "ab86cd41-3e08-e711-80d4-00155dcce607",
                    "value": "הרחבת אחריות"
                },
                {
                    "id": "d84b0162-3f08-e711-80d4-00155dcce607",
                    "value": "הוספת לוח מקשים"
                },
                {
                    "id": "55cf4e4d-0b35-e711-80d7-00155dcce607",
                    "value": "פעילה + דמי מנוי"
                },
                {
                    "id": "807c0520-0c35-e711-80d7-00155dcce607",
                    "value": "התקנת  מערכת איתור פעילה"
                },
                {
                    "id": "19270fd0-1335-e711-80d7-00155dcce607",
                    "value": "CE824V"
                },
                {
                    "id": "0867dff6-fe39-e711-80d8-00155dcce607",
                    "value": "מערכת פעילה+מיגון ועלוקה"
                },
                {
                    "id": "c06a8cc9-7052-e711-80db-00155dcce607",
                    "value": "Marat Overlapping Test"
                },
                {
                    "id": "028788d1-ca54-e711-80db-00155dcce607",
                    "value": "Call Center  - דלק מוטורס"
                },
                {
                    "id": "a73f61d1-6556-e711-80db-00155dcce607",
                    "value": "456"
                },
                {
                    "id": "6b64a1a0-c05a-e711-80db-00155dcce607",
                    "value": "גלאי רוורס"
                },
                {
                    "id": "760f2b8a-9360-e711-80db-00155dcce607",
                    "value": "מערכת פעילה + דמי מנוי"
                },
                {
                    "id": "c581917e-c960-e711-80db-00155dcce607",
                    "value": "מערכת פעילה+מיגון ועלוקה-201707041800196091"
                },
                {
                    "id": "d7072c68-1e62-e711-80db-00155dcce607",
                    "value": " big bundle "
                },
                {
                    "id": "99f1ea21-2862-e711-80db-00155dcce607",
                    "value": "test"
                },
                {
                    "id": "cb606cbb-3e62-e711-80db-00155dcce607",
                    "value": "biggest bundle"
                },
                {
                    "id": "bb75c6ac-f369-e711-80dc-00155dcce607",
                    "value": "בדיקה דלית"
                },
                {
                    "id": "677373e7-f469-e711-80dc-00155dcce607",
                    "value": "בדיקת מוצרי חבילה"
                },
                {
                    "id": "89787071-d6a1-e611-80d4-00155dcceb81",
                    "value": "test2 product-201611031701489023"
                },
                {
                    "id": "4f64ce4b-d9a1-e611-80d4-00155dcceb81",
                    "value": "Family"
                },
                {
                    "id": "0e7dbe24-daa1-e611-80d4-00155dcceb81",
                    "value": "Bundle"
                },
                {
                    "id": "5f4340cc-8dbf-e611-80c9-00155dcceb86",
                    "value": "call center"
                },
                {
                    "id": "648c758e-b1c5-e611-80ca-00155dcceb86",
                    "value": "החלפת לוח מקשים"
                },
                {
                    "id": "efd6b9c3-b1c5-e611-80ca-00155dcceb86",
                    "value": "הוספת עלוקה"
                }
            ]
        };
        this.fieldsDemo = {
            "detect": [
                {
                    "key": "firstCutoffId",
                    "label": "ניתוק ראשון",
                    "controlType": "drop-down",
                    "lookupName": "cutoff",
                    "required": true,
                    "order": 1,
                    "disabled": false
                },
                {
                    "key": "cutoff",
                    "label": "ניתוק אחר",
                    "lookupName": "cutoff",
                    "controlType": "number",
                    "required": true,
                    "order": 2,
                    "placeholder": "אנא הקלד ניתוק",
                    "disabled": false
                },
                {
                    "key": "neutralizationMethod",
                    "label": "שיטת ניטרול ",
                    "controlType": "drop-down",
                    "lookupName": "assetneutralizationmethod",
                    "required": true,
                    "order": 3,
                    "disabled": false
                },
                {
                    "key": "neutralizationCode",
                    "label": "קוד נטרול",
                    "controlType": "text-box",
                    "maxlength": "4",
                    "value": "neutralizationCode",
                    "required": true,
                    "order": 4,
                    "placeholder": "אנא הקלד קוד",
                    "disabled": false
                },
                {
                    "key": "removedSerialProduct",
                    "label": "RMU משדר מפורק",
                    "controlType": "text-box",
                    "value": "removedSerialProduct",
                    "required": false,
                    "order": 5,
                    "disabled": false
                },
                {
                    "key": "cutoffConnection",
                    "label": "גישור ניתוק",
                    "controlType": "toggle",
                    "required": false,
                    "order": 6,
                    "disabled": false
                },
                {
                    "key": "detectionSystemLocation",
                    "label": "מיקום מערכת איתור ",
                    "controlType": "drop-down",
                    "lookupName": "detectionsystemlocation",
                    "required": false,
                    "order": 7,
                    "disabled": false
                },
                {
                    "key": "installatorlRemarks",
                    "label": "הערות מתקין",
                    "controlType": "textarea",
                    "required": true,
                    "order": 8,
                    "rows": 6,
                    "disabled": false
                },
                {
                    "key": "signature",
                    "label": "חתימת לקוח",
                    "controlType": "signature",
                    "icon": "arrow-dropdown",
                    "showDetails": false,
                    "required": true,
                    "order": 9
                },
                {
                    "key": "save",
                    "label": "שמירה",
                    "controlType": "engineeringtest",
                    "labelA": "קוד תקשורת",
                    "required": false,
                    "order": 10,
                    "disabled": false,
                    "onClick": "sendData",
                    "onClickA": "openUrl",
                    "class": "col-6",
                    "color": "dark",
                    "colorA": "danger"
                }
            ],
            "detectProtect": [
                {
                    "key": "firstCutoffId",
                    "label": "ניתוק ראשון",
                    "controlType": "drop-down",
                    "lookupName": "cutoff",
                    "required": true,
                    "order": 1,
                    "disabled": false
                },
                {
                    "key": "cutoff",
                    "label": "ניתוק אחר",
                    "lookupName": "cutoff",
                    "controlType": "text-box",
                    "required": true,
                    "order": 2,
                    "placeholder": "אנא הקלד ניתוק",
                    "disabled": false
                },
                {
                    "key": "neutralizationMethod",
                    "label": "שיטת ניטרול ",
                    "controlType": "drop-down",
                    "lookupName": "assetneutralizationmethod",
                    "required": true,
                    "order": 3,
                    "disabled": false
                },
                {
                    "key": "neutralizationCode",
                    "label": "קוד נטרול",
                    "controlType": "text-box",
                    "maxlength": "4",
                    "value": "neutralizationCode",
                    "required": true,
                    "order": 4,
                    "placeholder": "אנא הקלד קוד",
                    "disabled": false
                },
                {
                    "key": "removedSerialProduct",
                    "label": "RMU משדר מפורק",
                    "controlType": "text-box",
                    "value": "removedSerialProduct",
                    "required": false,
                    "order": 5,
                    "disabled": false
                },
                {
                    "key": "cutoffConnection",
                    "label": "גישור ניתוק",
                    "controlType": "toggle",
                    "required": false,
                    "order": 6,
                    "disabled": false
                },
                {
                    "key": "detectionSystemLocation",
                    "label": "מיקום מערכת איתור ",
                    "controlType": "drop-down",
                    "lookupName": "detectionsystemlocation",
                    "required": false,
                    "order": 7,
                    "disabled": false
                },
                {
                    "key": "installatorlRemarks",
                    "label": "הערות מתקין",
                    "controlType": "textarea",
                    "required": true,
                    "order": 8,
                    "rows": 6,
                    "disabled": false
                },
                {
                    "key": "protectionSystemVersionid",
                    "label": "גרסת מערכת מיגון ",
                    "controlType": "drop-down",
                    "lookupName": "protectionsystemversionid",
                    "required": false,
                    "order": 9,
                    "disabled": false
                },
                {
                    "key": "protectionSystemSN",
                    "label": "מספר אצווה - מח מיגון",
                    "value": "protectionSystemSN",
                    "controlType": "text-box",
                    "required": false,
                    "order": 10,
                    "placeholder": "אנא הקלד מספר",
                    "disabled": false
                },
                {
                    "key": "protectionSystemBatchNumber",
                    "label": "מספר סריאלי - מח מיגון",
                    "controlType": "text-box",
                    "value": "protectionSystemBatchNumber",
                    "required": false,
                    "order": 11,
                    "placeholder": "אנא הקלד מספר",
                    "disabled": false
                },
                {
                    "key": "remoteControlIntegration",
                    "label": "איחוד שלטים",
                    "controlType": "toggle",
                    "required": false,
                    "order": 12,
                    "disabled": false
                },
                {
                    "key": "signature",
                    "label": "חתימת לקוח",
                    "controlType": "signature",
                    "icon": "arrow-dropdown",
                    "showDetails": false,
                    "required": true,
                    "order": 13
                },
                {
                    "key": "save",
                    "label": "שמירה",
                    "labelA": "קוד תקשורת",
                    "controlType": "engineeringtest",
                    "required": false,
                    "order": 14,
                    "disabled": false,
                    "onClick": "sendData",
                    "onClickA": "openUrl",
                    "class": "col-6",
                    "color": "dark",
                    "colorA": "danger"
                }
            ],
            "detectProtectLeech": [
                {
                    "key": "firstCutoffId",
                    "label": "ניתוק ראשון",
                    "controlType": "drop-down",
                    "lookupName": "cutoff",
                    "required": true,
                    "order": 1,
                    "disabled": false
                },
                {
                    "key": "cutoff",
                    "label": "ניתוק אחר",
                    "lookupName": "cutoff",
                    "controlType": "text-box",
                    "required": true,
                    "order": 2,
                    "placeholder": "אנא הקלד ניתוק",
                    "disabled": false
                },
                {
                    "key": "neutralizationMethod",
                    "label": "שיטת ניטרול ",
                    "controlType": "drop-down",
                    "lookupName": "assetneutralizationmethod",
                    "required": true,
                    "order": 3,
                    "disabled": false
                },
                {
                    "key": "neutralizationCode",
                    "label": "קוד נטרול",
                    "controlType": "text-box",
                    "maxlength": "4",
                    "value": "neutralizationCode",
                    "required": true,
                    "order": 4,
                    "placeholder": "אנא הקלד קוד",
                    "disabled": false
                },
                {
                    "key": "removedSerialProduct",
                    "label": "RMU משדר מפורק",
                    "controlType": "text-box",
                    "value": "removedSerialProduct",
                    "required": false,
                    "order": 5,
                    "disabled": false
                },
                {
                    "key": "cutoffConnection",
                    "label": "גישור ניתוק",
                    "controlType": "toggle",
                    "required": false,
                    "order": 6,
                    "disabled": false
                },
                {
                    "key": "detectionSystemLocation",
                    "label": "מיקום מערכת איתור ",
                    "controlType": "drop-down",
                    "lookupName": "detectionsystemlocation",
                    "required": false,
                    "order": 7,
                    "disabled": false
                },
                {
                    "key": "installatorlRemarks",
                    "label": "הערות מתקין",
                    "controlType": "text-box",
                    "value": "installatorlRemarks",
                    "required": true,
                    "order": 8,
                    "placeholder": "אנא הקלד הערות",
                    "disabled": false
                },
                {
                    "key": "protectionSystemVersionid",
                    "label": "גרסת מערכת מיגון ",
                    "controlType": "drop-down",
                    "lookupName": "protectionsystemversionid",
                    "required": false,
                    "order": 9,
                    "disabled": false
                },
                {
                    "key": "protectionSystemSN",
                    "label": "מספר אצווה - מח מיגון",
                    "value": "protectionSystemSN",
                    "controlType": "text-box",
                    "required": false,
                    "order": 10,
                    "placeholder": "אנא הקלד מספר",
                    "disabled": false
                },
                {
                    "key": "protectionSystemBatchNumber",
                    "label": "מספר סריאלי - מח מיגון",
                    "controlType": "text-box",
                    "value": "protectionSystemBatchNumber",
                    "required": false,
                    "order": 12,
                    "placeholder": "אנא הקלד מספר",
                    "disabled": false
                },
                {
                    "key": "remoteControlIntegration",
                    "label": "איחוד שלטים",
                    "controlType": "toggle",
                    "required": false,
                    "order": 13,
                    "disabled": false
                },
                {
                    "key": "leechSN",
                    "label": "קוד סריאלי - עלוקה",
                    "controlType": "text-box",
                    "value": "leechSN",
                    "required": false,
                    "order": 14,
                    "disabled": false
                },
                {
                    "key": "leechLearningCode",
                    "label": "קוד לימוד עלוקה",
                    "controlType": "text-box",
                    "value": "leechLearningCode",
                    "required": false,
                    "order": 15,
                    "disabled": false
                },
                {
                    "key": "lecchLocation",
                    "label": "מיקום עלוקה ",
                    "controlType": "drop-down",
                    "lookupName": "protectionsystemversionid",
                    "required": false,
                    "order": 16,
                    "disabled": false
                },
                {
                    "key": "signature",
                    "label": "חתימת לקוח",
                    "controlType": "signature",
                    "icon": "arrow-dropdown",
                    "showDetails": false,
                    "required": true,
                    "order": 17
                },
                {
                    "key": "save",
                    "label": "שמירה",
                    "labelA": "קוד תקשורת",
                    "controlType": "engineeringtest",
                    "required": false,
                    "order": 18,
                    "disabled": false,
                    "onClick": "sendData",
                    "onClickA": "openUrl",
                    "class": "col-6",
                    "color": "dark",
                    "colorA": "danger"
                }
            ],
            "Protect": [
                {
                    "key": "firstCutoffId",
                    "label": "ניתוק ראשון",
                    "controlType": "drop-down",
                    "lookupName": "cutoff",
                    "required": true,
                    "order": 1,
                    "disabled": false
                },
                {
                    "key": "cutoff",
                    "label": "ניתוק אחר",
                    "lookupName": "cutoff",
                    "controlType": "text-box",
                    "required": true,
                    "order": 2,
                    "placeholder": "אנא הקלד ניתוק",
                    "disabled": false
                },
                {
                    "key": "neutralizationMethod",
                    "label": "שיטת ניטרול ",
                    "controlType": "drop-down",
                    "lookupName": "assetneutralizationmethod",
                    "required": true,
                    "order": 3,
                    "disabled": false
                },
                {
                    "key": "neutralizationCode",
                    "label": "קוד נטרול",
                    "controlType": "text-box",
                    "maxlength": "4",
                    "value": "neutralizationCode",
                    "required": true,
                    "order": 4,
                    "placeholder": "אנא הקלד קוד",
                    "disabled": false
                },
                {
                    "key": "installatorlRemarks",
                    "label": "הערות מתקין",
                    "controlType": "textarea",
                    "required": true,
                    "order": 5,
                    "rows": 6,
                    "disabled": false
                },
                {
                    "key": "protectionSystemVersionid",
                    "label": "גרסת מערכת מיגון ",
                    "controlType": "drop-down",
                    "lookupName": "protectionsystemversionid",
                    "required": false,
                    "order": 6,
                    "disabled": false
                },
                {
                    "key": "protectionSystemSN",
                    "label": "מספר אצווה - מח מיגון",
                    "value": "protectionSystemSN",
                    "controlType": "text-box",
                    "required": false,
                    "order": 7,
                    "placeholder": "אנא הקלד מספר",
                    "disabled": false
                },
                {
                    "key": "protectionSystemBatchNumber",
                    "label": "מספר סריאלי - מח מיגון",
                    "controlType": "text-box",
                    "value": "protectionSystemBatchNumber",
                    "required": false,
                    "order": 8,
                    "placeholder": "אנא הקלד מספר",
                    "disabled": false
                },
                {
                    "key": "remoteControlIntegration",
                    "label": "איחוד שלטים",
                    "controlType": "toggle",
                    "required": false,
                    "order": 9,
                    "disabled": false
                },
                {
                    "key": "signature",
                    "label": "חתימת לקוח",
                    "controlType": "signature",
                    "icon": "arrow-dropdown",
                    "showDetails": false,
                    "required": true,
                    "order": 10
                },
                {
                    "key": "save",
                    "label": "שמירה",
                    "labelA": "קוד תקשורת",
                    "controlType": "engineeringtest",
                    "required": false,
                    "order": 11,
                    "disabled": false,
                    "onClick": "sendData",
                    "onClickA": "openUrl",
                    "class": "col-6",
                    "color": "dark",
                    "colorA": "danger"
                }
            ],
            "protectLeech": [
                {
                    "key": "firstCutoffId",
                    "label": "ניתוק ראשון",
                    "controlType": "drop-down",
                    "lookupName": "cutoff",
                    "required": true,
                    "order": 1,
                    "disabled": false
                },
                {
                    "key": "cutoff",
                    "label": "ניתוק אחר",
                    "lookupName": "cutoff",
                    "controlType": "text-box",
                    "required": true,
                    "order": 2,
                    "placeholder": "אנא הקלד ניתוק",
                    "disabled": false
                },
                {
                    "key": "neutralizationMethod",
                    "label": "שיטת ניטרול ",
                    "controlType": "drop-down",
                    "lookupName": "assetneutralizationmethod",
                    "required": true,
                    "order": 3,
                    "disabled": false
                },
                {
                    "key": "neutralizationCode",
                    "label": "קוד נטרול",
                    "controlType": "text-box",
                    "maxlength": "4",
                    "value": "neutralizationCode",
                    "required": true,
                    "order": 4,
                    "placeholder": "אנא הקלד קוד",
                    "disabled": false
                },
                {
                    "key": "installatorlRemarks",
                    "label": "הערות מתקין",
                    "controlType": "textarea",
                    "required": true,
                    "order": 5,
                    "rows": 6,
                    "disabled": false
                },
                {
                    "key": "protectionSystemVersionid",
                    "label": "גרסת מערכת מיגון ",
                    "controlType": "drop-down",
                    "lookupName": "protectionsystemversionid",
                    "required": false,
                    "order": 6,
                    "disabled": false
                },
                {
                    "key": "protectionSystemSN",
                    "label": "מספר אצווה - מח מיגון",
                    "value": "protectionSystemSN",
                    "controlType": "text-box",
                    "required": false,
                    "order": 7,
                    "placeholder": "אנא הקלד מספר",
                    "disabled": false
                },
                {
                    "key": "protectionSystemBatchNumber",
                    "label": "מספר סריאלי - מח מיגון",
                    "controlType": "text-box",
                    "value": "protectionSystemBatchNumber",
                    "required": false,
                    "order": 8,
                    "placeholder": "אנא הקלד מספר",
                    "disabled": false
                },
                {
                    "key": "remoteControlIntegration",
                    "label": "איחוד שלטים",
                    "controlType": "toggle",
                    "required": false,
                    "order": 9,
                    "disabled": false
                },
                {
                    "key": "leechSN",
                    "label": "קוד סריאלי - עלוקה",
                    "controlType": "text-box",
                    "value": "leechSN",
                    "required": false,
                    "order": 10,
                    "disabled": false
                },
                {
                    "key": "leechLearningCode",
                    "label": "קוד לימוד עלוקה",
                    "controlType": "text-box",
                    "value": "leechLearningCode",
                    "required": false,
                    "order": 11,
                    "disabled": false
                },
                {
                    "key": "lecchLocation",
                    "label": "מיקום עלוקה ",
                    "controlType": "drop-down",
                    "lookupName": "protectionsystemversionid",
                    "required": false,
                    "order": 12,
                    "disabled": false
                },
                {
                    "key": "signature",
                    "label": "חתימת לקוח",
                    "controlType": "signature",
                    "icon": "arrow-dropdown",
                    "showDetails": false,
                    "required": true,
                    "order": 13
                },
                {
                    "key": "save",
                    "label": "שמירה",
                    "labelA": "קוד תקשורת",
                    "controlType": "engineeringtest",
                    "required": false,
                    "order": 14,
                    "disabled": false,
                    "onClick": "sendData",
                    "onClickA": "openUrl",
                    "class": "col-6",
                    "color": "dark",
                    "colorA": "danger"
                }
            ],
            "installation": [
                {
                    "key": "actualinventoryProductId",
                    "label": "מוצר מלאי בפועל/סוג התקנה",
                    "controlType": "drop-down",
                    "lookupName": "product",
                    "required": true,
                    "order": 1,
                    "disabled": false
                },
                {
                    "key": "originalInstallationId",
                    "label": "קישור להתקנת מקור",
                    "controlType": "drop-down",
                    "lookupName": "serviceproductinventoryproduct",
                    "required": true,
                    "order": 2,
                    "disabled": false
                },
                {
                    "key": "installatorlRemarks",
                    "label": "הערות מתקין",
                    "controlType": "textarea",
                    "required": true,
                    "order": 3,
                    "rows": 6,
                    "disabled": false
                },
                {
                    "key": "reportStatus",
                    "label": "סטטוס דיווח ",
                    "controlType": "drop-down",
                    "lookupName": "reportstatus",
                    "required": true,
                    "order": 4,
                    "disabled": false
                },
                {
                    "key": "signature",
                    "label": "חתימת לקוח",
                    "controlType": "signature",
                    "icon": "arrow-dropdown",
                    "showDetails": false,
                    "required": true,
                    "order": 5
                },
                {
                    "key": "save",
                    "label": "שמירה",
                    "labelA": "קוד תקשורת",
                    "controlType": "engineeringtest",
                    "required": false,
                    "order": 6,
                    "disabled": false,
                    "onClick": "sendData",
                    "onClickA": "openUrl",
                    "class": "col-6",
                    "color": "dark",
                    "colorA": "danger"
                }
            ],
            "removeTransmitter": [
                {
                    "key": "installatorlRemarks",
                    "label": "הערות מתקין",
                    "controlType": "textarea",
                    "required": true,
                    "order": 1,
                    "rows": 6,
                    "disabled": false
                },
                {
                    "key": "signature",
                    "label": "חתימת לקוח",
                    "controlType": "signature",
                    "icon": "arrow-dropdown",
                    "showDetails": false,
                    "required": true,
                    "order": 2
                },
                {
                    "key": "save",
                    "label": "שמירה",
                    "labelA": "קוד תקשורת",
                    "controlType": "engineeringtest",
                    "required": false,
                    "order": 3,
                    "disabled": false,
                    "onClick": "sendData",
                    "onClickA": "openUrl",
                    "class": "col-6",
                    "color": "dark",
                    "colorA": "danger"
                }
            ]
        };
        var demoWorkOrder = [
            {
                "id": "9be9234a-35f4-e611-80d4-00155dcce607",
                "timeStart": "2017-02-19T11:45:00Z",
                "timeEnd": "2017-02-19T11:45:00Z",
                "customerName": " pointercept ",
                "customerContact": "",
                "assetid": "74500970",
                "city": "",
                "status": "117440000",
                "appStatus": "2",
                "ticketDetails": [
                    {
                        "id": "d9634bad-3937-e711-80d8-00155dcce607",
                        "ticketIssue": "test product",
                        "ticketDesc": "Test",
                        "status": null,
                        "type": "3",
                        "transmitterType": "",
                        "originalInstallationId": "00000000-0000-0000-0000-000000000000",
                        "shiftedTransmitter": false,
                        "transmitterRemovalRequired": false,
                        "switchTransmitter": false,
                        "remarks": "בדיקה",
                        "actualinventoryProductId": "28442cf4-d41a-e711-80d6-00155dcce607",
                        "connectioncode": "",
                        "firstCutoffId": "00000000-0000-0000-0000-000000000000",
                        "cutoff": "",
                        "neutralizationMethod": null,
                        "neutralizationCode": "",
                        "installerRemarks": "",
                        "reportStatus": "4",
                        "installedSerialProductId": "00000000-0000-0000-0000-000000000000",
                        "removedSerialProductId": "00000000-0000-0000-0000-000000000000",
                        "cutoffConnection": false,
                        "towingDetector": false,
                        "detectionSystemLocation": null,
                        "protectionSystemVersionId": "00000000-0000-0000-0000-000000000000",
                        "protectionSystemSN": "",
                        "protectionSystemBatchNumber": "",
                        "remoteControllIntegration": false,
                        "leechSN": "",
                        "leechLearningCode": "",
                        "leechLocation": null,
                        "pointerWareKey": -1,
                        "accountId": "6c3fc5d9-bf33-e711-80d7-00155dcce607",
                        "assetId": "3035d922-a934-e711-80d7-00155dcce607",
                        "statusIR": "3",
                        "svRservice": false,
                        "formType": "1"
                    },
                    {
                        "id": "8d04d016-bc6b-e711-80dc-00155dcce607",
                        "ticketIssue": "פעילה + דמי מנוי",
                        "ticketDesc": "\u200eפעילה + דמי מנוי- \u200e123",
                        "status": null,
                        "type": "1",
                        "transmitterType": "",
                        "originalInstallationId": "00000000-0000-0000-0000-000000000000",
                        "shiftedTransmitter": false,
                        "transmitterRemovalRequired": false,
                        "switchTransmitter": false,
                        "remarks": "",
                        "actualinventoryProductId": "4a82a792-a948-e711-80d9-00155dcce607",
                        "connectioncode": "",
                        "firstCutoffId": "00000000-0000-0000-0000-000000000000",
                        "cutoff": "",
                        "neutralizationMethod": null,
                        "neutralizationCode": "",
                        "installerRemarks": "",
                        "reportStatus": "3",
                        "installedSerialProductId": "00000000-0000-0000-0000-000000000000",
                        "removedSerialProductId": "00000000-0000-0000-0000-000000000000",
                        "cutoffConnection": false,
                        "towingDetector": false,
                        "detectionSystemLocation": null,
                        "protectionSystemVersionId": "00000000-0000-0000-0000-000000000000",
                        "protectionSystemSN": "",
                        "protectionSystemBatchNumber": "",
                        "remoteControllIntegration": false,
                        "leechSN": "",
                        "leechLearningCode": "",
                        "leechLocation": null,
                        "pointerWareKey": -1,
                        "accountId": "6baf022a-e166-e711-80db-00155dcce607",
                        "assetId": "00000000-0000-0000-0000-000000000000",
                        "statusIR": "2",
                        "svRservice": true,
                        "formType": "1"
                    },
                    {
                        "id": "90dadb2f-c56b-e711-80dc-00155dcce607",
                        "ticketIssue": "456",
                        "ticketDesc": "\u200eגלאי רוורס- \u200eBundle",
                        "status": null,
                        "type": "1",
                        "transmitterType": "",
                        "originalInstallationId": "00000000-0000-0000-0000-000000000000",
                        "shiftedTransmitter": false,
                        "transmitterRemovalRequired": false,
                        "switchTransmitter": false,
                        "remarks": "",
                        "actualinventoryProductId": "7911f62d-fb64-e711-80db-00155dcce607",
                        "connectioncode": "",
                        "firstCutoffId": "00000000-0000-0000-0000-000000000000",
                        "cutoff": "",
                        "neutralizationMethod": null,
                        "neutralizationCode": "",
                        "installerRemarks": "aaa",
                        "reportStatus": "1",
                        "installedSerialProductId": "00000000-0000-0000-0000-000000000000",
                        "removedSerialProductId": "00000000-0000-0000-0000-000000000000",
                        "cutoffConnection": false,
                        "towingDetector": false,
                        "detectionSystemLocation": "1",
                        "protectionSystemVersionId": "e6e49383-0333-e711-80d7-00155dcce607",
                        "protectionSystemSN": "",
                        "protectionSystemBatchNumber": "",
                        "remoteControllIntegration": false,
                        "leechSN": "",
                        "leechLearningCode": "",
                        "leechLocation": null,
                        "pointerWareKey": -1,
                        "accountId": "6baf022a-e166-e711-80db-00155dcce607",
                        "assetId": "de9ef672-e666-e711-80db-00155dcce607",
                        "statusIR": "3",
                        "svRservice": false,
                        "formType": "7"
                    }
                ]
            },
            {
                "id": "f7dca74d-456d-e711-80de-00155dcce607",
                "timeStart": "2017-07-21T08:15:00Z",
                "timeEnd": "2017-07-21T13:15:00Z",
                "customerName": "ירון לוינסקי ",
                "customerContact": "",
                "assetid": "111-222",
                "city": "",
                "status": "117440000",
                "appStatus": "2",
                "ticketDetails": [
                    {
                        "id": "c26d9046-426d-e711-80de-00155dcce607",
                        "ticketIssue": "גלאי רוורס",
                        "ticketDesc": "\u200eגלאי רוורס- \u200eBundle",
                        "status": null,
                        "type": "1",
                        "transmitterType": "",
                        "originalInstallationId": "00000000-0000-0000-0000-000000000000",
                        "shiftedTransmitter": false,
                        "transmitterRemovalRequired": false,
                        "switchTransmitter": false,
                        "remarks": "",
                        "actualinventoryProductId": "7911f62d-fb64-e711-80db-00155dcce607",
                        "connectioncode": "",
                        "firstCutoffId": "00000000-0000-0000-0000-000000000000",
                        "cutoff": "",
                        "neutralizationMethod": null,
                        "neutralizationCode": "",
                        "installerRemarks": "",
                        "reportStatus": "4",
                        "installedSerialProductId": "00000000-0000-0000-0000-000000000000",
                        "removedSerialProductId": "00000000-0000-0000-0000-000000000000",
                        "cutoffConnection": false,
                        "towingDetector": false,
                        "detectionSystemLocation": null,
                        "protectionSystemVersionId": "00000000-0000-0000-0000-000000000000",
                        "protectionSystemSN": "",
                        "protectionSystemBatchNumber": "",
                        "remoteControllIntegration": false,
                        "leechSN": "",
                        "leechLearningCode": "",
                        "leechLocation": null,
                        "pointerWareKey": -1,
                        "accountId": "124f40c6-df64-e711-80db-00155dcce607",
                        "assetId": "29d4efbb-e564-e711-80db-00155dcce607",
                        "statusIR": "3",
                        "svRservice": false,
                        "formType": ""
                    }
                ]
            },
            {
                "id": "334b592b-286e-e711-80de-00155dcce607",
                "timeStart": "2017-07-21T15:30:00Z",
                "timeEnd": "2017-07-21T18:30:00Z",
                "customerName": "ירון לוינסקי ",
                "customerContact": "",
                "assetid": "111-222",
                "city": "תל אביב-יפו",
                "status": "117440000",
                "appStatus": null,
                "ticketDetails": [
                    {
                        "id": "772e8ec8-876d-e711-80de-00155dcce607",
                        "ticketIssue": "התקנת  מערכת איתור פעילה",
                        "ticketDesc": "התקנת  מערכת איתור פעילה - big bundle  ",
                        "status": null,
                        "type": "1",
                        "transmitterType": "",
                        "originalInstallationId": "00000000-0000-0000-0000-000000000000",
                        "shiftedTransmitter": false,
                        "transmitterRemovalRequired": false,
                        "switchTransmitter": false,
                        "remarks": "",
                        "actualinventoryProductId": "1ee66f2e-3a6d-e711-80de-00155dcce607",
                        "connectioncode": "",
                        "firstCutoffId": "00000000-0000-0000-0000-000000000000",
                        "cutoff": "",
                        "neutralizationMethod": null,
                        "neutralizationCode": "",
                        "installerRemarks": "",
                        "reportStatus": "4",
                        "installedSerialProductId": "00000000-0000-0000-0000-000000000000",
                        "removedSerialProductId": "00000000-0000-0000-0000-000000000000",
                        "cutoffConnection": false,
                        "towingDetector": false,
                        "detectionSystemLocation": null,
                        "protectionSystemVersionId": "00000000-0000-0000-0000-000000000000",
                        "protectionSystemSN": "",
                        "protectionSystemBatchNumber": "",
                        "remoteControllIntegration": false,
                        "leechSN": "",
                        "leechLearningCode": "",
                        "leechLocation": null,
                        "pointerWareKey": -1,
                        "accountId": "124f40c6-df64-e711-80db-00155dcce607",
                        "assetId": "29d4efbb-e564-e711-80db-00155dcce607",
                        "statusIR": "3",
                        "svRservice": false,
                        "formType": ""
                    }
                ]
            },
            {
                "id": "d47532e2-0d6e-e711-80de-00155dcce607",
                "timeStart": "2017-07-27T05:00:00Z",
                "timeEnd": "2017-07-27T10:30:00Z",
                "customerName": "ירון לוינסקי ",
                "customerContact": "",
                "assetid": "111-222",
                "city": "",
                "status": "117440000",
                "appStatus": "2",
                "ticketDetails": [
                    {
                        "id": "80490a4a-896d-e711-80de-00155dcce607",
                        "ticketIssue": "הוספת עלוקה",
                        "ticketDesc": "\u200eהוספת עלוקה- \u200eהוספת עלוקה",
                        "status": null,
                        "type": "1",
                        "transmitterType": "",
                        "originalInstallationId": "00000000-0000-0000-0000-000000000000",
                        "shiftedTransmitter": false,
                        "transmitterRemovalRequired": false,
                        "switchTransmitter": false,
                        "remarks": "",
                        "actualinventoryProductId": "bad9e564-9359-e711-80db-00155dcce607",
                        "connectioncode": "",
                        "firstCutoffId": "00000000-0000-0000-0000-000000000000",
                        "cutoff": "",
                        "neutralizationMethod": null,
                        "neutralizationCode": "",
                        "installerRemarks": "",
                        "reportStatus": "4",
                        "installedSerialProductId": "00000000-0000-0000-0000-000000000000",
                        "removedSerialProductId": "00000000-0000-0000-0000-000000000000",
                        "cutoffConnection": false,
                        "towingDetector": false,
                        "detectionSystemLocation": null,
                        "protectionSystemVersionId": "00000000-0000-0000-0000-000000000000",
                        "protectionSystemSN": "",
                        "protectionSystemBatchNumber": "",
                        "remoteControllIntegration": false,
                        "leechSN": "",
                        "leechLearningCode": "",
                        "leechLocation": null,
                        "pointerWareKey": -1,
                        "accountId": "124f40c6-df64-e711-80db-00155dcce607",
                        "assetId": "29d4efbb-e564-e711-80db-00155dcce607",
                        "statusIR": "3",
                        "svRservice": true,
                        "formType": "2"
                    }
                ]
            }
        ];
        this.workOrdersDemo = demoWorkOrder;
    };
    DemoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__logger_service_logger_service__["a" /* Logger */]])
    ], DemoService);
    return DemoService;
}());

//# sourceMappingURL=demo.service.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_service_logger_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localstorage_service_localstorage_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service_data_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__env_environment_dev__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
  * DATA SERVICE FOR ANGULAR 2.0.0.
**/
var UserService = (function () {
    function UserService(http, _logger, LocalStorageService, DataService) {
        this.LocalStorageService = LocalStorageService;
        this.DataService = DataService;
        this.endPoint = '';
        this.registerCredentials = { userName: '', password: '' };
        this.GivenName = "";
        this.http = http;
        this.logger = _logger;
    }
    UserService.prototype.GetUserId = function () {
        var _this = this;
        return this.DataService.get(__WEBPACK_IMPORTED_MODULE_7__env_environment_dev__["a" /* ENV */].api).then(function (userId) {
            if (userId && userId !== null) {
                _this.userId = userId;
                return Promise.resolve(_this.userId);
            }
        }, function (err) {
            _this.logger.error(err);
            return Promise.reject(err);
        });
    };
    UserService.prototype.SetUserID = function (id) {
        this.LocalStorageService.set("useId", id);
    };
    UserService.prototype.setGivenName = function (name) {
        this.GivenName = name;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_4__logger_service_logger_service__["a" /* Logger */], __WEBPACK_IMPORTED_MODULE_5__localstorage_service_localstorage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_6__data_service_data_service__["a" /* DataService */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_service_logger_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
  * DIALOG SERVICE FOR ANGULAR 2.0.0.
**/
var Alert = (function () {
    function Alert(alertCtrl, _logger) {
        this.alertCtrl = alertCtrl;
        this.logger = _logger;
    }
    Alert.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['אישור']
        });
        alert.present();
    };
    Alert.prototype.showConfirm = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [{
                        text: 'אישור',
                        handler: function () {
                            resolve(true);
                        }
                    },
                    {
                        text: 'ביטול',
                        handler: function () {
                            resolve(false);
                        }
                    }]
            });
            alert.present();
        });
    };
    Alert.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    Alert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__logger_service_logger_service__["a" /* Logger */]])
    ], Alert);
    return Alert;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_service_logger_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_dialogs__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
  * DIALOG SERVICE FOR ANGULAR 2.0.0.
**/
var DialogService = (function () {
    function DialogService(dialogs, _logger) {
        this.dialogs = dialogs;
        this.dialog = dialogs;
        this.logger = _logger;
    }
    DialogService.prototype.alert = function (message, title, buttonName) {
        this.dialogs.alert(message, title, buttonName)
            .then(function () { return console.log('Dialog dismissed: ' + message); })
            .catch(function (e) { return console.log('Error displaying dialog', e); });
    };
    DialogService.prototype.confirm = function (message, title, buttonLables) {
        return this.dialogs.confirm(message, title, buttonLables)
            .then(function (result) {
            console.log('Confirm dismissed: ' + message);
            return Promise.resolve(result);
        }, function (err) {
            return Promise.reject(err);
        });
    };
    DialogService.prototype.prompt = function (message, title, buttonLabels, defaultText) {
        this.dialogs.prompt(message, title, buttonLabels, defaultText)
            .then(function () { return console.log('Prompt dismissed: ' + message); })
            .catch(function (e) { return console.log('Error displaying dialog', e); });
    };
    DialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_dialogs__["a" /* Dialogs */], __WEBPACK_IMPORTED_MODULE_1__logger_service_logger_service__["a" /* Logger */]])
    ], DialogService);
    return DialogService;
}());

//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_service_logger_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
  * DIALOG SERVICE FOR ANGULAR 2.0.0.
**/
var Toast = (function () {
    function Toast(_logger, toastCtrl) {
        this._logger = _logger;
        this.toastCtrl = toastCtrl;
        this.logger = _logger;
        this.toast = toastCtrl;
    }
    Toast.prototype.showToast = function (message) {
        this.toast.create({
            message: message,
            duration: 3000,
            position: 'bottomA'
        });
        this.logger.info('Toast message: ' + message);
    };
    Toast = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__logger_service_logger_service__["a" /* Logger */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], Toast);
    return Toast;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service_data_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localstorage_service_localstorage_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__env_environment_dev__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================
/**
  * LOOKUP FOR ANGULAR 2.0.0.
**/
var LookupService = (function () {
    /**
     * lookup constructor()
     **/
    function LookupService(_logger, DataService, plocalstorage) {
        this._logger = _logger;
        this.DataService = DataService;
        this.plocalstorage = plocalstorage;
    }
    LookupService.prototype.ngOnInit = function () {
    };
    LookupService.prototype.getAllLookups = function () {
        var _this = this;
        return this.DataService.get(__WEBPACK_IMPORTED_MODULE_4__env_environment_dev__["a" /* ENV */].api)
            .then(function (result) {
            _this.lookups = result;
            _this.plocalstorage.set("lookups", JSON.stringify(_this.lookups));
            return Promise.resolve(_this.lookups);
        }, function (err) {
            _this._logger.error(err);
            var lookupsls = JSON.parse(_this.plocalstorage.get("lookups"));
            if (lookupsls) {
                _this.lookups = lookupsls;
                return Promise.resolve(_this.lookups);
            }
            else {
                _this.lookups = [];
                return Promise.reject("failed to load lookups");
            }
        });
    };
    LookupService.prototype.getAllLookupsObservable = function () {
        var _this = this;
        return this.DataService.observableGet(__WEBPACK_IMPORTED_MODULE_4__env_environment_dev__["a" /* ENV */].api).do(function (res) {
            _this.lookups = res.json();
            _this.plocalstorage.set("lookups", JSON.stringify(_this.lookups));
        }, function (err) {
            _this._logger.error(err);
            var lookupsls = JSON.parse(_this.plocalstorage.get("lookups"));
            if (lookupsls) {
                _this.lookups = lookupsls;
                return _this.lookups;
            }
            else {
                _this.lookups = [];
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw("failed to load lookups");
            }
        });
    };
    LookupService.prototype.getAllFieldsObservable = function () {
        var _this = this;
        return this.DataService.observableGet(__WEBPACK_IMPORTED_MODULE_4__env_environment_dev__["a" /* ENV */].api + 'data/field/getall').do(function (res) {
            _this.fields = res.json();
            _this.plocalstorage.set("fields", JSON.stringify(_this.fields));
            return _this.fields;
        }, function (err) {
            _this._logger.error(err);
            var fieldsls = JSON.parse(_this.plocalstorage.get("fields"));
            if (fieldsls) {
                _this.fields = fieldsls;
                return _this.fields;
            }
            else {
                _this.fields = [];
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw("failed to load fields.");
            }
        });
    };
    LookupService.prototype.getAllFields = function () {
        var _this = this;
        return this.DataService.get(__WEBPACK_IMPORTED_MODULE_4__env_environment_dev__["a" /* ENV */].api + 'data/field/getall')
            .then(function (result) {
            _this.fields = result;
            _this.plocalstorage.set("fields", JSON.stringify(_this.fields));
            return Promise.resolve(_this.fields);
        }, function (err) {
            _this._logger.error(err);
            var fieldsls = JSON.parse(_this.plocalstorage.get("fields"));
            if (fieldsls) {
                _this.fields = fieldsls;
                return Promise.resolve(_this.fields);
            }
            else {
                _this.fields = [];
                return Promise.reject("failed to load fields");
            }
        });
    };
    LookupService.prototype.refreshLookups = function () {
        var _this = this;
        return this.DataService.get(__WEBPACK_IMPORTED_MODULE_4__env_environment_dev__["a" /* ENV */].api)
            .then(function (result) {
            _this.refreshed = result;
            return Promise.resolve(result);
        }, function (err) {
            _this._logger.error(err);
            return Promise.reject(err);
        });
    };
    LookupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__["Logger"], __WEBPACK_IMPORTED_MODULE_2__data_service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__localstorage_service_localstorage_service__["a" /* LocalStorageService */]])
    ], LookupService);
    return LookupService;
}());

//# sourceMappingURL=lookup.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PFieldBase; });
var PFieldBase = (function () {
    function PFieldBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.labelA = options.labelA || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.display = options.display;
        this.hide = options.hide;
        this.disabled = options.disabled;
        this.placeholder = options.placeholder;
        this.onClick = options.onClick || '';
        this.onClickA = options.onClickA || '';
        this.class = options.class;
        this.color = options.color;
        this.colorA = options.colorA;
        this.pattern = options.pattern;
        this.maxlength = options.maxlength;
        this.filter = options.filter;
        this.parentLookup = options.parentLookup;
    }
    return PFieldBase;
}());

//# sourceMappingURL=fieldbase.model.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    api: "",
    notify: "",
    notificationsetSubscription: "",
    notificationAppId: "",
    googleProjectNumber: "",
    notificationinFocusDisplaying: "",
};
//# sourceMappingURL=environment.dev.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
  * LOCAL STORAGE SERVICE FOR ANGULAR 2.0.0.
**/
var LocalStorageService = (function () {
    function LocalStorageService() {
        if (window.localStorage) {
            this.storage = window.localStorage;
        }
        else {
            this.storage = {
                items: [],
                getItem: function (key) {
                    return this.items[key];
                },
                setItem: function (key, value) {
                    this.items[key] = value;
                }
            };
        }
    }
    LocalStorageService.prototype.get = function (key) {
        return this.storage.getItem(key);
    };
    LocalStorageService.prototype.set = function (key, value) {
        this.storage.setItem(key, value);
    };
    LocalStorageService.prototype.remove = function (key) {
        this.storage.removeItem(key);
    };
    LocalStorageService.prototype.clearAll = function () {
        this.storage.clear();
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());

//# sourceMappingURL=localstorage.service.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
  * EVENT SERVICE FOR ANGULAR 2.0.0.
**/
var EventService = (function () {
    function EventService() {
        this._eventBus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    EventService.prototype.broadcast = function (key, data) {
        this._eventBus.next({ key: key, data: data });
    };
    EventService.prototype.on = function (key) {
        return this._eventBus.asObservable()
            .filter(function (event) { return event.key === key; })
            .map(function (event) { return event.data; });
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EventService);
    return EventService;
}());

//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env_environment_dev__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendor_logger_service_logger_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vendor_data_service_data_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vendor_localstorage_service_localstorage_service__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// COMMON SERVICES



//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================
// AUTH SERVICE 
var AuthService = (function () {
    /**
     * AuthService constructor
     */
    function AuthService(_logger, _plocalStorageService, _pdataService) {
        this._plocalStorageService = _plocalStorageService;
        this._pdataService = _pdataService;
        this.logger = _logger;
        this.logger.debug("AuthService constructor");
    }
    /**
    * token()
    * @ input : void
    * @ output: get token
    */
    AuthService.prototype.token = function (credentials) {
        var _this = this;
        this.logger.debug("token()", credentials);
        var data = "username=" + credentials.userName + "&password=" + credentials.password;
        return this._pdataService.post(__WEBPACK_IMPORTED_MODULE_0__env_environment_dev__["a" /* ENV */].api + 'auth/token', data).then(function (response) {
            var authenticationResponse = response;
            if (authenticationResponse && authenticationResponse["access_token"]) {
                _this._plocalStorageService.set('authorizationData', JSON.stringify({ token: authenticationResponse["access_token"] }));
                return Promise.resolve("success");
            }
            _this.logger.warning("there's no token into the object , but the response has returned status OK.");
            return Promise.reject("authentication failed");
        }, function (err) {
            _this.logger.error("there's problem with the authentication " + err);
            return Promise.reject(err);
        });
    };
    /**
    * register()
    * @ input : void
    * @ output: void - move to registration state.
    */
    AuthService.prototype.register = function (credentials) {
        this.logger.debug("register()", credentials);
        return Promise.resolve();
        //return  Promise.reject("you can't access to the app");
    };
    AuthService.prototype.getUser = function () {
        return this._pdataService.get('/data/user/getUserName').then(function (response) {
            return Promise.resolve(response);
        }, function (err) {
            return Promise.reject(err);
        });
    };
    /**
     * logout()
     * @ input : void
     * @ output: logout from the system.
     */
    AuthService.prototype.logout = function () {
        this.logger.debug("logout()");
        this._plocalStorageService.remove('authorizationData');
        return Promise.resolve();
        //return  Promise.reject("you can't access to the app");
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__vendor_logger_service_logger_service__["a" /* Logger */], __WEBPACK_IMPORTED_MODULE_6__vendor_localstorage_service_localstorage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_5__vendor_data_service_data_service__["a" /* DataService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_adal_ts__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_adal_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_adal_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================
/*ADAL PROVIDER FOR ANGULAR 2.0.0. **/
var AdalService = (function () {
    function AdalService() {
        this.disableLogout = false;
        this.disableLogin = false;
    }
    /**
     * login()
     * @input : login()
     * @output :login to the adfs .
     **/
    AdalService.prototype.login = function () {
        var context = __WEBPACK_IMPORTED_MODULE_0_adal_ts__["Authentication"].getContext(this.config);
        this.disableLogin = context.getUser() != null;
        if (this.disableLogin == false)
            context.login();
    };
    /**
    * logout()
    * @input : logout()
    * @output :logout from the system.
    **/
    AdalService.prototype.logout = function () {
        var context = __WEBPACK_IMPORTED_MODULE_0_adal_ts__["Authentication"].getContext(this.config);
        var loggedInUser = context.getUser();
        this.disableLogout = loggedInUser == null;
        if (this.disableLogout == false)
            context.logout();
    };
    /**
    * getUser()
    * @input : getUser()
    * @output :get user data.
    **/
    AdalService.prototype.getUser = function () {
        var context = __WEBPACK_IMPORTED_MODULE_0_adal_ts__["Authentication"].getContext(this.config);
        this.user = context.getUser();
    };
    /**
   * createConfig()
   * @input : createConfig(_clientId: string , _tenant: string , _redirectUri: string , _postLogoutRedirectUrl?: string , _responseType?: string , _extraQueryParameters? : string).
   * @output : set adal config.
   **/
    AdalService.prototype.createConfig = function (_clientId, _tenant, _redirectUri, _postLogoutRedirectUrl, _responseType, _extraQueryParameters) {
        this.config = new __WEBPACK_IMPORTED_MODULE_0_adal_ts__["AdalConfig"](_clientId, _tenant, _redirectUri, _postLogoutRedirectUrl, _responseType, _extraQueryParameters);
        return this.config;
    };
    AdalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], AdalService);
    return AdalService;
}());

//# sourceMappingURL=adal.service.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormBuilderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_text_box_model__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_dropdown_model__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_toggle_model__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_numberfield_model__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_datetime_model__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_textarea_model__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_label_model__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================
/**
  * FORM BUILDER SERVICE ANGULAR 2.0.0.
**/
var FormBuilderService = (function () {
    function FormBuilderService() {
    }
    // TODO: get from a remote source of question metadata
    // TODO: make asynchronous
    FormBuilderService.prototype.getFormA = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_2__model_text_box_model__["a" /* PTextBox */]({
                key: 'lastname',
                label: 'Last name',
                value: '',
                required: true,
                order: 1,
                hide: false //true
            }),
            new __WEBPACK_IMPORTED_MODULE_2__model_text_box_model__["a" /* PTextBox */]({
                key: 'firstname',
                label: 'First name',
                value: '',
                required: true,
                order: 2,
                display: {
                    key: 'lastname',
                    value: 'a'
                }
            }),
            new __WEBPACK_IMPORTED_MODULE_3__model_dropdown_model__["a" /* PDropDown */]({
                key: 'type',
                label: 'Type',
                selections: [new __WEBPACK_IMPORTED_MODULE_3__model_dropdown_model__["b" /* SelectionsField */](1, "A"), new __WEBPACK_IMPORTED_MODULE_3__model_dropdown_model__["b" /* SelectionsField */](2, "B"), new __WEBPACK_IMPORTED_MODULE_3__model_dropdown_model__["b" /* SelectionsField */](2, "C")],
                required: true,
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_4__model_toggle_model__["a" /* PToggle */]({
                key: 'truefalse',
                label: 'Yes/No',
                required: true,
                order: 7
            }),
            new __WEBPACK_IMPORTED_MODULE_5__model_numberfield_model__["a" /* PNumberField */]({
                key: 'number1',
                label: 'Number',
                value: 3359,
                required: true,
                order: 4
            }),
            new __WEBPACK_IMPORTED_MODULE_6__model_datetime_model__["a" /* PDateTime */]({
                key: 'datetime1',
                label: 'DateTime',
                value: new Date(),
                required: true,
                order: 5
            }),
            new __WEBPACK_IMPORTED_MODULE_7__model_textarea_model__["a" /* PTextarea */]({
                key: 'textarea',
                label: 'example textarea',
                required: true,
                order: 6,
                rows: 6
            }),
            new __WEBPACK_IMPORTED_MODULE_8__model_label_model__["a" /* PLabel */]({
                key: 'label',
                label: 'this label',
                order: 7,
                hide: false //true
            })
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    FormBuilderService.prototype.toFormGroup = function (questions) {
        var group = {};
        if (!questions) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](group);
        }
        questions.forEach(function (question) {
            group[question.key] = question.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](question.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required)
                : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](question.value || '');
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](group);
    };
    FormBuilderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], FormBuilderService);
    return FormBuilderService;
}());

//# sourceMappingURL=formbuilder.service.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PTextBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fieldbase_model__ = __webpack_require__(46);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PTextBox = (function (_super) {
    __extends(PTextBox, _super);
    function PTextBox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'text-box';
        _this.type = 'text';
        return _this;
    }
    return PTextBox;
}(__WEBPACK_IMPORTED_MODULE_0__fieldbase_model__["a" /* PFieldBase */]));

//# sourceMappingURL=text-box.model.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectionsField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PDropDown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fieldbase_model__ = __webpack_require__(46);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SelectionsField = (function () {
    function SelectionsField(_id, _value) {
        this.id = _id;
        this.value = _value;
    }
    return SelectionsField;
}());

var PDropDown = (function (_super) {
    __extends(PDropDown, _super);
    function PDropDown(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'drop-down';
        _this.type = 'select';
        _this.lookupName = options["lookupName"];
        _this.selections = options["selections"] || [];
        return _this;
    }
    return PDropDown;
}(__WEBPACK_IMPORTED_MODULE_0__fieldbase_model__["a" /* PFieldBase */]));

//# sourceMappingURL=dropdown.model.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PToggle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fieldbase_model__ = __webpack_require__(46);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PToggle = (function (_super) {
    __extends(PToggle, _super);
    function PToggle(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'toggle';
        _this.type = 'toggle';
        return _this;
    }
    return PToggle;
}(__WEBPACK_IMPORTED_MODULE_0__fieldbase_model__["a" /* PFieldBase */]));

//# sourceMappingURL=toggle.model.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PNumberField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fieldbase_model__ = __webpack_require__(46);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PNumberField = (function (_super) {
    __extends(PNumberField, _super);
    function PNumberField(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'number';
        _this.type = 'number';
        return _this;
    }
    return PNumberField;
}(__WEBPACK_IMPORTED_MODULE_0__fieldbase_model__["a" /* PFieldBase */]));

//# sourceMappingURL=numberfield.model.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PDateTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fieldbase_model__ = __webpack_require__(46);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PDateTime = (function (_super) {
    __extends(PDateTime, _super);
    function PDateTime(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'Date';
        _this.format = 'MM/DD/YYYY H:mm';
        _this.min = null;
        _this.max = null;
        return _this;
    }
    return PDateTime;
}(__WEBPACK_IMPORTED_MODULE_0__fieldbase_model__["a" /* PFieldBase */]));

//# sourceMappingURL=datetime.model.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PTextarea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fieldbase_model__ = __webpack_require__(46);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PTextarea = (function (_super) {
    __extends(PTextarea, _super);
    function PTextarea(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textarea';
        _this.type = 'textarea';
        _this.rows = 6;
        return _this;
    }
    return PTextarea;
}(__WEBPACK_IMPORTED_MODULE_0__fieldbase_model__["a" /* PFieldBase */]));

//# sourceMappingURL=textarea.model.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fieldbase_model__ = __webpack_require__(46);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PLabel = (function (_super) {
    __extends(PLabel, _super);
    function PLabel(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'label';
        _this.type = 'label';
        return _this;
    }
    return PLabel;
}(__WEBPACK_IMPORTED_MODULE_0__fieldbase_model__["a" /* PFieldBase */]));

//# sourceMappingURL=label.model.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_logger_core__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__env_environment_dev__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//=======================================================================
//===================== CREATED BY AVIEL ISRAELI ==============
//=======================================================================
/**
  * NotificationService FOR ANGULAR 2.0.0.
**/
var NotificationService = (function () {
    /**
     * notification constructor()
     **/
    function NotificationService(oneSignal, _logger, http) {
        this.oneSignal = oneSignal;
        this._logger = _logger;
        this.http = http;
        this._model = {
            userId: null,
            pushToken: null,
            userTags: null,
            message: null
        };
    }
    NotificationService.prototype._clearModel = function () {
        this._model.userId = null;
        this._model.pushToken = null;
        this._model.userTags = null;
        this._model.message = null;
    };
    /**
     * @name _addTag(key, value)
     * @description adds a tag (identifier) to userTags and stores it on notificationService.
     */
    NotificationService.prototype._addTag = function (key, value) {
        var _this = this;
        this._logger.debug("[NotificationService] addTag()", key);
        // get tags from notification service
        this.oneSignal.getTags().then(function (tags) {
            _this._model.userTags = tags;
            // add tag value
            _this._model.userTags[key] = value.toLowerCase(); // required by service
            // update tags on notification service
            _this.oneSignal.sendTags(_this._model.userTags);
        }, function (err) {
            _this._logger.error("[NotificationService] addTag() Error: ", err);
        });
    };
    NotificationService.prototype._sendNotification = function (appname, content, role, user) {
        var _this = this;
        this._logger.debug("[NotificationService] _sendNotification()");
        var req = {
            method: 'POST',
            url: __WEBPACK_IMPORTED_MODULE_4__env_environment_dev__["a" /* ENV */].notify,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "appname": appname,
                "content": content,
                "role": role || 'sales',
                "user": user || ''
            }
        };
        return this.http
            .post(req.url, req.data, req.method)
            .toPromise()
            .then(function (res) {
            var response = res.json();
            return Promise.resolve(_this._logger.debug("[NotificationService] - success", response));
        }, function (err) {
            return Promise.reject(_this._logger.error("[NoticationService] - error", err));
        });
    };
    /**
     * @name getIds()
     * @description retrive notification service userid (device/app identifier) and push notification token
     */
    NotificationService.prototype._getIds = function () {
        var _this = this;
        this._logger.debug("[NotificationService] _getIds()");
        if (this.oneSignal) {
            this.oneSignal.getIds()
                .then(function (jsonData) {
                if (jsonData) {
                    _this._logger.debug("[NotificationService] getIds()", JSON.stringify(jsonData));
                    if (jsonData.userId) {
                        _this._model.userId = jsonData.userId;
                    }
                    if (jsonData.pushToken) {
                        _this._model.pushToken = jsonData.pushToken;
                    }
                }
                else {
                    _this._logger.warn("[NotificationService] getIds() - EMPTY. Check connection, iOS or Google notification service configuration.");
                    _this._model.userId = null;
                    _this._model.pushToken = null;
                }
            }, function (err) {
                _this._logger.debug("[NotificationService] _getIds() ERROR: " + err);
            });
        }
    };
    /**
     * @name _onHandleNotificationOpened()
     * @description The instance will be called when a notification is tapped on from the notification shade (ANDROID)
     * or notification center (iOS), or when closing an Alert notification shown in the app
     * (if InApAlert is enabled in inFocusDisplaying, below).
     */
    NotificationService.prototype._onHandleNotificationOpened = function (jsonData) {
        this._logger.debug("[NotificationService] _onHandleNotificationOpened()", JSON.stringify(jsonData));
        // TODO: PubSub raise event with notification info to be used by app logic
        //let notification = jsonData.notification || null;
        //let action = jsonData.action || null;
    };
    /**
     * @name onHandleNotificationReceived()
     * @description The instance will be called when a notification is received whether it was displayed or not.
     */
    NotificationService.prototype._onHandleNotificationReceived = function (jsonData) {
        this._logger.debug("[NotificationService] onHandleNotificationReceived()", JSON.stringify(jsonData));
        // TODO: Implement NotificationReceived logic
        //let notification = jsonData.notification || null;
    };
    /**
     * @name setSubscription()
     * @description subscribe or unsubscribe to notification services.
     */
    NotificationService.prototype._setSubscription = function (enabled) {
        this._logger.info("[NotificationService] setSubscription()", enabled);
        this.oneSignal.setSubscription(enabled);
    };
    NotificationService.prototype._init = function (identifier) {
        this._logger.info("[NotificationService] init()");
        // Initialize/Register push notification service OneSignal
        if (this.oneSignal) {
            this._setSubscription(__WEBPACK_IMPORTED_MODULE_4__env_environment_dev__["a" /* ENV */].notificationsetSubscription);
            // Set your iOS Settings
            var iosSettings = {};
            iosSettings["kOSSettingsKeyAutoPrompt"] = true;
            iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
            this.oneSignal
                .startInit(__WEBPACK_IMPORTED_MODULE_4__env_environment_dev__["a" /* ENV */].notificationAppId, __WEBPACK_IMPORTED_MODULE_4__env_environment_dev__["a" /* ENV */].googleProjectNumber)
                .inFocusDisplaying(__WEBPACK_IMPORTED_MODULE_4__env_environment_dev__["a" /* ENV */].notificationinFocusDisplaying)
                .iOSSettings(iosSettings)
                .handleNotificationReceived("_onHandleNotificationReceived")
                .handleNotificationOpened("_onHandleNotificationOpened")
                .endInit();
            // set notification service user and push ids.
            this._addTag("identifier", identifier);
        }
        else {
            this._logger.warn("[NoticationService] - Notification only available on Device. Aborting.");
        }
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_2_angular2_logger_core__["Logger"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]])
    ], NotificationService);
    return NotificationService;
}());

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_service_logger_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkService = (function () {
    function NetworkService(network, logger) {
        this.network = network;
        this.logger = logger;
        this.initChangeConnectionEvent();
    }
    NetworkService.prototype.getNetworkType = function () {
        return this.network.type;
    };
    NetworkService.prototype.onConnect = function () {
        return this.network.onConnect();
    };
    NetworkService.prototype.onDisconnect = function () {
        return this.network.onDisconnect();
    };
    NetworkService.prototype.initChangeConnectionEvent = function () {
        var _this = this;
        this.connected = this.onConnect().subscribe(function (res) {
            _this.isOnline = true;
            _this.logger.debug("online status", _this.isOnline);
        }, function (err) {
            _this.logger.error("error on subscriber into connect() method [NetworkService]");
        });
        this.disconnected = this.onDisconnect().subscribe(function (res) {
            _this.isOnline = true;
            _this.logger.debug("online status", _this.isOnline);
        }, function (err) {
            _this.logger.error("error on subscriber into disconnect() method [NetworkService]");
        });
    };
    NetworkService.prototype.ngOnDestroy = function () {
        this.connected.unsubscribe();
        this.disconnected.unsubscribe();
    };
    NetworkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2__logger_service_logger_service__["a" /* Logger */]])
    ], NetworkService);
    return NetworkService;
}());

//# sourceMappingURL=network.service.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignatureFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================
// SIGNATURE COMPONENT
var SignatureFieldComponent = (function () {
    function SignatureFieldComponent() {
        this.options = {};
        this._signature = null;
        this.propagateChange = null;
    }
    SignatureFieldComponent_1 = SignatureFieldComponent;
    Object.defineProperty(SignatureFieldComponent.prototype, "signature", {
        get: function () {
            return this._signature;
        },
        set: function (value) {
            this._signature = value;
            console.log('set signature to ' + this._signature);
            this.propagateChange(this.signature);
        },
        enumerable: true,
        configurable: true
    });
    SignatureFieldComponent.prototype.writeValue = function (value) {
        if (!value) {
            return;
        }
        this._signature = value;
        this.signaturePad.fromDataURL(this.signature);
    };
    SignatureFieldComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SignatureFieldComponent.prototype.registerOnTouched = function () {
        // no-op
    };
    SignatureFieldComponent.prototype.ngAfterViewInit = function () {
        this.signaturePad.clear();
        this.signaturePad.set('penColor', 'rgb(0,0,0)');
        if (this.data) {
            this.signature = this.data;
            this.signaturePad.fromDataURL(this.data);
        }
    };
    SignatureFieldComponent.prototype.drawBegin = function () {
        console.log('Begin Drawing');
    };
    SignatureFieldComponent.prototype.drawComplete = function () {
        this.signature = this.signaturePad.toDataURL('image/png', 0.5);
    };
    SignatureFieldComponent.prototype.clear = function () {
        this.signaturePad.clear();
        this.signature = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SignatureFieldComponent.prototype, "signaturePad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SignatureFieldComponent.prototype, "data", void 0);
    SignatureFieldComponent = SignatureFieldComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'signature-field',template:/*ion-inline-start:"C:\Dev\Private\Ionic\adSoft\src\vendor\signaturefield.service\signaturefield.component.html"*/'<signature-pad [options]="options" (onBeginEvent)="drawBegin()" (onEndEvent)="drawComplete()"></signature-pad>\n\n'/*ion-inline-end:"C:\Dev\Private\Ionic\adSoft\src\vendor\signaturefield.service\signaturefield.component.html"*/,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SignatureFieldComponent_1; }),
                    multi: true,
                },
            ],
        })
    ], SignatureFieldComponent);
    return SignatureFieldComponent;
    var SignatureFieldComponent_1;
}());

//# sourceMappingURL=signaturefield.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = httpFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_interceptor__ = __webpack_require__(715);

function httpFactory(backend, defaultOptions, LocalStorageService) {
    return new __WEBPACK_IMPORTED_MODULE_0__auth_interceptor__["a" /* PAuthInterceptor */](backend, defaultOptions, LocalStorageService);
}
//# sourceMappingURL=auth.factory.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localstorage_service_localstorage_service__ = __webpack_require__(62);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PAuthInterceptor = (function (_super) {
    __extends(PAuthInterceptor, _super);
    function PAuthInterceptor(backend, defaultOptions, _pLocalDataService) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this._pLocalDataService = _pLocalDataService;
        return _this;
    }
    PAuthInterceptor.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options);
    };
    PAuthInterceptor.prototype.get = function (url, options) {
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(options));
    };
    PAuthInterceptor.prototype.post = function (url, body, options) {
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options))
            .catch(this.onErrorResponse);
    };
    PAuthInterceptor.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    PAuthInterceptor.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    PAuthInterceptor.prototype.onErrorResponse = function (rejection, caught) {
        if (rejection.status === 401) {
            console.log("you're not authorized", rejection);
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(rejection);
    };
    PAuthInterceptor.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        }
        var authData = JSON.parse(this._pLocalDataService.get('authorizationData'));
        if (authData) {
            options.headers.append('Authorization', "Bearer " + authData.token);
        }
        return options;
    };
    PAuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_3__localstorage_service_localstorage_service__["a" /* LocalStorageService */]])
    ], PAuthInterceptor);
    return PAuthInterceptor;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));

//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_service_logger_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__env_environment_dev__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
  * DATA SERVICE FOR ANGULAR 2.0.0.
**/
var DataService = (function () {
    function DataService(http, _logger, geo) {
        this.geo = geo;
        this.endPoint = '';
        this.http = http;
        this.logger = _logger;
    }
    /**
    * handleError()
    * @input : URL handleError(error).
    * @output : show this error to comsole and reject it out.
    **/
    DataService.prototype.handleError = function (error) {
        this.logger.error("get request to URL", error);
        return Promise.reject(error.message || error);
    };
    /**
     * get()
     * @input : URL GET(url).
     * @output : get request to this url.
     **/
    DataService.prototype.get = function (_url) {
        var _this = this;
        this.logger.debug("get request to URL", _url);
        return this.http.get(this.endPoint + _url)
            .toPromise().then(function (res) {
            var response = res.json();
            return Promise.resolve(response);
        }, function (err) {
            return _this.handleError(err);
        });
    };
    /**
     * post()
     * @input : URL post(url  , data).
     * @output : post request to this url.
     **/
    DataService.prototype.post = function (_url, _data, _headers) {
        var _this = this;
        this.logger.debug("post request to URL " + _url + " with data", _data);
        var headers = _headers ? new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](_headers) : new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.endPoint + _url, _data, options)
            .toPromise()
            .then(function (res) {
            _this.sendLocation(_url);
            var response = res.json();
            return Promise.resolve(response);
        }, function (err) {
            return _this.handleError(err);
        });
    };
    /**
     * observableGet()
     * @input  : url get(url).
     * @output : get request with observable.
     */
    DataService.prototype.observableGet = function (_url) {
        this.logger.debug("observable get request to URL", _url);
        return this.http.get(this.endPoint + _url);
    };
    DataService.prototype.sendLocation = function (url) {
        var _this = this;
        if (url.indexOf('token') !== -1) {
            return;
        }
        this.geo.getCurrentPosition().then(function (resp) {
            var location = {
                'Latitude': resp.coords.latitude,
                'Longtitude': resp.coords.longitude
            };
            _this.http.post(__WEBPACK_IMPORTED_MODULE_5__env_environment_dev__["a" /* ENV */].api, location, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }) })).toPromise().then(function (res) {
                console.log(res);
            }, function (err) {
                console.error(err);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_4__logger_service_logger_service__["a" /* Logger */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 728,
	"./af.js": 728,
	"./ar": 729,
	"./ar-dz": 730,
	"./ar-dz.js": 730,
	"./ar-kw": 731,
	"./ar-kw.js": 731,
	"./ar-ly": 732,
	"./ar-ly.js": 732,
	"./ar-ma": 733,
	"./ar-ma.js": 733,
	"./ar-sa": 734,
	"./ar-sa.js": 734,
	"./ar-tn": 735,
	"./ar-tn.js": 735,
	"./ar.js": 729,
	"./az": 736,
	"./az.js": 736,
	"./be": 737,
	"./be.js": 737,
	"./bg": 738,
	"./bg.js": 738,
	"./bm": 739,
	"./bm.js": 739,
	"./bn": 740,
	"./bn.js": 740,
	"./bo": 741,
	"./bo.js": 741,
	"./br": 742,
	"./br.js": 742,
	"./bs": 743,
	"./bs.js": 743,
	"./ca": 744,
	"./ca.js": 744,
	"./cs": 745,
	"./cs.js": 745,
	"./cv": 746,
	"./cv.js": 746,
	"./cy": 747,
	"./cy.js": 747,
	"./da": 748,
	"./da.js": 748,
	"./de": 749,
	"./de-at": 750,
	"./de-at.js": 750,
	"./de-ch": 751,
	"./de-ch.js": 751,
	"./de.js": 749,
	"./dv": 752,
	"./dv.js": 752,
	"./el": 753,
	"./el.js": 753,
	"./en-au": 754,
	"./en-au.js": 754,
	"./en-ca": 755,
	"./en-ca.js": 755,
	"./en-gb": 756,
	"./en-gb.js": 756,
	"./en-ie": 757,
	"./en-ie.js": 757,
	"./en-il": 758,
	"./en-il.js": 758,
	"./en-nz": 759,
	"./en-nz.js": 759,
	"./eo": 760,
	"./eo.js": 760,
	"./es": 761,
	"./es-do": 762,
	"./es-do.js": 762,
	"./es-us": 763,
	"./es-us.js": 763,
	"./es.js": 761,
	"./et": 764,
	"./et.js": 764,
	"./eu": 765,
	"./eu.js": 765,
	"./fa": 766,
	"./fa.js": 766,
	"./fi": 767,
	"./fi.js": 767,
	"./fo": 768,
	"./fo.js": 768,
	"./fr": 769,
	"./fr-ca": 770,
	"./fr-ca.js": 770,
	"./fr-ch": 771,
	"./fr-ch.js": 771,
	"./fr.js": 769,
	"./fy": 772,
	"./fy.js": 772,
	"./gd": 773,
	"./gd.js": 773,
	"./gl": 774,
	"./gl.js": 774,
	"./gom-latn": 775,
	"./gom-latn.js": 775,
	"./gu": 776,
	"./gu.js": 776,
	"./he": 777,
	"./he.js": 777,
	"./hi": 778,
	"./hi.js": 778,
	"./hr": 779,
	"./hr.js": 779,
	"./hu": 780,
	"./hu.js": 780,
	"./hy-am": 781,
	"./hy-am.js": 781,
	"./id": 782,
	"./id.js": 782,
	"./is": 783,
	"./is.js": 783,
	"./it": 784,
	"./it.js": 784,
	"./ja": 785,
	"./ja.js": 785,
	"./jv": 786,
	"./jv.js": 786,
	"./ka": 787,
	"./ka.js": 787,
	"./kk": 788,
	"./kk.js": 788,
	"./km": 789,
	"./km.js": 789,
	"./kn": 790,
	"./kn.js": 790,
	"./ko": 791,
	"./ko.js": 791,
	"./ky": 792,
	"./ky.js": 792,
	"./lb": 793,
	"./lb.js": 793,
	"./lo": 794,
	"./lo.js": 794,
	"./lt": 795,
	"./lt.js": 795,
	"./lv": 796,
	"./lv.js": 796,
	"./me": 797,
	"./me.js": 797,
	"./mi": 798,
	"./mi.js": 798,
	"./mk": 799,
	"./mk.js": 799,
	"./ml": 800,
	"./ml.js": 800,
	"./mr": 801,
	"./mr.js": 801,
	"./ms": 802,
	"./ms-my": 803,
	"./ms-my.js": 803,
	"./ms.js": 802,
	"./mt": 804,
	"./mt.js": 804,
	"./my": 805,
	"./my.js": 805,
	"./nb": 806,
	"./nb.js": 806,
	"./ne": 807,
	"./ne.js": 807,
	"./nl": 808,
	"./nl-be": 809,
	"./nl-be.js": 809,
	"./nl.js": 808,
	"./nn": 810,
	"./nn.js": 810,
	"./pa-in": 811,
	"./pa-in.js": 811,
	"./pl": 812,
	"./pl.js": 812,
	"./pt": 813,
	"./pt-br": 814,
	"./pt-br.js": 814,
	"./pt.js": 813,
	"./ro": 815,
	"./ro.js": 815,
	"./ru": 816,
	"./ru.js": 816,
	"./sd": 817,
	"./sd.js": 817,
	"./se": 818,
	"./se.js": 818,
	"./si": 819,
	"./si.js": 819,
	"./sk": 820,
	"./sk.js": 820,
	"./sl": 821,
	"./sl.js": 821,
	"./sq": 822,
	"./sq.js": 822,
	"./sr": 823,
	"./sr-cyrl": 824,
	"./sr-cyrl.js": 824,
	"./sr.js": 823,
	"./ss": 825,
	"./ss.js": 825,
	"./sv": 826,
	"./sv.js": 826,
	"./sw": 827,
	"./sw.js": 827,
	"./ta": 828,
	"./ta.js": 828,
	"./te": 829,
	"./te.js": 829,
	"./tet": 830,
	"./tet.js": 830,
	"./tg": 831,
	"./tg.js": 831,
	"./th": 832,
	"./th.js": 832,
	"./tl-ph": 833,
	"./tl-ph.js": 833,
	"./tlh": 834,
	"./tlh.js": 834,
	"./tr": 835,
	"./tr.js": 835,
	"./tzl": 836,
	"./tzl.js": 836,
	"./tzm": 837,
	"./tzm-latn": 838,
	"./tzm-latn.js": 838,
	"./tzm.js": 837,
	"./ug-cn": 839,
	"./ug-cn.js": 839,
	"./uk": 840,
	"./uk.js": 840,
	"./ur": 841,
	"./ur.js": 841,
	"./uz": 842,
	"./uz-latn": 843,
	"./uz-latn.js": 843,
	"./uz.js": 842,
	"./vi": 844,
	"./vi.js": 844,
	"./x-pseudo": 845,
	"./x-pseudo.js": 845,
	"./yo": 846,
	"./yo.js": 846,
	"./zh-cn": 847,
	"./zh-cn.js": 847,
	"./zh-hk": 848,
	"./zh-hk.js": 848,
	"./zh-tw": 849,
	"./zh-tw.js": 849
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 851;

/***/ })

},[365]);
//# sourceMappingURL=main.js.map