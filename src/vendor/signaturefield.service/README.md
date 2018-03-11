SIGNATURE COMPONENT FOR ANGULAR 2.0.0
=================================

//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================


dependencies:
There's no dependency for this component.


for installing this component you have to do the following steps:

first of all you have to install it via npm :

   npm install angular2-signaturepad --save

A. if youre using in ionic2 you should add to the app module the following parts.

import { SignaturePadModule } from 'angular2-signaturepad'; // ADD THIS
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ADD THIS

//COMMON COMPONENTS
import {SignatureFieldComponent} from "../vendor/signature-field/psignature-field.component"; // ADD THIS



 @NgModule({
     imports:      [ BrowserModule ],
     declarations: [ AppComponent ,  SignatureFieldComponent], // ADD TO HERE
     bootstrap:    [ AppComponent ],
     imports :     [ SignaturePadModule,FormsModule,ReactiveFormsModule]  // ADD TO HERE
 })


NOTE: 
1. for use this component you have to make sure that you install it inside form
2. you have to define submit function in the parent
3. you have to define clear function in the parent 
4. you have to provide to it validation with form builder of angular 2.



CODE 
======

A.parent.html:

  <form [formGroup]="form" (submit)="submit()" >
    <div class="psignature-container">
    <psignature-field formControlName="pSignatureField"></psignature-field>
    <button ion-button color="light" type="button" (click)="clear()" [disabled]="!form.controls.pSignatureField.valid">Clear</button>
    <button ion-button color="light" type="submit" [disabled]="!form.valid">Submit</button>
    </div>
  </form>


B. parent.ts :

import { Component , ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms';
import { NavController } from 'ionic-angular';

// COMMON COMPONENTS
import {SignatureFieldComponent} from "../vendor/psignature-field/psignature-field.component";

@Component({
  selector: 'age-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private form: FormGroup;
  @ViewChildren(SignatureFieldComponent) public sigs: QueryList<SignatureFieldComponent>;
  

  constructor(public navCtrl: NavController , fb: FormBuilder) {
     this.form = fb.group({
      pSignatureField: ['', Validators.required]
    });
  }


  public submit() {
    console.log('CAPTURED SIGS:');
    console.log(this.sigs.first.signature);
  }

  public clear() {
    this.sigs.first.clear();
  }
}


C. you can add border

.psignature-container canvas {
  border-style: solid;
  border-width: 1px;
}
