import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import {PDropDown}         from '../../model/dropdown.model';
import { LookupService } from '../../../../vendor/lookup.service/lookup.service';
import { EventService } from '../../../../vendor/event.service/event.service';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropDownComponent {
  @Input() form: FormGroup;
  @Input() schema : PDropDown;
  @Input() data : any;
  @Input() display : Boolean;
  LookupService : LookupService;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  get isValid() { return this.form.controls[this.schema["key"]].valid; }

  constructor(private _LookupService : LookupService, private EventService : EventService){
    this.LookupService = _LookupService;
  }

  onModelChange(event){
    //console.log("pdrop-down change");
    //this.EventService.broadcast("on-change-dropdown", event);
    //this.change.emit(event);
  }
  
}