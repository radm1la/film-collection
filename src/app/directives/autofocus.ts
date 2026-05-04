import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',standalone: true
})
export class Autofocus implements AfterViewInit {

  constructor(private el:ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
