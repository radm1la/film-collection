import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',standalone: true
})
export class Autofocus {

  constructor(private el:ElementRef) { }

  ngafterViewInit() {
    this.el.nativeElement.focus();
  }
}
