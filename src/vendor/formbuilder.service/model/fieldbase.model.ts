export class PFieldBase<T>{
  value: T;
  key: string;
  label: string;
  labelA: string;
  required: boolean;
  order: number;
  controlType: string;
  display: string;
  hide: boolean;
  disabled: boolean;
  placeholder: string;
  onClick: string;
  onClickA: string;
  class: string;
  color: string;
  colorA: string;
  pattern: string;
  maxlength: string;
  filter: string;
  parentLookup:string;
  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    labelA?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    display?: string,
    hide?: boolean,
    disabled?: boolean,
    placeholder?: string,
    onClick?: string,
    onClickA?: string,
    class?: string,
    color?: string,
    colorA?: string,
    pattern?: string,
    maxlength?: string,
    filter?: string,
    parentLookup?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.labelA = options.labelA || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.display = options.display;
    this.hide = options.hide;
    this.disabled = options.disabled;
    this.placeholder = options.placeholder;
    this.onClick = options.onClick || '';
    this.onClickA = options.onClickA || '';
    this.class = options.class;
    this.color = options.color;
    this.colorA = options.colorA;
    this.pattern = options.pattern;
    this.maxlength = options.maxlength;
    this.filter = options.filter;
    this.parentLookup = options.parentLookup;
  }
}