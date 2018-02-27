import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PNumberField } from '../../model/numberfield.model';

@Component({
  selector: 'pnumber-field',
  templateUrl: './pnumber-field.component.html'
})
export class NumberFieldComponent {
  @Input() form: FormGroup;
  @Input() schema: PNumberField;
  @Input() data: any;
  @Input() display: Boolean;
  @Output() blur: EventEmitter<number> = new EventEmitter<number>();
  get isValid() { return this.form.controls[this.schema["key"]].valid; }

  pattern: any;

  onBlur(event) {
    this.blur.emit(event);
  }

  _keyPress(event: any) {
    if (this.schema["schema"]) {
      let inputChar = String.fromCharCode(event.charCode);
      const _pattern = RegExp(this.schema["pattern"]);
      if (!_pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
    }

  }
}