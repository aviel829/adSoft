import { Injectable } from '@angular/core';
import { Logger } from '../logger.service/logger.service'
import { Dialogs } from '@ionic-native/dialogs';

/**
  * DIALOG SERVICE FOR ANGULAR 2.0.0. 
**/
@Injectable()
export class DialogService {
    logger: Logger;
    dialog: Dialogs;

    constructor(private dialogs: Dialogs, _logger: Logger) {
        this.dialog = dialogs;
        this.logger = _logger;
    }

    alert(message, title, buttonName) {
        this.dialogs.alert(message, title, buttonName)
            .then(() => console.log('Dialog dismissed: ' + message))
            .catch(e => console.log('Error displaying dialog', e));
    }

    confirm(message, title, buttonLables) {
       return this.dialogs.confirm(message, title, buttonLables)
            .then((result) => {
            console.log('Confirm dismissed: ' + message);
            return  Promise.resolve(result);
            } , (err)=> {
            return Promise.reject(err);
            });
           

    }

    prompt(message, title, buttonLabels, defaultText) {
        this.dialogs.prompt(message, title, buttonLabels, defaultText)
            .then(() => console.log('Prompt dismissed: ' + message))
            .catch(e => console.log('Error displaying dialog', e));
    }

}