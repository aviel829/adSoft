DATA SERVICE FOR ANGULAR 2.0.0
=================================

dependencies:
 A. LOGGER.


for installing this component you have to do the following steps:
A. if youre using in ionic2 you should add to the app module the following parts.

 import { NgModule }      from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
 import { AppComponent }  from './app.component';
 import { HttpModule } from '@angular/http'; ADD THIS


 @NgModule({
     imports:      [ BrowserModule ],
     declarations: [ AppComponent ],
     bootstrap:    [ AppComponent ],
     imports :     [HttpModule]
 })


