import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import {PDateTime}         from '../../model/datetime.model';

@Component({
  selector: 'datetime',
  templateUrl: './datetime.component.html'
})
export class DateTimeComponent {
  @Input() form: FormGroup;
  @Input() schema : PDateTime;
  @Input() data : any;
  @Input() display : Boolean;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  get isValid() { return this.form.controls[this.schema["key"]].valid; }

  onModelChange(event){
    console.log("pdate-time change");
    this.change.emit(event);
  }

}