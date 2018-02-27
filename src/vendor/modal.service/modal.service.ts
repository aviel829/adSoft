import { Injectable } from '@angular/core';
//import { Logger } from "angular2-logger/core";
import { ModalController, Platform } from 'ionic-angular';

//=======================================================================
//===================== CREATED BY AVIEL ISRAELI =================
//=======================================================================

/**
  * ModalService FOR ANGULAR 2.0.0. 
**/
@Injectable()
export class ModalService {

 /**
  * logger constructor() 
  **/
 constructor(public modalCtrl: ModalController, public platform: Platform) {
 }   



 open(component : any , params? : any) {
    let modal = this.modalCtrl.create(component,params);
    modal.present();
 }

}