import {PFieldBase} from "./fieldbase.model"

export class PLabel extends PFieldBase<string> {
  controlType = 'label';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = 'label';
  }

}