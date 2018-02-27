import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import {PToggle}         from '../../model/toggle.model';

@Component({
  selector: 'ptoggle',
  templateUrl: './ptoggel.component.html'
})
export class ToggleComponent {
  @Input() form: FormGroup;
  @Input() schema : PToggle;
  @Input() data : any;
  @Input() display : Boolean;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  ifCheck: boolean;
  get isValid() { return this.form.controls[this.schema["key"]].valid; }

  onModelChange(event){
    console.log("ptoggle change");
    this.change.emit(event);
  }

}