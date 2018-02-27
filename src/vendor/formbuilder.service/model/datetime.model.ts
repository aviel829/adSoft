import {PFieldBase} from "./fieldbase.model"

export class PDateTime extends PFieldBase<Date> {
  controlType = 'Date';
  format: string;
  min : String;
  max: String;

  constructor(options: {} = {}) {
    super(options);
    this.format = 'MM/DD/YYYY H:mm';
    this.min = null;
    this.max= null;
  }

}