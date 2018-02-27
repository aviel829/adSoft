import { Component , Input  } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'Modal',
  templateUrl: 'Modal.component.html'
})
export class Modal {

  @Input() component : any;
  @Input() params : any;
  
  constructor(public navParams: NavParams , private modalCtrl : ModalController , private viewCtrl : ViewController ) {
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(this.component, this.params);
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
