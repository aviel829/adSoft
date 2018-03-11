import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PEngineeringTest } from '../../model/engineeringtest.model';
import { ENV } from '../../../../env/environment.dev';
import { DataService } from '../../../../vendor/data.service/data.service';
import { LocalStorageService } from '../../../../vendor/localstorage.service/localstorage.service';
import { Alert } from '../../../../vendor/Alert.service/Alert.service';
import { Toast } from '../../../../vendor/Toast.service/Toast.service';
import { DemoService } from '../../../../vendor/demo.service/demo.service';
import { EventService } from '../../../../vendor/event.service/event.service';

@Component({
  selector: 'engineeringtest',
  templateUrl: './engineeringtest.component.html'
})
export class EngineeringTestComponent {
  @Input() form: FormGroup;
  @Input() schema: PEngineeringTest;
  @Input() data: any;
  @Input() display: Boolean;
  @Input() item: any;

  constructor(private DataService: DataService, private pevent: EventService, private Alert: Alert, private plocalstorage: LocalStorageService, private Toast: Toast, private DemoService: DemoService) { }

  //@Output() blur: EventEmitter<number> = new EventEmitter<number>();
  get isValid() { return this.form.controls[this.schema["key"]].valid; }

  sendData(id, data) {
    console.log("sendData Function: id - " + data.id + ' data - ' + data);

  }

  openUrl(data) {
    console.log("openUrl Function");
    
  }

  onClick(func, data, item) {
    console.log(func);
    if (func === "sendData") {
      this.sendData(item.id, data);
    }
    else if (func === "openUrl") {
      this.openUrl(data);
    }
    else {
      console.log("default");
    }
  }
}