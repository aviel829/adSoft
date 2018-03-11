import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PLabel } from '../../model/label.model';

@Component({
  selector: 'label',
  templateUrl: './label.component.html'
})
export class LabelComponent {
  @Input() form: FormGroup;
  @Input() schema: PLabel;
  @Input() data: any;
  @Input() display: Boolean;
  //@Output() blur: EventEmitter<number> = new EventEmitter<number>();
 // get isValid() { return this.form.controls[this.schema.key].valid; }


}