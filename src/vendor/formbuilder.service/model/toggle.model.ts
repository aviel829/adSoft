import {PFieldBase} from "./fieldbase.model"

export class PToggle extends PFieldBase<string> {
  controlType = 'toggle';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = 'toggle';
  }
}