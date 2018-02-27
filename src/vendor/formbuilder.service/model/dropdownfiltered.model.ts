import {PFieldBase} from "./fieldbase.model"

export class SelectionsField {
  id : number; 
  value : string;

  constructor (_id : number , _value : string) {
    this.id = _id;
    this.value = _value;
  }

}

export class PDropDownFilter extends PFieldBase<string> {
  controlType = 'drop-down-filter';
  type: string;
  selections: SelectionsField;
  lookupName : string;
  parentLookup: string;
  filter: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = 'select';
    this.lookupName = options["lookupName"];
    this.filter = options["filter"];
    this.parentLookup = options["parentLookup"];
    this.selections = options["selections"] || [];
  }

}