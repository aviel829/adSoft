import { Component , ViewChildren, QueryList , Input, OnInit } from '@angular/core';
import {  FormGroup }  from '@angular/forms';
import { NavController, NavParams , ViewController } from 'ionic-angular';
import {SignatureFieldComponent} from "../../../../vendor/signaturefield.service/signaturefield.component";
import * as $ from 'jquery';

@Component({
  selector: 'pcustomer-signature',
  templateUrl: './pcustomer-signature.component.html'
})
export class CustomerSignatureComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() schema : any;
  @Input() data : any;
  @ViewChildren(SignatureFieldComponent) public sigs: QueryList<SignatureFieldComponent>;

  //private form: FormGroup;

 constructor(public navCtrl: NavController , public navParams: NavParams , private viewCtrl : ViewController) {
   
  }

  ngOnInit(){
   
  }


  toggleDetails(data) {
    if (data.showDetails) {
       $("."+data.class).slideToggle("slow");
        data.showDetails = false;
        data.icon = 'arrow-dropdown';     
    } else {
       $("."+data.class).slideToggle("slow");
        data.showDetails = true;
        data.icon = 'arrow-dropup';
        
    }
  }

public submit() {
    console.log('CAPTURED SIGS:');
    console.log(this.sigs.first.signature);
    this.data[this.schema.key] = this.sigs.first.signature;
  }

  public clear() {
    this.sigs.first.clear();
  }



   dismiss() {
    this.viewCtrl.dismiss();
  }

}
