import {PFieldBase} from "./fieldbase.model"

export class PSignature extends PFieldBase<string> {
  controlType = 'signature';
  type: string;
  icon : string;
  shownDetails : boolean;

  constructor(options: {} = {}) {
    super(options);
    this.type = options["type"];
    this.icon = options["icon"];
    this.shownDetails = options["shownDetails"];
  }
}
