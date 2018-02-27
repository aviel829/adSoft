import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PButton } from '../../model/button.model';
import { DataService } from '../../../../vendor/data.service/data.service';
import { LocalStorageService } from '../../../../vendor/localstorage.service/localstorage.service';
import { Alert } from '../../../../vendor/alert.service/alert.service';

@Component({
  selector: 'pbutton',
  templateUrl: './pbutton.component.html'
})
export class ButtonComponent {
  @Input() form: FormGroup;
  @Input() schema: PButton;
  @Input() data: any;
  @Input() display: Boolean;
  @Input() item: any;

  constructor(private DataService: DataService, private plocalstorage: LocalStorageService, private Alert: Alert) { }

  //@Output() blur: EventEmitter<number> = new EventEmitter<number>();
  get isValid() { return this.form.controls[this.schema["key"]].valid; }

  sendData(id, data) {
    console.log("sendData Function: id - " + data.id + ' data - ' + data);
  }

  openUrl() {
    console.log("openUrl Function");
  }

  onClick(func, data, item) {
    console.log(func);
    switch (func) {
      case 'sendData':
        this.sendData(item.id, data);
      case 'openUrl':
        this.openUrl();
      default:
        console.log("default");
    }
  }
}