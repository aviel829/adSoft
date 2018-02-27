import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { DataService } from '../../vendor/data.service/data.service';

// FEVELOPMENT
import { FormBuilderService } from '../formbuilder.service/shared/formbuilder.service';
import { PFieldBase } from './model/fieldbase.model';

@Component({
  selector: 'pform-builder',
  templateUrl: 'pform-builder.component.html'
})
export class FormBuilder {

  @Input() fields: PFieldBase<any>[] = [];
  @Input() data: any = {};
  @Input() item: any = {};
  // @Input() test : any;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  form: FormGroup;
  payLoad = '';


  constructor(public navCtrl: NavController,  public navParams: NavParams, private formBuilderService: FormBuilderService, private DataService: DataService, public viewCtrl: ViewController) {

  }

  ngOnInit() {
    //this.fieldsSchema = this.formBuilderService.getFormA();
    console.log(this.fields);
    this.form = this.formBuilderService.toFormGroup(this.fields);
  }

  onBlur(event){
    console.log(JSON.stringify(event));
    this.change.emit(event);
  }



  // doTest(){
  //   console.log("Do testttt start");
  //     this.workOrdersService.saveTest();
  //     console.log("Do test end");
  // }

  saveItemOfWorkOrders(){
    console.log("Do testttt start");
      console.log("Do test end");
  }

  onSubmit() {
    console.log(this.data);
    this.payLoad = JSON.stringify(this.form.value);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  checkDisplay(field) {
    if (field.hide && field.hide === true) {
      return false;
    }
    if (field.display) {
      if (field.display.value === this.form.get(field.display.key).value) {
        return true;
      }
      return false;
    }
    else {
      return true;
    }
  }
}
