import { Component, ViewChild, forwardRef , Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SignaturePad }                            from 'angular2-signaturepad/signature-pad';

//=======================================================================
//===================== CREATED BY AVIEL ISRAELI=================
//=======================================================================


// SIGNATURE COMPONENT
@Component({
  selector: 'psignature-field',
  templateUrl: 'psignature-field.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignatureFieldComponent),
      multi: true,
    },
  ],
})
export class SignatureFieldComponent implements ControlValueAccessor {
  @ViewChild(SignaturePad) public signaturePad: SignaturePad;
  @Input() public data : string;
  public options: Object = {};

  public _signature: any = null;

  public propagateChange: Function = null;

  get signature(): any {
    return this._signature;
  }


  set signature(value: any) {
    this._signature = value;
    console.log('set signature to ' + this._signature);
    this.propagateChange(this.signature);
  }

  public writeValue(value: any): void {
    if (!value) {
      return;
    }
    this._signature = value;
    this.signaturePad.fromDataURL(this.signature);
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(): void {
    // no-op
  }

  public ngAfterViewInit(): void {
    this.signaturePad.clear();
    this.signaturePad.set('penColor', 'rgb(0,0,0)');
    if(this.data) { 
    this.signature = this.data;
    this.signaturePad.fromDataURL(this.data);
    }
}

  public drawBegin(): void {
    console.log('Begin Drawing');
  }

  public drawComplete(): void {
    this.signature = this.signaturePad.toDataURL('image/png', 0.5);
  }

  public clear(): void {
    this.signaturePad.clear();
    this.signature = '';
  }
}
