import {PFieldBase} from "./fieldbase.model"

export class PButton extends PFieldBase<string> {
  controlType = 'button';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = 'button';
  }

}