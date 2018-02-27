import { Injectable } from '@angular/core';
import { Logger } from '../logger.service/logger.service';
import { AlertController } from 'ionic-angular';

/**
  * DIALOG SERVICE FOR ANGULAR 2.0.0. 
**/
@Injectable()
export class Alert {
    logger: Logger;

    constructor(public alertCtrl: AlertController, _logger: Logger) {
        this.logger = _logger;
    }

     showAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['אישור']
    });
    alert.present();
  }


  showConfirm(title, message) {

 return new Promise((resolve, reject) => {

      let alert = this.alertCtrl.create({
        title:title,
        message:message,  
        buttons: [{
          text: 'אישור',
          handler: () => {
             resolve(true); 
        
          }
        }, 
        {
           text:'ביטול',
           handler: () => {
              resolve(false)
              
           } 
        }]
      });

      alert.present();
    });

  }

showPrompt() {
    let prompt = this.alertCtrl.create({
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
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}