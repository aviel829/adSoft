import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PTextarea } from '../../model/textarea.model';

@Component({
  selector: 'ptextarea',
  templateUrl: './ptextarea.component.html'
})
export class TextareaComponent {
  @Input() form: FormGroup;
  @Input() schema: PTextarea;
  @Input() data: any;
  @Input() display: Boolean;
  @Output() blur: EventEmitter<number> = new EventEmitter<number>();
  get isValid() { return this.form.controls[this.schema["key"]].valid; }

  getRows() {
    return this.schema.rows;
  }

   onBlur(event){
    this.blur.emit(event);
  }
}