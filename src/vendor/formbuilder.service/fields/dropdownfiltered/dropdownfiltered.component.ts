import { Component, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PDropDownFilter } from '../../model/dropdownfiltered.model';
import { LookupService } from '../../../../vendor/lookup.service/lookup.service';
import { EventService } from '../../../../vendor/event.service/event.service';


@Component({
  selector: 'dropdownfiltered',
  templateUrl: './dropdownfiltered.component.html'
})
export class DropDownFilteredComponent {
  @Input() form: FormGroup;
  @Input() schema: PDropDownFilter;
  @Input() data: any;
  @Input() display: Boolean;
  LookupService: LookupService;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  get isValid() { return this.form.controls[this.schema["key"]].valid; }


  //pipe example
  testObject: Array<any> = [];
  filterObject: Array<any> = [];
  iraModel: any;
  parentSelected: any;

  constructor(private _LookupService: LookupService, private EventService: EventService) {
    this.LookupService = _LookupService;
  }



 getFilterKey(lookupName :any ,  filteredId :any) {

   if(!this._LookupService.lookups[lookupName]){
     return;
   }

    let curFilterObject =  this._LookupService.lookups[lookupName].find(item => item.id === filteredId);
    if(curFilterObject) {
      return curFilterObject.filterKey;
    }
  }


  onModelChange(event) {
    //console.log("pdrop-down-filtered change");
  }
}



@Pipe({ name: 'myfilter', pure: false })
export class MyFilterPipe {
   constructor(private _LookupService: LookupService) {

  }
  transform(data: Array<any>,  filter : any): Array<any> {
    
    let  newData = data.filter(item => item.filterKey === filter);
    if(newData.length === 0) {
      return data;
    }
    return newData;
  }
}