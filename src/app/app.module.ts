import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Dialogs } from '@ionic-native/dialogs';
// import { Logger } from "angular2-logger/core";
import { LOG_LOGGER_PROVIDERS } from "angular2-logger/app/core/providers"; // fix build error resolving symbol values statically
import { SignaturePadModule } from 'angular2-signaturepad';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import { CloudSettings, CloudModule, CloudSettingsToken } from '@ionic/cloud-angular';
import { OneSignal } from '@ionic-native/onesignal';
import { Geolocation } from '@ionic-native/geolocation';

//VENDOR
import { Logger } from "../vendor/logger.service/logger.service";
import { DataService } from '../vendor/data.service/data.service';
import { DemoService } from '../vendor/demo.service/demo.service';
import { UserService } from '../vendor/user.service/user.service';
import { Alert } from '../vendor/alert.service/alert.service';
import { DialogService } from '../vendor/dialog.service/dialog.service';
import { Toast } from '../vendor/toast.service/toast.service';
import { LocalStorageService } from '../vendor/localstorage.service/localstorage.service';
import { LookupService } from '../vendor/lookup.service/lookup.service';
import { EventService } from '../vendor/event.service/event.service';
import { AuthService } from '../vendor/auth.interceptor/auth.service';
import { AdalService } from "../vendor/adal.service/adal.service";
import { FormBuilderService } from "../vendor/formbuilder.service/shared/formbuilder.service";
import { ValuesPipe } from "../vendor/iterator.pipe/iterator.pipe";
import { NotificationService } from '../vendor/notification.service/notification.service';
import { NetworkService }       from '../vendor/network/network.service';
import { Modal } from "../vendor/modal.service/modal.component";
import { ModalService } from "../vendor/modal.service/modal.service";
import { SignatureFieldComponent } from "../vendor/signaturefield.service/signaturefield.component";
import { FormBuilder } from "../vendor/formbuilder.service/formbuilder.component";
import { CustomerSignatureComponent } from "../vendor/formbuilder.service/fields/customersignature/customersignature.component";
import { TextBoxComponent } from "../vendor/formbuilder.service/fields/textbox/textbox.component";
import { DropDownComponent } from "../vendor/formbuilder.service/fields/dropdown/dropdown.component";
import { DropDownFilteredComponent, MyFilterPipe } from "../vendor/formbuilder.service/fields/dropdownfiltered/dropdownfiltered.component";
import { ToggleComponent } from "../vendor/formbuilder.service/fields/toggle/toggel.component";
import { NumberFieldComponent } from "../vendor/formbuilder.service/fields/numberfield/numberfield.component";
import { DateTimeComponent } from "../vendor/formbuilder.service/fields/datetime/datetime.component";
import { TextareaComponent } from "../vendor/formbuilder.service/fields/textarea/textarea.component";
import { ButtonComponent } from "../vendor/formbuilder.service/fields/button/button.component";
import { EngineeringTestComponent } from '../vendor/formbuilder.service/fields/engineeringtest/engineeringtest.component';
import { LabelComponent } from "../vendor/formbuilder.service/fields/label/label.component";
import { httpFactory } from "../vendor/auth.interceptor/auth.factory";
import { HttpModule } from '@angular/http/src/http_module';
import { Http } from '@angular/http/src/http';
import { XHRBackend } from '@angular/http/src/backends/xhr_backend';
import { RequestOptions } from '@angular/http/src/base_request_options';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // CloudModule.forRoot(CloudSettingsToken),
    HttpModule,
    SignaturePadModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CustomerSignatureComponent,
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: "he-IL" },
    DataService,
    DemoService,
    UserService,
    Dialogs,
    DialogService,
    Alert,
    Toast,
    Logger,
    LOG_LOGGER_PROVIDERS,
    Logger,
    AuthService,
    AdalService,
    FormBuilderService,
    LocalStorageService,
    NetworkService,
    LookupService,
    EventService,
    NotificationService,
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, LocalStorageService]
    }
  ]
})
export class AppModule { }
