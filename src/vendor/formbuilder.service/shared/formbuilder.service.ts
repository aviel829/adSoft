import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PFieldBase } from "../model/fieldbase.model";
import { PTextBox } from "../model/text-box.model";
import { PDropDown, SelectionsField } from "../model/dropdown.model";
import { PToggle } from "../model/toggle.model";
import { PNumberField } from "../model/numberfield.model";
import { PDateTime } from "../model/datetime.model";
import { PTextarea } from "../model/textarea.model";
import { PLabel } from "../model/label.model";

//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================

/**
  * FORM BUILDER SERVICE ANGULAR 2.0.0. 
**/
@Injectable()
export class FormBuilderService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getFormA() {
    let questions: PFieldBase<any>[] = [
      
      new PTextBox({
        key: 'lastname',
        label: 'Last name',
        value: '',
        required: true,
        order: 1,
        hide: false//true
      }),
      new PTextBox({
        key: 'firstname',
        label: 'First name',
        value: '',
        required: true,
        order: 2,
        display: {
          key: 'lastname',
          value: 'a'
        }
      }),
      new PDropDown({
        key: 'type',
        label: 'Type',
        selections: [new SelectionsField(1, "A"), new SelectionsField(2, "B"), new SelectionsField(2, "C")],
        required: true,
        order: 3
      }),
      new PToggle({
        key: 'truefalse',
        label: 'Yes/No',
        required: true,
        order: 7
      }),
      new PNumberField({
        key: 'number1',
        label: 'Number',
        value: 3359,
        required: true,
        order: 4
      }),
      new PDateTime({
        key: 'datetime1',
        label: 'DateTime',
        value: new Date(),
        required: true,
        order: 5
      }),
      new PTextarea({
        key: 'textarea',
        label: 'example textarea',
        required: true,
        order: 6,
        rows: 6
      }),
       new PLabel({
        key: 'label',
        label: 'this label',
         order: 7,
        hide: false//true
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }


  toFormGroup(questions: PFieldBase<any>[]) {
    let group: any = {};

    if(!questions){
      return new FormGroup(group);
    }

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }


}