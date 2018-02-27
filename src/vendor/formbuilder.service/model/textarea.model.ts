import {PFieldBase} from "./fieldbase.model"

export class PTextarea extends PFieldBase<string> {
  controlType = 'textarea';
  type: string;
  rows : number;

  constructor(options: {} = {}) {
    super(options);
    this.type = 'textarea';
    this.rows = 6;
  }

}