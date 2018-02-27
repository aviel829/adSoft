MODAL SERVICE FOR ANGULAR 2.0.0
=================================
[modal view]: (https://ionicframework.com/docs/api/components/modal/ModalController/) , (https://www.tutorialsplane.com/ionic-2-modals/) -> Example: (http://tutorialsplane.com/runtest/ionic/try.php?trycode=ionic-2-modals&post_code=code9&full=)

//=======================================================================
//===================== CREATED BY AVIEL ISRAELI ==============
//=======================================================================

dependencies:
 A. DIALOG.


for installing this component you have to do the following steps:
A. if youre using in ionic2 you should add to the app module the following parts.

import { Injectable } from '@angular/core';
import { Logger } from "angular2-logger/core";
import { ModalController, Platform, ViewController } from 'ionic-angular';


 @NgModule({
     imports:      [ BrowserModule ],
     declarations: [ AppComponent ],
     bootstrap:    [ AppComponent ],
     imports :     [HttpModule]
 })


