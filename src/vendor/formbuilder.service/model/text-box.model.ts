import {PFieldBase} from "./fieldbase.model"

export class PTextBox extends PFieldBase<string> {
  controlType = 'text-box';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = 'text';
  }

}