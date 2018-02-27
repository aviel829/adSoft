import {PFieldBase} from "./fieldbase.model"

export class SelectionsField {
  id : number; 
  value : string;

  constructor (_id : number , _value : string) {
    this.id = _id;
    this.value = _value;
  }

}

export class PDropDown extends PFieldBase<string> {
  controlType = 'drop-down';
  type: string;
  selections: SelectionsField;
  lookupName : string;

  constructor(options: {} = {}) {
    super(options);
    this.type = 'select';
    this.lookupName = options["lookupName"];
    this.selections = options["selections"] || [];
  }

}