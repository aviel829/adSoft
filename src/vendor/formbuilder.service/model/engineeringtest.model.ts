import {PFieldBase} from "./fieldbase.model"

export class PEngineeringTest extends PFieldBase<string> {
  controlType = 'engineeringtest';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = 'engineeringtest';
  }

}