import {PFieldBase} from "./fieldbase.model"

export class PNumberField extends PFieldBase<number> {
  controlType = 'number';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = 'number';
  }

}