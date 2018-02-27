import { Injectable } from '@angular/core';
import { Logger } from '../logger.service/logger.service'
import { ToastController } from 'ionic-angular';

/**
  * DIALOG SERVICE FOR ANGULAR 2.0.0. 
**/
@Injectable()
export class Toast {
    logger: Logger;
    toast: ToastController;
    

    constructor(private _logger: Logger, public toastCtrl: ToastController) {
        this.logger = _logger;
        this.toast = toastCtrl;
    }

showToast(message) {
  this.toast.create({
    message: message,
    duration: 3000,
    position: 'bottomA'
  });
    this.logger.info('Toast message: ' + message);
}

}