LOGGER FOR ANGULAR 2.0.0
=================================

//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================


dependencies:
 A. angular2-logger.


for installing this component you have to do the following steps:
 A. Open command line on the root of this folder.
 B. npm install --save angular2-logger.
 C. if youre using in ionic2 you should add to the app module the following parts.

 import { NgModule }      from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
 import { AppComponent }  from './app.component';
 import { Logger , LOG_LOGGER_PROVIDERS } from "angular2-logger/core"; // ADD THIS
 import { Logger } from "../vendor/logger"; //ADD THIS


 @NgModule({
     imports:      [ BrowserModule ],
     declarations: [ AppComponent ],
     bootstrap:    [ AppComponent ],
     providers:    [ Logger ,  LOG_LOGGER_PROVIDERS  , Logger ] // AND THIS
 })



 




    
