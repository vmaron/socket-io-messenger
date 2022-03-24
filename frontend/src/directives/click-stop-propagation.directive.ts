import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appClickStopPropagation]'
})
// tslint:disable-next-line:directive-class-suffix
export class ClickStopPropagation
{
  @HostListener('click', ['$event'])
  public onClick(event: any): void
  {
    event.stopPropagation();
  }
}
