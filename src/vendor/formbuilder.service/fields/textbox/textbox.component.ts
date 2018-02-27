import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PTextBox } from '../../model/text-box.model';

@Component({
  selector: 'ptext-box',
  templateUrl: './ptext-box.component.html'
})
export class TextBoxComponent {
  @Input() form: FormGroup;
  @Input() schema: PTextBox;
  @Input() data: any;
  @Input() display: Boolean;
  // @Input() test : any;
  @Output() blur: EventEmitter<number> = new EventEmitter<number>();
  get isValid() { return this.form.controls[this.schema["key"]].valid; }

  onBlur(event){
    this.blur.emit(event);
  }
}