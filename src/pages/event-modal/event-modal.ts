import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the EventModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {

  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false, title: '' };
  minDate = new Date().toISOString();

  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    let editMode = this.navParams.get('editMode');

    if (editMode) {
      this.event.startTime = moment(this.navParams.get('startTime')).format();
      this.event.endTime = moment(this.navParams.get('endTime')).format();
      this.event.title = this.navParams.get('title');
    }
    else {
      this.event.startTime = preselectedDate;
      this.event.endTime = preselectedDate;
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.event);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventModalPage');
  }

}
