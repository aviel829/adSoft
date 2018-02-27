DIALOG SERVICE FOR ANGULAR 2.0.0
=================================

//=======================================================================
//===================== CREATED BY AVIEL ISRAELI ==============
//=======================================================================

dependencies:
 A. DIALOG.


for installing this component you have to do the following steps:
A. if youre using in ionic2 you should add to the app module the following parts.

 import { Injectable } from '@angular/core';
import { Logger } from '../Logger/Logger.service'
import { Dialogs } from '@ionic-native/dialogs';


 @NgModule({
     imports:      [ BrowserModule ],
     declarations: [ AppComponent ],
     bootstrap:    [ AppComponent ],
     imports :     [HttpModule]
 })


